// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  json.__proto__ = String;
  json = json.trim();
  var first = _.first(json);
  var isValue = false;
  if (first === '{') {
    var primaryObj = {};
    return parseObjMembers(json.slice(1, -1), primaryObj);
  } else if (first === '['){
  	var primaryObj = [];
  return parseArrayElements(json.slice(1, -1), primaryObj);
} else {
  var isValue = true;
  return parseAValue(json);
}
return null;

function parseObjMembers(json, obj) {

  var regexKey = new RegExp('("([^"]+?)")\s*(?=:)');
  var result
  do {
    result = regexKey.exec(json);
    var pairKey = result[0];
    var pairValue = parseJSON(json.slice((regexKey.lastIndex) + 1))
    obj[pairKey] = pairValue;
  } while (result != null);

  return obj;
}

/*
function parseArrayElements(json, obj) {
  var jsonIndex
  while jsonIndex < json.length {
    parseElement
    obj.push(parsedElement);
    increment jsonIndex to next element index
  }
  return obj

}
*/

//return the first value from a trimmed json expression. 
function parseAValue(json) {
json.__proto__ = String;	
  var element
  var first = _.first(json);

  //string
  if (first === '"' || first ==='\''){
   	var currentIndex = 1;
  	while (json[currentIndex] !== '"' && json[currentIndex-1] !=='\\'){
  		currentIndex++;
  	}
  	return json.slice(1, currentIndex).toString();
  }


  }
/*
    number
    true
    false
    null
    */
}


//value

/*
'[]',
  '{"foo": ""}',
  '{}',
  '{"foo": "bar"}',
  '["one", "two"]',
  '{"a": "b", "c": "d"}',
  '[null,false,true]',
  '{"foo": true, "bar": false, "baz": null}',
  '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
  '{"boolean, true": true, "boolean, false": false, "null": null }',

  // basic nesting
  '{"a":{"b":"c"}}',
  '{"a":["b", "c"]}',
  '[{"a":"b"}, {"c":"d"}]',
  '{"a":[],"c": {}, "b": true}',
  '[[[["foo"]]]]',
   

  */