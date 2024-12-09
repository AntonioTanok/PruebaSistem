import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultLogsComponent } from './consult-logs.component';

describe('ConsultLogsComponent', () => {
  let component: ConsultLogsComponent;
  let fixture: ComponentFixture<ConsultLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
