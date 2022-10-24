import { createMap, forMember, mapFrom, MappingProfile } from "@automapper/core";
import type { Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { BioDto } from "../dtos/bio.dto";
import { UserDto } from "../dtos/user.dto";
import { Bio } from "../models/bio.entity";
import { User } from "../models/user.entity";

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, Bio, BioDto);
      createMap(mapper, User, UserDto);
    };
  }
}