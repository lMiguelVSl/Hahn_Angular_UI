import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUiMaterialComponent } from './crud-ui-material.component';

describe('CrudUiMaterialComponent', () => {
  let component: CrudUiMaterialComponent;
  let fixture: ComponentFixture<CrudUiMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUiMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudUiMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
