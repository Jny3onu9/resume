console.clear();

//탭 버튼
function showTab(tabId, clickedTab) {
	$(".tab").removeClass("active");
	$(".tab-content").hide();
	$("#" + tabId).show();
	$(clickedTab).addClass("active");
}

