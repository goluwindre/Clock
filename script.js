const days = ["日", "月", "火", "水", "木", "金", "土"];

function time(){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var dat = date.getDate();
	var day = days[date.getDay()];

	var hours = ('0'+ date.getHours()).slice(-2);
	var minutes = ('0' + date.getMinutes()).slice(-2);
	var seconds = ('0' + date.getSeconds()).slice(-2);
	document.getElementById("date").textContent = year + "年" + month + "月" + dat + "日" + "(" + day + ")";
	document.getElementById("time").textContent = hours + ":" + minutes;
	document.getElementById("second").textContent = seconds;
};

const intervalId = setInterval(time, 100);

time();

