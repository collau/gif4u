import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Gif4uService {
  constructor(private httpClient: HttpClient) { }

  getAllGifs(): Promise<any> {
    return (this.httpClient.get('/gif4u_web/gif4u')
      .take(1).toPromise());
  }

  getUserGifs(uname: string): Promise<any> {
    return (this.httpClient.get('/gif4u_web/gif4u/${uname}')
      .take(1).toPromise());
  }
}
