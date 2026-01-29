import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      // 1. Encriptar la contraseña
      const { password, ...userData } = createUserDto;
      const hashedPassword = await bcrypt.hash(password, 10);

      // 2. Crear la instancia del usuario
      const user = this.userRepository.create({
        ...userData,
        password: hashedPassword,
      });

      // 3. Guardar en Base de Datos
      await this.userRepository.save(user);

      // 4. Retornar usuario SIN password (usando desestructuración)
      const { password: _, ...result } = user;
      return result;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOneByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password', 'username', 'roles', 'isActive'], // Seleccionamos password explícitamente para Auth
    });
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(
        'El usuario ya existe (email o username duplicado)',
      );
    }
    console.log(error);
    throw new InternalServerErrorException('Please check server logs');
  }
}
