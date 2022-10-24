import { CamelCaseNamingConvention, createMap, forMember, mapFrom, MappingProfile, namingConventions, typeConverter } from "@automapper/core";
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
      createMap(
        mapper,
        Bio,
        BioDto,
        typeConverter(Date, String, (date) => date.toDateString()),
        namingConventions(new CamelCaseNamingConvention())
        );
      createMap(
        mapper,
        User,
        UserDto,
        forMember(
        (destination) => destination.fullName,
        mapFrom((source) => source.firstName + ' ' + source.lastName)
      ));
    };
  }
}