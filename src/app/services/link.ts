import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service to manage links in local storage, including validation, addition, deletion, and editing of links.
 * This service ensures that only valid links are stored and provides methods to manipulate the list of links.
 */
@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private storageKey = 'links';

  // BehaviorSubject to keep track of the current list of links and allow components to subscribe to changes
  private links = new BehaviorSubject<string[]>(this.getLinks());
  links$ = this.links.asObservable();

  // Private method to validate link format
  private isValidLink(link: string): boolean {
    const trimmedLink = link.trim();

    if (!trimmedLink) return false;

    // Check if the link starts with http:// or https://
    if (!/^https?:\/\//i.test(trimmedLink)) {
      return false;
    }

    // Check if the link is made of valid URL characters
    if (!/^[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+$/.test(trimmedLink)) {
      return false;
    }

    return true;
  }

  private getLinks(): string[] {
    const storedLinks = localStorage.getItem(this.storageKey);
    return storedLinks ? JSON.parse(storedLinks) : [];
  }

  // Public method to add a new link to local storage
  addLink(link: string) {
    if (!this.isValidLink(link)) {
      throw new Error('Invalid link format');
    }

    // Check for duplicates before adding
    if (this.getLinks().includes(link)) {
      throw new Error('Link already exists');
    }

    const links = this.getLinks();
    links.push(link);
    localStorage.setItem(this.storageKey, JSON.stringify(links));
    this.links.next(links);
  }

  // Public method to delete a link from local storage
  deleteLink(link: string) {
    let links = this.getLinks();
    links = links.filter((l) => l !== link);
    localStorage.setItem(this.storageKey, JSON.stringify(links));
    this.links.next(links);
  }

  // Public method to edit an existing link in local storage
  editLink(oldLink: string, newLink: string) {
    if (!this.isValidLink(newLink)) {
      throw new Error('Invalid link format');
    }

    if (this.getLinks().includes(newLink) && oldLink !== newLink) {
      throw new Error('Link already exists');
    }

    let links = this.getLinks();
    const index = links.findIndex((l) => l === oldLink);
    if (index !== -1) {
      links[index] = newLink;
      localStorage.setItem(this.storageKey, JSON.stringify(links));
      this.links.next(links);
    }
  }
}
