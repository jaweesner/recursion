// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var matchingElements = [];

  recursiveFunc(document.body);

  return matchingElements;


  //recursive helper function. uses sideEffects, not sure if I want to refactor....
  function recursiveFunc(element) {
    if (_.contains(element.classList, className)) {
      matchingElements.push(element);
    }

    //base case when there are no child nodes, just return
    if (element.childNodes.length === 0) {
      return;
      //if there are child nodes recursively look at each child and add each as needed  
    } else {
      _.each(element.childNodes, recursiveFunc);
    }
  };


};