import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { noteInterface } from './interface/note.interface';

@Injectable()
export class NoteService {
    constructor(private readonly prisma:PrismaService){}
    add=async(data:noteInterface)=>{
        try {
            const note = await this.prisma.note.create({ data,});
            return note;
        } catch (error) {
            console.log(error)
            throw error;
            
        }
    }
}
