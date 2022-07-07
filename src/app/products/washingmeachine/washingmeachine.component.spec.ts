import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingmeachineComponent } from './washingmeachine.component';

describe('WashingmeachineComponent', () => {
  let component: WashingmeachineComponent;
  let fixture: ComponentFixture<WashingmeachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingmeachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashingmeachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
