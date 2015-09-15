(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "signware",
            GA_UA: "UA-4297016-1",
            platform: "4TellMv.js",
            addCartBtnAtts: "form method='post' action='merchant.mvc?Screen=BASK'><input type='hidden' name='Action' value='ADPR'><input type='hidden' name='Quantity' value='1'><button type='submit' class='button'><span data-icon=''></span>Add To Cart</button></form",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [
                {
                    enable: true,
                    resultType: 1,
                    numItems: 12,
                    caption: "<div class='h3 column'>Recommended for you</div>",
                    productStyle: "product4T product4THome",
                    divSelect: ".product-carousel",
                    divPosition: "above",
                    carousel: {
                        items: 4,
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<div class='HOME4T'></div>",
                    rawJS: {},
                    inCart: false
                }
            ],
            ProductDetail: [
                {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "Customers also bought",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".product-information--description",
                    divPosition: "above",
                    carousel: {
                        items: 4,
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<div class='PD14T'></div>",
                    rawJS: {},
                    inCart: false
                }, {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#js-smart-tabs ",
                    divPosition: "below",
                    carousel: {
                        items: 4,
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<div class='PD24T'></div>",
                    rawJS: {
                        preDisplay: function () {
                            jQuery(".product-carousel").hide;
                        }
                    },
                    inCart: false
                }
            ],
            Search: [
                {
                    enable: false
                }
            ],
            Category: [
                {
                    enable: false,
                    resultType: 5,
                    numItems: 4,
                    caption: "More ideas",
                    productStyle: "product4T product4TCat",
                    divSelect: "#main4TellContainer",
                    divPosition: "append",
                    setHeight: false,
                    setWidth: false,
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div class='CAT4T'></div>",
                    rawJS: {},
                    inCart: false
                }
            ],
            AddToCart: [
            {
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like",
                productStyle: "product4T product4TVC",
                divSelect: ".cart-summary",
                divPosition: "above",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function () {
                        jQuery(".basket-product-row small").each(function () {
                            _4TellBoost.addCartItem(jQuery(this).text());
                        });
                    },
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).css({
                            "float": "right",
                            "margin-left": 0
                        });
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
