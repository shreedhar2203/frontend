import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-homepage',
  templateUrl:'homepage.component.html'
  // template: `<p>{{str}}</p>`
})
export class HomepageComponent implements OnInit{
  public str = 'hello there!';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    console.log('HomepageComponent initialized.');
  }
}
