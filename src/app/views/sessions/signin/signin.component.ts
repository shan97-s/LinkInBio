import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { JwtAuthService } from '../../../shared/services/auth/jwt-auth.service';
import { AuthService } from 'app/services/authServices/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;
  errorMsg = '';
  // return: string;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private jwtAuth: JwtAuthService,
    private matxLoader: AppLoaderService,
    private router: Router,
    private route: ActivatedRoute,
    private service: AuthService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl('kashif@gmail.com', Validators.required),
      password: new FormControl('156', Validators.required),
      rememberMe: new FormControl(true)
    });

    // this.route.queryParams
    //   .pipe(takeUntil(this._unsubscribeAll))
    //   .subscribe(params => this.return = params['return'] || '/');
  }

  ngAfterViewInit() {
    this.autoSignIn();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(1);
    this._unsubscribeAll.complete();
  }
  ngOnSubmit(){

  }

  signin() {
    const signinData = this.signinForm.value
    this.service.signin(signinData).subscribe({
      
      next: async (res: any) => {
      console.log(res);
      
      this.service.setToken(res.token);
      
      localStorage.setItem('userRole', res.userRole);
      localStorage.setItem('userId', res.userId);

      console.log(res);
      console.log("token",localStorage.getItem('token'));
      const response = await res;
    
      console.log("response",localStorage.getItem('userRole'));
      if(response){
        this.router.navigateByUrl('user/links');
      }
      else {
        console.error("inappropriate response")
      }
      
      
    },error: (err: any) => {
    console.error('Error occurred:', err);
    // You can also show a toast, alert, or custom message to the user
  }
  })
    return;
    // this.submitButton.disabled = true;
    // this.progressBar.mode = 'indeterminate';
    
    // this.jwtAuth.signin(signinData.username, signinData.password)
    // .subscribe(response => {
    //   this.router.navigateByUrl(this.jwtAuth.return);
    // }, err => {
    //   this.submitButton.disabled = false;
    //   this.progressBar.mode = 'determinate';
    //   this.errorMsg = err.message;
    //   // console.log(err);
    // })
  }

  autoSignIn() {    
    // if(this.jwtAuth.return === '/') {
    //   return
    // }
    // this.matxLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0, 20)}...`, {width: '320px'});
    // setTimeout(() => {
    //   this.signin();
    //   console.log('autoSignIn');
    //   this.matxLoader.close()
    // }, 20000);
  }

}
