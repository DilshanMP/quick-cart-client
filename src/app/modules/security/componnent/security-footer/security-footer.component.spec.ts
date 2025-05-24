import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFooterComponent } from './security-footer.component';

describe('SecurityFooterComponent', () => {
  let component: SecurityFooterComponent;
  let fixture: ComponentFixture<SecurityFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
