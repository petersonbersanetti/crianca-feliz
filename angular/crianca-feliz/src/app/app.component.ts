import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/Auth/auth-service';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AuthComponent } from './pages/auth/auth.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    AuthComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit{
  title = 'crianca-feliz';
  user:any;

  constructor(public authService:AuthService){}

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe({
      next:data=>console.log("req user ", data),
      error:error=>console.log("error ", error)
    })
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("auth state ", auth)
        this.user=auth.user
      }
    )
  }
}





