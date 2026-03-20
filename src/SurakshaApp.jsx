import { useState, useEffect, useRef } from "react";

/* ─── GLOBAL CSS injected once ─────────────────────────────── */
const G = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Nunito+Sans:wght@300;400;600;700&display=swap');
  @keyframes surSpin  { to { transform: rotate(360deg); } }
  @keyframes surMarq  { to { transform: translateX(-50%); } }
  @keyframes surBlink { 0%,100%{opacity:1}50%{opacity:.3} }
  @keyframes surFU    { from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)} }
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:100%; overflow-x:hidden; }
  html { scroll-behavior:smooth; }
  body { font-family:'Nunito Sans',sans-serif; background:#F7F3EC; color:#0D1B3E; }
  #root { width:100% !important; max-width:100% !important; }
  ::-webkit-scrollbar { width:4px; }
  ::-webkit-scrollbar-thumb { background:#C8962C; border-radius:2px; }
  a { transition:color .2s; }
  input:focus { outline:none; border-color:#C8962C !important; box-shadow:0 0 0 3px rgba(200,150,44,.13) !important; }
`;

/* ─── Ashoka Chakra ─────────────────────────────────────────── */
function Chakra({ size = 32, color = "#C8962C", speed = "8s" }) {
  const c = size / 2, oR = size * .46, iR = size * .29, hR = size * .06;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      style={{ animation: `surSpin ${speed} linear infinite`, flexShrink: 0, display:"block" }}>
      <circle cx={c} cy={c} r={oR} fill="none" stroke={color} strokeWidth={size*.035}/>
      <circle cx={c} cy={c} r={iR} fill="none" stroke={color} strokeWidth={size*.022}/>
      {Array.from({length:24},(_,i)=>{
        const a=(i*15*Math.PI)/180;
        return <line key={i} x1={c+iR*Math.cos(a)} y1={c+iR*Math.sin(a)}
          x2={c+oR*Math.cos(a)} y2={c+oR*Math.sin(a)}
          stroke={color} strokeWidth={size*.018} strokeLinecap="round"/>;
      })}
      <circle cx={c} cy={c} r={hR} fill={color}/>
    </svg>
  );
}

/* ─── Scroll-reveal wrapper ─────────────────────────────────── */
function Fade({ children, delay=0, style={} }) {
  const ref=useRef(null), [v,setV]=useState(false);
  useEffect(()=>{
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:.08});
    if(ref.current)o.observe(ref.current);
    return ()=>o.disconnect();
  },[]);
  return <div ref={ref} style={{opacity:v?1:0,transform:v?"none":"translateY(22px)",
    transition:`opacity .6s ease ${delay}s,transform .6s ease ${delay}s`,...style}}>{children}</div>;
}

/* ─── Animated number counter ───────────────────────────────── */
function Num({ to }) {
  const ref=useRef(null),[v,setV]=useState(0),done=useRef(false);
  useEffect(()=>{
    const o=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!done.current){
        done.current=true;
        let n=0;const run=()=>{n+=Math.ceil(to/60);if(n>=to){setV(to);return;}setV(n);requestAnimationFrame(run);};run();
      }
    },{threshold:.3});
    if(ref.current)o.observe(ref.current);
    return ()=>o.disconnect();
  },[to]);
  return <span ref={ref}>{v}</span>;
}

/* ─── Radar canvas ──────────────────────────────────────────── */
function Radar() {
  const can=useRef(null), ang=useRef(0);
  useEffect(()=>{
    const cv=can.current; if(!cv)return;
    const ctx=cv.getContext("2d"),W=cv.width,H=cv.height;
    const zones=[{x:W*.5,y:H*.5,r:H*.33,c:"#C8962C"},{x:W*.75,y:H*.25,r:H*.16,c:"#E8B84B"},
      {x:W*.2,y:H*.3,r:H*.12,c:"#1E3370"},{x:W*.72,y:H*.7,r:H*.18,c:"#C8962C"},{x:W*.25,y:H*.72,r:H*.1,c:"#E8B84B"}];
    const dots=[{x:W*.44,y:H*.42},{x:W*.54,y:H*.52},{x:W*.48,y:H*.6},
      {x:W*.73,y:H*.24},{x:W*.78,y:H*.3},{x:W*.7,y:H*.68},{x:W*.76,y:H*.74},
      {x:W*.22,y:H*.28},{x:W*.25,y:H*.7},{x:W*.35,y:H*.55}];
    let fr;
    const draw=()=>{
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle="rgba(200,150,44,.06)";ctx.lineWidth=.5;
      for(let i=0;i<=W;i+=32){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,H);ctx.stroke();}
      for(let i=0;i<=H;i+=32){ctx.beginPath();ctx.moveTo(0,i);ctx.lineTo(W,i);ctx.stroke();}
      zones.forEach(z=>{
        ctx.beginPath();ctx.arc(z.x,z.y,z.r,0,Math.PI*2);
        ctx.strokeStyle=z.c+"88";ctx.lineWidth=1.5;ctx.stroke();
        ctx.fillStyle=z.c+"08";ctx.fill();
      });
      const a=(ang.current*Math.PI)/180,[cx,cy,r]=[zones[0].x,zones[0].y,zones[0].r];
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,a-.4,a);ctx.closePath();
      ctx.fillStyle="rgba(200,150,44,.13)";ctx.fill();
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
      ctx.strokeStyle="rgba(200,150,44,.7)";ctx.lineWidth=1.8;ctx.stroke();
      [.4,.7,1].forEach((s,i)=>{
        ctx.beginPath();ctx.arc(cx,cy,r*s,0,Math.PI*2);
        ctx.strokeStyle=`rgba(200,150,44,${.09+i*.04})`;ctx.lineWidth=1;ctx.stroke();
      });
      dots.forEach((d,i)=>{
        ctx.beginPath();ctx.arc(d.x,d.y,4,0,Math.PI*2);
        ctx.fillStyle=i%2?"rgba(232,184,75,.85)":"rgba(200,150,44,.9)";ctx.fill();
      });
      ctx.beginPath();ctx.arc(cx,cy,5,0,Math.PI*2);ctx.fillStyle="#C8962C";ctx.fill();
      ang.current=(ang.current+2)%360;fr=requestAnimationFrame(draw);
    };
    draw(); return ()=>cancelAnimationFrame(fr);
  },[]);
  return <canvas ref={can} width={440} height={300} style={{width:"100%",borderRadius:12}}/>;
}

/* ─── DATA ──────────────────────────────────────────────────── */
const ALERTS=[
  {lvl:"danger",city:"Mumbai",msg:"Heavy rainfall 28mm/hr — Rain trigger ACTIVE. Payout processing.",icon:"🌧️",bg:"#1565C0"},
  {lvl:"danger",city:"Delhi",msg:"AQI 245 (Very Poor) — Pollution trigger ACTIVE. ₹150 payout processing.",icon:"🌫️",bg:"#B71C1C"},
  {lvl:"warning",city:"Hyderabad",msg:"Heat index 47°C — Heat wave alert. Take precautions, hydrate regularly.",icon:"🌡️",bg:"#E65100"},
  {lvl:"safe",city:"Bengaluru",msg:"Clear conditions. All systems normal. No active triggers in your zone.",icon:"☀️",bg:"#1B5E20"},
];

const CITIES=[
  {city:"Mumbai",temp:31,feels:38,rain:28,aqi:82,wind:22,fog:4000,status:"Rain Alert",icon:"🌧️",alert:true,trigger:"Rain"},
  {city:"Delhi",temp:38,feels:44,rain:0,aqi:245,wind:12,fog:800,status:"AQI Danger",icon:"🌫️",alert:true,trigger:"AQI"},
  {city:"Chennai",temp:35,feels:41,rain:4,aqi:98,wind:18,fog:8000,status:"Clear",icon:"🌤️",alert:false,trigger:null},
  {city:"Hyderabad",temp:42,feels:47,rain:0,aqi:112,wind:9,fog:10000,status:"Heat Alert",icon:"🌡️",alert:true,trigger:"Heat Wave"},
  {city:"Bengaluru",temp:27,feels:29,rain:2,aqi:68,wind:15,fog:9000,status:"Normal",icon:"☀️",alert:false,trigger:null},
  {city:"Kolkata",temp:33,feels:40,rain:14,aqi:145,wind:24,fog:3000,status:"Wind Alert",icon:"🌪️",alert:true,trigger:"Wind"},
  {city:"Pune",temp:29,feels:33,rain:6,aqi:75,wind:11,fog:7000,status:"Light Rain",icon:"🌦️",alert:false,trigger:null},
  {city:"Ahmedabad",temp:43,feels:48,rain:0,aqi:168,wind:7,fog:9000,status:"Extreme Heat",icon:"🔥",alert:true,trigger:"Heat Wave"},
];

const PLATFORMS=[
  {icon:"🛵",name:"Swiggy",cat:"Food & Grocery",count:"3,00,000+"},
  {icon:"🍽️",name:"Zomato",cat:"Food Delivery",count:"3,50,000+"},
  {icon:"⚡",name:"Zepto",cat:"10-min Grocery",count:"30,000+"},
  {icon:"📦",name:"Amazon Flex",cat:"E-commerce",count:"1,20,000+"},
  {icon:"🛍️",name:"Blinkit",cat:"Quick Commerce",count:"40,000+"},
  {icon:"🏃",name:"Dunzo",cat:"Hyperlocal",count:"20,000+"},
  {icon:"🚚",name:"Porter",cat:"Logistics",count:"50,000+"},
  {icon:"📬",name:"Delhivery",cat:"Logistics",count:"2,00,000+"},
];

const TRIGGERS=[
  {icon:"🌧️",name:"Heavy Rain",thresh:">20mm/hr for 30+ min",desc:"Most frequent trigger during monsoon. Confirmed by OpenWeatherMap + IMD Nowcast before payout fires.",pay:"₹100–₹500/day",plans:["Basic","Plus","Pro","Pro+"]},
  {icon:"🌫️",name:"Air Pollution",thresh:"AQI >200 for 2+ hours",desc:"Very Poor AQI causes serious respiratory damage for outdoor workers. Confirmed by CPCB real-time monitoring.",pay:"₹150–₹400/day",plans:["Plus","Pro","Pro+"]},
  {icon:"🌡️",name:"Heat Wave",thresh:"Feels-like >45°C for 4+ hrs",desc:"Extreme heat causes heat-stroke risk. Confirmed by IMD heat index cross-validated with Weather.com.",pay:"₹200–₹350/day",plans:["Pro","Pro+"]},
  {icon:"🌁",name:"Dense Fog",thresh:"Visibility <200m for 2+ hrs",desc:"Sub-200m visibility dramatically increases collision risk. Satellite data + local APIs confirm independently.",pay:"₹150–₹400/day",plans:["Plus","Pro","Pro+"]},
  {icon:"🌪️",name:"High Wind",thresh:"Wind >50km/hr for 1+ hr",desc:"Strong winds make delivery riding dangerous for partners carrying large bags on two-wheelers.",pay:"₹100–₹450/day",plans:["Basic","Plus","Pro","Pro+"]},
  {icon:"⛈️",name:"Thunderstorm",thresh:"IMD severe weather warning",desc:"Official IMD warnings trigger max payout instantly + in-app safety advisory to all active partners.",pay:"Maximum + safety alert",plans:["Basic","Plus","Pro","Pro+"]},
];

const PLANS=[
  {name:"Basic",price:29,sub:"Entry protection",feat:false,
   features:[["Rain ₹100/day",true],["Storm ₹100/day",true],["Accident ₹50,000",true],["Max ₹300/week",true],["2 platforms",true],["AQI trigger",false],["Heat wave",false],["Multi-zone",false]]},
  {name:"Plus",price:59,sub:"Best for daily riders",feat:true,
   features:[["Rain ₹200/day",true],["AQI ₹150/day",true],["Fog ₹150/day",true],["Storm ₹200/day",true],["Accident ₹1,00,000",true],["Max ₹700/week",true],["4 platforms",true],["Heat wave",false]]},
  {name:"Pro",price:99,sub:"High-frequency riders",feat:false,
   features:[["Rain ₹350/day",true],["AQI ₹250/day",true],["Heat ₹200/day",true],["All triggers active",true],["Accident ₹2,00,000",true],["Max ₹1,400/week",true],["Unlimited platforms",true],["All India zones",true]]},
  {name:"Pro+",price:149,sub:"Maximum protection",feat:false,
   features:[["Rain ₹500/day",true],["AQI ₹400/day",true],["Heat ₹350/day",true],["All triggers max",true],["Accident ₹5,00,000",true],["Max ₹2,500/week",true],["Unlimited + priority",true],["24×7 priority support",true]]},
];

const AI_ITEMS=[
  {icon:"⚡",t:"Trigger Evaluation Engine",d:"Rule engine + Random Forest validates zone conditions across 3 independent data sources. Payouts fire in under 60 seconds."},
  {icon:"🗺️",t:"City-Level Threshold Calibration",d:"LSTM model uses 3 years of weather, delivery volume, and incident data. Bengaluru's threshold differs from Delhi's. Re-calibrates quarterly."},
  {icon:"🔍",t:"Multi-Platform Fraud Detection",d:"Isolation Forest + GPS anomaly detection watches every payout event across all platforms. Target: below 0.5% false payout rate."},
  {icon:"📈",t:"Risk-Based Dynamic Pricing",d:"LSTM + gradient boosting forecasts zone risk 7 days ahead. High-risk weeks see adjusted premiums — keeping Suraksha viable through monsoon."},
  {icon:"🔗",t:"Multi-Platform Partner Intelligence",d:"Graph model builds a unified partner activity profile across all linked apps. Correctly attributes payouts when active on multiple platforms."},
  {icon:"💬",t:"AI Chatbot — Hindi & English 24×7",d:"Claude API (Anthropic) + LangChain + Pinecone RAG. 'Why didn't I get paid yesterday?' gets an instant answer in Hindi or English."},
  {icon:"📊",t:"Actuarial Risk Modelling",d:"Monte Carlo simulation + XGBoost regression projects expected claim rates by zone, platform, season. Drives pricing and reinsurance structuring."},
];

const COMPLIANCE_ITEMS=[
  {icon:"🏛️",t:"IRDAI Insurance Distribution",d:"Embedded insurance distributor via Digit Insurance / ICICI Lombard. Platforms act as Corporate Agents — zero additional licensing burden."},
  {icon:"🏦",t:"RBI PPI Wallet Licence",d:"Payout wallet under a Prepaid Payment Instrument licence via NBFC partner, regulated by RBI. Auto-debit under UPI AutoPay e-mandate framework."},
  {icon:"🔒",t:"DPDP Act 2023 Compliant",d:"Explicit informed consent at onboarding. Data retention capped at 24 months. Right to erasure and data portability fully supported in-app."},
  {icon:"📍",t:"Zone-Level Data Only",d:"All trigger data is aggregated zone-level — never personal. GPS data for anti-fraud is processed on-device, encrypted, never shared."},
  {icon:"🧱",t:"Platform Data Isolation",d:"Data from each platform siloed in separate encrypted namespaces. Swiggy's data is never visible to Zomato's systems — enforced at infrastructure level."},
  {icon:"🛡️",t:"End-to-End Security",d:"All partner data encrypted at rest (AES-256) and in transit (TLS 1.3). API credentials via AWS Secrets Manager. Annual third-party security audit."},
];

const STEPS=[
  {n:"01",t:"Link All Platforms",d:"Open Suraksha inside your Swiggy / Zomato partner app. Link every delivery platform — one account covers all simultaneously."},
  {n:"02",t:"Quick eKYC in 2 Minutes",d:"Aadhaar-based eKYC via DigiLocker. Already verified on Swiggy or Zomato? This step is completely skipped."},
  {n:"03",t:"Choose Your Weekly Plan",d:"Pick Basic (₹29), Plus (₹59), Pro (₹99), or Pro+ (₹149). Cancel or upgrade any Monday — zero lock-in."},
  {n:"04",t:"24×7 Live Zone Monitoring",d:"Suraksha polls real-time weather and AQI every 15 minutes for your active 5km×5km zone across all linked platforms."},
  {n:"05",t:"AI Trigger Evaluation",d:"AI verifies conditions against your plan thresholds, validated by 2 of 3 independent data sources. Acts immediately."},
  {n:"06",t:"₹ In Your Wallet in 60s",d:"Payout lands within 60 seconds. Push notification tells you what triggered and how much. No form. No follow-up."},
  {n:"07",t:"Weekly Summary Dashboard",d:"Every week: payouts received, trigger events, days covered, and 7-day weather forecast for your zone."},
];

/* ─── Shared style tokens ───────────────────────────────────── */
const EB={display:"inline-flex",alignItems:"center",gap:8,fontSize:".6rem",fontWeight:700,letterSpacing:"2.5px",textTransform:"uppercase",color:"#C8962C",marginBottom:10};
const H2={fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.5rem,2.5vw,2.3rem)",fontWeight:700,lineHeight:1.12,color:"#0D1B3E",letterSpacing:"-.3px",maxWidth:620};
const H2W={...H2,color:"#fff"};
const GR={width:42,height:2,background:"linear-gradient(90deg,#C8962C,#F5DFA0)",margin:"12px 0"};
const DESC={fontSize:".85rem",color:"#7A8BB0",lineHeight:1.8,maxWidth:480,marginTop:8};
const CARD={background:"#fff",border:"1px solid rgba(13,27,62,.09)",borderRadius:12,boxShadow:"0 2px 12px rgba(13,27,62,.07)"};
const BG={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:7,background:"linear-gradient(135deg,#E8B84B,#C8962C)",color:"#0D1B3E",fontFamily:"'Nunito Sans',sans-serif",fontWeight:700,fontSize:".82rem",padding:"12px 26px",borderRadius:6,border:"none",cursor:"pointer",boxShadow:"0 6px 20px rgba(200,150,44,.22)",transition:"all .25s"};
const BN={display:"inline-flex",alignItems:"center",gap:7,background:"#fff",color:"#0D1B3E",fontFamily:"'Nunito Sans',sans-serif",fontWeight:700,fontSize:".82rem",padding:"12px 20px",borderRadius:6,border:"2px solid rgba(13,27,62,.15)",cursor:"pointer",transition:"all .25s"};
const BO={display:"inline-flex",alignItems:"center",gap:7,border:"1.5px solid rgba(255,255,255,.22)",color:"rgba(255,255,255,.82)",fontFamily:"'Nunito Sans',sans-serif",fontWeight:600,fontSize:".82rem",padding:"12px 26px",borderRadius:6,background:"transparent",cursor:"pointer",transition:"all .25s"};
const SP="0 56px"; // section horizontal padding as CSS string for shorthand

/* ─── Weather Page ──────────────────────────────────────────── */
function WeatherPage({onBack}) {
  const [sel,setSel]=useState("Mumbai");
  const city=CITIES.find(c=>c.city===sel)||CITIES[0];

  return (
    <div style={{background:"#F7F3EC",minHeight:"100vh",padding:"90px 0 64px",width:"100%"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:SP}}>
        <Fade><div style={EB}><span style={{display:"block",width:18,height:1.5,background:"#C8962C"}}/>Weather Alerts</div></Fade>
        <Fade delay={.05}><h2 style={H2}>Live weather risk for <em style={{color:"#C8962C",fontStyle:"italic"}}>your delivery zone</em></h2></Fade>
        <Fade delay={.08}><div style={GR}/></Fade>
        <Fade delay={.1}><p style={DESC}>Suraksha monitors environmental conditions across all major Indian cities in real time. When conditions cross trigger thresholds, payouts fire automatically — before you even know there is a problem.</p></Fade>

        {city.alert&&<Fade delay={.12}>
          <div style={{marginTop:24,background:"#FFF3E0",border:"1.5px solid #F57C00",borderLeft:"4px solid #E65100",borderRadius:10,padding:"15px 20px",display:"flex",alignItems:"center",gap:12}}>
            <span style={{fontSize:22}}>⚠️</span>
            <div>
              <div style={{fontWeight:700,fontSize:".84rem",color:"#E65100",marginBottom:3}}>ACTIVE TRIGGER — {city.city} — {city.trigger} Alert</div>
              <div style={{fontSize:".74rem",color:"#BF360C"}}>Trigger conditions MET in your zone. If you are currently active on any linked platform, payout will process automatically within 60 seconds.</div>
            </div>
            <div style={{marginLeft:"auto",background:"#E65100",color:"#fff",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".72rem",padding:"7px 14px",borderRadius:6,whiteSpace:"nowrap"}}>Payout Active</div>
          </div>
        </Fade>}

        <Fade delay={.13}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:24}}>
            {CITIES.map(c=>(
              <button key={c.city} onClick={()=>setSel(c.city)} style={{padding:"7px 15px",borderRadius:6,border:sel===c.city?"2px solid #C8962C":"1.5px solid rgba(13,27,62,.12)",background:sel===c.city?"rgba(200,150,44,.1)":"#fff",color:sel===c.city?"#C8962C":"#3D4F7C",fontWeight:700,fontSize:".72rem",cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontFamily:"'Nunito Sans',sans-serif",transition:"all .2s"}}>
                {c.alert&&<span style={{width:6,height:6,borderRadius:"50%",background:"#E65100",display:"inline-block"}}/>}
                {c.icon} {c.city}
              </button>
            ))}
          </div>
        </Fade>

        <Fade delay={.14}>
          <div style={{display:"grid",gridTemplateColumns:"240px 1fr",gap:18,marginTop:22}}>
            <div style={{...CARD,background:"#0D1B3E",padding:"26px 22px"}}>
              <div style={{fontSize:".56rem",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(200,150,44,.7)",marginBottom:7}}>Current Conditions</div>
              <div style={{fontWeight:700,fontSize:".82rem",color:"#E8B84B",marginBottom:16}}>{city.city}</div>
              <div style={{fontSize:48,textAlign:"center",marginBottom:9}}>{city.icon}</div>
              <div style={{textAlign:"center"}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:"2.8rem",fontWeight:700,color:"#fff",lineHeight:1}}>{city.temp}°C</div>
                <div style={{fontSize:".7rem",color:"rgba(255,255,255,.5)",marginTop:4}}>Feels like {city.feels}°C</div>
              </div>
              <div style={{marginTop:16,padding:"10px",borderRadius:8,background:city.alert?"rgba(230,81,0,.15)":"rgba(27,94,32,.15)",border:`1px solid ${city.alert?"rgba(230,81,0,.4)":"rgba(27,94,32,.4)"}`,textAlign:"center"}}>
                <div style={{fontSize:".68rem",fontWeight:700,color:city.alert?"#FF8A65":"#81C784"}}>{city.status}</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:11}}>
              {[
                {label:"Rainfall",val:`${city.rain}mm/hr`,icon:"🌧️",warn:city.rain>20,thresh:"Trigger: >20mm"},
                {label:"AQI",val:city.aqi,icon:"🌫️",warn:city.aqi>200,thresh:"Trigger: >200"},
                {label:"Temperature",val:`${city.feels}°C`,icon:"🌡️",warn:city.feels>45,thresh:"Trigger: >45°C"},
                {label:"Wind Speed",val:`${city.wind}km/hr`,icon:"🌪️",warn:city.wind>50,thresh:"Trigger: >50km/hr"},
                {label:"Visibility",val:`${(city.fog/1000).toFixed(1)}km`,icon:"🌁",warn:city.fog<200,thresh:"Trigger: <200m"},
                {label:"Zone Status",val:city.trigger||"All Clear",icon:"📍",warn:city.alert,thresh:city.alert?"Trigger ACTIVE":"No active triggers"},
              ].map((m,i)=>(
                <div key={i} style={{...CARD,padding:"15px 16px",borderLeft:`3px solid ${m.warn?"#E65100":"#1B5E20"}`,background:m.warn?"rgba(230,81,0,.03)":"#fff"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                    <div>
                      <div style={{fontSize:".6rem",fontWeight:700,color:"#7A8BB0",textTransform:"uppercase",letterSpacing:".5px",marginBottom:5}}>{m.label}</div>
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.25rem",fontWeight:700,color:m.warn?"#E65100":"#0D1B3E",lineHeight:1}}>{m.val}</div>
                    </div>
                    <span style={{fontSize:18}}>{m.icon}</span>
                  </div>
                  <div style={{marginTop:8,fontSize:".58rem",fontWeight:700,color:m.warn?"#E65100":"#1B5E20",background:m.warn?"rgba(230,81,0,.08)":"rgba(27,94,32,.08)",padding:"2px 6px",borderRadius:4,display:"inline-block"}}>{m.thresh}</div>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <Fade delay={.16}>
          <div style={{...CARD,overflow:"hidden",padding:0,marginTop:28}}>
            <div style={{background:"#0D1B3E",padding:"14px 22px",display:"flex",alignItems:"center",gap:9}}>
              <Chakra size={18} color="#E8B84B" speed="10s"/>
              <span style={{fontFamily:"'Playfair Display',serif",fontWeight:700,color:"#fff",fontSize:".9rem"}}>Live Conditions — All Cities</span>
              <div style={{marginLeft:"auto",fontSize:".6rem",color:"rgba(200,150,44,.7)",display:"flex",alignItems:"center",gap:4}}>
                <div style={{width:5,height:5,borderRadius:"50%",background:"#C8962C"}}/> LIVE
              </div>
            </div>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"'Nunito Sans',sans-serif"}}>
                <thead><tr style={{background:"#F7F3EC"}}>
                  {["City","Temp","Feels","Rainfall","AQI","Wind","Status","Trigger"].map(h=>(
                    <th key={h} style={{padding:"10px 14px",fontSize:".6rem",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"#7A8BB0",textAlign:"left",borderBottom:"1px solid rgba(13,27,62,.08)"}}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {CITIES.map((c,i)=>(
                    <tr key={c.city} onClick={()=>setSel(c.city)} style={{background:c.alert?"rgba(230,81,0,.03)":i%2===0?"#fff":"rgba(247,243,236,.5)",cursor:"pointer"}}>
                      <td style={{padding:"12px 14px",borderBottom:"1px solid rgba(13,27,62,.06)"}}>
                        <div style={{display:"flex",alignItems:"center",gap:6}}>
                          {c.alert&&<div style={{width:6,height:6,borderRadius:"50%",background:"#E65100",flexShrink:0}}/>}
                          <span style={{fontWeight:700,fontSize:".8rem",color:"#0D1B3E"}}>{c.city}</span>
                        </div>
                      </td>
                      <td style={{padding:"12px 14px",fontSize:".78rem",color:"#3D4F7C",borderBottom:"1px solid rgba(13,27,62,.06)"}}>{c.temp}°C</td>
                      <td style={{padding:"12px 14px",fontSize:".78rem",color:c.feels>45?"#E65100":"#3D4F7C",fontWeight:c.feels>45?700:400,borderBottom:"1px solid rgba(13,27,62,.06)"}}>{c.feels}°C</td>
                      <td style={{padding:"12px 14px",fontSize:".78rem",color:c.rain>20?"#1565C0":"#3D4F7C",fontWeight:c.rain>20?700:400,borderBottom:"1px solid rgba(13,27,62,.06)"}}>{c.rain}mm/hr</td>
                      <td style={{padding:"12px 14px",fontSize:".78rem",color:c.aqi>200?"#B71C1C":c.aqi>100?"#E65100":"#1B5E20",fontWeight:700,borderBottom:"1px solid rgba(13,27,62,.06)"}}>{c.aqi}</td>
                      <td style={{padding:"12px 14px",fontSize:".78rem",color:c.wind>50?"#E65100":"#3D4F7C",fontWeight:c.wind>50?700:400,borderBottom:"1px solid rgba(13,27,62,.06)"}}>{c.wind}km/hr</td>
                      <td style={{padding:"12px 14px",borderBottom:"1px solid rgba(13,27,62,.06)"}}>
                        <span style={{fontSize:".63rem",fontWeight:700,padding:"3px 7px",borderRadius:4,background:c.alert?"rgba(230,81,0,.1)":"rgba(27,94,32,.1)",color:c.alert?"#E65100":"#1B5E20"}}>{c.icon} {c.status}</span>
                      </td>
                      <td style={{padding:"12px 14px",borderBottom:"1px solid rgba(13,27,62,.06)"}}>
                        {c.trigger?<span style={{fontSize:".63rem",fontWeight:800,padding:"3px 7px",borderRadius:4,background:"#0D1B3E",color:"#E8B84B"}}>{c.trigger}</span>:<span style={{color:"#7A8BB0",fontSize:".65rem"}}>—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fade>

        <Fade delay={.18}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:13,marginTop:26}}>
            {[{icon:"🌧️",tip:"Heavy Rain",advice:"Wear waterproof gear. Reduce speed 30%. Avoid flooded roads. Wait it out if rainfall is extreme."},
              {icon:"🌫️",tip:"Poor Air Quality",advice:"Wear N95 mask. Limit time outdoors. Hydrate frequently. Avoid high-traffic corridors."},
              {icon:"🌡️",tip:"Extreme Heat",advice:"Carry 2L water. Rest every 90 minutes. Wear light clothing. Avoid peak afternoon hours."},
              {icon:"🌪️",tip:"High Wind",advice:"Reduce bag load. Avoid bridges and open roads. Keep both hands on handlebars."},
            ].map((t,i)=>(
              <div key={i} style={{...CARD,padding:"17px 15px",borderTop:"3px solid #C8962C"}}>
                <span style={{fontSize:20,display:"block",marginBottom:8}}>{t.icon}</span>
                <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".86rem",color:"#0D1B3E",marginBottom:6}}>{t.tip}</div>
                <div style={{fontSize:".7rem",color:"#7A8BB0",lineHeight:1.65}}>{t.advice}</div>
              </div>
            ))}
          </div>
        </Fade>

        <div style={{marginTop:36,textAlign:"center"}}>
          <button onClick={onBack} style={BN}>← Back to Home</button>
        </div>
      </div>
    </div>
  );
}

/* ─── Payment Page ──────────────────────────────────────────── */
function PaymentPage({selectedPlan,onBack}) {
  const [step,setStep]=useState(1);
  const [method,setMethod]=useState("upi");
  const [upi,setUpi]=useState("");
  const [agreed,setAgreed]=useState(false);
  const [loading,setLoading]=useState(false);
  const [plats,setPlats]=useState({swiggy:true,zomato:false,zepto:false,amazon:false,blinkit:false,dunzo:false});
  const plan=PLANS.find(p=>p.name===selectedPlan)||PLANS[1];

  const pay=()=>{setLoading(true);setTimeout(()=>{setLoading(false);setStep(4);},2400);};

  if(step===4) return (
    <div style={{padding:"90px 56px",maxWidth:1200,margin:"0 auto",textAlign:"center"}}>
      <div style={{maxWidth:540,margin:"0 auto"}}>
        <div style={{width:72,height:72,borderRadius:"50%",background:"rgba(27,94,32,.1)",border:"2px solid #1B5E20",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:30}}>✅</div>
        <div style={EB}>Payment Successful</div>
        <h2 style={{...H2,textAlign:"center",marginTop:6}}>You're now <em style={{color:"#C8962C",fontStyle:"italic"}}>protected</em></h2>
        <div style={{...GR,margin:"12px auto"}}/>
        <div style={{...CARD,padding:"24px",margin:"22px 0",textAlign:"left"}}>
          {[["Plan",`${plan.name} — ₹${plan.price}/week`],["Policy ID",`SUR-2025-${Math.random().toString(36).slice(2,8).toUpperCase()}`],["Coverage Start","Monday, this week"],["Next Renewal","Next Monday (auto)"]].map(([k,v],i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",marginBottom:i<3?11:0}}>
              <span style={{fontSize:".76rem",color:"#7A8BB0"}}>{k}</span>
              <span style={{fontWeight:700,fontSize:".8rem",color:"#0D1B3E",fontFamily:k==="Policy ID"?"monospace":"inherit"}}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{background:"rgba(200,150,44,.08)",border:"1px solid rgba(200,150,44,.28)",borderRadius:10,padding:"13px 17px",marginBottom:22,fontSize:".74rem",color:"#7A8BB0",lineHeight:1.7,textAlign:"left"}}>
          🛡️ Your Suraksha protection is now active. We monitor your delivery zone 24×7 and pay you automatically when conditions trigger. No action needed.
        </div>
        <button onClick={onBack} style={BG}>Back to Home</button>
      </div>
    </div>
  );

  return (
    <div style={{background:"#F7F3EC",minHeight:"100vh",padding:"90px 0 64px",width:"100%"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:SP}}>
        {/* Stepper */}
        <div style={{display:"flex",alignItems:"center",gap:0,marginBottom:40,maxWidth:540}}>
          {["Confirm Plan","Link Platforms","Payment"].map((s,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",flex:i<2?1:0}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:step>i+1?"#1B5E20":step===i+1?"#C8962C":"rgba(13,27,62,.1)",border:`2px solid ${step>i+1?"#1B5E20":step===i+1?"#C8962C":"rgba(13,27,62,.15)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".72rem",color:step>=i+1?"#fff":"#7A8BB0",transition:"all .3s"}}>
                  {step>i+1?"✓":i+1}
                </div>
                <span style={{fontSize:".58rem",fontWeight:700,color:step===i+1?"#C8962C":"#7A8BB0",whiteSpace:"nowrap"}}>{s}</span>
              </div>
              {i<2&&<div style={{flex:1,height:2,background:step>i+1?"#1B5E20":"rgba(13,27,62,.1)",margin:"0 8px",transition:"background .3s",marginTop:-18}}/>}
            </div>
          ))}
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 350px",gap:28,alignItems:"start"}}>
          <div>
            {step===1&&<Fade>
              <div style={{...CARD,padding:"28px 24px"}}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.2rem",color:"#0D1B3E",marginBottom:5}}>Confirm Your Plan</h3>
                <p style={{fontSize:".78rem",color:"#7A8BB0",marginBottom:22,lineHeight:1.65}}>Review your selected plan before proceeding to platform linking and payment.</p>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:9,marginBottom:22}}>
                  {PLANS.map(p=>(
                    <div key={p.name} style={{border:p.name===plan.name?"2px solid #C8962C":"1.5px solid rgba(13,27,62,.1)",borderRadius:9,padding:"14px 10px",textAlign:"center",cursor:"pointer",background:p.name===plan.name?"rgba(200,150,44,.06)":"#fff",transition:"all .2s"}}>
                      <div style={{fontSize:".56rem",fontWeight:800,letterSpacing:"1.5px",textTransform:"uppercase",color:p.name===plan.name?"#C8962C":"#7A8BB0",marginBottom:6}}>{p.name}</div>
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:700,color:"#0D1B3E"}}>₹{p.price}</div>
                      <div style={{fontSize:".58rem",color:"#7A8BB0",marginTop:1}}>/week</div>
                      {p.name===plan.name&&<div style={{marginTop:5,fontSize:".56rem",fontWeight:700,color:"#1B5E20"}}>✓ Selected</div>}
                    </div>
                  ))}
                </div>
                <div style={{background:"rgba(200,150,44,.06)",border:"1px solid rgba(200,150,44,.2)",borderRadius:9,padding:"13px 16px",marginBottom:20}}>
                  <div style={{fontWeight:700,fontSize:".8rem",color:"#0D1B3E",marginBottom:7}}>{plan.name} Plan includes:</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
                    {plan.features.map(([f,on],i)=>on&&(<div key={i} style={{display:"flex",gap:5,fontSize:".72rem",color:"#3D4F7C"}}><span style={{color:"#1B5E20",fontWeight:700,flexShrink:0}}>✓</span>{f}</div>))}
                  </div>
                </div>
                <button onClick={()=>setStep(2)} style={{...BG,display:"block",width:"100%",textAlign:"center"}}>Continue to Platform Linking →</button>
              </div>
            </Fade>}

            {step===2&&<Fade>
              <div style={{...CARD,padding:"28px 24px"}}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.2rem",color:"#0D1B3E",marginBottom:5}}>Link Your Platforms</h3>
                <p style={{fontSize:".78rem",color:"#7A8BB0",marginBottom:22,lineHeight:1.65}}>Select all delivery platforms you work on. One policy covers all of them simultaneously.</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:22}}>
                  {PLATFORMS.slice(0,6).map(p=>{
                    const k=p.name.toLowerCase().replace(" flex","").replace(/\s/g,"");
                    const on=plats[k]??false;
                    return (
                      <div key={p.name} onClick={()=>setPlats(prev=>({...prev,[k]:!on}))} style={{display:"flex",alignItems:"center",gap:10,padding:"12px 13px",border:on?"2px solid #C8962C":"1.5px solid rgba(13,27,62,.1)",borderRadius:9,cursor:"pointer",background:on?"rgba(200,150,44,.05)":"#fff",transition:"all .2s"}}>
                        <span style={{fontSize:19}}>{p.icon}</span>
                        <div style={{flex:1}}><div style={{fontWeight:700,fontSize:".8rem",color:"#0D1B3E"}}>{p.name}</div><div style={{fontSize:".62rem",color:"#7A8BB0"}}>{p.cat}</div></div>
                        <div style={{width:19,height:19,borderRadius:4,background:on?"#C8962C":"rgba(13,27,62,.08)",border:`2px solid ${on?"#C8962C":"rgba(13,27,62,.15)"}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s"}}>
                          {on&&<span style={{color:"#fff",fontSize:".6rem",fontWeight:800}}>✓</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div style={{background:"rgba(13,27,62,.04)",border:"1px solid rgba(13,27,62,.1)",borderRadius:8,padding:"11px 14px",marginBottom:20,display:"flex",gap:8}}>
                  <span style={{fontSize:13,flexShrink:0,marginTop:1}}>🔒</span>
                  <div style={{fontSize:".7rem",color:"#7A8BB0",lineHeight:1.6}}>Your platform login data is never stored. We only receive anonymised zone data for trigger evaluation — never your personal delivery history.</div>
                </div>
                <div style={{display:"flex",gap:9}}><button onClick={()=>setStep(1)} style={BN}>← Back</button><button onClick={()=>setStep(3)} style={{...BG,flex:1}}>Continue to Payment →</button></div>
              </div>
            </Fade>}

            {step===3&&<Fade>
              <div style={{...CARD,padding:"28px 24px"}}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.2rem",color:"#0D1B3E",marginBottom:5}}>Complete Payment</h3>
                <p style={{fontSize:".78rem",color:"#7A8BB0",marginBottom:22,lineHeight:1.65}}>Your weekly premium of ₹{plan.price} will be auto-debited every Monday. Cancel anytime — no penalty.</p>
                <div style={{marginBottom:20}}>
                  <div style={{fontSize:".66rem",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"#7A8BB0",marginBottom:9}}>Payment Method</div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
                    {[{id:"upi",label:"UPI AutoPay",icon:"📲",desc:"GPay, PhonePe, Paytm"},{id:"wallet",label:"Swiggy Wallet",icon:"🛵",desc:"Auto-deduct"},{id:"card",label:"Debit Card",icon:"💳",desc:"Rupay / Visa / MC"}].map(m=>(
                      <div key={m.id} onClick={()=>setMethod(m.id)} style={{border:method===m.id?"2px solid #C8962C":"1.5px solid rgba(13,27,62,.1)",borderRadius:9,padding:"12px 10px",textAlign:"center",cursor:"pointer",background:method===m.id?"rgba(200,150,44,.06)":"#fff",transition:"all .2s"}}>
                        <div style={{fontSize:19,marginBottom:4}}>{m.icon}</div>
                        <div style={{fontWeight:700,fontSize:".7rem",color:"#0D1B3E"}}>{m.label}</div>
                        <div style={{fontSize:".6rem",color:"#7A8BB0",marginTop:1}}>{m.desc}</div>
                        {method===m.id&&<div style={{marginTop:4,fontSize:".56rem",fontWeight:700,color:"#C8962C"}}>✓ Selected</div>}
                      </div>
                    ))}
                  </div>
                </div>
                {method==="upi"&&<div style={{marginBottom:16}}>
                  <div style={{fontSize:".66rem",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"#7A8BB0",marginBottom:6}}>UPI ID</div>
                  <input value={upi} onChange={e=>setUpi(e.target.value)} placeholder="yourname@paytm / @gpay / @ybl" style={{width:"100%",padding:"11px 13px",border:"1.5px solid rgba(13,27,62,.15)",borderRadius:8,fontSize:".8rem",fontFamily:"'Nunito Sans',sans-serif",color:"#0D1B3E",background:"#fff"}}/>
                </div>}
                <div style={{background:"rgba(21,101,192,.06)",border:"1px solid rgba(21,101,192,.2)",borderRadius:8,padding:"10px 13px",marginBottom:16,display:"flex",gap:6}}>
                  <span style={{fontSize:12,flexShrink:0,marginTop:1}}>ℹ️</span>
                  <div style={{fontSize:".7rem",color:"#1565C0",lineHeight:1.6}}>UPI AutoPay mandate will be set for ₹{plan.price}/week. Approve once in your UPI app — Suraksha handles renewals automatically every Monday.</div>
                </div>
                <div onClick={()=>setAgreed(!agreed)} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:20,cursor:"pointer"}}>
                  <div style={{width:18,height:18,borderRadius:4,background:agreed?"#C8962C":"#fff",border:`2px solid ${agreed?"#C8962C":"rgba(13,27,62,.2)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,transition:"all .2s"}}>
                    {agreed&&<span style={{color:"#fff",fontSize:".58rem",fontWeight:800}}>✓</span>}
                  </div>
                  <div style={{fontSize:".7rem",color:"#7A8BB0",lineHeight:1.6}}>I agree to the <span style={{color:"#C8962C",fontWeight:700}}>Terms of Insurance</span> and <span style={{color:"#C8962C",fontWeight:700}}>Privacy Policy</span>, and authorise Suraksha to debit ₹{plan.price} every Monday via UPI AutoPay. This is parametric insurance governed by IRDAI.</div>
                </div>
                <div style={{display:"flex",gap:9}}>
                  <button onClick={()=>setStep(2)} style={BN}>← Back</button>
                  <button onClick={pay} disabled={!agreed||loading} style={{...BG,flex:1,opacity:!agreed||loading?.6:1,cursor:!agreed||loading?"not-allowed":"pointer"}}>
                    {loading?"Processing... ⏳":`Pay ₹${plan.price} & Activate →`}
                  </button>
                </div>
              </div>
            </Fade>}
          </div>

          {/* Sidebar */}
          <div style={{...CARD,padding:"20px 18px",position:"sticky",top:90}}>
            <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".94rem",color:"#0D1B3E",marginBottom:14,paddingBottom:12,borderBottom:"1px solid rgba(13,27,62,.08)"}}>Order Summary</div>
            {[["Plan",`Suraksha ${plan.name}`],["Billing","Weekly (Monday)"],["Coverage","All linked platforms"]].map(([k,v])=>(
              <div key={k} style={{display:"flex",justifyContent:"space-between",marginBottom:9}}>
                <span style={{fontSize:".74rem",color:"#7A8BB0"}}>{k}</span>
                <span style={{fontWeight:700,fontSize:".77rem",color:"#0D1B3E"}}>{v}</span>
              </div>
            ))}
            <div style={{height:1,background:"rgba(13,27,62,.08)",margin:"11px 0"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
              <span style={{fontWeight:700,fontSize:".86rem",color:"#0D1B3E"}}>Weekly premium</span>
              <span style={{fontFamily:"'Playfair Display',serif",fontSize:"1.45rem",fontWeight:700,color:"#C8962C"}}>₹{plan.price}</span>
            </div>
            <div style={{fontSize:".6rem",color:"#7A8BB0",marginBottom:14}}>GST & charges included</div>
            <div style={{background:"#0D1B3E",borderRadius:8,padding:"12px 13px"}}>
              <div style={{fontWeight:700,fontSize:".7rem",color:"#E8B84B",marginBottom:6}}>What you're covered for:</div>
              {plan.features.filter(([,on])=>on).slice(0,5).map(([f],i)=>(
                <div key={i} style={{display:"flex",gap:5,alignItems:"center",fontSize:".66rem",color:"rgba(255,255,255,.6)",marginBottom:4}}>
                  <span style={{color:"#E8B84B",flexShrink:0}}>✓</span>{f}
                </div>
              ))}
            </div>
            <div style={{marginTop:10,display:"flex",gap:5,alignItems:"center",fontSize:".6rem",color:"#7A8BB0"}}>
              <span>🔒</span> 256-bit encrypted · IRDAI regulated
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN APP ──────────────────────────────────────────────── */
export default function SurakshaApp() {
  const [page,setPage]=useState("home");
  const [selPlan,setSelPlan]=useState("Plus");
  const [scrolled,setScrolled]=useState(false);
  const [activeStep,setActiveStep]=useState(0);
  const [alertIdx,setAlertIdx]=useState(0);

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",fn);
    return()=>window.removeEventListener("scroll",fn);
  },[]);
  useEffect(()=>{
    const t=setInterval(()=>setAlertIdx(i=>(i+1)%ALERTS.length),5000);
    return()=>clearInterval(t);
  },[]);

  const al=ALERTS[alertIdx];

  return (
    <>
      <style>{G}</style>
      <div style={{width:"100%",minWidth:0,fontFamily:"'Nunito Sans',sans-serif",background:"#F7F3EC",overflowX:"hidden"}}>

        {/* ── Alert Ticker ─────────────────── */}
        <div style={{background:al.bg,padding:"8px 0",width:"100%",position:"relative",zIndex:600}}>
          <div style={{padding:"0 56px",display:"flex",alignItems:"center",gap:9}}>
            <span style={{fontSize:13}}>{al.icon}</span>
            <span style={{fontSize:".68rem",fontWeight:700,color:"#fff",background:"rgba(255,255,255,.2)",padding:"1px 7px",borderRadius:3,letterSpacing:"1px",textTransform:"uppercase",fontSize:".56rem"}}>
              {al.lvl==="danger"?"⚠️ ALERT":al.lvl==="warning"?"⚠️ WARNING":"✅ CLEAR"}
            </span>
            <span style={{fontSize:".68rem",fontWeight:700,color:"#fff"}}>{al.city}:</span>
            <span style={{fontSize:".68rem",color:"rgba(255,255,255,.88)"}}>{al.msg}</span>
            <button onClick={()=>setPage("weather")} style={{marginLeft:"auto",background:"rgba(255,255,255,.2)",border:"1px solid rgba(255,255,255,.4)",color:"#fff",fontFamily:"'Nunito Sans',sans-serif",fontWeight:700,fontSize:".6rem",padding:"3px 10px",borderRadius:4,cursor:"pointer",whiteSpace:"nowrap"}}>View All →</button>
          </div>
        </div>

        {/* ── Nav ──────────────────────────── */}
        <nav style={{position:"sticky",top:0,left:0,right:0,zIndex:500,width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 56px",height:64,background:"rgba(13,27,62,.97)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(200,150,44,.15)",boxShadow:scrolled?"0 4px 24px rgba(13,27,62,.5)":"none",transition:"box-shadow .3s"}}>
          <button onClick={()=>setPage("home")} style={{display:"flex",alignItems:"center",gap:9,background:"none",border:"none",cursor:"pointer",padding:0}}>
            <Chakra size={26} color="#E8B84B" speed="8s"/>
            <div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.15rem",fontWeight:700,color:"#fff",lineHeight:1}}>Suraksha</div>
              <div style={{fontSize:".52rem",fontWeight:700,letterSpacing:"1.8px",textTransform:"uppercase",color:"rgba(200,150,44,.7)"}}>Delivery Partner Insurance</div>
            </div>
          </button>
          <div style={{display:"flex",gap:20,alignItems:"center"}}>
            {page==="home"&&[["#problem","Problem"],["#workflow","How It Works"],["#triggers","Triggers"],["#pricing","Plans"],["#ai","AI Engine"],["#compliance","Compliance"]].map(([h,l])=>(
              <a key={l} href={h} style={{fontSize:".68rem",fontWeight:600,textTransform:"uppercase",letterSpacing:".5px",color:"rgba(255,255,255,.56)",textDecoration:"none"}}>{l}</a>
            ))}
            {page==="home"&&<button onClick={()=>setPage("weather")} style={{background:"none",border:"none",fontSize:".68rem",fontWeight:600,color:"rgba(255,255,255,.56)",cursor:"pointer",fontFamily:"'Nunito Sans',sans-serif"}}>🌦️ Weather</button>}
            <button onClick={()=>setPage("payment")} style={{background:"linear-gradient(135deg,#E8B84B,#C8962C)",color:"#0D1B3E",fontFamily:"'Nunito Sans',sans-serif",fontWeight:700,fontSize:".74rem",padding:"8px 16px",borderRadius:6,border:"none",cursor:"pointer",boxShadow:"0 4px 14px rgba(200,150,44,.3)"}}>Get Protected</button>
          </div>
        </nav>

        {page==="weather"&&<WeatherPage onBack={()=>setPage("home")}/>}
        {page==="payment"&&<PaymentPage selectedPlan={selPlan} onBack={()=>setPage("home")}/>}

        {page==="home"&&<>

        {/* ── Hero ─────────────────────────── */}
        <section style={{position:"relative",minHeight:"100vh",background:"linear-gradient(155deg,#0D1B3E,#142454 55%,#0A2255)",display:"flex",alignItems:"center",overflow:"hidden",width:"100%"}}>
          <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(200,150,44,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,150,44,.04) 1px,transparent 1px)",backgroundSize:"44px 44px",pointerEvents:"none"}}/>
          <div style={{position:"absolute",right:"4%",top:"50%",transform:"translateY(-50%)",opacity:.07,pointerEvents:"none"}}><Chakra size={480} color="#fff" speed="24s"/></div>
          <div style={{position:"relative",zIndex:2,padding:"116px 56px 76px",maxWidth:700,width:"100%"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(200,150,44,.1)",border:"1px solid rgba(200,150,44,.3)",borderRadius:4,padding:"5px 13px",marginBottom:20,fontSize:".58rem",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"#E8B84B",animation:"surFU .9s ease both"}}>
              <span style={{width:5,height:5,borderRadius:"50%",background:"#E8B84B",animation:"surBlink 2s infinite",display:"inline-block"}}/>
              India's First Universal Delivery Partner Insurance
            </div>
            <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.4rem,5vw,4.3rem)",fontWeight:800,lineHeight:1.05,color:"#fff",letterSpacing:"-.5px",animation:"surFU .9s ease .08s both"}}>
              One Policy.<br/><em style={{color:"#E8B84B"}}>Every Partner.<br/>Every Platform.</em>
            </h1>
            <div style={{width:48,height:2,background:"linear-gradient(90deg,#C8962C,transparent)",margin:"20px 0",animation:"surFU .9s ease .14s both"}}/>
            <p style={{fontSize:".92rem",lineHeight:1.8,fontWeight:300,color:"rgba(255,255,255,.68)",maxWidth:500,animation:"surFU .9s ease .2s both"}}>
              Suraksha is parametric micro-insurance for India's 15 lakh+ gig delivery workers — across Swiggy, Zomato, Zepto, Amazon, Blinkit and beyond. When weather turns dangerous, your wallet is topped up automatically. No forms. No waiting. No rejection.
            </p>
            <div style={{display:"flex",gap:10,marginTop:30,flexWrap:"wrap",animation:"surFU .9s ease .26s both"}}>
              <button onClick={()=>setPage("payment")} style={BG}>Get Covered from ₹29/week →</button>
              <a href="#workflow" style={BO}>See How It Works</a>
              <button onClick={()=>setPage("weather")} style={{...BO,borderColor:"rgba(200,150,44,.4)",color:"#E8B84B"}}>🌦️ Weather Alerts</button>
            </div>
            <div style={{display:"flex",gap:16,marginTop:30,flexWrap:"wrap",animation:"surFU .9s ease .32s both"}}>
              {["IRDAI Compliant","RBI Approved","DPDP Act 2023","Auto-payout 60s"].map(t=>(
                <div key={t} style={{display:"flex",alignItems:"center",gap:5,fontSize:".58rem",fontWeight:600,color:"rgba(255,255,255,.38)",letterSpacing:".5px",textTransform:"uppercase"}}>
                  <span style={{color:"#E8B84B"}}>✓</span>{t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Marquee ──────────────────────── */}
        <div style={{background:"#142454",borderTop:"1px solid rgba(200,150,44,.15)",borderBottom:"1px solid rgba(200,150,44,.15)",overflow:"hidden",position:"relative",width:"100%"}}>
          <div style={{position:"absolute",top:0,bottom:0,left:0,width:80,background:"linear-gradient(to right,#142454,transparent)",zIndex:1,pointerEvents:"none"}}/>
          <div style={{position:"absolute",top:0,bottom:0,right:0,width:80,background:"linear-gradient(to left,#142454,transparent)",zIndex:1,pointerEvents:"none"}}/>
          <div style={{display:"flex",width:"max-content",animation:"surMarq 30s linear infinite"}}>
            {[...PLATFORMS,...PLATFORMS].map((p,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"12px 24px",borderRight:"1px solid rgba(200,150,44,.1)"}}>
                <span style={{fontSize:"1rem"}}>{p.icon}</span>
                <span style={{fontWeight:700,fontSize:".76rem",color:"rgba(255,255,255,.54)",whiteSpace:"nowrap"}}>{p.name}</span>
                <span style={{fontSize:".58rem",color:"rgba(200,150,44,.52)",whiteSpace:"nowrap"}}>{p.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats ────────────────────────── */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",background:"#fff",borderBottom:"2px solid #EDE6D8",width:"100%"}}>
          {[{n:15,s:"L+",p:"",l:"Delivery partners eligible — largest unprotected gig workforce in Asia"},{n:29,s:"/wk",p:"₹",l:"Starting weekly premium — less than one cup of chai per day"},{n:60,s:"s",p:"",l:"Maximum time from trigger to wallet payout — no human in the loop"},{n:8,s:"+",p:"",l:"Major delivery platforms — one Suraksha policy covers all of them"}].map((s,i)=>(
            <Fade key={i} delay={i*.07} style={{padding:"40px 30px",borderRight:i<3?"1px solid rgba(13,27,62,.08)":"none",cursor:"default"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:"2.65rem",fontWeight:700,lineHeight:1,color:"#0D1B3E",letterSpacing:"-1px"}}>
                {s.p&&<span style={{color:"#C8962C"}}>{s.p}</span>}<Num to={s.n}/><span style={{color:"#C8962C"}}>{s.s}</span>
              </div>
              <div style={{fontSize:".72rem",color:"#7A8BB0",marginTop:7,lineHeight:1.5}}>{s.l}</div>
            </Fade>
          ))}
        </div>

        {/* ── Problem ──────────────────────── */}
        <section id="problem" style={{background:"#F7F3EC",padding:"88px 0",width:"100%"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:SP}}>
            <Fade><div style={EB}><span style={{display:"block",width:18,height:1.5,background:"#C8962C"}}/>The Problem</div></Fade>
            <Fade delay={.05}><h2 style={H2}>Every bad-weather day is a <em style={{color:"#C8962C",fontStyle:"italic"}}>financial crisis</em> nobody is solving</h2></Fade>
            <Fade delay={.08}><div style={GR}/></Fade>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,marginTop:40,alignItems:"start"}}>
              <div>
                <Fade delay={.1}><p style={DESC}>India's gig delivery workers earn ₹800–₹1,500 per day. When heavy rain, toxic air, extreme heat or dense fog arrives, earnings collapse while accident risk triples. No platform, no government scheme, and no existing insurance product protects this income loss.</p></Fade>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:14}}>
                  {[["40–60","High-impact weather days per city per year"],["3×","Higher accident risk for two-wheelers in heavy rain"],["₹1,200","Average daily income lost on extreme weather days"],["60+","Days per year Delhi partners ride in AQI above 200"]].map(([n,l],i)=>(
                    <Fade key={i} delay={.12+i*.05}>
                      <div style={{background:"rgba(200,150,44,.08)",border:"1px solid rgba(200,150,44,.2)",borderRadius:9,padding:"11px 12px"}}>
                        <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.22rem",fontWeight:700,color:"#0D1B3E",lineHeight:1}}>{n}</div>
                        <div style={{fontSize:".62rem",color:"#7A8BB0",marginTop:4,lineHeight:1.4}}>{l}</div>
                      </div>
                    </Fade>
                  ))}
                </div>
                <Fade delay={.22}>
                  <div style={{background:"#0D1B3E",borderRadius:12,padding:"24px 20px",position:"relative",marginTop:14,overflow:"hidden"}}>
                    <div style={{fontFamily:"'Playfair Display',serif",fontSize:"3.5rem",lineHeight:0,color:"#C8962C",opacity:.22,position:"absolute",top:17,left:17}}>"</div>
                    <p style={{fontFamily:"'Playfair Display',serif",fontSize:".88rem",fontStyle:"italic",lineHeight:1.75,color:"rgba(255,255,255,.82)",paddingLeft:14,marginTop:12}}>I ride for three apps simultaneously. On a heavy rain day, all three earnings drop at once. I have no insurance from any of them. If I fall, I am finished.</p>
                    <p style={{marginTop:12,paddingLeft:14,fontSize:".58rem",fontWeight:700,color:"#E8B84B",letterSpacing:"1.5px",textTransform:"uppercase"}}>— Delivery Partner, Hyderabad · Swiggy, Zomato & Zepto</p>
                  </div>
                </Fade>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {[{icon:"🌧️",t:"Zero Income on Bad Weather Days",d:"Partners lose 50–70% of daily earnings on heavy rain or fog days. No platform compensates this income disruption — not a single one."},
                  {icon:"📋",t:"Traditional Insurance Doesn't Fit",d:"Gig workers have irregular income. Conventional insurers won't underwrite them. Claim cycles take 2–4 weeks with frequent rejections."},
                  {icon:"🔗",t:"Multi-Platform Workers Fall Through Gaps",d:"A partner working Swiggy and Zepto gets fragmented cover from each — and zero income protection from either on the same bad weather day."},
                  {icon:"🌫️",t:"Pollution Risk Is Invisible and Ignored",d:"Partners in Delhi, Patna, Lucknow ride in AQI above 200 for 60+ days a year — causing respiratory damage with no compensation."},
                  {icon:"📍",t:"No Real-Time Trigger Product Exists",d:"Not one insurance product in India uses live environmental data to auto-trigger a payout. Everything remains manual, reactive, and slow."},
                ].map((c,i)=>(
                  <Fade key={i} delay={.1+i*.06}>
                    <div style={{display:"flex",gap:12,background:"#fff",border:"1px solid rgba(13,27,62,.08)",borderLeft:"3px solid #C8962C",borderRadius:9,padding:"13px 16px",transition:"all .3s",cursor:"default",boxShadow:"0 2px 8px rgba(13,27,62,.06)"}}>
                      <div style={{width:30,height:30,borderRadius:7,background:"rgba(200,150,44,.08)",border:"1px solid rgba(200,150,44,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".88rem",flexShrink:0}}>{c.icon}</div>
                      <div>
                        <div style={{fontWeight:700,fontSize:".8rem",color:"#0D1B3E",marginBottom:3}}>{c.t}</div>
                        <div style={{fontSize:".7rem",color:"#7A8BB0",lineHeight:1.58}}>{c.d}</div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Workflow ─────────────────────── */}
        <section id="workflow" style={{background:"#fff",padding:"88px 0",width:"100%"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:SP}}>
            <Fade><div style={EB}><span style={{display:"block",width:18,height:1.5,background:"#C8962C"}}/>How It Works</div></Fade>
            <Fade delay={.05}><h2 style={H2}>From sign-up to payout — <em style={{color:"#C8962C",fontStyle:"italic"}}>minutes, not weeks</em></h2></Fade>
            <Fade delay={.08}><div style={GR}/></Fade>
            <Fade delay={.1}><p style={DESC}>Zero paperwork. Zero claim forms. Suraksha monitors your zone every 15 minutes and pays automatically when conditions become dangerous.</p></Fade>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:68,marginTop:40,alignItems:"start"}}>
              <div>
                {STEPS.map((s,i)=>(
                  <Fade key={i} delay={.08+i*.05}>
                    <div onMouseEnter={()=>setActiveStep(i)} style={{display:"flex",gap:13,padding:"17px 0",borderBottom:i<STEPS.length-1?"1px solid rgba(13,27,62,.07)":"none",cursor:"default",transition:"all .3s"}}>
                      <div style={{width:32,height:32,borderRadius:"50%",border:activeStep===i?"2px solid #C8962C":"2px solid #EDE6D8",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".7rem",color:activeStep===i?"#fff":"#7A8BB0",background:activeStep===i?"#C8962C":"#fff",boxShadow:activeStep===i?"0 0 0 4px rgba(200,150,44,.15)":"none",flexShrink:0,transition:"all .3s"}}>{s.n}</div>
                      <div>
                        <div style={{fontWeight:700,fontSize:".8rem",color:activeStep===i?"#C8962C":"#0D1B3E",marginBottom:3,transition:"color .3s"}}>{s.t}</div>
                        <div style={{fontSize:".7rem",color:"#7A8BB0",lineHeight:1.6}}>{s.d}</div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
              <div style={{position:"sticky",top:88}}>
                <Fade delay={.15}>
                  <div style={{background:"#0D1B3E",borderRadius:18,padding:"20px",boxShadow:"0 16px 44px rgba(13,27,62,.26)"}}>
                    <div style={{fontSize:".54rem",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(200,150,44,.6)",marginBottom:12}}>Live Zone Monitoring</div>
                    <Radar/>
                    <div style={{fontSize:".54rem",color:"rgba(255,255,255,.27)",letterSpacing:"1.5px",textTransform:"uppercase",textAlign:"center",marginTop:10}}>Real-time trigger evaluation across all delivery zones</div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        {/* ── Triggers ─────────────────────── */}
        <section id="triggers" style={{background:"#F7F3EC",padding:"88px 0",width:"100%"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:SP}}>
            <Fade><div style={EB}><span style={{display:"block",width:18,height:1.5,background:"#C8962C"}}/>Parametric Triggers</div></Fade>
            <Fade delay={.05}><h2 style={H2}>Real environmental data. <em style={{color:"#C8962C",fontStyle:"italic"}}>Automatic protection.</em></h2></Fade>
            <Fade delay={.08}><div style={GR}/></Fade>
            <Fade delay={.1}><p style={DESC}>When any condition below is confirmed by multiple independent data sources in your zone, the payout fires automatically — no action needed from you.</p></Fade>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:13,marginTop:38}}>
              {TRIGGERS.map((t,i)=>(
                <Fade key={i} delay={.08+i*.06}>
                  <div style={{background:"#fff",border:"1px solid rgba(13,27,62,.08)",borderTop:"3px solid #C8962C",borderRadius:11,padding:"20px 17px",boxShadow:"0 2px 8px rgba(13,27,62,.05)",transition:"all .35s",cursor:"default"}}>
                    <div style={{width:40,height:40,borderRadius:9,background:"rgba(200,150,44,.08)",border:"1.5px solid rgba(200,150,44,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.15rem",marginBottom:10}}>{t.icon}</div>
                    <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".9rem",color:"#0D1B3E",marginBottom:4}}>{t.name}</div>
                    <div style={{display:"inline-block",fontSize:".58rem",fontWeight:700,color:"#C8962C",background:"rgba(200,150,44,.08)",border:"1px solid rgba(200,150,44,.18)",borderRadius:4,padding:"2px 6px",marginBottom:7}}>{t.thresh}</div>
                    <div style={{fontSize:".7rem",color:"#7A8BB0",lineHeight:1.65}}>{t.desc}</div>
                    <div style={{height:1,background:"rgba(13,27,62,.07)",margin:"11px 0"}}/>
                    <div style={{fontSize:".67rem",color:"#7A8BB0"}}>Payout: <strong style={{color:"#0D1B3E",fontFamily:"'Playfair Display',serif",fontSize:".84rem"}}>{t.pay}</strong></div>
                    <div style={{display:"flex",gap:3,flexWrap:"wrap",marginTop:5}}>
                      {t.plans.map(p=><span key={p} style={{fontSize:".54rem",fontWeight:700,background:"#0D1B3E",color:"#E8B84B",borderRadius:3,padding:"1px 5px"}}>{p}</span>)}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
            <Fade delay={.2}>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:11,marginTop:22,background:"#0D1B3E",borderRadius:12,padding:"18px 20px"}}>
                {[{t:"Multi-Source Validation",d:"At least 2 of 3 independent sources must agree before any payout fires."},
                  {t:"5km Zone Precision",d:"Triggers fire at zone level — not city averages. Koramangala isn't affected by Whitefield events."},
                  {t:"Duration Requirement",d:"Conditions must persist for a minimum time. A 5-minute rain burst doesn't count."},
                  {t:"Active Partner Check",d:"You must be online on at least one linked platform during the trigger window."},
                ].map((a,i)=>(
                  <div key={i}>
                    <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".8rem",color:"#E8B84B",marginBottom:4}}>{a.t}</div>
                    <div style={{fontSize:".67rem",color:"rgba(255,255,255,.48)",lineHeight:1.55}}>{a.d}</div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </section>

        {/* ── Platforms ────────────────────── */}
        <section id="platforms" style={{background:"#fff",padding:"88px 0",width:"100%"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:SP}}>
            <Fade><div style={EB}><span style={{display:"block",width:18,height:1.5,background:"#C8962C"}}/>Partner Platforms</div></Fade>
            <Fade delay={.05}><h2 style={H2}>One policy. <em style={{color:"#C8962C",fontStyle:"italic"}}>Every platform.</em></h2></Fade>
            <Fade delay={.08}><div style={GR}/></Fade>
            <Fade delay={.1}><p style={DESC}>Suraksha covers partners across India's entire gig delivery ecosystem — regardless of which platform's bag they carry. 12–15 lakh partners, all protected.</p></Fade>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginTop:38}}>
              {PLATFORMS.map((p,i)=>(
                <Fade key={i} delay={.07+i*.05}>
                  <div style={{background:"#fff",border:"1px solid rgba(13,27,62,.08)",borderRadius:11,padding:"20px 14px",textAlign:"center",boxShadow:"0 2px 7px rgba(13,27,62,.05)",transition:"all .32s",cursor:"default"}}>
                    <span style={{fontSize:"1.8rem",display:"block",marginBottom:8}}>{p.icon}</span>
                    <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".88rem",color:"#0D1B3E",marginBottom:2}}>{p.name}</div>
                    <div style={{fontSize:".56rem",fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:"#C8962C",marginBottom:5}}>{p.cat}</div>
                    <div style={{fontSize:".66rem",color:"#7A8BB0"}}><strong style={{color:"#0D1B3E"}}>{p.count}</strong> active partners</div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ──────────────────────── */}
        <section id="pricing" style={{background:"#F7F3EC",padding:"88px 0",width:"100%"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:SP}}>
            <Fade><div style={EB}><span style={{display:"block",width:18,height:1.5,background:"#C8962C"}}/>Weekly Plans</div></Fade>
            <Fade delay={.05}><h2 style={H2}>Less than chai a day. <em style={{color:"#C8962C",fontStyle:"italic"}}>Real protection.</em></h2></Fade>
            <Fade delay={.08}><div style={GR}/></Fade>
            <Fade delay={.1}><p style={DESC}>One subscription covers all linked platforms. Upgrade, downgrade, or cancel any Monday — zero lock-in, zero penalty, ever.</p></Fade>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginTop:38,alignItems:"start"}}>
              {PLANS.map((plan,i)=>(
                <Fade key={i} delay={.07+i*.07}>
                  <div style={{background:plan.feat?"#0D1B3E":"#fff",border:`${plan.feat?"2px":"1px"} solid ${plan.feat?"#C8962C":"rgba(13,27,62,.1)"}`,borderRadius:11,padding:"22px 17px",boxShadow:plan.feat?"0 8px 26px rgba(200,150,44,.2)":"0 2px 8px rgba(13,27,62,.06)",display:"flex",flexDirection:"column",position:"relative",transform:plan.feat?"scale(1.04)":"none",transition:"all .35s"}}>
                    {plan.feat&&<div style={{position:"absolute",top:-1,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#E8B84B,#C8962C)",color:"#0D1B3E",fontSize:".52rem",fontWeight:800,letterSpacing:"1px",textTransform:"uppercase",padding:"3px 9px",borderRadius:"0 0 7px 7px",whiteSpace:"nowrap"}}>⭐ Most Popular</div>}
                    <div style={{fontSize:".56rem",fontWeight:800,letterSpacing:"2px",textTransform:"uppercase",color:plan.feat?"#E8B84B":plan.name==="Pro"?"#C8962C":"#7A8BB0",marginBottom:10}}>{plan.name}</div>
                    <div style={{fontFamily:"'Playfair Display',serif",fontSize:"2.2rem",fontWeight:700,lineHeight:1,color:plan.feat?"#fff":"#0D1B3E",letterSpacing:"-1px"}}>
                      <span style={{fontSize:".95rem",verticalAlign:"super",fontWeight:400}}>₹</span>{plan.price}
                    </div>
                    <div style={{fontSize:".66rem",color:plan.feat?"rgba(255,255,255,.4)":"#7A8BB0"}}>/week</div>
                    <div style={{fontSize:".6rem",color:plan.feat?"rgba(255,255,255,.36)":"#7A8BB0",marginTop:1,marginBottom:13}}>{plan.sub}</div>
                    <div style={{height:1,background:plan.feat?"rgba(255,255,255,.1)":"rgba(13,27,62,.08)",marginBottom:10}}/>
                    <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:5,flex:1}}>
                      {plan.features.map(([f,on],j)=>(
                        <li key={j} style={{display:"flex",gap:5,alignItems:"flex-start",fontSize:".68rem",lineHeight:1.4,color:plan.feat?"rgba(255,255,255,.6)":"#7A8BB0"}}>
                          <span style={{color:on?(plan.feat?"#E8B84B":"#1B5E20"):"rgba(13,27,62,.2)",flexShrink:0,fontSize:".58rem",marginTop:1,fontWeight:700}}>{on?"✓":"✗"}</span>{f}
                        </li>
                      ))}
                    </ul>
                    <button onClick={()=>{setSelPlan(plan.name);setPage("payment");}} style={{display:"block",marginTop:16,padding:"10px",borderRadius:8,textAlign:"center",fontFamily:"'Nunito Sans',sans-serif",fontWeight:700,fontSize:".72rem",border:plan.feat?"none":"2px solid rgba(13,27,62,.12)",color:"#0D1B3E",background:plan.feat?"linear-gradient(135deg,#E8B84B,#C8962C)":"transparent",cursor:"pointer",transition:"all .3s",boxShadow:plan.feat?"0 4px 16px rgba(200,150,44,.22)":"none"}}>
                      Start {plan.name} →
                    </button>
                  </div>
                </Fade>
              ))}
            </div>
            <Fade delay={.2}>
              <div style={{textAlign:"center",marginTop:14,fontSize:".72rem",color:"#7A8BB0",background:"rgba(200,150,44,.06)",border:"1px solid rgba(200,150,44,.18)",borderRadius:10,padding:"10px 17px"}}>
                💡 A ₹59 Plus plan is less than <strong style={{color:"#0D1B3E"}}>0.8% of average weekly earnings</strong>. One rain payout = <strong style={{color:"#C8962C"}}>3× your premium recovered.</strong>
              </div>
            </Fade>
          </div>
        </section>

        {/* ── AI Engine ────────────────────── */}
        <section id="ai" style={{background:"#0D1B3E",padding:"88px 0",width:"100%"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:SP}}>
            <Fade><div style={EB}><span style={{display:"block",width:18,height:1.5,background:"#C8962C"}}/>AI Engine</div></Fade>
            <Fade delay={.05}><h2 style={H2W}>Seven AI systems that <em style={{color:"#E8B84B",fontStyle:"italic"}}>never sleep</em></h2></Fade>
            <Fade delay={.08}><div style={GR}/></Fade>
            <Fade delay={.1}><p style={{...DESC,color:"rgba(255,255,255,.5)"}}>AI is the operating engine underneath Suraksha — seven ML components keeping every payout fast, accurate, and fraud-free across 15 lakh partners.</p></Fade>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,marginTop:40,alignItems:"center"}}>
              <Fade delay={.12}>
                <div style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(200,150,44,.15)",borderRadius:15,padding:"24px"}}>
                  <div style={{fontSize:".54rem",fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(200,150,44,.56)",marginBottom:14}}>Neural Trigger Evaluation Pipeline</div>
                  {[{label:"Data In",nodes:["🌧️","🌫️","🌡️","🌪️"]},{label:"Validation",nodes:["V1","V2","V3"]},{label:"AI Model",nodes:["ML","RF","AI"]},{label:"Decision",nodes:["✓","✗"]},{label:"Payout",nodes:["₹"]}].map((row,ri)=>(
                    <div key={ri} style={{marginBottom:5}}>
                      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:6}}>
                        {row.nodes.map((n,ni)=>(
                          <div key={ni} style={{width:29,height:29,borderRadius:"50%",border:"2px solid #C8962C",background:"rgba(200,150,44,.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:n.length>2?".8rem":".6rem",color:"#E8B84B",fontWeight:700,flexShrink:0}}>{n}</div>
                        ))}
                      </div>
                      <div style={{fontSize:".5rem",color:"rgba(255,255,255,.26)",letterSpacing:"1.5px",textAlign:"center",marginTop:2,textTransform:"uppercase"}}>{row.label}</div>
                    </div>
                  ))}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:16}}>
                    {[["60s","Max payout"],["99.5%","Accuracy"],["7","Components"]].map(([n,l])=>(
                      <div key={l} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(200,150,44,.12)",borderRadius:7,padding:"9px",textAlign:"center"}}>
                        <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.2rem",fontWeight:700,color:"#E8B84B"}}>{n}</div>
                        <div style={{fontSize:".5rem",color:"rgba(255,255,255,.34)",marginTop:2}}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
              <div style={{display:"flex",flexDirection:"column",gap:9}}>
                {AI_ITEMS.map((f,i)=>(
                  <Fade key={i} delay={.1+i*.05}>
                    <div style={{display:"flex",gap:12,background:"rgba(255,255,255,.05)",border:"1px solid rgba(200,150,44,.12)",borderRadius:9,padding:"14px 16px",transition:"all .3s"}}>
                      <div style={{width:34,height:34,borderRadius:9,background:"rgba(200,150,44,.1)",border:"1px solid rgba(200,150,44,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".96rem",flexShrink:0}}>{f.icon}</div>
                      <div>
                        <div style={{fontWeight:700,fontSize:".78rem",color:"#fff",marginBottom:2}}>{f.t}</div>
                        <div style={{fontSize:".68rem",color:"rgba(255,255,255,.46)",lineHeight:1.6}}>{f.d}</div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Compliance ───────────────────── */}
        <section id="compliance" style={{background:"#fff",padding:"88px 0",width:"100%"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:SP}}>
            <Fade><div style={EB}><span style={{display:"block",width:18,height:1.5,background:"#C8962C"}}/>Regulatory & Compliance</div></Fade>
            <Fade delay={.05}><h2 style={H2}>Built on a <em style={{color:"#C8962C",fontStyle:"italic"}}>solid legal foundation</em></h2></Fade>
            <Fade delay={.08}><div style={GR}/></Fade>
            <Fade delay={.1}><p style={DESC}>Suraksha is compliant with IRDAI insurance regulations, RBI payment frameworks, and India's DPDP Act 2023 — by design, from day one.</p></Fade>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginTop:38}}>
              {COMPLIANCE_ITEMS.map((c,i)=>(
                <Fade key={i} delay={.07+i*.06}>
                  <div style={{background:"#fff",border:"1px solid rgba(13,27,62,.08)",borderRadius:11,padding:"19px 17px",boxShadow:"0 2px 7px rgba(13,27,62,.05)",transition:"all .3s",cursor:"default"}}>
                    <span style={{fontSize:"1.3rem",display:"block",marginBottom:8}}>{c.icon}</span>
                    <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".84rem",color:"#0D1B3E",marginBottom:6}}>{c.t}</div>
                    <div style={{fontSize:".7rem",color:"#7A8BB0",lineHeight:1.65}}>{c.d}</div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────── */}
        <section style={{position:"relative",overflow:"hidden",padding:"96px 56px",textAlign:"center",background:"linear-gradient(155deg,#0D1B3E,#142454 60%,#0A2255)",width:"100%"}}>
          <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",opacity:.05,pointerEvents:"none"}}>
            <Chakra size={580} color="#fff" speed="28s"/>
          </div>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{width:40,height:1.5,background:"linear-gradient(90deg,transparent,#C8962C,transparent)",margin:"0 auto 26px"}}/>
            <Fade><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.8rem,4vw,2.9rem)",fontWeight:800,lineHeight:1.08,color:"#fff",marginBottom:13,letterSpacing:"-.3px"}}>No delivery partner should<br/>ride <em style={{color:"#E8B84B",fontStyle:"italic"}}>broke in the rain</em></h2></Fade>
            <Fade delay={.08}><p style={{fontSize:".86rem",color:"rgba(255,255,255,.58)",maxWidth:420,margin:"0 auto 24px",lineHeight:1.75}}>India's 15 lakh delivery partners deserve real, dignified protection. One policy. Every platform. Payouts in 60 seconds. From ₹29 a week.</p></Fade>
            <Fade delay={.12}>
              <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap",marginBottom:28}}>
                {PLATFORMS.map(p=><div key={p.name} style={{display:"flex",alignItems:"center",gap:5,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",borderRadius:5,padding:"4px 10px",fontSize:".63rem",fontWeight:600,color:"rgba(255,255,255,.48)"}}>{p.icon} {p.name}</div>)}
              </div>
            </Fade>
            <Fade delay={.16}>
              <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
                <button onClick={()=>setPage("payment")} style={BG}>Get Covered — from ₹29/week →</button>
                <button onClick={()=>setPage("weather")} style={BO}>🌦️ View Weather Alerts</button>
              </div>
              <p style={{fontSize:".58rem",color:"rgba(255,255,255,.24)",marginTop:12}}>IRDAI Registered · RBI Compliant · DPDP Act 2023 · No lock-in · Cancel anytime</p>
            </Fade>
          </div>
        </section>

        {/* ── Footer ───────────────────────── */}
        <footer style={{background:"#0D1B3E",borderTop:"1px solid rgba(200,150,44,.12)",padding:"46px 56px 0",width:"100%"}}>
          <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,paddingBottom:36,borderBottom:"1px solid rgba(255,255,255,.06)"}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:8,fontFamily:"'Playfair Display',serif",fontSize:"1.05rem",fontWeight:700,color:"#fff",marginBottom:10}}><Chakra size={20} color="#E8B84B" speed="8s"/> Suraksha</div>
              <p style={{fontSize:".68rem",color:"rgba(255,255,255,.38)",lineHeight:1.65,maxWidth:210}}>One policy. Every platform. Every delivery partner. Every storm. India's first universal parametric insurance for the gig delivery workforce.</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:4,marginTop:11}}>
                {["IRDAI","RBI PPI","DPDP 2023","ISO 27001"].map(b=><span key={b} style={{fontSize:".48rem",fontWeight:700,background:"rgba(200,150,44,.1)",border:"1px solid rgba(200,150,44,.17)",borderRadius:3,padding:"2px 6px",color:"rgba(200,150,44,.58)"}}>{b}</span>)}
              </div>
            </div>
            {[{head:"Product",links:[["#workflow","How It Works"],["#triggers","Trigger Types"],["#pricing","Weekly Plans"],["#ai","AI Engine"]]},
              {head:"Platforms",links:[["#","Platform Integration"],["#","B2B API Docs"],["#","Co-Funding Programme"],["#","Analytics Dashboard"]]},
              {head:"Company",links:[["#","About Suraksha"],["#","Press & Media"],["#","Careers"],["#compliance","Compliance"]]},
            ].map(col=>(
              <div key={col.head}>
                <div style={{fontSize:".54rem",fontWeight:800,letterSpacing:"2.5px",textTransform:"uppercase",color:"rgba(255,255,255,.28)",marginBottom:12}}>{col.head}</div>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:6}}>
                  {col.links.map(([href,label])=><li key={label}><a href={href} style={{fontSize:".68rem",color:"rgba(255,255,255,.35)",textDecoration:"none"}}>{label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0"}}>
            <span style={{fontSize:".58rem",color:"rgba(255,255,255,.18)"}}>© 2025 Suraksha Insurance Tech Pvt. Ltd. All rights reserved.</span>
            <span style={{fontSize:".52rem",color:"rgba(255,255,255,.13)"}}>IRDAI Registered Distributor · RBI PPI Licence · DPDP Act 2023 · Not an investment product</span>
          </div>
        </footer>

        </>}
      </div>
    </>
  );
}
