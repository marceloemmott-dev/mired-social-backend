import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // 1. Configuración de Variables de Entorno
    ConfigModule.forRoot({
      isGlobal: true, // Disponible en todo el proyecto sin re-importar
    }),

    // 2. Conexión a Base de Datos (PostgreSQL)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true, // Carga automática de entidades 
        synchronize: true,      // SOLO EN DESARROLLO: Crea/Actualiza tablas automáticamente
        ssl: {
          rejectUnauthorized: false, // Necesario para conexiones seguras (Neon/Railway) sin certificados propios complejos
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
