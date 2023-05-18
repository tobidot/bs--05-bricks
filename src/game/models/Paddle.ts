import { Vector2D } from "../../library/math";
import { PhysicsProxy, Collision } from "../../library/physics/Physics";
import { Entity } from "./Entity";

export class Paddle extends Entity {
    public has_ball: boolean = true;

    constructor(
        position: Vector2D
    ) {
        const image = window.game.assets.getImage("brick-metal");
        super(position, image);
        this.physics.static = true;
        this.hit_box.size.set({x:100,y:20});
        this.render_box.size.set({x:100,y:20});
    }

    public update(delta_seconds: number): void {
        super.update(delta_seconds);        
    }

    public onCollision(other: PhysicsProxy, collision: Collision): void {
    }

    public increaseSize(): void {
        this.hit_box.size.x += 10;
        this.render_box.size.x += 10;
    }
}