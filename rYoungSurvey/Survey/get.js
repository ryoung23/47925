function getFormInfo(url){
                //Split information using ?
                var info=url.split("?");
                //Take the second part for the
                //info array and split into
                //name-value pairs
                var nameValuePairs=info[1].split("&");
                //Map the information to the Get Object
                var obj=new Object();
                for(var i=0;i<nameValuePairs.length-1;i++){
                        var map=nameValuePairs[i].split("=");
                        var name=map[0];
                        var value=map[1];
                        obj[name]=value;
                }
                return obj;
        }