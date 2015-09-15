(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    _4TellBoost.Service.address = "stage.4-Tell.net/Boost2.0/";
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
    $(document).ready(function () {
        var CATID = ($("#tout1_cat_4Tell").length && $("#tout1_cat_4Tell").data().category)
        if (CATID) {
            _4TellBoost.setPageType("Category");
            _4TellBoost.setCatId(CATID.toString());
        }

        $("input#add-to-cart, a.cart-button").click(function () {
            _4TellBoost.Service.called = false;
            _4TellBoost.setPageType("QuickCart");
            _4TellBoost.Service.lastDivIDs = [];
            _4TellBoost.Touts = [];
            _4TellBoost.getRecommendations("Auto", "");
        })
    });
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
