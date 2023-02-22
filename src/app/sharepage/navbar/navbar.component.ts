import { Component, HostListener } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
 
 
  public isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }



  
  
}
