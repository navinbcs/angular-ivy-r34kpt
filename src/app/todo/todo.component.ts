import { Component, OnInit } from '@angular/core';
import { TodoType } from '../todo-type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public todoData: TodoType[] = [];
  constructor() {}

  ngOnInit() {
    this.todoData.push({
      id: 1,
      name: 'Ring Call',
      description: 'Calli regarding chat function how it will work',
    });

    this.todoData.push({
      id: 1,
      name: 'Ring Call',
      description: 'Calli regarding chat function how it will work',
    });
  }
}
