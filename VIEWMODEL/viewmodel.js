define([ 'text!master.css','text!./viewmodel.html'], function( css,htmlString) {
//define([], function() {
	function viewModel(params) {
		//if( params.get) params.get( this, params.columns);
		//debugger;
		 //this._formReadOnly() - computed observable
		// +++ EDIT MODEL BELOW TO DESIGN YOUR CUSTOM SPA FORM
		var self = this;
		self.attachmentRequired = ko.observable(false);
		this.mwp_DescriptionAndPurposeOfEvent = ko.observable("").extend({ listItem: "mwp_DescriptionAndPurposeOfEvent" });
		this.Title = ko.observable("").extend({ listItem: "Title" });
		this.mwp_OneDayEvent = ko.observable("").extend({ listItem: "mwp_OneDayEvent" });
		this.mwp_EventStartDate = ko.observable("").extend({ listItem: "mwp_EventStartDate" });
		this.mwp_EventEndDate = ko.observable("").extend({ listItem: "mwp_EventEndDate" });
		this.mwp_EventState = ko.observable("").extend({ listItem: "mwp_EventState" });
		this.mwp_IsTheEventOpenToTheCommunity = ko.observable("").extend({ listItem: "mwp_IsTheEventOpenToTheCommunity" });
		this.mwp_VendorBooth = ko.observable("").extend({ listItem: "mwp_VendorBooth" });
		this.mwp_InService = ko.observable("").extend({ listItem: "mwp_InService" });
		this.mwp_OtherParticipation = ko.observable("").extend({ listItem: "mwp_OtherParticipation" });	
		this.mwp_TermsAndConditions = ko.observable("").extend({ listItem: "mwp_TermsAndConditions" });			
		
		//self.Title = ko.observable(); // commented out because of params.get
		// Bug in code.  Have to set for variables
	
		//Dependent Choices
		self.SetTitleEvent = ko.computed(function(){if(self.mwp_EventTitle()!= null){self.Title(self.mwp_EventTitle() + ' in ' + self.mwp_EventCity() + ', ' + self.mwp_EventState());}})
		self.SetTitleCity = ko.computed(function(){if(self.mwp_EventCity()!= null){self.Title(self.mwp_EventTitle() + ' in ' + self.mwp_EventCity() + ', ' + self.mwp_EventState());}})
		self.SetTitleState = ko.computed(function(){if(self.mwp_EventState()!=undefined && self.mwp_EventState()!= ""){self.Title(self.mwp_EventTitle() + ' in ' + self.mwp_EventCity() + ', ' + self.mwp_EventState());}})
		
		self.mwp_OneDayEventShow = ko.computed(function(){if(self.mwp_OneDayEvent() == "Yes"){return "none"}else{return "table-Cell"}}, self); 		
		self.SetOneDayEventDefault = ko.computed(function(){if(self.mwp_OneDayEvent() == ""){self.mwp_OneDayEvent('Yes')}}, self);
		self.SetEventEndDate = ko.computed(function(){if(self.mwp_OneDayEvent() == "Yes"){self.mwp_EventEndDate(self.mwp_EventStartDate());}else if(self.mwp_EventStartDate()==self.mwp_EventEndDate()){self.mwp_EventEndDate("");}});
		self.SetEventStartDateFormat = ko.computed(function(){if(self.mwp_EventStartDate() != undefined && self.mwp_EventStartDate().indexOf("T") > -1){var dt=self.mwp_EventStartDate().substring(0,10);dt=dt.substring(5,7)+"/"+dt.substring(8,10)+"/"+dt.substring(0,4) ;self.mwp_EventStartDate(dt);}}, self)
		self.SetEventEndDateFormat = ko.computed(function(){if(self.mwp_EventEndDate() != undefined && self.mwp_EventEndDate().indexOf("T") > -1){var dt=self.mwp_EventEndDate().substring(0,10);dt=dt.substring(5,7)+"/"+dt.substring(8,10)+"/"+dt.substring(0,4) ;self.mwp_EventEndDate(dt);}}, self)
		self.mwp_VendorBoothShow = ko.computed(function(){if(self.mwp_VendorBooth() == "Yes"){return "block"}else{return "none"}}, self);
		self.mwp_InServiceShow = ko.computed(function(){if(self.mwp_InService() == "Yes"){return "block"}else{return "none"}}, self); 
		self.SetAttachmentRequiredCert = ko.computed(function(){if(self.mwp_VendorBooth() == "Yes"){return true}else{return false}}, self);
		self.mwp_OtherParticipationShow = ko.computed(function(){if(self.mwp_OtherParticipation() == "Yes"){return "block"}else{return "none"}}, self); 	   

		//Dynamic Required Fields   
		self.mwp_EventStartDateText = ko.computed(function(){if(self.mwp_OneDayEvent() == "Yes"){return "Event Date"}else{return "Event Start Date"}}, self); 
		self.mwp_VendorBoothFeeRequired = ko.computed(function(){if(self.mwp_VendorBooth() == "Yes"){return true}else{return false}}, self);	 
		self.mwp_TopicRequired = ko.computed(function(){if(self.mwp_InService() == "Yes"){return true}else{return false}}, self);	
		self.mwp_SpeakerRequired = ko.computed(function(){if(self.mwp_InService() == "Yes"){return true}else{return false}}, self);		
		self.mwp_DescribeOtherRequired = ko.computed(function(){if(self.mwp_OtherParticipation() == "Yes"){return true}else{return false}}, self);
		self.SetVendorBoothFeeDefault = ko.computed(function(){if(!self.mwp_VendorBoothFee()){self.mwp_VendorBoothFee(0);}})
		self.enableValue = ko.pureComputed( function() { return (self.$readonly()) ? false : true; }, self);

		self.nullbug = ko.computed(function(){
		if(self.mwp_CustomerNumber()== null){self.mwp_CustomerNumber('');}	
		if(self.mwp_PayeeTaxId()== null){self.mwp_PayeeTaxId('');}
		if(self.mwp_VendorBoothFee()== null){self.mwp_VendorBoothFee(0);}	
		if(self.mwp_Topic()== null){self.mwp_Topic('');}
		if(self.mwp_SpeakerName()== null){self.mwp_SpeakerName('');}	
		if(self.mwp_DescribeOther()== null){self.mwp_DescribeOther('');}
		if(self.mwp_OtherValue()== null){self.mwp_OtherValue('');}			
		})	
		
		/**
		 * Get system-supported variables
		 */
		self.runtime = ko.observable().extend({form: "runtime"});
		self.readonly = ko.observable().extend({form: "readonly"});
		self.designmode = ko.observable().extend({form: "designmode"});

		self.design = ko.computed(function(){if(self.designmode() == true){return true;}else{return false}})		
		//Gets current logged in user.  
/*		self._GetUserInfo = function()	{
			var url = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties?$Select=AccountName";
			$.ajax(
				{
					url: url,  
					method: "GET",
					headers: 
					{
						"ACCEPT": "application/json;odata=verbose",
						"content-type": "application/json;odata=verbose"                         
					},
					success: function (data) 
					{
						self._GetUserManager(data.d.AccountName);
						//self._GetUserManager('MEDLINE-NT\\kpandya');					
					},
					error: function (data) {
						alert("Error occured." + data);
					}
				});                            
		}
		
		//Gets current logged in user's manager account id needed for approval workflow.
		self._GetUserManager = function(UserAccountName)	{
			var url = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/getpropertiesfor(@v)?@v='" + UserAccountName + "'&$select=UserProfileProperties";
			$.ajax(
				{
					url: url,  
					method: "GET",
					headers: 
					{
						"ACCEPT": "application/json;odata=verbose",
						"content-type": "application/json;odata=verbose"                         
					},
					success: function (data) {
						var properties = data.d.UserProfileProperties.results;
						debugger;
						properties.forEach(function (property) {
							if (property.Key == "Manager") {
								var managerValue = property.Value;
								managerValue = managerValue.replace('MEDLINE-NT\\', '');
								self.mwp_ManagerId(managerValue);
								if (property.Value != undefined && property.Value != "")
								{ 
									self._GetUserManagerName(property.Value);
								}
							}
						});
					},
					error: function (data) {
						alert(JSON.stringify(data));
					}
				});                            
		}
		//Gets current logged in user's manager name needed for approval workflow.
		self._GetUserManagerName = function(UserManagerAccountName)	{
			var url = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/getpropertiesfor(@v)?@v='" + UserManagerAccountName + "'&$select=UserProfileProperties";
			$.ajax(
				{
					url: url,  
					method: "GET",
					headers: 
					{
						"ACCEPT": "application/json;odata=verbose",
						"content-type": "application/json;odata=verbose"                         
					},
					success: function (data) {
						var properties = data.d.UserProfileProperties.results;
						var fN, lN, MgrEmail;
						properties.forEach(function (property) {
							if (property.Key == "FirstName") {
								fN = property.Value;
							}
							if (property.Key == "LastName") {
								lN = property.Value;
							}
						});
						self.mwp_Manager(fN + " " + lN);
						//alert(fN + " " + lN);
					},
					error: function (data) {
						alert(JSON.stringify(data));
					}
				});                            
		}		
		self._GetUserInfo()		*/		
		requirejs(["jqueryui"], function() 
			{ 		
				$('#ui-datepicker-div').remove();
				$("#event-Start,#event-End").removeClass("hasDatepicker");
				$(function() {$(".datepicker").datepicker();}); 
				$('#s4-workspace').scroll(function(){$(".datepicker").datepicker('hide');$('#event-Start').blur();$('#event-End').blur()});			
				$('#event-Start').datepicker( 'option' , 'onClose', function() {$('#event-Start').change(self.mwp_EventStartDate($('#event-Start').val()))} );
				$('#event-Start').datepicker( 'option' , 'onClose', function() {} );

				$('#event-End').datepicker( 'option' , 'onClose', function() {$('#event-End').change(self.mwp_EventEndDate($('#event-End').val()))} );			
				$('#event-End').datepicker( 'option' , 'onClose', function() {} );				
			});		
	
	}
    // Use prototype to declare any public methods
    //viewModel.prototype.doSomething = function() { ... };
	//viewModel.prototype.MyButtonClick = function () {
	//	var model = this;
	//	debugger;
	//};

 
    // Return model definition
    //return viewModel;
	return { viewModel: viewModel, template: css + htmlString };
});
