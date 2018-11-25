import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePropertyVisitComponent } from './people-property-visit.component';

describe('PeoplePropertyVisitComponent', () => {
  let component: PeoplePropertyVisitComponent;
  let fixture: ComponentFixture<PeoplePropertyVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplePropertyVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplePropertyVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
