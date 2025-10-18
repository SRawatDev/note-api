import { Body, Controller, Post, Req } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/note.dto';
import type { Request } from 'express';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}
  @Post('add')
  async addNote(@Body() noteData: CreateNoteDto, @Req() req: Request) {
    const userId = req['auth']._id;
    return this.noteService.add({ ...noteData, userId });
  }
}
