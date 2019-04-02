/**SimpleXhrFactory singleton, step 1 */
var SimpleXhrFactory = (function () {
    // The Three branches
    var standard = {
        createXhrObject:function(){
            return new XMLHttpRequest();
        }
    };
    var activeXNew = {
        createXhrObject:function(){
            return new ActiveXObject('Msxml2.XMLHTTP');
        }
    };
    var activeXOld = {
        createXhrObject:function(){
            return new ActiveXObject('Microsoft.XMLHTTP');
        }
    };
    //To assign the branch, try each method; return whatever doen't fail
    var testObject;
    try{
        testObject = standard.createXhrObject();
        return standard;
    }
    catch(e){
        try{
            testObject = activeXNew.createXhrObject();
            return activeXNew;
        }
        catch(e){
            try{
                testObject = activeXOld.createXhrObject();
                return activeXOld;
            }catch(e){
                throw new Error('No XHR object found in this enviroment');
            }
        }
    }
})();


SimpleXhrFactory.createXhrObject();