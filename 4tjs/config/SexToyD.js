(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.sextoydistributing.com",
            alias: "SexToyD",
            GA_UA: "UA-27787806-1",
            platform: "4TellMv.js",
            addCartBtnAtts: "form method='post' action='merchant.mvc?Screen=BASK'><input type='hidden' name='Action' value='ADPR'><input type='hidden' name='Quantity' value='1'><input type='submit' value='Add To Basket' class='button'></form",
            addCartImage: "//dev2.sextoydistributing.com/Merchant2/css/00000001/images/add-to-cart-big.png",
            spacerImage: "/web/assets/images/spacer.gif",
            pricePrefix: "Every Day Low Price: ",
            salePricePrefix: "Our Price: ",
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
                    resultType: 0,
                    numItems: 8,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".product-description",
                    divPosition: "above",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 100,
                    wrapper: "<div class='toutWrapper4T' style='float: left; width: 100%;'/>",
                    showBuyButton: false,
                    showPrice: false,
                    rawJS: {
                        preInit: function (tout) {
                            var foo = $('.my-account div.signin');
                            tout.showPrice = !(foo && foo.length);
                        },
                        preDisplay: function (tout) {
                            $('.product-description').prepend('<div class=\"product4TCaption\">Description</div>');

                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 8,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".product-description",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 100,
                    wrapper: "<div class='toutWrapper4T' style='height: 217px;'/>",
                    showBuyButton: false,
                    showPrice: false,
                    rawJS: {
                        preInit: function (tout) {
                            var foo = $('.my-account div.signin');
                            tout.showPrice = !(foo && foo.length);
                        },
                        preDisplay: function (tout) {
                            $('.related-products').remove();
                        }
                    },
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            Search: {
                tout1: {
                    enable: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "#page-footer",
                    divPosition: "above",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 100,
                    wrapper: "<div class='toutWrapper4T' style='float: left; width: 521px;margin-top:10px;'/>",
                    showBuyButton: false,
                    showPrice: false,
                    rawJS: {
                        preInit: function (tout) {
                            var foo = $('.my-account div.signin');
                            tout.showPrice = !(foo && foo.length);
                        }
                    },
                    inCart: true
                }
            }
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
