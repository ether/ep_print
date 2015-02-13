exports.postAceInit = function(name, context, cb){

  $('body').append("<div id='print'></div>");

  (function() { 
    // From http://stackoverflow.com/questions/1234008/detecting-browser-print-event/11060206#11060206 -- License unknown

    var oldEditbarHeight = $('#editbar').height();
    var beforePrint = function() {
      $('#print').html($('iframe[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").html());
    };

    var afterPrint = function() {
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


