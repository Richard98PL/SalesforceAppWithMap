({
    
    ForceDataEditHelper : function (cmp, event, helper){
        
        cmp.set("v.toggle", true);
        let id = event.getParam("id"); 
        cmp.find("Id_spinner").set("v.class" , 'slds-show');
        cmp.set('v.fields',['Name','Country__c','BillingCity','BillingStreet','Phone','Fax','NumberOfEmployees','Website','Description']);
        cmp.set("v.recordId", id);

        let resultLoaderReceiver = $A.get("e.c:DetailViewReturnEvent");
        resultLoaderReceiver.fire();

        cmp.find("Id_spinner").set("v.class" , 'slds-hide');

    },

    HandleSubmitHelper : function(cmp, event, helper) {

        event.preventDefault();
        let fields = event.getParam('fields');
        cmp.find('myRecordForm').submit(fields);

    },

})
