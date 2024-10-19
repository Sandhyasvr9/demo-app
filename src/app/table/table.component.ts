import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any;
  currentPage: any;
  paginatedData = []

  ngOnInit(): void {
    this.paginatedData = [...this.data.slice(0, 10)]
  }

  pageChanged(event) {
    let minValue = (event.page - 1) * 10 - 1;
    if (event.page == 1) minValue = 0
    this.paginatedData = [...this.data.slice(minValue, minValue + 10)]
  }

}
