import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-create-child-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatIconModule],
  templateUrl: './create-child-form.component.html',
  styleUrl: './create-child-form.component.scss'
})
export class CreateChildFormComponent {

  childItem:any={
    name: '',
    susCard: '',
    vacCard: '',
  };

  onSubmit(){
    console.log("values, values", this.childItem)
  }

}
