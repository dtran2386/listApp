$(document).ready(function() {
    
    var $list = $('ul');
    var $inputBox = $('#inputContent');
    var $add = $('[type="submit"]');
    var $li = $('li');
    
    // hide input bar when page loads
    $('#inputStuff').hide();
    
    // hide add item button on click
    $('#btn').on('click', function() {
        $(this).hide();
        $('#inputStuff').show();
    });
    
    // count the # of items in list
    function updateCounter() {
        var leng = $('#orange li').length;
        var counter = $('#counter');
        counter.text(leng);
    };
    updateCounter();
    
    // appending new items to ul
    $add.on('click', function (e) {
        e.preventDefault();
        var text = $inputBox;
        $list.append('<li>' + text.val() + '</li>');
        text.val('');
        updateCounter();
    });
    
    // removing the li's
    $list.on('click', 'li', function () {
        var $this = $(this);
        
        if ($this.hasClass('complete')) {
            $this.remove();
        } else {
            $this.attr('class', 'complete');
            $list.append(this);
//            $this.appendTo($list);
        }
        updateCounter();
        
    });
    

});