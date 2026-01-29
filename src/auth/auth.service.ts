import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailService: MailService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    // Enviar correo de bienvenida asincrónicamente (no bloquea la respuesta)
    this.mailService.sendWelcomeEmail(user);
    return user;
  }

  // TODO: Implementar login, validateUser, etc.
}
