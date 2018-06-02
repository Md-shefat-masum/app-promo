//wow js
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();

/* 
	<section class="wow fadeInDown" style="background-color: #f1c40f;"></section>
      <section class="wow pulse" style="background-color: #e74c3c;" data-wow-iteration="infinite" data-wow-duration="1500ms"></section>
      <section class="section--purple wow slideInRight" data-wow-delay="2s"></section>
      <section class="section--blue wow bounceInLeft" data-wow-offset="300"></section>
      <section class="section--green wow slideInLeft" data-wow-duration="4s"></section>
*/