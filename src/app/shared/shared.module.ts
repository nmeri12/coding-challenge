import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortArrayPipe } from './pipes/sort-array.pipe';
import { EuroCurrencyPipe } from './pipes/euro-currency.pipe';
import { SortOptionsDropDownComponent } from './components/sort-options-drop-down/sort-options-drop-down.component';



@NgModule({
    declarations: [
        SortArrayPipe,
        EuroCurrencyPipe,
        SortOptionsDropDownComponent
    ],
  exports: [
    SortArrayPipe,
    EuroCurrencyPipe,
    SortOptionsDropDownComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
