(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    //_4TellBoost.Service.address = "stage.4-Tell.net/Boost2.0/";
    $(document).ready(function () {
        if ($("#CartHeader").length > 0) {
            _4TellBoost.setPageType("AddToCart");
        } else if ($("body.category").length > 0) {
            _4TellBoost.setPageType("Category");
        }
    });

    var detectCartCustom = setInterval(function () {
        var quickCart = $("div.fast-cart-content");
        if (quickCart && quickCart.length) {
            _4TellBoost.Service.called = false;
            _4TellBoost.Service.lastDivIDs = [];
            _4TellBoost.setPageType("Auto");
            _4TellBoost.getRecommendations("Auto", "");
            clearInterval(detectCartCustom);
        }
    }, 100);
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
