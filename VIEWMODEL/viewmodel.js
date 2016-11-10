// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define([ 'text!viewmodel.html'], function( htmlString) {
	/**
	 * CONSTRUCTOR
	 */
	function viewModel(params) {
		/** 
		 * SAMPLE CODE BELOW IS FOR LEARNING PURPOSE
		 */
		// 1. auto-injected observables by form runtime 
	    console.log('Form is ReadOnly = ' + this.$formReadOnly());			// auto-injected: viewModel.prototype.$formReadOnly = ko.pureComputed(...);
	    console.log('Form is in Design Mode = ' + this.$formDesignMode());	// auto-injected: viewModel.prototype.$formDesignMode = ko.pureComputed(...);

	    // 2. auto-injected observable linked to SharePoint item 'Title' column, placed on your form by textbox component 
		try {
	        console.log('SharePoint column "Title", value = ' + this.Title());	// auto-injected: viewModel.prototype.Title = ko.observable();		
		    // ... check your model for more SharePoint-linked observables named as column's Internal Name, if there are more components placed on form. 
		}
	    catch (e) { };

        // 3. code-creatd observable linked to SharePoint item 'Title' column
		this.mytitle = ko.observable().extend({ listItem: "Title" });

		/**
		 * EDIT MODEL BELOW TO DESIGN YOUR CUSTOM SPA FORM
		 */
		this.attachmentRequired = ko.observable(false);
				
	}
    // Use prototype to declare any public methods
    //viewModel.prototype.doSomething = function() { ... };
	//viewModel.prototype.MyButtonClick = function () {
	//	var model = this;
	//	debugger;
	//};

 
    // Return model definition
	return { viewModel: viewModel, template: htmlString };
});
