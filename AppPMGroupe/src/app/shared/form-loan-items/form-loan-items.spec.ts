import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormLoanItems } from './form-loan-items';

describe('FormLoanItems', () => {
  let component: FormLoanItems;
  let fixture: ComponentFixture<FormLoanItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLoanItems],
    }).compileComponents();

    fixture = TestBed.createComponent(FormLoanItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
