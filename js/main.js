let links =Array.from( document.querySelectorAll(".li-links"));
let view ;

for (const a of links) {
    a.addEventListener('click',function(e){
            let element=e.target.getAttribute('value');
            // view = document.querySelector(element);
            $(element).siblings().animate({'opacity':'0','width':'0','height':'0'},500,function()
            {$(element).siblings().css({'display':'none'})})


            $(element).animate({'opacity':'1','width':'100%','height':'100vh'},500,function(){});
            $(element).css({'display':'block'})
            $('.sidebar').removeClass('active');
        })

}
$(document).ready(function(){
    $('.loading').fadeOut(1000)
})
// type .js
var typed = new Typed('#type', {
    // Waits 1000ms after typing "First"
    strings: ['','web Developer','web Designer','Front end  developer'],
    typeSpeed: 80,
    shuffle: true,
    backSpeed: 80,
    loop: true,
});
////js 
$('.btun').click(function (e) { 
    $('.sidebar').toggleClass('active');
});



// $(document).ready(function() {
//     // تفاعل عند النقر على الرابط
//     $('.sidebar a').click(function(e) {
//       e.preventDefault(); // لمنع الانتقال إلى الصفحة الأصلية
//       var page = $(this).text().toLowerCase(); // احصل على اسم الصفحة
//       // قم بتحميل المحتوى الخاص بالصفحة باستخدام AJAX أو أي طريقة أخرى
//     $('.content').html('تم تحميل ' + page + '...');
//     });
// });
