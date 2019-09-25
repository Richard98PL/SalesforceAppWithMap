({

    MapChangeHelper : function (cmp, event, helper){
        
        let id = event.getParam("id");
        let action = cmp.get("c.SingleAccountToMap");
        action.setParams({
            'xid': id,         
        });
        
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let storeResponse = response.getReturnValue();
                    let miejsca = [
                    {
                        location: {
                        Street: storeResponse[0].BillingStreet,
                        City: storeResponse[0].BillingCity,
                        State: storeResponse[0].Country__c,
                    },
                    title: storeResponse[0].Name,
                    description: storeResponse[0].Id,
                },            
             ]
                cmp.set('v.mapMarker', miejsca);
                cmp.set('v.zoomLevel', 14);
                cmp.set('v.markersTitle', 'Lokalizacja');

                if (storeResponse.length == 0) {
                    cmp.set("v.Message", true);
                } else {
                    cmp.set("v.Message", false);
                }
                }else if (state === "INCOMPLETE") {
                    alert('Response is Incompleted');
                }else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            alert("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        alert("Unknown error");
                    }
                }
            });
        $A.enqueueAction(action);
    },

    ClearMapHelper : function(cmp, event, helper){

        let defaultPlace = 
        [{
                        location: {
                        Street: 'Morwowa 1',
                        City: 'Lublin',
                        State: 'PL',
                        },
                        title: 'Biuro Britenet',
                        description: 'Super miejsce.',
                    },
        ]
            cmp.set('v.mapMarker', defaultPlace);
            cmp.set('v.zoomLevel', 14);
            cmp.set('v.markersTitle', 'Lokalizacja');
            cmp.set('v.listView', "visible");
        },
        
})
