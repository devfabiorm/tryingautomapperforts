import { AutoMap } from '@automapper/classes';

export class Title {
  @AutoMap()
  type: string;
  @AutoMap()
  title: string;
}
