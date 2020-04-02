var PasswordTextbox = function(n) {
    var n = $("#add-password"),
        a = $("#get-password"),
        o = [],
        t = $('<input type="password">'), 
        e = $('<input type="text">'), 
        i = $("<div></div>"),
         d = $('<div class="wd-password">密码：</div>');
         d.append(t),
         d.append(i),
         d.append(e),
    n.click(function() {
        var n = new PasswordTextbox({
            container: "div.main"
        });
        o.push(n),
        a.removeAttr("disabled")
    }),
    a.click(function() {
        o.forEach(function(n) {
            alert(n.getPwd())
        })
    });

    $(n.container).append(d),
    t.on("input", function() {
        e.val(t.val())
    }),
    i.mouseover(function() {
        e.css("z-index", "10")
    }),
    i.mouseout(function() {
        e.css("z-index", "-10")
    }),
    this.getPwd = function() {
        return e.val()
    }
};
