import LevelDesign from "./LevelDesign";
import Logo from "./Logo";
import Top from "./top";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameControl extends cc.Component {
    @property({ type: cc.Node })
    private Logo: cc.Node = null;

    @property({ type: cc.Node })
    private LevelDesign: cc.Node = null;

    @property({ type: cc.Node })
    private top: cc.Node = null;

    protected onLoad() {
        this.Logo.getComponent(Logo).PlayLoop();

    }
    protected start() {
        this.LevelDesign.getComponent(LevelDesign).reset();
    }

    public test1(target, data) {
        if (data === "重置") {
            this.Logo.getComponent(Logo).Reset();
            this.LevelDesign.getComponent(LevelDesign).reset();
        } else if (data === "播放") {
            this.Logo.getComponent(Logo).PlayLoop();
            this.LevelDesign.getComponent(LevelDesign).play();
        } else if (data === "移出") {
            this.Logo.getComponent(Logo).moveOut();
            this.top.getComponent(Top).moveOut();
        } else if (data === "移入") {
            this.Logo.getComponent(Logo).moveIn();
            this.top.getComponent(Top).moveIn();
        }

    }
}
