module.exports = function SidebarHiderModule(/* moduleOptions */) {
  // You can register plugin files here if needed
  this.nuxt.hook('ready', async (nuxt) => {
    console.log('Sidebar Hider module loaded')
  })
}