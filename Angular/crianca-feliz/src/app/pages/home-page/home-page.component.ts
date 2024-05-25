import { Component } from '@angular/core';
import { ChildCardComponent } from '../child-card/child-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreateChildFormComponent } from '../create-child-form/create-child-form.component';
import { MatDialog} from '@angular/material/dialog';
import { AuthService } from '../../services/Auth/auth-service.service';
import { ChildServiceService } from '../../services/child-service.service';
import { state } from '@angular/animations';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ChildCardComponent, MatIconModule, MatButtonModule,],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  children=[]

  constructor(public dialog: MatDialog, public authService:AuthService, private childService:ChildServiceService){
  }

  handleOpenCreateChildForm(){
    this.dialog.open(CreateChildFormComponent);
  }

  ngOnInit() {
    this.authService.getUserProfile();
    this.childService.getChildren().subscribe(

    );
    this.childService.childSubject.subscribe(
      (state)=>{
        console.log ("state ", state)
        this.children=state.children
      }
    )
  }

}
