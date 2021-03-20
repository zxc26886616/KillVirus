// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelDesign extends cc.Component {
    @property({ type: [cc.Node] })
    public Item: cc.Node[] = [];

    public curLevel = 1;

    protected onLoad() {
        this.curLevel = 1;
    }

    public setCurrentLevel() {

    }

    public reset() {

    }
}
