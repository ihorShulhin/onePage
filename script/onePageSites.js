$(function() {
    $('#list li').click(function() {
        // console.log(this.id); // получить id элемента по клику на него
        console.log($(this).prop('id')); // получить id элемента по клику на него
        var itemId = $(this).prop('id');
        var contentId = 'content' + itemId.substr(4);
        console.log(contentId);

        $('#content div').css('z-index', '1');
        $('#' + contentId).css('z-index', '2');
    });
});

// если мы накладываем блок на блок через z-index ,то нужно чтобы их размеры совпадали, а то будут видны нижние длинные блоки
