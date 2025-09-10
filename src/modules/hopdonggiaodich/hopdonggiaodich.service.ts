import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { HopDongGiaoDich, HopDongStatus } from './entities/hopdonggiaodich.entity';
// import { XacThucHopDong } from './entities/xacthuchopdong.entity';
// import { Account } from './entities/account.entity';
import * as nodemailer from 'nodemailer';
import { HopDongGiaoDich, HopDongStatus } from 'src/entities/hopdonggiaodich.entity';
import { XacThucHopDong } from 'src/entities/xacthuchopdong.entity';
import { Account } from 'src/entities/account.entity';

@Injectable()
export class HopdonggiaodichService {
  constructor(
    @InjectRepository(HopDongGiaoDich)
    private readonly hopDongRepo: Repository<HopDongGiaoDich>,
    @InjectRepository(XacThucHopDong)
    private readonly xacThucRepo: Repository<XacThucHopDong>,
    @InjectRepository(Account)
    private readonly accountRepo: Repository<Account>,
  ) {}

  // Tạo hợp đồng và sinh OTP
  async taoHopDong(data: {
    nguoi_mua_id: number;
    nguoi_ban_id: number;
    thong_tin: string;
    phe_thai_ban_id: number;
  }) {
    const hopDong = this.hopDongRepo.create({
      nguoiMua: { id: data.nguoi_mua_id },
      nguoiBan: { id: data.nguoi_ban_id },
      thong_tin: data.thong_tin,
      status: HopDongStatus.CHO_KY,
      pheThaiBan: { id: data.phe_thai_ban_id },
    });
    await this.hopDongRepo.save(hopDong);

    // Tạo OTP cho người mua và người bán
    await this.taoOtp(hopDong.id, data.nguoi_mua_id);
    await this.taoOtp(hopDong.id, data.nguoi_ban_id);

    return hopDong;
  }

  private async taoOtp(hopDongId: number, accountId: number) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 số
    const expiredAt = new Date(Date.now() + 5 * 60 * 1000); // 5 phút
    const xacThuc = this.xacThucRepo.create({
      hopDong: { id: hopDongId },
      account: { id: accountId },
      otp_code: otp,
      otp_expired_at: expiredAt,
    });
    await this.xacThucRepo.save(xacThuc);

    // Gửi email
    const account = await this.accountRepo.findOneBy({ id: accountId });
    await this.sendEmail(account.email, otp);
  }

  private async sendEmail(email: string, otp: string) {
    // Sử dụng nodemailer, giả sử bạn đã cấu hình SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: 'minhtrivo2005gg@gmail.com', pass: 'wprt rjgq nlho lgay' },
    });
    await transporter.sendMail({
      from: '"VietCycle" <no-reply@vietcycle.com>',
      to: email,
      subject: 'OTP Xác Thực Hợp Đồng',
      text: `Mã OTP của bạn là: ${otp}, có hiệu lực 5 phút.`,
    });
  }

  // Xác thực OTP
  async xacThucOtp(hopDongId: number, accountId: number, otp: string) {
    const record = await this.xacThucRepo.findOne({
      where: { hopDong: { id: hopDongId }, account: { id: accountId }, otp_code: otp },
    });
    if (!record) throw new BadRequestException('OTP không hợp lệ');

    if (record.is_verified) throw new BadRequestException('OTP đã được xác thực');
    if (new Date() > record.otp_expired_at) throw new BadRequestException('OTP đã hết hạn');

    record.is_verified = true;
    record.verified_at = new Date();
    await this.xacThucRepo.save(record);

    // Kiểm tra nếu cả người mua và người bán đã xác thực, đổi trạng thái hợp đồng
    const xacThucAll = await this.xacThucRepo.find({ where: { hopDong: { id: hopDongId } } });
    if (xacThucAll.every(x => x.is_verified)) {
      const hopDong = await this.hopDongRepo.findOneBy({ id: hopDongId });
      hopDong.status = HopDongStatus.CO_HIEU_LUC;
      await this.hopDongRepo.save(hopDong);
    }

    return { success: true };
  }
    async findAll(): Promise<HopDongGiaoDich[]> {
      const hopDongList = await this.hopDongRepo.find({ relations: ['pheThaiBan'] });
      return hopDongList.map(hd => ({
        ...hd,
        phe_thai_ban_id: hd.pheThaiBan.id,
      }));
    }



}
