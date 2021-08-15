import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdemoComponent } from './testdemo.component';

describe('TestdemoComponent', () => {
  let component: TestdemoComponent;
  let fixture: ComponentFixture<TestdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestdemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test name value', () => {
    expect(component.myname).toBe('cleber');
  });

  it('test browser value', () => {
    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h3').textContent).toBe('cleber');
  });
});
