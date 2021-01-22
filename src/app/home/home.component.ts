import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  launchData: any;
  lauchDataSuccess = [];
  missionIds: any;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getSpaceXData();
  }

  getSpaceXData(){
    this.homeService.getSpaceData().subscribe(res=>{
      this.launchData = res;
      console.log('res', res);
    },err=>{

    })
  }

}
