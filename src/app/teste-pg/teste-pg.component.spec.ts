import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePgComponent } from './teste-pg.component';

describe('TestePgComponent', () => {
  let component: TestePgComponent;
  let fixture: ComponentFixture<TestePgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestePgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
