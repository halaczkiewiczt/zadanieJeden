var template = "<div class='card mb-3 text-center'><div class='card-block '><blockquote class='card-blockquote'><p><b>{{title}}</b></p> <footer>{{body}}</footer></blockquote></div></div>";
var html = [];
var counter = 0;
// function getPosts() {
//     var counter = 0;
//     if (counter < html.length) {
//         for (var i = 0; i < 10; i++) {
//             $('#wall').append(html[counter]);
//             counter += 1;
//             console.log(html[counter]);
//         }
//     }
// }
var getPosts = function () {
    for(i=0; i < 10; i++) {
        $('#wall').append(html.pop());
    }
}


var preperePost = function( json ) {
    for (i = 0; i < json.length; i++) {
        html[i] = Mustache.to_html(template, json[i]);
    }
};


$.getJSON( "http://jsonplaceholder.typicode.com/posts" ).done(function (args) {
    preperePost(args);
}).done(function () {
    for(i=0; i < 10; i++) {
        getPosts();
    }
});

$(window).bind('scroll', function() {
    if ($(window).scrollTop() >= $('#wall').offset().top + $('#wall').outerHeight() - window.innerHeight) {
        getPosts();
    }
});


