import * as MRE from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	private base: MRE.Actor = null;
	private minone: MRE.Actor = null;
	private mintwo: MRE.Actor = null;
	private secone: MRE.Actor = null;
	private sectwo: MRE.Actor = null;
	private onoff: MRE.Actor = null;
	private assets: MRE.AssetContainer;

	constructor(private context: MRE.Context) {
		this.context.onStarted(() => this.started());
	}

	public async started() {
		let mynumber = 0;

		this.assets = new MRE.AssetContainer(this.context);
		
		const baseData = await this.assets.loadGltf('baseo.glb', "box");
		const baseData0 = await this.assets.loadGltf('0.glb', "box");
		const baseData1 = await this.assets.loadGltf('1.glb', "box");
		const baseData2 = await this.assets.loadGltf('2.glb', "box");
		const baseData3 = await this.assets.loadGltf('3.glb', "box");
		const baseData4 = await this.assets.loadGltf('4.glb', "box");
		const baseData5 = await this.assets.loadGltf('5.glb', "box");
		const baseData6 = await this.assets.loadGltf('6.glb', "box");
		const baseData7 = await this.assets.loadGltf('7.glb', "box");
		const baseData8 = await this.assets.loadGltf('8.glb', "box");
		const baseData9 = await this.assets.loadGltf('9.glb', "box");
		const baseDataNull = await this.assets.loadGltf('null.glb', "box");
		const baseDataOn = await this.assets.loadGltf('on.glb', "box");
		const baseDataOff = await this.assets.loadGltf('off.glb', "box");
		let baseMinOne = await this.assets.loadGltf('null.glb', "box");
		let baseMinTwo = await this.assets.loadGltf('null.glb', "box");
		let baseSecOne = await this.assets.loadGltf('null.glb', "box");
		let baseSecTwo = await this.assets.loadGltf('null.glb', "box");
		let baseOnOff = await this.assets.loadGltf('off.glb', "box");	

		this.secone = MRE.Actor.CreateFromPrefab(this.context, {
			firstPrefabFrom: baseDataNull,
			actor: {
				name: 'I3V-SecOne',
				transform: {
					local: {
						position: { x: 1.47, y: -3.95, z: 3 },
						scale: { x: 36.5, y: 36.5, z: 36.5 }
					}
				}
			}
		});

		this.sectwo = MRE.Actor.CreateFromPrefab(this.context, {
			firstPrefabFrom: baseDataNull,
			actor: {
				name: 'I3V-SecTwo',
				transform: {
					local: {
						position: { x: 1.31, y: -3.95, z: 3 },
						scale: { x: 36.5, y: 36.5, z: 36.5 }
					}
				}
			}
		});

		this.minone = MRE.Actor.CreateFromPrefab(this.context, {
			firstPrefabFrom: baseDataNull,
			actor: {
				name: 'I3V-MinOne',
				transform: {
					local: {
						position: { x: 1.045, y: -3.95, z: 3 },
						scale: { x: 36.5, y: 36.5, z: 36.5 }
					}
				}
			}
		});

		this.mintwo = MRE.Actor.CreateFromPrefab(this.context, {
			firstPrefabFrom: baseDataNull,
			actor: {
				name: 'I3V-MinTwo',
				transform: {
					local: {
						position: { x: 0.885, y: -3.95, z: 3 },
						scale: { x: 36.5, y: 36.5, z: 36.5 }
					}
				}
			}
		});

		this.onoff = MRE.Actor.CreateFromPrefab(this.context, {
			firstPrefabFrom: baseOnOff,
			actor: {
				name: 'I3V-OnOff',
				transform: {
					local: {
						position: { x: 0.87, y: -3.13, z: 2.42 },
						scale: { x: 30, y: 30, z: 30 }
					}
				}
			}
		});

		this.base = MRE.Actor.CreateFromPrefab(this.context, {
			firstPrefabFrom: baseData,
			actor: {
				name: 'I3V-base',
				transform: {
					local: {
						position: { x: 13.6, y: -6.94, z: 5.06 },
						scale: { x: 300, y: 60, z: 60 }
					}
				}
			}
		});

		let counter = 0;
		setInterval(() => {
			this.onoff.destroy();
			if ((counter % 2) === 0) {
				baseOnOff = baseDataOff; 
			} else {
				baseOnOff = baseDataOn;
			}
			this.onoff = MRE.Actor.CreateFromPrefab(this.context, {
				firstPrefabFrom: baseOnOff,
				actor: {
					name: 'I3V-OnOff',
					transform: {
						local: {
							position: { x: 0.87, y: -3.13, z: 2.42 },
							scale: { x: 30, y: 30, z: 30 }
						}
					}
				}
			});
			counter++;
		}, 500);

		setInterval(() => {
			let tempNumber = "";
			let formattedNumber = "";
			if (mynumber < 10) {
				formattedNumber = "000" + mynumber.toString();
			} else if (mynumber < 600) {

				if (mynumber % 60 < 10) {
					formattedNumber = "0" + Math.floor(mynumber / 60).toString() + "0" + (mynumber % 60).toString();
				} else {
					formattedNumber = "0" + Math.floor(mynumber / 60).toString() + "" + (mynumber % 60).toString();
				}
			} else {
				if (mynumber % 60 < 10) {
					formattedNumber = Math.floor(mynumber / 60).toString() + "0" + (mynumber % 60).toString();
				} else {
					formattedNumber = Math.floor(mynumber / 60).toString() + "" + (mynumber % 60).toString();
				}
			}
			tempNumber = formattedNumber.charAt(3);
			this.secone.destroy();
			if (tempNumber === "0") {
				baseSecOne = baseData0;
			} else if (tempNumber === "1") {
				baseSecOne = baseData1;
			} else if (tempNumber === "2"){
				baseSecOne = baseData2;
			} else if (tempNumber === "3") {
				baseSecOne = baseData3;
			} else if (tempNumber === "4") {
				baseSecOne = baseData4;
			} else if (tempNumber === "5") {
				baseSecOne = baseData5;
			} else if (tempNumber === "6") {
				baseSecOne = baseData6;
			} else if (tempNumber === "7") {
				baseSecOne = baseData7;
			} else if (tempNumber === "8") {
				baseSecOne = baseData8;
			} else if (tempNumber === "9") {
				baseSecOne = baseData9;
			} else {
				baseSecOne = baseDataNull;
			} 
			this.secone = MRE.Actor.CreateFromPrefab(this.context, {
				firstPrefabFrom: baseSecOne,
				actor: {
					name: 'I3V-SecOne',
					transform: {
						local: {
							position: { x: 1.47, y: -3.95, z: 3 },
							scale: { x: 36.5, y: 36.5, z: 36.5 }
						}
					}
				}
			});

			tempNumber = formattedNumber.charAt(2);
			this.sectwo.destroy();
			if (tempNumber === "0") {
				baseSecTwo = baseData0;
			} else if (tempNumber === "1") {
				baseSecTwo = baseData1;
			} else if (tempNumber === "2") {
				baseSecTwo = baseData2;
			} else if (tempNumber === "3") {
				baseSecTwo = baseData3;
			} else if (tempNumber === "4") {
				baseSecTwo = baseData4;
			} else if (tempNumber === "5") {
				baseSecTwo = baseData5;
			} else if (tempNumber === "6") {
				baseSecTwo = baseData6;
			} else if (tempNumber === "7") {
				baseSecTwo = baseData7;
			} else if (tempNumber === "8") {
				baseSecTwo = baseData8;
			} else if (tempNumber === "9") {
				baseSecTwo = baseData9;
			} else {
				baseSecTwo = baseDataNull;
			}
			this.sectwo = MRE.Actor.CreateFromPrefab(this.context, {
				firstPrefabFrom: baseSecTwo,
				actor: {
					name: 'I3V-SecTwo',
					transform: {
						local: {
							position: { x: 1.31, y: -3.95, z: 3 },
							scale: { x: 36.5, y: 36.5, z: 36.5 }
						}
					}
				}
			});


			tempNumber = formattedNumber.charAt(1);
			this.minone.destroy();
			if (tempNumber === "0") {
				baseMinOne = baseData0;
			} else if (tempNumber === "1") {
				baseMinOne = baseData1;
			} else if (tempNumber === "2") {
				baseMinOne = baseData2;
			} else if (tempNumber === "3") {
				baseMinOne = baseData3;
			} else if (tempNumber === "4") {
				baseMinOne = baseData4;
			} else if (tempNumber === "5") {
				baseMinOne = baseData5;
			} else if (tempNumber === "6") {
				baseMinOne = baseData6;
			} else if (tempNumber === "7") {
				baseMinOne = baseData7;
			} else if (tempNumber === "8") {
				baseMinOne = baseData8;
			} else if (tempNumber === "9") {
				baseMinOne = baseData9;
			} else {
				baseMinOne = baseDataNull;
			}
			this.minone = MRE.Actor.CreateFromPrefab(this.context, {
				firstPrefabFrom: baseMinOne,
				actor: {
					name: 'I3V-MinOne',
					transform: {
						local: {
							position: { x: 1.045, y: -3.95, z: 3 },
							scale: { x: 36.5, y: 36.5, z: 36.5 }
						}
					}
				}
			});

			tempNumber = formattedNumber.charAt(0);
			this.mintwo.destroy();
			if (tempNumber === "0") {
				baseMinTwo = baseData0;
			} else if (tempNumber === "1") {
				baseMinTwo = baseData1;
			} else if (tempNumber === "2") {
				baseMinTwo = baseData2;
			} else if (tempNumber === "3") {
				baseMinTwo = baseData3;
			} else if (tempNumber === "4") {
				baseMinTwo = baseData4;
			} else if (tempNumber === "5") {
				baseMinTwo = baseData5;
			} else if (tempNumber === "6") {
				baseMinTwo = baseData6;
			} else if (tempNumber === "7") {
				baseMinTwo = baseData7;
			} else if (tempNumber === "8") {
				baseMinTwo = baseData8;
			} else if (tempNumber === "9") {
				baseMinTwo = baseData9;
			} else {
				baseMinTwo = baseDataNull;
			}
			this.mintwo = MRE.Actor.CreateFromPrefab(this.context, {
				firstPrefabFrom: baseMinTwo,
				actor: {
					name: 'I3V-MinTwo',
					transform: {
						local: {
							position: { x: 0.885, y: -3.95, z: 3 },
							scale: { x: 36.5, y: 36.5, z: 36.5 }
						}
					}
				}
			});
			mynumber++;
		}, 1000);
	}

}
