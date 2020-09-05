import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoModel } from './model/todo/todo.model';
import { TodoService } from './service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
