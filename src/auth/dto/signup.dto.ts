import { isString } from 'class-validator';

export class signUpDto {  
    readonly username: string;

    readonly password: string;
}