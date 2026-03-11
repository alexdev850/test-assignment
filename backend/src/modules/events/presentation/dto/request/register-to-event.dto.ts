import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterToEventDto {
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone: string;
}
