/*
 * jquery.slideshow.js
 * 
 * jQuery plugin to convert a container of images into a slideshow.
 * 
 * (c) 2010 max thom stahl
 */

(function ($) {
  $.fn.slideshow = function () {
    this.each(function () {
      var slideshow = $(this);
      var num_slides = $(".slide", this).length;
      var current_slide = 0;
      var prev_btn = $(".slideshow-control[rel='prev']", this);
      // this.prev_btn.slideshow = this;
      prev_btn.click(function () {
        current_slide = (current_slide + num_slides - 1) % num_slides;
        $(".slide.current", slideshow)
        .fadeOut('fast', function () {
          $(".slide:eq(" + current_slide + ")", slideshow)
          .fadeIn('slow')
          .addClass("current");
        })
        .removeClass("current");
      });
      var next_btn = $(".slideshow-control[rel='next']", this);
      // this.next_btn.slideshow = this;
      next_btn.click(function () {
        current_slide = (current_slide + num_slides + 1) % num_slides;
        $(".slide.current", slideshow)
        .fadeOut('fast', function () {
          $(".slide:eq(" + current_slide + ")", slideshow)
          .fadeIn('slow')
          .addClass("current");
        })
        .removeClass("current");
      });
    });
  };
})(jQuery);