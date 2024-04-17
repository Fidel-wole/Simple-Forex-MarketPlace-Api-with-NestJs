import { isString } from 'class-validator';

export class signInDto {  
    readonly username: string;

    readonly password: string;
}