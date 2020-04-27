$(document).ready(function() {
    $.ajax({
        url : "https://fullstack-book.ariefdfaltah.com/book/list?key=fritzent",
        success: function(data) {
            for(var i = 0 ; i < data.meta.data_count ; i++){
                console.log(data.data[i]);
                var book = 
                '<tr>' + 
                '<td>' + data.data[i].title +'</td>'+
                '<td>' + data.data[i].category +'</td>' +
                '<td>' + data.data[i].description +'</td>' +
                '<td class="toolUpdate"> <button class="btn-update"> update </button> </td>' +
                '<td class="toolDelete"> <button class="btn-delete"> delete </button> </td>' +
                '</tr>';

                $('.list-book').append(book);
            }
        }
    });
});