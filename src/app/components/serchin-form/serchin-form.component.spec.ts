import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchinFormComponent } from './serchin-form.component';

describe('SerchinFormComponent', () => {
  let component: SerchinFormComponent;
  let fixture: ComponentFixture<SerchinFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerchinFormComponent]
    });
    fixture = TestBed.createComponent(SerchinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
