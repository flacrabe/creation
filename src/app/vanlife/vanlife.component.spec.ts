import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanlifeComponent } from './vanlife.component';

describe('VanlifeComponent', () => {
  let component: VanlifeComponent;
  let fixture: ComponentFixture<VanlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
