function labelMaker(){

  var target = 'input';

  function onInput() {
    var activeInput = document.activeElement;
    var theParent = activeInput.parentNode.childElementCount;
    if(activeInput && theParent < 2){
      var title = activeInput.getAttribute('placeholder');
      var inputLabel = document.createElement('label');
      inputLabel.innerHTML = title;
      activeInput.parentNode.insertBefore(inputLabel, activeInput);
    }
  }

  function isChanged() {
    this.className = this.className + " input-done";
    var theParent = this.parentNode;
    var theChildren = this.parentNode.children;
    for (var i = 0; i < theChildren.length; i++) {
      var child = theChildren[i].tagName;
      if(child === 'LABEL'){
        theParent.removeChild(theChildren[i]);
      }
    }
  }

  function hasLeft() {
    var theParent = this.parentNode;
    var theChildren = this.parentNode.children;
    for (var i = 0; i < theChildren.length; i++) {
      var child = theChildren[i].tagName;
      if(child === 'LABEL'){
        theParent.removeChild(theChildren[i]);
      }
    }
  }

  var inputs = document.getElementsByTagName(target);
  if (inputs) {
    for (var i = 0; i < inputs.length; i++){
      inputs[i].addEventListener("input", onInput, false);
      inputs[i].addEventListener("change", isChanged, false);
      inputs[i].addEventListener("focusout", hasLeft, false);
    }
  }
}

labelMaker();
