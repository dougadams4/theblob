(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.shopjoya.com",
            alias: "ShopJoya",
            GA_UA: "UA-21198057-1",
            platform: "4TellADN.js",
            custom: true,
            addCartBtnAtts: "<input type='submit' value='See Details'/>",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    showPrice: false,
                    resultType: 0,
                    numItems: 10,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#producttabs",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 150,
                    wrapper: "<div ></div>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    showPrice: false,
                    resultType: 3,
                    numItems: 10,
                    caption: "Similar Items",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#producttabs ~ script:first",
                    divPosition: "above",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 120,
                    wrapper: "<div ></div>",
                    rawJS: {
                        preDisplay: function () {
                            $('li:has(a[href*=related]), li:has(a[href*=tabs-also])').hide();
                        }
                    },
                    inCart: false
                }
            },
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
                    showPrice: false,
                    resultType: 0,
                    numItems: 15,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: ".checkoutButtonsTableBotton",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div style='width:100%; float:left'></div>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
