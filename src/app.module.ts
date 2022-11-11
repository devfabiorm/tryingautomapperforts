import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { AnimeModule } from './anime/anime.module';

@Module({
  imports: [
    UsersModule,
    AnimeModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
