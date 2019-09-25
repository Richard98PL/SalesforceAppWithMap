({
   
    ForceDataEdit : function(cmp,event,helper){

        console.log("odebralem");
        helper.ForceDataEditHelper(cmp,event,helper);

    },

    HandleSubmit : function(cmp, event, helper) {

           helper.HandleSubmitHelper(cmp,event);

    },
    
    ClearTable : function(cmp, event, helper){

        cmp.set("v.toggle", false);

    },
    
})
