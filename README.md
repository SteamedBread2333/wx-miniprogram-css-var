# 微信小程序CSS变量主题切换Demo

一个简单的微信小程序demo，演示如何使用CSS变量实现主题切换功能。

https://github.com/user-attachments/assets/4036159e-4492-46d5-9e19-39bc63d59605

## 功能说明

- 支持浅色/深色主题切换
- 使用CSS变量定义主题样式
- 主题设置自动保存到本地存储
- 切换主题时更新导航栏颜色

## 技术实现

- 使用CSS变量定义不同主题的样式
- 通过`data-theme`属性切换主题
- 使用微信小程序的本地存储保存主题设置

## 如何使用

1. 克隆或下载项目到本地
2. 使用微信开发者工具打开项目
3. 点击"浅色主题"或"深色主题"按钮切换主题
4. 重新打开小程序时，会自动应用上次的主题设置

## 项目结构

```
mini-css-var/
├── app.js
├── app.json
├── app.wxss      # 定义全局CSS变量
├── pages/
│   ├── index/    # 主题切换demo页面
│   └── logs/
└── utils/
```

## 核心代码

### 定义CSS变量 (app.wxss)
```css
/* 浅色主题 */
page,
scroll-view {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #07c160;
  --secondary-color: #1989fa;
  --border-color: #e8e8e8;
  --card-bg: #f7f7f7;
}

/* 深色主题 */
page[data-theme="dark"],
scroll-view[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #e8e8e8;
  --primary-color: green;
  --secondary-color: blue;
  --border-color: #333333;
  --card-bg: #2a2a2a;
}
```

### 主题切换逻辑 (index.js)
```javascript
// 切换主题方法
switchTheme(e) {
  const theme = e.currentTarget.dataset.theme
  this.setData({
    currentTheme: theme,
    pageTheme: theme
  })
  // 保存主题设置
  wx.setStorageSync('theme', theme)
}
```

## 注意事项

- 确保微信开发者工具的基础库版本支持CSS变量
- 如果需要添加更多主题颜色，可以在app.wxss中扩展CSS变量定义

## License

MIT
