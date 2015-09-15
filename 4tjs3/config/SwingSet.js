(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.SwingSetmall.com",
            alias: "SwingSet",
            GA_UA: "UA-228963-2",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: "a>View Details</a",
            addCartImage: "//www.swingsetmall.com/template/template_images/addtocart.png",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            pricePrefix: "",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Recommended for You...",
                productStyle: "product4T product4THome",
                divSelect: ".shopByWrap",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                maxImageHeight: 180,
                wrapper: "<div class='PD14T row'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        //$(tout.divSelect).before("<br class='Clear' />");
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers Also Viewed",
                productStyle: "product4T product4TPD2",
                divSelect: ".alsoViewed4T",
                divPosition: "append",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) { },
                    preDisplay: function (tout) { }
                },
                inCart: false,
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                //fillMode: "crowd",
                numItems: 12,
                caption: "Related Top Sellers",
                productStyle: "product4T product4TCat",
                divSelect: "#CategoryPagingBottom",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 190,
                showRatings: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && (10 < $(".product-grid  li").length);
                    },
                    preDisplay: function () { }
                },
                inCart: false,
            },
           {
               enable: true,
               resultType: 5,
               //fillMode: "crowd",
               numItems: 4,
               caption: "Related Top Sellers",
               productStyle: "product4T product4TCat",
               divSelect: "#SideProductRecentlyViewed",
               divPosition: "above",
               maxImageHeight: 190,
               showRatings: false,
               wrapper: "<div class='CAT4T'></div>",
               rawJS: {
                   preInit: function (tout) {
                       tout.enable = tout.enable && (10 < $(".product-grid  li").length);
                   },
                   preDisplay: function () { }
               },
               inCart: false,
           }],
            //We don't always detect pagetype correctly.
            Auto: [{
                enable: true,
                resultType: 5,
                //fillMode: "crowd",
                numItems: 12,
                caption: "Related Top Sellers",
                productStyle: "product4T product4TCat",
                divSelect: "#CategoryPagingBottom",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 190,
                showRatings: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && (10 < $(".product-grid  li").length);
                    },
                    preDisplay: function () { }
                },
                inCart: false,
            },
         {
             enable: true,
             resultType: 5,
             //fillMode: "crowd",
             numItems: 4,
             caption: "Related Top Sellers",
             productStyle: "product4T product4TCat",
             divSelect: "#SideProductRecentlyViewed",
             divPosition: "above",
             maxImageHeight: 190,
             showRatings: false,
             wrapper: "<div class='CAT4T'></div>",
             rawJS: {
                 preInit: function (tout) {
                     tout.enable = tout.enable && (10 < $(".product-grid  li").length);
                 },
                 preDisplay: function () { }
             },
             inCart: false,
         }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You May Also Like...",
                productStyle: "product4T product4TVC",
                divSelect: "#SuggestiveCartContent",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 180,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#SuggestiveCartContent").hide();
                    }
                },
                inCart: true,
            }],
            QuickCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You May Also Like...",
                showCaption: false,
                productStyle: "product4T product4TVC",
                divSelect: "#fastCartSuggestive",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 180,
                showRatings: false,
                wrapper: "<div class='QC4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#SuggestiveCartContent").hide();
                    }
                },
                inCart: true,
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
