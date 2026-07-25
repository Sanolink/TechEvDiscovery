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
	event.create('custommachinery:soul_harvester')
		.scene('soul_harvester', 'Soul Harvester', 'techev:soul_harvester', (scene, util) => {

			scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.UP);
			scene.idle(10);
			scene.world.showSection([0, 1, 0, 6, 6, 6], Facing.DOWN);
			scene.scaleSceneView(0.9);
			scene.setSceneOffsetY(-0.5);

			scene.text(45, 'First, build the ritual altar with the Schematicannon.', [3.5, 2.5, 3.5])
				.placeNearTarget()
			scene.idle(50);

			scene.text(65, 'Place an Unholy Symbol on the left Stone Hand and a Holy Symbol on the right one.', [3.5, 1.5, 3.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(65, [2.5, 2.5, 4.5], "left").rightClick().withItem("eidolon:unholy_symbol");
			scene.showControls(65, [4.5, 2.5, 4.5], "right").rightClick().withItem("eidolon:holy_symbol");
			scene.world.modifyBlockEntityNBT([2, 2, 4], (nbt) => {
				nbt.stack = { id: "eidolon:unholy_symbol", Count: NBT.byteTag(1) };
				return nbt;
			});
			scene.world.modifyBlockEntityNBT([4, 2, 4], (nbt) => {
				nbt.stack = { id: "eidolon:holy_symbol", Count: NBT.byteTag(1) };
				return nbt;
			});
			scene.idle(70);

			scene.text(45, 'Set a Lesser Soul Gem on the central Brazier.', [3.5, 2.5, 3.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(45, [3.5, 2.5, 3.5], "right").rightClick().withItem("eidolon:lesser_soul_gem");
			scene.world.modifyBlockEntityNBT([3, 2, 3], (nbt) => {
				nbt.stack = { id: "eidolon:lesser_soul_gem", Count: NBT.byteTag(1) };
				return nbt;
			});
			scene.idle(50);
			
			scene.text(45, 'Place the Soul Harvester in front of the altar.', [3.5, 1.5, 1.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(45, [3.5, 1.5, 1.5], "right").withItem('custommachinery:soul_harvester');
			scene.world.setBlock([3, 1, 1], 'custommachinery:soul_harvester', false);
			scene.world.modifyBlockEntityNBT([3, 1, 1], (nbt) => {
				nbt.machineID = "custommachinery:soul_harvester";
				return nbt;
			});
			scene.idle(50);
			
			scene.text(50, 'The Soul Harvester now draws wandering souls into Soul Shards.', [3.5, 2.5, 3.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.modifyBlockEntityNBT([3, 1, 1], (nbt) => {
				nbt.status = "running";
				return nbt;
			});
			scene.world.modifyBlocks([3, 1, 1], (state) => state, false);
			scene.idle(55);

			let previousEase = 0;
			for (let i = 1; i <= 45; i++) {
				let ease = (1 - Math.cos(i / 45 * KMath.PI));
				scene.rotateCameraY(180 * (ease - previousEase));
				scene.idle(1);
				previousEase = ease;
			}

		});
});
