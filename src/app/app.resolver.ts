import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HnService } from './app.service';
import { isNullOrUndefined } from 'util';

@Injectable()
export class HnResolver implements Resolve<any> {
  constructor(private hnService: HnService) {}

  resolve() {
    return this.hnService.getSomeValue();
  }
}
