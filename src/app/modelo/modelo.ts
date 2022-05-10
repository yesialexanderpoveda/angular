
export class Poetry{
  _id?: string;
  name: string;
  gender: string;
  description: string;

  constructor(name: string, gender: string, description: string  ){
this.name = name;
this.gender = gender;
this.description = description;
  }

}