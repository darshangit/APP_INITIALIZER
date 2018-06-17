import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HnService {
  data: any;

  constructor(private http: HttpClient) {}

  getSomeValue(): Observable<any> {
    console.log('Service');
    if (!this.data) {
      const a = this.http.get(
        'http://localhost:6061/loadPoperties/servicename'
      );
      const b = this.http.get(
        'http://localhost:6061/loadPoperties/servicename'
      );

      return forkJoin([a, b]).pipe(
        map(resp => {
          this.data = resp[0];
          console.log('this.data', this.data);
        })
      );
    }
  }
}
