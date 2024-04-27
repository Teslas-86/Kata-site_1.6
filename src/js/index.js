import '../scss/style.scss'
import resizableSwiper from './resizable-swiper'
import Swiper from 'swiper'

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex)
      })
    }
  }

  resizableSwiper('(max-width: 1280px)', '.nav-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
  })

  resizableSwiper('(max-width: 768px)', '.brands__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
  })
})
