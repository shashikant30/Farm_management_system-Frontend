import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;


  constructor(private router: Router) {
    this.navLinks = [
      {
          label: 'Farmer',
          link: 'farmer',
          index: 0
      }, {
          label: 'Farm',
          link: 'farm',
          index: 1
      }, {
          label: 'Crop',
          link: 'crop',
          index: 2
      }, {
          label: 'Market',
          link: 'market',
          index: 3
      }, {
          label: 'Labours',
          link: 'labours',
          index: 4
      },  {
          label: 'Warehouse',
          link: 'warehouse',
          index: 5
      },  {
          label: 'Pesticides',
          link: 'pesticides',
          index: 6
      },  {
          label: 'Fertilizers',
          link: 'fertilizers',
          index: 7
      },  {
          label: 'Seeds',
          link: 'seeds',
          index: 8 
      },  
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === './' + this.router.url));
  });
  }
}
