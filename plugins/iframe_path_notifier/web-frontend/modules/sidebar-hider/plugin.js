export default function ({ app }) {
  if (!process.client) return


  if (!app?.router) {
    console.warn('⚠️ No router available in plugin')
    return
  }

  app.router.afterEach((to) => {
    window.parent.postMessage(
      {
        type: 'baserow-path-change',
        path: to.fullPath,
      },
      'http://localhost:8910' // your local Hub origin
    )
  })
}
