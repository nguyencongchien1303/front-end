import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditssComponent } from './editss.component';

describe('EditssComponent', () => {
  let component: EditssComponent;
  let fixture: ComponentFixture<EditssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
