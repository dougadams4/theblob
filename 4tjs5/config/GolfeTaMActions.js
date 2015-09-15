(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    $(document).ready(function () {
        var CATID = $(".breadcrumb li:last").attr("class");
        CATID = CATID && CATID.replace("category", "");
        if ("product" != CATID) {
            _4TellBoost.setPageType('Category');
            _4TellBoost.setCatId(CATID);
        }


        if ($("#brands").length) {
            _4TellBoost.setPageType('Home');
        }
    });

    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $(_4TellBoost.SiteInfo.addCartBtnAtts);
        if (buyBtn)
            buyBtn.appendTo(buyWrapper);
        var newAddress = itemdata.pageLink;

        //can't wrap with a-href in IE so add new address to the onclick handler
        buyBtn.click(function () {
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID, newAddress);
        });
        return buyWrapper;
    };

}(window._4TellBoost = window._4TellBoost || {}, jQuery));
//self-invoked namespace that protects $ and undefined internally
