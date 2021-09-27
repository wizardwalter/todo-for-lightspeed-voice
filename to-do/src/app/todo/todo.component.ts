import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public todoService: TodoService, public activatedRoute: ActivatedRoute) { }
id;
todo;
allHours = 0;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.todoService.getOneTodo(this.id).subscribe((res) => {
      this.todo = res['todo'];
      for(let i = 0; i <= this.todo.tasks.length; i++){
        this.allHours += this.todo.tasks[i].estimatedHours
      }
    });

  }
}
