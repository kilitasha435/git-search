import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private username = "string";
  private client_id = environment.client_id;
  private client_secret = environment.client_secret;

  constructor(private http:HttpClient) {
    console.log("Service Initialized Succesfully");
    this.username = "kilitasha435";
   }

   getProfileInfo(){
     return this.http.get("http://api.github.com/users"+this.username + "?client_id=" + this.client_id + "&client_secret=" +this.client_secret)

     .pipe(map(res => res));
   }

   getProfileRepos(){
     return this.http.get("http://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" +this.client_secret)

     .pipe(map(res => res));
   }

   updateProfile(username:string){
     this.username = username;
   }
}

