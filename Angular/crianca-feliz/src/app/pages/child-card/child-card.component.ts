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
    children: any[] = [];

    constructor(public dialog:MatDialog, private childService:ChildServiceService){
    }
  
    handleOpenEditChildForm(){
      this.dialog.open(UpdateChildFormComponent,
        {data: this.child})
    }

    ngOnInit(){
      console.log("toggle ", this.toggle);
      this.loadUserChildren();
    }


    loadUserChildren() {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        this.childService.getChildrenByUser(jwt).subscribe(children => {
          this.children = children; 
        });
      }
    }
    
    handleDeleteChild() {
      this.childService.deleteChildren(this.child.idSon).subscribe(
        () => {
          console.log("Filho deletado com sucesso!");
          // Aqui você pode adicionar qualquer lógica adicional após a exclusão bem-sucedida
        },
        error => {
          console.error("Erro ao excluir o filho:", error);
          // Aqui você pode lidar com erros de exclusão, se necessário
        }
      );
    }
    
  
  }
  