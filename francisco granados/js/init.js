(function($){
  $(function(){

    $('.button-collapse').sideNav();
	$('ul.tabs').tabs();

	if ($('#modal1').length){

		$('#modal1').openModal({
		  dismissible: false, // Modal can be dismissed by clicking outside of the modal
		  opacity: .5, // Opacity of modal background
		}
		);
	}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58775824-1', 'auto');
  ga('send', 'pageview');
  
  }); // end of document ready
})(jQuery); // end of jQuery name space