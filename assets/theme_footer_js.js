// v=51448918988081890391607598672
theme.library = v=51448918988081890391607598672;
theme.crr_library = localStorage.getItem('library') || '[]';
theme.strings = {
  inStock: "In stock",
  outOfStock: "Out Of Stock",
  soldOut: "Sold out",
  addToCart: "Add to cart",
  addedToCart: "Has in cart",
  contact: "Contact",
  remove: "Remove",
  empty: "Your bag is currently empty.",
  cartItem: "You have \u003cspan class='text-bold'\u003e(1 item)\u003c\/span\u003e in your bag",
  cartItems: "You have \u003cspan class='text-bold'\u003e(2 items)\u003c\/span\u003e in your bag",
  cartItemText: "item",
  cartItemsText: "items",
  titleTotal: "Subtotal",
  noimage: "\/\/bolesofboyle.com\/cdn\/shop\/t\/5\/assets\/noimage.gif?1584",
  infoButton: "Info",
  customButton: "Custom",
  cdday: "Days",
  cdhrs: "Hours",
  cdmin: "Minutes",
  cdsecs: "Seconds",
  no_shopping: "There are no shipping methods available for your cart or address",
  nll_send: "Sending...",
  nll_error_mesenger: "Could not connect to the registration server. Please try again later.",
  nll_success_mesenger: "THANK YOU FOR SUBSCRIBING!\u003c\/br\u003eUse the \u003cspan class=\"code\"\u003e\u003c\/span\u003e code to get a discount on the first purchase.",
  aspect_ratio: "340/345",
  search_dropdown_pages: "Pages",
  search_dropdown_articles: "From the Molla",
  search_dropdown_no_results: "Your search did not yield any results."
};
theme.productStrings = {
  sizeGuide: "Size guide",
  addToCart: "Add to cart",
  preOrder: "Pre order",
  selectOption: "Select options",
  soldOut: "Sold out",
  inStock: "In stock",
  outOfStock: "Out Of Stock",
  unavailable: "Unavailable",
  onlyLeft: 'Only <span>1</span> left',
  onSale: 'Sale',
  stockMessage: [],
  label_select: "Select a ",
  viewMoreVariants: "More",
  addToWishlist: "Add to Wishlist",
  viewWishlist: "View my Wishlist"
};
theme.function = {
  multiCurrency: false,
  autoCurrency: false,
  searchAjax: false,
  searchByCollection: true,
  searchAjaxTypes: "product,page,article",
  vrsgallery: true,
  quickshop: "true",
  quickview: true,
  fquickview: "false",
  use_am_popup: false,
  use_thumb_hidden_on_mb: false,
  productImgType: "nonstretch",
  productOptionStyle: [{'name': "Color",'style': "not_select square",'color_watched': true,'op_attach': false,'op_pre_select': false},{'name': "Size",'style': "combobox",'color_watched': false,'op_attach': true,'op_pre_select': false},{'name': "Style",'style': "combobox with_out_variant_image",'color_watched': false,'op_attach': false,'op_pre_select': false},{'name': "Model",'style': "combobox with_out_variant_image",'color_watched': false,'op_attach': false,'op_pre_select': false},{'name': "",'style': "not_select circle",'color_watched': false,'op_attach': false,'op_pre_select': false}],
  productGridOptionStyle: [{'name': "Color",'style': "square",'color_watched': true, 'sw_style': "image_variant"},{'name': "Size",'style': "square _small",'color_watched': false, 'sw_style': "image_variant"},{'name': "Material",'style': "list list_1",'color_watched': false, 'sw_style': "image_variant"},{'name': "Model",'style': "square",'color_watched': true, 'sw_style': "image_variant"},{'name': "",'style': "list list_1",'color_watched': false, 'sw_style': "image_variant"}],
  photoZoom: false,
  nll_ajax: false,
  ajax_cart: "drop",
  sticky_icon_cart: null,
  cart_shipping_calculator: false,
  textInListShipping: " on order over ",
  textInListShippingMax: " on order under ",
  product_delivery: {
    offSaturday: true,
    offSunday: true,
    offDays: ["23\/12\/****","24\/12\/****","01\/01\/****","02\/11\/2019"],
    fromDate: 10,
    toDate: 19 
  },
  countdown_timezone: false,
  timezone: 'GMT'
};
theme.compare = {
  remove: "Remove"
};
theme.gadget = {
  cookies_infor: true,
  newsletter_popup: false,
  shipTo: false
};

theme.suggest = {
  enable: true,
  collection_opj: "",
  delay_time: 15000,
  show_time: 7600,
  use_fake_location: true,
  arr_fake_location: ["Melbourne, Australia","Washington","Nevada"]
};
theme.extensions = {
  ktToolsCss: '//bolesofboyle.com/cdn/shop/t/5/assets/ktTools.scss.css?v=22945105168615461471607598705',
  ktToolsJs: '//bolesofboyle.com/cdn/shop/t/5/assets/ktTools.js?v=23518685763435140231607598705',
  ktToolsSlideshowJs: '//bolesofboyle.com/cdn/shop/t/5/assets/ktTools.slideshow.js?v=159314947026351906071696929873',
  adminThemeTool: '//bolesofboyle.com/cdn/shop/t/5/assets/adminThemeTool.scss.css?v=149704746234113512591607598622',
  ktToolsSettingsPreset: '//bolesofboyle.com/cdn/shop/t/5/assets/settings_preset.js?1584'
}

const firstLink = document.getElementsByTagName("link")[0];
const headDocument = document.head;
const bodyDocument = document.body;
var $ = $jqMolla;

if (theme.crr_library.length == 0) {
  localStorage.setItem('library','[]');
}

window._handleize = function(str){
  str = str.toLowerCase().replace(/'|"|\(|\)|\[|\]/g, "").replace(/\W+/g, "-")
  return str.replace(/^-+|-+$/g, "")
}
window._snakeCase = function(str){
  str = str.toLowerCase().replace(/'|"|\(|\)|\[|\]/g, "").replace(/\W+/g, "_")
  return str.replace(/^-+|-+$/g, "")
}

"undefined" == typeof KT && (KT = {});
KT.checkVersion = function(name_item){
  name_item = name_item.split('/')[name_item.split('/').length - 1];
  var version = false;
  if(!localStorage.getItem(name_item)){
    version = true; 
  }
  var libs_ver = JSON.parse(theme.crr_library);
  if (libs_ver.length && libs_ver.findIndex(function(obj){ return obj.name == name_item}) !== -1) { 
    var objIndex = libs_ver.findIndex(function(obj){ return obj.name == name_item});
    if (parseFloat(libs_ver[objIndex].ver) !== theme.library) {
      libs_ver[objIndex].ver = theme.library;
      localStorage.setItem('library',JSON.stringify(libs_ver));
      version = true;
    }
  } else if(libs_ver.findIndex(function(obj){ return obj.name == name_item}) === -1){
    version = true;
  }
  return version; 
}
KT.pushVersion = function(name_item){
  var libs_ver = JSON.parse(theme.crr_library);
  if (libs_ver.length && libs_ver.findIndex(function(obj){ return obj.name == name_item}) !== -1) { 
    var objIndex = libs_ver.findIndex(function(obj){ return obj.name == name_item});
    if (parseFloat(libs_ver[objIndex].ver) !== theme.library) {
      libs_ver[objIndex].ver = theme.library;
      localStorage.setItem('library',JSON.stringify(libs_ver));
    }
  }
  else {
    var obj = {
      name : name_item,
      ver : theme.library
    }
    libs_ver.push(obj);
    localStorage.setItem('library',JSON.stringify(libs_ver));
  }
  theme.crr_library = localStorage.getItem('library') || '[]';
}
KT.loadScript = function(id, callback) {
  let css_url = "";
  let js_url = "";
  let done = false;
  // var file_name_css = '';
  if($('#'+id).length){
    checkExists(id, js_url)
  }
  else {
    if(id == 'magnific-popup' && $('#magnific-popup-css').length <= 0){
      css_url = "//bolesofboyle.com/cdn/shop/t/5/assets/magnific-popup.min.css";
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/jquery.magnific-popup.min.js";
    }
    else if(id == 'threesixty' && $('#threesixty-css').length <= 0){
      css_url = "//bolesofboyle.com/cdn/shop/t/5/assets/threesixty.min.css";
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/threesixty.min.js";
    }
    else if(id == 'photo-swipe' && $('#photo-swipe-css').length <= 0){
      css_url = "//bolesofboyle.com/cdn/shop/t/5/assets/photoswipe-ui.min.css";
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/photoswipe-ui.min.js";
    }
    else if(id == 'YTPlayer'){
      css_url = "//bolesofboyle.com/cdn/shop/t/5/assets/jquery.mb.YTPlayer.min.css";
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/jquery.mb.YTPlayer.min.js";
    }
    else if(id == 'swiper'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/swiper.min.js";
    }
    else if(id == 'pjax'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/jquery.pjax.min.js";
    }
    else if(id == 'imagesloaded'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/imagesloaded.pkgd.min.js";
    }
    else if(id == 'isotope'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/isotope-plus.pkgd.min.js";
    }
    else if(id == 'instafeed'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/instafeed.min.js";
    }
    else if(id == 'countdown'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/jquery.countdown.min.js";
    }
    else if(id == 'countto'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/jquery.countTo.min.js";
    }
    else if(id == 'moment'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/moment.min.js";
    }
    else if(id == 'moment-zone'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/moment-timezone-with-data.min.js";
    }
    else if(id == 'momentlocale'){
      if (shopLocale === 'en') {handleLoad(); return}
      js_url = "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/"+shopLocale+".js";
    }
    else if(id == 'zoom'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/jquery.zoom.min.js";
    }
    else if(id == 'parallax'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/jquery.parallax_mousemove.js";
    }
    else if(id == 'tippy'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/tippy-bundle.iife.min.js";
    }
    else if(id == 'color_sw'){
      css_url = "//bolesofboyle.com/cdn/shop/t/5/assets/swatch-color.css";
    }
    else if(id == 'animate'){
      css_url = "//bolesofboyle.com/cdn/shop/t/5/assets/animate.min.css";
    }
    else if(id == 'adminThemeCss'){
      css_url = "//bolesofboyle.com/cdn/shop/t/5/assets/adminThemeTool.scss.css";
    }
    else if(id == 'shopify-currency'){
      js_url = "//cdn.shopify.com/s/javascripts/currencies.js";
    }
    else if(id == 'shipping'){
      js_url = "//bolesofboyle.com/cdn/shop/t/5/assets/jquery.currency-shipping.min.js?v=102374127237432738871607598639";
    }
    done = false;
    ajaxLoad(id, css_url, js_url);
  }
  function ajaxLoad(name, css_url, js_url){
    if(css_url !== ''){
      var scr_css = document.createElement('link');
      scr_css.type = 'text/css';
      scr_css.rel = "stylesheet";
      scr_css.id = name+'-css';
      scr_css.href = css_url;
      scr_css.onerror = function() {
        alert("Error loading css " + this.href);
      };
      headDocument.insertBefore(scr_css, firstLink);
    }
    if(js_url !== ''){
      var scr_js = document.createElement('script');
      scr_js.type = 'text/javascript';
      scr_js.async = true;
      scr_js.src = js_url;
      scr_js.id = name;
      scr_js.onload = checkExists(name, js_url);
      scr_js.onerror = function() {
        alert("Error loading js " + this.src);
      };
      bodyDocument.appendChild(scr_js);
    }
  }
  function checkExists(id, js_url){
    var callbackTimer = setInterval(function() {
      if (id == 'swiper' && typeof Swiper === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'owl-carousel' && typeof $.fn.owlCarousel === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'slick-slide' && typeof $.fn.slick === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'moment' && typeof moment === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'moment-zone' && typeof moment.tz === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }      
      if (id == 'magnific-popup' && typeof $.fn.magnificPopup === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'imagesloaded' && typeof $.fn.imagesLoaded === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'isotope' && typeof $.fn.isotope === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'YTPlayer' && typeof jQuery.fn.YTPlayer === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'parallax' && typeof $.fn.mouseMove === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'countdown' && typeof $.fn.countdown === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'countto' && typeof $.fn.countTo === 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'magnific-popup' && typeof $.fn.magnificPopup == 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'instafeed' && typeof Instafeed == 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'momentlocale' && moment.locale() == shopLocale){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if (id == 'zoom' && typeof $.fn.zoom == 'function'){
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if(id === 'pjax' && typeof $.fn.pjax == 'function') {
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if(id === 'photo-swipe' && typeof PhotoSwipe == 'function') {
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if(id === 'threesixty' && typeof $jq == 'function' && typeof $jq.fn.ThreeSixty == 'function') {
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if(id === 'tippy' && typeof tippy == 'function') {
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if(id === 'shipping' && typeof Kt_currency.convertAll == 'function') {
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
      if(id === 'shopify-currency' && typeof Currency !== undefined) {
        handleLoad()
        clearInterval(callbackTimer);
        return true;
      }
    }, 100);
  }
  function handleLoad() {
    if (!done) {
      done = true;
      // console.log(js_url)
      callback(js_url, "ok");
    }
  }
}