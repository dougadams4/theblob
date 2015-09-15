(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    _4TellBoost.getRatingImage = function () {
        return $("<div class='ratings'/>");
    };
    _4TellBoost.getProdImg = function (tout, itemdata) {
        //Boilerplate. This will make things complicated if we need to refactor
        var frameTarget = '';
        if (tout.inFrame) frameTarget = "target='_parent' ";
        var itemType = _4TellBoost.resultTypes[itemdata.resultType] || itemdata.resultType;
        var trackFunc = 'onclick="_4TellBoost.TrackClick(' + "'" + _4TellBoost.Service.pageType + "-" + itemType + "','" + itemdata.productID +
            "','" + itemdata.pageLink + "');return false;" + '"';
        var pageLink = '';
        if (_4TellBoost.SiteInfo.includeBase)
            pageLink = 'http://' + _4TellBoost.SiteInfo.baseURL; //link to PDP should not be https
        pageLink += itemdata.pageLink;

        var prodImage = $("<div class='" + tout.productImageStyle + "' />");
        var img = $('<img class="productImageImg" onerror="_4TellBoost.ImgError(this);"/>');
        //Can't use the regular title because we've modified it in the perProduct JS.
        img.attr("alt", itemdata[4]);
        img.attr("title", itemdata[4].replace(/(&reg;)/, "®").replace(/(&#8482;)/, "™").replace(/(&trade;)/, "™").replace(/(&#34)/, '"'));
        img.attr("src", _4TellBoost.SiteInfo.emptyImage);
        img.attr("data-src", itemdata.imageLink);
        img.appendTo(prodImage);
        img.wrap("<a href='" + pageLink + "' " + frameTarget + trackFunc + ' ></a>');
        return prodImage;
    };

}(window._4TellBoost = window._4TellBoost || {}, jQuery));
