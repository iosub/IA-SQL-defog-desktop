(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{65313:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/check-readiness",function(){return n(46667)}])},26335:function(e,t,n){"use strict";var s=n(28598),a=n(1887),i=n.n(a);t.Z=()=>(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"Defog.ai - AI Assistant for Data Analysis"}),(0,s.jsx)("meta",{name:"description",content:"Train your AI data assistant on your own device"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})},82067:function(e,t,n){"use strict";var s=n(28598),a=n(82684),i=n(97574),o=n(79869),l=n(34376);n(12691);var r=n(26978),d=n(47663),c=n(56572);t.Z=e=>{let{id:t,userType:n,children:u,rootClassNames:m="",contentClassNames:g=""}=e,{Content:h,Sider:y}=o.Layout,[f,x]=(0,a.useState)([]),[p,k]=(0,a.useContext)(i.S),j=(0,l.useRouter)(),redirect=e=>{j.push(e)},logout=()=>{localStorage.removeItem("defogUser"),localStorage.removeItem("defogToken"),localStorage.removeItem("defogUserType"),k({user:null,token:null,userType:null}),redirect("/static/log-in.html")},_=(0,d.usePathname)();(0,a.useEffect)(()=>{x(("admin"==n?[{key:"manage-database",title:"Manage Database",href:"/static/extract-metadata.html"},{key:"manage-users",title:"Manage Users",href:"/static/manage-users.html"},{key:"manage-tools",title:"Manage tools",href:"/static/manage-tools.html"},{key:"check-readiness",title:"Check Readiness",href:"/static/check-readiness.html"},{key:"align-model",title:"Align Model",href:"/static/align-model.html"},{key:"view-feedback",title:"View Feedback",href:"/static/view-feedback.html"},{key:"query-data",title:"Query Data",href:"/static/query-data.html"},{key:"logout",classNames:"self-end",title:"Logout",href:"#",onClick:logout}]:n?[{key:"query-data",title:"Query Data",href:"/static/query-data.html"},{key:"logout",classNames:"self-end",title:"Logout",href:"#",onClick:logout}]:[]).map(e=>(e.current=e.href==_,e)))},[n]);let[v,S]=(0,a.useState)("flex flex-col md:min-h-screen relative container mx-auto");return(0,a.useEffect)(()=>{"/query-data"===_&&S("flex flex-col md:min-h-screen relative")},[_]),(0,s.jsxs)("div",{className:(0,c.m6)(v,m),children:[f.length?(0,s.jsx)(r.l2,{rootClassNames:"border-b",items:f}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)("div",{className:(0,c.m6)("grow",g),children:u})]})}},46667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return check_readiness}});var s=n(28598),a=n(82684),i=n(26335),o=n(37490),l=n(92696),r=n(24788),d=n(1065),c=n(18953),u=n(30964),m=n(17931),g=n(2160),h=n(10998),y=n(45624),f=n(61706),x=n(34376),check_readiness_BasicStatus=e=>{let{loading:t,metadataUploaded:n,glossaryUploaded:a,goldenQueriesUploaded:i}=e,o=(0,x.useRouter)();return(0,s.jsxs)(l.default,{span:24,style:{paddingTop:"1em",paddingBottom:"1em"},children:[(0,s.jsxs)("h2",{children:[(0,s.jsx)(d.default,{title:"Do regular quality checks to keep defog fully customised for databse",children:(0,s.jsx)(y.Z,{style:{marginRight:"0.5em",fontSize:"1.2em",color:"#1890ff",cursor:"pointer"}})}),"Basic Configuration Status"]}),(0,s.jsx)(h.default,{style:{padding:"1.2em"},dataSource:[{key:"1",status:"Metadata Updated",tooltip:"Metadata (table names, columns names, column descriptions) updated on Defog",value:t?"⏳":n?"✅":"❌",onClick:()=>o.push("/extract-metadata")},{key:"2",status:"Instruction Set Updated",tooltip:"Explicit instructions to guide generation added to Defog",value:t?"⏳":a?"✅":"❌",onClick:()=>o.push("/align-model")},{key:"3",status:"Golden Queries Updated",tooltip:"Golden queries to ground the model's generation added to Defog",value:t?"⏳":i?"✅":"❌",onClick:()=>o.push("/align-model")}],columns:[{title:"Configuration",dataIndex:"status",key:"status",render:(e,t)=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.default,{title:t.tooltip,children:(0,s.jsx)("span",{style:{cursor:"pointer"},children:e})}),(0,s.jsx)(f.Z,{style:{marginLeft:"0.5em",color:"#1890ff",cursor:"pointer"}})]}),align:"center",width:"50%"},{title:"Status",dataIndex:"value",key:"value",align:"center",width:"50%"}],pagination:!1,onRow:e=>({onClick:()=>e.onClick()})})]})},p=n(20259),k=n.n(p),j=n(55658),_=n(59718),v=n(58012),S=n(15147),C=n(73584),w=n(2329);let I=["#0088FE","#FF8042"];var check_readiness_GoldenQueriesValidity=e=>{let{loadingGoldenQueries:t,totalGoldenQueries:n,totalGoldenQueriesValid:i,totalGoldenQueriesInvalid:o,invalidGoldenQueries:l,checkGoldenQueriesValidity:r}=e,[c,u]=(0,a.useState)(!1),g=[{name:"Valid Golden Queries",value:i},{name:"Invalid Golden Queries",value:o}],y=l.map((e,t)=>({key:t,question:"Question ".concat(t+1,": ").concat(e.question),sql:e.sql,error:e.valid_error}));return(0,s.jsxs)("div",{style:{padding:"1.5em",paddingBottom:"0em"},children:[(0,s.jsxs)(k(),{type:"primary",onClick:()=>{c||r(),u(!c)},loading:t,ghost:!0,style:{width:"100%",marginTop:"1em"},children:[c?"Hide Golden Queries Validity":"1. Check Golden Queries Validity",(0,s.jsx)(d.default,{title:"See if your golden queries can be executed against an empty database with your schema!",children:(0,s.jsx)(m.default,{style:{marginLeft:"0em",fontSize:"1.2em",color:"#1890ff",cursor:"pointer"}})})]}),c&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{textAlign:"center",marginTop:"2em",marginBottom:"2em"},children:[(0,s.jsxs)("p",{style:{fontSize:"1.2em"},children:["Total Golden Queries: ",n]}),(0,s.jsxs)(_.u,{width:400,height:250,style:{margin:"0 auto"},children:[(0,s.jsx)(v.b,{data:g,cx:200,cy:100,outerRadius:100,fill:"#8884d8",dataKey:"value",children:g.map((e,t)=>(0,s.jsx)(S.b,{fill:I[t%I.length]},"cell-".concat(t)))}),(0,s.jsx)(C.u,{}),(0,s.jsx)(w.D,{})]})]}),(0,s.jsxs)("p",{style:{fontSize:"1.2em"},children:[(0,s.jsx)(j.Z,{style:{color:"#ff4d4f",marginRight:"0.5em"}}),"The following is a list of invalid Golden queries:"]}),(0,s.jsx)(h.default,{dataSource:y,columns:[{title:"Question",dataIndex:"question",key:"question",width:"33%",align:"center"},{title:"SQL",dataIndex:"sql",key:"sql",width:"33%",align:"center"},{title:"Error",dataIndex:"error",key:"error",width:"33%",align:"center"}],pagination:!1,style:{marginTop:"1em"}})]})]})},check_readiness_InstructionConsistency=e=>{let{loadingInstructionConsistency:t,instructionConsistencyRating:n,inconsistentInstructions:i,inconsistentReason:o,checkInstructionConsistency:l}=e,[r,c]=(0,a.useState)(!1),u=i.map((e,t)=>({key:t,instruction:e,reason:o[t]}));return(0,s.jsxs)("div",{style:{padding:"1.5em",paddingBottom:"0em"},children:[(0,s.jsxs)(k(),{type:"primary",onClick:()=>{r||l(),c(!r)},loading:t,ghost:!0,style:{width:"100%"},children:[r?"Hide Instructions Consistency Check":"2. Check Instructions Consistency",(0,s.jsx)(d.default,{title:"Make sure you instructions are consistent and do not contradict each other",children:(0,s.jsx)(m.default,{style:{marginLeft:"0em",fontSize:"1.2em",color:"#1890ff",cursor:"pointer"}})})]}),r&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"2rem",marginBottom:"1.5rem"},children:(0,s.jsx)("p",{style:{marginTop:"1.5em",color:-1===n.indexOf("Excellent")?"red":"green",fontWeight:"bold",margin:"auto",fontSize:"1.5rem"},children:n?-1===n.indexOf("Excellent")?"Your instructions have inconsistencies!":"Excellent: Your instructions are consistent!":""})}),n&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{maxHeight:"300px",overflowY:"auto"},children:(0,s.jsx)(h.default,{dataSource:u,columns:[{title:"Inconsistent Instruction",dataIndex:"instruction",key:"instruction",width:"50%",align:"center"},{title:"Reason for Inconsistency",dataIndex:"reason",key:"reason",width:"50%",align:"center"}],pagination:!1})})})]})]})},T=n(29807),b=n(37423),Q=n(55610),check_readiness_GoldenQueryCoverage=e=>{let{loadingGoldenQueryCoverage:t,totalTables:n,totalColumns:i,coveredTables:o,coveredColumns:l,missingTables:r,checkGoldenQueryCoverage:c}=e,[u,g]=(0,a.useState)(!1),formatPercentage=e=>Number(e).toPrecision(3),y=formatPercentage(o/n*100),f=formatPercentage(l/i*100),getProgressColor=e=>e<10?"#ff4d4f":e<50?"#faad14":e<80?"#a0d911":"#52c41a",x=[{key:"1",category:"Tables",total:n,covered:o,percentage:y},{key:"2",category:"Columns",total:i,covered:l,percentage:f}],p=[{title:"Category",dataIndex:"category",key:"category",width:"16.67%"},{title:"Total",dataIndex:"total",key:"total",width:"16.67%"},{title:"Mentioned ",dataIndex:"covered",key:"covered",width:"16.67%"},{title:"Coverage",dataIndex:"percentage",key:"percentage",width:"50%",render:e=>(0,s.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,s.jsx)(T.default,{percent:e,status:"active",strokeColor:getProgressColor(Number(e)),style:{flexGrow:1,marginRight:"10px"}})})}];return(0,s.jsxs)("div",{style:{padding:"1.5em",paddingBottom:"0em",marginBottom:"4rem"},children:[(0,s.jsxs)(k(),{type:"primary",onClick:()=>{u||c(),g(!u)},loading:t,ghost:!0,style:{width:"100%"},children:[u?"Hide Golden Query Coverage":"3. Check Golden Query Coverage",(0,s.jsx)(d.default,{title:"See if your golden queries cover a significant portion of your schema and which tables are missing",children:(0,s.jsx)(m.default,{style:{marginLeft:"0em",fontSize:"1.2em",color:"#1890ff",cursor:"pointer"}})})]}),u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{marginTop:"4em"},children:(0,s.jsx)(h.default,{dataSource:x,columns:p,pagination:!1,style:{marginBottom:"1em"}})}),(0,s.jsxs)("div",{style:{marginTop:"1em",marginBottom:"3em",width:"100%",maxHeight:"200px",overflowY:"auto"},children:[(0,s.jsxs)("p",{style:{marginTop:"1em",marginBottom:"1em",fontSize:"1.2em"},children:[(0,s.jsx)(Q.Z,{style:{color:"#ff4d4f",marginRight:"0.3em"}}),"The following tables are missing from the Golden queries:"]}),(0,s.jsx)(b.default,{dataSource:r,renderItem:e=>(0,s.jsx)(b.default.Item,{children:(0,s.jsx)(b.default.Item.Meta,{title:(0,s.jsx)("div",{style:{textAlign:"center"},children:e})})}),bordered:!0})]})]})]})},q=n(82067),check_readiness=()=>{let[e,t]=(0,a.useState)(!1),[n,h]=(0,a.useState)(!1),[y,f]=(0,a.useState)(!1),[x,p]=(0,a.useState)(!1),[k,j]=(0,a.useState)(""),[_,v]=(0,a.useState)(!1),[S,C]=(0,a.useState)(!1),[w,I]=(0,a.useState)(!1),[T,b]=(0,a.useState)(0),[Q,G]=(0,a.useState)(0),[B,R]=(0,a.useState)(0),[N,D]=(0,a.useState)([]),[E,P]=(0,a.useState)(""),[O,z]=(0,a.useState)([]),[F,V]=(0,a.useState)([]),[Z,L]=(0,a.useState)(0),[M,U]=(0,a.useState)(0),[A,H]=(0,a.useState)(0),[J,Y]=(0,a.useState)(0),[X,K]=(0,a.useState)([]),W="Defog".split(","),[$,ee]=(0,a.useState)(null),checkBasicReadiness=async()=>{let e;if(localStorage.getItem("defogToken"))e=localStorage.getItem("defogToken");else{c.default.error("Please login to continue");return}t(!0);let n=await fetch("http://localhost:33364/readiness/basic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,key_name:$})}),s=await n.json();s.success?(t(!1),v(s.metadata),C(s.golden_queries),I(s.glossary)):(t(!1),c.default.error("An error occurred while checking if your metadata was adequately added."))},checkGoldenQueriesValidity=async()=>{h(!0);let e=await fetch("http://localhost:33364/readiness/check_golden_queries_validity",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:k,key_name:$})}),t=await e.json();h(!1),b(t.total_golden_queries),R(t.invalid_golden_queries_count),G(t.total_golden_queries-t.invalid_golden_queries_count),D([...t.invalid_golden_queries]),console.log(t)},checkInstructionConsistency=async()=>{f(!0);let e=await fetch("http://localhost:33364/readiness/check_instruction_consistency",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:k,key_name:$})}),t=await e.json();P(t.message),z([...t.inconsistent_glossary_lines]),V([...t.reasons_for_inconsistency]),f(!1),console.log(t)},checkGoldenQueryCoverage=async()=>{p(!0);let e=await fetch("http://localhost:33364/readiness/check_golden_query_coverage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:k,key_name:$})}),t=await e.json();L(t.num_total_tables),U(t.num_total_cols),H(t.num_total_tables-t.num_missing_tables),Y(t.num_total_cols-t.num_missing_cols),K([...t.missing_tables]),p(!1),console.log(t)};return(0,a.useEffect)(()=>{let e=localStorage.getItem("defogDbSelected");e?ee(e):ee(W[0])},[]),(0,a.useEffect)(()=>{let e=localStorage.getItem("defogToken");$&&($&&localStorage.setItem("defogDbSelected",$),j(e),t(!0),setTimeout(()=>{checkBasicReadiness()},100))},[$]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{}),(0,s.jsxs)(q.Z,{id:"check-readiness",userType:"admin",children:[W.length>1?(0,s.jsx)(o.default,{type:"flex",height:"100vh",children:(0,s.jsx)(l.default,{span:24,style:{paddingBottom:"1em"},children:(0,s.jsx)(r.default,{style:{width:"100%"},onChange:e=>{ee(e)},options:W.map(e=>({value:e,key:e,label:e})),value:$})})}):null,(0,s.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"1em",paddingBottom:"0em"},children:(0,s.jsx)(u.Z,{style:{marginRight:"0.5em",fontSize:"3em",color:"#52c41a"}})}),(0,s.jsxs)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"0.5em",paddingBottom:"1em"},children:["System Readiness Check",(0,s.jsx)(d.default,{title:"Check if you have added aligned your Defog instance sufficiently",children:(0,s.jsx)(m.default,{style:{marginLeft:"0.5em",fontSize:"1em",color:"#1890ff",cursor:"pointer"}})})]}),(0,s.jsxs)(o.default,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,s.jsx)(check_readiness_BasicStatus,{loading:e,metadataUploaded:_,glossaryUploaded:w,goldenQueriesUploaded:S}),(0,s.jsxs)(l.default,{span:24,style:{paddingTop:"1em"},children:[(0,s.jsxs)("h2",{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(d.default,{title:"Do regular quality checks to keep defog fully customised for databse",children:(0,s.jsx)(g.Z,{style:{marginRight:"0.5em",fontSize:"1.2em",color:"#1890ff",cursor:"pointer"}})}),"Quality Checks"]}),(0,s.jsx)(check_readiness_GoldenQueriesValidity,{loadingGoldenQueries:n,totalGoldenQueries:T,totalGoldenQueriesValid:Q,totalGoldenQueriesInvalid:B,invalidGoldenQueries:N,checkGoldenQueriesValidity:checkGoldenQueriesValidity}),(0,s.jsx)(check_readiness_InstructionConsistency,{loadingInstructionConsistency:y,instructionConsistencyRating:E,inconsistentInstructions:O,inconsistentReason:F,checkInstructionConsistency:checkInstructionConsistency}),(0,s.jsx)(check_readiness_GoldenQueryCoverage,{loadingGoldenQueryCoverage:x,totalTables:Z,totalColumns:M,coveredTables:A,coveredColumns:J,missingTables:X,checkGoldenQueryCoverage:checkGoldenQueryCoverage})]})]})]})]})}}},function(e){e.O(0,[435,25,774,888,179],function(){return e(e.s=65313)}),_N_E=e.O()}]);