var $dlgGoto=(function(){
    var html=""
      + "<div class='notepad-dlg-goto'>"
      + "<div class='dialogbox'>"
      + "<div class='titlebar'>"
      + "<p class='title'>转到指定行</p>"
      + "<span class='close-btn'>×</span>"
      + "</div>"
      + "<div class='main'>"
      + "<label for=''>行号（L）：</label>"
      + "<br>"
      + "<input type='text' class='txt-line-number' autofocus>"
      + "<br>"
      + "<input class='btn-goto' type='button' value='转到'>"
      + "<input class='btn-cancel' type='button' value='取消'>"
      + "</div>"
      + "</div>"
      + "</div>",
        $dlg=$(html),
        cfg={
          container:'body',
          num:6,
          title:'同意',
          onClick:null
        };

    function show(conf){
      //1.DOM draw
      $(cfg.container).append($dlg);
      $.extend(cfg,conf);
      //2.event bind
      $btn.click(cfg.onClick())
    }
    return{
      show:show
    }
  }());//立即执行函数