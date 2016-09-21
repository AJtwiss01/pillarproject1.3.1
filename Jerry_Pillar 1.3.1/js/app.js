 $(document).ready(function() {



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

    });
