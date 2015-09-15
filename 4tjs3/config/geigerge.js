(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "geigerge",
            GA_UA: "UA-8168579-3",
            platform: "4TellDIY.js",
            addCartBtnAtts: "input type='image'",
            addCartImage: "Themes/Default/Images/btn-view-detail-alt.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 15,
                caption: "<span>Recommended for you...</span>",
                //showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: "#ctl00_ctl00_MainContent_uxHome_RecommendedProducts_pnlRecommendedProducts .TopSelContentBg, #tout1_hm_4Tell",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },

                showRatings: true,
                showPrice: false,
                maxImageHeight: 120,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                        //$("#ctl00_ctl00_MainContent_uxHome_BestSellers_pnlBestSellerList span a").text(tout.caption);
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "Customers also bought",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: ".ProductShop",
                divPosition: "below",
                carousel: {
                    items: 1,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 10,
                caption: "Customers also viewed",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD2",
                divSelect: "#tout2_pdp_4Tell, #RecentlyViewedProduct",
                divPosition: "replace",
                carousel: {
                    items: 5,
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
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 15,
                caption: "Top Sellers",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TCat",
                divSelect: "#tout1_cat_4Tell",
                divPosition: "replace",
                carousel: {
                    items: 5,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TVC",
                divSelect: "#ctl00_ctl00_MainContent_uxCart_pnlShoppingCart > div:last",
                divPosition: "below",
                carousel: {
                    items: 6,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
