/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
        // move main image to header
        if(
        	$('.post-template').length > 0 || 
        	$('.page-template').length > 0
        ) {
        	var featured_image = $('img[alt="featured-image"]');
        	var featured_video = $('.post__content iframe:first-child')
        	// check if the featured image exists
        	if(featured_image && featured_image.length > 0) {
        		// create container for the image
        		featured_image.appendTo($('.post__media'));
        	} else if(featured_video && featured_video.length > 0) {
        		featured_video.appendTo($('.post__media'));
        	}
        }

        if(
        	$(document.body).hasClass('home-template') ||
        	$(document.body).hasClass('archive-template') ||
        	$(document.body).hasClass('tag-template') ||
        	$(document.body).hasClass('author-template')
        ) {
          // get the post images
          var blocks = [];
          
          $('.post__wrapper_helper--notloaded').each(function(i, block) {
          	blocks.push(block);
          });
          
          var add_class = function(block, class_name, delay) {
          	setTimeout(function() {
          		$(block).addClass(class_name);
          	}, delay);
          };
          
          for(var i = 0; i < blocks.length; i++) {
          	add_class(blocks[i], 'post__wrapper_helper--animated', i * 200);
          }
          
          $('.post__wrapper_helper--notloaded').each(function(i, wrapper) {
            wrapper = $(wrapper);
            var img = wrapper.find('p > img')[0];
            if(img) {
              // wait for the images
              var timer = setInterval(function() {
                // when the image is laoded
                if(img.complete) {
                  // stop periodical calls
                  clearInterval(timer);
                  // generate the image wrapper
                  var src = $(img).attr('src');
                  img.remove();
                  var img_container = $('<div class="post__image el__transition_long" style="background-image: url(\''+src+'\')"></div>');
                  img_container.appendTo(wrapper);
                  wrapper.removeClass('post__wrapper_helper--notloaded');
                  // add class with delay
                  setTimeout(function() {
                    img_container.addClass('post__image--loaded');
                  }, 250);
                }          
              }, 500);
              // add necessary mouse events
              wrapper.mouseenter(function() {
                wrapper.addClass('post__wrapper_helper--hover');
              });

              wrapper.mouseleave(function() {
                wrapper.removeClass('post__wrapper_helper--hover');
              });
            } else {
              // where there is no image - display the text directly
              wrapper.addClass('post__wrapper_helper--hover');
            }
          });
        }
        // fit videos
        $(".post-header").fitVids();
        $(".post-content").fitVids();
        // menu behaviour
        var main_menu = $(".menu");
        main_menu.click(function() {
          if(main_menu.hasClass("menu--open")) {
            main_menu.removeClass("menu--open");
          } else {
            main_menu.addClass("menu--open");
          }
        });

        //get firts image og data

        function content()
        {
          var wrapper = $(".post__content")
          var img     = wrapper.find('p > img')[0];
          var src = $(img).attr('src');

          var metaImg =  $("meta[name='twitter:image']");
          // var cadena = $(src).toString();

          if(metaImg)
          {
            $(metaImg).attr('content', src);
          }
        }
        content();


    });

    $(function(){
      var NextPrevLinksModule = function(){
        var curr,
            $prevLink,
            $nextLink;
     
        return {
          init: function(){
            curr = $('#curr-post-uuid').html();
            $prevLink = $('.prev-post');
            $nextLink = $('.next-post');
     
            $prevLink.hide();
            $nextLink.hide();
     
            this.parseRss();
          },
          // creates previous and next links
          createLinks: function(items){
            for (var i = 0; i < items.length; i++){
              var uuid = $(items[i]).find('guid').text();
              if (uuid === curr){
                if (i < items.length-1){
                  $prevLink.attr('href', $(items[i+1]).find('link').text());
                  $prevLink.show();
                }
                if (i > 0){
                  $nextLink.attr('href', $(items[i-1]).find('link').text());
                  $nextLink.show();
                }
              }
            }
          },
          // iteratively parses rss feeds to generate posts object
          parseRss: function(page, items, lastId){
            self = this;
            page = page || 1;
            items = items || undefined;
            lastId = lastId || '';
            $.get('/rss/' + page, function(data){
              var posts = $(data).find('item');
              var currId;
              if (posts.length > 0) currId = $(posts[0]).find('guid').text();
     
              if (currId === lastId){
                // if this page has already been parsed, create links
                self.createLinks(items);
              } else {
                // if not, continue parsing posts
                items = items ? items.add(posts) : posts;
                lastId = currId;
                self.parseRss(page+1, items, lastId);
              }
            });
          }
        };
      }();
     
      NextPrevLinksModule.init();
    });
}(jQuery));