import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Validators, UntypedFormGroup, UntypedFormControl, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/authServices/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signupForm: FormGroup
  constructor(private service: AuthService) {}

  ngOnInit() {
    
    const password = new FormControl('', Validators.required);

    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: password,
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      agreed: new FormControl('', (control: FormControl) => {
        const agreed = control.value;
        if(!agreed) {
          return { agreed: true }
        }
        return null;
      })
    })
  }

  signup() {
    const signupData = this.signupForm.value;
    console.log(signupData);
    this.service.signup(signupData).subscribe({
      next: (res: any) => {
        console.log("Signup successful", res);
        this.resetFormState();
      },
      error: (err: any) => {
        console.error("Signup failed", err);
        this.resetFormState();
      }
    });
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }
  resetFormState() {
    throw new Error('Method not implemented.');
  }

}
