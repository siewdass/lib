import { Component, OnInit } from '@angular/core'

@Component( {
  selector: 'hello-world',
  templateUrl: './helloworld.component.html',
  styleUrls: [ './helloworld.component.scss' ]
} )

export class X {
  constructor(){}
  value = 1
  omg(){
    console.log('s')
  }
}