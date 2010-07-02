# jQuery Slideshow
This is a pretty simple jQuery plugin to add slideshow capability to an
container full of other containers. So, with the following markup:

    <div id="slideshow" class="slideshow">
      <img src="slideshow/01.jpg" class="current" />
      <img src="slideshow/02.jpg" />
      <img src="slideshow/03.jpg" />
      <img src="slideshow/04.jpg" />
      <img src="slideshow/05.jpg" />
      <div class="slideshow-control">
        <a href="#" class="slideshow-control" rel="prev">prev</a>
        <a href="#" class="slideshow-control" rel="next">next</a>
      </div>
    </div>

You can turn that into a slideshow with the following call:

    $("#slideshow").slideshow();

And that's it! You can style the next and previous buttons however you want as
long as they're within the slideshow container and they're labeled with their
"rel" attributes like how they are above.