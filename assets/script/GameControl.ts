import LevelDesign from "./LevelDesign";
import Logo from "./Logo";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameControl extends cc.Component {
    @property({ type: cc.Node })
    private Logo: cc.Node = null;

    @property({ type: cc.Node })
    private LevelDesign: cc.Node = null;

    protected onLoad() {
        this.Logo.getComponent(Logo).PlayLoop();

    }
    protected start() {
        this.LevelDesign.getComponent(LevelDesign).reset();
        
    }

    public test1(target, data) {
        if (data === "重置") {
            this.Logo.getComponent(Logo).Reset();
        } else if (data === "播放") {
            this.Logo.getComponent(Logo).PlayLoop();
        } else if (data === "移出") {
            this.Logo.getComponent(Logo).moveOut();
        } else if (data === "移入") {
            this.Logo.getComponent(Logo).moveIn();
        }

    }
}
