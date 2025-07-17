"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserMultiFormatReader = void 0;
var BrowserCodeReader_1 = require("./BrowserCodeReader");
var MultiFormatReader_1 = require("../core/MultiFormatReader");
var BrowserMultiFormatReader = /** @class */ (function (_super) {
    __extends(BrowserMultiFormatReader, _super);
    function BrowserMultiFormatReader(hints, timeBetweenScansMillis) {
        if (hints === void 0) { hints = null; }
        if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
        var _this = this;
        var reader = new MultiFormatReader_1.default();
        reader.setHints(hints);
        _this = _super.call(this, reader, timeBetweenScansMillis) || this;
        return _this;
    }
    Object.defineProperty(BrowserMultiFormatReader.prototype, "hints", {
        set: function (hints) {
            this._hints = hints || null;
            // Since we don't pass the hints in `decodeBitmap` as other Browser readers do, we need to set them here.
            this.reader.setHints(hints);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Overwrite decodeBitmap to call decodeWithState, which will pay
     * attention to the hints set in the constructor function
     */
    BrowserMultiFormatReader.prototype.decodeBitmap = function (binaryBitmap) {
        try {
            return this.reader.decodeWithState(binaryBitmap);
        }
        finally {
            // Readers need to be reset before being reused on another bitmap.
            this.reader.reset();
        }
    };
    return BrowserMultiFormatReader;
}(BrowserCodeReader_1.BrowserCodeReader));
exports.BrowserMultiFormatReader = BrowserMultiFormatReader;
