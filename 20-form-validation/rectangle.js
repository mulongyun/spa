$(function(){
    // get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');

    /*calc button click event */
    $btnCal.click(function(){
        // validate if error return;
        if(!validate('#width')||!validate('#height')) return;
        // get value
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = 2*(w+h),
            a = w*h;
        //output
        $perimeter.val(p);
        $area.val(a);
    });
    //1. event keypress
    //2. event argument get key value,e.key,输入的那个字符e.target.value文本框的值
    //3. illegal key filter,e.preventDefault()
    //合法字符也要考虑位置，例如.3,4e
    $width.keypress(function(e){
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {//除了字母e之外的字母和符号都不能输入
            e.preventDefault();
            return;
        }
        //合法字符e
        //允许出现在非科学计数法的数字末尾/中间
        //不允许出现在非科学计数法的数字前面
        //不允许出现在空文本中
        //不允许出现在负号后边
        //不允许出现在科学计数法数字(e/E)的前面/中间/末尾
        var pos=e.target.selectionStart,
        con=e.target.value;
        if(e.key==='e'){
            if(pos===0 || con.indexOf('e')!==-1 || con.indexOf('E')!==-1){
                e.preventDefault();return;
            }
            if(pos===1 && con.substring(0,1)==='-'){
                e.preventDefault();return;
            }
        }
        //合法字符E
        //合法字符.
        //合法字符-
    });
    $height.keypress(function(){
        //和width一样
    });

//不符合规定点tab不能切换焦点
    $width.focusout(function(){
        //if(!validate(width)) select this;
        if(!validate('#width')) $width.select();
    })

    $height.focusout(function(){
        //if(!validate(height)) select this;
        if(!validate('#height')) $width.select();
    })

    function validate(field){
        //get dom error message
        var $data=$(field),
            $msg=$(field+'-validation-message');
        //validate null
        if($data.val()===''){
            $msg.html('不能为空！');
            $data.select();
            return false;
        }
        //validate number
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须是数值');
            $data.select();
            return false;
        }
        //validate >0
        if(Number($data.val())<0){
            $msg.html('必须大于0！');
            $data.select();
            return false;
        }

        $msg.html('');
        return true;
    }
});