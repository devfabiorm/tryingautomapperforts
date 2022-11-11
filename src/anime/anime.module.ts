import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AnimeController } from './controllers/animes.controller';
import { AnimeProfile } from './mappings/anime-profile.mapping';
import { AnimesService } from './services/animes.service';

@Module({
  controllers: [AnimeController],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://api.jikan.moe/v4',
    }),
  ],
  providers: [AnimeProfile, AnimesService],
})
export class AnimeModule {}
