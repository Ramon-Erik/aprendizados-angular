import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnularPipesComponent } from './anular-pipes.component';

describe('AnularPipesComponent', () => {
  let component: AnularPipesComponent;
  let fixture: ComponentFixture<AnularPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnularPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnularPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
