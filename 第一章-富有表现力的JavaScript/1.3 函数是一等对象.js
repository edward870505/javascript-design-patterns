//page21
/**An anonymous function, executed immediately 
 * 自动执行的匿名函数
*/

(function () {
    var foo = 10;
    var bar =2;
    console.log(foo*bar);
})();

/**An anonymous function with arguments.
 * 带参数的自动执行匿名函数
 */
(function (foo,bar) {
    console.log(foo*bar);
})(10,2);

/**An anonymous function that returns a value.
 * 有返回值的自执行匿名函数
 */
var baz = (function (foo,bar) {
    return foo*bar;
})(10,2);
console.log(baz);

/**An anonymous function used as  a closure
 * 用作闭包的匿名函数
 */
var baz;
(function () {
    var foo = 10;
    var bar = 2;
    baz = function(){
        return foo*bar;
    };
})();

console.log(baz());


