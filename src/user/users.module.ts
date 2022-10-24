import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/users.controller";
import { UserProfile } from "./mappings/user-profile.mapping";
import { UsersRepository } from "./repositories/users.repository";
import { UsersService } from "./services/users.service";

@Module({
  providers: [UsersService, UsersRepository, UserProfile],
  controllers: [UsersController]
})
export class UsersModule {}