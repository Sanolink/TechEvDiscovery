Ponder.registry(event => {
	event.create('custommachinery:singularity_extractor')
		.scene('singularity_extractor', 'Singularity Extractor', 'techev:singularity_extractor', (scene, util) => {

			scene.showStructure();
			scene.scaleSceneView(0.9);
			scene.setSceneOffsetY(-0.5);
			scene.world.modifyBlocks([0, 0, 0, 6, 4, 6], (curState) => curState.with("state", "offline"), false);

			scene.text(50, 'First, build the main structure with the Schematicannon.', [2, 5.5, 3])
				.placeNearTarget()
				.attachKeyFrame();
			scene.idle(50);

			scene.world.hideSection([3, 2, 3], Facing.UP);
			scene.idle(10);
			scene.world.hideSection([0, 3, 0, 6, 4, 6], Facing.UP);
			scene.idle(10);

			scene.text(40, 'Place a temporary support block at the center.', [3, 2, 3])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.setBlock([3, 1, 3], 'minecraft:dirt', false);
			scene.idle(45);

			scene.text(45, 'Drop a Corrupti Dust and a Dark Matter to create a Black Hole.', [3, 3, 3])
				.placeNearTarget()
				.attachKeyFrame();
			let corrupti = scene.world.createItemEntity([3.5, 2.5, 3.5], [0, 0.2, 0], 'forbidden_arcanus:corrupti_dust');
			let darkmatter = scene.world.createItemEntity([3.5, 2.5, 3.5], [0, 0.2, 0], 'forbidden_arcanus:dark_matter');
			scene.idle(10);
			scene.world.removeEntity(corrupti);
			scene.world.removeEntity(darkmatter);
			scene.world.showSection([3, 2, 3], Facing.DOWN);
			scene.idle(45);

			scene.text(50, 'Be careful - the Black Hole absorbs any nearby dropped items!', [3, 3, 3])
				.placeNearTarget();
			scene.idle(55);

			scene.text(40, 'You can now remove the support block.', [3, 2, 3])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.destroyBlock([3, 1, 3]);
			scene.idle(45);

			scene.world.showSection([0, 3, 0, 6, 4, 6], Facing.DOWN);
			scene.idle(20);
			scene.text(45, 'Place the Singularity Extractor on top of the structure.', [3, 5.5, 3])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.setBlock([3, 4, 3], 'custommachinery:singularity_extractor', false);
			scene.world.modifyBlockEntityNBT([3, 4, 3], (nbt) => {
				nbt.machineID = "custommachinery:singularity_extractor";
				return nbt;
			});
			scene.idle(50);

			scene.text(40, 'Provide energy to activate the structure.', [3, 5.5, 6])
				.placeNearTarget()
				.attachKeyFrame();
			scene.world.modifyBlocks([0, 0, 0, 6, 4, 6], (curState) => curState.with("state", "online"), false);
			scene.world.modifyBlockEntityNBT([3, 4, 3], (nbt) => {
				nbt.status = "running";
				return nbt;
			});
			scene.idle(45);

			scene.text(50, 'The Singularity Extractor is now fully operational.', [3, 5.5, 0])
				.placeNearTarget()
				.attachKeyFrame();
			scene.idle(50);
		});
});