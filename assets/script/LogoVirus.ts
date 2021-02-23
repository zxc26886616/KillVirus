const { ccclass, property } = cc._decorator;

@ccclass
export default class LogoVirus extends cc.Component {
    @property({ type: cc.Node })
    private circl: cc.Node = null; // 圆圈
    @property({ type: cc.Node })
    private virus: cc.Node = null; // 病毒
    @property({ type: cc.Node })
    private tail: cc.Node = null; // 拖尾

    private v2: cc.Vec2;
    private width: number;
    // onLoad () {}

    public Begin() {
        // this.tail.active = false;
        cc.tween(this.tail)
            .to(0.2, { opacity: 0 })
            .start();

        const _out = cc.tween().to(0.5, { opacity: 0 });
        const _in = cc.tween().to(0.5, { opacity: 255 });
        cc.tween(this.circl)
            .sequence(_out, _in)
            .repeatForever()
            .start();

        this.virusAction();
    }

    public init(x, y, width) {
        this.v2 = cc.v2(x,y);
        this.width = width
    }

    private random(lower, upper) {
        return Math.floor(Math.random() * (upper - lower))
    }

    private virusAction(){
        const x = this.random(0, this.width);
        const y = this.random(0, this.width);

        const v2 = cc.v2(this.v2.x+x, this.v2.y+y);
        cc.tween(this.node)
            .to(0.5, {x:v2.x,y:v2.y})
            .call(function(){
                this.virusAction();
            }.bind(this))
            .start();
    }
    // update (dt) {}


}
