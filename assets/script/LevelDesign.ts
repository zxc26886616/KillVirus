// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import LevelItem from "./LevelItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelDesign extends cc.Component {
    @property({ type: [cc.Node] })
    public Item: cc.Node[] = [];

    public curLevel = 1;
    public basePos: any = new Array();

    protected onLoad() {
        this.curLevel = 1;

        for (let i = 0; i < this.Item.length; i++) {
            this.basePos[i] = this.Item[i].getPosition();
        }
    }
    protected start() {
        // this.reset();
    }

    public setCurrentLevel() {

    }

    public reset() {
        const starLevel = this.curLevel - 2;

        for (let i = 0; i < this.Item.length; i++) {
            this.Item[i].getComponent(LevelItem).setNumber(starLevel + i);
        }
        this.Item[0].active = false;
        this.Item[4].active = false;
    }

    public play() {
        for (let i = 1; i < array.length; i++) {
            const element = array[i];
            
        }
    }

    // public ctor() {
    //     this.curLevel = 1;
    //     this.basePos = new Array();

    // }
}
