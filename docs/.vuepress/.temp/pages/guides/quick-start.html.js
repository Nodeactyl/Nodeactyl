export const data = {
  "key": "v-1f338ed4",
  "path": "/guides/quick-start.html",
  "title": "Quick Start",
  "lang": "en-GB",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guides/quick-start.md",
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
