$(document).ready(function() {
	$('#pagepiling').pagepiling({
		direction: 'vertical',
		scrollingSpeed: 500,
        easing: 'swing',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': 'yellow',
            'position': 'left',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        loopBottom: true,
        loopTop: true,
	});
});