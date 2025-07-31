export default (context) => {
  return {
    getAppLayoutComponent() {
      return {
        mounted() {
          const el = document.querySelector('.layout__col-1')
          if (el) {
            el.style.display = 'none'
          }
        },
        render() {
          return null
        },
      }
    },
  }
}
