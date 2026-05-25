import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link-selector',
  imports: [],
  templateUrl: './link-selector.html',
  styleUrl: './link-selector.scss',
})
export class LinkSelector {
  @Input() links: string[] = [];
  selectedLink: string = '';

  @Output() linkSelected = new EventEmitter<string>();

  currentPage: number = 1;
  ITEMS_PER_PAGE: number = 20;

  get totalPages() {
    return Math.ceil((this.links.length + 1) / this.ITEMS_PER_PAGE);
  }

  get paginatedLinks() {
    const startIndex = (this.currentPage - 1) * this.ITEMS_PER_PAGE;
    return this.links.slice(startIndex, startIndex + this.ITEMS_PER_PAGE);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  selectLink(link: string) {
    this.selectedLink = link;
    this.linkSelected.emit(link);
  }
}
