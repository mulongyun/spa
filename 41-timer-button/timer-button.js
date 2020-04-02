var $timerButton=(function(){
    var $btn=$("<input type='button' disabled>"),
    // html="<input type='button' value='同意（6s）' disabled>",
        cfg={
          container:'body',
          num:6,
          title:'同意',
        },
        num,
        timer;

    function show(conf){
      //1.DOM draw
      // $(conf.container).html(html)
      $(cfg.container).append($btn);
      $.extend(cfg,conf);
      $btn.val(cfg.title+'('+cfg.num+'s)')

      timer=setInterval(function(){
        cfg.num--;
        if(cfg.num===0){
          clearInterval(timer);
          $btn.val(cfg.title);
          $btn.removeAttr('disabled');
        }else{
          $btn.val(cfg.title+'('+cfg.num+'s)');
        }
      },1000)
      
      $btn.click(function(){
       cfg.onClick();
      })
      //2.event bind
    }

    return{
      show:show
    }
  }());//立即执行函数



function TimerButton(){
    var $btn=$("<input type='button' disabled>"),
    // html="<input type='button' value='同意（6s）' disabled>",
        cfg={
          container:'body',
          num:6,
          title:'同意',
        },
        num,
        timer;
        
    this.show=function show(conf){
      //1.DOM draw
      // $(conf.container).html(html)
      $(cfg.container).append($btn);
      $.extend(cfg,conf);
      $btn.val(cfg.title+'('+cfg.num+'s)')

      timer=setInterval(function(){
        cfg.num--;
        if(cfg.num===0){
          clearInterval(timer);
          $btn.val(cfg.title);
          $btn.removeAttr('disabled');
        }else{
          $btn.val(cfg.title+'('+cfg.num+'s)');
        }
      },1000)
      
      $btn.click(function(){
       cfg.onClick();
      })
      //2.event bind
    }
}

  //不用页面加载事件$(function(){})

  //封装成对象，有几种方案
  //1.简单对象字面量，不完全是面向对象，不能包括私有方法
  // var timerBtn={
  //   show:function ()  
  // }
  // 2.工厂函数，一个函数返回值是一个简单对象
  // var timerBtn=(function(){
  //   return{
  //     show:function(){}
  //   }
  // })()
  // 3.构造函数
  // function TimerBtn(){
  // }
  // var tb=new TimerBtn();


