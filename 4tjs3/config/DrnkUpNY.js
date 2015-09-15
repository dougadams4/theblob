(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.drinkupny.com",
            alias: "DrnkUpNY",
            GA_UA: "UA-18915578-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/55/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/55/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/55/images/nophoto.gif",
            pricePrefix: "Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 4,
                numItems: 4,
                rotateRecs: true,
                caption: "Top Sellers...",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: ".FourTellContainer",
                divPosition: "replace",
                maxImageHeight: 150,
                //carousel: {
                //    items: 4,
                //    scrollPerPage: true,
                //    navigation: true,
                //    navigationText: false,
                //    pagination: false
                //},
                showBuyButton: true,
                showRatings: false,
                showPrice: true,
                wrapper: "<div id='HOME4T' ></div>",
                rawJS: {
                    preDisplay: function () {
                        $('td[rowspan=2] img[src*=assets]').css('box-shadow', '2px 6px 9px #888');//Add drop-shadow to the main banner.
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 8,
                caption: "Our customers also bought...",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "table.colors_pricebox",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0,2]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                maxImageHeight: 120,
                wrapper: "<table class='PD14T'><tr><td id='td4Tell'></td></tr></table>",
                rawJS: {
                    preDisplay: function (tout) {
                        $('table#v65-product-related').remove();
                    }
                },
                inCart: false
            }],
            Category: [{
                enable: false
            }],
            Search: [{
                enable: false

            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "You may also like...",
                captionStyle: "product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: "table#v65-cart-checkout-parent td:first",
                divPosition: "replace",
                carousel: {
                    items: 2,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 110,
                showRatings: true,
                wrapper: "<td id='td4Tell' style='width: 350px;' valign='top'></td>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: true
            }]
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
