import { Component } from '@angular/core';
import { ChildCardComponent } from '../child-card/child-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
} from '@angular/material/dialog';
import { CreateChildFormComponent } from '../create-child-form/create-child-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ChildCardComponent, MatIconModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  children=[1,1,1,1,11,1]

  constructor(public dialog: MatDialog){

  }

  handleOpenCreateChildForm(){
    this.dialog.open(CreateChildFormComponent)
  }

}
