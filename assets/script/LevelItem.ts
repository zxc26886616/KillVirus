const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelItem extends cc.Component {

    @property(cc.Node)
    public boss: cc.Node = null;

    @property(cc.Label)
    public number: cc.Label = null;

    public bBoss = false;

    protected onLoad() {
        setInterval
        this.boss.active = false;
        this.bBoss = false;
        this.number.string = "0";
    }

    public setNumber(num: number) {
        if (num <= 0) {
            this.node.active = false;
            return;
        }
        this.number.string = num + "";
    }

    public setBoss(show: boolean) {
        this.boss.active = show;
    }
}
