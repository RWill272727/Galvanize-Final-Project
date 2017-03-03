$(document).ready(function() {
    // Page connect status check
    document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
    document.getElementById("q1").classList.add("status-good");


    $('form').submit(function() {
        event.preventDefault();
        var $input = $('input')
        var keyword = $input.val();
        var replaced = keyword.replace(/ /g, '+');
        $input.val('');

        var url = 'https://www.googleapis.com/books/v1/volumes?q=' + replaced;

        $.get(url, function(data) {
            var rating = data.items[0].volumeInfo.averageRating;
            var imageURL = data.items[0].volumeInfo.imageLinks.thumbnail;
            var date = data.items[0].volumeInfo.publishedDate;
            var changed = date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
            console.log(data.items[0].volumeInfo)
            var $img = $("<img src=\"" + imageURL + "\" alt=\"replaced\">");

            var $section = $('#returnSearch');
            $section.html('');
            $section.append($img);
            $section.append("<br> Rating " + rating + " Stars!");
            $section.append("<br> Published in " + changed);

        })

        // google key: AIzaSyC1-owJosrUAoxcTkPQQLU5zu-aN8Xz_TE
    })
    var dreamURL = 'http://idreambooks.com/api/publications/recent_recos.json?key=f1a7f67dd8c0733172238421239f2429f2e55bf9&slug=non-fiction';
    $.get(dreamURL, function(data) {
        var array = [];
        for (var i = 0; i < 10; i++) {
            array.push(data[i].title);
        }
        var string = array.toString();
        var newArray = string.replace(/,/g, "<br>");
        var topten = $('#topten');
        topten.html('');
        topten.append("<h2>The Top Ten Non-Fiction Books Are...</h2>" + newArray);
    })
    var bestURL = 'http://idreambooks.com/api/publications/recent_recos.json?key=f1a7f67dd8c0733172238421239f2429f2e55bf9&slug=bestsellers';
    $.get(bestURL, function(data) {
        var array = [];
        for (var i = 0; i < 10; i++) {
            array.push(data[i].title);
        }
        var string = array.toString();
        var newArray = string.replace(/,/g, "<br>");
        var topten = $('#bestsellers');
        topten.html('');
        topten.append(newArray);
    })
});
