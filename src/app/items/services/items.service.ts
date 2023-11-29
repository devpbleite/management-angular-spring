import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly API = '/assets/items.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Item[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(items => console.log(items))
    );
  }
}
