import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumsService.createAlbum(createAlbumDto)
  }

  @Get()
  find() {
    return this.albumsService.findAlbums();
  }
}
