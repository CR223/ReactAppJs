import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World, Mouse, MouseConstraint, Matter } from 'matter-js';


function Physics (props) {
  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create({ gravity: { x: 0, y: 0.01 } }));
  const mouse = useRef
  const mouseConstraint = useRef
  const world = engine.world;


  useEffect(() => {
    const cw = document.body.clientWidth
    const ch = document.body.clientHeight

    mouse.current = Mouse.create(scene.current);
    mouseConstraint.current = MouseConstraint.create(engine.current, { mouse: mouse.current });

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    })




World.add(engine.current.world, [
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
  Bodies.circle(Math.random() * cw, Math.random() * ch,Math.random() * (60 - 30 +1) + 30, {mass: 1,restitution: 1.4,friction: 0.0,}),
])

    World.add(engine.current.world, mouseConstraint.current);

    const ceiling = Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true ,});//up
const floor = Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true });//down
    
    World.add(engine.current.world, ceiling, floor[
      Bodies.rectangle(cw / 2, ch + 15, cw, 20, { isStatic: true }),//down
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })//right
    ]);

    Engine.run(engine.current)
    Render.run(render)

    /*
    Matter.Events.on(engine, 'collisionStart', (event) => {
      const pairs = event.pairs;

      pairs.forEach((collision) => {
        if ((collision.circle && collision.rectangle === floor) ||
        (collision.rectangle === floor && collision.circle)) {
          world.gravity.y = -0.01;
        }

        else if ((collision.circle && collision.rectangle === ceiling) ||
        (collision.rectangle === ceiling && collision.circle)) {
          world.gravity.y = 0.01;
        }
      });
    });
    */
    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])


  return (
    <div
      ref={scene}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none', // Prevents mouse events from being captured by the physics container
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
      }}
    />
  )
}

export default Physics