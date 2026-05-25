import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSelector } from './link-selector';

describe('LinkSelector', () => {
  let component: LinkSelector;
  let fixture: ComponentFixture<LinkSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
