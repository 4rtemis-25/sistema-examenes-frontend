import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false;
  private loginStatusSubscription!: Subscription;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginStatusSubscription = this.loginService.loginStatusSubject.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      }
    );
  }

  ngOnDestroy(): void {
    this.loginStatusSubscription.unsubscribe();
  }

  logout() {
    this.loginService.logout();
    this.loginService.loginStatusSubject.next(false);
  }
}
