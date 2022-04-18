import Realm from 'realm';
export class Note extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  createdAt!: Date;
  updatedAt!: Date;
    
  title!: string;
  content!: string[];


  static generate(title: string = "Untitled") {
    const now = new Date();
    return {
      _id: new Realm.BSON.ObjectId(),
      title,
      createdAt: now,
      updatedAt: now,
      content: []
    }
  }

  static schema = {
    name: "Note",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      title: "string",
      updatedAt: "date",
      createdAt: "date",
      content: "string[]"
    },
  };
}