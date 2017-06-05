var preperePost = function( json ) {
    html = [];
    var promise = $.Deferred();
    for (i = 0; i < json.length; i++) {
        html[i] = Mustache.to_html(template, json[i]);
    }
    promise.resolve();
    return promise;
};

var getPosts = function () {
    var promise = $.Deferred();
    for(i=0; i < 10; i++) {
        $('#wall').append(html.pop());
    }
    promise.resolve();
};

$.getJSON( "http://jsonplaceholder.typicode.com/posts" ).then(preperePost
).then(getPosts);


$(window).on('scroll', function() {
    if ($(window).scrollTop() >= $('#wall').offset().top + $('#wall').outerHeight() - window.innerHeight) {
        getPosts(html);
    }
});


