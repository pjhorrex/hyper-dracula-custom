"use strict";

const foregroundColor = "#f8f8f2";
const backgroundColor = "#282a36";

const black = "#282a36";
const red = "#ff5555";
const green = "#50fa7b";
const yellow = "#f1fa8c";
const blue = "#bd93f9";
const magenta = "#ff79c6";
const cyan = "#8be9fd";
const gray = "#bfbfbf";

const brightBlack = "#44475a";
const brightRed = "#ff6e67";
const brightGreen = "#5af78e";
const brightYellow = "#f4f99d";
const brightBlue = "#caa9fa";
const brightMagenta = "#ff92d0";
const brightCyan = "#9aedfe";
const brightWhite = "#f8f8f2";

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: black,
    cursorColor: brightGreen,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,

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
			${config.css || ""}
			
			.tabs_list .tab_tab.tab_active {
                background: ${backgroundColor};
                border-bottom-color: ${brightMagenta} !important;
				border-bottom-width: 1px;
			}
		`
  });
};
