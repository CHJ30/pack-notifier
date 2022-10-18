const notifier = require("node-notifier");

const pluginName = "NotifierPlugin";
class NotifierPlugin {
  // 接受参数
  constructor({ option, dev, build }) {
    this.option = option;
    this.dev = dev;
    this.build = build;
    console.log(option);
  }
  apply(compiler) {
    // 注册函数
    // compiler.hooks.entryOption.tap('NotifierPlugin', (compilation, callback) => {
    //   // dosomething
    //   //   notifier.notify({
    //   //     title: option.title,
    //   //     message: option.beforePackMessage,
    //   //   });
    //   callback();
    // });
    //
    compiler.hooks.initialize.tap(pluginName, async (context, callback) => {
      await notifier.notify({
        ...this.option,

        message: this.dev.beforePackMessage,
      });
    });
    compiler.hooks.done.tap(pluginName, async (context, callback) => {
      await notifier.notify({
        ...this.option,
        message: this.dev.afterPackMessage,
      });
    });
    // compiler.hooks.done.tap(pluginName, (compilation, callback) => {
    //   // dosomething
    //   notifier.notify({
    //     title: option.title,
    //     message: option.afterPackMessage,
    //   });
    //   callback();
    // });
  }
}
module.exports = NotifierPlugin;
