import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Uncomment HttpClientModule import
import { TodosComponent } from './components/todos/todos.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

export const routes: Routes = [
    {
        path: '',
        component: TodosComponent
    },
    {
        path:'todos',
        component:TodosComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes), CommonModule, FormsModule, HttpClientModule ],
    exports:[RouterModule]
})
export class AppRoutingModule {}
