import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { RegistrationModule } from './modules/registration/registration.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [AuthModule, RegistrationModule],
})
export class AppModule {}
