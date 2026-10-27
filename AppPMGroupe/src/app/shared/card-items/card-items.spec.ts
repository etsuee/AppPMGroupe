import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardItems } from './card-items';

describe('CardItems', () => {
  let component: CardItems;
  let fixture: ComponentFixture<CardItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItems],
    }).compileComponents();

    fixture = TestBed.createComponent(CardItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
