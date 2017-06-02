var template = "<div class='card mb-3 text-center'><div class='card-block '><blockquote class='card-blockquote'><p><b>{{title}}</b></p> <footer>{{body}}</footer></blockquote></div></div>";
var html = [];


$.getJSON( "http://jsonplaceholder.typicode.com/posts", function( json ) {
    for (i = 0; i < json.length; i++) {
        html[i] = Mustache.to_html(template, json[i]);
    }
    $('#wall').html(html);
});



