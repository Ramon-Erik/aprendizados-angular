import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesVariablesComponent } from './templates-variables.component';

describe('TemplatesVariablesComponent', () => {
  let component: TemplatesVariablesComponent;
  let fixture: ComponentFixture<TemplatesVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatesVariablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatesVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
