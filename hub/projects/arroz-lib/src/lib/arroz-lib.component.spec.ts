import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrozLibComponent } from './arroz-lib.component';

describe('ArrozLibComponent', () => {
  let component: ArrozLibComponent;
  let fixture: ComponentFixture<ArrozLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrozLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrozLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
