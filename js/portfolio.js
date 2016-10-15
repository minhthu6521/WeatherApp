function getQuote(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=", function(a) {
        var random = Math.floor(Math.random() * 29);
        $("#quote").html(a[random].content + "<p>— " + a[random].title + "</p>")
    });

};
$(document).ready(function() {
    
        getQuote();
        
        $("#change-quote").on('click', function(){
             getQuote();
        });
        
        $(function() {
	       var oTop = $('#skill').offset().top - window.innerHeight;
            $(window).scroll(function(){
    
 		       var pTop = $('body').scrollTop();
    	       console.log( pTop + ' - ' + oTop );
 		       if( pTop > oTop ){
                   $('#html-css').delay(1000).queue(function () {
                   $(this).css('width', '85%')
                   });
                   
                   $('#javascript').delay(1000).queue(function () {
                   $(this).css('width', '75%')
                   });
                    
                   $('#bootstrap').delay(1000).queue(function () {
                   $(this).css('width', '70%')
                   });
                   
                   $('#photoshop').delay(1000).queue(function () {
                   $(this).css('width', '40%')
                   });
                   
                   $('#csharp').delay(1000).queue(function () {
                   $(this).css('width', '75%')
                   });
                   
                   $('#java').delay(1000).queue(function () {
                   $(this).css('width', '60%')
                   });
                   
                   $('#aspnet').delay(1000).queue(function () {
                   $(this).css('width', '60%')
                   });
                   
                   $('#sql').delay(1000).queue(function () {
                   $(this).css('width', '75%')
                   });
               }  
	        });
        });
        
        $("#aboutMe").click(function(){
            $("#about-content-content").fadeOut(function() {
                $(this).html("World").fadeIn();
            });
        }); 
        $("#education").click(function(){
            $("#about-content-content").fadeOut(function() {
                $(this).html("World").fadeIn();
            });
        });
    });

