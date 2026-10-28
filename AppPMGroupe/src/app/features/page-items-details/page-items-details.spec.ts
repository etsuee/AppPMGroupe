import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageItemsDetails } from './page-items-details';

describe('PageItemsDetails', () => {
  let component: PageItemsDetails;
  let fixture: ComponentFixture<PageItemsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageItemsDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(PageItemsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
