// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {
  if (obj==='undefined' || typeof obj === 'function'){
    return;

  }else if ( typeof obj === "string" ){
    return `"${obj}"`;

  }else if(obj===null || typeof obj !== "object"){
    return `${obj}`;



  }else if (Array.isArray(obj)){
    return `[${_.map(obj,stringifyJSON)}]`;
  }
  else{
    var internalString = _.reduce(obj, function(fullString, val, key){
      if (typeof val === 'undefined' || typeof val === 'function'){
        return "";
      }
      return `${fullString},"${key}":${stringifyJSON(val)}`;
    },"");
    if (internalString){
     internalString = internalString.slice(1);
    }
    return `{${internalString}}`;
        
  };
  
};


