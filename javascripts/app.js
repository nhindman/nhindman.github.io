// var ContentContainerView = Backbone.View.extend({
//   initialize: function() {
//     this.render()
//   }
//   render: function(){
    
//   }
// })


$(function(){

  $('.hello').on("click", function(e){
      e.preventDefault();
      $('.content_container').empty();
      $('.text_container').empty();
      var html_string = $('#hello_template').html();
      $('.content_container').append(html_string);
      $('.content_container').find($('.hello_bio')).slideDown("slow");
      $('.content_container').find($('.facebook')).animate({'top':'320px'}, 500)
      $('.content_container').find($('.twitter')).animate({'top':'320px'}, 600)
      $('.content_container').find($('.linkedin')).animate({'top':'320px'}, 700)
      $('.content_container').find($('.github')).animate({'top':'320px'}, 800)
    })

  $('.writing').on("click", function(e){
    e.preventDefault();
    $('.content_container').empty();
    var html_string = $('#writing_template').html();
    $('.content_container').append(html_string);
    $('.content_container').find($('.webster_image')).fadeIn(800);
    $('.content_container').find($('.sushi_image')).fadeIn(900)
    $('.content_container').find($('.skybox_image')).fadeIn(900);
    $('.content_container').find($('.wall_image')).fadeIn(900)
  })

  $(document).on("mouseover", '.webster_image', function(e){
    e.preventDefault();
    $('.text_container').empty();
    var html_string = $('#writing_text_template').html();
    $('.text_container').append(html_string);
    $('.text_container').find($('.webster_text')).fadeIn(500);
  })

  $(document).on("mouseover", '.sushi_image', function(e){
    e.preventDefault();
    $('.text_container').empty();
    var html_string = $('#writing_text_template').html();
    $('.text_container').append(html_string);
    $('.text_container').find($('.harney_text')).fadeIn(500);
  })

  $(document).on("mouseover", '.skybox_image', function(e){
    e.preventDefault();
    $('.text_container').empty();
    var html_string = $('#writing_text_template').html();
    $('.text_container').append(html_string);
    $('.text_container').find($('.skybox_text')).fadeIn(500);
  })

  $(document).on("mouseover", '.wall_image', function(e){
    e.preventDefault();
    $('.text_container').empty();
    var html_string = $('#writing_text_template').html();
    $('.text_container').append(html_string);
    $('.text_container').find($('.wall_text')).fadeIn(500);
  })

  $('.coding').on("click", function(e){
      e.preventDefault();
      $('.content_container').empty();
      $('.text_container').empty();
      var html_string = $('#coding_template').html();
      $('.content_container').append(html_string);
      $('.content_container').find($('.coding_container')).slideDown("slow");
    })

  $('.sharing').on("click", function(e){
      e.preventDefault();
      $('.content_container').empty();
      $('.text_container').empty();
      var html_string = $('#sharing_template').html();
      $('.content_container').append(html_string);
      $('.content_container').find($('.sharing_container')).slideDown("fast");
    })



});


// var Router = Backbone.Router.extend({
//     routes: {
//         'hello': 'hello',
//         'coding': 'coding'
//     },
//     hello: function(){
//       var hello_view = new HelloView();
//     }, 
//     coding: function(){
//       var coding_view = new CodingView();
//     }
// });

// var HelloView = Backbone.View.extend({

//   initialize: function() {
//     this.render();
//   },
//   render: function(){
//     $('.content_container').empty()
//     var html_string = $('#hello_template').html();
//     $('.content_container').append(html_string); 
//   }
// })

// var CodingView = Backbone.View.extend({
//   initialize: function() {
//     this.render();
//   },
//   render: function(){
//     $('.content_container').empty()
//     var html_string = $('#coding_template').html();
//     $('.content_container').append(html_string) 
//   }
// })

// $(function(){

//   new ContentContainer;
//   Backbone.history.start();

// });

