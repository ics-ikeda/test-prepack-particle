(function () {
  var _$0 = this;

  var _A = function (particle, gravityX, gravityY) {
    const diffX = gravityX - particle.x;
    const diffY = gravityY - particle.y;
    const acc = 50 / (diffX * diffX + diffY * diffY);
    const accX = acc * diffX;
    const accY = acc * diffY;
    particle.vx += accX;
    particle.vy += accY;
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vx *= 0.96;
    particle.vy *= 0.96;
    if (particle.x > 465) particle.x = 0;else if (particle.x < 0) particle.x = 465;
    if (particle.y > 465) particle.y = 0;else if (particle.y < 0) particle.y = 465;
  };

  var _1 = class {
    constructor() {
      this.particleList = [];
    }

    init() {
      // パーティクルの初期化
      for (let i = 0; i < 10000; i++) {
        const p = new _8(Math.random() * 465, Math.random() * 465);
        this.particleList.push(p);
      }
    }

    update(gravityX, gravityY) {
      this.particleList.forEach(particle => {
        _A(particle, gravityX, gravityY);
      });
      return this.particleList;
    }

  };

  var _8 = class {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = 0;
      this.vy = 0;
    }

  };

  _$0.World = _1;
}).call(this);