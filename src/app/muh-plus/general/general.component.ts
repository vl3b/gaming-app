import { Component, OnInit } from '@angular/core';

export interface PeriodicElement{
  dungLoot: string;
  keyLvl: string;
  chestLoot: string;
  affix: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {keyLvl: '+2', dungLoot: '236', chestLoot: '252', affix: '1'},
  {keyLvl: '+3', dungLoot: '239', chestLoot: '252', affix: '1'},
  {keyLvl: '+4', dungLoot: '242', chestLoot: '252', affix: '2'},
  {keyLvl: '+5', dungLoot: '246', chestLoot: '255', affix: '2'},
  {keyLvl: '+6', dungLoot: '249', chestLoot: '255', affix: '2'},
  {keyLvl: '+7', dungLoot: '249', chestLoot: '259', affix: '3'},
  {keyLvl: '+8', dungLoot: '252', chestLoot: '262', affix: '3'},
  {keyLvl: '+9', dungLoot: '252', chestLoot: '262', affix: '3'},
  {keyLvl: '+10', dungLoot: '255', chestLoot: '265', affix: '4'},
  {keyLvl: '+11', dungLoot: '255', chestLoot: '268', affix: '4'},
  {keyLvl: '+12', dungLoot: '259', chestLoot: '272', affix: '4'},
  {keyLvl: '+13', dungLoot: '259', chestLoot: '272', affix: '4'},
  {keyLvl: '+14', dungLoot: '262', chestLoot: '275', affix: '4'},
  {keyLvl: '+15', dungLoot: '262', chestLoot: '278', affix: '4'},
];

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  displayedColumns: string[] = ['keyLvl', 'dungLoot', 'chestLoot', 'affix'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
