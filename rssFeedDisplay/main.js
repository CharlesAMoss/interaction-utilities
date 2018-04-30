const feed_url = '';


$(document).ready(function () {
    $.ajax({
        url: feed_url,
        type: 'GET',
        dataType: "xml"
    }).done(function(xml) {

        $.each($("item", xml), function(i, e) {

            // todo
        });
    });
});