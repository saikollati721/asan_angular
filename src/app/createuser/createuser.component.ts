import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  createUserForm: FormGroup;

  id: number;
  currentDate:  Date = new Date();
  // taskName: string;
  // priority: string;
  // status: string;
  // due: Date = new Date();
  // assignId: string;
  // taskStatus: string;

  projectId: number;
  

  statuses= ["Todo","Done","Doing"];
  priorities=["High","Medium","Low"];
  taskStatuses=["At Risk","On Track","Off Track"];
  
  user: User;
  constructor(private router: Router,private route: ActivatedRoute, private userservice: UserService) { }

  ngOnInit(): void {
    this.projectId =this.route.snapshot.params['id'];
    this.createUserForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'createdAt':new FormControl()
    })

    
     setTimeout(() =>{
      this.user=this.userservice.getLoginUser();
      console.log("at create form: "+this.user.firstName);
    },1000)
  }
  
  onSubmit(){
    this.createUserForm.value.createdAt=(new Date());
    console.log(this.createUserForm.value);
    this.userservice.saveUser(this.createUserForm.value).subscribe(data=> console.log("User registered successfully"), error=> console.log(error));
    this.gotoHome();
    
  }
  gotoHome(){
    this.router.navigate(['']);
  }
}
