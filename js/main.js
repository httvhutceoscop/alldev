var aInfos = [];
var str = 'https://savemedia.com/en/watch?v=';
var aDownloadLinks = [];
var aYiiLessonIds = [];

$('#playlist-autoscroll-list li').each(function(){
	var o = {};
	var a = $(this).find('a.yt-uix-sessionlink');
	var link = a.attr('href');
	
	///watch?v=aSvxwwjaY2U&index=9&list=PLRd0zhQj3CBmusDbBzFgg3H20VxLx2mkF
	//get video index
    var reg_index = /&index=\s*(.*?)\s*&/g;
    var indexs = reg_index.exec(link);
    o.index = indexs[1];

    // get video id
    var reg_id = /v=\s*(.*?)\s*&/g;
    var ids = reg_id.exec(link);
    o.id = ids[1];


    aInfos.push(o);    
});

for (var i = 0, len = aInfos.length; i < len; i++) {
	aDownloadLinks.push(str+aInfos[i].id);
	aYiiLessonIds.push('http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v='+aInfos[i].id+'&format=json');
};

//https://savemedia.com/get/video/xSGdocYMGEtArs3K/mp4/hd720/Yii2 Lesson - 1 Installing the framework and Creating Our First Application.mp4?user_de=false&blocked_de=false

// console.log(aYiiLessonIds);
console.log(aDownloadLinks);

// var video_id='aSvxwwjaY2U';

// $.getJSON('http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v='+video_id+'&format=json',function(data,status,xhr){
//     alert(data.data.title);
// });