import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results {
  link: string = '';

  ngOnInit() {
    const urlSegments = window.location.pathname.split('/');
    this.link = decodeURIComponent(urlSegments[urlSegments.length - 1]);
  }
}
