import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('/sign-up')
  signUpUser(@Body() newUser: CreateRegistrationDto){

  }
}
