(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.sheaterraorganics.com",
            alias: "SheaTerr",
            GA_UA: "UA-28989250-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: 'img width="79" height="27" onmouseover="this.src=\'/assets/templates/default/images/btn-add-to-cart-over.jpg\'" onmouseout="this.src=\'/assets/templates/default/images/btn-add-to-cart.jpg\'" border="0"',
            addCartImage: "/assets/templates/default/images/btn-add-to-cart.jpg",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
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
                    numItems: 12,
                    caption: "Top Sellers",
                    productStyle: "product4T product4THome",
                    divSelect: "td.data[width] > table",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    imageSize: "&maxx=120&maxy=120",
                    wrapper: "<table width='100%'><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 8,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "td.data tr:has(tr #tablist)",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    wrapper: "<tr><td colspan='2'><div class='PD4T'></div></td></tr>",
                    rawJS: {
                        preDisplay: function () {
                            $("td:has(td table.borders):last").remove();
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed",
                    productStyle: "product4T product4TPD2",
                    divSelect: "td.data tr:has(tr #tablist)",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    imageSize: "&maxx=120&maxy=120",
                    wrapper: "<tr><td colspan='2'><div class='PD4T'></div></td></tr>",
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
                    enable: false,
                    resultType: 5,
                    numItems: 4,
                    caption: "More ideas...",
                    productStyle: "product4T product4TCat",
                    divSelect: "#main4TellContainer",
                    divPosition: "append",
                    setHeight: false,
                    setWidth: false,
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "",
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "#BAR4T",
                    divPosition: "append",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    rawJS: {
                        preInit: function () {
                            $('#VC4T').remove();
                            var foo = $('#recalculate').siblings('tr:has(#Table5), tr:has(tr a[href*=paypal]), tr:has(#Table1)');
                            $('tr:has(tr.alternative):last').after('<tr><td colspan="4" id="BAR4T"></td><td colspan="2" valign="top"><table id="FOO"></table></td></tr>');
                            $('#FOO').append(foo);
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
