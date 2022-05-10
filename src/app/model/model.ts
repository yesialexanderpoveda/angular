
export class Poetry {
  _id?: string;
  author: string;
  gender: string;
  description: string;

  constructor(author: string, gender: string, description: string) {
    this.author = author;
    this.gender = gender;
    this.description = description;
  }

}