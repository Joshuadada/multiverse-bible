import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualBibleComponent } from './individual-bible.component';

describe('IndividualBibleComponent', () => {
  let component: IndividualBibleComponent;
  let fixture: ComponentFixture<IndividualBibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualBibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
