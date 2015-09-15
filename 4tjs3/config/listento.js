(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "shoppe.listentoyourgut.com",
            alias: "listento",
            GA_UA: "UA-33751081-1",
            platform: "4TellBc.js",
            addCartBtnAtts: "input type='image'",
            addCartImage: "/templates/__custom/images/listentoyourgut/add_to_cart_button.png",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            priceClass: "price2",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 5,
                numItems: 20,
                rotateRecs: true,
                caption: "Jini's Favorites",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4THome",
                divSelect: "#HomeFeaturedProducts",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                maxImageHeight: 180,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#mainrightside, #HomeNewProducts").hide();
                    },
                    preInit: function (tout) {
                        _4TellBoost.setCatId("145");
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#SimilarProductsByCustomerViews",
                divPosition: "below",
                carousel: {
                    items: 2,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 4,
                caption: "<h2>Customers also viewed</h2>",
                productStyle: "product4T product4TPD2",
                divSelect: "#SideTopSellers",
                divPosition: "replace",
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD24T'></div>",
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "More Ideas",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TVC",
                divSelect: "#frmCompare",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 170,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                inCart: true
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TVC",
                divSelect: ".KeepShopping",
                divPosition: "above",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 170,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#SuggestiveCartContent").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
