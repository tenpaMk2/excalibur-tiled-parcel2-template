import { Actor, CollisionType, Color, Engine, Scene, Vector } from "excalibur";
import { Resources } from "../resource";

export class GameScene extends Scene {
  onInitialize(_engine: Engine): void {
    Resources.tiledmap.addTiledMapToScene(this);

    const actor = new Actor({
      x: 20,
      width: 18,
      height: 18,
      color: Color.Magenta,
      collisionType: CollisionType.Active,
    });
    actor.onInitialize = (engine: Engine): void => {
      actor.acc = Vector.Down.scale(10);
    };
    _engine.add(actor);
  }
}
