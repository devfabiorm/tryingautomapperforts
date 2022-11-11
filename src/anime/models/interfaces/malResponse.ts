import { AutoMap } from '@automapper/classes';
import { MalData } from './malData';

export class MalResponse {
  @AutoMap(() => [MalData])
  data!: MalData[];
}
