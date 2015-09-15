(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "SigmaMoz",
            GA_UA: "",
            platform: "4TellDIY.js",
            addCartBtnAtts: "button type='button'>Add To Bag</button",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                fillMode: "none",
                caption: "Our customers also bought...",
                showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_pdp_4Tell",
                divPosition: "replace",
                showRatings: true,
                maxImageHeight: 500,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink += "?max=300";
                    }
                },
                inCart: false,
                carousel: {
                    items: 4,
                    pagination: false,
                    scrollPerPage: true,
                    itemsCustom: [[0, 1], [480, 2], [700, 2], [1000, 3], [1025, 4]],
                    navigation: true,
                    rewindNav: false
                }
            }, {
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "Similar Items",
                showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: "section[data-mz-tabs-id='TopSeller'] > div",
                divPosition: "append",
                maxImageHeight: 500,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink += "?max=300";
                    }
                },
                inCart: false,
                carousel: {
                    items: 4,
                    pagination: false,
                    scrollPerPage: true,
                    itemsCustom: [[0, 1], [480, 2], [700, 2], [1000, 3], [1025, 4]],
                    navigation: true,
                    rewindNav: false
                }
            }],
            Search: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                fillMode: "none",
                caption: "Our customers also bought...",
                showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_srch_4Tell",
                divPosition: "replace",
                showRatings: true,
                maxImageHeight: 500,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink += "?max=300";
                    },
                    preInit: function (tout) {
                        _4TellBoost.addProductID($(tout.divSelect).data()["products"]);
                    }
                },
                inCart: false,
                carousel: {
                    items: 4,
                    pagination: false,
                    scrollPerPage: true,
                    itemsCustom: [[0, 1], [480, 2], [700, 2], [1000, 3], [1025, 4]],
                    navigation: true,
                    rewindNav: false
                }
            }, {
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "Similar Items",
                showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: "section[data-mz-tabs-id='TopSeller'] > div",
                divPosition: "append",
                maxImageHeight: 500,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink += "?max=300";
                    }
                },
                inCart: false,
                carousel: {
                    items: 4,
                    pagination: false,
                    scrollPerPage: true,
                    itemsCustom: [[0, 1], [480, 2], [700, 2], [1000, 3], [1025, 4]],
                    navigation: true,
                    rewindNav: false
                }
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                fillMode: "none",
                caption: "You may also like...",
                showCaption: false,
                productStyle: "product4T product4TCat",
                divSelect: "#tout1_cat_4Tell",
                divPosition: "replace",
                maxImageHeight: 500,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink += "?max=300";
                    }
                },
                inCart: true,
                carousel: {
                    items: 4,
                    pagination: false,
                    scrollPerPage: true,
                    itemsCustom: [[0, 1], [480, 2], [700, 2], [1000, 3], [1025, 4]],
                    navigation: true,
                    rewindNav: false
                }
            },
             {
                 enable: true,
                 resultType: 4,
                 numItems: 12,
                 caption: "Similar Items",
                 showCaption: false,
                 productStyle: "product4T product4TCat",
                 divSelect: "section[data-mz-tabs-id='TopSeller'] > div",
                 divPosition: "append",
                 maxImageHeight: 500,
                 showRatings: true,
                 wrapper: "<div class='PD14T'></div>",
                 rawJS: {
                     perProduct: function (itemdata) {
                         itemdata.imageLink += "?max=300";
                     }
                 },
                 inCart: false,
                 carousel: {
                     items: 4,
                     pagination: false,
                     scrollPerPage: true,
                     itemsCustom: [[0, 1], [480, 2], [700, 2], [1000, 3], [1025, 4]],
                     navigation: true,
                     rewindNav: false
                 }
             }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                showCaption: false,
                productStyle: "product4T product4TVC",
                divSelect: "#tout1_cart_4Tell",
                divPosition: "replace",
                maxImageHeight: 500,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink += "?max=300";
                    }
                },
                inCart: true,
                carousel: {
                    items: 4,
                    pagination: false,
                    scrollPerPage: true,
                    itemsCustom: [[0, 1], [480, 2], [700, 2], [1000, 3], [1025, 4]],
                    navigation: true,
                    rewindNav: false
                }
            },
             {
                 enable: true,
                 resultType: 4,
                 numItems: 12,
                 caption: "Similar Items",
                 showCaption: false,
                 productStyle: "product4T product4TVC",
                 divSelect: "section[data-mz-tabs-id='TopSeller'] > div",
                 divPosition: "append",
                 maxImageHeight: 500,
                 showRatings: true,
                 wrapper: "<div class='PD14T'></div>",
                 rawJS: {
                     perProduct: function (itemdata) {
                         itemdata.imageLink += "?max=300";
                     }
                 },
                 inCart: false,
                 carousel: {
                     items: 4,
                     pagination: false,
                     scrollPerPage: true,
                     itemsCustom: [[0, 1], [480, 2], [700, 2], [1000, 3], [1025, 4]],
                     navigation: true,
                     rewindNav: false
                 }
             }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
