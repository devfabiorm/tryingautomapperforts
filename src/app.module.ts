import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    UsersModule,
    AutomapperModule.forRoot({
    strategyInitializer: classes(),
  }),
],
  controllers: [],
  providers: [],
})
export class AppModule {}
