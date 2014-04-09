function extend(child, parent) {
    var tmp = function() {};
    tmp.prototype = parent.prototype;
    child.prototype = new tmp();
    child.prototype.constructor = child;
    child.superclass = parent.prototype;
}