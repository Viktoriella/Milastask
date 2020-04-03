if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
	var PHOTOS = {
		'http://localhost:3000/img/work_1.jpg': 'http://localhost:3000/img/work_1-big.jpg',
		'http://localhost:3000/img/work_2.jpg': 'http://localhost:3000/img/work_2-big.jpg',
		'http://localhost:3000/img/work_3.jpg': 'http://localhost:3000/img/work_3-big.jpg',
		'http://localhost:3000/img/work_4.jpg': 'http://localhost:3000/img/work_4-big.jpg',
		'http://localhost:3000/img/work_5.jpg': 'http://localhost:3000/img/work_5-big.jpg'
	};
} else {
	var PHOTOS = {
		'file:///C:/Users/vikto/project/Milastask/build/img/work_1.jpg': 'file:///C:/Users/vikto/project/Milastask/build/img/work_1-big.jpg',
		'file:///C:/Users/vikto/project/Milastask/build/img/work_2.jpg': 'file:///C:/Users/vikto/project/Milastask/build/img/work_2-big.jpg',
		'file:///C:/Users/vikto/project/Milastask/build/img/work_3.jpg': 'file:///C:/Users/vikto/project/Milastask/build/img/work_3-big.jpg',
		'file:///C:/Users/vikto/project/Milastask/build/img/work_4.jpg': 'file:///C:/Users/vikto/project/Milastask/build/img/work_4-big.jpg',
		'file:///C:/Users/vikto/project/Milastask/build/img/work_5.jpg': 'file:///C:/Users/vikto/project/Milastask/build/img/work_5-big.jpg'
	};
};
    
var makeBigPhotos = function(obj) {
	var arr = [];
	for (var prop in obj) {
		arr.push(obj[prop]);
	};
	return arr;
};

var bigPhotos = makeBigPhotos(PHOTOS);

var popup = document.querySelector('.show-image-popup');
var popupOverlay = document.querySelector('.show-image-popup__overlay');

var figures = document.querySelectorAll('.portfolio__figure');

var showPhotos = function(figure, base) {
	figure.addEventListener('click', function() {
		var image = figure.querySelector('.portfolio__image');
		var popupImage = popup.querySelector('.show-image-popup__image');
		popupImage.src = base[image.src];
		popup.classList.add('show-image-popup__show');
		popupOverlay.classList.add('show-image-popup__show');

		var onNextPicture = function() {
			var indexPhoto = bigPhotos.indexOf(popupImage.src);
			if (indexPhoto < (bigPhotos.length - 1)) {
				popupImage.src = bigPhotos[indexPhoto + 1];
			} else {
				popupImage.src = bigPhotos[0];
			};
		};

		popupImage.addEventListener('click', onNextPicture);

		popupOverlay.addEventListener('click', function() {
			popup.classList.remove('show-image-popup__show');
			popupOverlay.classList.remove('show-image-popup__show');
			popupImage.removeEventListener('click', onNextPicture);
		});
	});
};

figures.forEach(function(figure) {
	showPhotos(figure, PHOTOS);
});





