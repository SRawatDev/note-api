import { Module } from '@nestjs/common';
import { NoteService } from './note.service';

@Module({})
export class NoteModule {
   providers: [NoteService]
  exports: [NoteService]
}
