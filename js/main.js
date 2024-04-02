console.clear();

//버튼
$(function() {
    $(".aboutme .next-btn").click(function() {
        $(".aboutme .info-wrap").hide();
        $(".aboutme .skill-wrap").show();
    });

    $(".aboutme .prev-btn").click(function() {
        $(".aboutme .skill-wrap").hide();
        $(".aboutme .info-wrap").show();
    });
});