exports.postAceInit = function (name, context, cb) {
  $('body').append("<div id='print'></div>");

  (function () {
    // From http://stackoverflow.com/questions/1234008/detecting-browser-print-event/11060206#11060206 -- License unknown

    const oldEditbarHeight = $('#editbar').height();
    const beforePrint = function () {
      $('#print').html($('iframe[name="ace_outer"]').contents().find('iframe').contents().find('#innerdocbody').html());
    };

    const afterPrint = function () {
    };

    if (window.matchMedia) {
      const mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener((mql) => {
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
};
