import{r as l,a as e,j as i,F as o}from"./jsx-runtime-f40812bf.js";import{f as N,d as u,V as T,L as a,S as R,b as f}from"./Phone-3c5ec2e3.js";import{u as E}from"./index.esm-497ba86e.js";import{r as g,F as p}from"./number-28525126.js";function y(){var m;const t=E(R.LockScreenVisible),[s,P]=l.useState({background:"sunny",icon:"sunny",temperature:0}),[n,h]=l.useState(null);l.useEffect(()=>{t||N("Weather",{action:"getData"}).then(r=>{if(!r)return u("warning","No weather data received");P(r)})},[t]),l.useEffect(()=>{T(`./assets/img/backgrounds/default/apps/weather/${s.background}.png`).then(r=>{h(r.dominant+"8d")})},[s]);const A=()=>{const c=new Date().getHours();return c>=21||c<=5},S={cloudy:a("APPS.WEATHER.TYPES.CLOUDY"),drizzle:a("APPS.WEATHER.TYPES.LIGHT_RAIN"),fog:a("APPS.WEATHER.TYPES.FOG"),"heavy-rain":a("APPS.WEATHER.TYPES.HEAVY_RAIN"),night:a("APPS.WEATHER.TYPES.CLEAR"),"partly-cloudy-night":a("APPS.WEATHER.TYPES.MOSTLY_CLEAR"),"partly-cloudy-sunny":a("APPS.WEATHER.TYPES.MOSTLY_CLEAR"),rain:a("APPS.WEATHER.TYPES.RAIN"),snow:a("APPS.WEATHER.TYPES.SNOW"),thunder:a("APPS.WEATHER.TYPES.THUNDER"),sunny:a("APPS.WEATHER.TYPES.CLEAR"),tornado:a("APPS.WEATHER.TYPES.TORNADO"),windy:a("APPS.WEATHER.TYPES.WINDY")};return e("div",{className:"weather-container",style:{backgroundImage:`url(./assets/img/backgrounds/default/apps/weather/${s.background}.png)`},children:[e("div",{className:"weather-info",children:[i("div",{className:"location",children:s.city}),e("div",{className:"temperature",children:[d(s.temperature),"°"]}),i("div",{className:"weather-type",children:S[s.icon]})]}),e("div",{className:"hourly-forecast",style:{backgroundColor:n},children:[e("div",{className:"info-header",children:[i("i",{className:"fal fa-clock"}),a("APPS.WEATHER.HOURLY_FORECAST")]}),e("div",{className:"content",children:[e("div",{className:"item",children:[i("div",{className:"time",children:a("APPS.WEATHER.NOW")}),i("img",{src:`./assets/img/icons/weather/${s.icon}.png`}),e("div",{className:"temp",children:[d(s.temperature),"°"]})]}),(m=s==null?void 0:s.hourly)==null?void 0:m.map((r,c)=>e("div",{className:"item",children:[e("div",{className:"time",children:["3",i("span",{children:"PM"})]}),i("img",{src:`./assets/img/icons/weather/${r.type}.png`}),e("div",{className:"temp",children:[d(r.temperature),"°"]})]},c))]})]}),e("div",{className:"details",children:[e("div",{className:"item",style:{backgroundColor:n},children:[e("div",{className:"item-header",children:[i("i",{className:"fal fa-temperature-low"}),a("APPS.WEATHER.FEELS_LIKE")]}),e("div",{className:"item-content",children:[d(s.feelsLike??s.temperature),"°"]}),i("div",{className:"item-footer",children:(s==null?void 0:s.feelsLike)==s.temperature||!s.feelsLike?a("APPS.WEATHER.FEELS_LIKE_SAME"):s.feelsLike>s.temperature?a("APPS.WEATHER.FEELS_LIKE_HUMIDITY"):a("APPS.WEATHER.FEELS_LIKE_WIND")})]}),i("div",{className:"item",style:{backgroundColor:n},children:A()?e(o,{children:[e("div",{className:"item-header",children:[i("i",{className:"fas fa-sunrise"}),a("APPS.WEATHER.SUNRISE")]}),e("div",{className:"item-content",children:["3:31",i("span",{children:"AM"})]}),e("div",{className:"item-footer",children:[a("APPS.WEATHER.SUNSET"),": 10:09",i("span",{children:"PM"})]})]}):e(o,{children:[e("div",{className:"item-header",children:[i("i",{className:"fas fa-sunrise"}),a("APPS.WEATHER.SUNSET")]}),e("div",{className:"item-content",children:["10:09",i("span",{children:"PM"})]}),e("div",{className:"item-footer",children:[a("APPS.WEATHER.SUNRISE"),": 3:31",i("span",{children:"AM"})]})]})}),e("div",{className:"item",style:{backgroundColor:n},children:[e("div",{className:"item-header",children:[i("i",{className:"fas fa-wind"}),a("APPS.WEATHER.WIND")]}),e("div",{className:"wind-data",children:[g(s.windSpeed,1),i("span",{children:"m/s"})]}),i("img",{src:"./assets/img/icons/weather/wind.png"})]}),e("div",{className:"item",style:{backgroundColor:n},children:[e("div",{className:"item-header",children:[i("i",{className:"fas fa-dewpoint"}),a("APPS.WEATHER.PRECIPITATION")]}),i("div",{className:"item-content",children:"0 mm"}),i("div",{className:"item-subcontent",children:a("APPS.WEATHER.LAST_24H")}),e("div",{className:"item-footer",children:["0 mm ",a("APPS.WEATHER.EXPECTED_24H")]})]})]})]})}const d=t=>{const s=E(f.Settings);return s.weather&&s.weather.celcius?p(t):t};export{y as default};
