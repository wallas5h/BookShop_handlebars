import { usersRegistered } from "../utils/db";
import { UserRecord } from "./User.record";


export class UserRepository {

  static async createUser(record: UserRecord) {
    await usersRegistered.insertOne(record)
  }
  static async findOne(record: UserRecord) {
    const item = ((await usersRegistered.findOne({ "mail": record.mail }))) as UserRecord
    return item === null ? null : new UserRecord(item)
  }

}