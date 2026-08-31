// ==========================================
// GOOGLE APPS SCRIPT WEB APP ENTRY POINT
// ==========================================
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('PLN RAB Generator - Modern Edition')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
}

// ==========================================
// DATABASE MATERIAL PLN (Mock Database)
// ==========================================
const dbMaterial = [
    { kode: "251", uraian: "NFA2XSEY-T 3x150 1x95 mm2 - CWS", sat: "M", hMat: 263250, hJasa: 45195 },
    { kode: "149", uraian: "Earthing Rod 16 mm - 2.5 m clamp-TM", sat: "S", hMat: 260904, hJasa: 53347 },
    { kode: "180", uraian: "Galvanized Steel Wire 35 mm-HDG", sat: "M", hMat: 21700, hJasa: 3455 },
    { kode: "492", uraian: "Tiang Beton 13m - 350 daN", sat: "B", hMat: 5603340, hJasa: 931040 },
    { kode: "376", uraian: "Polymer Arrester 24 kV - 10 KA", sat: "S", hMat: 676300, hJasa: 30130 },
    { kode: "20",  uraian: "BC 50 MM (Bare Conductor)", sat: "M", hMat: 96459, hJasa: 3731 }
];

function getDbMaterial() {
  return dbMaterial;
}
