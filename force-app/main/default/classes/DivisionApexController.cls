public with sharing class DivisionApexController {

 @AuraEnabled
    public static List < account > FetchAccount(String searchKeyWord, String searchKeyWordCountry) {

    String searchKey;
    if(searchKeyWord==''){
        searchKey = '';
    } else{
        searchKey = searchKeyWord + '%';
    }
    String searchKeyCountry = searchKeyWordCountry + '%';
    Motorcyclesettings__c mc = Motorcyclesettings__c.getOrgDefaults();
    String MotorCycleDivisionName = mc.Motorcyclerecordtype__c;
    List < Account > returnList = new List < Account > ();
    List < Account > lstOfAccount = new List < Account > ();

    try{
         lstOfAccount = [SELECT ID, NAME, COUNTRY__C 
                                    FROM ACCOUNT
                                    WHERE
                                        (NAME LIKE: searchKey 
                                            OR
                                            COUNTRY__C LIKE: searchKeyCountry)
                                            AND
                                            RECORDTYPE.NAME = :MotorCycleDivisionName 
                                    LIMIT 500];
    }

    catch(Exception e){
        throw new AuraHandledException(e.getMessage());
    }

    for (Account acc: lstOfAccount) {
        returnList.add(acc);
    }

    return returnList;
    }
}
