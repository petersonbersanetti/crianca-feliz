import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildServiceService {

  private baseUrl = 'http://localhost:5454'

  constructor(private http: HttpClient) { }

  childSubject = new BehaviorSubject<any>({
    children: [],
    loading: false,
    newChild: null
  })

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("jwt")
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    })
  }

  getChildren(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/api/childs`, { headers }).pipe(
      tap((children) => {
        const currentState = this.childSubject.value;
        this.childSubject.next({ ...currentState, children });
      })
    );
  }

  createChildren(child: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.baseUrl}/api/childs`, child, { headers }).pipe(
      tap((newChild) => {
        const currentState = this.childSubject.value;
        this.childSubject.next({
          ...currentState,
          children: [...currentState.children, newChild]
        });
      })
    );
  }

  updateChildren(child: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.baseUrl}/api/childs/${child.idSon}`, child, { headers }).pipe(
      tap((updateChild: any) => {
        const currentState = this.childSubject.value;
        const updateChildren = currentState.children.map
          ((item: any) => item.idSon === updateChild.idSon ? updateChild : item);
        this.childSubject.next({
          ...currentState,
          children: updateChildren
        });
      })
    );
  }

  deleteChildren(idSon: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.baseUrl}/api/childs/${idSon}`, { headers, }).pipe(
      tap((deleteChild) => {
        const currentState = this.childSubject.value;
        const updateChildren = currentState.children.filter
          ((item: any) => item.idSon !== idSon
          );
        this.childSubject.next({
          ...currentState,
          children: updateChildren
        });
      })
    );
  }

  getChildrenByUser(jwt: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.get<any>(`${this.baseUrl}/api/childs/user`, { headers });
  }
}
