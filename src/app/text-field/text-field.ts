import {Component} from '@angular/core';
import {SbbFormField} from '@sbb-esta/lyne-angular/form-field/form-field';

@Component({
  selector: 'app-test',
  imports: [
    SbbFormField,
  ],
  templateUrl: './text-field.html',
  styleUrl: './text-field.scss',
})
export default class TextField {

  protected readonly count = new Array<unknown>(200);
}
