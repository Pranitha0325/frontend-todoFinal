import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http'; // Uncomment HttpClientModule import
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-todos',
  standalone:true,
  imports:[CommonModule,  FormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {
  todos : Todo[] = [];

  //  constructor(private todoService: TodoService) { }

  // ngOnInit(): void {
  //   this.todoService.getAllTodos().subscribe({
  //     next:(todos) => {
  //       this.todos = todos
  //     }
  //   })
  // //   // Fetch todos on component initialization if needed
  // }

  onSubmit(newTodoDescription: string): void {
    if (newTodoDescription.trim()) {
      const newTodo: Todo = {
        description: newTodoDescription,
        createdDate: new Date(),
        isCompleted: false // Assuming new todos are initially not completed
      };

      this.todos.push(newTodo);
      console.log(newTodoDescription, "todoitems")
      newTodoDescription = '';
      console.log(newTodoDescription, "todoitems")


      localStorage.setItem('todos', JSON.stringify(newTodo))
    console.log(newTodo, 'afterlocalstorage')
    }

  }

  toggleCompleted(todo: Todo): void {
    // Find the index of the todo item in the todos array
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      // Update the isCompleted property of the todo
      this.todos[index].isCompleted = !this.todos[index].isCompleted;
      // Update the todos array in the local storage
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
