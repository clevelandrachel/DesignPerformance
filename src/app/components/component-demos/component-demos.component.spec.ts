import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemosComponent } from './component-demos.component';

describe('ComponentDemosComponent', () => {
  let component: ComponentDemosComponent;
  let fixture: ComponentFixture<ComponentDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
