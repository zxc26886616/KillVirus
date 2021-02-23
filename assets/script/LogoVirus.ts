const { ccclass, property } = cc._decorator;

@ccclass
export default class LogoVirus extends cc.Component {
    @property({ type: cc.Node })
    circl: cc.Node = null;
    @property({ type: cc.Node })
    virus: cc.Node = null;
    @property({ type: cc.Node })
    tail: cc.Node = null;
    // onLoad () {}

    start() {

    }

    public Begin() {
        //this.tail.active = false;
        cc.tween(this.tail)
            .to(0.2, { opacity: 0 })
            .start();

        let _out = cc.tween().to(0.5, { opacity: 0 });
        let _in = cc.tween().to(0.5, { opacity: 255 });
        cc.tween(this.circl)
            .sequence(_out, _in)
            .repeatForever()
            .start();
    }

    // update (dt) {}


}
