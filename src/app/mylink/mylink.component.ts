import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../link.model';
import { FormGroup, FormBuilder, FormControl, Validators, Validator, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-mylink',
  templateUrl: './mylink.component.html',
  styleUrls: ['./mylink.component.css']
})
export class MylinkComponent implements OnInit {

  private _link: Link;

  @Input()
  set link(newLink: Link) {
    this._link = newLink;
  }

  get link(): Link {
    return this._link;
  }

  getName(){ return this._link.name; }
  getUrl(){ return this._link.imageUrl; }
  
  constructor() { }
  
  ngOnInit() {  }

}
