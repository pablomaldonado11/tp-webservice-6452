import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoVoz } from './texto-voz';

describe('TextoVoz', () => {
  let component: TextoVoz;
  let fixture: ComponentFixture<TextoVoz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoVoz],
    }).compileComponents();

    fixture = TestBed.createComponent(TextoVoz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
