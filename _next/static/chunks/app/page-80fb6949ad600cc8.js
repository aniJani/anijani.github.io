(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3959:function(e,t,s){Promise.resolve().then(s.bind(s,5866))},5866:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return y}});var a=s(7437),r=s(8059),l=s.n(r),i=s(7218),c=s(7055),n=s(6648),d=s(2265),o=()=>(0,a.jsx)("div",{className:"flex justify-start items-start bg-black",children:(0,a.jsxs)("div",{className:"flex flex-row border-2 border-white p-4 bg-black",children:[(0,a.jsx)("div",{onClick:e=>{e.preventDefault();let t=document.getElementById("projects-section");t&&t.scrollIntoView({behavior:"smooth"})},className:"text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2",children:"Projects"}),(0,a.jsx)("div",{className:"text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2",children:"CV"})]})});let m=(e,t)=>{(0,d.useEffect)(()=>{let s=s=>{!e.current||e.current.contains(s.target)||t(s)};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}},[e,t])};var x=s(4839),h=s(6164);function u(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,h.m6)((0,x.W)(t))}var f=s(3008),j=s(4635),b=s(4446);let g=(0,d.createContext)({}),p=e=>{let{items:t,initialScroll:s=0}=e,r=d.useRef(null),[l,i]=d.useState(!1),[c,n]=d.useState(!0);(0,d.useEffect)(()=>{r.current&&(r.current.scrollLeft=s,o())},[s]);let o=()=>{if(r.current){let{scrollLeft:e,scrollWidth:t,clientWidth:s}=r.current;i(e>0),n(e<t-s)}};return(0,a.jsx)(g.Provider,{value:{},children:(0,a.jsx)("div",{className:"relative w-full",children:(0,a.jsxs)("div",{className:"flex w-full overflow-x-scroll overscroll-x-auto py-1 md:py-1 scroll-smooth [scrollbar-width:none]",ref:r,onScroll:o,children:[(0,a.jsx)("div",{className:u("absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l")}),(0,a.jsx)("div",{className:u("flex flex-row justify-start gap-4 pl-4","max-w-7xl mx-auto"),children:t.map((e,t)=>(0,a.jsx)(j.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,delay:.2*t,ease:"easeOut",once:!0}},className:"last:pr-[5%] md:last:pr-[33%]  rounded-3xl",children:e},"card"+t))})]})})})},w=e=>{let{card:t,index:s,layout:r=!1}=e,[l,i]=(0,d.useState)(!1),[c,o]=(0,d.useState)({width:0,height:0}),[x,h]=(0,d.useState)(!1),g=(0,d.useRef)(null);(0,d.useEffect)(()=>{function e(e){"Escape"===e.key&&p()}return l?document.body.style.overflow="hidden":document.body.style.overflow="auto",window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[l]),m(g,()=>p());let p=()=>{i(!1)},w=e=>{let{naturalWidth:t,naturalHeight:s}=e.target;o({width:t,height:s}),h(t>s)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.M,{children:l&&(0,a.jsxs)("div",{className:"fixed inset-0 h-screen z-50 overflow-hidden flex items-center justify-center",children:[(0,a.jsx)("div",{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"}),(0,a.jsxs)("div",{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},ref:g,className:"relative z-[60] max-h-[90vh] max-w-[90vw] p-4",children:[(0,a.jsx)("button",{className:"fixed top-4 right-4 h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center z-50",onClick:p,children:(0,a.jsx)(f.Z,{className:"h-6 w-6 text-neutral-100 dark:text-neutral-900"})}),(0,a.jsx)(n.default,{src:t.src,alt:t.title,width:c.width,height:c.height,className:"rounded-3xl object-contain max-h-[calc(90vh-2rem)] max-w-[calc(90vw-2rem)]",onLoad:w})]})]})}),(0,a.jsxs)(j.E.button,{onClick:e=>{e.preventDefault(),i(!0)},className:u("rounded-3xl bg-black dark:bg-neutral-900 overflow-hidden flex flex-col items-start justify-start relative z-10 shadow-none border-none",x?"h-36 w-72 md:h-96 md:w-[43rem]":"h-72 w-32 md:h-[36rem] md:w-64"),children:[(0,a.jsx)(v,{src:t.src,alt:t.title,fill:!0,className:"object-contain absolute z-10 inset-0 bg-black",onLoad:w,style:{backgroundColor:"black"}}),(0,a.jsx)("div",{className:"absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full text-white z-20",children:(0,a.jsx)("h3",{className:"text-xl font-semibold",children:t.title})})]})]})},v=e=>{let{height:t,width:s,src:r,className:l,alt:i,onLoad:c,...o}=e,[m,x]=(0,d.useState)(!0);return(0,a.jsx)(n.default,{className:u("transition duration-300",m?"blur-sm":"blur-0",l),onLoad:e=>{x(!1),c&&c(e)},src:r,width:s,height:t,loading:"lazy",decoding:"async",blurDataURL:"string"==typeof r?r:void 0,alt:i||"Background of a beautiful view",...o})};function y(){return(0,d.useEffect)(()=>{let e=e=>{e.preventDefault();let t=e.target.getAttribute("href").slice(1),s=document.getElementById(t);s&&s.scrollIntoView({behavior:"smooth"})},t=document.querySelectorAll('a[href^="#"]');return t.forEach(t=>{t.addEventListener("click",e)}),()=>{t.forEach(t=>{t.removeEventListener("click",e)})}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l(),{id:"d54da0164ef47eb7",children:".smooth-scroll{scroll-behavior:smooth}"}),(0,a.jsxs)("main",{className:"jsx-d54da0164ef47eb7 min-h-screen bg-black flex flex-col items-center p-4 w-full sm:p-14 smooth-scroll",children:[(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 w-full max-w-4xl flex flex-col md:flex-row justify-center items-center",children:[(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 w-full md:w-auto mb-10 md:mb-0 md:mr-10 text-center",children:[(0,a.jsx)("div",{className:"jsx-d54da0164ef47eb7 flex justify-center mb-8 md:ml-[-30px]",children:(0,a.jsx)(o,{})}),(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 mt-8",children:[(0,a.jsx)(n.default,{src:"/Headshot1.png",alt:"Descriptive alt text",width:290,height:230,className:"mx-auto object-contain rounded-lg shadow-lg"}),(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 mt-4 space-y-2",children:[(0,a.jsxs)("a",{href:"https://www.linkedin.com/in/janit-rajkarnikar-18b2782b1/",className:"jsx-d54da0164ef47eb7 flex items-center justify-center text-gray-300 hover:text-white",children:[(0,a.jsx)(i.Z,{className:"w-5 h-5 mr-2"}),"LinkedIn"]}),(0,a.jsxs)("a",{href:"https://github.com/aniJani",className:"jsx-d54da0164ef47eb7 flex items-center justify-center text-gray-300 hover:text-white",children:[(0,a.jsx)(c.Z,{className:"w-5 h-5 mr-2"}),"Github"]})]})]})]}),(0,a.jsx)("div",{className:"jsx-d54da0164ef47eb7 w-full md:w-auto text-center md:text-left md:ml-10 md:mt-20",children:(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 mt-8 text-white max-w-xl",children:[(0,a.jsx)("h1",{className:"jsx-d54da0164ef47eb7 text-5xl font-bold",children:"Hi, I'm Janit."}),(0,a.jsxs)("p",{className:"jsx-d54da0164ef47eb7 mt-4 text-lg",children:["I'm in my second year of undergrad, majoring in ",(0,a.jsx)("span",{className:"jsx-d54da0164ef47eb7 font-semibold text-white",children:"Computer Science"})," with a minor in ",(0,a.jsx)("span",{className:"jsx-d54da0164ef47eb7 font-semibold text-white",children:"Economic Data Analysis"}),". I have hands-on experience with Machine Learning techniques and enjoy working on applicaitons that leverage data-driven insights to solve real-world problems."]}),(0,a.jsx)("p",{className:"jsx-d54da0164ef47eb7 mt-4 text-lg",children:"I'm also interested in research, particularly in cybersecurity, where I'm delving into key challenges and contributing to the development of practical solutions."})]})})]}),(0,a.jsxs)("section",{id:"projects-section",className:"jsx-d54da0164ef47eb7 w-full max-w-5xl mt-20",children:[(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 flex items-start mb-12",children:[(0,a.jsx)("h2",{className:"jsx-d54da0164ef47eb7 text-4xl font-bold text-white text-left mr-8",children:"Projects:"}),(0,a.jsx)("div",{className:"jsx-d54da0164ef47eb7 text-gray-400 text-sm",children:(0,a.jsxs)("ul",{className:"jsx-d54da0164ef47eb7 space-y-2",children:[(0,a.jsx)("li",{className:"jsx-d54da0164ef47eb7",children:(0,a.jsx)("a",{href:"#calorie-tracker",className:"jsx-d54da0164ef47eb7 hover:underline transition-all duration-300 ease-in-out",children:"1. Calorie Tracker"})}),(0,a.jsx)("li",{className:"jsx-d54da0164ef47eb7",children:(0,a.jsx)("a",{href:"#designers-touch",className:"jsx-d54da0164ef47eb7 hover:underline transition-all duration-300 ease-in-out",children:"2. The Designer's Touch"})}),(0,a.jsx)("li",{className:"jsx-d54da0164ef47eb7",children:(0,a.jsx)("a",{href:"#emoki",className:"jsx-d54da0164ef47eb7 hover:underline transition-all duration-300 ease-in-out",children:"3. Emoki"})})]})})]}),(0,a.jsxs)("div",{id:"calorie-tracker",className:"jsx-d54da0164ef47eb7 mb-12 scroll-mt-20",children:[(0,a.jsx)("h3",{className:"jsx-d54da0164ef47eb7 text-2xl font-semibold text-white mb-2",children:"Calorie Tracker"}),(0,a.jsx)("p",{className:"jsx-d54da0164ef47eb7 text-gray-300 mb-2",children:"A mobile app with a very simple interface that helps users track their daily calorie intake."}),(0,a.jsx)(p,{items:[{category:"",title:"",src:"/CalorieTracker (2).jpg"},{category:"",title:"",src:"/CalorieTracker (3).jpg"},{category:"",title:"",src:"/CalorieTracker (1).jpg"},{category:"",title:"",src:"/CalorieTracker (5).jpg"},{category:"",title:"",src:"/CalorieTracker (4).jpg"}].map((e,t)=>(0,a.jsx)(w,{card:e,index:t,layout:!0},t))})]}),(0,a.jsxs)("div",{id:"designers-touch",className:"jsx-d54da0164ef47eb7 mb-2 scroll-mt-20",children:[(0,a.jsx)("h3",{className:"jsx-d54da0164ef47eb7 text-2xl font-semibold text-white mb-2",children:"The Designer's Touch"}),(0,a.jsxs)("p",{className:"jsx-d54da0164ef47eb7 text-gray-300",children:["A creative platform where users can design custom t-shirts and other merchandise, with a real-time 3D preview. The website is currently live at ",(0,a.jsx)("a",{href:"https://thedesignerstouch.com.np/",className:"jsx-d54da0164ef47eb7 text-blue-500 hover:underline",children:" www.thedesignerstouch.com.np"}),"."]}),(0,a.jsx)(p,{items:[{category:"",title:"",src:"/dt.png"},{category:"",title:"",src:"/dt2.png"},{category:"",title:"",src:"/dt3.png"},{category:"",title:"",src:"/dt4.png"},{category:"",title:"",src:"/dt6.png"},{category:"",title:"",src:"/dt7.png"},{category:"",title:"",src:"/dt8.png"}].map((e,t)=>(0,a.jsx)(w,{card:e,index:t,layout:!0},t))})]}),(0,a.jsxs)("div",{id:"emoki",className:"jsx-d54da0164ef47eb7 mb-12 scroll-mt-20",children:[(0,a.jsx)("h3",{className:"jsx-d54da0164ef47eb7 text-2xl font-semibold text-white mb-2",children:"Emoki"}),(0,a.jsx)("p",{className:"jsx-d54da0164ef47eb7 text-gray-300 mb-2",children:"An emotion tracking app that aggregates users' emotions over time, helping them understand their emotional patterns."}),(0,a.jsx)(p,{items:[{category:"",title:"",src:"/Emoki (1).jpg"},{category:"",title:"",src:"/Emoki (2).jpg"},{category:"",title:"",src:"/Emoki (3).jpg"},{category:"",title:"",src:"/Emoki (4).jpg"},{category:"",title:"",src:"/Emoki (5).jpg"},{category:"",title:"",src:"/Emoki (6).jpg"}].map((e,t)=>(0,a.jsx)(w,{card:e,index:t,layout:!0},t))})]})]})]})]})}}},function(e){e.O(0,[423,971,23,744],function(){return e(e.s=3959)}),_N_E=e.O()}]);