import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratedSectionComponent } from './illustrated-section.component';

describe('IllustratedSectionComponent', () => {
  let component: IllustratedSectionComponent;
  let fixture: ComponentFixture<IllustratedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IllustratedSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IllustratedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
