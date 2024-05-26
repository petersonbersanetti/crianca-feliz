import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UpdateChildFormComponent } from '../update-child-form/update-child-form.component';
import { ChildServiceService } from '../../services/Child/child-service.service';

@Component({
  selector: 'app-child-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './child-card.component.html',
  styleUrl: './child-card.component.scss'
})
export class ChildCardComponent {

    @Input() child:any
    @Input() toggle:any

    constructor(public dialog:MatDialog, private childService:ChildServiceService){
    }
  
    handleOpenEditChildForm(){
      this.dialog.open(UpdateChildFormComponent,
        {data: this.child})
    }

    ngOnInit(){
      console.log("toggle ", this.toggle)
    }

    handleDeleteChild(){
      this.childService.deleteChildren(this.child.id).subscribe()
    }
  
  }
  