(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.sassysecret.com",
            alias: "sassysec",
            GA_UA: "",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/SS10-9-14/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/SS10-9-14/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/SS10-9-14/images/nophoto.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Our customers also bought...",
                productStyle: "product4T product4THome",
                divSelect: ".cat-wrap",
                divPosition: "below",
                carousel: {
                    items: 5,
                    itemsCustom: [[0,1],[480,2],[768,3],[992,4],[1200,5],[1400,6]],
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
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "tr:has(input#v65-product-wishlist-button):last",
                divPosition: "below",
                carousel: {
                    items: 5,
                    itemsCustom: [[0,1],[480,2],[768,3],[992,4],[1200,5],[1400,6]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<tr><td><div class='PD14T'></div></td></tr>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 4,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD2",
                divSelect: "#v65-product-related",
                divPosition: "replace",
                carousel: {
                   items: 5,
                    itemsCustom: [[0,1],[480,2],[768,3],[992,4],[1200,5],[1400,6]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).hide();
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".col-md-3 hidden-xs hidden-sm",
                divPosition: "below",
                carousel: {
                    items: 5,
                    itemsCustom: [[0,1],[480,2],[768,3],[992,4],[1200,5],[1400,6]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
