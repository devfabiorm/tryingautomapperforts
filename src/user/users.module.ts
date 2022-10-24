import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/users.controller";
import { UsersRepository } from "./repositories/users.repository";
import { UsersService } from "./services/users.service";

@Module({
  providers: [UsersService, UsersRepository],
  controllers: [UsersController]
})
export class UsersModule {}