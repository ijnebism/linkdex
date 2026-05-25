import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results {
  link: string = '';

  constructor(private router: Router) {}

  // Redirect to overview if no link is provided in the state
  ngOnInit() {
    const link = history.state.link;
    if (!link) {
      this.router.navigate(['/']);
    } else {
      this.link = link;
    }
  }
}
