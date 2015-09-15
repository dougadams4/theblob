(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.fireflybuys.com",
            alias: "FireFly",
            GA_UA: "UA-1666027-6",
            platform: "4TellADN.js",
            addCartBtnAtts: "<input type='submit' class='AddToCartButton' value=''/>",
            priceClass: "variantprice",
            pricePrefix: "Price: ",
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
                    resultType: 0,
                    numItems: 3,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "div#rcolumn2",
                    divPosition: "replace",
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<div id='rcolumn2'></div>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#prodpagecontent",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
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
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    divSelect: "#pnlCartSummarySubTotals > table",
                    divPosition: "above",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div id='VC4T'></div>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $('#pnlUpsellProducts,#relatedItemContent').hide();
                            $(tout.divSelect).attr('width', '30%'); $('#pnlOrderNotes > table').css('clear', 'left');
                        }
                    },
                    inCart: true
                }
            }
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
