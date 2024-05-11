import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UpdateChildFormComponent } from '../update-child-form/update-child-form.component';

@Component({
  selector: 'app-child-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './child-card.component.html',
  styleUrl: './child-card.component.scss'
})
export class ChildCardComponent {

  constructor(public dialog:MatDialog){}

  handleOpenEditChildForm(){
    this.dialog.open(UpdateChildFormComponent)
  }

}
