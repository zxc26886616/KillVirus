const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    public boss: cc.Node = null;

    @property(cc.Label)
    public number: cc.Label = null;

    public bBoss = false;

    protected onLoad() {
        this.boss.active = false;
        this.bBoss = false;
    }

    public setNumber(num: number) {
        this.number.string = num + "";
    }

    public setBoss(show: boolean) {
        this.boss.active = show;
    }
}
