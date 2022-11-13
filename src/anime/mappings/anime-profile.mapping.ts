import { constructUsing, createMap } from '@automapper/core';
import type { Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { MalData } from '../models/interfaces/malData';
import { Anime } from '../models/anime';

@Injectable()
export class AnimeProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        MalData,
        Anime,
        constructUsing((source, destination) => {
          const anime = new Anime(source.mal_id);
          const obj = {
            title: source.titles.find((title) => title.type === 'Default')
              ?.title,
            aireFrom: source.aired.from,
            airedTo: source.aired.to,
          } as Anime;

          return Object.assign(anime, obj);
        }),
      );
    };
  }
}
