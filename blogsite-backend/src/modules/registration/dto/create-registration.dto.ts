export class CreateRegistrationDto {
  username: string;
  birth_date: string;
  password: string;
  is_admin?: boolean;
  email: string;
}
