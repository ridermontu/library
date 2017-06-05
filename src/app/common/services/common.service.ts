import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class CommonService {

  @Output() userFname = new EventEmitter();
  @Output() login = new EventEmitter();


  constructor() { }

  changeLogin(status: boolean) {
    this.login.emit(status);
  }

  getLogin() {
    return this.login;
  }

  setuserFname(userfname: string) {
    this.userFname.emit(userfname);
  }

  getuserFname() {
    return this.userFname;
  }

}
