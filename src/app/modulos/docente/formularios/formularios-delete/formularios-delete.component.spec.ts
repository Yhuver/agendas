import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosDeleteComponent } from './formularios-delete.component';

describe('FormulariosDeleteComponent', () => {
  let component: FormulariosDeleteComponent;
  let fixture: ComponentFixture<FormulariosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
