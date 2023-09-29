import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dropdown: boolean = false;

  showDropdown(value: boolean):void {
    this.dropdown = value;
  }
}
