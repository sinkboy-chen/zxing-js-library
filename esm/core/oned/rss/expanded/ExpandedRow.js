var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import ExpandedPair from './ExpandedPair';
var ExpandedRow = /** @class */ (function () {
    function ExpandedRow(pairs, rowNumber) {
        this.pairs = __spread(pairs);
        this.rowNumber = rowNumber;
    }
    ExpandedRow.prototype.getPairs = function () {
        return this.pairs;
    };
    ExpandedRow.prototype.getRowNumber = function () {
        return this.rowNumber;
    };
    ExpandedRow.prototype.isEquivalent = function (otherPairs) {
        return ExpandedRow.listEquals(this.getPairs(), otherPairs);
    };
    ExpandedRow.prototype.toString = function () {
        return '{ ' + this.pairs + ' }';
    };
    /**
     * Two rows are equal if they contain the same pairs in the same order.
     */
    // @Override
    ExpandedRow.equals = function (o1, o2) {
        if (o1 === null)
            return o2 === null;
        if (!(o2 instanceof ExpandedRow)) {
            return false;
        }
        return ExpandedRow.listEquals(o1.pairs, o2.getPairs());
    };
    ExpandedRow.listEquals = function (pairs1, pairs2) {
        if (pairs1.length !== pairs2.length)
            return false;
        return pairs1.every(function (pair1, index) {
            var pair2 = pairs2[index];
            return ExpandedPair.equals(pair1, pair2);
        });
    };
    return ExpandedRow;
}());
export default ExpandedRow;
