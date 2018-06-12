import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class ApplicationService {
    constructor(private location: Location) { }

    initializeApp(): Promise<any> {
        console.log('hihihih');
        return new Promise((resolve, reject) => {
            console.log('asd', this.location.path());
            // this.route.params.toPromise().then(
            //     res => {
            //         console.log('ress', res);
            //     });
            resolve();
        });
    }
}
