(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.riotGridTiles = {})));
}(this, (function (exports) { 'use strict';
    var grid = null;
    var gridWidth = null;
    var cols = 12;
    var tiles = [];
    var resizeHandle = null;
    var moveHandle = null;
    var mount = mount$1;
    var test = test$1;

    var core = Object.freeze({
        mount: mount$1,
        test: test$1,
    });

    function mount$1(selector, className) {
        if(selector) {
            if(selector[0]==='#') selector = selector.slice(1);
            grid = document.getElementById(selector);
            gridWidth = document.getElementById(selector).offsetWidth;
            return riotGridTiles;
        }
    }

    function test$1() {
        grid ? createGrid() : console.error("no grid mounted, riotGridTiles.mount('elementName')");
    }

    var riotGridTypes = {
        flexWrap : {   
            display : 'flex',
            flexWrap : 'wrap',
            alignContent: 'flex-start',
        },
    };
    var riotGridTileTypes = {
        default : {   
            border : function(){ '2px solid ' + randomColor(180);},
            backgroundColor : 'white',
            borderRadius : '10%',
            margin: '5px',
        },        
    };
    
    function createGrid(gridType, tileType, newCols) {
        debugger;
        var gType = gridType ? (typeof gridType === 'object' ? gridType : riotGridTypes[gridType]) : riotGridTypes.flexWrap;
        var tType = tileType ? (typeof tileType === 'object' ? tileType : riotGridTileTypes[tileType]) : riotGridTileTypes.default;
        cols = newCols ? newCols : cols;
        // three rows with number of cols specified, identified by row and col
        grid.removeAttribute('style');
        for (var i = 0; i < gType.length; i++) {
            grid.style[gType[i].key] = gType[i];
        }
        for(var i=0; i<3; i++) {
            for(var j=0; j<cols; j++) {
                var tile = document.createElement("div");
                for (var i = 0; i < gType.length; i++) {
                    tile.style[gType[i].key] = gType[i];
                }
                var size = Math.floor(gridWidth / cols);
                tile.style.height = size.toString() + 'px';
                tile.style.width = size.toString() + 'px';
                var testedSize = measure(tile, function(el){return el.offsetWidth});
                var maxtries = 3;
                while(size !== testedSize && testedSize > 0 && maxtries > 0) {
                    var newSize = size - (testedSize - size);
                    tile.style.height = newSize.toString() + 'px';
                    tile.style.width = newSize.toString() + 'px';
                    testedSize = measure(tile, function(el){return el.offsetWidth});
                    maxtries--;
                }
                grid.appendChild(tile);
            }
        }
    }    

    function randomColor(brightness){
        function randomChannel(brightness){
          var r = 255-brightness;
          var n = 0|((Math.random() * r) + brightness);
          var s = n.toString(16);
          return (s.length==1) ? '0'+s : s;
        }
        return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
    }

    function measure(el, fn) {
        var pV = el.style.visibility, 
            pP = el.style.position;
            
        el.style.visibility = 'hidden';
        el.style.position = 'absolute';
        
        document.body.appendChild(el);
        var result = fn(el);
        el.parentNode.removeChild(el);
        
        el.style.visibility = pV;
        el.style.position = pP;
        return result;
    }

    exports.mount = mount;
    exports.test = test;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
