import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBarComponent } from './hero-bar.component';

describe('HeroBarComponent', () => {
  let component: HeroBarComponent;
  let fixture: ComponentFixture<HeroBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
