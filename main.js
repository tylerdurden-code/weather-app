(()=>{"use strict";const t=document.querySelector("[data-city]"),e=document.querySelector("[data-degrees]"),n=document.querySelector("[data-description]"),o=document.querySelector("[data-date]"),a=document.querySelector("[data-input-btn]"),r=document.querySelector("[data-icon]"),c=document.querySelector(".loader"),d=(document.querySelector("[data-input-div]"),document.querySelector("[data-error-message]")),i=document.querySelector("[data-humidity]"),u=document.querySelector("[data-pressure]"),s=document.querySelector("[data-windspeed]"),l=document.querySelector("[data-feelslike]");async function y(a){try{c.style.display="block";const y=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${a}&appid=7e00ad08f8fb0eb71d45cd175d852c74&units=metric `),m=await y.json(),p=m.weather[0].description,h=m.name,w=new Date(1e3*m.dt).toDateString(),{temp:C}=m.main,{icon:q}=m.weather[0],{humidity:S}=m.main,{pressure:f}=m.main,x=m.wind.speed,g=m.main.feels_like;setTimeout((()=>{c.style.display="none"}),1200),async function(a,c,y,m,p,h,w,C,q,S){const f=await async function(t){return(await fetch(`http://openweathermap.org/img/wn/${t}@2x.png`)).url}(h);t.textContent=a,e.textContent=`${c} °C`,n.textContent=function(t){const e=t.split(" ");for(let t=0;t<e.length;t+=1)e[t]=e[t][0].toUpperCase()+e[t].substr(1);return e.join(" ")}(p),o.textContent=`${y}`,r.src=f,d.textContent="",i.textContent=`${w}%`,u.textContent=C,s.textContent=`${q}km/h`,l.textContent=`${S}°C`}(h,C,w,0,p,q,S,f,x,g)}catch(t){d.textContent="Cannot find the city/country",console.log("Cannot find the city/country"),c.style.display="none"}}a.addEventListener("keydown",(t=>{"Enter"===t.key&&(y(a.value),a.value="")})),y("New York")})();
