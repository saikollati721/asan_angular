import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {
  edit=false;
  @Input() tasks;
  @Input() projectId;

  constructor(private router: Router,private route: ActivatedRoute,  private taskservice: TaskService) { }

  ngOnInit(): void {
    console.log(this.projectId);
  }

  edittask(taskId: number){
    this.router.navigate([this.projectId,'updatetask', taskId]);
  }
}
