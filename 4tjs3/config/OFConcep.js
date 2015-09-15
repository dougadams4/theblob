(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.ofconcepts.com",
            alias: "OFConcep",
            GA_UA: "UA-5985949-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "a value='Add To Cart'>Add to Cart</a",
            //addCartImage: "/v/vspfiles/templates/ofconcepts/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/ofconcepts/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/ofconcepts/images/nophoto.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: false,
                resultType: 0,
                numItems: 6,
                caption: "Our customers also bought",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TPD1",
                divSelect: "table#v65-product-parent",
                divPosition: "below",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Our customers also viewed",
                    productStyle: "product4T product4TPD2",
                    divSelect: "table#v65-product-related",
                    divPosition: "replace",
                    carousel: {
                        items: 4,
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<div class='PD14T'></div>",
                    rawJS: {
                        preDisplay: function (tout) {
                            jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
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
                numItems: 12,
                caption: "You may also like",
                //captionStyle: "checkout-headers product4TCaption product4TCaptionVC",
                productStyle: "product4T product4TVC",
                divSelect: "#v65-cart-checkout-parent ",
                divPosition: "below",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
