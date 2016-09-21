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
 // Vanilla js not jquery AJ-s notes
 var title_1 = document.getElementById('wps-feed');

 function showFeed(data) {
     if (data.status ==='ok') {
         for (var i = 0; i < data.items.length; ++i) {
             var output = '<a href="' + data.items[0].link + '"><p class="social-p"><span class="blog-description">' + data.items[0].description.toString().substr(0, 186) + '</span></p></a>';

         }

         title_1.innerHTML = output;
     }
 }

 showFeed();
