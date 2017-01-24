$(document).ready(function(){
  $("[property]").each(function (i, elem){
    var _this = this
		//console.log( 'properties found: ' + $(this).attr("href"));
		if ($(this).attr("property").includes("cito:discuss") )
    {
      $(this).after("<div id='comments'></div>");

			var target = $(this).attr("resource");
			var parent = $(this).closest("[id]").attr("id");
      var inbox = "http://inbox.scta.info/notifications/?resourceid=" + target;
      console.log("target found", target);
			console.log("inbox found", inbox);
      $.get(inbox, function(data){
        data["ldp:contains"].forEach(function(l){
          $.get(l["@id"], function(ldata){
            if (ldata["motivation"] == "commenting") {
  						$("#comments").append(ldata.body.value)
  					}
			    });
        });
      });
    }
  });
});
