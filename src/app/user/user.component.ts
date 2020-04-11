import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   profile;
   repos;
   username: string;


  constructor(private profileService:ProfileService) { }
    searchProfile(){
      this.profileService.updateProfile(this.username);
      this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos =repos ;
    });
   
  }

  ngOnInit(): void {
    this.profileService.updateProfile("kilitasha435");
    this.profileService.getProfileInfo().subscribe(profile => this.profile =profile);
    this.profileService.getProfileRepos().subscribe(repos => this.repos = repos)
  }

}
