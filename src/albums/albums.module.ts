import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { Album, AlbumSchema } from './entities/album.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}])],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
