import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedWidgetComponent } from './liked-widget.component';

describe('LikedWidgetComponent', () => {
  let component: LikedWidgetComponent;
  let fixture: ComponentFixture<LikedWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
