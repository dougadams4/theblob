(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.karatejoes.com",
            alias: "KarateJ",
            GA_UA: "UA-481025-12",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 16,
                    caption: "Top Sellers",
                    showCaption: false,
                    productStyle: "product4T product4THome",
                    divSelect: "tr:has(tr table.alternative):last",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    numRows: 2,
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: true,
                    wrapper: "<tr id='HOME4T'><td colspan='2'></td></tr>",
                    rawJS: {
                        preDisplay: function () {
                            $("a.br-button").insertBefore("#Table7");
                            $("#Table10").hide();
                        }
                    },
                    inCart: false
                },
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 5,
                    caption: "Customers also bought...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#Table10",
                    divPosition: "replace",
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: true,
                    wrapper: "<table width='180' style='border-spacing:0'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $('a.br-button').insertBefore('#Table7');
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#REV4T",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    rawJS: {
                        preDisplay: function () {
                            $('#REL4T').hide();
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
                    enable: true,
                    resultType: 5,
                    numItems: 4,
                    caption: "Related Top Sellers",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TCat",
                    divSelect: "#Table10",
                    divPosition: "replace",
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<table width='180' style='border-spacing:0' ><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $("a.br-button").insertBefore("#Table7");
                        },
                        preInit: function (tout) {
                            tout.enable = tout.enable && $("table.alternative").length >= 12;
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    captionStyle: "titles product4TCaption",
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
                            var foo = $('#recalculate').siblings('tr:has(#Table5), tr:has(tr a[href*=international]), tr:has(#Table1)');
                            $('tr:has(tr.alternative):last').after('<tr><td colspan="5" id="BAR4T"></td><td colspan="1" valign="top"><table id="FOO"></table></td></tr>');
                            $('#FOO').append(foo);
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
