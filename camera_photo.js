 startWebcam: function () {
                var that = this;
                if (navigator.getUserMedia) {
                    navigator.getUserMedia(

 

                        // constraints
                        {
                            video: true,
                            audio: false
                        },
                        // successCallback
                        function (localMediaStream) {
                            video = document.querySelector("video");
                            var blob = new Blob([video]);
                            var url = URL.createObjectURL(blob);
                            //video.src = window.URL.createObjectURL(localMediaStream);
                            //URL.revokeObjectURL(url);
                            webcamStream = localMediaStream;
                            var mediaStreamTrack = webcamStream.getVideoTracks()[0];
                            var imageCapture = new ImageCapture(mediaStreamTrack);
                            that.takePhoto(imageCapture);
                        },
                        // errorCallback
                        function (error) {
                            console.log("The following error occured: " + error);
                        }
                    );
                } else {
                    console.log("getUserMedia not supported");
                }
            },

 

            takePhoto: function (imageCapture) {
                var that = this;
                //    var img = imageCapture || document.querySelector("img");
                imageCapture.takePhoto().then(function (blob) {
                    var img = that.getView().byId("camImage");
                    img.setActiveSrc(window.URL.createObjectURL(blob));
                    //img.classList.remove("hidden");
                    //img.src = URL.createObjectURL(blob);
                    console.log("Took photo:", window.URL.createObjectURL(blob));
                    console.log(img.getActiveSrc());
                }).catch(function (error) {
                    console.log("takePhoto() error: ", error);
                });
                /*
                imageCapture.takePhoto(
                    function (blob) {
                        var url = window.URL.createObjectURL(blob);
                        img.src = url;
                        window.URL.revokeObjectURL(url);
                    },
                    function (error) {
                        console.log("The following error occured: " + error);
                    });
                
                .then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    img.src = url;

 

                    window.URL.revokeObjectURL(url);
                })*/
