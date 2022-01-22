"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[77004],{47446:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-164121f6",path:"/devices/Eco-Dim.07.html",title:"EcoDim Eco-Dim.07 control via MQTT",lang:"en-US",frontmatter:{title:"EcoDim Eco-Dim.07 control via MQTT",description:"Integrate your EcoDim Eco-Dim.07 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-05-03T19:47:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Remove from Zigbee network",slug:"remove-from-zigbee-network",children:[]},{level:3,title:"Factory reset",slug:"factory-reset",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/Eco-Dim.07.md",git:{updatedTime:1642845682e3}}},11863:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var i=o(66252);const s=(0,i.uE)('<h1 id="ecodim-eco-dim-07" tabindex="-1"><a class="header-anchor" href="#ecodim-eco-dim-07" aria-hidden="true">#</a> EcoDim Eco-Dim.07</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>Eco-Dim.07</td></tr><tr><td>Vendor</td><td>EcoDim</td></tr><tr><td>Description</td><td>Zigbee &amp; Z-wave dimmer</td></tr><tr><td>Exposes</td><td>light (state, brightness), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/Eco-Dim.07.jpg" alt="EcoDim Eco-Dim.07"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ol><li>Remove the device from a previous Zigbee network. If it has already been added to one otherwise pairing will fail (light blinks fast).</li><li>Press reset button twice. The indicator will start blinking blue (slow) and stays solid for 10s when it succeeds.</li></ol><h3 id="remove-from-zigbee-network" tabindex="-1"><a class="header-anchor" href="#remove-from-zigbee-network" aria-hidden="true">#</a> Remove from Zigbee network</h3><p>There are two methods to remove the device from the Zigbee Network: Method 1. From your Zigbee hub interface, choose to delete or reset the device as instructed. Method 2. Press the reset button 3 times, the indicator starts blinking purple and will stay solid for 10s when removing the dimmer from the network is finished. Timeout 3 mins.</p><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory reset</h3><p>Press and hold the reset button for at least 5 seconds, the indicator will stay red for 10s when the reset is complete. Please note that all configuration parameters will be reset after the device is reset or removed from the network.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',10),a=(0,i.Uk)("How to use device type specific configuration"),n=(0,i.uE)('<ul><li><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),r={},d=(0,o(83744).Z)(r,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[s,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[a])),_:1})])]),n],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);