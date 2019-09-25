({

	doInit : function(cmp, event, helper) {
		
            $A.createComponents([['aura:html', {
            tag: 'style',
            body: '.flexipageHeader { display: none; }',
            HTMLAttributes: {}
        }
        ]], function(cmps, status) {
            if(status === 'SUCCESS'){
                cmp.set('v.CustomStyles', cmps);
            }
        });
        
    },
    
})