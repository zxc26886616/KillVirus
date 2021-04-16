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
        this.curLevel = 2;

        for (let i = 0; i < this.Item.length; i++) {
            this.basePos[i] = this.Item[i].getPosition();
            // console.log(this.basePos[i]);
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
            // console.log(this.basePos[i]);
            this.Item[i].setPosition(this.basePos[i]);

            this.Item[i].getComponent(LevelItem).setIndex(i);
        }
        this.Item[0].opacity = 0;
        this.Item[4].opacity = 0;
        this.Item[1].opacity = 255;
        this.Item[2].setScale(1);
        this.Item[3].setScale(0.6);
    }

    public play() {

        for (let i = 1; i < this.Item.length; i++) {
            const moveTo = cc.tween().to(0.5, { position: this.Item[i - 1].position })
            if (i === 1) {
                const out = cc.fadeOut(0.5);
                cc.tween(this.Item[i])
                    .parallel(
                        moveTo, out
                    )
                    .start();
                    this.Item[i].getComponent(LevelItem).showPointIndex(-1);
            } else if (i === 2) {
                const scale = cc.tween().to(0.5, { scale: 0.6 })
                cc.tween(this.Item[i])
                    .parallel(
                        moveTo, scale
                    )
                    .start();
                    this.Item[i].getComponent(LevelItem).showPointIndex(1);
            } else if (i === 3) {
                const scale = cc.tween().to(0.5, { scale: 1 })
                cc.tween(this.Item[i])
                    .parallel(
                        moveTo, scale
                    )
                    .start();
                this.Item[i].getComponent(LevelItem).showPointIndex(0);
            } else if (i === 4) {
                const _in = cc.fadeIn(0.5);
                cc.tween(this.Item[i])
                    .parallel(
                        _in, moveTo
                    ).start();
            } else {
                cc.tween(this.Item[i])
                    .then(moveTo)
                    .start()
            }
        }
        const self = this;
        this.scheduleOnce(() => {
            self.curLevel++;
            self.reset();
        }, 0.5);
    }

    // public ctor() {
    //     this.curLevel = 1;
    //     this.basePos = new Array();

    // }
}
