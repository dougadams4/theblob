(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $('<form enctype="multipart/form-data" method="post" action="add_cart.asp" name="add' + itemdata.productID + '">' +
            '<input type="hidden" name="item_id" value="' + itemdata.productID + '"><input type="hidden" name="qty-0" value="1"></form>');
        var ATCBtn = $(_4TellBoost.SiteInfo.addCartBtnAtts).attr("onclick", "document.add" + itemdata.productID + "[0].submit();")
        ATCBtn.appendTo(buyBtn);
        buyBtn.appendTo(buyWrapper);
        var newAddress = null;

        //can't wrap with a-href in IE so add new address to the onclick handler
        buyBtn.click(function () {
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID, newAddress);
        });
        return buyWrapper;
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
