//change color for navbar
$(window).scroll(function(){
 
   if($(window).scrollTop() > 150){
    $("#navBar").css({"backgroundColor":"white", "box-shadow" :"#9fa4ac 2px 2px 20px"});
   
   }else{
    $("#navBar").css({"backgroundColor":"#eee", "box-shadow" :"none"});
   }
   $('#navBar').css("transition",'1s');
})

//smothscroll
$('nav a').click(function(){
    let currentId = $(this).attr('href');
    let sectionOffset = $(currentId).offset().top;
    $('html, body').animate({scrollTop:sectionOffset},2000)
    
})


//move to top
$('#moveUp').fadeOut();
$(window).scroll(function(){
    if($(window).scrollTop() > $('.arrivals').scrollTop()){
        $('#moveUp').fadeIn();
    }else{
        $('#moveUp').fadeOut();
    }
})


$("#moveUp").click(function(){
    $('html, body').animate({scrollTop:0},2000);
})






//loading screen
$('body').css('overflow','hidden');
$(document).ready(function(){// المتصفح يكمل تحميل الصفحة
    $('.loading').fadeOut(4000, function(){
        $('body').css('overflow','auto');
    })
    
})



$('.theme i').click(function(){
    let w = $('.options').outerWidth();
    let lft = $('.theme').offset().left;
    if(lft == 0 ){
        $('.theme').css({'left': -w, 'transition' : "2s"}); // $('.theme).animation({left:-w},2000)
    }else{
        $('.theme').css({'left': 0, 'transition' : "2s"});
    }

})



let colors = ["#F99417","#5D3891","#86A3B8","#00337C","#FF2020"];
for(let i=0 ; i<colors.length; i++){
$('.options li').eq(i).css("backgroundColor",colors[i]);
}



$('.options li').click(function(){
    let bg = $(this).css("backgroundColor")
    $('html').attr('style', `--main-color:${bg}`)
})





