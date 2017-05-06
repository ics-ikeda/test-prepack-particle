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
	function Particle(x, y) {
		this.x = x;
		this.y = y;
		this.vx = 0;
		this.vy = 0;
	}


	function World() {
		const particleList = [];

		this.init = function () {
			// パーティクルの初期化
			for (var i = 0; i < MAX_NUM; i++) {
				const p = new Particle(
					Math.random() * STAGE_W,
					Math.random() * STAGE_H
				);
				particleList.push(p)
			}
		};

		this.update = function (gravityX, gravityY) {

			particleList.map(function (n) {
				const diffX = gravityX - n.x;
				const diffY = gravityY - n.y;
				const acc = ACC_VALUE / (diffX * diffX + diffY * diffY);
				const accX = acc * diffX;
				const accY = acc * diffY;

				n.vx += accX;
				n.vy += accY;
				n.x += n.vx;
				n.y += n.vy;

				n.vx *= FRICTION;
				n.vy *= FRICTION;

				if (n.x > STAGE_W)
					n.x = 0;
				else if (n.x < 0)
					n.x = STAGE_W;
				if (n.y > STAGE_H)
					n.y = 0;
				else if (n.y < 0)
					n.y = STAGE_H;
			});

			return particleList;
		}
	}

	global.World = World;

})();

