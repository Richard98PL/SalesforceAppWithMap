public with sharing class MapApexController {
 @AuraEnabled
    public static List < account > SingleAccountToMap(String xid) {

    Motorcyclesettings__c mc = Motorcyclesettings__c.getOrgDefaults();
    String MotorCycleDivisionName = mc.Motorcyclerecordtype__c;
    List < Account > returnList = new List < Account > ();
    List < Account > lstOfAccount = new List < Account > ();

    try{
        lstOfAccount = [SELECT ID, NAME, COUNTRY__C, BILLINGCITY, BILLINGSTREET
                                    FROM ACCOUNT
                                    WHERE
                                        ID = :xid
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
