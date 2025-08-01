import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFComponent } from './r-f.component';

describe('RFComponent', () => {
  let component: RFComponent;
  let fixture: ComponentFixture<RFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
