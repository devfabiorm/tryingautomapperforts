import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Anime } from '../models/anime';
import { MalData } from '../models/interfaces/malData';
import { MalResponse } from '../models/interfaces/malResponse';

@Injectable()
export class AnimesService {
  constructor(
    @InjectMapper()
    private readonly mapper: Mapper,
    private readonly httpService: HttpService,
  ) {}

  public async getAnimeList(title: string): Promise<Anime[]> {
    const { data: response } = await this.httpService.axiosRef.get<MalResponse>(
      `/anime?q=${title}`,
    );

    return this.mapper.mapArray(response.data, MalData, Anime);
  }
}
