import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    httpClient: HttpClient;

    token: string = 'abcd';

  constructor(private http: HttpClient) { 
    this.httpClient = http;
  }

  login(userName, password){
      console.log('Auth service Login');

      let login = this.httpClient.post('http://10.117.189.192:8090/login/getToken', {
          username: userName,
          password: password
      });

      return login;
  }

  getBalances(){
    // let getBalances = this.httpClient.get('ancd.com', {
    //   'Authorization': this.token;
    // });
  }
}