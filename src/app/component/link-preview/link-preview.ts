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
  @Input()
  set link(value: string) {
    this._link = value;
    this.mode = MODE.VIEW;
  }

  get link() {
    return this._link;
  }

  private _link: string = '';
  newLink: string = '';
  editError: string = '';
  showInvalidPopup: boolean = false;

  constructor(private linkService: LinkService) {}

  MODE = MODE;
  mode = this.MODE.VIEW;

  startEdit() {
    this.mode = this.MODE.EDIT;
    this.newLink = this._link;
    this.editError = '';
    this.showInvalidPopup = false;
  }

  startDelete() {
    this.mode = this.MODE.DELETE;
  }

  cancel() {
    this.mode = this.MODE.VIEW;
  }

  deleteLink() {
    this.linkService.deleteLink(this._link);
    this.mode = this.MODE.VIEW;
    this._link = '';
  }

  editLink() {
    try {
      this.linkService.editLink(this._link, this.newLink);
      this._link = this.newLink;
      this.mode = this.MODE.VIEW;
    } catch (error) {
      this.showInvalidPopup = true;
      this.editError = error instanceof Error ? error.message : 'An unknown error occurred';

      setTimeout(() => {
        this.showInvalidPopup = false;
      }, 3000);
    }
  }
}
