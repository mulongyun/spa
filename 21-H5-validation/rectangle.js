$(function(){
    // get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        // $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
        $form=$('form');

    /*calc button click event */
    // $btnCal.click(function(){
    $form.submit(function(e){
        e.preventDefault();
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
});