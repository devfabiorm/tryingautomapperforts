import { Injectable } from "@nestjs/common";
import { User } from "../models/user.entity";

@Injectable()
export class UsersRepository {
  private fakeDb: User[];

  constructor() {
    this.fakeDb = [
      {
        firstName: "test",
        lastName: "testing",
        password: "123456",
        username: "tester",
        bio: {
          avatarUrl: "",
          birthday: new Date(),
          job: {
            salary: 1000,
            title: "testing"
          }
        }
      }
    ];
  }

  public fetchUserByUsernameFromDb(username: string): User {
    const result = this.fakeDb.find(u => u.username === username);
    return result;
  }
}