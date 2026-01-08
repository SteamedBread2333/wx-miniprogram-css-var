// index.js
Page({
  data: {
    currentTheme: 'light', // 默认浅色主题
    pageTheme: 'light', // 用于绑定到scroll-view的data-theme属性
    inlineStyle: '', // 用于存储行内样式
    showModalFlag: false // 控制弹框显示/隐藏
  },

  onLoad() {
    // 从本地存储加载主题设置
    const savedTheme = wx.getStorageSync('theme')
    if (savedTheme) {
      // 如果是自定义主题，需要恢复行内样式
      if (savedTheme === 'custom') {
        const customThemeStyle = '--bg-color: #f5e6ff; --text-color: #6b2c91; --primary-color: #9b59b6; --secondary-color: #e91e63; --border-color: #d4a5e8; --card-bg: #ffffff; --button-bg: #9b59b6; --button-text: #ffffff;'
        this.setData({
          currentTheme: savedTheme,
          pageTheme: savedTheme,
          inlineStyle: customThemeStyle
        })
        // 应用自定义主题的导航栏颜色
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#9b59b6',
          animation: {
            duration: 300,
            timingFunc: 'easeInOut'
          }
        })
      } else {
        this.setData({
          currentTheme: savedTheme,
          pageTheme: savedTheme,
          inlineStyle: '' // 清除行内样式，使用CSS文件中的主题
        })
        // 应用已保存的主题
        this.applyTheme(savedTheme)
      }
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
      pageTheme: theme,
      inlineStyle: '' // 清除行内样式，使用CSS文件中的主题
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
  },

  // 使用行内样式切换主题
  switchThemeInline() {
    // 定义自定义主题的行内样式（CSS变量）- 使用紫色/粉色系，明显区别于浅色主题
    const customThemeStyle = '--bg-color: #f5e6ff; --text-color: #6b2c91; --primary-color: #9b59b6; --secondary-color: #e91e63; --border-color: #d4a5e8; --card-bg: #ffffff; --button-bg: #9b59b6; --button-text: #ffffff;'
    
    // 设置data-theme为custom，并应用行内样式
    this.setData({
      currentTheme: 'custom',
      pageTheme: 'custom',
      inlineStyle: customThemeStyle
    })
    
    // 保存主题设置到本地存储
    wx.setStorageSync('theme', 'custom')
    
    // 更新导航栏颜色（自定义主题使用紫色背景）
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#9b59b6',
      animation: {
        duration: 300,
        timingFunc: 'easeInOut'
      }
    })
  },

  // 显示弹框
  showModal() {
    this.setData({
      showModalFlag: true
    })
  },

  // 隐藏弹框
  hideModal() {
    this.setData({
      showModalFlag: false
    })
  },

  // 阻止事件冒泡
  stopPropagation() {
    // 阻止点击弹框内容区域时关闭弹框
  },

  // 确认按钮处理
  handleConfirm() {
    wx.showToast({
      title: '已确认',
      icon: 'success'
    })
    this.hideModal()
  },

  // 组件点击事件处理
  onCardTap(e) {
    wx.showToast({
      title: `点击了：${e.detail.title}`,
      icon: 'none'
    })
  }
})
