import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// import { TodosComponent } from './components/todos/todos.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            // {
            //     path: '',
            //     component: TodosComponent
            // },
            // {
            //     path:'todos',
            //     component:TodosComponent
            // }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
