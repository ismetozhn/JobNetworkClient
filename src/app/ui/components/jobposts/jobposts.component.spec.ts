import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostsComponent } from './jobposts.component';

describe('JobpostsComponent', () => {
  let component: JobpostsComponent;
  let fixture: ComponentFixture<JobpostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobpostsComponent]
    });
    fixture = TestBed.createComponent(JobpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
