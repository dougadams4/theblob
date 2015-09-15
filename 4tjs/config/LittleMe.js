(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.littleme.com",
            alias: "LittleMe",
            GA_UA: "UA-25859414-1",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: 'input type="submit" value="View Details" class="btn"',
            emptyImage: "/templates/BrideToBe/images/ProductDefault.gif",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: "4,4",
                    numItems: "5,5",
                    startPos: "11,11",
                    caption: "<h2>Top Sellers</h2>",
                    productStyle: "product4T product4THome",
                    divSelect: "#HomeFeaturedProducts",
                    divPosition: "replace",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    showRatings: false,
                    maxImageHeight: 150,
                    wrapper: "<div class='PD14T'></div>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: "4,4",
                    numItems: "5,5",
                    startPos: "1,1",
                    caption: "<h2>Featured Products</h2>",
                    productStyle: "product4T product4THome",
                    divSelect: "#SideTopSellers",
                    divPosition: "replace",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<div class='PD14T'></div>",
                    inCart: false
                }
            },
            ProductDetail: [{
                enable: true,
                resultType: "0,3",
                numItems: 15,
                caption: "<h2>You may also like...</h2>",
                productStyle: "product4T product4TPD1",
                divSelect: "#ProductDetails",
                divPosition: "below",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $('#SimilarProductsByCustomerViews').hide();
                    },
                    perProduct: function (itemdata) {
                        if ("434" === itemdata.productID) {
                            itemdata.imageLink = ("NoEntry" === itemdata.imageLink) ?
                                "//cdn2.bigcommerce.com/server5900/f29a8/products/434/images/1274/LittleMe06_1248__21706.1346957765.389.369.png?c=2" :
                                itemdata.imageLink;
                        }
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
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "<h2>More ideas for you...</h2>",
                    productStyle: "product4T product4TVC",
                    divSelect: ".KeepShopping",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<div style='clear:left; float:left'></div>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
