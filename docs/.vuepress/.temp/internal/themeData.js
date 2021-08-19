export const themeData = {
  "repo": "https://github.com/Nodeactyl/Nodeactyl",
  "editLinks": false,
  "docsDir": "",
  "editLinkText": "",
  "lastUpdated": true,
  "navbar": [
    {
      "text": "API Reference",
      "link": "/api/"
    },
    {
      "text": "Guides",
      "link": "/guides/"
    },
    {
      "text": "Discord",
      "link": "https://discord.nodeactyl.dev"
    }
  ],
  "sidebar": {
    "/api/": [
      {
        "title": "API Reference",
        "collapsable": false,
        "children": [
          "application",
          "client",
          "server-builder"
        ]
      }
    ],
    "/guides/": [
      {
        "title": "Guides",
        "collapsable": false,
        "children": [
          "quick-start",
          "using-application",
          "using-client",
          "creating-servers"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
