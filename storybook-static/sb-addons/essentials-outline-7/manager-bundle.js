try{
(()=>{var a=__REACT__,{Children:R,Component:k,Fragment:B,Profiler:L,PureComponent:P,StrictMode:x,Suspense:v,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:M,cloneElement:H,createContext:N,createElement:D,createFactory:F,createRef:K,forwardRef:W,isValidElement:Y,lazy:G,memo:c,startTransition:w,unstable_act:U,useCallback:p,useContext:V,useDebugValue:q,useDeferredValue:z,useEffect:m,useId:Z,useImperativeHandle:$,useInsertionEffect:j,useLayoutEffect:J,useMemo:Q,useReducer:X,useRef:ee,useState:te,useSyncExternalStore:oe,useTransition:re,version:ae}=__REACT__;var ie=__STORYBOOK_API__,{ActiveTabs:ce,Consumer:pe,ManagerContext:me,Provider:Se,addons:l,combineParameters:_e,controlOrMetaKey:de,controlOrMetaSymbol:Te,eventMatchesShortcut:Oe,eventToShortcut:be,isMacLike:ye,isShortcutTaken:Ce,keyToSymbol:fe,merge:he,mockChannel:Ee,optionOrAltSymbol:Ae,shortcutMatchesShortcut:ge,shortcutToHumanString:Ie,types:S,useAddonState:Re,useArgTypes:ke,useArgs:Be,useChannel:Le,useGlobalTypes:Pe,useGlobals:_,useParameter:xe,useSharedState:ve,useStoryPrepared:Me,useStorybookApi:d,useStorybookState:He}=__STORYBOOK_API__;var We=__STORYBOOK_COMPONENTS__,{A:Ye,ActionBar:Ge,AddonPanel:we,Badge:Ue,Bar:Ve,Blockquote:qe,Button:ze,ClipboardCode:Ze,Code:$e,DL:je,Div:Je,DocumentWrapper:Qe,ErrorFormatter:Xe,FlexBar:et,Form:tt,H1:ot,H2:rt,H3:at,H4:nt,H5:st,H6:lt,HR:ut,IconButton:T,IconButtonSkeleton:it,Icons:O,Img:ct,LI:pt,Link:mt,ListItem:St,Loader:_t,OL:dt,P:Tt,Placeholder:Ot,Pre:bt,ResetWrapper:yt,ScrollArea:Ct,Separator:ft,Spaced:ht,Span:Et,StorybookIcon:At,StorybookLogo:gt,Symbols:It,SyntaxHighlighter:Rt,TT:kt,TabBar:Bt,TabButton:Lt,TabWrapper:Pt,Table:xt,Tabs:vt,TabsState:Mt,TooltipLinkList:Ht,TooltipMessage:Nt,TooltipNote:Dt,UL:Ft,WithTooltip:Kt,WithTooltipPure:Wt,Zoom:Yt,codeCommon:Gt,components:wt,createCopyToClipboardFunction:Ut,getStoryHref:Vt,icons:qt,interleaveSeparators:zt,nameSpaceClassNames:Zt,resetComponents:$t,withReset:jt}=__STORYBOOK_COMPONENTS__;var u="storybook/outline",b="outline",C=c(function(){let[r,y]=_(),i=d(),n=[!0,"true"].includes(r[b]),s=p(()=>y({[b]:!n}),[n]);return m(()=>{i.setAddonShortcut(u,{label:"Toggle Outline [O]",defaultShortcut:["O"],actionName:"outline",showInMenu:!1,action:s})},[s,i]),a.createElement(T,{key:"outline",active:n,title:"Apply outlines to the preview",onClick:s},a.createElement(O,{icon:"outline"}))});l.register(u,()=>{l.add(u,{title:"Outline",type:S.TOOL,match:({viewMode:r})=>!!(r&&r.match(/^(story|docs)$/)),render:()=>a.createElement(C,null)})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
