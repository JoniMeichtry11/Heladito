import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExploreService {
  private titleSubject = new BehaviorSubject<string>('Explore');
  titleCategory$: Observable<string> = this.titleSubject.asObservable();

  constructor() {}

  setTitleCategory(newTitle: string) {
    this.titleSubject.next(newTitle);
  }
}
