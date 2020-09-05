import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../model/todo/todo.model'

import { TodoService } from '../../service/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {

  // service: TodoService;
  todos: any = [];

  constructor(private service: TodoService, ) {

  }

  ngOnInit() {

    this.service.getTodos().subscribe((data:{})=>{
      this.todos = data;
      console.log('data' + this.todos);

    });
      // [{
      //   id: 1,
      //   title: 'first todo',
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: 'second todo',
      //   completed: false
      // }]


    // (this.service.getTodos());

  }

}
