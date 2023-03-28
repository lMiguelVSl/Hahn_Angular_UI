import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUiMaterialComponent } from './grid-ui-material.component';

describe('GridUiMaterialComponent', () => {
  let component: GridUiMaterialComponent;
  let fixture: ComponentFixture<GridUiMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridUiMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridUiMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
