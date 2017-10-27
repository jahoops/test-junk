<riot-alert>
  <style scoped>
    :scope {
        font-size: 14px;
        color: #555;
        text-align: center; 
    }
    p {
        font-size: 42px;
        color: #777; 
    }
    p.greaterThanZero {
        color: #900;
        text-decoration: underline;
    }
    .styleLink {
        color: #FFF;
        background-color: #AAA;
        border-radius: 6px;
        width: 80px;
        margin: 0 auto;
        padding: 6px 0px 3px 0px;
        box-shadow: #EEE 2px 2px;
        cursor: pointer;
    }
    .styleLink svg {
        vertical-align: sub;
        fill: #EEE;
        height: 16px;
        width: 17px;
    }
  </style>
    <h3>AWAITING YOUR ACTION</h3>
    <p class={countClass}>{count}</p>
    <div class='styleLink' onClick={clicklink}>
        <span>VIEW</span><svg><use xlink:href="/hd/assets/svg/font-awesome/font-awesome.svg#arrow-right"></use></svg>
    </div>
    clicklink() { 
        window.location.href = "default.cfm?p=tl&tid=all&uid=current"
    }
    <script>
        this.count = '...';
        var self = this;
        function loaddata() { 
            $.get('data/json/jsonCZOpenTasksCount.cfm', function(data) {
                self.count = queryToObject(data)[0].thecount;
                self.countClass = self.count > 0 ? 'greaterThanZero' : '';
                self.update();
            })
        }
        loaddata();
  </script>
</riot-alert>