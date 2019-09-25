
({
 
   openModel: function(cmp, event, helper) {

      cmp.set("v.isOpen", true);

        cmp.find("accountRecordCreator").getNewRecord(

            "Account", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            
            $A.getCallback(function() {
                
                var rec = cmp.get("v.newAccount");
                var error = cmp.get("v.newAccountError");

                if(error || (rec === null)) {

                    console.log("Error initializing record template: " + error);

                    return;

                }

                console.log("Record template initialized: " + rec.apiName);

            }))

   },
 
   closeModel: function(cmp, event, helper) {

      cmp.set("v.isOpen", false);

   },
 
    handleSaveAccount: function(cmp, event, helper) {

        if(helper.ValidateContactFormHelper(cmp)) {
            
            cmp.set("v.simpleNewContact.AccountId", cmp.get("v.recordId"));
            
            cmp.find("accountRecordCreator").saveRecord(function(saveResult) {
           
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {

                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."

                    });

                    resultsToast.fire();

                } else if (saveResult.state === "INCOMPLETE") {

                    console.log("User is offline, device doesn't support drafts.");

                } else if (saveResult.state === "ERROR") {

                    console.log('Problem saving contact, error: ' + JSON.stringify(saveResult.error));

                } else {

                    console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));

                }
            });
        }

        cmp.set("v.isOpen", false);

    },

})