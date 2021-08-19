export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-GB",
  "frontmatter": {
    "home": true,
    "heroImage": "/ptero.svg",
    "tagline": "API Wrapper built for the pterodactyl panel",
    "actionText": "Quick Start →",
    "actionLink": "/guides/quick-start.html",
    "features": [
      {
        "title": "Feature 1 Title",
        "details": "Feature 1 Description"
      },
      {
        "title": "Feature 2 Title",
        "details": "Feature 2 Description"
      },
      {
        "title": "Feature 3 Title",
        "details": "Feature 3 Description"
      }
    ],
    "footer": "Made by Jelly#6161"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "index.md",
  "git": {
    "updatedTime": 1628070978000,
    "contributors": [
      {
        "name": "Jelly",
        "email": "Jellybob2016@outlook.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
