import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Link } from './link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  link: Link;
  links: Link[];
  currentLink: Link;

  constructor(private linkService: MyServiceService) {  }

  ngOnInit(): void { 
     this.links = this.linkService.getLinks(10,14);     
     this.currentLink = this.links[0];
    }

    changeCurrentLink(event: MouseEvent, link: Link) {
      this.currentLink = link;
    } 
    public getLinkName():string
    {      
      return this.currentLink.name;
    }
  }
