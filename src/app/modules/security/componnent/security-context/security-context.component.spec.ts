import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityContextComponent } from './security-context.component';

describe('SecurityContextComponent', () => {
  let component: SecurityContextComponent;
  let fixture: ComponentFixture<SecurityContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityContextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
