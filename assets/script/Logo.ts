import LogoVirus from "./LogoVirus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Logo extends cc.Component {

    @property({ type: [cc.Node] })
    anim: cc.Node[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let _out = cc.tween().to(0.2, { opacity: 0 });
        let _in = cc.tween().to(0.2, { opacity: 255 });
        cc.tween(this.anim[0])
            .sequence(_out, _in)
            .repeat(3)
            .call(this.callBack0.bind(this))
            .start();
    }

    start() {

    }

    // update (dt) {}

    private callBack0() {
        cc.tween(this.anim[1])
            .to(1,{scaleX:1})
            .call(this.callBack1.bind(this))
            .start();
    }

    private callBack1() {
        cc.tween(this.anim[2])
            .to(0.5,{x:480,y:-24,scaleX:0.765,scaleY:0.7732})
            .call(this.callBack2.bind(this))
            .start();

        // 0,765 0.7732
        cc.tween(this.anim[3])
            .to(0.5,{x:460.4,y:207.9,scaleX:1,scaleY:1})
            .start();
    }
    private callBack2(){
        this.anim[2].getComponent(LogoVirus).Begin();
        this.anim[3].getComponent(LogoVirus).Begin();
    }
    
}
