var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + "<link href='../static/plugins/ep_print/static/css/print.css' rel='stylesheet'>";
  return cb();
}

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
  if (settings.ep_print){
    if(settings.ep_print.hideButton === true){
      return cb();
      // do nothing
    }
  }else{
    args.content = eejs.require("ep_print/templates/editbarButtons.ejs") + args.content;
    return cb();
  }
}
