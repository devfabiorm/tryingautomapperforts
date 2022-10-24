import { AutoMap } from "@automapper/classes";
import { Bio } from "./bio.entity";

export class User {
  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  username: string;

  password: string;

  @AutoMap(() => Bio)
  bio: Bio;
}