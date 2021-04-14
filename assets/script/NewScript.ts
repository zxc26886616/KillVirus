// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    protected onLoad() {
        cc.tween(this.node)
            .to(10, { x: 300 }, { easing: bounceOut })
            .start();
    }

    /**
     * !#en Easing out action with bouncing effect.
     * !#zh 弹跳效果的缓出函数。
     * @method bounceOut
     * @param {Number} t The current time as a percentage of the total time.
     * @return {Number} The correct value.
     */

}

function bounceOut(k: number): any {
    if (k < (1 / 2.75)) {
        return 7.5625 * k * k;
    }
    else if (k < (2 / 2.75)) {
        return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
    }
    else if (k < (2.5 / 2.75)) {
        return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
    }
    else {
        return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
    }
}

