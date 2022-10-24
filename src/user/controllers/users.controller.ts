import { Controller, Get, Param } from "@nestjs/common";
import { UserDto } from "../dtos/user.dto";
import { UsersService } from "../services/users.service";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':username')
  public findOne(@Param('username') username: string): UserDto {
    return this.usersService.getUserByUsername(username);
  }
}