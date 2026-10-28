import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverdueList } from './overdue-list';

describe('OverdueList', () => {
  let component: OverdueList;
  let fixture: ComponentFixture<OverdueList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverdueList],
    }).compileComponents();

    fixture = TestBed.createComponent(OverdueList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
