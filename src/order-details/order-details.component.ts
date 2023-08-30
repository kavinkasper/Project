import { Component, OnInit, ViewChild } from '@angular/core';
import { CUSTOMER } from 'src/models/customer';
import { CustomerService } from 'src/services/customer.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  cake!: MatTableDataSource<CUSTOMER>;
  displayedColumns: string[] = ['id', 'cakename', 'Name', 'Email', 'phonenumber', 'date', 'quantity', 'price'];

  constructor(private customer: CustomerService) { }
  ngOnInit(): void {
    this.customer.get_details().subscribe(data => {
      this.cake = new MatTableDataSource<CUSTOMER>(data);
      this.cake.sort = this.sort;
      this.cake.paginator = this.paginator;
    })
  }

  applyFilter(event: any) {
    this.cake.filter=event.target.value;
  }

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
}
