import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerService {
  
  private router = inject(Router);

  constructor() { }

  handleResponse(response: any): any {
    // Implement your response handling logic here
    if(response.status === 403) {
      // Handle forbidden error
      console.error('Access forbidden: ', response);
      // this.router.navigate(['/sessions/Signin']);
      
    } else if(response.status === 500) {
      // Handle server error
      console.error('Server error: ', response);
    }
    else if(response.status === 201 || response.status === 200) {
      return
    }
    // Add more status code handling as needed

    // Return the processed response
    
  }
}
