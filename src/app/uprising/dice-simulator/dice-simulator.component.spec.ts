import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceSimulatorComponent } from './dice-simulator.component';

describe('DiceSimulatorComponent', () => {
  let component: DiceSimulatorComponent;
  let fixture: ComponentFixture<DiceSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceSimulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
