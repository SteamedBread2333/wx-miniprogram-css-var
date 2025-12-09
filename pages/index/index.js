// index.js
Page({
  data: {
    currentTheme: 'light', // 默认浅色主题
    pageTheme: 'light' // 用于绑定到scroll-view的data-theme属性
  },

  onLoad() {
    // 从本地存储加载主题设置
    const savedTheme = wx.getStorageSync('theme')
    if (savedTheme) {
      this.setData({
        currentTheme: savedTheme,
        pageTheme: savedTheme
      })
      // 应用已保存的主题
      this.applyTheme(savedTheme)
    } else {
      // 首次加载，应用默认主题
      this.applyTheme(this.data.currentTheme)
    }
  },

  // 切换主题方法
  switchTheme(e) {
    const theme = e.currentTarget.dataset.theme
    this.setData({
      currentTheme: theme,
      pageTheme: theme
    })
    // 应用主题
    this.applyTheme(theme)
    // 保存主题设置到本地存储
    wx.setStorageSync('theme', theme)
  },

  // 应用主题
  applyTheme(theme) {
    // 直接设置页面的data-theme属性
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    
    // 更新页面的data-theme属性（兼容方式）
    if (currentPage && currentPage.setData) {
      // 通过setData更新页面的theme数据
      currentPage.setData({
        pageTheme: theme
      })
    }
    
    // 更新导航栏颜色（可选）
    if (theme === 'dark') {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#1a1a1a',
        animation: {
          duration: 300,
          timingFunc: 'easeInOut'
        }
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#ffffff',
        animation: {
          duration: 300,
          timingFunc: 'easeInOut'
        }
      })
    }
  }
})
