import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { NewUserInterface } from './interfaces/new-user.interface';
import * as bcrypt from 'bcrypt';


@Injectable()
export class RegistrationService {
  constructor(private prisma: PrismaService) {}

  private async findByEmail(email: string) {
    return !!(await this.prisma.users.findUnique({
      where: { email: email },
    }));
  }

  private async findByUsername(username: string) {
    return !!(await this.prisma.users.findUnique({
      where: { username: username },
    }));
  }

  async register(newUser: NewUserInterface) {
    const { username, birth_date, email, password } = newUser;

    if (await this.findByEmail(email)) {
      throw new ConflictException('Email already exists');
    }
    if (await this.findByUsername(username)) {
      throw new ConflictException('Username already exists');
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const postUser = await this.prisma.users.create({
        data: {
          email: email,
          username: username,
          password: hashedPassword,
          birth_date: birth_date,
        },
      });

      console.log(postUser);
      return {
        message: 'Registration successful',
      };
    } catch (error) {
      console.log(error);
    }
  }
}
