console.log(10);
var ans = -1;
var ansstatus = -1;
var tmp2;

$(document).ready(function(){
    $(".backover").click(function(){
        $(this).css("display","none");
        $('.overlay').css("display","none");
        $(".var").css("background-color","#613B6A");

    });
    $("#con").click(function(){
        console.log("Aloha");
        if (ansstatus == 1)
        {
            $("#var"+tmp2).css("background-color","#66CC00");
        }
        else
        {
            $("#var"+tmp2).css("background-color","#FF3300");
        }
    });
    $('.btn').click(function()
    {
        $(".overlay").css("display","block");
        $('.backover').css("display","blocK");
    });
});
function func(qnum)
{
    console.log(qnum);
    $("#btn"+qnum).css('visibility','hidden');

    if (qnum == 1)
    {
        $(".quesbar").html("►Что означает Беркут на флаге Казахстана? ");
        $('.quesbar').css("font-size","50px");
        $('.quesbar').css("height","150px");
        $('.quesbar').css("padding-top","50px");
        ans = 4;
        $('#var1').html("Память о предках ");
        $('#var2').html("Изобилие и богатство ");
        $('#var3').html("Любовь, верность, дружба");
        $('#var4').html("Сила, независимость, стремление к цели");
    }
    if (qnum == 2)
    {
        $(".quesbar").html("►Что значит синий цвет флага? ")
        $('.quesbar').css("font-size","50px");
        $('.quesbar').css("height","160px");
        $('.quesbar').css("padding-top","80px");
        ans = 2;
        $('#var1').html("Море, пляж, веселье  ");
        $('#var2').html("Небо, единство, свобода ");
        $('#var3').html("Спокойствие, синхронность ");
        $('#var4').html("Смелость, агрессивность");
    }
    if (qnum == 3)
    {
        $(".quesbar").html("►Что изображено сзади монет тенге?");
        $(".quesbar").css("font-size","40px");
        $('.quesbar').css("height","50px");
        $('.quesbar').css("padding-top","20px");
        ans = 3;
        $('#var1').html("Флаг РК   ");
        $('#var2').html("Слова Гимна РК  ");
        $('#var3').html("Герб РК  ");
        $('#var4').html("Свобода");
    }
    if (qnum == 4)
    {
        $('.quesbar').css("padding-top","20px");
        $('.quesbar').css("height","50px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("text-align","left");
        $(".quesbar").html("Что расположено на верхней части Герба? ");
        ans = 4;
        $('#var1').html("Надпись 'Казахстан'");
        $('#var2').html("Тулпар ");
        $('#var3').html("Беркут");
        $('#var4').html("Звезда ");
    }
    if (qnum == 5)
    {
        $('.quesbar').html("►Первая профессия президента РК? ");
        $('.quesbar').css("height","120px");
        $('.quesbar').css("font-size","40px");
        $('.quesbar').css("padding-top","70px");
        ans = 2;
        $('#var1').html("Шахтер");
        $('#var2').html("Металлург");
        $('#var3').html("Археолог ");
        $('#var4').html("Художник");
    }
    if (qnum == 6)
    {
        $('.quesbar').html("►Сколько лет Астане? ");
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","35px");
        $('.quesbar').css("padding-top","70px");
        ans = 1;
        $('#var1').html("20");
        $('#var2').html("19");
        $('#var3').html("18");
        $('#var4').html("21");
    }
    if (qnum == 7)
    {
        $('.quesbar').html("►Сколько лучиков солнца изображено на флаге КЗ? ");
        $('.quesbar').css("height","150px");
        $('.quesbar').css("font-size","35px");
        $('.quesbar').css("padding-top","70px");
        ans = 2;
        $('#var1').html("72");
        $('#var2').html("34");
        $('#var3').html("64");
        $('#var4').html("108");
    }
    if (qnum == 8)
    {
        $('.quesbar').html("►Что такое Конституция? ");
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("padding-top","70px");
        ans = 2;
        $('#var1').html("Наш национальный герб с изображенными тулпарами");
        $('#var2').html("Набор законов обязательных к соблюдению");
        $('#var3').html("Налог с каждого гражданина РК ");
        $('#var4').html("Правила дорожного движения ");
    }
    if (qnum == 9)
    {
        ans = 1;
        $('.quesbar').html("►Когда родился президент РК?");
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("padding-top","70px");

        $('#var1').html(" 6 июля, 1940 г");
        $('#var2').html(" 5 июня, 1945  ");
        $('#var3').html("8 июля, 1918 г ");
        $('#var4').html("31 декабря, 1952г ");
    }
    
    if (qnum == 10)
    {
        ans = 2;
        $('.quesbar').html("► Любимый вид спорта Назарбаева? ");
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("padding-top","70px");
        
        $('#var1').html("Плавание ");
        $('#var2').html("Теннис");
        $('#var3').html("Гольф ");
        $('#var4').html("Бег");
    }
    
    if (qnum == 11)
    {
        ans = 1;
        $('.quesbar').html("► Кто автор гимна РК? ");
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("padding-top","70px");
        
        $('#var1').html("Шамши Калдаяков ");
        $('#var2').html("Шакен Ниязбеков ");
        $('#var3').html("Жандарбек Малибеков ");
        $('#var4').html("Шоқан Уалиханов ");
    }
    
    if (qnum == 12)
    {
        ans = 1;
        $('.quesbar').html("►Как называется часть юрты, символизирующие лучи солнца? ");
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("padding-top","70px");
        
        $('#var1').html("Уық");
        $('#var2').html("Кереге");
        $('#var3').html("Шаңырақ");
        $('#var4').html("Сықырлауық ");
    }
    
    if (qnum == 13)
    {
        ans = 4;
        $('.quesbar').html("►В каком году Нурсултан Назарбаев подписал законы “О Государственной символике”?");
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("padding-top","70px");
        
        $('#var1').html("1990");
        $('#var2').html("1993");
        $('#var3').html("1994");
        $('#var4').html("1992 ");
    }
    
    if (qnum == 14)
    {
        ans = 3;
        $('.quesbar').html("► В каком году принята Конституция? ");        
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("padding-top","70px");
        
        $('#var1').html("1990");
        $('#var2').html("1993");
        $('#var3').html("1995");
        $('#var4').html("1992 ");
    }
    
    if (qnum == 15)
    {
        ans = 4;
        $('.quesbar').html("►Когда день государственных символов РК?  ");        
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("padding-top","70px");
        
        $('#var1').html(" 1 августа ");
        $('#var2').html("5 апреля ");
        $('#var3').html(" 16 декабря ");
        $('#var4').html(" 4 июня ");
        

    }
    
    if (qnum == 16)
    {
        ans = 3;
        $('.quesbar').html("►В каком году Нурсултан Абишевич Назарбаев стал президентом?  ");        
        $('.quesbar').css("height","100px");
        $('.quesbar').css("font-size","30px");
        $('.quesbar').css("padding-top","70px");
        
        $('#var1').html(" 1995");
        $('#var2').html("1989");
        $('#var3').html("1990");
        $('#var4').html(" 1991 ");
        
    }
}
function ansf(anum)
{
    $(".var").css("background-color","#613B6A");
    $("#var"+anum).css("background-color","#FFCC00"); 
    
    tmp2 = anum;
    if (anum == ans)
    {
        console.log('Correct');
        ansstatus = 1;
    }
    else
    {
        console.log('Wrong');   
        ansstatus = 0;

    }
}
