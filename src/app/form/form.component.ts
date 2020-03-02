import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  };

  submitted = false;
  text = 'contact page';
  
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  

  createForm():void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required, Validators.minLength(4)
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required, Validators.email
      ]),
      text: new FormControl(this.contact.text, Validators.required)
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

}
