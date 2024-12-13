import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Valmis testi
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 1.Testi - Lomake on virheellinen, jos nimi - kenttä on tyhjä
  it('Should be invalid when required fields are empty', () => {
    component.fbForm.controls['name'].setValue('');
    // Tähän voidaan lisätä lisää kenttiä, jos halutaan tarkistaa niitä enemmän
    expect(component.fbForm.controls['name'].invalid).toBeTruthy();
    // Muoto, jos halutaan tarkastaa kaikki:
    // expect(component.fbForm.invalid).toBeTruthy();
  });

  // 2.Testi - sähköpostin muotoilun tarkistus
  it('Should show email error when email format is incorrect', () => {
    component.fbForm.controls['email'].setValue('invalid-email');
    expect(component.fbForm.controls['email'].hasError('email')).toBeTruthy();
  });

  // 3.Testi - Lomakkeen alustamisen tarkistus
  it('should create the form with 6 controls', () => {
    expect(component.fbForm.contains('title')).toBeTruthy();
    expect(component.fbForm.contains('description')).toBeTruthy();
    expect(component.fbForm.contains('name')).toBeTruthy();
    expect(component.fbForm.contains('email')).toBeTruthy();
    expect(component.fbForm.contains('phone')).toBeTruthy();
    expect(component.fbForm.contains('termsAndConditions')).toBeTruthy();
  });
});
