import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBetsInfoComponent } from './my-bets-info.component';

describe('MyBetsInfoComponent', () => {
  let component: MyBetsInfoComponent;
  let fixture: ComponentFixture<MyBetsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBetsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBetsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
