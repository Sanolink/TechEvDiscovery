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
	event.create('custommachinery:singularity_extractor')
		.scene('singularity_extractor', 'Singularity Extractor', 'techev:singularity_extractor', (scene, util) => {

			scene.world.showSection([0, 0, 0, 8, 0, 8], Facing.UP);
			scene.idle(10);
			scene.world.showSection([0, 1, 0, 8, 8, 8], Facing.DOWN);
			scene.scaleSceneView(0.8);
			scene.setSceneOffsetY(-1);
			scene.world.modifyBlocks([1, 1, 1, 7, 5, 7], (curState) => curState.with("state", "offline"), false);

			scene.text(50, 'First, build the main structure with the Schematicannon.', [3, 6.5, 4])
				.placeNearTarget()
			scene.idle(50);

			scene.world.hideSection([4, 3, 4], Facing.UP);
			scene.idle(10);
			scene.world.hideSection([1, 4, 1, 7, 5, 7], Facing.UP);
			scene.idle(10);

			scene.text(40, 'Place a temporary support block at the center.', [4, 3, 4])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.setBlock([4, 2, 4], 'minecraft:dirt', false);
			scene.idle(45);

			scene.text(45, 'Drop a Corrupti Dust and a Dark Matter to create a Black Hole.', [4, 4, 4])
				.placeNearTarget()
				.attachKeyFrame();
			let corrupti = scene.world.createItemEntity([4.5, 3.5, 4.5], [0, 0.2, 0], 'forbidden_arcanus:corrupti_dust');
			let darkmatter = scene.world.createItemEntity([4.5, 3.5, 4.5], [0, 0.2, 0], 'forbidden_arcanus:dark_matter');
			scene.idle(10);
			scene.world.removeEntity(corrupti);
			scene.world.removeEntity(darkmatter);
			scene.world.showSection([4, 3, 4], Facing.DOWN);
			scene.idle(45);

			scene.text(50, 'Be careful - the Black Hole absorbs any nearby dropped items!', [4, 4, 4])
				.placeNearTarget();
			scene.idle(55);

			scene.text(40, 'You can now remove the support block.', [4, 3, 4])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.destroyBlock([4, 2, 4]);
			scene.idle(45);

			scene.world.showSection([1, 4, 1, 7, 5, 7], Facing.DOWN);
			scene.idle(20);
			scene.text(45, 'Place the Singularity Extractor on top of the structure.', [4, 6.5, 4])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(45, [4, 6.5, 4], "right").withItem('custommachinery:singularity_extractor')
			scene.world.setBlock([4, 5, 4], 'custommachinery:singularity_extractor', false);
			scene.world.modifyBlockEntityNBT([4, 5, 4], (nbt) => {
				nbt.machineID = "custommachinery:singularity_extractor";
				return nbt;
			});
			scene.idle(50);

			scene.text(40, 'Provide energy to activate the structure.', [4, 6.5, 7])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.modifyBlocks([1, 1, 1, 7, 5, 7], (curState) => curState.with("state", "online"), false);
			scene.world.modifyBlockEntityNBT([4, 5, 4], (nbt) => {
				nbt.status = "running";
				return nbt;
			});
			scene.idle(45);

			scene.text(50, 'The Singularity Extractor is now fully operational.', [4, 6.5, 1])
				.placeNearTarget()
				.attachKeyFrame();
			scene.idle(50);

			let previousEase = 0;
			for (let i = 1; i <= 45; i++) {
				let ease = (1 - Math.cos(i / 45 * KMath.PI));
				scene.rotateCameraY(180 * (ease - previousEase));
				scene.idle(1);
				previousEase = ease;
			}

		});
});