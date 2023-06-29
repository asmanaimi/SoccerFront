import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlayerComponent } from './table-player.component';

describe('TablePlayerComponent', () => {
  let component: TablePlayerComponent;
  let fixture: ComponentFixture<TablePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
