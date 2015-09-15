(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    $(document).ready(function () {
        var CATID = $(".breadcrumb li:last").attr("class");
        CATID = CATID.replace("category", "");
        if ("product" != CATID) {
            _4TellBoost.setPageType('Category');
            _4TellBoost.setCatId(CATID);
        }


        if ($("#brands").length) {
            _4TellBoost.setPageType('Home');
        }
    });

}(window._4TellBoost = window._4TellBoost || {}, jQuery));
//self-invoked namespace that protects $ and undefined internally
