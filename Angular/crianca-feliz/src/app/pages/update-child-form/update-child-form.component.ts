import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-update-child-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatIconModule],
  templateUrl: './update-child-form.component.html',
  styleUrl: './update-child-form.component.scss'
})
export class UpdateChildFormComponent {

  childItem:any={
    name: 'Peterson',
    susCard: '12345',
    vacCard: '54321',
  };

  onSubmit(){
    console.log("values, values", this.childItem)
  }
}
