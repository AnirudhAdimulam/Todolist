import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Task List';
  todos = [ ];

  addTodo(newTodoLabel)
  {
    var newTodo = {
     
      label: newTodoLabel,
      done:false
    };
    this.todos.push(newTodo);

  }

  deleteTodo(todo)
  {
    this.todos = this.todos.filter(t => t.label !== todo.label);

  }
}
