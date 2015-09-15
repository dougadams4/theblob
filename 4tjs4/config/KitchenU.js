(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.kitchen-universe.com",
            alias: "KitchenU",
            GA_UA: "UA-646591-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/kitchenunive/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/kitchenunive/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/kitchenunive/images/nophoto.gif",
            priceClass: "pricecolor colors_productprice",
            pricePrefix: "Our Price: ",
            salePricePrefix: "Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "Our customers also bought...",
                    captionStyle: "product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 2
                    },
                    showRatings: false,
                    maxImageHeight: 130,
                    wrapper: "<table width='276px' align='right'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Similar Items...",
                    captionStyle: "product4TCaptionPD1",
                    productStyle: "product4T product4TPD2",
                    divSelect: "table#v65-product-parent + table",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<table width='100%' align='center'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>'",
                    rawJS: { preDisplay: function () { $('table#v65-product-related').hide(); } },
                    inCart: false
                }
            },
            Search: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 4,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption",
                    productStyle: "product4T",
                    divSelect: "#main4Tellcontainer",
                    divPosition: "append",
                    showRatings: false,
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' align='center'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            var results = $('form.search_results_section');
                            if (tout.enable && results && results.length) {
                                var resultCell = results.parent(); resultCell.css('vertical-align', 'top');
                                var newCell = $("<td width='25%' valign='top' style='border: 1px solid #DFE0E0;'><div id='" + tout.newDivID + "'></div></td>");
                                newCell.insertAfter(resultCell);
                                tout.divSelect = '#' + tout.newDivID;
                                tout.divPosition = 'append';
                            }
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 2,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "tr.v65-cart-shipping-details-row  span.v65-cart-item-remove-cell > *:last",
                    divPosition: "below",
                    setHeight: true,

                    maxImageHeight: 70,
                    showRatings: false,
                    wrapper: "<td colspan='3' style='border: 1px solid #DFE0E0;'></td>",
                    rawJS: {
                        preInit: function (tout) {
                            $(tout.divSelect).after('<img height=\"10px\" src=\"' + _4TellBoost.SiteInfo.spacerImage + '\" width=\"100%\" />')
                        }
                    },
                    inCart: true
                }
            },
            Home: {
                tout1: {
                    enable: false
                }
            },

            Category: {
                tout1: {
                    enable: false
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
