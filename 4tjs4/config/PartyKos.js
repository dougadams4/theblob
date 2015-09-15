(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.partykostymer.com",
            alias: "PartyKos",
            GA_UA: "UA-2156203-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "span> Kj&oslash;p </span",
            addCartImage: "/v/vspfiles/templates/partykostymer/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/partykostymer/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/partykostymer/images/nophoto.gif",
            pricePrefix: "",
            salePricePrefix: "Salg: ",
            includeBase: false,
            siteEnable: true,
            loadDelayObject: "[name='btnaddtocart']",
            loadDelayTime: 500
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                fillMode: "crowd",
                caption: "Andre kunder kj&oslash;pte ogs&aring;...",
                productStyle: "product4T product4TPD1",
                numItems: 12,
                divSelect: ".colors_pricebox",
                divPosition: "below",
                wrapper: "<table style='table-layout: fixed;width: 100%;'><tr><td><div class='PD14T'></div></td></tr></table>",
                carousel: {
                     items: 3,
                     itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 1], [992, 2], [1200, 3]],
                     scrollPerPage: true,
                     navigation: true,
                     navigationText: false,
                     pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 5,
                fillMode: "none",
                numItems: 1, //6,
                startPos: 19, //this tout is a placeholder so don't waste the best results
                caption: "Se ogs&aring;...",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4TPD2",
                divSelect: ".sidebar.left-nav",
                divPosition: "below",
                wrapper: "<div class='PD24T'></div>",
                carousel: false,
                showRatings: true,
                maxImageHeight: 150,
                responsive: {
                    1: { enable: false }, //true
                    2: { enable: false }, //true
                    3: { enable: false },
                    4: { enable: false },
                    5: { enable: false },
                    6: { enable: false }
                },
                rawJS: {
                    preInit: function (tout) { //get category id
                        var bc = $(".vCSS_breadcrumb_td b a[href$='.htm']:last");
                        if (bc && bc.length) {
                            h = $(bc).attr("href");
                            if (h && h.length) {
                                var iStart = h.lastIndexOf("/") + 1;
                                var iEnd = h.lastIndexOf(".htm");
                                if (iStart > 0 && iEnd > iStart)
                                    var catId = h.substring(iStart, iEnd);
                            }
                        }
                        if (catId && catId.length) _4TellBoost.setCatId(catId);
                        else tout.enable = false;
                    }
                },
               inCart: false
            }, {
                enable: true,
                resultType: 3,
                caption: "Andre kunder s&aring; ogs&aring; p&aring;...",
                captionStyle: "product4TCaption product4TCaptionPD3",
                productStyle: "product4T product4TPD3",
                divSelect: "#ProductDetail_ProductDetails_div2",
                divPosition: "below",
                numItems: 12,
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<div class='PD34T'></div>",
                responsive: {
                    1: { 
		                divSelect: ".sidebar.left-nav",
		                divPosition: "below",
		                numItems: 6,
		                carousel: false
                    },
                    2: { 
		                divSelect: ".sidebar.left-nav",
		                divPosition: "below",
		                numItems: 6,
		                carousel: false
                    },
                    3: { 
		                divSelect: "#ProductDetail_ProductDetails_div2",
		                divPosition: "below",
		                numItems: 12,
		                carousel: {
		                    items: 4,
		                    itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 4]],
		                    scrollPerPage: true,
		                    navigation: true,
		                    navigationText: false,
		                    pagination: false
		                }
                    },
                    4: { 
		                divSelect: "#ProductDetail_ProductDetails_div2",
		                divPosition: "below",
		                numItems: 12,
		                carousel: {
		                    items: 4,
		                    itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 4]],
		                    scrollPerPage: true,
		                    navigation: true,
		                    navigationText: false,
		                    pagination: false
		                }
                    },
                    5: { 
		                divSelect: "#ProductDetail_ProductDetails_div2",
		                divPosition: "below",
		                numItems: 12,
		                carousel: {
		                    items: 4,
		                    itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 4]],
		                    scrollPerPage: true,
		                    navigation: true,
		                    navigationText: false,
		                    pagination: false
		                }
                    },
                    6: { 
		                divSelect: "#ProductDetail_ProductDetails_div2",
		                divPosition: "below",
		                numItems: 12,
		                carousel: {
		                    items: 4,
		                    itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 4]],
		                    scrollPerPage: true,
		                    navigation: true,
		                    navigationText: false,
		                    pagination: false
		                }
                    },
                },
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table:last").css("table-layout", "fixed");
                        $(".colors_lines_light").hide();
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false,
                resultType: 5,
                numItems: 15,
                fillMode: "genomic",
                caption: "Popul&aring;re produkter",
                productStyle: "product4T product4TCat",
                divSelect: "form#MainForm",
                divPosition: "above",
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && $(".product_productprice").length > 50;
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table:last").css("table-layout", "fixed");
                    }
                },
                inCart: true
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Du liker kanskje ogs&aring;...",
                productStyle: "product4T product4TVC",
                divSelect: "table#v65-cart-checkout-parent td:first",
                divPosition: "above",
                wrapper: "<td><div class='VC4T'></div></td>",
                carousel: {
                    items: 3,
                    itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 2], [990, 2], [1081, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: true,
                responsive: {
                    1 : {
                        divSelect: "table#v65-cart-checkout-parent td:first",
                        divPosition: "above",
                		wrapper: "<td><div class='VC4T'></div></td>"
                     },
                    2 : {
                        divSelect: "table#v65-cart-checkout-parent td:first",
                        divPosition: "above",
                		wrapper: "<td><div class='VC4T'></div></td>"
                     },
                    3 : {
                        divSelect: "table#v65-cart-checkout-parent td:first",
                        divPosition: "above",
                		wrapper: "<td><div class='VC4T'></div></td>"
                     },
                    4 : {
                        divSelect: "form[name='Proceed_To_Checkout_Form']",
                        divPosition: "below",
                        wrapper: "<div class='VC4T'></div>"
                     },
                    5 : {
                        divSelect: "form[name='Proceed_To_Checkout_Form']",
                        divPosition: "below",
                        wrapper: "<div class='VC4T'></div>"
                     },
                     6 : {
                        divSelect: "form[name='Proceed_To_Checkout_Form']",
                        divPosition: "below",
                        wrapper: "<div class='VC4T'></div>"
                     }
                },
                rawJS: {
                    preInit: function (tout) {
                        //tout.enable = tout.enable && screen.width > 700;
                        //tout.enable = tout.enable && $(tout.divSelect).is(":visible");
                    //},
                    //preDisplay: function (tout) {
                    	//$(tout.divSelect).parents("table:last").css("table-layout", "fixed");
                        $("img[name='placeholder']:first").remove();
                        $("table#v65-cart-checkout-parent").css("table-layout", "fixed");
                        $("table#v65-cart-checkout-parent td:first").remove();
                        //$(tout.divSelect).next().attr("valign", "top");
                        $("table#v65-cart-checkout-parent td:first").attr("valign", "top");
                    }
                },
                inCart: true
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Andre kunder s&aring; ogs&aring; p&aring;...",
                captionStyle: "product4TCaption product4TCaptionVC2",
                productStyle: "product4T product4TVC2",
                divSelect: "table#v65-cart-checkout-parent tr:first",
                divPosition: "below",
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<tr><td colspan='2'><div class='VC24T'></div></td></tr>",
                rawJS: {},
                responsive: {
                    1 : {
                		wrapper: "<tr><td colspan='2'><div class='VC24T'></div></td></tr>",
                     },
                    2 : {
                		wrapper: "<tr><td colspan='2'><div class='VC24T'></div></td></tr>",
                     },
                    3 : {
                		wrapper: "<tr><td colspan='2'><div class='VC24T'></div></td></tr>",
                     },
                    4 : {
                		wrapper: "<tr><td><div class='VC24T'></div></td></tr>",
                     },
                    5 : {
                		wrapper: "<tr><td><div class='VC24T'></div></td></tr>",
                     },
                     6 : {
                		wrapper: "<tr><td><div class='VC24T'></div></td></tr>",
                     }
                },
                inCart: false
            }]
        }
    }
}(window._4TellBoost, window._4TellBoost.jq || jQuery));
