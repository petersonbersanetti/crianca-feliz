import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthService } from './services/Auth/auth-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomePageComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crianca-feliz';
  user:any=null;
  
  constructor(public authService:AuthService){}

  ngOnInit(): void {
    console.log("ngOnInit")
    this.authService.getUserProfile().subscribe({
      next:data=>console.log("req user ", data),
      error:error=>console.log("error ", error)
    });
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("auth state ", auth)
        this.user=auth.user
      }
    )
  }
}