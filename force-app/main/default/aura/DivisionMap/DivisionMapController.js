({

    init : function (cmp, event, helper) { 

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

    MapChange : function(cmp,event,helper){

        helper.MapChangeHelper(cmp,event,helper);

    },

    ClearMap : function(cmp,event,helper){

        helper.ClearMapHelper(cmp,event,helper);
        
    },
    
})