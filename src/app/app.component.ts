import { Component } from '@angular/core';
import {WikipediaService} from './wikipedia.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = []
  constructor(private wikipedia: WikipediaService) {

  }
  onTerm(term: string) {
    // this.wikipedia.search(term)  this line of code returns an observable which will emit an event as soon as it retrieves data from the wiki API
    // .subscribe((response: any) => {}) We call subscribe on the observable and pass it to the observer. This function is called anytime the observable emits a value
    // The value is the response from the wiki API and we assign it to this.pages
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search
      console.log(response.query.search)
    })
  }
}
