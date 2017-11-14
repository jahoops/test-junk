(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.hoops = {})));
}(this, (function (exports) {
  'use strict';
  var container = null;
  var tags = [];
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

  function mount$1(selector) {
    if (selector) {
      container = document.querySelector(selector);
      tags = document.querySelectorAll('script[data-src^="' + selector + '"]');
      fetch(tags[0].dataset.src).then(function(response){
        return response.text().then(function(data) {
          container.innerHTML = data;
        })
      })

      //if (container) {
      //  constructSearch();
      //}
      return hoops;
    }
  }

  function pushList$1(newList) {
    items = newList;
    container ? loadList() : console.error("no search mounted, hoops.mount('elementName')");
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
      loadList(e.target.value + e.key);
    });

    var boundPaste = (function(e) {
      var pastedText;
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
    var first = list.firstChild.firstChild;
    var current = null;
    container.onkeydown = function(e) {  
      switch (e.key) {
        case 'ArrowUp':
          if (document.activeElement == (input || first)) { break; }
          else { if(current){ current = current.previousSibling ? current.previousSibling : current; current.focus();} }
          break;
        case 'ArrowDown':
          if (document.activeElement == input) { current = first; current.focus(); }
          else { if(current){ current = current.nextSibling ? current.nextSibling : current; current.focus(); } }
        break;
        default:
          return true;
      }
      e.stopPropagation();
      e.preventDefault();
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