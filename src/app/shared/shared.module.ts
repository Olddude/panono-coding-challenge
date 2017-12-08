import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage-service';
import { ViewOptionService } from './services/view-option-service';
import { FilterOptionService } from './services/filter-option-service';

@NgModule()
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [StorageService, ViewOptionService, FilterOptionService]
    };
  }
}
