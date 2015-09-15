(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.partykostymer.com",
            alias: "PartyKos",
            GA_UA: "UA-2156203-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/elegantparty/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/elegantparty/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/elegantparty/images/nophoto.gif",
            pricePrefix: "Pris: ",
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
                numItems: 6,
                caption: "Andre kunder kj�pte ogs�...",
                productStyle: "product4T product4TPD1",
                divSelect: ".colors_pricebox",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 100,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
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
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preDisplay: function () {
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
                    numVis: 3,
                    circular: true
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<td width='450'><div class='VC4T'></div></td>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).next().attr("valign", "top");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
