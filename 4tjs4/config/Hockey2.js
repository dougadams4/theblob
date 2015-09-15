(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.hockeyshot.ca",
            alias: "Hockey2",
            GA_UA: "UA-25366332-2",
            platform: "4TellVs.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='View Details' alt='Add to Cart'",
            spacerImage: "/v/vspfiles/templates/hs_canada2/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/hs_canada2/images/nophoto.gif",
            pricePrefix: "Our Price: ",
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
                    caption: "Customers who bought this, also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 90,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            if ($(" table.colors_pricebox[id!=accessories_outer]").length > 1) {
                                //We're going full width, then.
                                tout.productStyle = "product4T product4TPD1 product4TPD1B";
                                tout.divSelect = "#v65-product-parent";
                                tout.numItems = 10;
                                tout.carousel.numVis = 5;
                            }
                            if ($("#free-items-spot") && $("#free-items-spot").length) {
                                _4TellBoost.addBlockItem("STICK-WEIGHT-002");
                                _4TellBoost.addBlockItem("PUCK-003");
                                _4TellBoost.addBlockItem("STICKHANDLING-AID-027");
                            }
                        },
                        preDisplay: function () {
                            $("#accessories_outer.colors_pricebox").hide();
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 10,
                    caption: "Customers who viewed this product, also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#vCSS_mainform > table:last",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 90,
                    showRatings: true,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $(" #v65-product-related").hide();
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
                    enable: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 10,
                    caption: "You may also like...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#v65-cart-table-container",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 170,
                    showRatings: true,
                    wrapper: "<table width='100%' class='VC4T'><tr><td></td></tr></table>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
