(function (_4TellBoost, $, undefined) {

    //Call-back Function to handle results from the Boost service call
    _4TellBoost.displayCombinedTouts = function (data) {
        if (data) {
        	var errChk = String(data);
            if (errChk.length < 5 || errChk.substring(0, 5) === 'Error') return;

            //Slice things off for the individual touts to display.
            for (var i = 0; i < _4TellBoost.Touts.length; ++i) {
				if (data.length <= i) break;
				var toutData = data[i];
				var tout = _4TellBoost.Touts[i];
				//see if the next set of results should be appended
				while (i+1 < _4TellBoost.Touts.length && _4TellBoost.Touts[i+1].appendResults) {
					i++;
					if (data.length <= i) continue;
					var newCount = _4TellBoost.Touts[i].numItems;
					if (!newCount) continue;
					toutData = toutData.concat(data[i]);
					tout.numItems += newCount;
				}
                if (tout.enable) {
                    tout.displayDiv(toutData);
                    $('.FourTellContainer .owl-nav div').html("");
                    $('.FourTellContainer .owl-nav div.owl-next').css("background-position-y", "-30px");

                }
            }
        }
    };

		//This method handles redrawing the tout when responsive z-index is use to change tout parameters
		//note that responsive touts that need to move on the page should never use the "replace" position in any location
		//this is because we need to be able to use that location again as the screen width is changed
	    $(window).resize(function () {
	        var displayMode = $("div.state-indicator").css("z-index");
	        for (var i = 0; i < _4TellBoost.Touts.length; ++i) {
	            var tout = _4TellBoost.Touts[i];
	            //appendResults is a flag indicating that this tout is not displayed individually 
	            //it produces results that are appended to the previous tout
	            if (tout.appendResults) continue; 
	            
	            if (tout.responsive && tout.responsive[displayMode] && displayMode !== tout.currentDisplayMode) {
		            var toutClass = "." + _4TellBoost.Service.pageType + tout.id;
	            	
	                $.extend(tout, tout.responsive[displayMode]);
	                if (tout.responsive[tout.currentDisplayMode] 
	                	&& tout.responsive[displayMode].divSelect == tout.responsive[tout.currentDisplayMode].divSelect)
	                	//if the position's not changing we should just replace the current tout
	                	$.extend(tout, { divSelect: toutClass, divPosition: "replace" }); //, wrapper: ""
	                else 
	                	//the position has changed, so delete the existing tout before drawing the new one
						$(toutClass).remove();
	                tout.currentDisplayMode = displayMode;
	            	tout.displayDiv(tout.recs);
                        $('.FourTellContainer .owl-nav div').html("");
                        $('.FourTellContainer .owl-nav div.owl-next').css("background-position-y", "-30px");

	            }
	        }
	    });

    _4TellBoost.Service.customLoaded = true;
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
