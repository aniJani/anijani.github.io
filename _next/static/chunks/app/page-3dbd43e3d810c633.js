(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{14:function(e,t,s){Promise.resolve().then(s.bind(s,5866))},5866:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return E}});var a=s(7437),r=s(8059),l=s.n(r),i=s(7218),n=s(7055),c=s(4086),d=s(6648),o=s(2265),m=s(7138),x=s(6463),h=()=>((0,x.useRouter)(),(0,a.jsx)("nav",{className:"flex justify-start items-start bg-black",children:(0,a.jsxs)("div",{className:"flex flex-row border-2 border-white p-4 bg-black",children:[(0,a.jsx)("button",{onClick:e=>{e.preventDefault();let t=document.getElementById("projects-section");t&&t.scrollIntoView({behavior:"smooth"})},className:"text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2",children:"Projects"}),(0,a.jsx)(m.default,{href:"/resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"text-white font-bold text-l uppercase tracking-wider cursor-pointer hover:bg-gray-800 px-4 py-2",children:"CV"})]})}));let f=(e,t)=>{(0,o.useEffect)(()=>{let s=s=>{!e.current||e.current.contains(s.target)||t(s)};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}},[e,t])};var u=s(4839),j=s(6164);function b(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,j.m6)((0,u.W)(t))}var p=s(3008),g=s(4635),w=s(4446);let v=(0,o.createContext)({}),y=e=>{let{items:t,initialScroll:s=0}=e,r=o.useRef(null),[l,i]=o.useState(!1),[n,c]=o.useState(!0);(0,o.useEffect)(()=>{r.current&&(r.current.scrollLeft=s,d())},[s]);let d=()=>{if(r.current){let{scrollLeft:e,scrollWidth:t,clientWidth:s}=r.current;i(e>0),c(e<t-s)}};return(0,a.jsx)(v.Provider,{value:{},children:(0,a.jsx)("div",{className:"relative w-full",children:(0,a.jsxs)("div",{className:"flex w-full overflow-x-scroll overscroll-x-auto py-1 md:py-1 scroll-smooth [scrollbar-width:none]",ref:r,onScroll:d,children:[(0,a.jsx)("div",{className:b("absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l")}),(0,a.jsx)("div",{className:b("flex flex-row justify-start gap-4 pl-4","max-w-7xl mx-auto"),children:t.map((e,t)=>(0,a.jsx)(g.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,delay:.2*t,ease:"easeOut",once:!0}},className:"last:pr-[5%] md:last:pr-[33%]  rounded-3xl",children:e},"card"+t))})]})})})},N=e=>{let{card:t,index:s,layout:r=!1}=e,[l,i]=(0,o.useState)(!1),[n,c]=(0,o.useState)({width:0,height:0}),[m,x]=(0,o.useState)(!1),h=(0,o.useRef)(null);(0,o.useEffect)(()=>{function e(e){"Escape"===e.key&&u()}return l?document.body.style.overflow="hidden":document.body.style.overflow="auto",window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[l]),f(h,()=>u());let u=()=>{i(!1)},j=e=>{let{naturalWidth:t,naturalHeight:s}=e.target;c({width:t,height:s}),x(t>s)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.M,{children:l&&(0,a.jsxs)("div",{className:"fixed inset-0 h-screen z-50 overflow-hidden flex items-center justify-center",children:[(0,a.jsx)("div",{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"}),(0,a.jsxs)("div",{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},ref:h,className:"relative z-[60] max-h-[90vh] max-w-[90vw] p-4",children:[(0,a.jsx)("button",{className:"fixed top-4 right-4 h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center z-50",onClick:u,children:(0,a.jsx)(p.Z,{className:"h-6 w-6 text-neutral-100 dark:text-neutral-900"})}),(0,a.jsx)(d.default,{src:t.src,alt:t.title,width:n.width,height:n.height,className:"rounded-3xl object-contain max-h-[calc(90vh-2rem)] max-w-[calc(90vw-2rem)]",onLoad:j})]})]})}),(0,a.jsxs)(g.E.button,{onClick:e=>{e.preventDefault(),i(!0)},className:b("rounded-3xl bg-black dark:bg-neutral-900 overflow-hidden flex flex-col items-start justify-start relative z-10 shadow-none border-none",m?"h-36 w-72 md:h-96 md:w-[43rem]":"h-72 w-32 md:h-[36rem] md:w-64"),children:[(0,a.jsx)(k,{src:t.src,alt:t.title,fill:!0,className:"object-contain absolute z-10 inset-0 bg-black",onLoad:j,style:{backgroundColor:"black"}}),(0,a.jsx)("div",{className:"absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full text-white z-20",children:(0,a.jsx)("h3",{className:"text-xl font-semibold",children:t.title})})]})]})},k=e=>{let{height:t,width:s,src:r,className:l,alt:i,onLoad:n,...c}=e,[m,x]=(0,o.useState)(!0);return(0,a.jsx)(d.default,{className:b("transition duration-300",m?"blur-sm":"blur-0",l),onLoad:e=>{x(!1),n&&n(e)},src:r,width:s,height:t,loading:"lazy",decoding:"async",blurDataURL:"string"==typeof r?r:void 0,alt:i||"Background of a beautiful view",...c})};function E(){return(0,o.useEffect)(()=>{let e=e=>{e.preventDefault();let t=e.target.getAttribute("href").slice(1),s=document.getElementById(t);s&&s.scrollIntoView({behavior:"smooth"})},t=document.querySelectorAll('a[href^="#"]');return t.forEach(t=>{t.addEventListener("click",e)}),()=>{t.forEach(t=>{t.removeEventListener("click",e)})}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l(),{id:"d54da0164ef47eb7",children:".smooth-scroll{scroll-behavior:smooth}"}),(0,a.jsxs)("main",{className:"jsx-d54da0164ef47eb7 min-h-screen bg-black flex flex-col items-center p-4 w-full sm:p-14 smooth-scroll",children:[(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 w-full max-w-4xl flex flex-col md:flex-row justify-center items-center",children:[(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 w-full md:w-auto mb-10 md:mb-0 md:mr-10 text-center",children:[(0,a.jsx)("div",{className:"jsx-d54da0164ef47eb7 flex justify-center mb-8 md:ml-[-30px]",children:(0,a.jsx)(h,{})}),(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 mt-8",children:[(0,a.jsx)(d.default,{src:"/Headshot1.png",alt:"Descriptive alt text",width:320,height:260,className:"mx-auto object-contain rounded-lg shadow-lg sm:w-80 sm:h-64 w-64 h-52"}),(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 mt-4 space-y-2",children:[(0,a.jsxs)("a",{href:"https://www.linkedin.com/in/janitrajkarnikar/",className:"jsx-d54da0164ef47eb7 flex items-center justify-center text-gray-300 hover:text-white",children:[(0,a.jsx)(i.Z,{className:"w-5 h-5 mr-2"}),"LinkedIn"]}),(0,a.jsxs)("a",{href:"https://github.com/aniJani",className:"jsx-d54da0164ef47eb7 flex items-center justify-center text-gray-300 hover:text-white",children:[(0,a.jsx)(n.Z,{className:"w-5 h-5 mr-2"}),"Github"]}),(0,a.jsxs)("a",{href:"mailto:rajkarnikarjanit@gmail.com",className:"jsx-d54da0164ef47eb7 flex items-center justify-center text-gray-300 hover:text-white",children:[(0,a.jsx)(c.Z,{className:"w-5 h-5 mr-2"}),"Mail"]})]})]})]}),(0,a.jsx)("div",{className:"jsx-d54da0164ef47eb7 w-full md:w-auto text-center md:text-left md:ml-10 md:mt-20",children:(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 mt-0 sm:mt-8 text-white max-w-xl",children:[(0,a.jsx)("h1",{className:"jsx-d54da0164ef47eb7 text-2xl sm:text-5xl font-bold",children:"Hi, I'm Janit."}),(0,a.jsxs)("p",{className:"jsx-d54da0164ef47eb7 mt-1 sm:mt-4 text-lg",children:["I'm in my second year of undergrad, majoring in ",(0,a.jsx)("span",{className:"jsx-d54da0164ef47eb7 font-semibold text-white",children:"Computer Science"})," with a minor in ",(0,a.jsx)("span",{className:"jsx-d54da0164ef47eb7 font-semibold text-white",children:"Economic Data Analysis"}),". I have hands-on experience with Machine Learning techniques and enjoy working on applications that leverage data-driven insights to solve real-world problems."]}),(0,a.jsx)("p",{className:"jsx-d54da0164ef47eb7 mt-1 sm:mt-4 text-lg",children:"I'm also interested in research, particularly in cybersecurity, where I'm delving into key challenges and contributing to the development of practical solutions."})]})})]}),(0,a.jsxs)("section",{id:"projects-section",className:"jsx-d54da0164ef47eb7 w-full max-w-5xl mt-20",children:[(0,a.jsxs)("div",{className:"jsx-d54da0164ef47eb7 flex items-start mb-12",children:[(0,a.jsx)("h2",{className:"jsx-d54da0164ef47eb7 text-4xl font-bold text-white text-left mr-8",children:"Projects:"}),(0,a.jsx)("div",{className:"jsx-d54da0164ef47eb7 text-gray-400 text-sm",children:(0,a.jsxs)("ul",{className:"jsx-d54da0164ef47eb7 space-y-2",children:[(0,a.jsx)("li",{className:"jsx-d54da0164ef47eb7",children:(0,a.jsx)("a",{href:"#calorie-tracker",className:"jsx-d54da0164ef47eb7 hover:underline transition-all duration-300 ease-in-out",children:"1. Calorie Tracker"})}),(0,a.jsx)("li",{className:"jsx-d54da0164ef47eb7",children:(0,a.jsx)("a",{href:"#designers-touch",className:"jsx-d54da0164ef47eb7 hover:underline transition-all duration-300 ease-in-out",children:"2. The Designer's Touch"})}),(0,a.jsx)("li",{className:"jsx-d54da0164ef47eb7",children:(0,a.jsx)("a",{href:"#emoki",className:"jsx-d54da0164ef47eb7 hover:underline transition-all duration-300 ease-in-out",children:"3. Emoki"})})]})})]}),(0,a.jsxs)("div",{id:"calorie-tracker",className:"jsx-d54da0164ef47eb7 mb-12 scroll-mt-20",children:[(0,a.jsx)("h3",{className:"jsx-d54da0164ef47eb7 text-2xl font-semibold text-white mb-2",children:"Calorie Tracker"}),(0,a.jsx)("div",{className:"jsx-d54da0164ef47eb7 flex flex-wrap gap-1 mb-4",children:["React Native","Node.js","SQLite"].map((e,t)=>(0,a.jsx)("span",{className:"jsx-d54da0164ef47eb7 text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full",children:e},t))}),(0,a.jsx)("p",{className:"jsx-d54da0164ef47eb7 text-gray-300 mb-2",children:"A mobile app with a very simple interface that helps users track their daily calorie intake."}),(0,a.jsx)(y,{items:[{category:"",title:"",src:"/CalorieTracker (2).jpg"},{category:"",title:"",src:"/CalorieTracker (3).jpg"},{category:"",title:"",src:"/CalorieTracker (1).jpg"},{category:"",title:"",src:"/CalorieTracker (5).jpg"},{category:"",title:"",src:"/CalorieTracker (4).jpg"}].map((e,t)=>(0,a.jsx)(N,{card:e,index:t,layout:!0},t))})]}),(0,a.jsxs)("div",{id:"designers-touch",className:"jsx-d54da0164ef47eb7 mb-2 scroll-mt-20",children:[(0,a.jsx)("h3",{className:"jsx-d54da0164ef47eb7 text-2xl font-semibold text-white mb-2",children:"The Designer's Touch"}),(0,a.jsx)("div",{className:"jsx-d54da0164ef47eb7 flex flex-wrap gap-1 mb-4",children:["React","Node.js","Three.js","Express","Firebase","AWS"].map((e,t)=>(0,a.jsx)("span",{className:"jsx-d54da0164ef47eb7 text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full",children:e},t))}),(0,a.jsxs)("p",{className:"jsx-d54da0164ef47eb7 text-gray-300",children:["A creative platform where users can design custom t-shirts and other merchandise, with a real-time 3D preview. The website is currently live at ",(0,a.jsx)("a",{href:"https://thedesignerstouch.com.np/",className:"jsx-d54da0164ef47eb7 text-blue-500 hover:underline",children:" www.thedesignerstouch.com.np"}),"."]}),(0,a.jsx)(y,{items:[{category:"",title:"",src:"/dt.png"},{category:"",title:"",src:"/dt2.png"},{category:"",title:"",src:"/dt3.png"},{category:"",title:"",src:"/dt4.png"},{category:"",title:"",src:"/dt6.png"},{category:"",title:"",src:"/dt7.png"},{category:"",title:"",src:"/dt8.png"}].map((e,t)=>(0,a.jsx)(N,{card:e,index:t,layout:!0},t))})]}),(0,a.jsxs)("div",{id:"emoki",className:"jsx-d54da0164ef47eb7 mb-12 scroll-mt-20",children:[(0,a.jsx)("h3",{className:"jsx-d54da0164ef47eb7 text-2xl font-semibold text-white mb-2",children:"Emoki"}),(0,a.jsx)("div",{className:"jsx-d54da0164ef47eb7 flex flex-wrap gap-1 mb-4",children:["React Native","Node.js","SQLite","Express","Flask","Firebase","MongoDB"].map((e,t)=>(0,a.jsx)("span",{className:"jsx-d54da0164ef47eb7 text-white border border-white opacity-50 text-xs font-medium py-1 px-2 rounded-full",children:e},t))}),(0,a.jsx)("p",{className:"jsx-d54da0164ef47eb7 text-gray-300 mb-2",children:"An emotion tracking app that aggregates users' emotions over time, helping them understand their emotional patterns."}),(0,a.jsx)(y,{items:[{category:"",title:"",src:"/Emoki (1).jpg"},{category:"",title:"",src:"/Emoki (2).jpg"},{category:"",title:"",src:"/Emoki (3).jpg"},{category:"",title:"",src:"/Emoki (4).jpg"},{category:"",title:"",src:"/Emoki (5).jpg"},{category:"",title:"",src:"/Emoki (6).jpg"}].map((e,t)=>(0,a.jsx)(N,{card:e,index:t,layout:!0},t))})]})]})]})]})}}},function(e){e.O(0,[2,194,971,23,744],function(){return e(e.s=14)}),_N_E=e.O()}]);