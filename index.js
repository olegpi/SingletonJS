function singleObj(obj){
    var instance;
 
    function createInstance() {
        var object = new Object(obj);
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };	
}