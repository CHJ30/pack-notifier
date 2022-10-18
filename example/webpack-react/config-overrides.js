const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackPlugin,
} = require("customize-cra");
const NotifierPlugin = require("../../index");
const packInfo = require("./package.json");
module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  // 手动新增ModuleFederationPlugin插件
  addWebpackPlugin(
    new NotifierPlugin({
      option: {
        title: packInfo.name || "学生管理系统",
        subtitle: "别摸鱼了",
        sound: true,
        icon: "Terminal Icon",
      },
      dev: {
        beforePackMessage: "爸爸，我开始构建了",
        afterPackMessage: "爸爸，我构建成功了",
      },
      build: {
        beforeBuildMessage: "爸爸，我开始打包了",
        afterBuildMessage: "爸爸，我打包成功了",
      },
    })
  )
);
