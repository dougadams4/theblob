(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.drinkupny.com",
            alias: "DrnkUpNY",
            GA_UA: "UA-18915578-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/55/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/55/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/55/images/nophoto.gif",
            pricePrefix: "Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 4,
                    rotateRecs: true,
                    caption: "Top Sellers...",
                    captionStyle: "product4TCaption product4TCaptionHome",
                    productStyle: "product4T product4THome",
                    divSelect: "td#ReplacedBy4Tell",
                    divPosition: "replace",
                    maxImageHeight: 150,
                    showBuyButton: true,
                    showRatings: false,
                    showPrice: true,
                    newDivID: "home4TellContainer",
                    wrapper: "<td rowspan='2' style='vertical-align: top;padding-top: 14px'></td>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $('td[rowspan=2] img[src*=assets]').css('box-shadow', '2px 6px 9px #888');//Add drop-shadow to the main banner.
                        }
                    },
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 8,
                    caption: "Our customers also bought...",
                    captionStyle: "product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true,
                    },
                    showRatings: false,
                    maxImageHeight: 120,
                    wrapper: "<table width='350px' align='right' style='border-spacing: 0 8px;padding-right: 15px;'><tr><td id='td4Tell'></td></tr></table>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $('table#v65-product-related').remove()
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: false
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
                    numItems: 9,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    newDivID: "second4TellContainer",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    maxImageHeight: 110,
                    showRatings: true,
                    wrapper: "<td id='td4Tell' valign='top'></td>",
                    inCart: true
                }
            }
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
