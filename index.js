const notifier = require("node-notifier");

const pluginName = "NotifierPlugin";
class NotifierPlugin {
  // 接受参数
  constructor({ option, dev, build }) {
    this.option = option;
    this.build = build;
    console.log(option);
  }
  apply(compiler) {
    // 注册函数
   
    compiler.hooks.initialize.tap(pluginName, async (context, callback) => {
      await notifier.notify({
        ...this.option,

        message: this.build.beforePackMessage,
      });
    });
    compiler.hooks.done.tap(pluginName, async (context, callback) => {
      await notifier.notify({
        ...this.option,
        message: this.build.afterPackMessage,
      });
    });
  
  }
}
module.exports = NotifierPlugin;
