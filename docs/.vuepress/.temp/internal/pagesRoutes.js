import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-f7896d52","/api/application.html","Application",["/api/application","/api/application.md"]],
  ["v-34afe140","/api/client.html","Client",["/api/client","/api/client.md"]],
  ["v-744497ce","/api/","",["/api/index.html","/api/index.md"]],
  ["v-d05f044c","/api/server-builder.html","Server Builder",["/api/server-builder","/api/server-builder.md"]],
  ["v-1e26a43e","/guides/creating-servers.html","",["/guides/creating-servers","/guides/creating-servers.md"]],
  ["v-ff762602","/guides/","Guides",["/guides/index.html","/guides/index.md"]],
  ["v-1f338ed4","/guides/quick-start.html","Quick Start",["/guides/quick-start","/guides/quick-start.md"]],
  ["v-c77db91e","/guides/using-application.html","",["/guides/using-application","/guides/using-application.md"]],
  ["v-3854cd06","/guides/using-client.html","",["/guides/using-client","/guides/using-client.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
