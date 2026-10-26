import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterielPret } from './materiel-pret';

describe('MaterielPret', () => {
  let component: MaterielPret;
  let fixture: ComponentFixture<MaterielPret>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterielPret],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterielPret);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
