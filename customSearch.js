(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.customSearch = {})));
}(this, (function (exports) {
  'use strict';
  var container = null;
  var input = null;
  var iconBar = null;
  var list = null;
  var items = [];
  var mount = mount$1;
  var pushList = pushList$1;

  var core = Object.freeze({
    mount: mount$1,
    pushList: pushList$1,
  });

  function mount$1(selector, className) {
    if (selector) {
      if (selector[0] === '#') selector = selector.slice(1);
      container = document.getElementById(selector);
      if (container) {
        constructSearch();
      }
      return customSearch;
    }
  }

  function pushList$1(newList) {
    items = newList;
    container ? loadList() : console.error("no search mounted, customSearch.mount('elementName')");
  }

  var containerStyle = {
    default: {
      width: '250px',
      overflow: 'hidden',
    },
  };
  var inputAttr = {
    type: 'text',
    placeholder: '... type to search here ...',
  };
  var inputStyle = {
    default: {
      width: '92%',
      border: '2px solid rgb(99, 82, 191)',
      boxShadow: '1px 1px 1px lightgray',
      borderRadius: '10px',
      margin: '0 auto',
      padding: '3px 6px',
      textAlign: 'center',
      color: 'navy',
      fontSize: '1.1em',
    },
  };

  var iconBarStyle = {
    default: {
      height: '20px',
      background: 'linear-gradient(to right, rgba(125,185,232,0) 0%, rgba(30,87,153,.5) 50%,rgba(125,185,232,0) 100%)',
      margin: '0 auto',
    },
  };

  var listStyle = {
    default: {
      display: 'block',
      backgroundColor: 'white',
      border: 'thin solid #44A',
    },
  };

  function constructSearch(theme) {
    if(!container) return;
    theme = theme || 'default';
    
    input = document.createElement('input'); 
    iconBar = document.createElement('div');
    list = document.createElement('div');

    addStyling(container, containerStyle[theme]);
    addStyling(input, inputStyle[theme]);
    addAttr(input, inputAttr);
    addStyling(iconBar, iconBarStyle[theme]);
    addStyling(list, listStyle[theme]);

    container.appendChild(input);
    container.appendChild(iconBar);
    container.appendChild(list);

    var boundKeyup = (function(e) {
      console.log("e",e);
     if(e.target.value!==''){ 
      loadList(e.target.value);
      return true;
    } else {
      return false;
    }
    });
    var boundPaste = (function(e) {
      var pastedText = undefined;
      if (window.clipboardData && window.clipboardData.getData) {
        pastedText = window.clipboardData.getData('Text');
      } else if (e.clipboardData && e.clipboardData.getData) {
        pastedText = e.clipboardData.getData('text/plain');
      }
      loadList(pastedText);
      return false;
    });
    input.addEventListener("keyup", boundKeyup, false);
    input.addEventListener("paste", boundPaste, false);
  }

  function loadList(filter) {
    if(!items.length) return;
    filter = typeof filter === 'string' ? filter.trim().toLowerCase() : '';
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    var html = '<ul>';
    if(filter==='') {
      for (var i = 0; i < items.length; i++) {
        html += '<li tabindex=' + i+1 + '>' + items[i].trim() + '</li>';
      }
    } else {
      for (var i = 0; i < items.length; i++) {
        if(items[i].toLowerCase().indexOf(filter) > -1) html += '<li>' + items[i].trim() + '</li>';
      }      
    }
    html += '</ul>';
    list.innerHTML = html;
    scrollList();
  }

  function scrollList() {
    var first = list.firstChild;
    var current = null;
    container.onkeydown = function(e) { 
      switch (e.keyCode) {
        case 38: //up
          if (document.activeElement == (input || first)) { break; }
          else { if(current){ current = current.previousSibling; current.focus();} }
          break;
        case 40: //down
          if (document.activeElement == input) { if(current){ current = first.firstChild; current.focus(); } }
          else { if(current){ current = current.nextSibling; current.focus(); } }
          console.log(typeof current);
        break;
      }
    }
  }

  function addStyling(el, styleObj) {
    for (var s in styleObj) {
      el.style[s] = (typeof styleObj[s] === 'string') ? styleObj[s] : styleObj[s]();
    }
  }

  function addAttr(el, attrObj) {
    for (var a in attrObj) {
      el.setAttribute(a, typeof attrObj[a] === 'string' ? attrObj[a] : attrObj[a]());
    }
  }

  exports.mount = mount;
  exports.pushList = pushList;

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

})));