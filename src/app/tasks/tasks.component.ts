import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../Model/task';
import { AssignedprojectService } from '../services/assignedproject.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  projectId: number;
  todo: Task[]=[];
  doing: Task[]= [];
  done: Task[]= [];
  constructor( private router: Router,private route: ActivatedRoute,  private taskservice: TaskService ) { }
  ngOnInit(): void {
    this.projectId =this.route.snapshot.params['id'];
    this.taskservice.getTasks(this.projectId)
    .subscribe(data => {
      data.forEach(task => {
        if(task.status === "Todo"){
          this.todo.push(task);
        }
        if(task.status === "Doing"){
          this.doing.push(task);
        }
        if(task.status === "Done"){
          this.done.push(task);
        }
      })
    }, error => console.log(error));
  }


  createTask(){
    this.router.navigate([this.projectId,'createtask'])
  }

}
