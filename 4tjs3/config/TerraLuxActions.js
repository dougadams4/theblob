(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    $(document).ready(function () {
        if ($("#CartHeader").length > 0) {
            _4TellBoost.setPageType("AddToCart");
        } else if ($("body.category").length > 0) {
            _4TellBoost.setPageType("Category");
        }
    });
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
