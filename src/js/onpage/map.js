ymaps.ready(function () {
  var myMapInf = new ymaps.Map('map', {
    center: [53.306801033989785, 34.28030036277141],
    zoom: 16,
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  }),
  myPlacemarkInf = new ymaps.Placemark(myMapInf.getCenter(), {
    hintContent: 'ул. Молодой Гвардии 4',
    balloonContent: 'ул. Молодой Гвардии 4'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '/img/logo-map.png',
    iconImageSize: [65, 81],
    iconImageOffset: [-32, -81]
  });
  myMapInf.geoObjects.add(myPlacemarkInf);
  myMapInf.behaviors.disable('scrollZoom');
  if($(window).width() <= 1170){
    myMapInf.behaviors.disable('drag');
  }
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "large",
      position: {
        right: 20,
        top: 100
      }
    }
  });
  myMapInf.controls.add(zoomControl);
});