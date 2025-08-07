import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  find() {
    return this.songsService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.delete(id);
  }
}
