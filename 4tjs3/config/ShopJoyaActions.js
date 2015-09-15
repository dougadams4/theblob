(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $(_4TellBoost.SiteInfo.addCartBtnAtts);
        var ATCBtn = $("<form method='POST' action='addtocart.aspx'></form>");
        ATCBtn.append("<input type='hidden' value='1' name='Quantity' id='Quantity' size='2'>");

        if (_4TellBoost.SiteInfo.addCartImage) {
            var buyBtnImage = '';
            if (_4TellBoost.SiteInfo.includeBase)
                buyBtnImage = '//' + _4TellBoost.SiteInfo.baseURL + '/';
            buyBtnImage += _4TellBoost.SiteInfo.addCartImage;
            buyBtn.attr("src", buyBtnImage);
        }
        ATCBtn.append("<input type='hidden' name='ProductID' id='ProductID' value='" + itemdata.productID + "'>");
        ATCBtn.append(buyBtn);
        if (ATCBtn)
            ATCBtn.appendTo(buyWrapper);

        //can't wrap with a-href in IE so add new address to the onclick handler
        buyBtn.click(function () {
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID, itemdata.pageLink);
        });
        return buyWrapper;
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
//self-invoked namespace that protects $ and undefined internally
