import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlankComponent } from './card-blank.component';

describe('CardBlankComponent', () => {
  let component: CardBlankComponent;
  let fixture: ComponentFixture<CardBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBlankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
