exports.postAceInit = function(name, context, cb){

  (function() { // From http://stackoverflow.com/questions/1234008/detecting-browser-print-event/11060206#11060206 -- License unknown

    var oldEditbarHeight = $('#editbar').height();
    var beforePrint = function() {
      var padId = pad.getPadId(); // get the pad ID
      var ts = new Date().getTime(); // Get the timestamp
      var padHTMLUrl = padId + "/export/html?ts="+ts; // get the export URL
      $('#chaticon').hide();
      $('#editorcontainerbox').hide();
      $('#editbar').height(0); // it wont print if editbar doesn't exist..
      //  $('#editbar, #editorcontainerbox').hide(); // hide other contents
      if($('#print').length == 0){ // append if doesnt exist
        $('body').append("<div id='print' style='margin-top:40px; top: 0; left: 0; right: 0; height:100%; overflow:auto;z-index:9999; overflow-x:hidden;'></div>")
      }

      $.get(padHTMLUrl, function(data) {
        $('#print').show();
        $('#print').html(data);
      });
    };

    var afterPrint = function() {
      setTimeout(function(){
        $('#print').hide();
        $('#chaticon').show();
        $('#editorcontainerbox').show();
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


