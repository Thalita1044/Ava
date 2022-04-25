import { Component, OnInit } from '@angular/core';
import {Entries } from '../service/stack.model';
import { StackService } from '../service/stack.service';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.sass']
})
export class GamerComponent implements OnInit {

  entries!: Entries;

  constructor(private stackService: StackService) { }

  ngOnInit() {
    this.stackService.getEvent().subscribe((result)=>{
      console.log(result)
      this.entries = result
    })
  }

}
