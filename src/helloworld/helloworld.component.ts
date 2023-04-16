import { Component, OnInit } from '@angular/core'

@Component( {
  selector: 'app-test',
  templateUrl: './helloworld.component.html',
  styleUrls: [ './helloworld.component.scss' ]
} )

export class X implements OnInit {

  ngOnInit(): void {
    console.log('loool')
  }

}