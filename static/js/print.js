exports.postAceInit = function(name, context, cb){

  (function() { // From http://stackoverflow.com/questions/1234008/detecting-browser-print-event/11060206#11060206 -- License unknown

    var oldEditbarHeight = $('#editbar').height();
    var beforePrint = function() {
      var padId = pad.getPadId(); // get the pad ID
      var padHTMLUrl = padId + "/export/html"; // get the export URL
      $('#editbar').height(0); // it wont print if editbar doesn't exist..
      //  $('#editbar, #editorcontainerbox').hide(); // hide other contents
      if($('#print').length == 0){ // append if doesnt exist
        $('body').append("<div id='print' style='position:fixed; margin-top:20px; top: 0; left: 0; right: 0; bottom: 0;z-index:9999'></div>")
      }

      $.get(padHTMLUrl, function(data) {
        $('#print').show();
        $('#print').html(data);
      });
    };

    var afterPrint = function() {
      setTimeout(function(){
        $('#print').hide();
        $('#editbar').height(oldEditbarHeight); 
      }, 500);
    };

    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(function(mql) {
        if (mql.matches) {
          beforePrint();
        } else {
          afterPrint();
        }
      });
    }
    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
  }());
}


