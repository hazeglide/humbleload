var browser = (typeof browser === 'undefined' ? chrome : browser)

function downloadAllBooks(format) {
  Array.prototype.slice.call(document.getElementsByClassName("js-gamelist-holder")[0].getElementsByTagName("a")).forEach(function (link) {
    console.log(link);
    //if (link.text.match(/EPUB|MOBI|PDF|PRC|Download|Supplement|ZIP/)) {
    if (link.text.match(new RegExp(format))) {
      let url = link.href;
      browser.runtime.sendMessage({ text: url });
    }
  });
}

function setup() {
  var lastBox = document.getElementsByClassName("js-gamelist-holder")[0]
  var downloadLink = document.createElement("div");
  downloadLink.setAttribute("class", "whitebox-redux small");
  downloadLink.innerHTML = `<label for="formats">Choose a file format:</label>
  <select name="formats" id="formats">
      <option value="PDF">PDF</option>
      <option value="EPUB">EPUB</option>
      <option value="CBZ">CBZ</option>
      <option value="MOBI">MOBI</option>
      <option value="PRC">PRC</option>
      <option value="Download">Download</option>
      <option value="Supplement">Supplement</option>
      <option value="ZIP">ZIP</option>
  </select>
  <button type="button" id="downloadAllButton">Download all!</button>`;
  lastBox.parentNode.insertBefore(downloadLink, lastBox);
  document.getElementById("downloadAllButton").onclick = function () {
    var e = document.getElementById('formats');
    var strUser = e.options[e.selectedIndex].text;
    console.log(strUser + " selected");
    downloadAllBooks(strUser);
    console.log("click");
    return false;
  }
}

setup();
