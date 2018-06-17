import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HnService } from '../app.service';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styles: []
})
export class SomeComponentComponent implements OnInit {

  data: any;
  ngOnInit(): void {
    console.log('OnInt');
  }

  constructor(private hnService: HnService) {
    console.log('constructor');

  }

}
