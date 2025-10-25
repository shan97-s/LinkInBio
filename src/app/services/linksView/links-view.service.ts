import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LinksViewService {

  private signInUrl = 'http://localhost:4000/api/user/access/10/links'; // API endpoint for signin
 
   constructor(private http: HttpClient) {}
    headers = new HttpHeaders({
     'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")   

    });
   getLinks(userName:any): Observable<any> {
      if(userName!==null){
        console.log("username is "+userName)
        const publicUrl = `${environment.apiURL}/${userName}`
        return this.http.get(publicUrl);
      }
      else{
      const signInUrl = `${environment.apiURL}/api/user/access/${localStorage.getItem('userId')}/links`
      return this.http.get(signInUrl, {headers: this.headers});
      }
    } 
  

}
