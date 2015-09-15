(function (_4TellBoost, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.partykostymer.com",
            alias: "PartyKos",
            GA_UA: "UA-2156203-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "span> Kj�p </span",
            addCartImage: "/v/vspfiles/templates/partykostymer/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/partykostymer/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/partykostymer/images/nophoto.gif",
            pricePrefix: "",
            salePricePrefix: "Salg: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                fillMode: "crowd",
                numItems: 12,
                caption: "Andre kunder kj�pte ogs�...",
                productStyle: "product4T product4TPD1",
                divSelect: ".colors_pricebox",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [400, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 100,
                wrapper: "<table style='table-layout: fixed;width: 100%;'><tr><td><div class='PD14T'> </div></td></tr></table>",
                rawJS: {
                    //preInit: function (tout) {
                    //    tout.enable = tout.enable && window.outerWidth > 700;
                    //},
                    preDisplay: function (tout) {
                        //jQuery(tout.divSelect).parents("table:last").css("table-layout", "fixed");
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Andre kunder s� ogs� p�...",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4TPD2",
                divSelect: "#ProductDetail_ProductDetails_div2",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [400, 3], [700, 4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    //preInit: function (tout) {
                    //    tout.enable = tout.enable && window.outerWidth > 700;
                    //},
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table:last").css("table-layout", "fixed");
                        jQuery(".colors_lines_light").hide();
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
                caption: "Popul�re produkter",
                productStyle: "product4T product4TCat",
                divSelect: "form#MainForm",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 130,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && $(".product_productprice").length > 50;
                    },
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: true
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Du liker kanskje ogs�...",
                productStyle: "product4T product4TVC",
                divSelect: "table#v65-cart-checkout-parent td:first",
                divPosition: "replace",
                carousel: {
                    itemsCustom: [[0, 2], [400, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<td width='450px'><div class='VC4T' style='width: 450px;'></div></td>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && window.outerWidth > 700;
                        tout.enable = tout.enable && jQuery(tout.divSelect).is(":visible");
                    },
                    preDisplay: function (tout) {
                        jQuery("#v65-cart-checkout-parent").css("table-layout", "fixed");
                        jQuery(tout.divSelect).next().attr("valign", "top");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}));
