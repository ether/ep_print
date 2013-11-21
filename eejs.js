exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + "<link href='../static/plugins/ep_print/static/css/print.css' rel='stylesheet'>";
  console.log("FOOO");
  return cb();
}
