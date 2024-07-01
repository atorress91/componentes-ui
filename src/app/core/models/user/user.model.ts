export class User {

  email: string;
  password: string;
  name: string;
  lastName: string;
  address: string;
  contactPreferences: string;
  rolId: number;

  constructor() {
    this.email = '';
    this.password = '';
    this.name = '';
    this.lastName = '';
    this.address = '';
    this.contactPreferences = '';
    this.rolId = 0;
  }
}
