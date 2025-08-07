import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongDocument } from './schemas/song.schema';
import { Model } from 'mongoose';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) private readonly songModel: Model<SongDocument>,
  ) {}

  async create(createSongDto: CreateSongDto): Promise<Song> {
    const song = await this.songModel.create(createSongDto);
    return song;
  }

  async find(): Promise<Song[]> {
    return this.songModel.find();
  }

  async findById(id: string): Promise<Song> {
    return this.songModel.findById(id);
  }

  async delete(id: string) {
    return this.songModel.deleteOne({ _id: id });
  }
}
