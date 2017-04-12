/**
 * Created by sankalp.jain on 3/15/2016.
 */

$(document).ready(function(){
    $("nav ul li").on("click",function(){
        $("nav ul li").removeClass("active-tab");
        $(this).addClass("active-tab");
        $(".content").find(".tab-content").hide();
        $(".content").find(".tab-content."+$(this).attr("data-tab-name")).show();
        var navBtn = $(".navbar-header button:first");
        console.log(navBtn.attr("aria-expanded"));
        if(navBtn.attr("aria-expanded") == true || navBtn.attr("aria-expanded") == "true")
            navBtn.click();
    });
    $("img[class^='little-amigos-preschool-logo']").on("click", function () {
        $("nav ul li.little-amigos-preschool-home").click();
    })
});
