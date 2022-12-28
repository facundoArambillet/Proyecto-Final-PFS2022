import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/usuario.entity';
import { RolController } from './rol.controller';
import Rol from './rol.entity';
import { RolService } from './rol.service';

@Module({
  imports : [
    TypeOrmModule.forFeature(
      [
        Rol,Usuario
      ]
    )
  ],
  controllers: [RolController],
  providers: [RolService]
})
export class RolModule {}
