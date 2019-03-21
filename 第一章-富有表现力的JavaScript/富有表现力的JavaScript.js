//page18
/** Start and stop animations using functions.
 * 以函数实现一个动画的启动和停止
 * 这种方法很简单，但无法创建可以保存状态并且具有一些
 * 仅对其内部状态进行操作的方法的动画对象
 */

function startAnimation() {

}

function stopAnimation() {

}

/**Anim class
 * Anim类
 * 这段代码定义了一个Anim类，并且把两个方法赋给该类的prototype属性
 */
var Anim = function () {

};

Anim.prototype.start = function () {

};

Anim.prototype.stop = function () {

};

/**Usage. 
 * 应用
 */
var myAnim = new Anim();
myAnim.start();
myAnim.stop();

/**Anim class, with a slightly different syntax for declaring methods */
var Anim = function () {

};
Anim.prototype = {
    start: function () {

    },
    stop: function () {

    }
};

/**Add a method to the Function object that can be used to declare methods. */

Function.prototype.method = function (name, fn) { //用于为类添加新方法
    this.prototype[name] = fn;
    return this; //进一步修改使其可被链式调用
}
/**Anim class, with methods created using a convenience method */
var Anim = function () {

};

Anim.method('start', function () {

});
Anim.method('stop', function () {

});

Anim.
method('start', function () {

}).
method('stop', function () {

});