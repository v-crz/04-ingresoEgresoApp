import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().then(()=> {
      this.router.navigate(['/login'])
    });
  }

}
