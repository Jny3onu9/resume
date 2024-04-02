console.clear();

//탭 버튼
function showTab(tabId, clickedTab) {
	$(".tab").removeClass("active");
	$(".tab-content").hide();
	$("#" + tabId).show();
	$(clickedTab).addClass("active");
}

//버튼
$(function() {
    $(".sns-footer .next-btn").click(function() {
        $(".sns-wrap .sns-p-01").hide();
        $(".sns-wrap .sns-p-02").show();
    });

    $(".sns-footer .prev-btn").click(function() {
        $(".sns-wrap .sns-p-02").hide();
        $(".sns-wrap .sns-p-01").show();
    });
});