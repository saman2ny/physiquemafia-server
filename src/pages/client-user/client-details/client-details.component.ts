import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/service/common.service';
import { ApiService } from 'src/service/api.service';
import { ConstantsService } from 'src/service/constants.service';

declare function datatblesandIts(): any;
import * as moment from 'moment';

declare var $: any;
declare function myMethod(): any;
declare function selectSearchMethod(): any;
import * as _ from 'lodash';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  fetchUser: any =[];
  editUser: any = {};
  minDate = new Date();
  maxDate = new Date();
  UserEditForm: FormGroup;
  todayDate: any;

  
  constructor(private formBuilder: FormBuilder, private router: Router, public common: CommonService, private apiService: ApiService,
    public constantsService: ConstantsService) { }

  ngOnInit(): void {
    datatblesandIts();
    myMethod();
    // selectSearchMethod();

    let obj = {"status": "fetchUser"}
    this.apiService.post(this.constantsService.fetchUsers, obj).subscribe((succ: any) => {
      console.log(succ + "succ")
      this.fetchUser = succ

    }, err => {
      this.common.hideLoading();
      console.log(err + "err")
    });

    this.UserEditForm = this.formBuilder.group({
      userName : [''],
      userEmail : [''],
      userPhone : [''],
      modeOfTraining : [''],
      startDate : [''],
      endingDate : ['']
    })

  }



  editModal(fetchUser){
    $('#edit_user').modal('show')
    this.UserEditForm.disable()
    this.editUser =fetchUser
    if(this.editUser.modeOfTraining === 'Online'){
      this.editUser.modeOfTraining =  true
    }else{
      this.editUser.modeOfTraining =  false
    }
  }

  Update(){
    if(this.UserEditForm.invalid){
      this.UserEditForm.markAllAsTouched();

    }else{
      console.log(this.editUser, "editUSer");
      var startDate = new Date();
      console.log(startDate, "startDate");

      var endDate = new Date(this.editUser.endDate);
      console.log(endDate, "endDate");

// To calculate the time difference of two dates
var Difference_In_Time = endDate.getTime() - startDate.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
console.log("Total number of days between dates" +      Math.round(Difference_In_Days));
this.common.showErrorMessage("This user gonna expiry in "+ Math.round(Difference_In_Days) + " days")

    }
  }

}

