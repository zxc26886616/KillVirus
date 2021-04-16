const { ccclass, property } = cc._decorator;

@ccclass
export default class Top extends cc.Component {


    public Reset() {
        this.node.setPosition(cc.v2(0, 750));
    }

    public moveOut() {
        this.Reset();
        this.node.setPosition(cc.v2(0, 750))
        cc.tween(this.node)
            .to(0.5, { y: 850 }, { easing: "backIn" })
            .start();
    }

    public moveIn() {
        this.Reset();
        this.node.setPosition(cc.v2(0, 850))
        cc.tween(this.node)
            .to(0.5, { y: 750 }, { easing: "backOut" })
            .start();
    }
}
