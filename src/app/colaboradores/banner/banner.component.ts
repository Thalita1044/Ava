import { Component, OnInit } from '@angular/core';
import { Banner } from '../service/banner.model';
import { StackService } from '../service/stack.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  banner!: Banner;

  constructor(private stackService: StackService) { }

  ngOnInit() {
    this.stackService.getBanner().subscribe((result)=>{
      console.log(result)
      this.banner = result
    })
  }

}