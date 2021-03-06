import LogoVirus from "./LogoVirus";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Logo extends cc.Component {

    @property({ type: [cc.Node] })
    public anim: cc.Node[] = [];

    // LIFE-CYCLE CALLBACKS:

    // 播放动画
    public PlayLoop() {

        const _out = cc.tween().to(0.2, { opacity: 0 });
        const _in = cc.tween().to(0.2, { opacity: 255 });
        cc.tween(this.anim[0])
            .sequence(_out, _in)
            .repeat(3)
            .call(this.callBack0.bind(this))
            .start();
    }
    // 重置
    public Reset() {
        this.anim[0].active = true;

        // 缩放
        this.anim[1].scaleX = 0;
        this.anim[1].opacity = 255;

        // icon
        this.anim[2].setPosition(cc.v2(276, 32));
        this.anim[2].setScale(cc.v2(0.2, 0.2));
        this.anim[3].setPosition(cc.v2(277, 53));
        this.anim[3].setScale(cc.v2(0.2, 0.2));

        // 动画暂停
        cc.Tween.stopAll();
    }

    public moveOut() {
        this.Reset();
        this.node.setPosition(cc.v2(-36, 456))
        cc.tween(this.node)
            .to(0.5, { y: 980 }, { easing: "backIn" })
            .start();
    }

    public moveIn() {
        this.Reset();
        this.node.setPosition(cc.v2(-36, 980))
        cc.tween(this.node)
            .to(0.5, { y: 456 }, { easing: "backOut" })
            .start();
    }

    protected onLoad() {

    }

    private callBack0() {
        // console.log("this.anim[1]", this.anim[1].scaleX);
        cc.tween(this.anim[1])
            .to(1, { scaleX: 1 })
            .call(this.callBack1.bind(this))
            .start();

        this.flicker(this.anim[0]);
    }

    private callBack1() {
        cc.tween(this.anim[2])
            .to(0.5, { x: 480, y: -24, scaleX: 0.765, scaleY: 0.7732 })
            .call(this.callBack2.bind(this))
            .start();

        // 0,765 0.7732
        cc.tween(this.anim[3])
            .to(0.5, { x: 460.4, y: 207.9, scaleX: 1, scaleY: 1 })
            .start();

        this.flicker(this.anim[1]);
    }
    private callBack2() {// 病毒2
        let _js = this.anim[3].getComponent(LogoVirus);
        _js.init(401, 150, 120);
        _js.Begin();

        _js = this.anim[2].getComponent(LogoVirus);
        _js.init(440, -66, 80);
        _js.Begin();
    }

    /**
     * 节点闪烁
     * @param node 节点
     */
    private flicker(node: cc.Node) {
        const _out = cc.tween().to(0.5, { opacity: 0 });
        const _in = cc.tween().to(0.5, { opacity: 255 });
        cc.tween(node)
            .sequence(_out, _in)
            .repeatForever()
            .start();
    }


}
