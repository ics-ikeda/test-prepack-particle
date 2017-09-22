(function () {
  var _$0 = this;

  var _1 = function (x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  };

  var _0 = function () {
    const particleList = [];

    this.init = function () {
      // パーティクルの初期化
      for (var i = 0; i < 10000; i++) {
        const p = new _1(_$0.Math.random() * 465, _$0.Math.random() * 465);
        particleList.push(p);
      }
    };

    this.update = function (gravityX, gravityY) {
      particleList.map(function (n) {
        const diffX = gravityX - n.x;
        const diffY = gravityY - n.y;
        const acc = 50 / (diffX * diffX + diffY * diffY);
        const accX = acc * diffX;
        const accY = acc * diffY;
        n.vx += accX;
        n.vy += accY;
        n.x += n.vx;
        n.y += n.vy;
        n.vx *= 0.96;
        n.vy *= 0.96;
        if (n.x > 465) n.x = 0;else if (n.x < 0) n.x = 465;
        if (n.y > 465) n.y = 0;else if (n.y < 0) n.y = 465;
      });
      return particleList;
    };
  };

  World = _0;
}).call(this);