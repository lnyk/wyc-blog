var global_worker = function() {
  function init_theme() {
    var nodes = {
      nav: $('#nav'),
      aside: $('#aside'),
      navTags: $('#nav-tags')
    };

    $('#open-panel, #aside-mask').on('click', function() {
      nodes.aside.toggleClass('panel-show');
    });
    $('#nav-tag').on('click', function(event) {
      event.preventDefault();console.log(nodes.navTags.attr('class'));
      nodes.navTags.toggleClass('tag-show');console.log(nodes.navTags.attr('class'));
    });/*.hover(function() {
         nodes.navTags.addClass('tag-show');
         }, function() {
         nodes.navTags.removeClass('tag-show');
         });*/
  }

  function init_pangu() {
    pangu.spacingElementByTagName('p');
    pangu.spacingElementByTagName('h1');
    pangu.spacingElementByTagName('h2');
    pangu.spacingElementByTagName('h3');
    pangu.spacingElementByTagName('h4');
    pangu.spacingElementByTagName('blockquote');
  }

  return {
    init_theme: init_theme,
    init_pangu: init_pangu
  };

}();

$(document).ready(function () {
  global_worker.init_theme();
  global_worker.init_pangu();
});
