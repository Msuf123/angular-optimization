import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecComponent } from './sec/sec.component';
import { LoadingComponent } from './loading/loading.component';
import { DefaultComponent } from './default/default.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgOptimizedImage,SecComponent,LoadingComponent,DefaultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'opti';
  val=false
  setVal(){
    this.val=!this.val
  }
}
