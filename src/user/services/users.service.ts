import { Injectable } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";
import { UsersRepository } from "../repositories/users.repository";
import { Mapper } from '@automapper/core';
import { InjectMapper } from "@automapper/nestjs";
import { User } from "../models/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectMapper()
    private readonly mapper: Mapper,
    private readonly userRepository: UsersRepository,
    ) {}
  
  getUserByUsername(username: string): UserDto {
    const user = this.userRepository.fetchUserByUsernameFromDb(username);
    return this.mapper.map(user, User, UserDto);
  }
}