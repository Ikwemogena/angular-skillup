import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {
  day: number | any;
  month: number | any;
  year: number | any;
  dayError: string = '';
  monthError: string = '';
  yearError: string = '';
  ageYears: any = "- -";
  ageMonths: any = "- -";
  ageDays: any = "- -";

  validateDay() {
    if (this.day > 31) {
      this.dayError = 'Must be a valid day';
    } else {
      this.dayError = '';
    }
  }

  validateMonth() {
    if (this.month > 12) {
      this.monthError = 'Must be a valid month';
    } else {
      this.monthError = '';
    }
  }

  validateYear() {
    if (this.year > 2023) {
      this.yearError = 'Must be in the past';
    } else {
      this.yearError = '';
    }
  }

  calculateDate() {
    if (!this.dayError && !this.monthError && !this.yearError) {
      const birthday = `${this.month}/${this.day}/${this.year}`;
      const birthdayObj = new Date(birthday);
      const ageDiffMill = Date.now() - birthdayObj.getTime();
      const ageDate = new Date(ageDiffMill);
      this.ageYears = ageDate.getUTCFullYear() - 1970;
      this.ageMonths = ageDate.getUTCMonth();
      this.ageDays = ageDate.getUTCDate() - 1;

      console.log('working')
    } else {
      alert('Error in input fields');
    }
  }


}
