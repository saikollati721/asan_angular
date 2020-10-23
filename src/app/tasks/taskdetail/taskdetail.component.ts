import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {
  @Input() tasks;
  constructor() { }

  ngOnInit(): void {
  }

}
