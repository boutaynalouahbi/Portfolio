"use strict";(self.webpackChunkportfolio_bl=self.webpackChunkportfolio_bl||[]).push([[7055],{7055:(t,i,a)=>{a.d(i,{Attractor:()=>d});var e=a(4409);const n=1,c=1;function o(t,i,a,o,s){const r=t.actualOptions.interactivity.modes.attract;if(!r)return;const d=t.particles.quadTree.query(o,s);for(const l of d){const{dx:t,dy:o,distance:s}=(0,e.vr)(l.position,i),d=r.speed*r.factor,u=(0,e.qE)((0,e.il)(r.easing)(c-s/a)*d,n,r.maxSpeed),p=e.Mi.create(s?t/s*u:d,s?o/s*u:d);l.position.subFrom(p)}}class s{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),void 0!==t.duration&&(this.duration=t.duration),void 0!==t.easing&&(this.easing=t.easing),void 0!==t.factor&&(this.factor=t.factor),void 0!==t.maxSpeed&&(this.maxSpeed=t.maxSpeed),void 0!==t.speed&&(this.speed=t.speed))}}const r="attract";class d extends e.sJ{constructor(t,i){super(i),this._engine=t,i.attract||(i.attract={particles:[]}),this.handleClickMode=t=>{const a=this.container.actualOptions.interactivity.modes.attract;if(a&&t===r){i.attract||(i.attract={particles:[]}),i.attract.clicking=!0,i.attract.count=0;for(const t of i.attract.particles)this.isEnabled(t)&&t.velocity.setTo(t.initialVelocity);i.attract.particles=[],i.attract.finish=!1,setTimeout((()=>{i.destroyed||(i.attract||(i.attract={particles:[]}),i.attract.clicking=!1)}),a.duration*e.Xu)}}}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.attract;i&&(t.retina.attractModeDistance=i.distance*t.retina.pixelRatio)}interact(){const t=this.container,i=t.actualOptions,a=t.interactivity.status===e.Rb,n=i.interactivity.events,{enable:c,mode:s}=n.onHover,{enable:d,mode:l}=n.onClick;a&&c&&(0,e.hn)(r,s)?function(t,i){const a=t.interactivity.mouse.position,n=t.retina.attractModeDistance;!n||n<0||!a||o(t,a,n,new e.jl(a.x,a.y,n),(t=>i(t)))}(this.container,(t=>this.isEnabled(t))):d&&(0,e.hn)(r,l)&&function(t,i){t.attract||(t.attract={particles:[]});const{attract:a}=t;if(a.finish||(a.count||(a.count=0),a.count++,a.count===t.particles.count&&(a.finish=!0)),a.clicking){const a=t.interactivity.mouse.clickPosition,n=t.retina.attractModeDistance;if(!n||n<0||!a)return;o(t,a,n,new e.jl(a.x,a.y,n),(t=>i(t)))}else!1===a.clicking&&(a.particles=[])}(this.container,(t=>this.isEnabled(t)))}isEnabled(t){var i;const a=this.container,n=a.actualOptions,c=a.interactivity.mouse,o=(null!==(i=null===t||void 0===t?void 0:t.interactivity)&&void 0!==i?i:n.interactivity).events;if((!c.position||!o.onHover.enable)&&(!c.clickPosition||!o.onClick.enable))return!1;const s=o.onHover.mode,d=o.onClick.mode;return(0,e.hn)(r,s)||(0,e.hn)(r,d)}loadModeOptions(t){t.attract||(t.attract=new s);for(var i=arguments.length,a=new Array(i>1?i-1:0),e=1;e<i;e++)a[e-1]=arguments[e];for(const n of a)t.attract.load(null===n||void 0===n?void 0:n.attract)}reset(){}}}}]);
//# sourceMappingURL=7055.e20b09c1.chunk.js.map