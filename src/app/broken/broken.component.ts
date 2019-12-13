import { Component } from '@angular/core';

@Component({
  selector: 'app-broken',
  templateUrl: './broken.component.html',
  styleUrls: ['./broken.component.css']
})
export class BrokenComponent {
  testVar = 'broken';
}
