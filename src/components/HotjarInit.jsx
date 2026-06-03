import { useEffect } from 'react'

function HotjarInit() {
  useEffect(() => {
    const siteId = import.meta.env.VITE_HOTJAR_ID
    const version = import.meta.env.VITE_HOTJAR_VERSION || 6

    if (!siteId || window.hj) return

    ;(function hotjarInit(h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function tracker() {
          ;(h.hj.q = h.hj.q || []).push(arguments)
        }
      h._hjSettings = { hjid: Number(siteId), hjsv: Number(version) }
      a = o.getElementsByTagName('head')[0]
      r = o.createElement('script')
      r.async = 1
      r.src = `${t + h._hjSettings.hjid + j + h._hjSettings.hjsv}`
      a.appendChild(r)
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
  }, [])

  return null
}

export default HotjarInit
