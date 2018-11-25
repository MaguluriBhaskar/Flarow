import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPropertiesComponent } from './own-properties.component';

describe('OwnPropertiesComponent', () => {
  let component: OwnPropertiesComponent;
  let fixture: ComponentFixture<OwnPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
