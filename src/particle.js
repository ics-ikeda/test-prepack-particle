(function () {
  const MAX_NUM = 10000; // パーティクルの個数
  const STAGE_W = 465;
  const STAGE_H = 465;
  const FRICTION = 0.96;
  const ACC_VALUE = 50;

  /**
   * パーティクルクラスです。
   * @param {number} x
   * @param {number} y
   * @constructor
   */
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = 0;
      this.vy = 0;
    }
  }

  function updateParticlePosition(particle, gravityX, gravityY) {
    const diffX = gravityX - particle.x;
    const diffY = gravityY - particle.y;
    const acc = ACC_VALUE / (diffX * diffX + diffY * diffY);
    const accX = acc * diffX;
    const accY = acc * diffY;

    particle.vx += accX;
    particle.vy += accY;
    particle.x += particle.vx;
    particle.y += particle.vy;

    particle.vx *= FRICTION;
    particle.vy *= FRICTION;

    if (particle.x > STAGE_W)
      particle.x = 0;
    else if (particle.x < 0)
      particle.x = STAGE_W;
    if (particle.y > STAGE_H)
      particle.y = 0;
    else if (particle.y < 0)
      particle.y = STAGE_H;
  }

  class World {

    constructor() {
      this.particleList = [];
    }

    init() {
      // パーティクルの初期化
      for (let i = 0; i < MAX_NUM; i++) {
        const p = new Particle(
          Math.random() * STAGE_W,
          Math.random() * STAGE_H,
        );
        this.particleList.push(p);
      }
    };

    update(gravityX, gravityY) {
      this.particleList.forEach((particle) => {
        updateParticlePosition(particle, gravityX, gravityY);
      });

      return this.particleList;
    };
  }

  global.World = World;

})();

