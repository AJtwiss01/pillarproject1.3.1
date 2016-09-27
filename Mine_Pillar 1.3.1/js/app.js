//jQuery scripts
// for in and out of school svg tooltip


$(document).ready(function() {
    'use strict';
    $('#hours-graph').on('mouseenter', '.dark-background, .blue-gradiant', function() {
        // console.log(this);
        var toShow = $(this).attr('id'); // get the hovered section's id
        // console.log(toShow);
        $(toShow).stop();
        var elemHide = $('#' + toShow + 'Tip');
        var elemShow = $('#' + toShow + 'Tip');
        // console.log(elemHide.attr('class'));
        // console.log(elemShow.prop( 'class' ,function(index,currentvalue){}));
        elemHide.hide();
        elemShow.attr('class', 'show animated hinge--Tip fadeInDown--Tip');
    }).on('mouseleave', '.dark-background, .blue-gradiant', function() {
        // console.log(this);

        var toShow = $(this).attr('id'); // get the hovered section's id
        // console.log(toShow);
        $(toShow).stop();
        var elemHide = $('#' + toShow + 'Tip');
        // console.log(elemHide);
        elemHide.attr('class', 'show animated hinge--Tip--out fadeOut');
    });


    $('.jump-to-section').on('click', function(evt) {
        evt.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');

    });

});
// Vanilla js not jquery 
// for wordpress feed 

function showFeed(data) {
    'use strict';
    var wpLink;
    var wpTitle;
    var wpDate;
    var wpMonthSplit;
    var wpCollection;
    var wpMonth;
    var wpMonthCollection;
    var wpOutput;
    var wpMonthJoin;

    var wp_title = document.getElementById('wps-feed');
    if (wp_title !== 'undefined' && wp_title !== null) {
        // console.log(data);
        if (data.status === 'ok') {
            for (var i = 0; i < data.items.length; ++i) {
                wpLink = data.items[0].link;
                wpTitle = data.items[0].title.toString().substr(0, 186);
                wpDate = data.items[0].pubDate.toString().substr(0, 17);
                wpMonthSplit = wpDate.split(" ");
            }
            for (var x = 0; x < wpMonthSplit.length; ++x) {
                wpMonthCollection = wpMonthSplit[2];
                wpMonth = "";
                switch (wpMonthCollection) {

                    case 'Jan':
                        wpMonth = 'January';
                        break;
                    case 'Feb':
                        wpMonth = 'February';
                        break;
                    case 'Mar':
                        wpMonth = 'March';
                        break;
                    case 'Apr':
                        wpMonth = 'April';
                        break;
                    case 'May':
                        wpMonth = 'May';
                        break;
                    case 'Jun':
                        wpMonth = 'June';
                        break;
                    case 'Jul':
                        wpMonth = 'July';
                        break;
                    case 'Aug':
                        wpMonth = 'August';
                        break;
                    case 'Sep':
                        wpMonth = 'September';
                        break;
                    case 'Oct':
                        wpMonth = 'October';
                        break;
                    case 'Nov':
                        wpMonth = 'November';
                        break;
                    case 'Dec':
                        wpMonth = 'December';
                        break;

                }
                // console.log(wpMonth);
                wpCollection = [wpMonthSplit[0], wpMonthSplit[1], wpMonth, wpMonthSplit[3]];
                wpMonthJoin = wpCollection.join(" ");
                // console.log(wpMonthJoin);
            }
            wpOutput = '<a href="' + wpLink + '" class="webinar-link"><h5 class="webinar-title">' + wpTitle + '</h5> <p class="small"><i class="fa fa-calendar-o"></i><span class="date">' + wpMonthJoin + '</span></p></a>';
            wp_title.innerHTML = wpOutput;

        }
    }
}


//fontawsome check
function css(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}

window.onload = function() {
    var span = document.createElement('span');

    span.className = 'fa';
    span.style.display = 'none';
    document.body.insertBefore(span, document.body.firstChild);

    if ((css(span, 'font-family')) !== 'FontAwesome') {
        // add a local fallback
        // console.log('not loaded');
        var l = document.createElement("link");
        l.rel = "stylesheet";
        l.href = "bower_components/font-awesome/font-awesome.min.css";
        $("head").append(l);
    } else {
        // console.log('loaded')

    }
    document.body.removeChild(span);
};
