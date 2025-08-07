import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './entities/album.entity';
import { Model } from 'mongoose';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Song } from '../songs/schemas/song.schema';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album.name) private readonly albumModel: Model<AlbumDocument>) {}

  async createAlbum(createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumModel.create(createAlbumDto)
  }

  async findAlbums(): Promise<Album[]>  {
    return this.albumModel.find().populate('songs', null, Song.name);
  }
}
