"use strict";(self.webpackChunkfin_tech=self.webpackChunkfin_tech||[]).push([[943],{"./src/components/Quin.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Quin_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ui_button=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/ui/button.tsx")),NavBar=__webpack_require__("./src/components/NavBar.tsx");const Quin=()=>(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center justify-start min-h-screen w-full prose lg:prose-xl max-w-none bg-[#F3F7FA] bg-gradient-to-b from-[#Faf6eb] to-[#d1dfdc]",children:[(0,jsx_runtime.jsx)(NavBar.A,{}),(0,jsx_runtime.jsx)("div",{className:" flex flex-col-reverse md:flex-row  *:mt-20 mx-10 max-w-5xl ",children:(0,jsx_runtime.jsx)("div",{className:" relative w-full h-full overflow-hidden p-0 ",children:(0,jsx_runtime.jsxs)("div",{className:"max-w-xl  mb-10",children:[(0,jsx_runtime.jsx)("h1",{className:"text-primary ",children:"Stay top-of-mind with clients"}),(0,jsx_runtime.jsx)("p",{className:"text-xs text-[#919388]",children:"Quin helps you strengthen client relationships by recalling key personal details and recommending timely, unique gestures."}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0 *:w-full mt-8",children:[(0,jsx_runtime.jsx)(ui_button.$,{size:"default",variant:"secondary",children:"Meet Quin"}),(0,jsx_runtime.jsx)(ui_button.$,{size:"default",variant:"outline",children:"Schedule a Demo"})]}),(0,jsx_runtime.jsx)("div",{className:"mt-10",children:(0,jsx_runtime.jsx)("img",{src:"./Quin main picture.png",alt:"meeting",className:"object-cover  rounded-lg block m-0 max-h-[100rem] ",style:{marginTop:0,marginBottom:0}})})]})})})]});Quin.__docgenInfo={description:"",methods:[],displayName:"Quin"};const Quin_stories={title:"Hero/Quin",component:Quin,argTypes:{}},Default={args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    // Default props for the component\n    // Example:\n    // title: 'Default Title',\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/components/HamburgerMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const HamburgerMenu=({isOpen,onClick})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick,children:isOpen?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-gray-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-gray-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})}),__WEBPACK_DEFAULT_EXPORT__=HamburgerMenu;HamburgerMenu.__docgenInfo={description:"",methods:[],displayName:"HamburgerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/components/NavBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_QuinLogo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/QuinLogo.tsx"),_ui_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/button.tsx"),_HamburgerMenu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/HamburgerMenu.tsx"),_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/sheet.tsx");const NavBar=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),toggleMenu=()=>{setIsOpen(!isOpen)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav",{className:"flex justify-between items-center p-4  w-full",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_QuinLogo__WEBPACK_IMPORTED_MODULE_2__.A,{className:"fill-primary w-20 h-10"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"md:hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.cj,{open:isOpen,onOpenChange:toggleMenu,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.CG,{asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HamburgerMenu__WEBPACK_IMPORTED_MODULE_4__.A,{isOpen,onClick:toggleMenu})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.h,{side:"right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.Fm,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.qp,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_QuinLogo__WEBPACK_IMPORTED_MODULE_2__.A,{className:"fill-primary w-16 h-8"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col space-y-4 py-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"outline",className:"border rounded",children:"Login"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.$,{className:"border rounded",children:"Try Quin"})]})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"hidden md:flex space-x-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"outline",className:"px-4 py-2 border rounded hover:bg-gray-200",children:"Login"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.$,{className:"px-4 py-2 border rounded hover:bg-gray-200",children:"Try Quin"})]})]})},__WEBPACK_DEFAULT_EXPORT__=NavBar;NavBar.__docgenInfo={description:"",methods:[],displayName:"NavBar"}},"./src/components/QuinLogo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/lib/utils.ts"));const QuinLogo=({className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("object-cover w-20 h-10 ",className),viewBox:"0 00 400 200",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M257.447 32.317c-6.57 4.601-6.846 15.288-.524 20.261 7.943 6.248 21.44.023 21.44-9.888 0-9.49-12.984-15.929-20.916-10.373M72.436 42.48c-22.084 8.645-35.009 28.536-35.009 53.877 0 42.391 38.955 67.384 79.288 50.869 3.724-1.525 3.944-1.454 6.809 2.207 4.712 6.021 22.675 5.216 22.675-1.016 0-2.721-3.919-10.122-7.101-13.41l-3.473-3.589 3.982-7.64C163.67 77.612 119.439 24.08 72.436 42.48m34.723 18.963c16.68 8.101 24.342 47.242 11.359 58.018-2.541 2.108-8.576-4.576-8.576-9.497 0-5.414-17.489-8.967-21.989-4.467-4.605 4.606 2.88 17.641 11.006 19.166 9.649 1.81 8.614 7.752-1.587 9.105-22.846 3.031-38.396-12.651-38.124-38.446.314-29.699 23.2-45.881 47.911-33.879m222.881 3.685c-2.897 1.024-7.207 4.038-10.112 7.07-5.576 5.819-7.647 5.75-7.647-.254 0-5.823-2.479-7.617-10.527-7.617-11.114 0-10.526-2.44-10.526 43.71 0 45.659-.692 42.84 10.526 42.84 10.933 0 10.527 1.076 10.527-27.876 0-32.699 2.373-39.494 14.595-41.787 17.968-3.371 22.816 5.758 22.825 42.986.005 18.814.379 25.599 1.446 26.259 2.166 1.339 15.134.539 17.051-1.052 2.939-2.439 1.43-61.708-1.752-68.81-6.373-14.221-21.619-20.699-36.406-15.469m-166.897 1.136c-3.217 3.217-2.118 60.853 1.302 68.239 9.473 20.462 34.192 24.675 47.345 8.068 4.606-5.815 6.179-5.369 6.923 1.964l.585 5.757 8.998.341c12.346.467 11.654 3.106 11.368-43.374-.278-45.186.302-42.932-11.047-42.932-9.989 0-9.653-1.014-10.099 30.412-.378 26.673-.472 27.617-3.208 32.018-7.078 11.386-23.787 11.279-30.235-.193-2.502-4.452-2.619-5.868-2.619-31.61 0-22.941-.273-27.224-1.838-28.789-2.6-2.6-14.845-2.531-17.475.099m93.651-.084c-1.633 1.633-1.816 6.743-1.546 42.983l.308 41.129 8.746.349c12.492.499 11.721 3.331 11.721-43.081 0-36.647-.147-39.495-2.138-41.297-2.893-2.617-14.5-2.674-17.091-.083m-130.961 60.821c8.315 4.65 8.541 5.094 5.08 9.955-4.677 6.568-6.272 6.527-13.393-.345-7.245-6.994-7.374-7.363-3.866-11.097 3.266-3.477 3.313-3.471 12.179 1.487"})}),__WEBPACK_DEFAULT_EXPORT__=QuinLogo;QuinLogo.__docgenInfo={description:"",methods:[],displayName:"QuinLogo",props:{className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 duration-500",{variants:{variant:{default:"bg-primary text-primary-foreground shadow   hover:scale-105",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input border-primary text-primary bg-background shadow-sm hover:bg-accent  hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:scale-105",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8 py-7",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,variant,size,asChild=!1,...props},ref)=>{const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/components/ui/sheet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CG:()=>SheetTrigger,Fm:()=>SheetHeader,Qs:()=>SheetDescription,XW:()=>SheetFooter,cj:()=>Sheet,h:()=>SheetContent,kN:()=>SheetClose,qp:()=>SheetTitle});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-dialog/dist/index.mjs"),_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const Sheet=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.bL,SheetTrigger=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.l9,SheetClose=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.bm,SheetPortal=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.ZL,SheetOverlay=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.hJ,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",className),...props,ref})));SheetOverlay.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.hJ.displayName;const sheetVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_4__.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),SheetContent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({side="right",className,children,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SheetPortal,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SheetOverlay,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.UC,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(sheetVariants({side}),className),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__.MKb,{className:"h-4 w-4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Close"})]}),children]})]})));SheetContent.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.UC.displayName;const SheetHeader=({className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col space-y-2 text-center sm:text-left",className),...props});SheetHeader.displayName="SheetHeader";const SheetFooter=({className,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",className),...props});SheetFooter.displayName="SheetFooter";const SheetTitle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.hE,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-lg font-semibold text-foreground",className),...props})));SheetTitle.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.hE.displayName;const SheetDescription=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.VY,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm text-muted-foreground",className),...props})));SheetDescription.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.VY.displayName,SheetOverlay.__docgenInfo={description:"",methods:[]},SheetContent.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}}},SheetHeader.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"},SheetFooter.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"},SheetTitle.__docgenInfo={description:"",methods:[]},SheetDescription.__docgenInfo={description:"",methods:[]}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);