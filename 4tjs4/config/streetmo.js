(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.streetmoda.com/",
            alias: "streetmo",
            GA_UA: "UA-818915-2",
            platform: "4TellShp.js",
            custom: true,
            addCartBtnAtts: "<input type='submit' value='View Details' class='btn'>",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Recommended for You",
                productStyle: "product4T product4THome",
                divSelect: "#homePagePromo",
                divPosition: "below",
                carousel: {
                    items: 5,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: false,
                showPrice: true,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "Other Items That May Interest You",
                productStyle: "product4T product4TPD1",
                divSelect: "ul.tabs",
                divPosition: "above",
                carousel: {
                    items: 2,
                    itemsCustom: [[0, 2]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showPrice: true,
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function () {
                        $(".add_to_cart").click(function () {
                            _4TellBoost.addCartItem(_4TellBoost.Service.productList[0]);
                        });
                    }
                },
                responsive: {
                    1: {
                        divSelect: "ul.tabs",
                        divPosition: "above"
                    },
                    2: {
                        divSelect: "ul.tabs",
                        divPosition: "above"
                    },
                    3: {
                        divSelect: ".eight.columns.alpha:has(div.desc)",
                        divPosition: "above"
                    },
                    4: {
                        divSelect: ".eight.columns.alpha:has(div.desc)",
                        divPosition: "above"
                    }
                },
                inCart: false
            }, {
                appendResults: true,
                enable: true,
                resultType: 3,
                numItems: 6,
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
                caption: "You May Also Like",
                productStyle: "product4T product4TVC",
                divSelect: "#cross-sell",
                divPosition: "replace",
                carousel: {
                    items: 3,
                    itemsCustom: [[0, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showPrice: true,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function () {
                        _4TellBoost.addCartItem(_4TellBoost.UserData.cart.join());
                    }
                },
                inCart: true
            }],
            E404: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "More Ideas",
                productStyle: "product4T product4THome",
                divSelect: "#ModaLisa",
                divPosition: "below",
                carousel: {
                    items: 5,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: false,
                showPrice: true,
                wrapper: "<div class='EP4T'></div>",
                rawJS: {},
                inCart: false
            }]
       }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
