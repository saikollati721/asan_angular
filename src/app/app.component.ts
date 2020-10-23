import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './Model/user';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private userservice: UserService,private router: Router,private route: ActivatedRoute){}
  user: Observable<User[]>;

  id: number;
  ngOnInit() {
    this.user = this.userservice.getUsers();
    this.user.subscribe(data=> console.log(data), error=> console.log(error))

    console.log("from dynamic template "+ this.route.snapshot.params['id'])
    
    this.userservice.getUserById(2).subscribe(data => {this.userservice.user=data;
      console.log(data);
      this.id=data.id;
    //   this.userservice.setUserId(data.id);
    // this.userservice.setUserName(data.firstName)
    }, error => console.log(error));
    ;

    setTimeout(() =>{
      this.router.navigate([this.id,"projects"])
    },1000)
  }

  onClick(){
    this.router.navigate([this.id,"projects"])
  }
  
  
}
