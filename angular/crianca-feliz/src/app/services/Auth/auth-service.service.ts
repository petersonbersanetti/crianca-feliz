import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5454';

  constructor(private http: HttpClient) { }

  authSubject = new BehaviorSubject<any>({
    user: null
  });

  login(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/signin`, userData).pipe(
      tap((response) => {
        localStorage.setItem('jwt', response.token);
        this.authSubject.next({ user: response.user });
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/signup`, userData);
  }

  getUserProfile(): Observable<any> {
    if (this.isBrowser()) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      });
      return this.http.get<any>(`${this.baseUrl}/api/auth/users/profile`, { headers }).pipe(
        tap((user) => {
          console.log("get user profile", user);
          const currentState = this.authSubject.value;
          this.authSubject.next({ ...currentState, user });
        })
      );
    } else {
      return new BehaviorSubject<any>({}).asObservable();
    }
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.clear();
    }
    this.authSubject.next({});
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
