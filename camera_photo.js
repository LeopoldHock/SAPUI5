// Library available here: https://github.com/mebjas/html5-qrcode
// Copy HTML5Qrcode.js into "libs" directory in SAPUI5 root directory.
  qrScannerRequest: function () {
		var that = this;
		var containerId = this.getView().byId("qrContainer").sId; // qrContainer is just a simple <div>: <html:div id="qrContainer"></html:div>
		if (containerId) {
			qrCodeReader = new Html5Qrcode(containerId);
			// This method will trigger user permission request
			Html5Qrcode.getCameras().then(function (devices) {
				if (devices && devices.length) {
					var cameraId = devices[0].id;
					that.qrScannerStart(cameraId);
				}
			}).catch(function (error) {
				console.error(error);
			});
        } else {
			console.error("Unable to find QR container ID.");
		}
	},

    qrScannerStart: function (cameraId) {
		var that = this;
		qrCodeReader.start(
			cameraId, {
				fps: 10, // Optional frame per seconds for qr code scanning
				qrbox: 250 // Optional if you want bounded box UI
			},
			function (result) {
				var url = result;
				that.qrScannerStop();
			}).catch(function (error) {
			// do nothing
		});
	},
        
    qrScannerStop: function () {
		var that = this;
		qrCodeReader.stop().then(function (ignore) {
			// QR Code scanning is stopped.
		}).catch(function (error) {
			console.error(error);
			// Stop failed, handle it.
		});
	}
