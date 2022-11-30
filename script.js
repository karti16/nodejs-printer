var printer = require("./node_modules/@thealexbaron/node-printer/lib");

let template = `
^XA
^FX ^CF0,30^FO45,25^BQN,1,5^FDQA,LOT NO:2222^FS
         ^CF0,20
         ^FO155,25^FD Price^FS
         ^CF0,22
         ^FO155,45^FD 12,999^FS
         ^CF0,20
         ^FO39,145^FD SAMSUNG^FS
        ^FO80,170^FD 13131313^FS
^XZ`;

function printZebra(template, printer_name) {
  console.log("pp", template, printer_name);
  printer.printDirect({
    data: template,
    printer: printer_name,
    type: "RAW",
    success: function () {
      console.log("printed");
    },
    error: function (err) {
      console.log(err);
    },
  });
}

document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
  console.log("asd");
  printZebra(template, "Zebra GT800 (203 dpi) - ZPL");
}
