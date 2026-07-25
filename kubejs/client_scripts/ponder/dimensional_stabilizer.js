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
	const DustParticleOptions = Java.loadClass('net.minecraft.core.particles.DustParticleOptions');
	const Vector3f = Java.loadClass('com.mojang.math.Vector3f');
	const Purple = new DustParticleOptions(new Vector3f(0.6, 0.0, 0.8), 1.0);

	event.create('custommachinery:dimensional_stabilizer')
		.scene('dimensional_stabilizer', 'Dimensional Stabilizer', 'techev:dimensional_stabilizer', (scene, util) => {

			scene.world.showSection([0, 0, 0, 8, 0, 8], Facing.UP);
			scene.idle(10);
			scene.world.showSection([0, 1, 0, 8, 8, 8], Facing.DOWN);
			scene.scaleSceneView(0.7);
			scene.setSceneOffsetY(-1.5);

	
			let pedestals = [[3, 2, 3], [3, 2, 5], [5, 2, 3], [5, 2, 5]];
			let obelisks = [[4, 8, 1], [1, 8, 4], [4, 8, 7], [7, 8, 4]];

			scene.text(45, 'First, build the ritual structure with the Schematicannon.', [4, 6, 4])
				.placeNearTarget()
			scene.idle(50);

			scene.world.hideSection([1, 6, 1, 7, 8, 7], Facing.UP);
			scene.idle(20);

			scene.text(45, 'Place the Dimensional Stabilizer at the core of the structure.', [4.5, 5.5, 4.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(45, [4.5, 5.5, 4.5], "right").withItem('custommachinery:dimensional_stabilizer');
			scene.world.setBlock([4, 5, 4], 'custommachinery:dimensional_stabilizer', false);
			scene.world.modifyBlockEntityNBT([4, 5, 4], (nbt) => {
				nbt.machineID = "custommachinery:dimensional_stabilizer";
				return nbt;
			});
			scene.idle(50);

			scene.world.showSection([1, 6, 1, 7, 8, 7], Facing.DOWN);
			scene.idle(20);

			scene.text(45, 'Set Ice Shards on one or all four Arcane Pedestals.', [3.5, 2.5, 3.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.showControls(45, [3.5, 2.5, 3.5], "right").withItem('ad_astra:ice_shard');
			pedestals.forEach(p => {
				scene.world.modifyBlockEntityNBT(p, (nbt) => {
					nbt.itemStack = { id: "ad_astra:ice_shard", Count: NBT.byteTag(1) };
					return nbt;
				});
			});
			scene.idle(50);

			scene.text(45, 'The obelisks channel the ritual.', [4.5, 8, 1.5])
				.placeNearTarget()
				.attachKeyFrame();
			obelisks.forEach(p => {
				scene.effects.emitParticles([p[0] + 0.5, p[1] + 0.9, p[2] + 0.5], (world, x, y, z) => {
					world.addParticle(Purple, x, y, z, 0, 0.03, 0);
				}, 1, 100);
			})
			scene.world.modifyBlockEntityNBT([4, 5, 4], (nbt) => {
				nbt.status = "running";
				return nbt;
			});
			scene.world.modifyBlocks([4, 5, 4], (state) => state, false);
			scene.idle(50);

			scene.text(50, 'Ice Shards are transmuted into Dimensional Shards.', [3.5, 2.5, 3.5])
				.placeNearTarget()
				.attachKeyFrame();
			scene.idle(20);
			pedestals.forEach(p => {
				scene.effects.emitParticles([p[0] + 0.5, p[1] + 0.9, p[2] + 0.5], (world, x, y, z) => {
					world.addParticle(Purple, x, y, z, 0, 0.03, 0);
				}, 1, 30);
			})
			scene.idle(30)
			pedestals.forEach(p => {
				scene.world.modifyBlockEntityNBT(p, (nbt) => {
					nbt.itemStack = { id: "rftoolsbase:dimensionalshard", Count: NBT.byteTag(1) };
					return nbt;
				});
			});
			scene.idle(40);

			let previousEase = 0;
			for (let i = 1; i <= 45; i++) {
				let ease = (1 - Math.cos(i / 45 * KMath.PI));
				scene.rotateCameraY(180 * (ease - previousEase));
				scene.idle(1);
				previousEase = ease;
			}

		});
});
