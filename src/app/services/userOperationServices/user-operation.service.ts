import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UserOperationService {

  private linkUrl = `http://localhost:4000/api/user/access/10/8/editlink`;

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
       'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")   
  
      });
    addlink(data:any): Observable<any> { 
        const linkUrl = `${environment.apiURL}/api/user/access/${localStorage.getItem("userId")}/addlink`;
        return this.http.post(linkUrl, data,{headers: this.headers});
      }
    
   updatelink(data:any,linkId:any): Observable<any> { 
        const linkUrl = `${environment.apiURL}/api/user/access/${localStorage.getItem("userId")}/${linkId}/editlink`;
        return this.http.post(linkUrl, data,{headers: this.headers});
      }
      
   getProfile(): Observable<any> {
        console.log(localStorage.getItem("userId"))
        const profileUrl = `${environment.apiURL}/api/user/access/${localStorage.getItem("userId")}/profile`
        return this.http.get(profileUrl, {headers: this.headers});
      }

   updateProfile(data:any): Observable<any> { 
        const profileUrl = `${environment.apiURL}/api/user/access/${localStorage.getItem("userId")}/editprofile`;
        return this.http.post(profileUrl, data,{headers: this.headers});
      }
   reorderLinks(data:any): Observable<any> { 
        const reorderUrl = `${environment.apiURL}/api/user/access/${localStorage.getItem("userId")}/switchlinks`;
        return this.http.post(reorderUrl, data,{headers: this.headers});
      }
   
}
