import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { ApiService } from 'src/service/api.service';
import { CommonService } from 'src/service/common.service';

import { ConstantsService } from 'src/service/constants.service';
import insertTextAtCursor from 'insert-text-at-cursor';

import * as $ from 'jquery'
declare var $: any;
declare function sideMenuFunction(): any;

declare function myMethod(): any;
declare function myMail(): any;


declare global {
  interface Window { Stripo: any; }
}

@Component({
  selector: 'app-addchannel',
  templateUrl: './addchannel.component.html',
  styleUrls: ['./addchannel.component.css']
})
export class AddchannelComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private route: ActivatedRoute, public common: CommonService, private apiService: ApiService,
		public constantsService: ConstantsService, private location: Location
	) 
  { }

  ngOnInit(): void {
    // myMail();
    this.mymail()
  }
  mymail(){

    
	// Utility methods
	function request(method, url, data, callback) {
		var req = new XMLHttpRequest();
		req.onreadystatechange = function () {
			if (req.readyState === 4 && req.status === 200) {
				callback(req.responseText);
			} else if (req.readyState === 4 && req.status !== 200) {
				console.error('Can not complete request. Please check you entered a valid PLUGIN_ID and SECRET_KEY values');
			}
		};
		req.open(method, url, true);
		if (method !== 'GET') {
			req.setRequestHeader('content-type', 'application/json');
		}
		req.send(data);
	}

	function loadDemoTemplate(callback) {
		request('GET', '../assets/img/New_template.html', null, function(html) {
		// request('GET', 'https://raw.githubusercontent.com/ardas/stripo-plugin/master/Public-Templates/Basic-Templates/Trigger%20newsletter%20mockup/Trigger%20newsletter%20mockup.html', null, function(html) {
			request('GET', 'https://raw.githubusercontent.com/ardas/stripo-plugin/master/Public-Templates/Basic-Templates/Trigger%20newsletter%20mockup/Trigger%20newsletter%20mockup.css', null, function(css) {
				callback({html: html, css: css});
			});
		});

	}









	
			 // Call this function to start plugin.
        // For security reasons it is STRONGLY recommended NOT to store your PLUGIN_ID and SECRET_KEY on client side.
        // Please use backend middleware to authenticate plugin.
        // See documentation: https://stripo.email/plugin-api/
        function initPlugin(template) {
            const apiRequestData = {
                emailId: 125
            };
            const script = document.createElement('script');
            script.id = 'stripoScript';
            script.type = 'text/javascript';
            script.src = 'https://plugins.stripo.email/static/latest/stripo.js';
            script.onload = function () {
                window.Stripo.init({
                    settingsId: 'stripoSettingsContainer',
                    previewId: 'stripoPreviewContainer',
                    codeEditorButtonId: 'codeEditor',
                    undoButtonId: 'undoButton',
                    redoButtonId: 'redoButton',
                    locale: 'en',
                    html: template.html,
                    css: template.css,
                    apiRequestData: apiRequestData,
                    userFullName: 'Plugin Demo User',
                    versionHistory: {
                        changeHistoryLinkId: 'changeHistoryLink',
                        onInitialized: function(lastChangeIndoText) {
                            $('#changeHistoryContainer').show();
                        }
                    },
                    getAuthToken: function (callback) {
                        request('POST', 'https://plugins.stripo.email/api/v1/auth',
                            JSON.stringify({
                                pluginId: 'b3b649fbc0254f4a8e3d639ec73d3582',
                                secretKey: '49e58c7c35294ee4aec4f56070695a1f'
                            }),
                            function(data) {
                                callback(JSON.parse(data).token);
                            });
                    }
                });
            };
            document.body.appendChild(script);
        }
		loadDemoTemplate(initPlugin);





  }
  getFieldName(content){
    var textIDPOs = "esd-block-text";

    const el = document.getElementsByClassName(textIDPOs);
    var finalDatea = content;


    insertTextAtCursor(el, finalDatea);
  }




  
  // document.addEventListener("click", this.printMousePos);

  


}
