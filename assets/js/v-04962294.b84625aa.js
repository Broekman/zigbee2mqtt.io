"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84806],{90373:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-04962294",path:"/devices/RTCGQ13LM.html",title:"Xiaomi RTCGQ13LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi RTCGQ13LM control via MQTT",description:"Integrate your Xiaomi RTCGQ13LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-02-28T13:58:01.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[]},{level:2,title:"Adapter firmware",slug:"adapter-firmware",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Motion_sensitivity (enum)",slug:"motion-sensitivity-enum",children:[]},{level:3,title:"Occupancy_timeout (numeric)",slug:"occupancy-timeout-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/RTCGQ13LM.md",git:{updatedTime:1642845682e3}}},59323:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var o=i(66252);const a=(0,o.uE)('<h1 id="xiaomi-rtcgq13lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-rtcgq13lm" aria-hidden="true">#</a> Xiaomi RTCGQ13LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>RTCGQ13LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara high precision motion sensor</td></tr><tr><td>Exposes</td><td>occupancy, motion_sensitivity, occupancy_timeout, battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/RTCGQ13LM.jpg" alt="Xiaomi RTCGQ13LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h2 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware" aria-hidden="true">#</a> Adapter firmware</h2><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p>',5),r=(0,o.Uk)("CC2530/CC2531: "),c={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},d=(0,o._)("code",null,"20211115",-1),n=(0,o.Uk)("CC1352/CC2652: "),u={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},l=(0,o._)("code",null,"20211114",-1),s=(0,o.Uk)("Conbee II: "),h={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},p=(0,o._)("code",null,"0x26720700",-1),m=(0,o._)("p",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.",-1),b=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),y=(0,o.Uk)("How to use device type specific configuration"),f=(0,o.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="motion-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#motion-sensitivity-enum" aria-hidden="true">#</a> Motion_sensitivity (enum)</h3><p>Value can be found in the published state on the <code>motion_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric" aria-hidden="true">#</a> Occupancy_timeout (numeric)</h3><p>Time in seconds till occupancy goes to false. Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>s</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),v={},g=(0,i(83744).Z)(v,[["render",function(e,t){const i=(0,o.up)("OutboundLink"),v=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("ul",null,[(0,o._)("li",null,[r,(0,o._)("a",c,[d,(0,o.Wm)(i)])]),(0,o._)("li",null,[n,(0,o._)("a",u,[l,(0,o.Wm)(i)])]),(0,o._)("li",null,[s,(0,o._)("a",h,[p,(0,o.Wm)(i)])])]),m,b,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(v,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[y])),_:1})])]),f],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);