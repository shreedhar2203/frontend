import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userProfileData: any; // Store the fetched user profile data here

  constructor(private http: HttpClient) { }

  fetchUserProfileData(username: any){
    return this.http.get(`http://127.0.0.1:9000/api/user-profile/${username}`); // Replace with your API endpoint
  }

  setUserProfileData(data: any) {
    this.userProfileData = data;
  }

  getUserProfileData() {
    return this.userProfileData;
  }
}
