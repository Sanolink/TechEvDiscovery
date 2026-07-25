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
	event.create('custommachinery:precision_assembler')
		.scene('precision_assembler', 'Precision Assembler', 'techev:precision_assembler', (scene, util) => {

			scene.world.showSection([0, 0, 0, 8, 0, 8], Facing.UP);
			scene.idle(10);
			scene.world.showSection([0, 1, 0, 8, 8, 8], Facing.DOWN);
			scene.scaleSceneView(0.8);
			scene.setSceneOffsetY(-1);

			scene.text(50, 'First, build the main structure with the Schematicannon.', [4, 5, 4])
				.placeNearTarget()
			scene.idle(50);

			scene.world.hideSection([1, 4, 2, 7, 5, 6], Facing.UP);
			scene.idle(15)
			scene.text(45, 'Place the Precision Assembler at the heart of the frame.', [4.5, 3.5, 4.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(45, [4.5, 3.5, 4.5], "right").withItem('custommachinery:precision_assembler');
			scene.world.setBlock([4, 3, 4], 'custommachinery:precision_assembler', false);
			scene.world.modifyBlockEntityNBT([4, 3, 4], (nbt) => {
				nbt.machineID = "custommachinery:precision_assembler";
				return nbt;
			});
			scene.idle(50);

			scene.world.hideSection([1, 2, 2, 7, 3, 6], Facing.UP);
			scene.idle(20);
			scene.text(40, 'Supply rotational force at the bottom to drive the assembly.', [4.5, 2, 5.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.setKineticSpeed([1, 1, 2, 7, 7, 8], 80);
			scene.idle(45);

			scene.world.showSection([1, 2, 2, 7, 3, 6], Facing.DOWN);
			scene.idle(15);
			scene.text(50, 'Belts carry the components from one edge', [7.5, 3.5, 4.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.idle(30)
			scene.text(20, 'to the other.', [1.5, 3.5, 4.5])
				.placeNearTarget()
			scene.idle(55);

			scene.text(50, 'The Precision Assembler is now ready to craft advanced components.', [4.5, 3.5, 4.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.modifyBlockEntityNBT([4, 3, 4], (nbt) => {
				nbt.status = "running";
				return nbt;
			});
			scene.world.modifyBlocks([4, 3, 4], (state) => state, false);
			scene.idle(55);
			scene.world.showSection([1, 4, 2, 7, 5, 6], Facing.DOWN);

			let previousEase = 0;
			for (let i = 1; i <= 45; i++) {
				let ease = (1 - Math.cos(i / 45 * KMath.PI));
				scene.rotateCameraY(180 * (ease - previousEase));
				scene.idle(1);
				previousEase = ease;
			}

		});
});
