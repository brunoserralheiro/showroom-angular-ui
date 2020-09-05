import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators'
import {TodoModel} from '../model/todo/todo.model'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }


  url: string ='https://jsonplaceholder.typicode.com/todos/';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 public  getTodos (): Observable<TodoModel[]>{
   return this.http.get<TodoModel[]>(this.url)
   .pipe()
   retry(1),
   catchError(this.handleError)
 } 
 
 
//  = async () => {

//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//     return await response.json();

//   }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
