import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInterventionsComponent } from './all-interventions.component';

describe('AllInterventionsComponent', () => {
  let component: AllInterventionsComponent;
  let fixture: ComponentFixture<AllInterventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllInterventionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllInterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
