import { Component } from '@angular/core';
import { LinkPreview } from '../../component/link-preview/link-preview';
import { LinkSelector } from '../../component/link-selector/link-selector';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LinkService } from '../../services/link';

@Component({
  selector: 'app-overview',
  imports: [LinkPreview, LinkSelector, FormsModule],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {
  newLink = '';
  links: string[] = [];
  selectedLink: string = '';

  constructor(
    private router: Router,
    private linkService: LinkService,
  ) {}

  ngOnInit() {
    this.linkService.links$.subscribe((links) => {
      this.links = links;
    });
  }

  addLink() {
    try {
      this.linkService.addLink(this.newLink);
      this.router.navigate(['/results', encodeURIComponent(this.newLink)]);
      this.newLink = '';
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An error occurred');
    }
  }
}
