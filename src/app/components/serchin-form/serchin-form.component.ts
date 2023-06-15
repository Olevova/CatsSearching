import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GetcatsService } from 'src/service/getcats.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-serchin-form',
  templateUrl: './serchin-form.component.html',
  styleUrls: ['./serchin-form.component.scss']
})
export class SerchinFormComponent implements OnInit{
  searchingForm: any = FormGroup;
  breedsForRender: any;
  constructor(private fb: FormBuilder,
    private breeds: GetcatsService
  ) {
    
  }
ngOnInit(): void {
  this.initzializationForm();
  this.breeds.getbreeds().subscribe(breeds => this.breedsForRender=breeds)
  console.log(this.breedsForRender);
  
}
  
  initzializationForm(): void{
    this.searchingForm = this.fb.group({
      Breed: " ",
      OnlyPhoto: '',
      OnlyInformation: '',
      limitsPhoto: '',

    })
  }

  onSubmit(): void{
    console.log(this.searchingForm);
    
  }


}
