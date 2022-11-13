import { AutoMap } from '@automapper/classes';

export class Anime {
  constructor(id: number) {
    this.id = id;
  }

  @AutoMap()
  id = 0;
  @AutoMap()
  title: string;
  @AutoMap()
  aireFrom: Date;
  @AutoMap()
  airedTo: Date;
}
