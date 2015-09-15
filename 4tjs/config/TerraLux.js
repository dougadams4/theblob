(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.shopterralux.com",
            alias: "TerraLux",
            GA_UA: "UA-1666027-8",
            platform: "4TellADN.js",
            addCartBtnAtts: "<input type='submit' value='Add To Cart'>",
            priceClass: "price2",
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
                    captionStyle: "product4TCaption product4TCaptionPD1",
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
                    caption: "Customers also viewed",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#prodpagecontent",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "",
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
                    resultType: 0,
                    numItems: 15,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "#pnlCartSummarySubTotals ",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
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
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
