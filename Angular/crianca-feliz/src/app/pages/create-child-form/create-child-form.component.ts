import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ChildServiceService } from '../../services/child-service.service';


@Component({
  selector: 'app-create-child-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './create-child-form.component.html',
  styleUrl: './create-child-form.component.scss'
})
export class CreateChildFormComponent {

  childItem: any = {
    name: '',
    susCard: '',
    vacCard: '',
  };

  constructor(private childService: ChildServiceService) { }


  onSubmit() {
    console.log("values, values", this.childItem);
    this.childService.createChildren(this.childItem).subscribe(
      {
        next: data => console.log("Created Child", data),
        error: error => console.log("error ", error)
      }
    )
  }

}
