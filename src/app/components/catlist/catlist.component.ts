import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.scss']
})
export class CatlistComponent implements OnInit{
  @Input() catsData: any;
  itemsPerPage: number = 9;
  p: number = 1;

  
 ngOnInit(): void {
  };
 
  handleImageError(event: any) {
  event.target.src = 'assets/images/castomcat.jpg';
  };

}