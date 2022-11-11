import { createMap, forMember, mapFrom } from '@automapper/core';
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
        forMember(
          (destination) => destination.title,
          mapFrom(
            (source) =>
              source.titles.find((title) => title.type === 'Default')?.title,
          ),
        ),
        forMember(
          (destination) => destination.aireFrom,
          mapFrom((source) => source.aired.from),
        ),
        forMember(
          (destination) => destination.airedTo,
          mapFrom((source) => source.aired.to),
        ),
      );
    };
  }
}
