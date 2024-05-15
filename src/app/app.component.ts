import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Uncomment HttpClientModule import
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { TodosComponent } from './components/todos/todos.component';
import { Todo } from './models/todo.model';
import { title } from 'process';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    todos : Todo[] = [];
  
    constructor(private http: HttpClient) {
      this.http.get<Todo[]>('http://localhost:5253/api/todo').subscribe(
            (data) => {
              this.todos = data;
              console.log('Updated Todos:', this.todos);
            },
            (error) => {
              console.error('Error fetching updated todos:', error);
            }
          );
    }

    onSubmit(todoValue: string) {
      // Make POST API call to add a new todo item
      this.http.post('http://localhost:5253/api/todo', { Title: todoValue, createdAt:new Date }).subscribe(
        () => {
          console.log('Todo added successfully');
          // After successfully adding the todo item, make a GET API call to fetch the updated list
          this.http.get<Todo[]>('http://localhost:5253/api/todo').subscribe(
            (data) => {
              this.todos = data;
              console.log('Updated Todos:', this.todos);
            },
            (error) => {
              console.error('Error fetching updated todos:', error);
            }
          );
        },
        (error) => {
          console.error('Error adding todo:', error);
        }
      );
    }

    deleteTodo(todoId: string): void {
      const url = `http://localhost:5253/api/todo/${todoId}`;
      this.http.delete(url).subscribe(
        () => {
          console.log('Todo deleted successfully');
          // Remove the deleted todo from the todos array
          this.todos = this.todos.filter(t => t.id !== todoId);
        },
        (error) => {
          console.error('Error deleting todo:', error);
        }
      );
    }
  
    
  
    toggleCompleted(todo: Todo): void {
      todo.isCompleted = !todo.isCompleted; // Toggle the isCompleted property
      this.http.put(`http://localhost:5253/api/todo/${todo.id}`, { isCompleted: todo.isCompleted }).subscribe(
        () => {
          console.log('Todo updated successfully');
        },
        (error) => {
          console.error('Error updating todo:', error);
          // Revert the change if there's an error
          todo.isCompleted = !todo.isCompleted;
        }
      );
    }
    // editTodo(todo: Todo, newTitle: string): void {
    //   const index = this.todos.indexOf(todo);
    //   if (index !== -1 && newTitle.trim()) {
    //     this.todos[index].tiitle = newTitle.trim();
    //     localStorage.setItem('todos', JSON.stringify(this.todos));
    //   }
    // }
  
    // deleteTodo(todo: Todo): void {
    //   const index = this.todos.indexOf(todo);
    //   if (index !== -1) {
    //     this.todos.splice(index, 1);
    //     localStorage.setItem('todos', JSON.stringify(this.todos));
    //   }
    // }
  
  title = 'frontend';
}
