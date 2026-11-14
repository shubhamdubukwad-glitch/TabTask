import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

selectedSkills:string='Node'

  constructor() { }
  ngOnInit(): void {
  }
  onskillchange(skill:string){
      this.selectedSkills=skill
  }
}
