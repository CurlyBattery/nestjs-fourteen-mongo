import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/spotify-clone'),
    SongsModule,
  ],
})
export class AppModule {}
