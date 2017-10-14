const root = document.documentElement

module.exports = {
  activate: (state) => {
    atom.config.observe('obake-ui.fontSize', value => setFontSize(value))
    atom.config.observe('obake-ui.tabSizing', value => setTabSizing(value))
    atom.config.observe('one-dark-ui.hideDockButtons', value => setHideDockButtons(value))
  },

  deactivate: () => {
    unsetFontSize()
    unsetTabSizing()
    unsetHideDockButtons()
  }
}


// Font Size -----------------------

const setFontSize = (currentFontSize) => {
  if (Number.isInteger(currentFontSize)) {
    root.style.fontSize = "#{currentFontSize}px"
  }
  else if (currentFontSize === 'Auto') {
    unsetFontSize()
  }
}

const unsetFontSize = () => root.style.fontSize = ''


// Tab Sizing -----------------------

const setTabSizing = tabSizing =>
  root.setAttribute('theme-one-dark-ui-tabsizing', tabSizing.toLowerCase())

const unsetTabSizing = () =>
  root.removeAttribute('theme-one-dark-ui-tabsizing')


// Dock Buttons -----------------------

const setHideDockButtons = hideDockButtons => {
  if (hideDockButtons) {
    root.setAttribute('theme-one-dark-ui-dock-buttons', 'hidden')
  }
  else {
    unsetHideDockButtons()
  }
}

const unsetHideDockButtons = () =>
  root.removeAttribute('theme-one-dark-ui-dock-buttons')
