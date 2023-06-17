import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GetcatsService } from 'src/service/getcats.service';

@Component({
  selector: 'app-serchin-form',
  templateUrl: './serchin-form.component.html',
  styleUrls: ['./serchin-form.component.scss']
})
export class SerchinFormComponent implements OnInit{
  searchingForm: any = FormGroup;
  @Output() catsdata = new EventEmitter<any>();
  isLimitsInputDisabled: boolean = false;

  breedsForRender: any;
  constructor(private fb: FormBuilder,
  private breeds: GetcatsService
  ) {
    
  }
ngOnInit(): void {
  this.initzializationForm();
  this.breeds.getAllcats().subscribe(breeds => this.breedsForRender=breeds)
  console.log(this.breedsForRender);
}
  
initzializationForm(): void{
    this.searchingForm = this.fb.group({
      Breed: " ",
      limitsPhoto: '',
    })
  }

toggleLimitsInput(): void {
    const breedControl = this.searchingForm.get('Breed');
    const limitsPhotoControl = this.searchingForm.get('limitsPhoto');  
  if (breedControl.value === 'All Breeds') {
      this.searchingForm.get('limitsPhoto').disable();
      this.isLimitsInputDisabled = true;
      limitsPhotoControl.setValue('');
    } else {
      this.searchingForm.get('limitsPhoto').enable();
      this.isLimitsInputDisabled = false;
    }
  }

  onSubmit(): void {
    if (this.searchingForm.pristine || this.searchingForm.value.Breed === 'All Breeds') {
      this.breeds.getAllcats().subscribe((data) => {
          this.catsdata.emit(data);
          console.log(this.catsdata, 'all2');
        });
    }
    else {
      const { Breed, limitsPhoto } = this.searchingForm.value;
      console.log(Breed, limitsPhoto);

      if (Breed || limitsPhoto) {

        if (limitsPhoto) {
          this.breeds.getLimitsCards(limitsPhoto).subscribe((data) => {
            this.catsdata.emit(data);
            // console.log(this.catsdata, 'limitsPhoto');
          });
        }
        else {
          this.breeds.getCatsByBreed(Breed, 10).subscribe((data) => {
            this.catsdata.emit(data);
            // console.log(this.catsdata);
          });
        }
      }
      else if (Breed && !limitsPhoto) {
        this.breeds.getCatsByBreed(Breed, 10).subscribe((data) => {
          this.catsdata.emit(data);
          // console.log(this.catsdata);
        });
      }
    }
}
  

}
