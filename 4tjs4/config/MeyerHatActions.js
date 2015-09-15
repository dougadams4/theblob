(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;

    _4TellBoost.detectCartPage = function () {
        //check for product page
        var productImg = $("#tout1_pdp_4Tell, #tout2_pdp_4Tell");
        if (productImg && productImg.length) {
            _4TellBoost.setPageType('ProductDetail');
            return;
        }

        //check for home page
        var featuredProds = $("#tout1_hm_4Tell");
        if (featuredProds && featuredProds.length) {
            _4TellBoost.setPageType('Home');
            //No products to interest us.
            return;
        }

        //check for cart page
        productImg = $("[id*=tout1_cart_4Tell]");
        if (productImg && productImg.length) {
            _4TellBoost.setPageType('AddToCart');
            return;
        }

        //check for category page.
        var CATID = $("[id*=tout1_cat_4Tell]");
        if (CATID && CATID.length) {
            _4TellBoost.setPageType('Category');
            return;
        }

        //check for search results
        var results = $("#tout1_srch_4Tell");
        if (results && results.length) {
            _4TellBoost.setPageType('Search');
            return;
        }

        //Check for invoice page.
        var orderConfirm = $("#OrderConfirmation_4T");
        if (orderConfirm && orderConfirm.length) {
            _4TellBoost.setPageType('OrderConfirmation');
            _4TellBoost.reportSales();
        }

        _4TellBoost.setPageType('Auto');
        return;
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
//self-invoked namespace that protects $ and undefined internally
