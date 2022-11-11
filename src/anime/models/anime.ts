import { AutoMap } from '@automapper/classes';

export class Anime {
  @AutoMap()
  title: string;
  aireFrom: Date;
  airedTo: Date;
}
