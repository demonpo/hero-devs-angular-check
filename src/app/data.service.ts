import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  category?: string;
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  #initialData: Todo[] = [];
  #data = new BehaviorSubject<Todo[]>([]);
  #nextId = 1;
  readonly #defaultTodo: Todo = {
    id: -1,
    text: '',
    completed: false,
  };

  constructor() {
    this.initialize();
  }

  public resetData(): void {
    this.initialize();
  }

  public getData(): Observable<Todo[]> {
    return this.#data.asObservable();
  }

  public add(todo: Partial<Todo>): Observable<Todo> {
    const newTodo = { ...this.#defaultTodo, ...todo, id: this.#nextId++ };
    this.#data.next([...this.#data.value, newTodo]);
    return of(newTodo);
  }

  public update(todo: Todo): Observable<Todo> {
    const updatedTodo = this.#data.value.find(value => value.id === todo.id);
    if (!updatedTodo) return of();
    updatedTodo.text = todo.text;
    updatedTodo.completed = todo.completed;
    return of();
  }

  public remove(id: number): Observable<void> {
    this.#data.next(this.#data.value.filter((t) => t.id !== id));
    return of();
  }

  private initialize() {
    this.#nextId = this.#initialData.length + 1;
    this.#data.next(this.#initialData);
  }
}
