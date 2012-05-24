$(document).ready(function() {
  jQuery.each(ads, function() {
  $("#ads").append(
    '\
    <li class="span3">\
    <div class="thumbnail">\
    <h5>' + this.t + '</h5>\
    <img width="115" height="140" src="' + this.g + '" alt="">\
    <p>Price: £' + this.p + ' <a href="http://rover.ebay.com/rover/1/710-53481-19255-0/1?icep_ff3=2&toolid=10005&campid=5335890464&customid=&icep_item=' + this.i + '&ipn=psmain&icep_vectorid=229508&kwid=902099&mtid=824&kw=rss">Bid Now</a></p>\
    </div>\
    </li>');
  });
 });

