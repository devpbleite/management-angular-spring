import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ItemsService } from '../services/items.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent implements OnInit {
  items$: Observable<Item[]>;
  displayedColumns = ['name', 'category'];

  constructor(private itemsService: ItemsService, public dialog: MatDialog) {
    this.items$ = this.itemsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao tentar carregar os items.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}
}
