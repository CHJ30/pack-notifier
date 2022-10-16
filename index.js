const notifier = require("node-notifier");

/// 有两种方法可以使用 `node-notifier` 创建和推送简单的通知。
// 将一个字符串传递给 `notify()` 函数:

// 或者，也可以传递一个对象，并设置属性，如标题和消息:
notifier.notify({
  title: "爸爸",
  message: "我构建好了",
});
