﻿(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;

    _4TellBoost.getRatingImage = function (rating) {
        var rateVal = parseFloat(rating);
        if (isNaN(rateVal) || rateVal < 0) return $("<div class='ratingImage'/>");
        //ignore negative and NaN ratings.
        rateVal = Math.min(rateVal, 5);

        var imagePath = "";
        var star = String(Math.floor(rateVal));
        var ratingDiv = $("<div class='ratingImage rate'/>");
        ratingDiv.addClass("rate" + star);
        return ratingDiv;
    };

    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $("<" + _4TellBoost.SiteInfo.addCartBtnAtts + " />");
        if (_4TellBoost.SiteInfo.addCartImage) {
            var buyBtnImage = '';
            if (_4TellBoost.SiteInfo.includeBase)
                buyBtnImage = '//' + _4TellBoost.SiteInfo.baseURL + '/';
            buyBtnImage += _4TellBoost.SiteInfo.addCartImage;
            buyBtn.attr("src", buyBtnImage);
        }
        if (buyBtn)
            buyBtn.appendTo(buyWrapper);
        var newAddress = itemdata.pageLink;


        //can't wrap with a-href in IE so add new address to the onclick handler
        buyBtn.click(function () {
            //alert(tout.toutType, itemdata.productID, newAddress);
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID, newAddress);
        });
        return buyWrapper;
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
//self-invoked namespace that protects $ and undefined internally
