// 定义各种按钮
var ybtn = document.getElementById('yBtn');
var nbtn = document.getElementById('nBtn');
var cntbtn = document.getElementById('cntBtn');
////////////////////////////////////////////

var poi_info1 = document.getElementById('val-0').value;
var poi_info2 = document.getElementById('val-1').value;

var info_array1 = poi_info1.split(";");
var info_array2 = poi_info2.split(";");


// 第一组地址和名称
var addr1 = info_array1[2].replace(/\((\w|\W)*\)/,"");
var name1 = info_array1[3].replace(/\((\w|\W)*\)/,"");
////////////////////////////

// 第二组地址和名称
var addr2 = info_array2[2].replace(/\((\w|\W)*\)/,"");
var name2 = info_array2[3].replace(/\((\w|\W)*\)/,"");
/////////////////////////////////////

//获取电话号码的值，以及相距距离
var tel1 = $("div span:eq(2)").text().split(":")[1].replace(/\((\w|\W)*\)/,"");
var tel2 = $("div span:eq(6)").text().split(":")[1].replace(/\((\w|\W)*\)/,"");

var distance = $("div span:eq(8)").text().split(":")[1].split(" ")[0];
var distance_num = parseInt(distance);
//////////////////////////////////////////////////////////////////////

if (eval(distance_num) >= eval(0) && eval(distance_num) <= eval(100)) {
	ybtn.click();
	console.log("yes");
}else if (eval(distance_num) > eval(100) && eval(distance_num) <= eval(800)){
	if (addr1.length != 0 || addr2.length != 0 || name1.length != 0 || name2.length != 0){	
		if ( tel1.length != 0 && tel2.length != 0 && tel1.slice(-3) == tel2.slice(-3)) {
			ybtn.click();
			console.log("yes");
		}else if ((addr1.slice(-3) == addr2.slice(-3) || addr1.slice(0,2) == addr2.slice(0,2)) && (name1.slice(-3) == name2.slice(-3) || name1.slice(0,2) == name2.slice(0,2))) {
			ybtn.click();
			console.log("yes");
		}else{
			nbtn.click();
			console.log("no");
		}
	}else{
		cntbtn.click();
		console.log("?");
	}
}else{
	nbtn.click();
	console.log("no");
}

//************** js调试使用        
// console.log(addr1);
// console.log(addr2);
// console.log(name1);
// console.log(name2); 
// console.log(tel1);  
// console.log(tel2);  
// console.log(distance);  0

//*************** Testing

// console.log(addr1.slice(-3));
// console.log(addr2.slice(-3));
// console.log(addr1.slice(0,3));
