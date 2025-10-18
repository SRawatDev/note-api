import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateNoteDto {
    @IsString({ message: 'Title is required' })
    title: string;
    @IsString({ message: 'Description is required' })
    description: string;
}
