import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesBindingComponent } from './templates-binding.component';

describe('TemplatesBindingComponent', () => {
  let component: TemplatesBindingComponent;
  let fixture: ComponentFixture<TemplatesBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatesBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatesBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
