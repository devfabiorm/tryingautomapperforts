import { Controller, Get, Param } from '@nestjs/common';
import { Anime } from '../models/anime';
import { AnimesService } from '../services/animes.service';

@Controller('animes')
export class AnimeController {
  constructor(private readonly animesService: AnimesService) {}

  @Get(':title')
  public async GetAnimeList(@Param('title') title: string): Promise<Anime[]> {
    return await this.animesService.getAnimeList(title);
  }
}
