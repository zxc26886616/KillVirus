const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelItem extends cc.Component {

    @property(cc.Node)
    public boss: cc.Node = null;

    @property(cc.Label)
    public number: cc.Label = null;

    @property([cc.Node])
    public point: cc.Node[] = [];

    public bBoss = false;

    public Index = 0;

    protected onLoad() {
        setInterval
        this.boss.active = false;
        this.bBoss = false;
        this.number.string = "0";
    }

    public setIndex(index) {
        this.Index = index;
        if (index === 1 || index === 2) {
            this.setPoint(true);
        } else {
            this.setPoint(false);
        }

        if (index === 1) {
            this.point[0].opacity = 255;
            this.point[1].opacity = 0;
        } else if (index === 2) {
            this.point[0].opacity = 0;
            this.point[1].opacity = 255;
        }
    }

    public setNumber(num: number) {
        if (num <= 0) {
            this.node.active = false;
            return;
        }
        this.number.string = num + "";
        this.setBoss(num % 3 === 0);

    }

    public setBoss(show: boolean) {
        this.boss.active = show;
        this.bBoss = show;
    }

    public setPoint(show: boolean) {
        this.point[0].opacity = show ? 255 : 0;
        this.point[1].opacity = show ? 255 : 0;
    }

    public showPointIndex(index) {
        if (index === 0) {
            cc.tween(this.point[0]).then(cc.fadeOut(0.5)).start();
            cc.tween(this.point[1]).then(cc.fadeIn(0.5)).start();
            // this.point[0].runAction(cc.fadeOut(0.5));
            // this.point[1].runAction(cc.fadeIn(0.5));
        } else if (index === 1) {
            cc.tween(this.point[1]).then(cc.fadeOut(0.5)).start();
            cc.tween(this.point[0]).then(cc.fadeIn(0.5)).start();
        } else {
            cc.tween(this.point[1]).then(cc.fadeOut(0.5)).start();
            cc.tween(this.point[0]).then(cc.fadeOut(0.5)).start();
        }
    }
}
