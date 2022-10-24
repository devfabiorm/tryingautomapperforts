import { Injectable } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";
import { UsersRepository } from "../repositories/users.repository";

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}
  
  getUserByUsername(username: string): UserDto {
    const user = this.userRepository.fetchUserByUsernameFromDb(username);
    return UserDto.fromUser(user);
  }
}