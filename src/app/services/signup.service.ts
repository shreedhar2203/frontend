import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
    private apiUrl = 'http://127.0.0.1:9000/';

    constructor(private http: HttpClient) {
    }

    signup(username: string, email: string, password1: string, password2: string): Observable<any> {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password1', password1);
      formData.append('password2', password2);

      return this.http.post('http://127.0.0.1:9000/api/signup/', formData);
    }

    login(username: string, password: string): Observable<any> {
      const data = new FormData();
      data.append('username', username);
      data.append('password', password);

      return this.http.post('http://127.0.0.1:9000/api/login/', data);
    }

    submitProfile(formData: FormData): Observable<any> {
      return this.http.post('http://127.0.0.1:9000/api/createProfile/', formData);
    }

    prepareFormData(profileDetails: any, profileImage: File | null): FormData {
      const formData = new FormData();
      formData.append('username', profileDetails.username);
      formData.append('DOB', profileDetails.DOB);
      formData.append('location', profileDetails.location);
      formData.append('phone', profileDetails.phone);
      formData.append('gender', profileDetails.gender);
      formData.append('school', profileDetails.school);
      formData.append('bio', profileDetails.bio);
      formData.append('interest', profileDetails.interest);
      if (profileImage) {
        formData.append('Profile_Image', profileImage);
      }
      return formData;
    }

}
