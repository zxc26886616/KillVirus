const { ccclass, property } = cc._decorator;

@ccclass
export default class GameControl extends cc.Component {
    @property({ type: cc.Node })
    private Logo:cc.Node = null;

    protected onLoad() {
        this.Logo.getComponent("Logo").PlayLoop();
    }
}
