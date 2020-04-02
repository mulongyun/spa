$(function(){
    var $url = $('input[type="text"]'),
        $btnSave = $('input[type="button"]'),
        $img = $('img'),
        $tmpImg = $('<img>');

    var strImg = window.localStorage.getItem('img');
    if(strImg !== ''){
        $img.attr('src',strImg);
    }

    $btnSave.click(function(){
        //validate url not null
        var url = $url.val();

        if(url === '') return;

        //load url image tmpImg
        $tmpImg.attr('crossOrigin','anonymous');
        $tmpImg.attr('src',url);

    });
    $tmpImg.load(function () {
                //create canvas
                var can = $('<canvas>').get(0),
                ctx = can.getContext('2d');
    
            can.width = $tmpImg.get(0).width;
            can.height = $tmpImg.get(0).height;
    
            //canvas fill tmpImage
            ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height);
    
            //canvas output base64 string
            var str = can.toDataURL();
            console.log(str);
    
            //save base64 string to local 
            window.localStorage.setItem('img',str);
            $img.attr('src',str);
    })
});