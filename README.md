# WeChat Mini Program CSS Variable Theme Switching Demo

A simple WeChat Mini Program demo demonstrating how to implement theme switching using CSS variables.

https://github.com/user-attachments/assets/4036159e-4492-46d5-9e19-39bc63d59605

## Features

- Support for light/dark theme switching
- Theme styles defined using CSS variables
- Theme settings automatically saved to local storage
- Navigation bar color updates when switching themes

## Technical Implementation

- Uses CSS variables to define styles for different themes
- Switches themes via `data-theme` attribute
- Saves theme settings using WeChat Mini Program's local storage

## How to Use

1. Clone or download the project to your local machine
2. Open the project with WeChat Developer Tools
3. Click the "Light Theme" or "Dark Theme" button to switch themes
4. When reopening the mini program, the last theme setting will be automatically applied

## Project Structure

```
mini-css-var/
├── app.js
├── app.json
├── app.wxss      # Define global CSS variables
├── pages/
│   ├── index/    # Theme switching demo page
│   └── logs/
└── utils/
```

## Core Code

### Define CSS Variables (app.wxss)
```css
/* Light theme */
page,
scroll-view {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #07c160;
  --secondary-color: #1989fa;
  --border-color: #e8e8e8;
  --card-bg: #f7f7f7;
}

/* Dark theme */
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

### Theme Switching Logic (index.js)
```javascript
// Switch theme method
switchTheme(e) {
  const theme = e.currentTarget.dataset.theme
  this.setData({
    currentTheme: theme,
    pageTheme: theme
  })
  // Save theme settings
  wx.setStorageSync('theme', theme)
}
```

## Notes

- Ensure that your WeChat Developer Tools' base library version supports CSS variables
- If you need to add more theme colors, you can extend the CSS variable definitions in app.wxss

## License

MIT
