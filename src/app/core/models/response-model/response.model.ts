export class Response {
  success: boolean;
  data: any;
  message: string;
  code: number;
  errors: any;

  constructor() {
    this.success = false;
    this.data = null;
    this.message = '';
    this.code = 0;
    this.errors = null;
  }
}
