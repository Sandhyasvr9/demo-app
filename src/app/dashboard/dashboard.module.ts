import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
