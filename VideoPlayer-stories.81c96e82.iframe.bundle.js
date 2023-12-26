(self.webpackChunk_graphland_react_video_player=self.webpackChunk_graphland_react_video_player||[]).push([[439],{"./stories/VideoPlayer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ThemeCity:()=>ThemeCity,ThemeFantacy:()=>ThemeFantacy,ThemeForest:()=>ThemeForest,ThemeSea:()=>ThemeSea,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VideoPlayer_stories});var react=__webpack_require__("./node_modules/react/index.js");__webpack_require__("./node_modules/video.js/dist/video-js.css"),__webpack_require__("./node_modules/@videojs/themes/dist/city/index.css"),__webpack_require__("./node_modules/@videojs/themes/dist/fantasy/index.css"),__webpack_require__("./node_modules/@videojs/themes/dist/forest/index.css"),__webpack_require__("./node_modules/@videojs/themes/dist/sea/index.css");var video_es=__webpack_require__("./node_modules/video.js/dist/video.es.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),VideoPlayer=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/VideoPlayer.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(VideoPlayer.Z,options),VideoPlayer.Z&&VideoPlayer.Z.locals&&VideoPlayer.Z.locals;var VideoPlayer_VideoPlayer=function(param){var _param_height=param.height,_param_width=param.width,sources=param.sources,_param_autoPlay=param.autoPlay,_param_loop=param.loop,_param_theme=param.theme,poster=param.poster,_param_controlBar=param.controlBar,controlBar=void 0===_param_controlBar?{skipButtons:{forward:5,back:5}}:_param_controlBar,_param_playbackRates=param.playbackRates,playbackRates=void 0===_param_playbackRates?[.5,1,1.5,2]:_param_playbackRates,_param_disablePictureInPicture=param.disablePictureInPicture,disablePictureInPicture=void 0!==_param_disablePictureInPicture&&_param_disablePictureInPicture,onReady=param.onReady,videoRef=react.useRef(null);return react.useEffect(function(){videoRef.current&&(0,video_es.Z)(videoRef.current,{controlBar:controlBar,playbackRates:playbackRates,disablePictureInPicture:disablePictureInPicture,preferFullWindow:!0},function onPlayerReady(ready){video_es.Z.log("Your player is ready!"),onReady&&onReady(ready)})},[videoRef]),react.createElement("div",null,react.createElement("div",{className:"gl-video-player__wrapper"},react.createElement("video",{ref:videoRef,className:"video-js vjs-theme-".concat(void 0===_param_theme?"city":_param_theme," gl-video-player__video"),controls:!0,autoPlay:void 0!==_param_autoPlay&&_param_autoPlay,preload:"auto",width:void 0===_param_width?1920:_param_width,height:void 0===_param_height?1080:_param_height,loop:void 0!==_param_loop&&_param_loop,poster:poster},null==sources?void 0:sources.map(function(param){var src=param.src,type=param.type;return react.createElement("source",{key:src,src:src,type:type})}),react.createElement("p",{className:"vjs-no-js"},"To view this video please enable JavaScript, and consider upgrading to a web browser that",react.createElement("a",{href:"https://videojs.com/html5-video-support/",target:"_blank"},"supports HTML5 video")))))};let src_VideoPlayer_0=VideoPlayer_VideoPlayer;try{VideoPlayer_VideoPlayer.displayName="VideoPlayer",VideoPlayer_VideoPlayer.__docgenInfo={description:"",displayName:"VideoPlayer",props:{theme:{defaultValue:{value:"city"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"city"'},{value:'"fantasy"'},{value:'"forest"'},{value:'"sea"'}]}},height:{defaultValue:{value:"1080"},description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"1920"},description:"",name:"width",required:!1,type:{name:"number"}},autoPlay:{defaultValue:{value:"false"},description:"",name:"autoPlay",required:!1,type:{name:"boolean"}},loop:{defaultValue:{value:"false"},description:"",name:"loop",required:!1,type:{name:"boolean"}},sources:{defaultValue:null,description:"",name:"sources",required:!1,type:{name:"{ src: string; type: string; }[]"}},poster:{defaultValue:null,description:"",name:"poster",required:!1,type:{name:"string"}},controlBar:{defaultValue:{value:"{\n    skipButtons: {\n      forward: 5,\n      back: 5,\n    },\n  }"},description:"",name:"controlBar",required:!1,type:{name:"{ skipButtons?: { forward?: number; backward?: number; } | undefined; } | undefined"}},playbackRates:{defaultValue:{value:"[0.5, 1, 1.5, 2]"},description:"",name:"playbackRates",required:!1,type:{name:"number[]"}},disablePictureInPicture:{defaultValue:{value:"false"},description:"",name:"disablePictureInPicture",required:!1,type:{name:"boolean"}},onReady:{defaultValue:null,description:"",name:"onReady",required:!1,type:{name:"((ready: ReadyCallback) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/VideoPlayer.tsx#VideoPlayer"]={docgenInfo:VideoPlayer_VideoPlayer.__docgenInfo,name:"VideoPlayer",path:"src/VideoPlayer.tsx#VideoPlayer"})}catch(__react_docgen_typescript_loader_error){}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let VideoPlayer_stories={title:"VideoPlayer",component:src_VideoPlayer_0,parameters:{layout:"centered"},tags:["autodocs"]};var DEFAULT_ARGS={height:1080,width:1920,sources:[{src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",type:"video/mp4"}],autoPlay:!1,playbackRates:[.5,1,1.5,2]},Default={name:"Default",args:_object_spread({},DEFAULT_ARGS)},ThemeCity={name:"Theme: City",args:_object_spread_props(_object_spread({},DEFAULT_ARGS),{theme:"city"})},ThemeForest={name:"Theme: Forest",args:_object_spread_props(_object_spread({},DEFAULT_ARGS),{theme:"forest"})},ThemeFantacy={name:"Theme: Ocean",args:_object_spread_props(_object_spread({},DEFAULT_ARGS),{theme:"fantasy"})},ThemeSea={name:"Theme: sea",args:_object_spread_props(_object_spread({},DEFAULT_ARGS),{theme:"sea"})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "Default",\n  args: {\n    ...DEFAULT_ARGS\n  }\n}',...Default.parameters?.docs?.source}}},ThemeCity.parameters={...ThemeCity.parameters,docs:{...ThemeCity.parameters?.docs,source:{originalSource:'{\n  name: "Theme: City",\n  args: {\n    ...DEFAULT_ARGS,\n    theme: "city"\n  }\n}',...ThemeCity.parameters?.docs?.source}}},ThemeForest.parameters={...ThemeForest.parameters,docs:{...ThemeForest.parameters?.docs,source:{originalSource:'{\n  name: "Theme: Forest",\n  args: {\n    ...DEFAULT_ARGS,\n    theme: "forest"\n  }\n}',...ThemeForest.parameters?.docs?.source}}},ThemeFantacy.parameters={...ThemeFantacy.parameters,docs:{...ThemeFantacy.parameters?.docs,source:{originalSource:'{\n  name: "Theme: Ocean",\n  args: {\n    ...DEFAULT_ARGS,\n    theme: "fantasy"\n  }\n}',...ThemeFantacy.parameters?.docs?.source}}},ThemeSea.parameters={...ThemeSea.parameters,docs:{...ThemeSea.parameters?.docs,source:{originalSource:'{\n  name: "Theme: sea",\n  args: {\n    ...DEFAULT_ARGS,\n    theme: "sea"\n  }\n}',...ThemeSea.parameters?.docs?.source}}};let __namedExportsOrder=["Default","ThemeCity","ThemeForest","ThemeFantacy","ThemeSea"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/VideoPlayer.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.gl-video-player__wrapper {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.gl-video-player__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`,"",{version:3,sources:["webpack://./src/VideoPlayer.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd",sourcesContent:[".gl-video-player__wrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  overflow: hidden;\n}\n\n.gl-video-player__video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"data:application/font-woff;charset=utf-8;base64,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":module=>{"use strict";module.exports="data:application/font-woff;charset=utf-8;base64,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"},"data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 125%27 fill=%27%23fff%27%3E%3Cpath d=%27M62.153 37.323h2.813v3.246h-2.813zM64.858 40.569h2.813v3.246h-2.813zM67.672 43.814h11.9v3.246h-11.9zM79.572 24.449h2.813v19.365h-2.813zM82.386 37.323h3.244v3.246h-3.244zM85.63 34.132h5.627v3.246H85.63zM91.257 37.323h2.92v12.95h-2.92zM94.177 50.274h2.922V66.21h-2.922zM91.29 66.372h2.887v3.245H91.29zM88.401 69.617h2.889v3.246h-2.889zM27.312 72.863h61.003v3.245H27.312zM73.622 76.108h2.889v3.246h-2.889zM82.563 76.108h2.888v3.246h-2.888zM76.511 79.354h6.053v3.245h-6.053zM61.941 79.354h8.895v3.245h-8.895zM67.947 76.108h2.889v3.246h-2.889zM59.321 76.108h2.888v3.246h-2.888zM27.312 17.917h49.387v3.246H27.312zM76.699 21.162h2.873v3.287h-2.873zM56.372 34.132h5.781v3.191h-5.781zM53.448 37.323h2.924v12.951h-2.924zM50.488 50.274h2.96v16.049h-2.96zM53.448 66.323h2.924v3.257h-2.924zM56.372 69.58h2.949v3.283h-2.949zM65.069 63.213h2.878v6.367h-2.878zM67.947 66.397h17.504v3.22H67.947z%27/%3E%3Cpath d=%27M82.563 63.213h2.888v3.185h-2.888zM73.801 63.213h2.898v3.185h-2.898zM76.699 56.774h2.873v3.145h-2.873zM82.563 56.774h2.888v3.145h-2.888zM85.451 53.444h2.864v3.33h-2.864z%27/%3E%3Cpath d=%27M85.451 56.774h2.864v3.145h-2.864zM65.069 53.444h2.878v3.33h-2.878zM65.069 56.774h2.878v3.145h-2.878zM62.209 56.774h2.86v3.145h-2.86zM21.509 24.327h2.813v45.169h-2.813zM24.323 21.162h2.99v3.165h-2.99zM18.562 69.496h8.75v3.367h-8.75zM15.656 72.863h2.906v9.591h-2.906zM18.562 79.301h8.75v3.153h-8.75zM24.323 76.108h5.743V79.3h-5.743zM33.136 76.108h2.824v6.346h-2.824zM35.96 79.281h5.813v3.173H35.96zM41.774 76.108h2.864v3.173h-2.864zM3.948 40.569h11.708v3.229H3.948zM3.948 43.814h2.921v6.459H3.948zM6.869 47.06h2.934v6.384H6.869zM9.803 50.274h2.909v6.5H9.803z%27/%3E%3Cpath d=%27M12.711 53.444h2.945v6.475h-2.945zM15.656 56.774h5.853v3.145h-5.853z%27/%3E%3Cpath d=%27M18.583 59.919h2.926v3.294h-2.926zM18.583 47.044h2.926v6.4h-2.926zM12.711 43.814h5.872v3.229h-5.872zM15.647 47.044h2.936v3.2h-2.936z%27/%3E%3Cpath fill=%27none%27 d=%27M47.439 50.274h3.049v3.17h-3.049z%27/%3E%3Cpath d=%27M73.801 30.94v-3.138h-2.965v-3.354l-37.7-.122v3.151h-3.07v3.462l-2.753-.108-.118 32.381h2.871v3.185h3.07v-3.185h2.824v3.185h-2.824v3.099l20.312.084v-3.257h-2.96V50.274h2.96V37.323h2.924v-3.191h5.781v3.191h2.813l-.108 3.246h2.813v3.246h9.027V30.94h-2.897zM33.136 56.682h-3.07v-3.158h3.07v3.158zm2.824-22.55h-2.824v-3.084h2.824v3.084zm2.907 12.928h2.907v3.184h-2.907V47.06zm5.771 16.153h-2.864v-3.294h2.864v3.294zm2.801-19.399h-2.801v-3.246h2.801v3.246zm6.009-12.766h-2.96v-3.354h2.96v3.354zm8.705 0h-2.832v-3.354h2.832v3.354zm8.683 6.275h-2.889v-3.191h2.889v3.191z%27/%3E%3C/svg%3E":module=>{"use strict";module.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 125%27 fill=%27%23fff%27%3E%3Cpath d=%27M62.153 37.323h2.813v3.246h-2.813zM64.858 40.569h2.813v3.246h-2.813zM67.672 43.814h11.9v3.246h-11.9zM79.572 24.449h2.813v19.365h-2.813zM82.386 37.323h3.244v3.246h-3.244zM85.63 34.132h5.627v3.246H85.63zM91.257 37.323h2.92v12.95h-2.92zM94.177 50.274h2.922V66.21h-2.922zM91.29 66.372h2.887v3.245H91.29zM88.401 69.617h2.889v3.246h-2.889zM27.312 72.863h61.003v3.245H27.312zM73.622 76.108h2.889v3.246h-2.889zM82.563 76.108h2.888v3.246h-2.888zM76.511 79.354h6.053v3.245h-6.053zM61.941 79.354h8.895v3.245h-8.895zM67.947 76.108h2.889v3.246h-2.889zM59.321 76.108h2.888v3.246h-2.888zM27.312 17.917h49.387v3.246H27.312zM76.699 21.162h2.873v3.287h-2.873zM56.372 34.132h5.781v3.191h-5.781zM53.448 37.323h2.924v12.951h-2.924zM50.488 50.274h2.96v16.049h-2.96zM53.448 66.323h2.924v3.257h-2.924zM56.372 69.58h2.949v3.283h-2.949zM65.069 63.213h2.878v6.367h-2.878zM67.947 66.397h17.504v3.22H67.947z%27/%3E%3Cpath d=%27M82.563 63.213h2.888v3.185h-2.888zM73.801 63.213h2.898v3.185h-2.898zM76.699 56.774h2.873v3.145h-2.873zM82.563 56.774h2.888v3.145h-2.888zM85.451 53.444h2.864v3.33h-2.864z%27/%3E%3Cpath d=%27M85.451 56.774h2.864v3.145h-2.864zM65.069 53.444h2.878v3.33h-2.878zM65.069 56.774h2.878v3.145h-2.878zM62.209 56.774h2.86v3.145h-2.86zM21.509 24.327h2.813v45.169h-2.813zM24.323 21.162h2.99v3.165h-2.99zM18.562 69.496h8.75v3.367h-8.75zM15.656 72.863h2.906v9.591h-2.906zM18.562 79.301h8.75v3.153h-8.75zM24.323 76.108h5.743V79.3h-5.743zM33.136 76.108h2.824v6.346h-2.824zM35.96 79.281h5.813v3.173H35.96zM41.774 76.108h2.864v3.173h-2.864zM3.948 40.569h11.708v3.229H3.948zM3.948 43.814h2.921v6.459H3.948zM6.869 47.06h2.934v6.384H6.869zM9.803 50.274h2.909v6.5H9.803z%27/%3E%3Cpath d=%27M12.711 53.444h2.945v6.475h-2.945zM15.656 56.774h5.853v3.145h-5.853z%27/%3E%3Cpath d=%27M18.583 59.919h2.926v3.294h-2.926zM18.583 47.044h2.926v6.4h-2.926zM12.711 43.814h5.872v3.229h-5.872zM15.647 47.044h2.936v3.2h-2.936z%27/%3E%3Cpath fill=%27none%27 d=%27M47.439 50.274h3.049v3.17h-3.049z%27/%3E%3Cpath d=%27M73.801 30.94v-3.138h-2.965v-3.354l-37.7-.122v3.151h-3.07v3.462l-2.753-.108-.118 32.381h2.871v3.185h3.07v-3.185h2.824v3.185h-2.824v3.099l20.312.084v-3.257h-2.96V50.274h2.96V37.323h2.924v-3.191h5.781v3.191h2.813l-.108 3.246h2.813v3.246h9.027V30.94h-2.897zM33.136 56.682h-3.07v-3.158h3.07v3.158zm2.824-22.55h-2.824v-3.084h2.824v3.084zm2.907 12.928h2.907v3.184h-2.907V47.06zm5.771 16.153h-2.864v-3.294h2.864v3.294zm2.801-19.399h-2.801v-3.246h2.801v3.246zm6.009-12.766h-2.96v-3.354h2.96v3.354zm8.705 0h-2.832v-3.354h2.832v3.354zm8.683 6.275h-2.889v-3.191h2.889v3.191z%27/%3E%3C/svg%3E"},"data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2788%27 height=%2788%27 fill=%27%236fb04e%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M44 88C19.738 88 0 68.262 0 44S19.738 0 44 0s44 19.738 44 44-19.738 44-44 44zm0-85C21.393 3 3 21.393 3 44c0 22.608 18.393 41 41 41s41-18.392 41-41C85 21.393 66.607 3 44 3zm16.063 43.898L39.629 60.741a3.496 3.496 0 01-3.604.194 3.492 3.492 0 01-1.859-3.092V30.158c0-1.299.712-2.483 1.859-3.092a3.487 3.487 0 013.604.194l20.433 13.843a3.497 3.497 0 01.001 5.795zm-1.683-3.311L37.946 29.744a.49.49 0 00-.276-.09.51.51 0 00-.239.062.483.483 0 00-.265.442v27.685c0 .262.166.389.265.442.1.053.299.118.515-.028L58.38 44.414A.489.489 0 0058.6 44a.49.49 0 00-.22-.413z%27/%3E%3C/svg%3E":module=>{"use strict";module.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2788%27 height=%2788%27 fill=%27%236fb04e%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M44 88C19.738 88 0 68.262 0 44S19.738 0 44 0s44 19.738 44 44-19.738 44-44 44zm0-85C21.393 3 3 21.393 3 44c0 22.608 18.393 41 41 41s41-18.392 41-41C85 21.393 66.607 3 44 3zm16.063 43.898L39.629 60.741a3.496 3.496 0 01-3.604.194 3.492 3.492 0 01-1.859-3.092V30.158c0-1.299.712-2.483 1.859-3.092a3.487 3.487 0 013.604.194l20.433 13.843a3.497 3.497 0 01.001 5.795zm-1.683-3.311L37.946 29.744a.49.49 0 00-.276-.09.51.51 0 00-.239.062.483.483 0 00-.265.442v27.685c0 .262.166.389.265.442.1.053.299.118.515-.028L58.38 44.414A.489.489 0 0058.6 44a.49.49 0 00-.22-.413z%27/%3E%3C/svg%3E"},"data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2788%27 height=%2788%27 fill=%27%23fff%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M44 88C19.738 88 0 68.262 0 44S19.738 0 44 0s44 19.738 44 44-19.738 44-44 44zm0-85C21.393 3 3 21.393 3 44c0 22.608 18.393 41 41 41s41-18.392 41-41C85 21.393 66.607 3 44 3zm16.063 43.898L39.629 60.741a3.496 3.496 0 01-3.604.194 3.492 3.492 0 01-1.859-3.092V30.158c0-1.299.712-2.483 1.859-3.092a3.487 3.487 0 013.604.194l20.433 13.843a3.497 3.497 0 01.001 5.795zm-1.683-3.311L37.946 29.744a.49.49 0 00-.276-.09.51.51 0 00-.239.062.483.483 0 00-.265.442v27.685c0 .262.166.389.265.442.1.053.299.118.515-.028L58.38 44.414A.489.489 0 0058.6 44a.49.49 0 00-.22-.413z%27/%3E%3C/svg%3E":module=>{"use strict";module.exports="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2788%27 height=%2788%27 fill=%27%23fff%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M44 88C19.738 88 0 68.262 0 44S19.738 0 44 0s44 19.738 44 44-19.738 44-44 44zm0-85C21.393 3 3 21.393 3 44c0 22.608 18.393 41 41 41s41-18.392 41-41C85 21.393 66.607 3 44 3zm16.063 43.898L39.629 60.741a3.496 3.496 0 01-3.604.194 3.492 3.492 0 01-1.859-3.092V30.158c0-1.299.712-2.483 1.859-3.092a3.487 3.487 0 013.604.194l20.433 13.843a3.497 3.497 0 01.001 5.795zm-1.683-3.311L37.946 29.744a.49.49 0 00-.276-.09.51.51 0 00-.239.062.483.483 0 00-.265.442v27.685c0 .262.166.389.265.442.1.053.299.118.515-.028L58.38 44.414A.489.489 0 0058.6 44a.49.49 0 00-.22-.413z%27/%3E%3C/svg%3E"},"?34aa":()=>{}}]);
//# sourceMappingURL=VideoPlayer-stories.81c96e82.iframe.bundle.js.map