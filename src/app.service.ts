import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  public sendTestMail(): void {
    const GUEST = this.configService.get('EMAIL_GUEST');
    this.mailerService
      .sendMail({
        to: GUEST,
        subject: '✔️ Testing Nest MailerModule.',
        text: 'Welcome.',
        html: '<b>welcome</b>',
      })
      .then((success) => {
        this.logger.log(success);
      })
      .catch((error) => {
        this.logger.error(error);
      });
  }

  public sendTestMail2(): void {
    const GUEST = this.configService.get('EMAIL_GUEST');
    this.mailerService
      .sendMail({
        to: GUEST,
        subject: '✔️ Testing Nest Mailermodule with template',
        template: 'index',
        context: {
          code: 'cf1asdkf',
          username: 'john doe',
        },
      })
      .then((success) => {
        this.logger.log(success);
      })
      .catch((error) => {
        this.logger.error(error);
      });
  }
}
