import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../services/data.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit {
  user!: any;
  user_name!: any;
  users: any[] = [];

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.user_name = params.get('data') ?? '';
      this.fetchUserProfile();
    });
    this.fetchAllUsers();
  }

  fetchUserProfile() {
    this.dataService.fetchUserProfileData(this.user_name).subscribe(
      (data: any) => {
        this.dataService.setUserProfileData(data); // Store the data in the service
        this.user = data
      },
      (error: any) => {
        console.error('Error fetching user profile data:', error);
      }
    );
  }

  fetchAllUsers() {
    // Make an HTTP GET request to your Django backend API to fetch all users
    this.http.get<any[]>('http://127.0.0.1:9000/api/get_all_user/').subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Error fetching all users:', error);
      }
    );
  }
}
