import { User } from "../models/user.entity";
import { BioDto } from "./bio.dto";

export class UserDto {
  firstName: string;
  lastName: string;
  fullName: string;
  userName: string;
  bio: BioDto;

  static fromUser(user: User) {
    const dto = new UserDto();
    dto.firstName = user.firstName;
    dto.lastName = user.lastName;
    dto.fullName = user.firstName + ' ' + user.lastName;
    dto.userName = user.username;
    dto.bio = BioDto.fromBio(user.bio);

    return dto;
  }
}