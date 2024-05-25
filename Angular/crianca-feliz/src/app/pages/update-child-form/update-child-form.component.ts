import { Component, Inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ChildServiceService } from '../../services/child-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-update-child-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './update-child-form.component.html',
  styleUrl: './update-child-form.component.scss'
})
export class UpdateChildFormComponent {

  childItem:any={
    name: '',
    susCard: '',
    vacCard: '',
  };


  constructor(@Inject(MAT_DIALOG_DATA) public child: any, private childService:ChildServiceService){}

  onSubmit(){
    this.childService.updateChildren(this.childItem).subscribe({
      next:data=>console.log("update ", data),
      error:error=>console.log("error ",error)
    });
    console.log('values ----- ', this.childItem);
  }

  ngOnInit (){
    this.childItem=this.child
  }


}


