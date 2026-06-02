import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@Controller('api/auth')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('reg')
  async signUpUser(@Body() newUser: CreateRegistrationDto) {
    return this.registrationService.register(newUser);
  }
}
