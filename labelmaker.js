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
    var theInput = this;
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
    var theInput = this;
    var theParent = this.parentNode;
    var theChildren = this.parentNode.children;
    for (var i = 0; i < theChildren.length; i++) {
      var child = theChildren[i].tagName;
      if(child === 'LABEL'){
        theParent.removeChild(theChildren[i]);
      }
    }
  }
