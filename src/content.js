var browser = (typeof browser === 'undefined' ? chrome : browser)

function downloadAllBooks() {
  Array.prototype.slice.call(document.getElementsByClassName("js-gamelist-holder")[0].getElementsByTagName("a")).forEach(function (link) {
    console.log(link);
    if (link.text.match(/EPUB|MOBI|PDF|PRC|Download|Supplement/)) {
      let url = link.href;
      browser.runtime.sendMessage({ text: url });
    }
  });
}

function setup() {
  var lastBox = document.getElementsByClassName("js-gamelist-holder")[0]
  var downloadLink = document.createElement("div");
  downloadLink.setAttribute("class", "whitebox-redux small");
  downloadLink.innerHTML = '<a id="downloadAllLink" href="">>>> Download all Books <<<</a>';
  lastBox.parentNode.insertBefore(downloadLink, lastBox);
  document.getElementById("downloadAllLink").onclick = function () {
    downloadAllBooks();
    console.log("click");
    return false;
  }
}

setup();