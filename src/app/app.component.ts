import { Component, OnInit } from '@angular/core';
import { GetcatsService } from 'src/service/getcats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'catssearching';

  constructor(private catapi: GetcatsService) {
    
  }
  ngOnInit(): void {
    this.catapi.getAllcats().subscribe(cat => {
      console.log(cat, 'all');
      
    })

     this.catapi.getLimitsPhoto(5).subscribe(cat => {
      console.log(cat);
      
    })
  }
}
