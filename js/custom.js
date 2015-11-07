$(function() {
	/* Menu mobilne */
	$("#main-menu").slicknav({
		prependTo: "#attach-mobile-menu", // nie jest to standardowa funkcja jQuery, więc musimy wywołać ją jako opcję pluginu
		label: ""
	});

	/* Główny slider */
// 	$("#main-slider").bxSlider({
// 		mode: 'fade', // przenikanie na przejściu między slajdami, nadpisujemy domyślny efekt przewijania slajdów
// 		auto: true, // slajdy zmieniane automatycznie
// 		pager: false // ukrywamy paginację
// 	});

	/* skrypt do odliczania - jquery-countTo */
	$(".timer").countTo();

	/* jQuery-viewport-checker */
	// $('.our-team').viewportChecker({ // w opcjach dodajemy specjalne klasy, które zostaną dodane do elementu kiedy pojawi się on we viewporice, dodajemy klasy z biblioteki 'animate.css'
		// classToAdd: 'animated swing'
	// });

	/* viewport */
	// dodajemy klasę, a tak naprawdę jest to nasza domieszka, ale z punktu widzenia css nie robi to żadnej różnicy i zadziała to tak, że doda klasę / domieszkę to wszystkich elementów posiadających dany atrybut
	// za pomocą pętli each, dla każdego elementu który spełnia dane kryterium, wywołamy funkcję:
	// na każdym elemencie, który posiada ten atrybut, wywołać viewportchecker (sprawdza czy danym element został załadowany do viewportu)
	// potem dodajemy do tych ukrytych elementów klasę / mixin '.show', żeby je odkryć i dodatkowo musimy przypisać im klasę 'animated' i jeszcze dynamicznie dołączamy trzecią klasę z nazwą konkretnej animacji (używamy funkcji data() i za jej pomocą możemy odczytać wartość atrybutu data z elementu html)
	// musimy też np. usunąć z elementów klasę 'hide'
	$('*[data-animate]').addClass('hide').each(function() {
		$(this).viewportChecker({
			classToAdd: "show animated " + $(this).data('animate'),
			classToRemove: 'hide',
			offset: 200 // niewielkie opóźnienie w wywołaniu animacji
		})
	});

	/* YouTube Player */
	$(".player").YTPlayer();
});

/* Ładowanie obrazków */
// wycinamy kod 'główny slider' powyżej, ponieważ to właśnie funkcja imagesLoaded (po sprawdzeniu czy wszystkie obrazki na stronie zostały prawidłowo załadowane), będzie wywoływała główny slider. Zdarzeniem, wywołującym ten główny slajder, nie jest już document.ready, ale wczytanie wszystkich obrazków na całej stronie!
$("#main-container").imagesLoaded(function() {
	/* Główny slider */
	$("#main-slider").bxSlider({
		mode: 'fade', // przenikanie na przejściu między slajdami, nadpisujemy domyślny efekt przewijania slajdów
		auto: true, // slajdy zmieniane automatycznie
		pager: false // ukrywamy paginację
	});

	// opinions-slider
	$("#opinions-slider").bxSlider({
		mode: 'vertical', // slajdy będą zmieniane pionowo
		auto: true, // slajdy zmieniane automatycznie
		controls: false, // wyłączamy kontrolki
		pager: false // ukrywamy paginację
	});

	/* Owl carousel slider */
	$("#portfolio-carousel").owlCarousel({
		autoPlay: 10000, // czas po którym slajdy będą automatycznie przewijane
		items: 3, // ile slajdów będzie wyświetlanych maksymalnie
		itemsDesktopSmall: [1199,2], // poniżej szerokości <=1199px będą ładowane tylko dwa zdjęcia, dla takich mniejszych rozmiarów komputerów stacjonarnych (średnie ekrany).
		// TYLKO ŻE TO NIE JEST ŻADNA SZEROKOŚĆ OKNA PRZEGLĄDARKI, A SZEROKOŚĆ RODZICA, KTÓRY ZAWIERA ELEMENT BĘDĄCY SLIDEREM
		itemsTablet: [767,1] // pamiętaj, że to znaczy mniejsze lub równe 767px
	});
});