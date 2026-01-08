// components/theme-card/theme-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 标题
    title: {
      type: String,
      value: '主题卡片'
    },
    // 内容
    content: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击卡片事件
    onCardTap() {
      this.triggerEvent('tap', {
        title: this.properties.title
      })
    }
  }
})
