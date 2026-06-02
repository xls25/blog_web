import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { RegistrationModule } from './modules/registration/registration.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [RegistrationModule],
})
export class AppModule {}
