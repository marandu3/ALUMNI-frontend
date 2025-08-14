import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ourwork } from './ourwork';

describe('Ourwork', () => {
  let component: Ourwork;
  let fixture: ComponentFixture<Ourwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ourwork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ourwork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
