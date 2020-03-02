import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have text 'contact page'`, async(() => {
    expect(component.text).toEqual('contact page');
  }));

  it(`should set submitted as true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it(`form should be valid`, async(() => {
    component.contactForm.controls['email'].setValue('asd@asd.com');
    component.contactForm.controls['name'].setValue('aada');
    component.contactForm.controls['text'].setValue('text');
    expect(component.contactForm.valid).toBeTruthy();
  }));
});
