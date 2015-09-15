(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.kent-automotive.ca/",
            alias: "kentcana",
            GA_UA: "UA-32731652-2",
            platform: "4TellDIY.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='View Now' ",
            emptyImage: "//www.kent-automotive.com/images/fpo/250x250_kent.jpg",
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
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Customers also bought:",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_pdp_4Tell",
                divPosition: "replace",
                showRatings: true,
                showPrice: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        if (itemdata.title.length > 80) {
                            itemdata.title = itemdata.title.slice(0, 80);
                            itemdata.title = itemdata.title.replace(/\s\S*$/, " ...");
                        }
                        itemdata.title += "<br/><span style='font-weight:normal'>Item# " + itemdata.productID + "</span>";
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 4,
                caption: "Customers also viewed:",
                productStyle: "product4T product4TPD2",
                divSelect: "#tout2_pdp_4Tell",
                divPosition: "replace",
                maxImageHeight: 120,
                showRatings: true,
                showPrice: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && location.host.match(/^(dev|stage)/);
                    },
                    perProduct: function (itemdata) {
                        if (itemdata.title.length > 80) {
                            itemdata.title = itemdata.title.slice(0, 80);
                            itemdata.title = itemdata.title.replace(/\s\S*$/, " ...");
                        }
                        itemdata.title += "<br/><span style='font-weight:normal'>Item# " + itemdata.productID + "</span>";
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false,
                resultType: 5,
                numItems: 4,
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                setHeight: false,
                setWidth: false,
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                fillMode: "topsellers",
                numItems: 4,
                caption: "You May Also Like:",
                productStyle: "product4T product4TVC",
                divSelect: "#tout1_cart_4Tell",
                divPosition: "replace",
                showRatings: true,
                showPrice: false,
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && location.host.match(/^(dev|stage)/);
                    },
                    perProduct: function (itemdata) {
                        if (itemdata.title.length > 80) {
                            itemdata.title = itemdata.title.slice(0, 110);
                            itemdata.title = itemdata.title.replace(/\s\S*$/, " ...");
                        }
                        itemdata.title += "<br/><span style='font-weight:normal'>Item# " + itemdata.productID + "</span>";
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
