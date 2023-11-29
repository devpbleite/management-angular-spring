import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items/items.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [ItemsComponent],
  imports: [CommonModule, ItemsRoutingModule, AppMaterialModule, SharedModule],
})
export class ItemsModule {}
