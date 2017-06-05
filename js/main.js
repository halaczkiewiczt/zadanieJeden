


var preperePost = function( json ) {
    var html = [];
    var promise = $.Deferred();

    for (i = 0; i < json.length; i++) {
        html[i] = Mustache.to_html(template, json[i]);
    }
    promise.resolve(html);
    return promise;
};

var getPosts = function (html) {
    var promise = $.Deferred();
    for(i=0; i < 10; i++) {
        $('#wall').append(html.pop());
    }
    promise.resolve(html);
    return promise;
};


$.getJSON( "http://jsonplaceholder.typicode.com/posts" ).then(preperePost
).then(getPosts);

$(window).on('scroll', function() {
    if ($(window).scrollTop() >= $('#wall').offset().top + $('#wall').outerHeight() - window.innerHeight) {
        getPosts();
    }
});


