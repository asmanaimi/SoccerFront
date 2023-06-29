import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableteamComponent } from './tableteam.component';

describe('TableteamComponent', () => {
  let component: TableteamComponent;
  let fixture: ComponentFixture<TableteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
