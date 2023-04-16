import { Component, OnInit } from '@angular/core'

@Component( {
  selector: 'app-test',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )

export class X {
  constructor(){}
  value = 1
  omg(){
    console.log('s')
  }
}