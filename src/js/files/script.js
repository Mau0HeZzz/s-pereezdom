// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import * as clipboard from "clipboard-polyfill/text";

document.addEventListener('DOMContentLoaded', function() {
  const ontopBtn = document.querySelector('[data-ontop]');
  if (ontopBtn) {
    let scroll = parseInt(ontopBtn.dataset.ontop) !== 0 && !isNaN(parseInt(ontopBtn.dataset.ontop)) ? ontopBtn.dataset.ontop : 250;
    window.addEventListener('scroll', ()=>{
      if (window.pageYOffset >= scroll) {
        ontopBtn.classList.add('_active');
      } else {
        ontopBtn.classList.remove('_active');
      }
    })
  }
  const homeVideo = document.querySelector('.video-howworkHome');
  if (homeVideo) {
    homeVideoActions(homeVideo);
  }

  const tariffsHome =document.querySelectorAll('[data-tariffs]');
  tariffsHome ? tariffsHomeActions(tariffsHome) : null;

  const regionModal = document.querySelector('#regionPopup');
  regionModal ? regionModalActions(regionModal) : null;

  const yaMaps =document.querySelectorAll('[data-map]');
  yaMaps.length ? yaMapsInit(yaMaps) : null

  const copyLinks =document.querySelectorAll('[data-copy]');
  if (copyLinks.length) {
    copyLinks.forEach(copyLink=>{
      copyLink.addEventListener('click', ()=>{
        let copyLinkParent = copyLink.closest('[data-copy-parent]');
        let copyLinkText = copyLinkParent.textContent;
        copyTextToClipboard(copyLinkText)
      })
    })
  }
})


function homeVideoActions(homeVideo) {
  const homeVideoPoster = homeVideo.querySelector('.video-howworkHome__poster');
  const homeVideoPlay = homeVideoPoster.querySelector('.video-howworkHome__button');
  const homeVideoVideo = homeVideo.querySelector('video');
  const homeVideoFrame = homeVideo.querySelector('iframe');
  if (homeVideoPlay) {
    homeVideoPlay.addEventListener('click', ()=>{
      homeVideoPoster.style = 'opacity: 0;'
      setTimeout(() => {
        homeVideoPoster.remove();
        if (homeVideoVideo) {
          homeVideoVideo.play();
        }
        if (homeVideoFrame) {
          let symbol = homeVideoFrame.src.indexOf("?") > -1 ? "&" : "?";
          homeVideoFrame.src += symbol + "autoplay=1";
        }
      }, 300);
    })
  }

}


function tariffsHomeActions(tariffsHome) {
  const tariffHomeBodies =document.querySelectorAll('[data-tariff]');
  tariffsHome.forEach(tariffHome=>{
    const tariffHomeButton = tariffHome.querySelector('[data-tariff-button]');
    tariffHomeButton.addEventListener('click', ()=>{
      let tariffHomeButtonAttr = tariffHomeButton.getAttribute('data-tariff-button');
      tariffHomeBodies.forEach(tariffHomeBody=>{
        let tariffHomeBodyAttr = tariffHomeBody.getAttribute('data-tariff');
        if (tariffHomeBodyAttr === tariffHomeButtonAttr) {
          tariffHomeBody.classList.add('_active')
          bodyLockToggle();
        }
      })
      // document.documentElement.classList.add('tariff-open');
    })
  })
  tariffHomeBodies.forEach(tariffHomeBody=>{
    if (tariffHomeBody.classList.contains('spollers-tariffsHome__bg')) {
      tariffHomeBody.addEventListener('click', ()=>{
        tariffHomeBodies.forEach(tariffHomeBody=>{
          let tariffHomeBodyAttr = tariffHomeBody.getAttribute('data-tariff');
          if (tariffHomeBodyAttr === tariffHomeBody.getAttribute('data-tariff')) {
            tariffHomeBody.classList.remove('_active');
            tariffHomeBody.style.removeProperty('transform');
            tariffHomeBody.style.removeProperty('transition');
            bodyUnlock();
          }
        })
      })
    }
    const tariffHomeBodyClose = tariffHomeBody.querySelector('.spollers-tariffsHome__close');
    if (tariffHomeBodyClose && window.innerWidth <= 992) {
      let touchStartPoint = null;
      tariffHomeBodyClose.addEventListener('touchstart', e => touchStartPoint = e.touches[0].clientY);
      tariffHomeBodyClose.addEventListener('touchmove', e => {
        if (!touchStartPoint) return;
        let touchPoint = e.touches[0].clientY - touchStartPoint;
        tariffHomeBody.style.transition = `none`;
        tariffHomeBody.style.transform = `translateY(${touchPoint}px)`;
        console.log(Math.abs(touchPoint - touchStartPoint))
        if (Math.abs(touchPoint - touchStartPoint) > 220) {
          e.preventDefault();
          tariffHomeBody.classList.remove('_active')
          tariffHomeBodies.forEach(tariffHomeBody=>{
            let tariffHomeBodyAttr = tariffHomeBody.getAttribute('data-tariff');
            if (tariffHomeBodyAttr === tariffHomeBody.getAttribute('data-tariff')) {
              tariffHomeBody.classList.remove('_active');
              tariffHomeBody.style.removeProperty('transform');
              tariffHomeBody.style.removeProperty('transition');
              bodyUnlock();
            }
          })
          touchStartPoint = null;
          return
        }
      });
    }
  })
}


function regionModalActions(regionModal) {
  async function getRegions() {
    const file = "./files/json/data.json";
    let response = await fetch(file, {
      method: "GET"
    });
    if (response.ok) {
      let result = await response.json();
      if (document.querySelector('.regionPopup')) {
        renderRegions(result.root.row, regionModal);
      }
    } else {
      console.log("Ошибка"); 
    }
  }

  getRegions();


  function renderRegions(result, regionModal) {
    const citiesPopupBody = regionModal.querySelectorAll('.body-regionPopup .section-regionPopup__title');
    result.forEach(e => {
      let region = e.city;
      let city = e.city;
      let lat = e.geo_lat;
      let lon = e.geo_lon;
      citiesPopupBody.forEach(i => {
        if (i.textContent.toUpperCase() === region[0].toUpperCase()) {
          i.nextElementSibling.insertAdjacentHTML('beforeend', `
            <a href="#" data-center="${lat},${lon}" class="cityPopup__city">${city}</a>
          `)
        }
      })
    })
  }


  
  const regionInput = document.querySelector('.content-regionPopup__input');
  if (regionInput) {
    regionInput.addEventListener('input', () => {
      if (regionInput.value.trim()) {
        regionModal.classList.add('region-search');
        const cityCities = document.querySelectorAll('.cityPopup__city');
        cityCities.forEach(e => {
          if (e.textContent.toLowerCase().indexOf(regionInput.value.toLowerCase()) >= 0) {
            e.hidden = false;
          } else {
            e.hidden = true
          }
        })
        const cityPopupBodies = regionModal.querySelectorAll('.section-regionPopup');
        cityPopupBodies.forEach(cityPopupBody => {
          let links = cityPopupBody.querySelectorAll('a')
          let linksHid = cityPopupBody.querySelectorAll('a[hidden]');
          if (links.length === linksHid.length) {
            cityPopupBody.hidden = true;
          } else {
            cityPopupBody.hidden = false;
          }
        })
      } else {
        regionModal.classList.remove('region-search');
        regionModalLettersCheck(regionModal);
      }
    })
  }


  const regionModalLetters = regionModal.querySelectorAll('.letters-regionPopup__input');
  if (regionModalLetters) {
    regionModalLettersCheck(regionModal);
    regionModalLetters.forEach(regionModalLetter=>{
      regionModalLetter.addEventListener('change', ()=>{
        regionModalLettersCheck(regionModal);
      })
    })
  }

  function regionModalLettersCheck(regionModal) {
    const checkLetter = regionModal.querySelector('.letters-regionPopup__input:checked');
    const cityPopupBodies = regionModal.querySelectorAll('.section-regionPopup');
    if (checkLetter) {
      cityPopupBodies.forEach(cityPopupBody=>{
        if (cityPopupBody.querySelector('.section-regionPopup__title').textContent.trim().toUpperCase() === checkLetter.dataset.letter) {
          cityPopupBody.hidden = false;
        } else {
          cityPopupBody.hidden = true
        }
      })
    } else {
      cityPopupBodies.forEach(cityPopupBody=>{
        cityPopupBody.hidden = false;
      })
    }
  }
}


function copyTextToClipboard(text) {
  clipboard.writeText(text).then(
    () => {
      console.log("success!");
    },
    () => {
      console.log("error!");
      alert('Что-то пошло не так, не удалось скопировать');
    }
  );
}

function yaMapsInit(yaMaps) {
  let myMap = null;
  try {
    ymaps.ready(init);
  } catch (err) {
    console.error(err)
  }

  function init() {
    yaMaps.forEach(yaMap=>{
      let center = yaMap.dataset.center ? yaMap.dataset.center.replaceAll(' ', '').split(',') : [51.504201, 46.112482];
      // Создание экземпляра карты и его привязка к контейнеру с
      myMap = new ymaps.Map(yaMap, {
          // При инициализации карты обязательно нужно указать
          // её центр и коэффициент масштабирования.
          center: center,
          zoom: 14,
          controls: ['zoomControl']
      }, {});
    })
  }
}