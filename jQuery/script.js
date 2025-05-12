// THE .CSS USE IN JQUERY
// $ = document.querySelector()
// .css = .style
// $("h1").css("color", "red");
// The dollar sign $ could be for only 1 element or all of them

$("h1").addClass("big-title margin-50");

$("button");

$("a").attr("href", "https://www.yahoo.com");


// EVENTLISTENER WITH JQUERY
$("button").click(function() {
    $("h1").css("color", "purple")
})

// KEYPRESS WITH JQUERY
$(document).keypress(function(event) {
    $("h1").text(event.key);
})

//USING EVENTLISTENER WITH ON
$("h1").on("mouseover", function(){
    $("h1").css("color", "orange")
})

$("button").on("click", function() {
    // $("h1").fadeToggle();
    // $("h1").animate({opacity: 0.5});
    $("h1").slideToggle();
})



// MANIPULATING LOCAL
// before()
// after()
// prepend() abre a tag e poe antes do conteudo
// apend() abre a tag e poe depois do conteudo 
// dentro dos parenteses colocar a tag html : append(" <h2>NEW</h2> ")

// TEXT MANIPULATION
//.text to manipulate text
//.html to manipulate innerHTML


//  THIS IS THE EXACT SAME THING TO PUT THE SCRIPT TAG BEFORE THE CLOSE BODY TAG
// $(document).ready(function() {
//    $("h1").css("color", "red");
// })


//THE WAY USING FOREACH AND PURE JS 
// let buttons = document.querySelectorAll("button");
// buttons.forEach(function(button){
//     button.addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple"
//     })
// })