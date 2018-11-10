function getPosition() {
	if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {

		// Текущие координаты.
		const lat = position.coords.latitude;
		const lng = position.coords.longitude;
		init(lat, lng);
	});
	} else {
	  // Геолокация не доступна
	}
}



function init (lat, lng) {
    var myMap = new ymaps.Map('map_movie', {
            center: [lat, lng],
            zoom: 11,
			controls: []
	});
	 var searchControl = new ymaps.control.SearchControl({
		 options: {
            provider: 'yandex#search',
			preset: "islands#redGovernmentCircleIcon",
			hideIconOnBalloonOpen: false
        }
    });
	 myMap.controls.add(searchControl);
	myMap.behaviors.disable('scrollZoom'); 
	ymaps.geolocation.get({
    // Зададим способ определения геолокации
    // на основе ip пользователя.
    provider: 'yandex',
    // Включим автоматическое геокодирование результата.
    autoReverseGeocode: true
}).then(function (result) {
    // Выведем результат геокодирования.
    const city = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.Address.formatted || 'Беларусь';
	searchControl.search(`все кинотеатры ${city}`);
});
	

}

ymaps.ready(getPosition);