import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereComponent } from './premiere.component';

describe('PremiereComponent', () => {
  let component: PremiereComponent;
  let fixture: ComponentFixture<PremiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
