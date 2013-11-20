exports.postAceInit = function(name, context, cb){

  (function() { // From http://stackoverflow.com/questions/1234008/detecting-browser-print-event/11060206#11060206 -- License unknown

    var beforePrint = function() {
      var hs = $('iframe[name="ace_outer"]').contents().find('iframe').height();
      $('#editorcontainerbox, #editorcontainer, .page_view').height(hs+"px");
      $('iframe[name="ace_outer"]').contents().find('body').css("overflow","hidden");
      $('iframe[name="ace_outer"]').contents().find('iframe').css("max-width","650px");
    };

    var afterPrint = function() {
      $('#editorcontainerbox, #editorcontainer, .page_view').height("auto");
      $('iframe[name="ace_outer"]').contents().find('body').css("overflow","auto");
      $('iframe[name="ace_outer"]').contents().find('iframe').css("max-width","auto");
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


