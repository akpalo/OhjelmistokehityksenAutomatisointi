import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']); // Luodaan routerille spy

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: Router, useValue: routerSpy }], // käytetään spytä
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });
  // Valmis testi
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 4.Testi - testataan, viekö painike feedback sivulle
  it('Should navigate to feedback page when button is clicked', () => {
    const navigateSpy = router.navigate as jasmine.Spy; // Spy routerin navigointiin
    const button = fixture.debugElement.query(By.css('button')); // Etsitään painike HTML - puolelta
    button.triggerEventHandler('click', null); // klikkauksen simulointi
    fixture.detectChanges(); // Päivitetään näkymä
    expect(navigateSpy).toHaveBeenCalledWith(['feedback']); // tarkistetaan, että navigointi toimii
  });

  // 5.testi - testataan, toimivatko linkit
  it('should have correct links in the home page', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(3); // Tarkistaa, että linkkejä on kolme

  expect(links[0].getAttribute('href')).toBe('https://angular.io/guide/testing-components-scenarios');
  expect(links[1].getAttribute('href')).toBe('https://testing-angular.com/introduction/#introduction');
  expect(links[2].getAttribute('href')).toBe('https://simpleweblearning.com/form-testing-in-angular/');
  });
});
