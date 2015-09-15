(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.thegreatcanadiangiftcompany.com",
            alias: "GreatCan",
            GA_UA: "UA-2937130-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            spacerImage: "spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "Your Price: ",
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
                    numItems: 9,
                    caption: "Customers Also Bought",
                    productStyle: "product4T product4TPD2",
                    divSelect: "tr:has(tr img[src*=wishlist]):last + tr",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    rawJS: {
                        preDisplay: function (tout) {
                            var foo = $(tout.divSelect);
                            foo.clone().insertBefore($(tout.divSelect).prev());
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 9,
                    caption: "Customers also viewed",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#REL4T",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    imageSize: "&maxx=130&maxy=130",
                    maxImageHeight: 150,
                    showRatings: true,
                    wrapper: "<tr><td colspan='2'></td></tr>",
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
                    numItems: 4,
                    caption: "You may also like",
                    productStyle: "product4T product4TVC",
                    divSelect: "td[colspan=6] p:last",
                    divPosition: "append",
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 150,
                    showRatings: true,
                    rawJS: {
                        preDisplay: function (tout) {
                            var foo = $(tout1.divSelect); foo.siblings('table:has(td.checkout-headers), table.alternative').remove();
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
