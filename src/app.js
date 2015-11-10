const jQuery = require("jquery");

(function (factory) {

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(require("jquery"), window, document);
  } else {
    factory(jQuery, window, document);
  }

} (($, window, document, undefined) => {

  class MaterialBtn {

    constructor(element) {
      this.element = element;
      this.$element = $(element);
      this.color = this.$element.data("mt-Color");
    }

    let color_obj = {
      "Red50": "#ffebee", "Red100": "#ffcdd2", "Red200": "#ef9a9a", "Red300": "#e57373", "Red400": "#ef5350",
      "Red500": "#f44336", "Red600": "#e53935", "Red700": "#d32f2f", "Red800": "#c62828", "Red900": "#b71c1c",

      "Pink50": "#FCE4EC", "Pink100": "#F8BBD0", "Pink200": "#F48FB1", "Pink300": "#F06292", "Pink400": "#EC407A",
      "Pink500": "#E91E63", "Pink600": "#D81B60", "Pink700": "#D81B60", "Pink800": "#AD1457", "Pink900": "#880E4F",

      "Purple50": "#F3E5F5", "Purple100": "", "Purple200": "", "Purple300": "", "Purple400": "",
      "Purple500": "", "Purple600": "", "Purple700": "", "Purple800": "", "Purple900": "",

      "DeepPurple50": "", "DeepPurple100": "", "DeepPurple200": "", "DeepPurple300": "", "DeepPurple400": "",
      "DeepPurple500": "", "DeepPurple600": "", "DeepPurple700": "", "DeepPurple800": "", "DeepPurple900": "",

      "Indigo50": "", "Indigo100": "", "Indigo200": "", "Indigo300": "", "Indigo400": "",
      "Indigo500": "", "Indigo600": "", "Indigo700": "", "Indigo800": "", "Indigo900": "",

      "Blue50": "", "Blue100": "", "Blue200": "", "Blue300": "", "Blue400": "",
      "Blue500": "", "Blue600": "", "Blue700": "", "Blue800": "", "Blue900": "",

      "LightBlue50": "", "LightBlue100": "", "LightBlue200": "", "LightBlue300": "", "LightBlue400": "",
      "LightBlue500": "", "LightBlue600": "", "LightBlue700": "", "LightBlue800": "", "LightBlue900": "",

      "Cyab50": "", "Cyab100": "", "Cyab200": "", "Cyab300": "", "Cyab400": "",
      "Cyab500": "", "Cyab600": "", "Cyab700": "", "Cyab800": "", "Cyab900": "",

      "Teal50": "", "Teal100": "", "Teal200": "", "Teal300": "", "Teal400": "",
      "Teal500": "", "Teal600": "", "Teal700": "", "Teal800": "", "Teal900": "",

      "Green50": "", "Green100": "", "Green200": "", "Green300": "", "Green400": "",
      "Green500": "", "Green600": "", "Green700": "", "Green800": "", "Green900": "",

      "LightGreen50": "", "LightGreen100": "", "LightGreen200": "", "LightGreen300": "", "LightGreen400": "",
      "LightGreen500": "", "LightGreen600": "", "LightGreen700": "", "LightGreen800": "", "LightGreen900": "",

      "Lime50": "", "Lime100": "", "Lime200": "", "Lime300": "", "Lime400": "",
      "Lime500": "", "Lime600": "", "Lime700": "", "Lime800": "", "Lime900": "",

      "Yellow50": "", "Yellow100": "", "Yellow200": "", "Yellow300": "", "Yellow400": "",
      "Yellow500": "", "Yellow600": "", "Yellow700": "", "Yellow800": "", "Yellow900": "",

      "Amber50": "", "Amber100": "", "Amber200": "", "Amber300": "", "Amber400": "",
      "Amber500": "", "Amber600": "", "Amber700": "", "Amber800": "", "Amber900": "",

      "Orange50": "", "Orange100": "", "Orange200": "", "Orange300": "", "Orange400": "",
      "Orange500": "", "Orange600": "", "Orange700": "", "Orange800": "", "Orange900": "",

      "DeepOrange50": "", "DeepOrange100": "", "DeepOrange200": "", "DeepOrange300": "", "DeepOrange400": "",
      "DeepOrange500": "", "DeepOrange600": "", "DeepOrange700": "", "DeepOrange800": "", "DeepOrange900": "",

      "Brown50": "", "Brown100": "", "Brown200": "", "Brown300": "", "Brown400": "",
      "Brown500": "", "Brown600": "", "Brown700": "", "Brown800": "", "Brown900": "",

      "Gray50": "", "Gray100": "", "Gray200": "", "Gray300": "", "Gray400": "",
      "Gray500": "", "Gray600": "", "Gray700": "", "Gray800": "", "Gray900": "",

      "BlueGray50": "", "BlueGray100": "", "BlueGray200": "", "BlueGray300": "", "BlueGray400": "",
      "BlueGray500": "", "BlueGray600": "", "BlueGray700": "", "BlueGray800": "", "BlueGray900": ""
    };

    checkColor() {
      let btnColor = color_obj[this.color];
      return btnColor;
    }

    makeBtn() {
      this.$element.css({
        "background-color": this.checkColor();
      });
    }

    init() {
      return this;
    }

  }

  $.extend($.fn, {
    MaterialBtn: () => {
      return this.each(() => {
        new MaterialBtn(this).init();
      });
    }
  });



}));
