import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UvHttpServiceService {

  gotURL = 'http://demo1926272.mockable.io/getGOTCharacters';
  cricketersURL = 'http://demo1926272.mockable.io/getCricketers';

  constructor(private uvHttp: HttpClient) {
  }

  getGOTCharacters(): Observable<any> {
    return this.uvHttp.get(this.gotURL);
  }
  getCricketers(): Promise<any> {
    return this.uvHttp.get(this.cricketersURL)
                      .toPromise()
                      .then((response: any) => {
                        return response;
                      });
  }
}
