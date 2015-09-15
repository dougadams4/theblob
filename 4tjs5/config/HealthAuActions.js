(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;

    //Solves problems with Prototype
    jQuery.noConflict();

    _4TellBoost.TrackClick = function (itemType, productID, newAddress, QVBool) {
        if (_4TellBoost.SiteInfo.GA_UA.length > 0) {
            if ("object" == typeof (_gaq)) {
                window._gaq = window._gaq || [];
                window._gaq.push(['_setAccount', _4TellBoost.SiteInfo.GA_UA],
                    ['_trackEvent', _4TellBoost.SiteInfo.GATrackID, itemType, productID]);
            } else if ("function" === typeof (ga)) {
                ga('send', "event", _4TellBoost.SiteInfo.GATrackID, itemType, productID);
            } else if ("function" === typeof (_4TTracker)) {
                _4TTracker('send', "event", _4TellBoost.SiteInfo.GATrackID, itemType, productID);
            }
            else {
                //TODO: Log that somebody doesn't have GA Tracking live.
            }
        }
        setTimeout(function () {
            if (newAddress)
                window.location = newAddress;
        }, 150);
        if (QVBool)
            open_product('product.asp?lt_c=1&itemid=' + productID + '&qv=1&');
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));

