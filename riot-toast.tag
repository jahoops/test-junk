<riot-toast ref="toaster">
<ul class="riot-toast-ul">
    <li ref="li" class="riot-toast-li riot-toast-{ note.class }" each="{ note, i in opts.notes }" no-reorder >
        <div class="riot-toast-dismiss" onclick="{ dismiss }">X</div>
        <div class="riot-toast-title">{ note.title }</div>
        <div class="riot-toast-text">{ note.text }</div>
        <a class="riot-toast-link" if="{ note.link }" href="{ note.link }">{ note.linktext }</a>
    </li>
</ul>
    
    <script>

    "use strict";

    this.setList = function (e) {
    };

    this.on('mount', function () {
        if(opts.position) {
            if(opts.position.element) {
                var xoffset, yoffset;
                if(opts.position.offset) {
                    xoffset = opts.position.offset.x ? opts.position.offset.x : 0;
                    yoffset = opts.position.offset.y ? opts.position.offset.y : 0;
                }
                var pos = getPosition(document.querySelector(opts.position.element));
                switch(opts.position.at) {
                    case 'left':
                    default:
                    this.root.style.position = 'absolute';
                    this.root.style.top = pos.y + 'px';
                    var positionInfo = this.refs.li.getBoundingClientRect();
                    this.root.style.left = (pos.x - positionInfo.width + xoffset) + 'px';
                    this.root.style.top = (pos.y + yoffset) + 'px';
                }
            }
        }
    });

    this.on('update', function () {
    });

    this.on('unmount', function () {
    });

    // my events
    this.dismiss = function (e) {
        opts.notes.splice(e.item.i,1);
    };

    </script>

    <style scoped>
    :scope {
    }
    .riot-toast-dismiss {
        position: absolute;
        right: .2em;
        top: 0;
        font-size: 0.6em;
        cursor: pointer;
    }
    .riot-toast-link {
        font-size: 0.9em;
        border-bottom: thin navy dotted;
        color: navy;
    }
    .riot-toast-text {
        font-size: 0.8em;
    }
    .riot-toast-title {
        font-size: 1.0em;
    }
    .riot-toast-ul {
        list-style: none;
    }
    .riot-toast-li {
        width: 200px;
        position: absolute;
        left:0;
        top: 0;
        padding: 3px 12px 3px 6px;
        margin: 1px;
        text-align: left;
        border: 1px solid rgb(90, 90, 90);
        box-shadow: 1px 1px 1px rgba(90, 90, 90, .5);
        border-radius: 7px;
        background: rgb(250, 250, 250);
        color: black;
    }
    .riot-toast-green {
        border: 1px solid rgb(49, 121, 32);
        box-shadow: 1px 1px 1px rgba(49, 121, 32, .5);
        background: rgba(250, 255, 247, 1);
        color: darkgreen;
    }
    .riot-toast-red {
        border: 1px solid rgb(121, 49, 32);
        box-shadow: 1px 1px 1px rgba(121, 49, 32, .5);
        background: rgb(255, 250, 247);
        color: maroon;
    }
    .riot-toast-blue {
        border: 1px solid rgb(49, 32, 121);
        box-shadow: 1px 1px 1px rgba(49, 32, 121, .5);
        background: rgb(250, 247, 255);
        color: navy;
    }
    .riot-toast-black {
        border: 1px solid rgb(190, 190, 190);
        box-shadow: 1px 1px 1px rgba(190, 190, 190, .5);
        background: black;
        color: lightgray;
    }
    .riot-toast-gold {
        border: 1px solid rgb(121, 100, 32);
        box-shadow: 1px 1px 1px rgba(121, 100, 32, .5);
        background: rgba(255, 250, 147, 1);
        color: saddlebrown;
    }

    </style>

</riot-toast>

