const notifier = require("node-notifier");

const pluginName = "NotifierPlugin";
class NotifierPlugin {
  // 接受参数
  constructor(option) {
    this.option = option;
    console.log(option);
  }
  apply(compiler) {
    console.log("MyPlugin 启动");
    // 调用emit勾子，挂载函数
    // compilation => 此次打包的上下文
    compiler.hooks.emit.tap("MyPlugin", (compilation) => {
      // 遍历资源文件信息
      // 键name为每个资源的名称
      for (const name in compilation.assets) {
        // console.log(name)
        if (name.endsWith(".js")) {
          // 每个资源的值
          const contents = compilation.assets[name].source();
          const withoutComments = contents.replace(/\/\*\*+\*\//g, "");
          // 覆盖原始对象
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length,
          };
        }
      }
    });
  }

  //   apply(compiler) {
  //     // 注册函数
  //     compiler.hooks.entryOption.tap(
  //       "NotifierPlugin",
  //       (compilation, callback) => {
  //         // dosomething
  //         //   notifier.notify({
  //         //     title: option.title,
  //         //     message: option.beforePackMessage,
  //         //   });
  //         callback();
  //       }
  //     );
  //     // compiler.hooks.done.tap(pluginName, (compilation, callback) => {
  //     //   // dosomething
  //     //   notifier.notify({
  //     //     title: option.title,
  //     //     message: option.afterPackMessage,
  //     //   });
  //     //   callback();
  //     // });
  //   }
}
module.exports = NotifierPlugin;
