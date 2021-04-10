function myMail(){



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
		// request('GET', '../assets/img/New_template.html', null, function(html) {
		request('GET', 'https://raw.githubusercontent.com/ardas/stripo-plugin/master/Public-Templates/Basic-Templates/Trigger%20newsletter%20mockup/Trigger%20newsletter%20mockup.html', null, function(html) {
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



		    //Preview popup scripts
			document.querySelector('#previewButton').addEventListener('click', function() {
            window.StripoApi.compileEmail(function (error, html) {
                window.ExternalPreviewPopup.openPreviewPopup(html);
            });
        });

		document.querySelector('#exportButton').addEventListener('click', function() {
		window.StripoApi.getTemplate((html, css)=>{console.log(html)})
	});





















		window.ExternalPreviewPopup = (function() {
			var externalPreviewPopup;
		
			var close = function() {
				externalPreviewPopup.style.visibility = 'hidden';
			};
		
			var initPreviewPopup = function() {
				var div = document.createElement('div');
				div.innerHTML = '\
					<div id="externalPreviewPopup">\
						<div class="modal-container">\
							<div class="modal-header-container">\
								<div>\
								   <button type="button" class="close modal-close-button">\
										<span>×</span>\
									</button>\
									<h4 class="modal-title">External Preview Popup</h4>\
								</div>\
							</div>\
							<div id="content" style="padding: 15px;" class="preview-container-fluid">\
							   <div class="preview-row">\
									<div class="preview-col-sm-8">\
										<div class="esdev-desktop-device">\
											<div class="esdev-email-window-panel">\
												<div class="esdev-email-subject" style="min-height: 20px"></div>\
											</div>\
											<div class="esdev-desktop-device-screen">\
												<iframe id="iframeDesktop" frameborder="0" width="100%" height="642"></iframe>\
											</div>\
										</div>\
									</div>\
									<div class="preview-col-sm-4 esdev-no-padding-left">\
										<div class="esdev-mobile-device center-block">\
											<div class="esdev-mobile-device-screen">\
												<img src="mobile-view-top-bar.png" alt="">\
												<iframe id="iframeMobile" frameborder="0" width="100%" height="459"></iframe>\
												<img class="esdev-mail-bottom-bar" src="mobile-view-bottom-bar.png" alt="">\
											</div>\
										</div>\
									</div>\
							   </div>\
							</div>\
						</div>\
					</div>';
				document.body.appendChild(div);
		
				externalPreviewPopup = document.getElementById('externalPreviewPopup');
				externalPreviewPopup.querySelector('.close').addEventListener('click', close);
			};
		
			var openPreviewPopup = function(html) {
				if (!externalPreviewPopup) {
					initPreviewPopup();
				}
				updateContent(html);
				externalPreviewPopup.style.visibility = 'visible';
			};
		
			var updateContent = function(html) {
				var iframeDesktop = document.querySelector('#iframeDesktop');
				iframeDesktop.contentWindow.document.open('text/html', 'replace');
				iframeDesktop.contentWindow.document.write(html);
				iframeDesktop.contentWindow.document.close();
		
				var iframeMobile = document.querySelector('#iframeMobile');
				iframeMobile.contentWindow.document.open('text/html', 'replace');
				iframeMobile.contentWindow.document.write(html);
				iframeMobile.contentWindow.document.close();
			};
		
			return {
				openPreviewPopup: openPreviewPopup
			};
		})();



    }


