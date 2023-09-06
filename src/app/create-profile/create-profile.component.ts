import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../services/signup.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  profileForm!: FormGroup;
  data: string = '';
  profileImage: File | null = null;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private profileService: AccountService,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.data = params.get('data') ?? '';
    });
    this.profileForm = this.formBuilder.group({
      username: [this.data],
      DOB: ['', Validators.required],
      location: ['', Validators.required],
      Profile_Image: [null, Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      gender: ['', Validators.required],
      school: ['', Validators.required],
      bio: [''],
      interest: ['']
    });
  }

  onProfileImageChange(event: any) {
    this.profileImage = event.target.files[0];
    this.profileForm.patchValue({
      Profile_Image: this.profileImage
    });
  }

  submitForm() {
    // debugger
    if (this.profileForm.valid) {
      const profileDetails = this.profileForm.value;
      const formData = this.profileService.prepareFormData(profileDetails, this.profileImage);

      this.profileService.submitProfile(formData).subscribe(
        response => {
          console.log('Profile submitted:', response);
          this.router.navigate(['/display-profile',this.data]);
        },
        error => {
          // Handle error response
          console.error('Profile submission error:', error);
        }
      );
    }
  }
}
