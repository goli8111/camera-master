(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{30:function(e,t,a){},55:function(e,t,a){e.exports=a(75)},60:function(e,t,a){},61:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=(a(60),a(61),a(4));function s(e){return{type:"SET_SCENE",_change_scene:e}}function l(e){return{type:"SETSELECTIMGINDEX",_selectImgIndex:e}}var m=a(92),u=(a(30),a(3)),d=a(94),p=Object(m.a)((function(e){return{root:{width:"100%",height:"100%"},ContentsText:{textAlign:"left"}}})),g={set_scene:s},h=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),g)((function(e){console.log("PortraitMasterContentsIntro component start");var t=p();return o.a.createElement("div",{className:t.root},o.a.createElement("center",null,o.a.createElement("h2",null,o.a.createElement("b",null,"\uc2a4\ub9c8\ud2b8\ud3f0 \uc778\ubb3c\uc0ac\uc9c4 \ub9c8\uc2a4\ud130")),o.a.createElement("img",{src:"/camera-master/img/camera-master-intro.jpg"}),";",o.a.createElement("h5",null,"\uc624\ub4dc\ub9ac \ud5f5\ubc88 by \uc720\uc218\ud504 \uce74\uc26c, 1956")),o.a.createElement("div",{className:t.ContentsText},o.a.createElement("h4",null,"\uc2a4\ub9c8\ud2b8\ud3f0\uc73c\ub85c ",o.a.createElement("b",null,"\uc778\ubb3c\uc0ac\uc9c4 \ub9c8\uc2a4\ud130"),"\uc5d0 \ub3c4\uc804\ud569\ub2c8\ub2e4."),o.a.createElement("h5",null,"\ub298 \uc6b0\ub9ac\uc640 \ud568\uaed8 \ud558\ub294 \uc2a4\ub9c8\ud2b8\ud3f0. \uc791\uace0 \uac00\ubcbc\uc6b4 \uc2a4\ub9c8\ud2b8\ud3f0\uc774\uc9c0\ub9cc, \uc2a4\ub9c8\ud2b8\ud3f0 \uce74\uba54\ub77c\uc758 \uc131\ub2a5\uc740 \uacb0\uace0 \uac00\ubccd\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ubb34\ub824 ",o.a.createElement("b",null,"\ucd2c\uc601, \ud3b8\uc9d1, \ubcf4\uc815\uc744 \ud55c \ud050\uc5d0 \ub05d\ub0bc \uc218 \uc788\ub294")," \uac15\ub825\ud55c \ub3c4\uad6c\uc8e0.",o.a.createElement("br",null),o.a.createElement("br",null),"\ubaa8\ub378\uc758 \ub9c8\uc74c\uae4c\uc9c0 \ud6d4\uce58\ub294 \uc2a4\ub9c8\ud2b8\ud3f0 \uc778\ubb3c\uc0ac\uc9c4 \ub178\uc6b0-\ud558\uc6b0\ub97c ",o.a.createElement("b",null,"\ub9c8\uc2a4\ud130\uc640 \ud568\uaed8")," \ubc30\uc6cc \ub098\uac11\ub2c8\ub2e4. \ud018\uc2a4\ud2b8 \ud2b9\uc131\uc5d0 \ub9de\ub294 \ub9de\ucda4 \uce74\uba54\ub77c\ub97c \uc81c\uacf5\ud574 \ub4dc\ub9ac\ub2c8, \ud55c \ubc1c\uc9dd\uc529 \uc27d\uac8c \ub530\ub77c\uc624\uc2e4 \uc218 \uc788\uc744 \uac70\uc608\uc694.")))})),f=(a(76),Object(m.a)((function(e){return{root:{width:"100%",height:"100%",overflow:"hidden"},left_title:{position:"absolute",left:"0"},right_title:{position:"absolute",top:"5px",right:"10px",height:"3%"},ImgList:{display:"flex",overflow:"auto"}}}))),v={set_scene:s,SetSelectImgIndex:l},b=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_canvasData:e.camera._canvasData}}),v)((function(e){var t=e.set_scene,a=e.SetSelectImgIndex,r=e._canvasData;console.log("PortraitMasterSimpleCaptureList component start");var i=f();Object(n.useEffect)((function(){c()}),[]);var c=function(){if(console.log("onUploadImageList"),void 0!=window.HybridApp)for(var e=window.HybridApp.GetDirectoryFileCount(),t=0;t<e;t++){var a=window.HybridApp.GetImageDataFromDirectory(t);s(t,a)}else for(t=0;t<r.length;t++)s(t,r[t])},s=function(e,n){var o=document.createElement("img");o.style.width="90%",o.style.height="auto",o.style.margin="5px",o.src=n,o.onclick=function(){console.log("img click index:"+e),a(e),t("FullScreenCaptureList")},document.getElementById("imagelist").appendChild(o)};return o.a.createElement("div",{className:i.root},o.a.createElement("div",{className:i.left_title},"\ub0b4 \uc0ac\uc9c4"),o.a.createElement("img",{className:i.right_title,onClick:function(){console.log("onClickGridCaptureList"),t("GridCaptureList")},src:"/camera-master/img/image-modify-icon.png"}),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",{id:"imagelist",className:"SimpleCaptureImageList"})))})),C=Object(m.a)((function(e){return{root:{width:"100%"},ContentsBody:{position:"absolute",width:"100%",left:"0px",top:"0px",bottom:"50px",display:"grid",gridTemplateRows:"50% 50%"},BottomBarBack:{position:"fixed",backgroundColor:"#FFFFFF88",width:"100%",height:"11%",top:"89%",left:"0%"},BottomBarButtonBase:{position:"fixed",height:"8%",top:"90%",background:"linear-gradient(90deg, #cc6699 30%, #6666ff 80%)",borderRadius:3,border:0,color:"white",boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .3)"},BottomBarButtonLeft:{width:"44%",left:"3%"},BottomBarButtonRight:{width:"44%",left:"53%"},BottomBarButton:{width:"94%",left:"3%"},divLine:{border:"1px solid",color:"#DDDDDD",width:"95%"}}})),y={set_scene:s},E=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_canvasData:e.camera._canvasData}}),y)((function(e){e._current_scene;var t=e.set_scene,a=e._canvasData;console.log("PortraitMaster component start");var n,r,i=C(),c=Object(u.a)(i.BottomBarButtonBase,i.BottomBarButtonRight),s=Object(u.a)(i.BottomBarButtonBase,i.BottomBarButtonLeft),l=Object(u.a)(i.BottomBarButtonBase,i.BottomBarButton),m=function(){t("CameraCapture"),console.log("onCameraCapture")};return 0==(void 0!=window.HybridApp?window.HybridApp.GetDirectoryFileCount():a.length)?r=o.a.createElement(d.a,{onClick:m,className:l,variant:"contained",color:"secondary"},"\uc0ac\uc9c4 \ucc0d\uae30"):(n=o.a.createElement("div",null,o.a.createElement(b,null)," ",o.a.createElement("hr",{className:i.divLine})),r=o.a.createElement("div",null,o.a.createElement(d.a,{onClick:m,className:s,variant:"contained",color:"secondary"}," \uc0ac\uc9c4 \ucc0d\uae30"),o.a.createElement(d.a,{onClick:function(){t("GridCaptureList"),console.log("onCameraCaptureSubmit")},className:c,variant:"contained",color:"secondary"},"\uc81c\ucd9c\ud558\uae30"))),o.a.createElement("div",{className:"MainSceneRoot"},n,o.a.createElement(h,null),o.a.createElement("div",{className:i.BottomBarBack},r))})),w=a(12),_=a.n(w),x=a(23),k=a(42),D=a(43),I=a(26),O=a(47),T=a(48);function A(e){return{type:"DELETECANVASDATA",_deleteCanvasDataIndex:e}}var B=!0,S={position:"fixed",left:"0px",top:"0",width:"100%",height:"11.6%"},j={position:"fixed",left:"0px",top:"88.4%",height:"11.6%",width:"100%"},F={position:"fixed",left:"0px",width:"100%",top:"0%",height:"100%",zIndex:"-3",backgroundColor:"black"},N={position:"fixed",left:"0px",width:"100%",top:"50%",height:"auto",transform:"translate(0%, -50%)",zIndex:"-2"},L={position:"fixed",left:"0px",width:"100%",top:"50%",height:"auto",transform:"translate(0%, -50%)",zIndex:"-1"},R={position:"fixed",height:"5.1%",left:"10%",top:"91.5%"},H={position:"fixed",height:"9.1%",left:"40%",top:"89.5%"},M={position:"fixed",height:"5.1%",left:"75%",top:"91.5%"},G={position:"fixed",height:"5.1%",left:"5%",top:"3.5%"},U={position:"fixed",height:"5.1%",left:"25%",top:"3.5%"},V={position:"fixed",height:"5.1%",left:"45%",top:"3.5%"},P={position:"fixed",height:"2.1%",left:"65%",top:"5%"},W={position:"fixed",height:"5.1%",left:"85%",top:"3.5%"},X=function(e){Object(T.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e,a.defaultProps)).getCanvas=function(e){n.canvas=e},n.getCanvasOverlay=function(e){n.canvasOverlay=e},n.getVideo=function(e){n.video=e},n.updateCameraGrid=function(e){var t=n.video;if(void 0!=t){var a=n.canvasOverlay;if(void 0!=a){var o=a.getContext("2d");if(void 0!=o&&(t.videoWidth==a.width&&t.videoHeight==a.height||(a.width=t.videoWidth,a.height=t.videoHeight,o.width=t.videoWidth,o.height=t.videoHeight),o.clearRect(0,0,a.width,a.height),1==e)){o.save(),o.strokeStyle="rgb(255,0,0)",o.lineWidth=3,o.globalAlpha=.1;for(var r=0;r<=a.width;r+=a.width/3)o.moveTo(r,0),o.lineTo(r,a.height);for(var i=0;i<=a.height;i+=a.height/3)o.moveTo(0,i),o.lineTo(a.width,i);o.stroke(),o.restore()}}}},n.onNextCamera=function(){B=!B,console.log("user camera flag : "+B),n.playCamera(),1==B?n.onFlash():n.setFlashLight(1==n.state.cameraFlashType)},n.onTimerSelect=function(){var e=n.state.cameraCaptureTimerType;++e>3&&(e=0),n.setState((function(){return{cameraCaptureTimerType:e}})),console.log("timer:"+e)},n.onCaptureAnimation=function(){console.log("onCaptureAnimation call"),1!=n.state.flashEffect?(n.setState({flashEffect:!0}),setTimeout((function(){n.setState({flashEffect:!1})}),1e3)):console.log("onCaptureAnimation call fail!")},n.onCapture=function(){var e=n.canvas;if(void 0!=e){var t=0;switch(n.state.cameraCaptureTimerType){case 0:t=0;break;case 1:t=3e3;break;case 2:t=5e3;break;case 3:t=1e4}var a=(new Date).toISOString();if(void 0==window.HybridApp){var o=e.toDataURL("image/jpeg",1);n.props.onAddCanvasData(o),n.onCaptureAnimation()}else setTimeout((function(){var t=e.toDataURL("image/jpeg",1);if(void 0!=window.HybridApp)window.HybridApp.SaveAlbumJpgImage(t,a+".jpg");else{var n=document.createElement("a");document.body.appendChild(n),n.style="display: none",n.href=t,n.download=a+".jpg",n.click(),window.URL.revokeObjectURL(t)}this.onCaptureAnimation(),console.log("onCapture")}),t)}},n.onBack=function(){console.log("onBack"),n.props.onSetScene("PortraitMaster")},n.onFlash=function(){var e=n.state.cameraFlashType;++e>1&&(e=0),1==B&&(e=0),n.setState((function(){return{cameraFlashType:e}})),n.setFlashLight(1==e),console.log("flash:"+e)},n.onToggleGrid=function(){var e=!n.state.gridView;n.setState((function(){return{gridView:e}})),console.log("grid view:"+e),n.updateCameraGrid(e)},n.onCaptureRatio=function(){var e=n.state.captureRatioType;++e>1&&(e=0),n.setState((function(){return{captureRatioType:e}})),console.log("capture Ratio Type:"+e)},n.onMovieFilter=function(){var e=n.state.cameraFilterType;++e>7&&(e=0),n.setState((function(){return{cameraFilterType:e}})),console.log("camera filter:"+e)},n.stopCamera=n.stopCamera.bind(Object(I.a)(n)),n.state={cameraCaptureTimerType:0,cameraFlashType:0,cameraFilterType:0,captureRatioType:0,gridView:!1,flashEffect:!1},n}return Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.setupCamera();case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("This browser does not support video capture, or this device does not have a camera");case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.setFlashLight(!1),this.stopCamera()}},{key:"setupCamera",value:function(){var e=Object(x.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){e.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:navigator.mediaDevices.enumerateDevices().then((function(e){e.forEach((function(e){e.kind,console.log(e.kind+": "+e.label+", id = "+e.deviceId)}))})).catch((function(e){console.log(e.name+": "+e.message)})),this.playCamera(),this.updateCamera();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"playCamera",value:function(){var e=Object(x.a)(_.a.mark((function e(){var t,a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.stream&&window.stream.getTracks().forEach((function(e){e.stop()})),t=this.video,1080,1080,a="user",0==B&&(a="environment"),e.next=8,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:a,frameRate:60,width:{exact:1080},height:{exact:1080},aspectRatio:{exact:1}}});case 8:n=e.sent,window.stream=n,t.srcObject=n,t.play();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stopCamera",value:function(){console.log("stopCamera call");var e=this.video;void 0!=e&&(e.pause(),e.src="",void 0!=e.srcObject&&(e.srcObject.getTracks()[0].stop(),e.srcObject=void 0),console.log("video off"))}},{key:"setFlashLight",value:function(e){if(console.log("setFlashLight:"+e),void 0!=window.stream){var t=window.stream.getVideoTracks()[0];if(console.log(t),void 0!=t){var a=t.getCapabilities();console.log(a),void 0!=a&&(console.log(a.torch),a.torch&&t.applyConstraints({advanced:[{torch:e}]}).catch((function(e){return console.log(e)})))}}}},{key:"updateCamera",value:function(){var e=this.canvas;if(void 0!=e){var t=e.getContext("2d");if(void 0!=t){var a=this.video;void 0!=a&&(0==this.props.showVideo?a.style.display="none":a.style.display="block",this.updateCameraFrame(t))}}}},{key:"updateCameraFrame",value:function(e){var t=this,a=this.video,n=function(){var o=Object(x.a)(_.a.mark((function o(){var r;return _.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r=t.canvas,1!=t.props.showDebugVideo||void 0==r){o.next=26;break}a.videoWidth==r.width&&a.videoHeight==r.height||(r.width=a.videoWidth,r.height=a.videoHeight,e.width=a.videoWidth,e.height=a.videoHeight),e.clearRect(0,0,r.width,r.height),e.save(),o.t0=t.state.cameraFilterType,o.next=0===o.t0?8:1===o.t0?10:2===o.t0?12:3===o.t0?14:4===o.t0?16:5===o.t0?18:6===o.t0?20:7===o.t0?22:24;break;case 8:return e.filter="none",o.abrupt("break",24);case 10:return e.filter="grayscale(100%)",o.abrupt("break",24);case 12:return e.filter="brightness(100%)",o.abrupt("break",24);case 14:return e.filter="contrast(100%)",o.abrupt("break",24);case 16:return e.filter="sepia(100%)",o.abrupt("break",24);case 18:return e.filter="invert(100%)",o.abrupt("break",24);case 20:return e.filter="saturate(100%)",o.abrupt("break",24);case 22:return e.filter="blur(4px)",o.abrupt("break",24);case 24:e.drawImage(a,0,0),e.restore();case 26:if("start"!=t.props._closeCamera){o.next=30;break}return t.stopCamera(),t.props.onCloseCamera("complete"),o.abrupt("return");case 30:requestAnimationFrame(n);case 31:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();n()}},{key:"render",value:function(){var e,t,a,n,r;switch(this.state.cameraCaptureTimerType){case 0:e=o.a.createElement("img",{style:R,onClick:this.onTimerSelect.bind(this),src:"/camera-master/img/TimerOff.png"});break;case 1:e=o.a.createElement("img",{style:R,onClick:this.onTimerSelect.bind(this),src:"/camera-master/img/Timer3.png"});break;case 2:e=o.a.createElement("img",{style:R,onClick:this.onTimerSelect.bind(this),src:"/camera-master/img/Timer5.png"});break;case 3:e=o.a.createElement("img",{style:R,onClick:this.onTimerSelect.bind(this),src:"/camera-master/img/Timer10.png"})}switch(this.state.cameraFlashType){case 0:t=o.a.createElement("img",{style:U,onClick:this.onFlash.bind(this),src:"/camera-master/img/FlashOff.png"});break;case 1:t=o.a.createElement("img",{style:U,onClick:this.onFlash.bind(this),src:"/camera-master/img/FlashOn.png"})}return a=0==this.state.gridView?o.a.createElement("img",{style:V,onClick:this.onToggleGrid.bind(this),src:"/camera-master/img/GridOff.png"}):o.a.createElement("img",{style:V,onClick:this.onToggleGrid.bind(this),src:"/camera-master/img/GridOn.png"}),n=0==this.state.captureRatioType?o.a.createElement("img",{style:P,onClick:this.onCaptureRatio.bind(this),src:"/camera-master/img/CaptureRatio4_3.png"}):o.a.createElement("img",{style:P,onClick:this.onCaptureRatio.bind(this),src:"/camera-master/img/CaptureRatio16_9.png"}),r=0==this.state.cameraFilterType?o.a.createElement("img",{style:W,onClick:this.onMovieFilter.bind(this),src:"/camera-master/img/FilterOff.png"}):o.a.createElement("img",{style:W,onClick:this.onMovieFilter.bind(this),src:"/camera-master/img/FilterOn.png"}),o.a.createElement("div",{style:F},o.a.createElement("video",{id:"videoCamera",style:N,src:"",playsInline:!0,ref:this.getVideo}),o.a.createElement("canvas",{style:L,ref:this.getCanvas}),o.a.createElement("canvas",{id:"canvasOverlay",style:L,ref:this.getCanvasOverlay}),o.a.createElement("div",{style:S},o.a.createElement("img",{style:G,onClick:this.onBack.bind(this),src:"/camera-master/img/CameraBack.png"}),t,a,n,r),o.a.createElement("div",{style:j},e,o.a.createElement("img",{style:H,onClick:this.onCapture.bind(this),src:"/camera-master/img/shutter_normal.png"}),o.a.createElement("img",{style:M,onClick:this.onNextCamera.bind(this),src:"/camera-master/img/FlipCamera.png"})),o.a.createElement("div",{className:"CameraCaptureEffect "+(this.state.flashEffect?"CameraCaptureAnimation":"")}))}}]),a}(n.Component);X.defaultProps={showVideo:!1,showDebugVideo:!0,loadingText:"Loading...please be patient..."};var z=X=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_closeCamera:e.camera._closeCamera}}),(function(e){return{onSetScene:function(t){return e(s(t))},onAddCanvasData:function(t){return e({type:"ADDCANVASDATA",_addCanvasData:t})}}}))(X),J=Object(m.a)((function(e){return{root:{width:"100%"},ContentsBody:{position:"absolute",width:"100%",left:"0px",top:"0px",bottom:"50px"},ImgList:{display:"flex",overflowX:"auto"},BottomBar1:{position:"fixed",width:"40%",Height:"50px",left:"5%",bottom:"0px"},BottomBar2:{position:"fixed",width:"40%",left:"55%",Height:"50px",bottom:"0px"}}})),Y={set_scene:s},q=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),Y)((function(e){e._current_scene,e.set_scene;console.log("Index_scene component start");var t=J();Object(n.useEffect)((function(){r()}));var a=function(e){console.log("onAddImageChange"),e.target.files[0]&&function(e){console.log("imgUpload:"),console.log(e);var t=new FileReader;t.onload=function(e){var a=e.target.result,n=new Image;n.onload=function(){i(t.result)},n.src=a},t.readAsDataURL(e)}(e.target.files[0])},r=function(){if(console.log("onUploadImageList"),void 0!=window.HybridApp)for(var e=window.HybridApp.GetDirectoryFileCount(),t=0;t<e;t++){var a=window.HybridApp.GetImageDataFromDirectory(t);i(a)}},i=function(e){var t=document.createElement("img");t.style.display="block",t.style.width="65%",t.style.height="auto",t.style.margin="5px",t.src=e,document.getElementById("imagelist").appendChild(t)};return o.a.createElement("div",{className:t.root},o.a.createElement("div",{id:"imagelist",className:t.ImgList}),o.a.createElement(d.a,{onClick:function(){console.log("onAddImageSelect");var e=document.createElement("input");e.type="file",e.accept="image/*",e.style.display="none",e.onchange=a,document.body.appendChild(e),e.click()},className:t.BottomBar1,variant:"contained",color:"secondary"},"\uc774\ubbf8\uc9c0 \uc120\ud0dd"),o.a.createElement(d.a,{onClick:function(){console.log("onUploadData")},className:t.BottomBar2,variant:"contained",color:"secondary"},"\uc81c\ucd9c\ud558\uae30"))})),$=a(15),K=Object(m.a)((function(e){return{root:{width:"100%",height:"100%"},bottomBar:{position:"fixed",height:"50px",bottom:"0px",width:"100%",backgroundColor:"#000000AA"},upload_button:{position:"absolute",top:"5px",left:"20px",height:"30px"},delete_button:{position:"absolute",top:"5px",right:"20px",height:"30px"}}})),Q=function(e){e.set_scene;var t=e.itemCount,a=e.onClickUploadImage,n=e.onClickDeleteImage;e.DeleteCanvasData;console.log("PortraitMasterCaptureImageControlBar component start");var r,i,c=K();return 0!=t?(r=o.a.createElement("img",{className:c.upload_button,onClick:a,src:"/camera-master/img/image-select-upload-enable-icon.png"}),i=o.a.createElement("img",{className:c.delete_button,onClick:n,src:"/camera-master/img/image-select-delete-enable-icon.png"})):(r=o.a.createElement("img",{className:c.upload_button,src:"/camera-master/img/image-select-upload-disable-icon.png"}),i=o.a.createElement("img",{className:c.delete_button,src:"/camera-master/img/image-select-delete-disable-icon.png"})),o.a.createElement("div",{className:c.root},o.a.createElement("div",{className:c.bottomBar},r,i))},Z={set_scene:s,DeleteCanvasData:A},ee=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),Z)(Q),te=Object(m.a)((function(e){return{root:{width:"100%",height:"100%",background:"#000000"},select_text:{color:"white"},ImgList:{overflowY:"auto",background:"#000000"},bottomBar:{position:"fixed",height:"50px",bottom:"0px",width:"100%",backgroundColor:"#000000AA"},upload_button:{position:"absolute",top:"5px",left:"20px",height:"30px"},delete_button:{position:"absolute",top:"5px",right:"20px",height:"30px"}}})),ae=[],ne={set_scene:s,DeleteCanvasData:A},oe=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_canvasData:e.camera._canvasData}}),ne)((function(e){var t=e._canvasData,a=e.set_scene,r=e.DeleteCanvasData;console.log("PortraitMasterGridCaptureImageList component start");var i=te(),c=Object(n.useState)(0),s=Object($.a)(c,2),l=s[0],m=s[1];Object(n.useEffect)((function(){u()}),[]);var u=function(){if(console.log("onUpdateImageList"),void 0!=window.HybridApp)for(var e=window.HybridApp.GetDirectoryFileCount(),a=0;a<e;a++){var n=window.HybridApp.GetImageDataFromDirectory(a);h(a,n)}else for(a=0;a<t.length;a++)h(a,t[a])},d=function(e){for(var t=0;t<ae.length;t++)if(ae[t]==e)return!0;return!1};function p(){console.log("onToggleImage:"+this.id);var e=function(e){console.log("selectImage:"+e);for(var t=!1,a=0;a<ae.length;a++)if(ae[a]==e){ae.splice(a,1),t=!0;break}return 0==t&&ae.push(e),m(ae.length),!t}(this.id),t=document.getElementById(this.id);void 0!=t&&(t.style.filter=1==e?"brightness(150%) grayscale(80%)":"");var a=document.getElementById(this.id+"Check");void 0!=a&&(a.style.display=1==e?"block":"none")}var g,h=function(e,t){var a=document.getElementById("imagelist");if(void 0!=a){var n=document.createElement("div");n.id="img"+e+"Root",n.style.position="relative",a.appendChild(n);var o=document.createElement("img");o.id="img"+e,o.style.position="relative",o.style.width="100%",o.style.height="auto",o.onclick=p,o.style.margin="5px",o.src=t,n.appendChild(o);var r=document.createElement("img");r.id="img"+e+"Check",r.style.position="absolute",r.style.display="none",r.style.width="40px",r.style.height="auto",r.style.right="10px",r.style.bottom="10px",r.src="/camera-master/img/image-checked-icon.png",n.appendChild(r)}},f=function(e){var t=e.substring("img".length);try{return parseInt(t)}catch(a){}return-1};return g=0!=l?o.a.createElement("div",{className:i.select_text},o.a.createElement("center",null,l,"\uac1c \uc120\ud0dd\ub428")):o.a.createElement("div",{className:i.select_text},o.a.createElement("center",null,"\uc120\ud0dd \ub418\uc9c0 \uc54a\uc74c")),o.a.createElement("div",{className:i.root},g,o.a.createElement("div",{id:"imagelist",className:i.ImgList}),o.a.createElement(ee,{itemCount:l,onClickUploadImage:function(){console.log("onClickUploadImage call"),ae=[],a("PortraitMaster")},onClickDeleteImage:function(){console.log("onClickDeleteImage call");for(var e=[],t=0;t<ae.length;t++){var n=document.getElementById(ae[t]+"Root");if(void 0==n){console.log("select item delete error id:"+ae[t]);break}if(n.remove(),1==d(ae[t])){var o=f(ae[t]);e.push(o)}}ae=[],m(0),e.sort((function(e,t){return t-e}));for(t=0;t<e.length;t++)console.log("select item DeleteCanvasData call index:"+e[t]),void 0!=window.HybridApp?window.HybridApp.DeleteImageDataFromDirectory(e[t]):r(e[t]);var i=document.getElementById("imagelist");void 0!=i&&0==i.childElementCount&&a("PortraitMaster")}}))})),re=(a(68),a(44)),ie=Object(m.a)((function(e){return{root:{width:"100%",height:"100%",background:"#000000"},multi_select_text:{color:"white"},ImgList:{overflowY:"auto",background:"#000000"}}})),ce=[],se={set_scene:s,SetSelectImgIndex:l,DeleteCanvasData:A},le=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_canvasData:e.camera._canvasData,_selectImgIndex:e.scene._selectImgIndex}}),se)((function(e){var t=e._canvasData,a=e.set_scene,r=e.SetSelectImgIndex,i=e._selectImgIndex,c=e.DeleteCanvasData;console.log("PortraitMasterFullScreenCaptureList component start");var s=ie(),l=Object(n.useState)(0),m=Object($.a)(l,2),u=m[0],d=m[1];Object(n.useEffect)((function(){g()}));var p,g=function(){if(ce=[],console.log("onUpdateImageList"),void 0!=window.HybridApp)for(var e=window.HybridApp.GetDirectoryFileCount(),a=0;a<e;a++){var n=window.HybridApp.GetImageDataFromDirectory(a);h(a,n)}else for(a=0;a<t.length;a++)h(a,t[a])},h=function(e,t){ce.push(t),d(ce.length),console.log("item count:"+ce.length)},f=function(e){console.log("onSelectImage call:"+e),r(e)};return p=u>1?o.a.createElement("div",{className:s.multi_select_text},o.a.createElement("center",null,"\uc2ac\ub77c\uc774\ub4dc\ud558\uba74 \ub2e4\ub978 \uc0ac\uc9c4 \ud45c\uc2dc")):o.a.createElement("div",{className:s.multi_select_text}),console.log("itemCount renderring update"),o.a.createElement("div",{className:s.root},p,(console.log("_items count:"+ce.length),o.a.createElement(re.Carousel,{infiniteLoop:!0,selectedItem:i,showArrows:!0,showStatus:!0,showThumbs:!1,onChange:f},ce.map((function(e){return o.a.createElement("img",{src:e})})))),o.a.createElement(Q,{itemCount:1,onClickUploadImage:function(){console.log("onClickUploadImage call"),a("PortraitMaster")},onClickDeleteImage:function(){console.log("onClickDeleteImage call index:"+i),void 0!=window.HybridApp?window.HybridApp.DeleteImageDataFromDirectory(i):c(i),r(0),ce.length<=1&&a("PortraitMaster")}}))})),me=a(95),ue=a(96),de=a(46),pe=a.n(de),ge=a(45),he=a.n(ge),fe=Object(m.a)({root:{width:"100%",bottom:0,position:"fixed",flexGrow:1}}),ve={set_scene:s},be=(Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),ve)((function(e){e._current_scene;var t=e.set_scene,a=fe(),n=o.a.useState(0),r=Object($.a)(n,2),i=r[0],c=r[1];return o.a.createElement(me.a,{value:i,onChange:function(e,a){t(a),c(a)},showLabels:!0,className:a.root},o.a.createElement(ue.a,{value:"PortraitMaster",label:"Home",icon:o.a.createElement(he.a,null)}),o.a.createElement(ue.a,{value:"CameraCapture",label:"\uc0ac\uc9c4\ucc0d\uae30",icon:o.a.createElement(pe.a,null)}))})),Object(m.a)((function(e){return{root:{width:"100%",height:"100%"}}}))),Ce={set_scene:s},ye=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),Ce)((function(e){var t=e._current_scene;e.set_scene;console.log("Index_scene component start");var a=be();return o.a.createElement("div",{className:a.root},function(){switch(t){case"CameraCapture":return o.a.createElement(z,null);case"PortraitMaster":return o.a.createElement(E,null);case"CameraCaptureSelect":return o.a.createElement(q,null);case"GridCaptureList":return o.a.createElement(oe,null);case"FullScreenCaptureList":return o.a.createElement(le,null);default:return o.a.createElement(E,null)}}())}));var Ee=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ye,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=a(14),_e={_current_scene:"IndexScene",_selectImgIndex:0};var xe=a(29),ke=a(33),De={_closeCamera:"",_canvasData:[]};var Ie=Object(we.b)({scene:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer scene action call:"+t.type),t.type){case"SET_SCENE":return console.log("SET_SCENE:"+t._change_scene),Object.assign({},e,{_current_scene:t._change_scene});case"SETSELECTIMGINDEX":return console.log("SETSELECTIMGINDEX:"+t._selectImgIndex),Object.assign({},e,{_selectImgIndex:t._selectImgIndex});default:return e}},camera:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer scene action call:"+t.type),t.type){case"CLOSECAMERA":return console.log("CLOSECAMERA:"+t._closeCamera),Object.assign({},e,{_closeCamera:t._closeCamera});case"ADDCANVASDATA":return console.log("ADDCANVASDATA:"+t._addCanvasData),Object(ke.a)({},e,{_canvasData:[].concat(Object(xe.a)(e._canvasData),[t._addCanvasData])});case"DELETECANVASDATA":return console.log("DELETECANVASDATA:"+t._deleteCanvasDataIndex),Object(ke.a)({},e,{_canvasData:[].concat(Object(xe.a)(e._canvasData.slice(0,t._deleteCanvasDataIndex)),Object(xe.a)(e._canvasData.slice(t._deleteCanvasDataIndex+1)))});default:return e}}}),Oe=document.getElementById("root"),Te=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Ae=Object(we.c)(Ie,Te);i.a.render(o.a.createElement(c.a,{store:Ae},o.a.createElement(Ee,null)),Oe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.57a85ef1.chunk.js.map