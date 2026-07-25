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
	event.create(['custommachinery:circuit_etcher', 'pneumaticcraft:assembly_program_drill_laser'])
		.scene('circuit_etcher', 'Circuit Etcher', 'techev:circuit_etcher', (scene, util) => {

			scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.UP);
			scene.idle(10);
			scene.world.showSection([0, 1, 0, 6, 6, 6], Facing.DOWN);
			scene.scaleSceneView(0.9);
			scene.setSceneOffsetY(-0.5);

			scene.text(50, 'First, build the pressure chamber with the Schematicannon.', [3, 5, 3])
				.placeNearTarget()
			scene.idle(50);

			scene.idle(15);
			scene.text(50, 'Inside, sit the Drill and Lazer Assembly Program on the Platform.', [3.5, 2.5, 2.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(55, [3.5, 2.5, 2.5], "up").rightClick().withItem("pneumaticcraft:assembly_program_drill_laser");
			scene.world.modifyBlockEntityNBT([3, 2, 2], (nbt) => {
				nbt.Item = { id: "pneumaticcraft:assembly_program_drill_laser", Count: NBT.byteTag(1) };
				nbt.Items = {Size: 1, Items: [{Slot: 0, id: "pneumaticcraft:assembly_program_drill_laser", Count: NBT.byteTag(1)}]};
				return nbt;
			});
			scene.idle(55);

			scene.idle(20);
			scene.text(45, 'Place the Circuit Etcher in front of the chamber.', [3.5, 1.5, 0.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(45, [3.5, 1.5, 0.5], "right").withItem('custommachinery:circuit_etcher');
			scene.world.setBlock([3, 1, 0], 'custommachinery:circuit_etcher', false);
			scene.world.modifyBlockEntityNBT([3, 1, 0], (nbt) => {
				nbt.machineID = "custommachinery:circuit_etcher";
				return nbt;
			});
			scene.idle(50);

			scene.text(40, 'Feed it with ingredients.', [3.5, 1.5, 0.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.idle(45);

			scene.text(50, 'The Circuit Etcher now etches Printed Circuit Boards.', [3, 3, 3])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.modifyBlockEntityNBT([3, 1, 0], (nbt) => {
				nbt.status = "running";
				return nbt;
			});
			scene.world.modifyBlocks([3, 1, 0], (state) => state, false);
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
