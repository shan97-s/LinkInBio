import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { UserOperationService } from 'app/services/userOperationServices/user-operation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [ FormsModule,MatCardModule, ReactiveFormsModule, MatButtonModule, CommonModule]
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserOperationService) { }
  
  userProfileForm!: FormGroup;
  userName: string = '';
  ngOnInit(): void {


    // this.service.getProfile().subscribe((res:any)=>{
    //   console.log(res);
    //   this.userProfileForm = new FormGroup({
    //     email: new FormControl(res.email, Validators.required),
    //     userName: new FormControl(res.username, Validators.required),
    //     name: new FormControl(res.name, Validators.required),
        
    //   });
    // })
    // Initialize the form group with form controls and validators

    this.userProfileForm = new FormGroup({
          email: new FormControl('', Validators.required),
          userName: new FormControl('', Validators.required),
          name: new FormControl('', Validators.required),
        });
  }

  ngAfterViewInit() {
     this.service.getProfile().subscribe((res:any)=>{
      console.log(res);
      this.userProfileForm = new FormGroup({
        email: new FormControl(`${res.profile.email}`, Validators.required),
        userName: new FormControl(`${res.profile.userName}`, Validators.required),
        name: new FormControl(`${res.profile.name}`, Validators.required),
        
      });
    })
  }

  cancelEdit(): void {
    // Logic to cancel editing
    this.userProfileForm.reset();
  }

  onSubmit(): void {
    // Logic to save the edited link
  }
}
