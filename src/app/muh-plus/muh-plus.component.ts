import { Component, OnInit } from '@angular/core';

export interface PeriodicElement{
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2, name: '10', weight: 20, symbol: '1'},
  {position: 3, name: '20', weight: 30, symbol: '1'},
  {position: 4, name: '30', weight: 40, symbol: '2'},
  {position: 5, name: '40', weight: 50, symbol: '2'},
  {position: 6, name: '50', weight: 60, symbol: '2'},
  {position: 7, name: '60', weight: 70, symbol: '3'},
  {position: 8, name: '70', weight: 80, symbol: '3'},
  {position: 9, name: '80', weight: 90, symbol: '3'},
  {position: 10, name: '90', weight: 100, symbol: '4'},
  {position: 11, name: '100', weight: 110, symbol: '4'},
  {position: 12, name: '100', weight: 110, symbol: '4'},
  {position: 13, name: '100', weight: 110, symbol: '4'},
  {position: 14, name: '100', weight: 110, symbol: '4'},
  {position: 15, name: '100', weight: 110, symbol: '4'},
];

@Component({
  selector: 'app-muh-plus',
  templateUrl: './muh-plus.component.html',
  styleUrls: ['./muh-plus.component.css']
})
export class MuhPlusComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
