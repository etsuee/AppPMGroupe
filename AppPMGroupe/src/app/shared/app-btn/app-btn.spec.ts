import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBtn } from './app-btn';

describe('AppBtn', () => {
  let component: AppBtn;
  let fixture: ComponentFixture<AppBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
