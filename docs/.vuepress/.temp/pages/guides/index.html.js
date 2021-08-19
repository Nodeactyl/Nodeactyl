export const data = {
  "key": "v-ff762602",
  "path": "/guides/",
  "title": "Guides",
  "lang": "en-GB",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guides/index.md",
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
