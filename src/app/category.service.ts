import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  #initialData: string[] = ['tempral', 'comida'];
  #data = new BehaviorSubject<string[]>([]);
  #nextId = 1;

  constructor() {
    this.initialize();
  }

  public resetData(): void {
    this.initialize();
  }

  public getData(): Observable<string[]> {
    return this.#data.asObservable();
  }

  public add(category: string): Observable<string> {
    const categoryExists = this.#data.value.find((t) => t === category);
    if(categoryExists) throw new Error("Category already exists");
    this.#data.next([...this.#data.value, category]);
    return of(category);
  }

  public remove(category: string): Observable<void> {
    this.#data.next(this.#data.value.filter((t) => t !== category));
    return of();
  }

  private initialize() {
    this.#nextId = this.#initialData.length + 1;
    this.#data.next(this.#initialData);
  }
}
