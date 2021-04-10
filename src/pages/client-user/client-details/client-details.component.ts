import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/service/common.service';
import { ApiService } from 'src/service/api.service';
import { ConstantsService } from 'src/service/constants.service';

declare function datatblesandIts(): any;


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  fetchUser: any =[];

  
  constructor(private formBuilder: FormBuilder, private router: Router, public common: CommonService, private apiService: ApiService,
    public constantsService: ConstantsService) { }

  ngOnInit(): void {
    datatblesandIts();
let obj = {"status": "fetch"}
    this.apiService.post(this.constantsService.fetchUsers, obj).subscribe((succ: any) => {
      console.log(succ + "succ")
      this.fetchUser = succ

    }, err => {
      this.common.hideLoading();
      console.log(err + "err")
    });


  }

}

