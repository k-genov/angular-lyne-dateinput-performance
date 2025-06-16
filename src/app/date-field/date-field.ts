import {Component} from '@angular/core';
import {SbbFormField} from '@sbb-esta/lyne-angular/form-field/form-field';
import {SbbDateInput} from '@sbb-esta/lyne-angular/date-input';
import {SbbDatepicker} from '@sbb-esta/lyne-angular/datepicker/datepicker';
import {SbbDatepickerToggle} from '@sbb-esta/lyne-angular/datepicker/datepicker-toggle';

@Component({
  selector: 'app-test',
  imports: [
    SbbFormField,
    SbbDateInput,
    SbbDatepicker,
    SbbDatepickerToggle,
  ],
  templateUrl: './date-field.html',
  styleUrl: './date-field.scss',
})
export default class DateField {

  protected readonly date = new Date();
  protected readonly count = new Array<unknown>(200);
}
