$(document).ready(function () {

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
function ex()
{
    var more=document.getElementsByClassName("more");
    if(more[0].style.display=="none"){

        for(var i=0;i<more.length;i++)
        {
            more[i].style.display="";
        }
    }
    else{
        for(var i=0;i<more.length;i++)
        {
            more[i].style.display="none";
        }
    }

}
function extendCourses()
{
    var courses=document.getElementById("courses")
    var exCourses=document.getElementById("exCourses")
    if(exCourses.style.display=="none")
    {
        courses.style.display="none" 
        exCourses.style.display="block" 
    }
    else{
        courses.style.display="block" 
        exCourses.style.display="none"  
    }
}
function extendLang()
{
    var lang=document.getElementById("lang")
    var exLang=document.getElementById("exLang")
    if(exLang.style.display=="none")
    {
        lang.style.display="none" 
        exLang.style.display="block" 
    }
    else{
        lang.style.display="block" 
        exLang.style.display="none"  
    }
}
var h=document.getElementById("home")
var a=document.getElementById("about")
var p1=document.getElementById("posts")
var p2=document.getElementById("people")
function home()
{
    h.style.display="block"
    a.style.display="none"
    p1.style.display="none"
    p2.style.display="none"
}
function about()
{
    h.style.display="none"
    a.style.display="block"
    p1.style.display="none"
    p2.style.display="none"
}
function post()
{
    h.style.display="none"
    a.style.display="none"
    p1.style.display="block"
    p2.style.display="none"
}
function people()
{
    h.style.display="none"
    a.style.display="none"
    p1.style.display="none"
    p2.style.display="block"
}