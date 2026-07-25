/* 
 _____                                             _____ 
( ___ ) © SanoLink 2024/2026. All rights reserved.( ___ )
 |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   | 
 |   |  _____         _     _____        ______    |   | 
 |   | |_   _|__  ___| |__ | ____|_   __ \ \ \ \   |   | 
 |   |   | |/ _ \/ __| '_ \|  _| \ \ / /  \ \ \ \  |   | 
 |   |   | |  __/ (__| | | | |___ \ V /   / / / /  |   | 
 |   |  _|_|\___|\___|_| |_|_____| \_/   /_/_/_/   |   | 
 |   | |  _ \(_)___  ___ _____   _____ _ __ _   _  |   | 
 |   | | | | | / __|/ __/ _ \ \ / / _ \ '__| | | | |   | 
 |   | | |_| | \__ \ (_| (_) \ V /  __/ |  | |_| | |   | 
 |   | |____/|_|___/\___\___/ \_/ \___|_|   \__, | |   | 
 |   |                                      |___/  |   | 
 |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___| 
(_____)         Last Modification : 1.5.3         (_____)

*/
Ponder.registry(event => {
	event.create('custommachinery:chiaroscuro_forge')
		.scene('chiaroscuro_forge', 'Chiaroscuro Forge', 'techev:chiaroscuro_forge', (scene, util) => {

			scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.UP);
			scene.idle(10);
			scene.world.showSection([0, 1, 0, 4, 4, 4], Facing.DOWN);

			scene.text(50, 'First, build the casing shell with the Schematicannon.', [2, 4, 2])
				.placeNearTarget()
			scene.idle(50);

			scene.world.hideSection([1, 3, 1, 3, 3, 3], Facing.UP);
			scene.idle(15);
			scene.text(50, 'Shadow Steel and Refined Radiance casings must alternate to bind light and darkness.', [2, 2, 2])
				.placeNearTarget()
				.attachKeyFrame();
			scene.idle(55);

			scene.text(45, 'Place the Chiaroscuro Forge inside the hollow core.', [2.5, 2.5, 2.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(45, [2.5, 2.5, 2.5], "right").withItem('custommachinery:chiaroscuro_forge');
			scene.world.setBlock([2, 2, 2], 'custommachinery:chiaroscuro_forge', false);
			scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
				nbt.machineID = "custommachinery:chiaroscuro_forge";
				return nbt;
			});
			scene.idle(50);

			scene.text(30, 'Feed it a Chromatic Compound and a fluid.', [2.5, 3, 2.5])
				.placeNearTarget()
				.attachKeyFrame();
			let compound = scene.world.createItemEntity([2.5, 3.5, 2.5], [0, 0.1, 0], 'create:chromatic_compound');
			scene.idle(20);
			scene.world.removeEntity(compound);
			scene.idle(15);

			scene.text(50, 'The Chiaroscuro Forge now refines Radiance and Shadow Steel.', [2.5, 3, 2.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
				nbt.status = "running";
				return nbt;
			});
			scene.world.modifyBlocks([2, 2, 2], (state) => state, false);
			scene.idle(55);
			scene.world.showSection([1, 3, 1, 3, 3, 3], Facing.DOWN);

			let previousEase = 0;
			for (let i = 1; i <= 45; i++) {
				let ease = (1 - Math.cos(i / 45 * KMath.PI));
				scene.rotateCameraY(180 * (ease - previousEase));
				scene.idle(1);
				previousEase = ease;
			}

		});
});
