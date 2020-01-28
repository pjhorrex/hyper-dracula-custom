'use strict'

const foregroundColor = '#f8f8f2'
const backgroundColor = '#282a36'

const black           = '#282a36'
const red             = '#ff5555'
const green           = '#50fa7b'
const yellow          = '#f1fa8c'
const blue            = '#bd93f9'
const magenta         = '#ff79c6'
const cyan            = '#8be9fd'
const white           = '#bfbfbf'
const brightBlack     = '#44475a'
const brightRed       = '#ff6e67'
const brightGreen     = '#5af78e'
const brightYellow    = '#f4f99d'
const brightBlue      = '#caa9fa'
const brightMagenta   = '#ff92d0'
const brightCyan      = '#9aedfe'
const brightWhite     = '#f8f8f2'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: black,
    cursorColor: brightBlack,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,

      // bright
      brightBlack,
      brightRed,
      brightGreen,
      brightYellow,
      brightBlue,
      brightMagenta,
      brightCyan,
      brightWhite
    },
    css: `
			${config.css || ''}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}

			.tab_active:before {
				border-color: rgb(68, 71, 90);
			}
		`
  })
}
