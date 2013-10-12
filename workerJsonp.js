function MakeServerRequest() 
{
var channelList,url;
//Enter You Tube Channels in this list.
channelList = []
url='https://www.googleapis.com/youtube/v3/channels?part=id,statistics&id='+channelList.join("%2")+'&maxResults=50&key=YOUTUBE_API_KEY'
importScripts(url+"&callback=sendResults");
} 

function sendResults(objJson) {
    var xhr,payload,url;
    url = "saveResults.php";
    try {
         xhr = new XMLHttpRequest();
            xhr.open('POST', url, false);
            xhr.setRequestHeader('Content-Type', 'application/text');
            xhr.onreadystatechange = function () {
            };
            payload={}
            payload['ts']=parseInt(new Date().getTime());
            payload['datatype']="YouTube";
            payload['data']=objJson;
            xhr.send(JSON.stringify(payload));
        }
        catch(e) {
            alert('Error occured in XMLHttpRequest: ' + xhr.statusText + '  ReadyState: ' + xhr.readyState + ' Status:' + xhr.status);
        }
}

this.onmessage = function (event) {
MakeServerRequest();
}



