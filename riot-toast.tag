<riot-toast ref="root">
<ul>
    <li each="{ note, i in opts.notes }" class="{ note.class }" no-reorder >
        <div class="dismiss" onclick="{ dismiss }">X</div>
        <p class="header">{ note.header }</p>
        <p>
            { note.notetext }
        </p>
        <a if="{ note.link }" href="{ note.link }">{ note.linktext }</a>
    </li>
</ul>

    <script>

    "use strict";

    this.setList = function (e) {
    };

    this.on('mount', function () {
        this.update();
    });

    this.on('update', function () {
    });

    this.on('unmount', function () {
    });

    // my events
    this.dismiss = function (e) {
        opts.list.splice(e.item.i,1);
    };

    </script>

    <style scoped>
    :scope {
        position: absolute;
        top: 130px;
        left: 60px;
        width: 125px;
    }
    :scope.dragover {
        background: red;
    }
    .dragover {
        background: red;
    }
    div.dismiss {
        position: absolute;
        right: 2px;
        top: 2px;
        font-size: 8px;
        cursor: pointer;
    }
    a {
        font-size: 9px;
        border-bottom: thin navy dotted;
        color: navy;
    }
    p {
        font-size: 8px;
    }
    p.header {
        font-size: 10px;
    }
    ul {
    }
    ul li {
        position: relative;
        padding: 3px 6px;
        margin: 1px;
        text-align: left;
        font-size: 1.0em;
        border: 1px solid rgb(90, 90, 90);
        box-shadow: 1px 1px 1px rgba(90, 90, 90, .5);
        border-radius: 7px;
        background: rgb(250, 250, 250);
        color: black;
    }
    ul li.green {
        border: 1px solid rgb(49, 121, 32);
        box-shadow: 1px 1px 1px rgba(49, 121, 32, .5);
        background: rgba(250, 255, 247, 1);
        color: darkgreen;
    }
    ul li.red {
        border: 1px solid rgb(121, 49, 32);
        box-shadow: 1px 1px 1px rgba(121, 49, 32, .5);
        background: rgb(255, 250, 247);
        color: maroon;
    }
    ul li.blue {
        border: 1px solid rgb(49, 32, 121);
        box-shadow: 1px 1px 1px rgba(49, 32, 121, .5);
        background: rgb(250, 247, 255);
        color: navy;
    }
    ul li.black {
        border: 1px solid rgb(190, 190, 190);
        box-shadow: 1px 1px 1px rgba(190, 190, 190, .5);
        background: black;
        color: lightgray;
    }
    ul li.gold {
        border: 1px solid rgb(121, 100, 32);
        box-shadow: 1px 1px 1px rgba(121, 100, 32, .5);
        background: rgba(255, 250, 147, 1);
        color: saddlebrown;
    }

    </style>

</riot-toast>

