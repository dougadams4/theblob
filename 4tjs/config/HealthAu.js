jQuery.noConflict();
(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "healthpost.com.au/",
            alias: "HealthAu",
            GA_UA: "UA-33042268-1",
            platform: "4TellMa.js",
            custom: true,
            addCartBtnAtts: "<button type='button' title='Add to Cart' class='button btn-cart' ><span><span>Add to Cart</span></span></button>",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "<span>You might like</span>",
                captionStyle: "product4TCaption product4TCaptionHome",
                productStyle: "product4T product4THome",
                divSelect: ".home-tabs",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div id='HOME4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.columns.custom = { brand: "a2n", topSale: "tsp", topPrice: "tpr" };
                    },
                    preDisplay: function (tout) {
                        $("h2.home-recommended").hide();
                    },
                    perProduct: function (itemdata) {
                        itemdata.rating = itemdata.rating > -1 ? itemdata.rating : "0";
                        if (itemdata.topPrice) {
                            itemdata.price = "From " + itemdata.price;
                        } else if (itemdata.price) {
                            itemdata.price = "Our Price: " + itemdata.price;
                        }
                        if (itemdata.topSale) {
                            itemdata.salePrice = "From " + itemdata.salePrice;
                        } else if (itemdata.salePrice) {
                            itemdata.salePrice = "Sale Price: " + itemdata.salePrice;
                        }
                        itemdata.title = itemdata.brand + "<br/>" + itemdata.title;
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Others also bought",
                productStyle: "product4T product4TPD1",
                divSelect: ".right_customer",
                divPosition: "above",
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div id='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.columns.custom = { brand: "a2n", topSale: "tsp", topPrice: "tpr" };
                    },
                    perProduct: function (itemdata) {
                        itemdata.rating = itemdata.rating > -1 ? itemdata.rating : "0";
                        if (itemdata.topPrice) {
                            itemdata.price = "From " + itemdata.price;
                        } else if (itemdata.price) {
                            itemdata.price = "Our Price: " + itemdata.price;
                        }
                        if (itemdata.topSale) {
                            itemdata.salePrice = "From " + itemdata.salePrice;
                        } else if (itemdata.salePrice) {
                            itemdata.salePrice = "Sale Price: " + itemdata.salePrice;
                        }
                        itemdata.title = itemdata.brand + "<br/>" + itemdata.title;
                    }
                },
                inCart: false
            },
               {
                   enable: true,
                   resultType: 3,
                   numItems: 12,
                   caption: "Others also viewed",
                   productStyle: "product4T product4TPD2",
                   divSelect: ".product-collateral",
                   divPosition: "below",
                   carousel: {
                       numVis: 4,
                       circular: true
                   },
                   maxImageHeight: 120,
                   showRatings: true,
                   wrapper: "<div id='PD24T'></div>",
                   rawJS: {
                       preInit: function (tout) {
                           tout.columns.custom = { brand: "a2n", topSale: "tsp", topPrice: "tpr" };
                       },
                       perProduct: function (itemdata) {
                           itemdata.rating = itemdata.rating > -1 ? itemdata.rating : "0";
                           if (itemdata.topPrice) {
                               itemdata.price = "From " + itemdata.price;
                           } else if (itemdata.price) {
                               itemdata.price = "Our Price: " + itemdata.price;
                           }
                           if (itemdata.topSale) {
                               itemdata.salePrice = "From " + itemdata.salePrice;
                           } else if (itemdata.salePrice) {
                               itemdata.salePrice = "Sale Price: " + itemdata.salePrice;
                           }
                           itemdata.title = itemdata.brand + "<br/>" + itemdata.title;
                       }
                   },
                   inCart: false
               }],
            Search: {
                tout1: {
                    enable: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".cms-cart-total",
                divPosition: "below",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div id='VC4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.columns.custom = { brand: "a2n", topSale: "tsp", topPrice: "tpr" };
                    },
                    perProduct: function (itemdata) {
                        itemdata.rating = itemdata.rating > -1 ? itemdata.rating : "0";
                        if (itemdata.topPrice) {
                            itemdata.price = "From " + itemdata.price;
                        } else if (itemdata.price) {
                            itemdata.price = "Our Price: " + itemdata.price;
                        }
                        if (itemdata.topSale) {
                            itemdata.salePrice = "From " + itemdata.salePrice;
                        } else if (itemdata.salePrice) {
                            itemdata.salePrice = "Sale Price: " + itemdata.salePrice;
                        }
                        itemdata.title = itemdata.brand + "<br/>" + itemdata.title;
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
