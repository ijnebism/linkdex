import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LinkService } from '../../services/link';

enum MODE {
  VIEW = 'view',
  EDIT = 'edit',
  DELETE = 'delete',
}

@Component({
  selector: 'app-link-preview',
  imports: [FormsModule],
  templateUrl: './link-preview.html',
  styleUrl: './link-preview.scss',
})
export class LinkPreview {
  @Input() link: string = '';
  newLink: string = '';

  constructor(private linkService: LinkService) {}

  MODE = MODE;
  mode = this.MODE.VIEW;

  startEdit() {
    this.mode = this.MODE.EDIT;
    this.newLink = this.link;
  }

  startDelete() {
    this.mode = this.MODE.DELETE;
  }

  cancel() {
    this.mode = this.MODE.VIEW;
  }

  deleteLink() {
    this.linkService.deleteLink(this.link);
    this.mode = this.MODE.VIEW;
    this.link = '';
  }

  editLink() {
    this.linkService.editLink(this.link, this.newLink);
    this.link = this.newLink;
    this.mode = this.MODE.VIEW;
  }
}
