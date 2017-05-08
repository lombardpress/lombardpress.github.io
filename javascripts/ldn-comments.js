$(document).ready(function(){
  $("[property]").each(function (i, elem){
    var _this = this
		//console.log( 'properties found: ' + $(this).attr("href"));
		if ($(this).attr("property").includes("cito:discusses") )
    {
      $(this).css({"position":"relative"})
      $(this).append("<div id='comments' style='position: absolute; left: -215px; width: 200px; top: 0; height: 100px; border-top: 2px solid lightgray; border-bottom: 2px solid lightgray; overflow: scroll; font-size: 12px; text-align: right'><b>Discussion</b></div>");
      $(this).after("<div id='citation' style='padding-bottom: 5px; font-size: 12px; text-align: right'></div>");


			var target = $(this).attr("resource");
      console.log("target found", target);
			var parent = $(this).closest("[id]").attr("id");
      $.ajax({
        url: target,
        dataType: "json",
        success: function(data){
          source = (data["http://scta.info/resource/b1d3qun-qnveid"])
          console.log(source);
          var title = source["http://purl.org/dc/elements/1.1/title"][0].value
          var parnumber = source["http://scta.info/property/paragraphNumber"][0].value
          console.log(title);
          $("#citation").append("Passage source: Paragraph no. " + parnumber + " <a href='" + target + "'>" + target + "</a>");
          var inbox = source["http://www.w3.org/ns/ldp#inbox"][0].value
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

        },
        error: function(data){
          console.log("fail", data)
        }
      });

    }
  });
});
