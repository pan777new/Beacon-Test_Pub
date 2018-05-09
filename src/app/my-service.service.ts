import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Link } from './link.model';


@Injectable()
export class MyServiceService {
  public links: Link[] = [];
  public link: Link;

  constructor(private httpClient: HttpClient) { }

getLinks(numStart: number, numFinish: number): Link[] {
  for(var i=numStart; i <= numFinish; i++ ) {        
      this.getLink(i).subscribe(reciveLink =>this.link = reciveLink);
      console.log(this.link);
      this.links.push(this.link);
  }
  return this.links;
}


getLink(num: number): Observable<Link> {    
  return this.httpClient.get<Link>(this.MyURL()+num.toString());
}

  private MyURL() {
    return 'https://5ad8d1c9dc1baa0014c60c51.mockapi.io/api/br/v1/magic/';
  }

getImage(_url: string): Observable<Blob> {
  return this.httpClient.get(_url, {responseType: "blob"});
}
}
