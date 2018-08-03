var browser = ( typeof browser === 'undefined' ? chrome : browser )

browser.runtime.onMessage.addListener(function(msg, sender) {
  console.log(msg);
  var filenameArray = msg.text.split("?")[0].split("/");
  var downloading = browser.downloads.download({
    url : msg.text,
    filename : filenameArray[filenameArray.length - 1],
    conflictAction : 'uniquify'
  });  
  downloading.then(function(){}, onFailed);
});

function onFailed(error) {
  console.log(error);
}