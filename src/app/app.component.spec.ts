import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title in a heading', () => {
    const heading: HTMLHeadingElement | null =
      fixture.nativeElement.querySelector('h1');
    expect(heading?.textContent?.trim()).toBe(
      'Intro a pruebas unitarias en Angular',
    );
  });
});
