(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $("<" + _4TellBoost.SiteInfo.addCartBtnAtts + " />");

        if (buyBtn)
            buyBtn.appendTo(buyWrapper);
        var newAddress = '';
        if (_4TellBoost.SiteInfo.includeBase)
            newAddress += 'http://' + _4TellBoost.SiteInfo.baseURL; //link to PDP should not be https
        newAddress += itemdata.pageLink;

        //can't wrap with a-href in IE so add new address to the onclick handler
        buyBtn.click(function () {
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID, newAddress);
        });
        return buyWrapper;
    };
    _4TellBoost.ImgError = function (source) {
        if (_4TellBoost.SiteInfo.hideIfNoImage) {
            var foo = $(source).closest("div.product4T");
            var newDiv = foo.parents("#" + _4TellBoost.FirstTout.newDivID + ", #" + _4TellBoost.SecondTout.newDivID).children(":hidden:first");
            if (newDiv) {
                if (foo.is(":visible"))
                    newDiv.css("display", "");
                foo.replaceWith(newDiv);
            }
        } else {
            //No picture available. Short-circuit evaluation is really the best.
            source.onError = "";
            source.src = _4TellBoost.SiteInfo.emptyImage || "/templates/__custom/images/ProductDefault.gif";
        }
    };

}(window._4TellBoost = window._4TellBoost || {}, jQuery));
