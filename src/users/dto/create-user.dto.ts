import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'usuario@email.com' })
  @IsEmail({}, { message: 'El email no es válido' })
  email: string;

  @ApiProperty({ example: 'MiSuperPassword123' })
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(50)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'La contraseña es muy débil (requiere mayúscula, minúscula y número/caracter especial)',
  })
  password: string;

  @ApiProperty({ example: 'juanperez' })
  @IsString()
  @MinLength(3)
  username: string;

  @ApiProperty({ example: 'Juan Pérez' })
  @IsString()
  @MinLength(3)
  fullName: string;
}
