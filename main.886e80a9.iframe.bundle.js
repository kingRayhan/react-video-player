(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on.*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/VideoPlayer.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".gl-video-player__video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.gl-video-player__wrapper {\n  position: relative;\n  padding-bottom: 56.25%; /* Aspect ratio for a 16:9 video */\n  overflow: hidden;\n}\n",""]),module.exports=exports},"./src/VideoPlayer.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/VideoPlayer.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$":function(module,exports,__webpack_require__){var map={"./VideoPlayer.stories.tsx":"./stories/VideoPlayer.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx|js|jsx))$"},"./stories/VideoPlayer.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"City",(function(){return City})),__webpack_require__.d(__webpack_exports__,"Fantasy",(function(){return Fantasy})),__webpack_require__.d(__webpack_exports__,"Forest",(function(){return Forest})),__webpack_require__.d(__webpack_exports__,"Sea",(function(){return Sea})),__webpack_require__.d(__webpack_exports__,"ForwardAndBackSkip",(function(){return ForwardAndBackSkip})),__webpack_require__.d(__webpack_exports__,"DisablePictureInPicture",(function(){return DisablePictureInPicture}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),video_es=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/video.js/dist/video-js.css"),__webpack_require__("./node_modules/@videojs/themes/dist/city/index.css"),__webpack_require__("./node_modules/@videojs/themes/dist/fantasy/index.css"),__webpack_require__("./node_modules/@videojs/themes/dist/forest/index.css"),__webpack_require__("./node_modules/@videojs/themes/dist/sea/index.css"),__webpack_require__("./node_modules/video.js/dist/video.es.js")),jsx_runtime=(__webpack_require__("./src/VideoPlayer.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),VideoPlayer_VideoPlayer=function VideoPlayer(_ref){var _ref$height=_ref.height,height=void 0===_ref$height?1080:_ref$height,_ref$width=_ref.width,width=void 0===_ref$width?1920:_ref$width,sources=_ref.sources,_ref$autoPlay=_ref.autoPlay,autoPlay=void 0!==_ref$autoPlay&&_ref$autoPlay,_ref$loop=_ref.loop,loop=void 0!==_ref$loop&&_ref$loop,_ref$theme=_ref.theme,theme=void 0===_ref$theme?"city":_ref$theme,poster=_ref.poster,_ref$controlBar=_ref.controlBar,controlBar=void 0===_ref$controlBar?{skipButtons:{forward:5,back:5}}:_ref$controlBar,_ref$playbackRates=_ref.playbackRates,playbackRates=void 0===_ref$playbackRates?[.5,1,1.5,2]:_ref$playbackRates,_ref$disablePictureIn=_ref.disablePictureInPicture,disablePictureInPicture=void 0!==_ref$disablePictureIn&&_ref$disablePictureIn,onReady=_ref.onReady,videoRef=react_default.a.useRef(null);return react_default.a.useEffect((function(){videoRef.current&&Object(video_es.a)(videoRef.current,{controlBar:controlBar,playbackRates:playbackRates,disablePictureInPicture:disablePictureInPicture,preferFullWindow:!0},(function onPlayerReady(ready){video_es.a.log("Your player is ready!"),onReady&&onReady(ready)}))}),[videoRef]),Object(jsx_runtime.jsx)("div",{className:"gl-video-player__wrapper",children:Object(jsx_runtime.jsxs)("video",{ref:videoRef,className:"video-js gl-video-player__video vjs-theme-"+theme,controls:!0,autoPlay:autoPlay,preload:"auto",width:width,height:height,loop:loop,poster:poster,children:[null==sources?void 0:sources.map((function(_ref2){var src=_ref2.src,type=_ref2.type;return Object(jsx_runtime.jsx)("source",{src:src,type:type},src)})),Object(jsx_runtime.jsxs)("p",{className:"vjs-no-js",children:["To view this video please enable JavaScript, and consider upgrading to a web browser that",Object(jsx_runtime.jsx)("a",{href:"https://videojs.com/html5-video-support/",target:"_blank",children:"supports HTML5 video"})]})]})})};VideoPlayer_VideoPlayer.displayName="VideoPlayer";var src_VideoPlayer_0=VideoPlayer_VideoPlayer,meta={title:"VideoPlayer",component:src_VideoPlayer_0},VideoPlayer_stories_Template=(__webpack_exports__.default=meta,function Template(args){return Object(jsx_runtime.jsx)(src_VideoPlayer_0,Object.assign({},args))});VideoPlayer_stories_Template.displayName="Template";var DEFAULT_ARGS={height:1080,width:1920,sources:[{src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",type:"video/mp4"}],autoPlay:!1,playbackRates:[.5,1,1.5,2]},Default=VideoPlayer_stories_Template.bind({});Default.args=Object.assign({},DEFAULT_ARGS,{theme:"city"});var City=VideoPlayer_stories_Template.bind({});City.args=Object.assign({},DEFAULT_ARGS,{theme:"city"});var Fantasy=VideoPlayer_stories_Template.bind({});Fantasy.args=Object.assign({},DEFAULT_ARGS,{theme:"fantasy"});var Forest=VideoPlayer_stories_Template.bind({});Forest.args=Object.assign({},DEFAULT_ARGS,{theme:"forest"});var Sea=VideoPlayer_stories_Template.bind({});Sea.args=Object.assign({},DEFAULT_ARGS,{theme:"sea"});var ForwardAndBackSkip=VideoPlayer_stories_Template.bind({});ForwardAndBackSkip.args=Object.assign({},DEFAULT_ARGS,{controlBar:{skipButtons:{forward:5,backward:5}}});var DisablePictureInPicture=VideoPlayer_stories_Template.bind({});DisablePictureInPicture.args=Object.assign({},DEFAULT_ARGS,{disablePictureInPicture:!0})},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){},2:function(module,exports){}},[[0,2,3]]]);