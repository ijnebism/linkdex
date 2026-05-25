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
    const link = history.state.link;
    if (typeof link === 'string') {
      this.link = link;
    } else {
      this.link = '';
    }
  }
}
