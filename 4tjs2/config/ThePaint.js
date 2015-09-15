(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.thepaintstore.com",
            alias: "ThePaint",
            GA_UA: "UA-4074176-1",
            platform: "4TellVs.js",
            custom: true,
            addCartBtnAtts: "span>See Details</span",
            spacerImage: "/v/vspfiles/templates/Morevis/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/Morevis/images/nophoto.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 12,
                    caption: "Featured Products",
                    showCaption: false,
                    productStyle: "product4T product4THome",
                    divSelect: "#welcome ~ img",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    showPrice: false,
                    maxImageHeight: 170,
                    wrapper: "<table width='100%' align='center' ><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 1,
                    numItems: 8,
                    rotateRecs: true,
                    caption: "Recommended for You",
                    captionStyle: "product4TCaption product4TCaptionHome",
                    productStyle: "product4T product4THome",
                    divSelect: "#welcome ~ table",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    showPrice: false,
                    showBuyButton: false,
                    maxImageHeight: 170,
                    wrapper: "<table width='100%' align='center' ><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function () {
                            _4TellBoost.addProductID(_4TellBoost.getCartItems().toString());
                        }
                    },
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "Our customers also bought...",
                    captionStyle: "product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "td:has(td tr.Multi-Child_Background):last",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    numRows: 2,
                    showRatings: true,
                    maxImageHeight: 150,
                    showPrice: false,
                    showBuyButton: true,
                    wrapper: "<td width='45%' align='right' valign='top'></td>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).attr('width', '45%');
                            $('td:has(table.colors_lines_light):last').hide();
                        },
                        preInit: function () {
                            _4TellBoost.addProductID(global_Current_ProductCode);
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
                    captionStyle: "product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "tr:has(form[name=Proceed_To_Checkout_Form]):last td:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    showPrice: false,
                    wrapper: "<td id='td4Tell' valign='top'></td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
