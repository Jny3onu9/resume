console.clear();

// time 스크립트
const time = document.querySelector(".clock");
const updateTime = () => {
	let date = luxon.DateTime.fromJSDate(new Date()).toLocaleString(luxon.DateTime.TIME_SIMPLE);
	time.innerHTML = date;
}
updateTime();
setInterval(() => updateTime(), 1000);