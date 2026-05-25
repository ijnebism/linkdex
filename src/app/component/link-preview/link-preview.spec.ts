import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPreview } from './link-preview';

describe('LinkPreview', () => {
  let component: LinkPreview;
  let fixture: ComponentFixture<LinkPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
