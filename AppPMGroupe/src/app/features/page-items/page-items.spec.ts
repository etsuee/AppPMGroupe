import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageItems } from './page-items';

describe('PageItems', () => {
  let component: PageItems;
  let fixture: ComponentFixture<PageItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageItems],
    }).compileComponents();

    fixture = TestBed.createComponent(PageItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
