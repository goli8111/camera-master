(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{54:function(e,t,a){e.exports=a(68)},59:function(e,t,a){},60:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),c=(a(59),a(60),a(10));function s(e){return{type:"SET_SCENE",_change_scene:e}}var l=a(85),u=a(87),d=a(33),m=Object(l.a)((function(e){return{root:{width:"100%"},ContentsBody:{position:"absolute",width:"100%",left:"0px",top:"0px",bottom:"50px"},BottomBar1:{position:"absolute",width:"40%",Height:"50px",left:"5%",bottom:"0px"},BottomBar2:{position:"absolute",width:"40%",left:"55%",Height:"50px",bottom:"0px"}}})),p={set_scene:s},h=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),p)((function(e){e._current_scene;var t=e.set_scene;console.log("Index_scene component start");var a=m();return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.ContentsBody},r.a.createElement(d.a,{url:"https://m.blog.naver.com/elanvital7/221026487974",position:"absolute",width:"100%",id:"myId",className:"myClassname",height:"100%",styles:{height:"25px"}})),r.a.createElement(u.a,{onClick:function(){t("CameraCapture"),console.log("onCameraCapture")},className:a.BottomBar1,variant:"contained",color:"secondary"},"\uc0ac\uc9c4 \ucc0d\uae30"),r.a.createElement(u.a,{onClick:function(){t("CameraCaptureSelect"),console.log("onCameraCaptureSubmit")},className:a.BottomBar2,variant:"contained",color:"secondary"},"\uc81c\ucd9c\ud558\uae30"))})),v=a(13),f=a.n(v),g=a(22),b=a(34),y=a(35),C=a(26),w=a(50),E=a(49);var _=a(88),k=a(36),x=a.n(k),O=a(38),T=a.n(O),S=a(37),A=a.n(S),j=a(44),B=a.n(j),D=a(45),N=a.n(D),F=a(41),I=a.n(F),L=a(39),H=a.n(L),z=a(40),V=a.n(z),R=a(42),W=a.n(R),M=a(43),U=a.n(M),P=!0,G={color:"red",position:"fixed",left:"0px",top:"50px",width:"100%",transform:"scale(1.5)",WebkitTransform:"scale(1.5)"},X={color:"red",position:"fixed",left:"0px",bottom:"50px",width:"100%",transform:"scale(1.5)",WebkitTransform:"scale(1.5)"},q={position:"fixed",left:"0px",width:"100%",top:"0%",height:"100%",zIndex:"-3",backgroundColor:"black"},J={position:"fixed",left:"0px",width:"100%",top:"50%",height:"auto",transform:"translate(0%, -50%)",zIndex:"-2"},$={position:"fixed",left:"0px",width:"100%",top:"50%",height:"auto",transform:"translate(0%, -50%)",zIndex:"-1"},K=function(e){Object(w.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e,a.defaultProps)).getCanvas=function(e){n.canvas=e},n.getCanvasOverlay=function(e){n.canvasOverlay=e},n.getVideo=function(e){n.video=e},n.updateCameraGrid=function(e){var t=n.video;if(void 0!=t){var a=n.canvasOverlay;if(void 0!=a){var r=a.getContext("2d");if(void 0!=r&&(t.videoWidth==a.width&&t.videoHeight==a.height||(a.width=t.videoWidth,a.height=t.videoHeight,r.width=t.videoWidth,r.height=t.videoHeight),r.clearRect(0,0,a.width,a.height),1==e)){r.save(),r.strokeStyle="rgb(255,0,0)",r.lineWidth=3,r.globalAlpha=.1;for(var o=0;o<=a.width;o+=a.width/3)r.moveTo(o,0),r.lineTo(o,a.height);for(var i=0;i<=a.height;i+=a.height/3)r.moveTo(0,i),r.lineTo(a.width,i);r.stroke(),r.restore()}}}},n.onNextCamera=function(){P=!P,console.log("user camera flag : "+P),n.playCamera()},n.onTimerSelect=function(){var e=n.state.cameraCaptureTimerType;++e>2&&(e=0),n.setState((function(){return{cameraCaptureTimerType:e}})),console.log("timer:"+e)},n.onCapture=function(){var e=n.canvas;if(void 0!=e){var t=0;switch(n.state.cameraCaptureTimerType){case 0:t=0;break;case 1:t=3e3;break;case 2:t=1e4}setTimeout((function(){var t=e.toDataURL("image/jpeg",1);this.props.onAddCanvasData(t),console.log("onCapture")}),t)}},n.onBack=function(){console.log("onBack")},n.onFlash=function(){var e=n.state.cameraFlashType;++e>1&&(e=0),n.setState((function(){return{cameraFlashType:e}})),n.setFlashLight(1==e),console.log("flash:"+e)},n.onToggleGrid=function(){var e=!n.state.gridView;n.setState((function(){return{gridView:e}})),console.log("grid view:"+e),n.updateCameraGrid(e)},n.onMovieFilter=function(){var e=n.state.cameraFilterType;++e>7&&(e=0),n.setState((function(){return{cameraFilterType:e}})),console.log("camera filter:"+e)},n.stopCamera=n.stopCamera.bind(Object(C.a)(n)),n.state={cameraCaptureTimerType:0,cameraFlashType:0,cameraFilterType:0,gridView:!1},n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.setupCamera();case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("This browser does not support video capture, or this device does not have a camera");case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.setFlashLight(!1)}},{key:"setupCamera",value:function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){e.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:navigator.mediaDevices.enumerateDevices().then((function(e){e.forEach((function(e){e.kind,console.log(e.kind+": "+e.label+", id = "+e.deviceId)}))})).catch((function(e){console.log(e.name+": "+e.message)})),this.playCamera(),this.updateCamera();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"playCamera",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.stream&&window.stream.getTracks().forEach((function(e){e.stop()})),t=this.video,1280,720,a="user",0==P&&(a="environment"),e.next=8,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:a,frameRate:60,width:{exact:1280},height:{exact:720},aspectRatio:{exact:1280/720}}});case 8:n=e.sent,window.stream=n,t.srcObject=n,t.play();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stopCamera",value:function(){console.log("stopCamera call");var e=this.video;void 0!=e&&(e.pause(),e.src="",void 0!=e.srcObject&&(e.srcObject.getTracks()[0].stop(),e.srcObject=void 0),this.props.onPosenetPose(void 0),console.log("video off"))}},{key:"setFlashLight",value:function(e){void 0!=window.HybridApp&&(window.HybridApp.ShowToast("call setFlashLight"),1==e?window.HybridApp.FlashLightOn():window.HybridApp.FlashLightOff())}},{key:"updateCamera",value:function(){var e=this.canvas;if(void 0!=e){var t=e.getContext("2d");if(void 0!=t){var a=this.video;void 0!=a&&(0==this.props.showVideo?a.style.display="none":a.style.display="block",this.updateCameraFrame(t))}}}},{key:"updateCameraFrame",value:function(e){var t=this,a=this.video,n=function(){var r=Object(g.a)(f.a.mark((function r(){var o;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.canvas,1!=t.props.showDebugVideo||void 0==o){r.next=26;break}a.videoWidth==o.width&&a.videoHeight==o.height||(o.width=a.videoWidth,o.height=a.videoHeight,e.width=a.videoWidth,e.height=a.videoHeight),e.clearRect(0,0,o.width,o.height),e.save(),r.t0=t.state.cameraFilterType,r.next=0===r.t0?8:1===r.t0?10:2===r.t0?12:3===r.t0?14:4===r.t0?16:5===r.t0?18:6===r.t0?20:7===r.t0?22:24;break;case 8:return e.filter="none",r.abrupt("break",24);case 10:return e.filter="grayscale(100%)",r.abrupt("break",24);case 12:return e.filter="brightness(100%)",r.abrupt("break",24);case 14:return e.filter="contrast(100%)",r.abrupt("break",24);case 16:return e.filter="sepia(100%)",r.abrupt("break",24);case 18:return e.filter="invert(100%)",r.abrupt("break",24);case 20:return e.filter="saturate(100%)",r.abrupt("break",24);case 22:return e.filter="blur(4px)",r.abrupt("break",24);case 24:e.drawImage(a,0,0),e.restore();case 26:if("start"!=t.props._closeCamera){r.next=30;break}return t.stopCamera(),t.props.onCloseCamera("complete"),r.abrupt("return");case 30:requestAnimationFrame(n);case 31:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();n()}},{key:"render",value:function(){var e,t;switch(this.state.cameraCaptureTimerType){case 0:e=r.a.createElement(x.a,{color:"primary",fontSize:"large"});break;case 1:e=r.a.createElement(A.a,{color:"primary",fontSize:"large"});break;case 2:e=r.a.createElement(T.a,{color:"primary",fontSize:"large"})}switch(this.state.cameraFlashType){case 0:t=r.a.createElement(H.a,{color:"primary",fontSize:"large"});break;case 1:t=r.a.createElement(V.a,{color:"primary",fontSize:"large"})}return r.a.createElement("div",{style:q},r.a.createElement("meta",{"http-equiv":"Content-Security-Policy",content:"default-src * gap:; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src *; img-src * data: blob: android-webview-video-poster:; style-src * 'unsafe-inline';"}),r.a.createElement("video",{id:"videoCamera",style:J,src:"",playsInline:!0,ref:this.getVideo}),r.a.createElement("canvas",{style:$,ref:this.getCanvas}),r.a.createElement("canvas",{id:"canvasOverlay",style:$,ref:this.getCanvasOverlay}),r.a.createElement("div",{style:G},r.a.createElement(_.a,{onClick:this.onBack.bind(this)},r.a.createElement(I.a,{color:"primary",fontSize:"large"})),r.a.createElement(_.a,{onClick:this.onFlash.bind(this)},t),r.a.createElement(_.a,{onClick:this.onToggleGrid.bind(this)},r.a.createElement(W.a,{color:"primary",fontSize:"large"})),r.a.createElement(_.a,{onClick:this.onMovieFilter.bind(this)},r.a.createElement(U.a,{color:"primary",fontSize:"large"}))),r.a.createElement("div",{style:X},r.a.createElement(_.a,{onClick:this.onTimerSelect.bind(this)},e),r.a.createElement(_.a,{onClick:this.onCapture.bind(this)},r.a.createElement(B.a,{color:"primary",fontSize:"large"})),r.a.createElement(_.a,{onClick:this.onNextCamera.bind(this)},r.a.createElement(N.a,{color:"primary",fontSize:"large"}))))}}]),a}(n.Component);K.defaultProps={showVideo:!1,showDebugVideo:!0,loadingText:"Loading...please be patient..."};var Q=K=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene,_closeCamera:e.camera._closeCamera}}),(function(e){return{onCloseCamera:function(t){return e({type:"CLOSECAMERA",_closeCamera:t})},onAddCanvasData:function(t){return e({type:"ADDCANVASDATA",_addCanvasData:t})}}}))(K),Y=Object(l.a)((function(e){return{root:{width:"100%"},ContentsBody:{position:"absolute",width:"100%",left:"0px",top:"0px",bottom:"50px"},ImgList:{display:"block",width:"100%",height:"auto"},BottomBar1:{position:"fixed",width:"40%",Height:"50px",left:"5%",bottom:"0px"},BottomBar2:{position:"fixed",width:"40%",left:"55%",Height:"50px",bottom:"0px"}}})),Z={set_scene:s},ee=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),Z)((function(e){e._current_scene,e.set_scene;console.log("Index_scene component start");var t=Y(),a=function(e){console.log("onAddImageChange"),e.target.files[0]&&function(e){console.log("imgUpload:"),console.log(e);var t=new FileReader;t.onload=function(e){var a=e.target.result,n=new Image;n.onload=function(){var e=document.getElementById("select-image");e.style.display="block",e.style.width="100%",e.style.height="auto",e.src=t.result,document.getElementById("imagelist").appendChild(e)},n.src=a},t.readAsDataURL(e)}(e.target.files[0])};return r.a.createElement("div",{className:t.root},r.a.createElement("div",{id:"imagelist",className:t.ImgList},r.a.createElement("img",{id:"select-image"})),r.a.createElement(u.a,{onClick:function(){console.log("onAddImageSelect");var e=document.createElement("input");e.type="file",e.accept="image/*",e.style.display="none",e.onchange=a,document.body.appendChild(e),e.click()},className:t.BottomBar1,variant:"contained",color:"secondary"},"\uc774\ubbf8\uc9c0 \uc120\ud0dd"),r.a.createElement(u.a,{onClick:function(){console.log("onUploadData")},className:t.BottomBar2,variant:"contained",color:"secondary"},"\uc81c\ucd9c\ud558\uae30"))})),te=a(48),ae=a(89),ne=a(90),re=a(47),oe=a.n(re),ie=a(46),ce=a.n(ie),se=Object(l.a)({root:{width:"100%",bottom:0,position:"fixed",flexGrow:1}}),le={set_scene:s},ue=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),le)((function(e){e._current_scene;var t=e.set_scene,a=se(),n=r.a.useState(0),o=Object(te.a)(n,2),i=o[0],c=o[1];return r.a.createElement(ae.a,{value:i,onChange:function(e,a){t(a),c(a)},showLabels:!0,className:a.root},r.a.createElement(ne.a,{value:"PortraitMaster",label:"Home",icon:r.a.createElement(ce.a,null)}),r.a.createElement(ne.a,{value:"CameraCapture",label:"\uc0ac\uc9c4\ucc0d\uae30",icon:r.a.createElement(oe.a,null)}))})),de=Object(l.a)((function(e){return{root:{width:"100%",height:"100%"}}})),me={set_scene:s},pe=Object(c.b)((function(e){return{_current_scene:e.scene._current_scene}}),me)((function(e){var t=e._current_scene;e.set_scene;console.log("Index_scene component start");var a=de();return r.a.createElement("div",{className:a.root},function(){switch(t){case"CameraCapture":return r.a.createElement(Q,null);case"PortraitMaster":return r.a.createElement(h,null);case"CameraCaptureSelect":return r.a.createElement(ee,null);default:return r.a.createElement(ue,null)}}())}));var he=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=a(15),fe={_current_scene:"IndexScene"};var ge={_closeCamera:""};var be=Object(ve.b)({scene:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer scene action call:"+t.type),t.type){case"SET_SCENE":return console.log("SET_SCENE:"+t._change_scene),Object.assign({},e,{_current_scene:t._change_scene});default:return e}},camera:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer scene action call:"+t.type),t.type){case"CLOSECAMERA":return console.log("CLOSECAMERA:"+t._closeCamera),Object.assign({},e,{_closeCamera:t._closeCamera});case"ADDCANVASDATA":default:return e}}}),ye=document.getElementById("root"),Ce=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),we=Object(ve.c)(be,Ce);i.a.render(r.a.createElement(c.a,{store:we},r.a.createElement(he,null)),ye),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.4c74b495.chunk.js.map