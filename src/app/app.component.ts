import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'componentes-ui';

  ngOnInit(): void {

  }

  void() {
    console.log('Estoy probando a ver si esto sirve')
  }

  void1() {
    console.log('Estoy probando a ver si esto sirve')
  }
}
