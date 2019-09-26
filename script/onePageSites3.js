$(function() {
    $('#list li').click(function() {
        // console.log(this.id); // получить id элемента по клику на него
        console.log($(this).prop('id')); // получить id элемента по клику на него
        var itemId = $(this).prop('id');
        var pageContent = 'http://localhost:8080/lesson26.onePageSites/content' + itemId.substr(4) + '.html';

        $('#content').load(pageContent)
    });

});
