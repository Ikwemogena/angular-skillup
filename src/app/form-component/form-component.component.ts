import { Component, OnInit } from '@angular/core';
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  formData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  showError: boolean = false;

  submitForm(): void {
    this.showError = true;

    if (this.formData.firstName && this.formData.lastName && this.validateEmail(this.formData.email) && this.formData.password) {
      // Perform further actions, e.g., API requests, etc.
    }
  }

  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onSubmit(form: any): void {
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input: HTMLInputElement) => {
      if (!input.value) {
        input.parentElement?.classList.add('error');
      } else {
        input.parentElement?.classList.remove('error');
        if (input.type === 'email') {
          if (this.validateEmail(input.value)) {
            input.parentElement?.classList.remove('error');
          } else {
            input.parentElement?.classList.add('error');
          }
        }
      }
    });
  }
}
