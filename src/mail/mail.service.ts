import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { User } from '../users/entities/user.entity';

@Injectable()
export class MailService {
  private resend: Resend;
  private readonly logger = new Logger(MailService.name);

  constructor(private configService: ConfigService) {
    this.resend = new Resend(this.configService.get('RESEND_API_KEY'));
  }

  async sendWelcomeEmail(user: Pick<User, 'email' | 'username' | 'fullName'>) {
    try {
      await this.resend.emails.send({
        from: 'Mired Social <onboarding@resend.dev>', // Debes verificar tu dominio en Resend para usar uno propio
        to: user.email,
        subject: '¡Bienvenido a Mired Social!',
        html: `
          <h1>Hola ${user.fullName},</h1>
          <p>Gracias por registrarte en <strong>Mired Social</strong>. Estamos emocionados de tenerte aquí.</p>
          <p>Tu nombre de usuario es: <strong>${user.username}</strong></p>
          <br>
          <p>Saludos,<br>El equipo de Mired Social</p>
        `,
      });
      this.logger.log(`Email de bienvenida enviado a ${user.email}`);
    } catch (error) {
      this.logger.error(`Error enviando email a ${user.email}`, error);
    }
  }

  // Placeholder para el futuro Forgot Password
  async sendPasswordResetEmail(user: User, token: string) {
    // TODO: Implementar lógica de envío de token
  }
}
