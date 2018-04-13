var alphaDust = function () {

  var _menuOn = false;

  function initPostHeader() {
    $('.main .post').each(function () {
      var $post = $(this);
      var $header = $post.find('.post-header.index');
      var $title = $post.find('h1.title');
      var $readMoreLink = $post.find('a.read-more');

      var toggleHoverClass = function () {
        $header.toggleClass('hover');
      };

      $title.hover(toggleHoverClass, toggleHoverClass);
      $readMoreLink.hover(toggleHoverClass, toggleHoverClass);
    });
  }

  function _menuShow () {
    $('nav a').addClass('menu-active');
    $('.menu-bg').show();
    $('.menu-item').css({opacity: 0});
    TweenLite.to('.menu-container', 1, {padding: '0 40px'});
    TweenLite.to('.menu-bg', 1, {opacity: '0.92'});
    TweenMax.staggerTo('.menu-item', 0.5, {opacity: 1}, 0.3);
    _menuOn = true;

    $('.menu-bg').hover(function () {
      $('nav a').toggleClass('menu-close-hover');
    });
  }

  function _menuHide() {
    $('nav a').removeClass('menu-active');
    TweenLite.to('.menu-bg', 0.5, {opacity: '0', onComplete: function () {
      $('.menu-bg').hide();
    }});
    TweenLite.to('.menu-container', 0.5, {padding: '0 100px'});
    $('.menu-item').css({opacity: 0});
    _menuOn = false;
  }

  function initMenu() {

    $('nav a').click(function () {
      if(_menuOn) {
        _menuHide();
      } else {
        _menuShow();
      }
    });

    $('.menu-bg').click(function (e) {
      if(_menuOn && e.target === this) {
        _menuHide();
      }
    });
  }

  function displayArchives() {
    $('.archive-post').css({opacity: 0});
    TweenMax.staggerTo('.archive-post', 0.4, {opacity: 1}, 0.15);
  }

  // function justifyContent() {
  //   // 此方法用于给每个字之间加入空格，然后再调整字间距，以达到完美对齐的目的，
  //   // 但只能处理纯文本，HTML标签之间也会加入空格。
  //   // $("#post_content").css({"text-align":"justify","letter-spacing":"-0.15em"});
  //   // $("#post_content").html(function(i, origText) {
  //   //   return origText.split("").join(" ");
  //   // });

  //   // 此方法用于给博文内容中的中英文之间加入空格
  //   $("#post_content").html(function(i, origText) {
  //     var p1=/([A-Za-z_])([\u4e00-\u9fa5]+)/gi;
  //     var p2=/([\u4e00-\u9fa5]+)([A-Za-z_])/gi;
  //     //var p1=/([A-Za-z])((<[^<]*>)*[\u4e00-\u9fa5]+)/gi;
  //     //var p2=/([\u4e00-\u9fa5]+(<[^<]*>)*)([A-Za-z])/gi;
  //     return origText.replace(p1, "$1 $2").replace(p2, "$1 $2");
  //   });
  // };

  return {
    initPostHeader: initPostHeader,
    initMenu: initMenu,
    displayArchives: displayArchives
    // justifyContent: justifyContent
  };
}();

$(document).ready(function () {
  alphaDust.initPostHeader();
  alphaDust.initMenu();
  alphaDust.displayArchives();
  //alphaDust.justifyContent();
  pangu.spacingElementByTagName('p');
  pangu.spacingElementByTagName('h1');
  pangu.spacingElementByTagName('h2');
  pangu.spacingElementByTagName('h3');
  pangu.spacingElementByTagName('h4');
  pangu.spacingElementByTagName('blockquote');
});
