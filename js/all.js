(function($) {
  $.randomize = function(arr) {  
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;     
  };
})(jQuery);

$(document).ready(function() {
  var randomAds = $.randomize(ads);
  jQuery.each(randomAds, function(i) {
  if(i < 3) {
    $('#ephemera').append(
    '<div>\
      <a href="http://rover.ebay.com/rover/1/710-53481-19255-0/1?icep_ff3=2&toolid=10005&campid=5335890464&customid=&icep_item=' + this.i + '&ipn=psmain&icep_vectorid=229508&kwid=902099&mtid=824&kw=rss">\
      <h4>' + this.t + '  <small>(£' + parseFloat(this.p).toFixed(2) + ')</small></h4>\
      <img src="' + this.g + '" alt="' + this.t + '" title="' + this.t + '">\
     </div>'
    );
  }
 });
});

