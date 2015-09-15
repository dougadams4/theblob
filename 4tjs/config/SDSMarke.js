(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.SDSMarket.com",
            alias: "SDSMarke",
            GA_UA: "UA-1169763-2",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/SDS_Custom/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/SDS_Custom/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/SDS_Custom/images/nophoto.gif",
            pricePrefix: "Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "Top Sellers",
                captionStyle: "product4TCaption product4TCaption2",
                productStyle: "product4T product4THome",
                divSelect: "table:has(table.v65-productDisplay):last",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                wrapper: "<table width='100%' ><tr><td></td></tr></table>",
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 5,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "#content > br:eq(1)",
                divPosition: "below",
                maxImageHeight: 150,
                wrapper: "<div id='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $('#page').css('width', '1204px');
                        $('#content_area').css('float', 'left');
                    }
                },
                inCart: false
            },
                 {
                     enable: true,
                     resultType: 3,
                     numItems: 8,
                     caption: "Customers also viewed...",
                     productStyle: "product4T product4TPD2",
                     divSelect: "#ProductDetail_ProductDetails_div2",
                     divPosition: "below",
                     carousel: {
                         numVis: 4,
                         circular: true
                     },
                     maxImageHeight: 140,
                     wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
                     rawJS: {
                         preDisplay: function () {
                             $('.colors_lines_light').hide();
                         }
                     },
                     inCart: false
                 }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Related Top Sellers",
                captionStyle: "product4TCaption product4TCaption2",
                productStyle: "product4T product4TCat",
                divSelect: "#MainForm",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 150,
                wrapper: "<table width='100%'><tr><td></td></tr></table>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && $("td.v65-productName").length >= 15 && _4TellBoost.Service.catId != 425;
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "table#v65-cart-checkout-parent",
                divPosition: "below",
                carousel: {
                    circular: true,
                    numVis: 4
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<table width='100%'><tr><td></td></tr></table>",
                rawJS: {
                    preDisplay: function (tout) {
                        $("table:has(span.PageText_L532n):last").hide();
                        var foo = $("table:has(form[name=paypal_checkout]):last");
                        foo.removeAttr("style").appendTo($(tout.divSelect).find("td:first"));
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
