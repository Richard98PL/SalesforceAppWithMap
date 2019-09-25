({

    SearchHelper: function(cmp, event, helper) {

        let searchKeyWord = cmp.get("v.searchKeyword");
        let searchKeyWordCountry = cmp.get("v.searchKeywordCountry");
        let countryField = cmp.find('searchFieldCountry');

        if(this.IsWordBlank(searchKeyWordCountry,countryField)){
            
        }
        else{

            countryField.setCustomValidity("");
            let DivisionEvent = $A.get("e.c:DivisionEvent");
            DivisionEvent.setParams({ "keywordName": searchKeyWord, "keywordCountry": searchKeyWordCountry});
            DivisionEvent.fire();

        }

        countryField.reportValidity();

    },

    TypingValidatingHelper : function (cmp, event, helper){

        let countryField = cmp.find('searchFieldCountry');
        let searchKeyWordCountry = cmp.get("v.searchKeywordCountry");

        if(this.IsWordBlank(searchKeyWordCountry,countryField)){

        }else{

            countryField.setCustomValidity("");

        }

        countryField.reportValidity();

    },

    IsWordBlank : function(word,field){
        
        if( ( typeof word === "undefined" || word.toString() == "" ) 
            || word.trim().length == 0){

                field.setCustomValidity("Country can't be blank");

                return true;
            
            }else {

                return false;
            }
    },

    SearchAllHelper : function(cmp, event, helper) {

        let countryField = cmp.find('searchFieldCountry');
        countryField.setCustomValidity("");
        countryField.reportValidity();

        let DivisionEvent = $A.get("e.c:DivisionEvent");
        DivisionEvent.setParams({ "keywordName": '%',
                               "keywordCountry": '%'});
        DivisionEvent.fire();

    },

    ClearHelper : function(cmp, event, helper) {

        cmp.set("v.searchKeywordCountry",'');
        cmp.set("v.searchKeyword",'');
        
        let countryField = cmp.find('searchFieldCountry');
        countryField.setCustomValidity("");
        countryField.reportValidity();

        let DivisionClearEvent = $A.get("e.c:DivisionClearEvent");
        DivisionClearEvent.fire();

        let button = cmp.find('clearButtonId');
        button.set('v.disabled',true);

        
    },

    EnableButtonHelper: function(cmp, event, helper) {

        let button = cmp.find('clearButtonId');
        button.set('v.disabled',false);

    },
    
})