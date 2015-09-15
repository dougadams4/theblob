(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.gohealthypet.com",
            alias: "GoHlPet",
            GA_UA: "UA-26655407-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/GHP4Tell/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/GHP4Tell/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/GHP4Tell/images/nophoto.gif",
            priceClass: "pricecolor colors_productprice",
            strikePriceClass: "price-info",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            minPrice: "$.03",
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
                    caption: "You may also like...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "div#DropDown_ShopBy_Manufacturer",
                    divPosition: "below",
                    showRatings: true,
                    maxImageHeight: 170,
                    wrapper: "<table width='100%' align='center'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    rawJS: { preDisplay: function (tout) { $(tout.divSelect).siblings().remove(); $('table.colors_lines_light').remove(); } },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 9,
                    caption: "Similar Items",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    maxImageHeight: 170,
                    showRatings: true,
                    wrapper: "<table width='440px' style='border-spacing: 0 6px;'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            if ($(tout.divSelect).length === 0) {
                                tout.divSelect = 'table:has(input.vCSS_input_addtocart):last';
                            }
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
                    resultType: 0,
                    numItems: 6,
                    caption: "You may also like...",
                    captionStyle: "checkout-headers product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent td:first",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        scrollStyle: "scrollable",
                        numVis: 2
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<td style='border: 1px solid #DFE0E0;'></td>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).after("<img height='10px' src='" + _4TellBoost.SiteInfo.spacerImage + "' width='100%' alt=''>");
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
