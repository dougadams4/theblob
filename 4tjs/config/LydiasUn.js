(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.lydiasuniforms.com",
            alias: "LydiasUn",
            GA_UA: "UA-1039431-1",
            custom: true,
            platform: "4TellDIY.js",
            addCartBtnAtts: "input type='button' value='See Details'",
            priceClass: "price2",
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
                numItems: 3,
                caption: "More Ideas:",
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_pdp_4Tell",
                divPosition: "replace",
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.columns.custom = { topSale: "tsp", topPrice: "tpr" };
                        _4TellBoost.UserData.data.Viewed.push(_4TellBoost.Service.productList[0]);
                        _4TellBoost.UserData.save();
                    },
                    perProduct: function (itemdata) {
                        itemdata.rating = itemdata.rating > -1 ? itemdata.rating : "-1";
                        if (itemdata.topPrice && itemdata.price) itemdata.price = itemdata.price + " - " + itemdata.topPrice;
                        if (itemdata.topSale && itemdata.salePrice) itemdata.salePrice = itemdata.salePrice + " - " + itemdata.topSale;
                    }
                },
                inCart: false
            }, {
                enable: false
            }],
            Search: [{
                enable: true,
                resultType: 5,
                numItems: 6,
                fillMode: "genomic",
                caption: "Recommendations for You",
                captionStyle: "product4TCaption product4TCaptionSearch",
                productStyle: "product4T product4TSearch",
                divSelect: "#tout1_srch_4Tell",
                divPosition: "replace",
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if ("undefined" !== typeof (Array.prototype.map)) {
                            _4TellBoost.Service.productList = _4TellBoost.Service.productList.map(function (element) {
                                return element.match(/\w+/)[0];
                            });
                        }
                        tout.enable = tout.enable && (_4TellBoost.Service.productCount >= 20);
                        _4TellBoost.Service.productList = [];
                        _4TellBoost.Service.productCount = 0;
                        tout.columns.custom = { topSale: "tsp", topPrice: "tpr" };
                    },
                    perProduct: function (itemdata) {
                        itemdata.rating = itemdata.rating > -1 ? itemdata.rating : "-1";
                        if (itemdata.topPrice && itemdata.price) itemdata.price = itemdata.price + " - " + itemdata.topPrice;
                        if (itemdata.topSale && itemdata.salePrice) itemdata.salePrice = itemdata.salePrice + " - " + itemdata.topSale;
                    }
                },
                inCart: false
            }],
            Category: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Others Also Bought",
                captionStyle: "product4TCaption product4TCaptionVC",
                productStyle: "product4T product4TVC",
                divSelect: "#tout1_cart_4Tell",
                divPosition: "replace",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function (tout) {

                        tout.columns.custom = { topSale: "tsp", topPrice: "tpr" };
                    },
                    perProduct: function (itemdata) {
                        itemdata.rating = itemdata.rating > -1 ? itemdata.rating : "-1";
                        if (itemdata.topPrice && itemdata.price) itemdata.price = itemdata.price + " - " + itemdata.topPrice;
                        if (itemdata.topSale && itemdata.salePrice) itemdata.salePrice = itemdata.salePrice + " - " + itemdata.topSale;
                    }
                },
                inCart: true
            }, {
                enable: true,
                resultType: 4,
                numItems: 4,
                caption: "Featured Items",
                captionStyle: "product4TCaption product4TCaptionVC",
                productStyle: "product4T product4TVC",
                divSelect: "#tout1_cart_4Tell, .VC4T",
                divPosition: "below",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.columns.custom = { topSale: "tsp", topPrice: "tpr" };
                    },
                    perProduct: function (itemdata) {
                        itemdata.rating = itemdata.rating > -1 ? itemdata.rating : "-1";
                        if (itemdata.topPrice && itemdata.price) itemdata.price = itemdata.price + " - " + itemdata.topPrice;
                        if (itemdata.topSale && itemdata.salePrice) itemdata.salePrice = itemdata.salePrice + " - " + itemdata.topSale;
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
