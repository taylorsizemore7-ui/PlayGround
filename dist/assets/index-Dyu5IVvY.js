(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,ee=1020,O=35902,k=35899,A=1021,te=1022,j=1023,ne=1026,re=1027,ie=1028,ae=1029,oe=1030,se=1031,ce=1033,le=33776,ue=33777,de=33778,fe=33779,pe=35840,me=35841,he=35842,ge=35843,_e=36196,ve=37492,ye=37496,be=37488,xe=37489,Se=37490,Ce=37491,we=37808,Te=37809,Ee=37810,De=37811,Oe=37812,ke=37813,Ae=37814,je=37815,Me=37816,Ne=37817,Pe=37818,Fe=37819,Ie=37820,Le=37821,M=36492,Re=36494,ze=36495,Be=36283,N=36284,Ve=36285,He=36286,Ue=2300,We=2301,Ge=2302,Ke=2303,qe=2400,Je=2401,Ye=2402,Xe=3200,Ze=`srgb`,Qe=`srgb-linear`,$e=`linear`,et=`srgb`,tt=7680,nt=35044,rt=35048,it=2e3;function at(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ot(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function st(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ct(){let e=st(`canvas`);return e.style.display=`block`,e}var lt={};function ut(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function dt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function P(...e){e=dt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ft(...e){e=dt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function pt(...e){let t=e.join(` `);t in lt||(lt[t]=!0,P(...e))}function mt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ht={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},gt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},_t=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),vt=1234567,yt=Math.PI/180,bt=180/Math.PI;function xt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_t[e&255]+_t[e>>8&255]+_t[e>>16&255]+_t[e>>24&255]+`-`+_t[t&255]+_t[t>>8&255]+`-`+_t[t>>16&15|64]+_t[t>>24&255]+`-`+_t[n&63|128]+_t[n>>8&255]+`-`+_t[n>>16&255]+_t[n>>24&255]+_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]).toLowerCase()}function St(e,t,n){return Math.max(t,Math.min(n,e))}function Ct(e,t){return(e%t+t)%t}function wt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Tt(e,t,n){return e===t?0:(n-e)/(t-e)}function Et(e,t,n){return(1-n)*e+n*t}function Dt(e,t,n,r){return Et(e,t,1-Math.exp(-n*r))}function Ot(e,t=1){return t-Math.abs(Ct(e,t*2)-t)}function kt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function At(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function jt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Mt(e,t){return e+Math.random()*(t-e)}function Nt(e){return e*(.5-Math.random())}function Pt(e){e!==void 0&&(vt=e);let t=vt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ft(e){return e*yt}function It(e){return e*bt}function Lt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Rt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function zt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Bt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:P(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Vt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ht(e,t){if(t.constructor===Float32Array)return e;let n=Vt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Ut(e,t){if(t.constructor===Float32Array)return e;let n=Vt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Wt={DEG2RAD:yt,RAD2DEG:bt,generateUUID:xt,clamp:St,euclideanModulo:Ct,mapLinear:wt,inverseLerp:Tt,lerp:Et,damp:Dt,pingpong:Ot,smoothstep:kt,smootherstep:At,randInt:jt,randFloat:Mt,randFloatSpread:Nt,seededRandom:Pt,degToRad:Ft,radToDeg:It,isPowerOfTwo:Lt,ceilPowerOfTwo:Rt,floorPowerOfTwo:zt,setQuaternionFromProperEuler:Bt,normalize:Ut,denormalize:Ht};o=Symbol.iterator;var Gt=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=Gt,e.prototype.isVector2=!0;var Kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:P(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var F=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qt.copy(this).projectOnVector(e),this.sub(qt)}reflect(e){return this.sub(qt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=F,t.prototype.isVector3=!0;var qt=new F,Jt=new Kt,Yt=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return pt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Xt.makeScale(e,t)),this}rotate(e){return pt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Xt.makeRotation(-e)),this}translate(e,t){return pt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Xt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=Yt,n.prototype.isMatrix3=!0;var Xt=new Yt,Zt=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qt=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $t(){let e={enabled:!0,workingColorSpace:Qe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=tn(e.r),e.g=tn(e.g),e.b=tn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=nn(e.r),e.g=nn(e.g),e.b=nn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?$e:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Qe]:{primaries:t,whitePoint:r,transfer:$e,toXYZ:Zt,fromXYZ:Qt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:r,transfer:et,toXYZ:Zt,fromXYZ:Qt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),e}var en=$t();function tn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function nn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var rn,an=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rn===void 0&&(rn=st(`canvas`)),rn.width=e.width,rn.height=e.height;let t=rn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=rn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=st(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=tn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(tn(t[e]/255)*255):t[e]=tn(t[e]);return{data:t,width:e.width,height:e.height}}return P(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},on=0,sn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:on++}),this.uuid=xt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(cn(r[t].image)):e.push(cn(r[t]))}else e=cn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function cn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?an.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(P(`Texture: Unable to serialize Texture.`),{})}var ln=0,un=new F,dn=class e extends gt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=j,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=xt(),this.name=``,this.source=new sn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(un).x}get height(){return this.source.getSize(un).y}get depth(){return this.source.getSize(un).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){P(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?P(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null,dn.DEFAULT_MAPPING=300,dn.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var fn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=fn,r.prototype.isVector4=!0;var pn=class extends gt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new dn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new sn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},mn=class extends pn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},hn=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},gn=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},_n=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/vn.setFromMatrixColumn(e,0).length(),i=1/vn.setFromMatrixColumn(e,1).length(),a=1/vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bn,e,xn)}lookAt(e,t,n){let r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Sn.crossVectors(n,wn),Sn.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Sn.crossVectors(n,wn)),Sn.normalize(),Cn.crossVectors(wn,Sn),r[0]=Sn.x,r[4]=Cn.x,r[8]=wn.x,r[1]=Sn.y,r[5]=Cn.y,r[9]=wn.y,r[2]=Sn.z,r[6]=Cn.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],re=r[11],ie=r[15];return i[0]=a*x+o*T+s*O+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*re,i[12]=a*w+o*ee+s*te+c*ie,i[1]=l*x+u*T+d*O+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*re,i[13]=l*w+u*ee+d*te+f*ie,i[2]=p*x+m*T+h*O+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*re,i[14]=p*w+m*ee+h*te+g*ie,i[3]=_*x+v*T+y*O+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*re,i[15]=_*w+v*ee+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=vn.set(r[0],r[1],r[2]).length(),o=vn.set(r[4],r[5],r[6]).length(),s=vn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),yn.copy(this);let c=1/a,l=1/o,u=1/s;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=l,yn.elements[5]*=l,yn.elements[6]*=l,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=it,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=it,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=_n,i.prototype.isMatrix4=!0;var vn=new F,yn=new _n,bn=new F(0,0,0),xn=new F(1,1,1),Sn=new F,Cn=new F,wn=new F,Tn=new _n,En=new Kt,Dn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-St(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(St(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:P(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return En.setFromEuler(this),this.setFromQuaternion(En,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER=`XYZ`;var On=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},kn=0,An=new F,jn=new Kt,Mn=new _n,Nn=new F,Pn=new F,Fn=new F,In=new Kt,Ln=new F(1,0,0),Rn=new F(0,1,0),zn=new F(0,0,1),Bn={type:`added`},Vn={type:`removed`},Hn={type:`childadded`,child:null},Un={type:`childremoved`,child:null},Wn=class e extends gt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kn++}),this.uuid=xt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new F,n=new Dn,r=new Kt,i=new F(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _n},normalMatrix:{value:new Yt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new On,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Ln,e)}rotateY(e){return this.rotateOnAxis(Rn,e)}rotateZ(e){return this.rotateOnAxis(zn,e)}translateOnAxis(e,t){return An.copy(e).applyQuaternion(this.quaternion),this.position.add(An.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ln,e)}translateY(e){return this.translateOnAxis(Rn,e)}translateZ(e){return this.translateOnAxis(zn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nn.copy(e):Nn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Pn,Nn,this.up):Mn.lookAt(Nn,Pn,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(Mn),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(ft(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bn),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null):ft(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vn),Un.child=e,this.dispatchEvent(Un),Un.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bn),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pn,e,Fn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pn,In,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Wn.DEFAULT_UP=new F(0,1,0),Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=class extends Wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Kn={type:`move`},qn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Xn={h:0,s:0,l:0};function Zn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var I=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=en.workingColorSpace){if(e=Ct(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Zn(i,r,e+1/3),this.g=Zn(i,r,e),this.b=Zn(i,r,e-1/3)}return en.colorSpaceToWorking(this,r),this}setStyle(e,t=Ze){function n(t){t!==void 0&&parseFloat(t)<1&&P(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:P(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);P(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){let n=Jn[e.toLowerCase()];return n===void 0?P(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tn(e.r),this.g=tn(e.g),this.b=tn(e.b),this}copyLinearToSRGB(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return en.workingToColorSpace(Qn.copy(this),e),Math.round(St(Qn.r*255,0,255))*65536+Math.round(St(Qn.g*255,0,255))*256+Math.round(St(Qn.b*255,0,255))}getHexString(e=Ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.workingToColorSpace(Qn.copy(this),t);let n=Qn.r,r=Qn.g,i=Qn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=en.workingColorSpace){return en.workingToColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=Ze){en.workingToColorSpace(Qn.copy(this),e);let t=Qn.r,n=Qn.g,r=Qn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Xn);let n=Et(Yn.h,Xn.h,t),r=Et(Yn.s,Xn.s,t),i=Et(Yn.l,Xn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new I;I.NAMES=Jn;var $n=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new I(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},tr=new F,nr=new F,rr=new F,ir=new F,ar=new F,or=new F,sr=new F,cr=new F,lr=new F,ur=new F,dr=new fn,fr=new fn,pr=new fn,mr=class e{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tr.subVectors(e,t),r.cross(tr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){tr.subVectors(r,t),nr.subVectors(n,t),rr.subVectors(e,t);let a=tr.dot(tr),o=tr.dot(nr),s=tr.dot(rr),c=nr.dot(nr),l=nr.dot(rr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ir)!==null&&ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ir)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ir.x),s.addScaledVector(a,ir.y),s.addScaledVector(o,ir.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return dr.setScalar(0),fr.setScalar(0),pr.setScalar(0),dr.fromBufferAttribute(e,t),fr.fromBufferAttribute(e,n),pr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(dr,i.x),a.addScaledVector(fr,i.y),a.addScaledVector(pr,i.z),a}static isFrontFacing(e,t,n,r){return tr.subVectors(n,t),nr.subVectors(e,t),tr.cross(nr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),tr.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ar.subVectors(r,n),or.subVectors(i,n),cr.subVectors(e,n);let s=ar.dot(cr),c=or.dot(cr);if(s<=0&&c<=0)return t.copy(n);lr.subVectors(e,r);let l=ar.dot(lr),u=or.dot(lr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(ar,a);ur.subVectors(e,i);let f=ar.dot(ur),p=or.dot(ur);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(or,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return sr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(sr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_r.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_r.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,_r):_r.fromBufferAttribute(r,t),_r.applyMatrix4(e.matrixWorld),this.expandByPoint(_r);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Er.subVectors(this.max,Tr),yr.subVectors(e.a,Tr),br.subVectors(e.b,Tr),xr.subVectors(e.c,Tr),Sr.subVectors(br,yr),Cr.subVectors(xr,br),wr.subVectors(yr,xr);let t=[0,-Sr.z,Sr.y,0,-Cr.z,Cr.y,0,-wr.z,wr.y,Sr.z,0,-Sr.x,Cr.z,0,-Cr.x,wr.z,0,-wr.x,-Sr.y,Sr.x,0,-Cr.y,Cr.x,0,-wr.y,wr.x,0];return!kr(t,yr,br,xr,Er)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,yr,br,xr,Er))?!1:(Dr.crossVectors(Sr,Cr),t=[Dr.x,Dr.y,Dr.z],kr(t,yr,br,xr,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_r).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gr=[new F,new F,new F,new F,new F,new F,new F,new F],_r=new F,vr=new hr,yr=new F,br=new F,xr=new F,Sr=new F,Cr=new F,wr=new F,Tr=new F,Er=new F,Dr=new F,Or=new F;function kr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Or.fromArray(e,a);let o=i.x*Math.abs(Or.x)+i.y*Math.abs(Or.y)+i.z*Math.abs(Or.z),s=t.dot(Or),c=n.dot(Or),l=r.dot(Or);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ar=new F,jr=new Gt,Mr=0,Nr=class extends gt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=nt,this.updateRanges=[],this.gpuType=w,this.version=0,this._normalizationScale=e===void 0?void 0:Vt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix4(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyNormalMatrix(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.transformDirection(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Ht(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ut(e,this.array):Math.round(e*t)}},Pr=class extends Nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Fr=class extends Nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ir=class extends Nr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lr=new hr,Rr=new F,zr=new F,Br=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Lr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Rr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(zr)),this.expandByPoint(Rr.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vr=0,Hr=new _n,Ur=new Wn,Wr=new F,Gr=new hr,Kr=new hr,qr=new F,Jr=class e extends gt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=xt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(at(e)?Fr:Pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Yt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hr.makeRotationFromQuaternion(e),this.applyMatrix4(Hr),this}rotateX(e){return Hr.makeRotationX(e),this.applyMatrix4(Hr),this}rotateY(e){return Hr.makeRotationY(e),this.applyMatrix4(Hr),this}rotateZ(e){return Hr.makeRotationZ(e),this.applyMatrix4(Hr),this}translate(e,t,n){return Hr.makeTranslation(e,t,n),this.applyMatrix4(Hr),this}scale(e,t,n){return Hr.makeScale(e,t,n),this.applyMatrix4(Hr),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ir(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&P(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)ft(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Gr.setFromBufferAttribute(n),this.morphTargetsRelative?(qr.addVectors(this.boundingBox.min,Gr.min),this.boundingBox.expandByPoint(qr),qr.addVectors(this.boundingBox.max,Gr.max),this.boundingBox.expandByPoint(qr)):(this.boundingBox.expandByPoint(Gr.min),this.boundingBox.expandByPoint(Gr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)ft(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new F,1/0);else if(e){let n=this.boundingSphere.center;if(Gr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Kr.setFromBufferAttribute(n),this.morphTargetsRelative?(qr.addVectors(Gr.min,Kr.min),Gr.expandByPoint(qr),qr.addVectors(Gr.max,Kr.max),Gr.expandByPoint(qr)):(Gr.expandByPoint(Kr.min),Gr.expandByPoint(Kr.max))}Gr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)qr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(qr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)qr.fromBufferAttribute(a,t),o&&(Wr.fromBufferAttribute(e,t),qr.add(Wr)),r=Math.max(r,n.distanceToSquared(qr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Nr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new F,s[e]=new F;let l=new F,u=new F,d=new F,f=new Gt,p=new Gt,m=new Gt,h=new F,g=new F;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new F,b=new F,x=new F,S=new F;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Nr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new F,i=new F,a=new F,o=new F,s=new F,c=new F,l=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qr.fromBufferAttribute(e,t),qr.normalize(),e.setXYZ(t,qr.x,qr.y,qr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Nr(a,r,i)}if(this.index===null)return P(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Yr=new F,Xr=new F,Zr=new Yt,Qr=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Yr.subVectors(n,t).cross(Xr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Yr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zr.getNormalMatrix(e),r=this.coplanarPoint(Yr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$r=0,ei=class extends gt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$r++}),this.uuid=xt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new I(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tt,this.stencilZFail=tt,this.stencilZPass=tt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){P(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?P(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new I().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Qr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Gt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ti=new F,ni=new F,ri=new F,ii=new F,ai=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ni.copy(e).add(t).multiplyScalar(.5),ri.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ni);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ri),o=ii.dot(this.direction),s=-ii.dot(ri),c=ii.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ni).addScaledVector(ri,d),f}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),r=ti.dot(ti)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,A,te,j;if(y>=b&&y>=x?(w=s,D=u,k=p,j=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,A=_,te=v):(S=l,C=c,T=f,E=d,ee=h,O=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,j=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,A=v,te=g):(S=s,C=l,T=u,E=f,ee=p,O=h,A=g,te=v)):(w=l,D=f,k=h,j=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,A=g,te=_):(S=c,C=s,T=d,E=u,ee=m,O=p,A=_,te=g)),w===0)return null;let ne=S/w,re=C/w,ie=1/w,ae=T-ne*D,oe=E-re*D,se=ee-ne*k,ce=O-re*k,le=A-ne*j,ue=te-re*j,de=le*ce-ue*se,fe=ae*ue-oe*le,pe=se*oe-ce*ae;if(r){if(de<0||fe<0||pe<0)return null}else if((de<0||fe<0||pe<0)&&(de>0||fe>0||pe>0))return null;let me=de+fe+pe;if(me===0)return null;let he=ie*(de*D+fe*k+pe*j);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new I(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},si=new _n,ci=new ai,li=new Br,ui=new F,di=new F,fi=new F,pi=new F,mi=new F,hi=new F,gi=new F,_i=new F,vi=class extends Wn{constructor(e=new Jr,t=new oi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){hi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(mi.fromBufferAttribute(s,e),a?hi.addScaledVector(mi,r):hi.addScaledVector(mi.sub(t),r))}t.add(hi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),li.copy(n.boundingSphere),li.applyMatrix4(i),ci.copy(e.ray).recast(e.near),li.containsPoint(ci.origin)===!1&&(ci.intersectSphere(li,ui)===null||ci.origin.distanceToSquared(ui)>(e.far-e.near)**2)||(si.copy(i).invert(),ci.copy(e.ray).applyMatrix4(si),(n.boundingBox===null||ci.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=bi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=bi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=bi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=bi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function yi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;_i.copy(s),_i.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(_i);return l<n.near||l>n.far?null:{distance:l,point:_i.clone(),object:e}}function bi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,di),e.getVertexPosition(c,fi),e.getVertexPosition(l,pi);let u=yi(e,t,n,r,di,fi,pi,gi);if(u){let e=new F;mr.getBarycoord(gi,di,fi,pi,e),i&&(u.uv=mr.getInterpolatedAttribute(i,s,c,l,e,new Gt)),a&&(u.uv1=mr.getInterpolatedAttribute(a,s,c,l,e,new Gt)),o&&(u.normal=mr.getInterpolatedAttribute(o,s,c,l,e,new F),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new F,materialIndex:0};mr.getNormal(di,fi,pi,t.normal),u.face=t,u.barycoord=e}return u}var xi=class extends dn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Si=class extends Nr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ci=new _n,wi=new _n,Ti=[],Ei=new hr,Di=new _n,Oi=new vi,ki=new Br,Ai=class extends vi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),Ei.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(Ei)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),ki.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(n),e.ray.intersectsSphere(ki)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ci),wi.multiplyMatrices(n,Ci),Oi.matrixWorld=wi,Oi.raycast(e,Ti);for(let e=0,n=Ti.length;e<n;e++){let n=Ti[e];n.instanceId=i,n.object=this,t.push(n)}Ti.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new xi(new Float32Array(r*this.count),r,this.count,ie,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ji=new Br,Mi=new Gt(.5,.5),Ni=new F,Pi=class{constructor(e=new Qr,t=new Qr,n=new Qr,r=new Qr,i=new Qr,a=new Qr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=it,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476+Mi.distanceTo(e.center),ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ni.x=r.normal.x>0?e.max.x:e.min.x,Ni.y=r.normal.y>0?e.max.y:e.min.y,Ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=new _n,Ii=class e{constructor(){this.coordinateSystem=it,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Fi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Pi),n[e].setFromProjectionMatrix(Fi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Pi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Li=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new I(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ri=new F,zi=new F,Bi=new _n,Vi=new ai,Hi=new Br,Ui=new F,Wi=new F,Gi=class extends Wn{constructor(e=new Jr,t=new Li){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ri.fromBufferAttribute(t,e-1),zi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ri.distanceTo(zi);e.setAttribute(`lineDistance`,new Ir(n,1))}else P(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(r),Hi.radius+=i,e.ray.intersectsSphere(Hi)===!1)return;Bi.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Bi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ki(this,e,Vi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ki(this,e,Vi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ki(this,e,Vi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ki(this,e,Vi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ki(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ri.fromBufferAttribute(s,i),zi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ri,zi,Ui,Wi)>r)return;Ui.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ui);if(!(c<t.near||c>t.far))return{distance:c,point:Wi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var qi=new F,Ji=new F,Yi=class extends Gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)qi.fromBufferAttribute(t,e),Ji.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+qi.distanceTo(Ji);e.setAttribute(`lineDistance`,new Ir(n,1))}else P(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Xi=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new I(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zi=new _n,Qi=new ai,$i=new Br,ea=new F,ta=class extends Wn{constructor(e=new Jr,t=new Xi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),$i.radius+=i,e.ray.intersectsSphere($i)===!1)return;Zi.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ea.fromBufferAttribute(l,n),na(ea,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ea.fromBufferAttribute(l,a),na(ea,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function na(e,t,n,r,i,a,o){let s=Qi.distanceSqToPoint(e);if(s<n){let n=new F;Qi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ra=class extends dn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ia=class extends dn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},aa=class extends dn{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ne,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oa=class extends aa{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ne){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sa=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ca=class e extends Jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ir(c,3)),this.setAttribute(`normal`,new Ir(l,3)),this.setAttribute(`uv`,new Ir(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new F;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},la=class e extends Jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new F,l=new Gt;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ir(a,3)),this.setAttribute(`normal`,new Ir(o,3)),this.setAttribute(`uv`,new Ir(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ua=new F,da=new F,fa=new F,pa=new mr,ma=class extends Jr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(yt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u=new Map,d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=pa;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),pa.getNormal(fa),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=pa[c[e]],o=pa[c[t]],f=`${n}_${i}`,p=`${i}_${n}`,m=u.get(p);m?(fa.dot(m.normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u.set(p,null)):u.has(f)||u.set(f,{index0:s[e],index1:s[t],normal:fa.clone()})}}for(let e of u.values())if(e){let{index0:t,index1:n}=e;ua.fromBufferAttribute(a,t),da.fromBufferAttribute(a,n),d.push(ua.x,ua.y,ua.z),d.push(da.x,da.y,da.z)}this.setAttribute(`position`,new Ir(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ha=class e extends Jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ir(p,3)),this.setAttribute(`normal`,new Ir(m,3)),this.setAttribute(`uv`,new Ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ga=class e extends Jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new F,d=new F,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ir(p,3)),this.setAttribute(`normal`,new Ir(m,3)),this.setAttribute(`uv`,new Ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function _a(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ya(i))i.isRenderTargetTexture?(P(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ya(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function va(e){let t={};for(let n=0;n<e.length;n++){let r=_a(e[n]);for(let e in r)t[e]=r[e]}return t}function ya(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ba(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function xa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:en.workingColorSpace}var Sa={clone:_a,merge:va},Ca=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ta=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ca,this.fragmentShader=wa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=ba(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new I().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new F().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new fn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Yt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new _n().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ea=class extends Ta{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Da=class extends ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new I(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new I(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Oa=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Xe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ka=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ja(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ma=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Na=class extends Ma{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qe,endingEnd:qe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Je:i=e,o=2*t-n;break;case Ye:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Je:a=e,s=2*n-t;break;case Ye:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Pa=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Fa=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ia=class extends Ma{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=za(n,t,g,y,r);i[p]=La(x,o,_,b,m)}return i}};function La(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ra(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function za(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=La(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ra(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ba=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ja(e.settings)&&(n.settings={inTangents:Aa(e.settings.inTangents,Array),outTangents:Aa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ia(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ue:t=this.InterpolantFactoryMethodDiscrete;break;case We:t=this.InterpolantFactoryMethodLinear;break;case Ge:t=this.InterpolantFactoryMethodSmooth;break;case Ke:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return P(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ue;case this.InterpolantFactoryMethodLinear:return We;case this.InterpolantFactoryMethodSmooth:return Ge;case this.InterpolantFactoryMethodBezier:return Ke}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;ja(this.settings)&&(Va(this.settings.inTangents,e),Va(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ja(this.settings)&&(Ha(this.settings.inTangents,e),Ha(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(ft(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){ft(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){ft(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ot(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){ft(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ge,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ja(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Va(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ha(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ba.prototype.ValueTypeName=``,Ba.prototype.TimeBufferType=Float32Array,Ba.prototype.ValueBufferType=Float32Array,Ba.prototype.DefaultInterpolation=We;var Ua=class extends Ba{constructor(e,t,n){super(e,t,n)}};Ua.prototype.ValueTypeName=`bool`,Ua.prototype.ValueBufferType=Array,Ua.prototype.DefaultInterpolation=Ue,Ua.prototype.InterpolantFactoryMethodLinear=void 0,Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}};Wa.prototype.ValueTypeName=`color`;var Ga=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}};Ga.prototype.ValueTypeName=`number`;var Ka=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},qa=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}};qa.prototype.ValueTypeName=`quaternion`,qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Ba{constructor(e,t,n){super(e,t,n)}};Ja.prototype.ValueTypeName=`string`,Ja.prototype.ValueBufferType=Array,Ja.prototype.DefaultInterpolation=Ue,Ja.prototype.InterpolantFactoryMethodLinear=void 0,Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends Ba{constructor(e,t,n,r){super(e,t,n,r)}};Ya.prototype.ValueTypeName=`vector`;var Xa={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Za(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Za(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Za(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Qa=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$a=class{constructor(e){this.manager=e===void 0?Qa:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$a.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var eo=new WeakMap,to=class extends $a{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Xa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=eo.get(a);e===void 0&&(e=[],eo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=st(`img`);function s(){l(),t&&t(this);let n=eo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}eo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Xa.remove(`image:${e}`);let n=eo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}eo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xa.add(`image:${e}`,o),i.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},no=class extends $a{constructor(e){super(e)}load(e,t,n,r){let i=new dn,a=new to(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},ro=class extends Wn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new I(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},io=class extends ro{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new I(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ao=new _n,oo=new F,so=new F,co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;oo.setFromMatrixPosition(e.matrixWorld),t.position.copy(oo),so.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(so),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ao,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lo=new F,uo=new Kt,fo=new F,po=class extends Wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=it,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lo,uo,fo),fo.x===1&&fo.y===1&&fo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,uo,fo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lo,uo,fo),fo.x===1&&fo.y===1&&fo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,uo,fo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mo=new F,ho=new Gt,go=new Gt,_o=class extends po{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bt*2*Math.atan(Math.tan(yt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mo.x,mo.y).multiplyScalar(-e/mo.z),mo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mo.x,mo.y).multiplyScalar(-e/mo.z)}getViewSize(e,t){return this.getViewBounds(e,ho,go),t.subVectors(go,ho)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vo=class extends po{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yo=class extends co{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bo=class extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new yo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},xo=class extends ro{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},So=-90,Co=1,wo=class extends Wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new _o(So,Co,e,t);r.layers=this.layers,this.add(r);let i=new _o(So,Co,e,t);i.layers=this.layers,this.add(i);let a=new _o(So,Co,e,t);a.layers=this.layers,this.add(a);let o=new _o(So,Co,e,t);o.layers=this.layers,this.add(o);let s=new _o(So,Co,e,t);s.layers=this.layers,this.add(s);let c=new _o(So,Co,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},To=class extends _o{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Eo=`\\[\\]\\.:\\/`,Do=RegExp(`[\\[\\]\\.:\\/]`,`g`),Oo=`[^\\[\\]\\.:\\/]`,ko=`[^`+Eo.replace(`\\.`,``)+`]`,Ao=`((?:WC+[\\/:])*)`.replace(`WC`,Oo),jo=`(WCOD+)?`.replace(`WCOD`,ko),Mo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Oo),No=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Oo),Po=RegExp(`^`+Ao+jo+Mo+No+`$`),Fo=[`material`,`materials`,`bones`,`map`],Io=class{constructor(e,t,n){let r=n||Lo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Do,``)}static parseTrackName(e){let t=Po.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Fo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){P(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){ft(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){ft(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){ft(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){ft(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){ft(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){ft(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){ft(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;ft(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){ft(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){ft(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lo.Composite=Io,Lo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Lo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Lo.prototype.GetterByBindingType=[Lo.prototype._getValue_direct,Lo.prototype._getValue_array,Lo.prototype._getValue_arrayElement,Lo.prototype._getValue_toArray],Lo.prototype.SetterByBindingTypeAndVersioning=[[Lo.prototype._setValue_direct,Lo.prototype._setValue_direct_setNeedsUpdate,Lo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lo.prototype._setValue_array,Lo.prototype._setValue_array_setNeedsUpdate,Lo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lo.prototype._setValue_arrayElement,Lo.prototype._setValue_arrayElement_setNeedsUpdate,Lo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lo.prototype._setValue_fromArray,Lo.prototype._setValue_fromArray_setNeedsUpdate,Lo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Ro(e,t,n,r){let i=zo(r);switch(n){case A:return e*t;case ie:return e*t/i.components*i.byteLength;case ae:return e*t/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case se:return e*t*2/i.components*i.byteLength;case te:return e*t*3/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case ce:return e*t*4/i.components*i.byteLength;case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:case ge:return Math.max(e,16)*Math.max(t,8)/4;case pe:case he:return Math.max(e,8)*Math.max(t,8)/2;case _e:case ve:case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ye:case Se:case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Te:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ee:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Pe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Fe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ie:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Le:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case M:case Re:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Be:case N:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ve:case He:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function zo(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case O:case k:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?P(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Bo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Vo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ho={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},L={common:{diffuse:{value:new I(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new I(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new I(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new I(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Uo={basic:{uniforms:va([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.fog]),vertexShader:Ho.meshbasic_vert,fragmentShader:Ho.meshbasic_frag},lambert:{uniforms:va([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:new I(0)},envMapIntensity:{value:1}}]),vertexShader:Ho.meshlambert_vert,fragmentShader:Ho.meshlambert_frag},phong:{uniforms:va([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:new I(0)},specular:{value:new I(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ho.meshphong_vert,fragmentShader:Ho.meshphong_frag},standard:{uniforms:va([L.common,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.roughnessmap,L.metalnessmap,L.fog,L.lights,{emissive:{value:new I(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ho.meshphysical_vert,fragmentShader:Ho.meshphysical_frag},toon:{uniforms:va([L.common,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.gradientmap,L.fog,L.lights,{emissive:{value:new I(0)}}]),vertexShader:Ho.meshtoon_vert,fragmentShader:Ho.meshtoon_frag},matcap:{uniforms:va([L.common,L.bumpmap,L.normalmap,L.displacementmap,L.fog,{matcap:{value:null}}]),vertexShader:Ho.meshmatcap_vert,fragmentShader:Ho.meshmatcap_frag},points:{uniforms:va([L.points,L.fog]),vertexShader:Ho.points_vert,fragmentShader:Ho.points_frag},dashed:{uniforms:va([L.common,L.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ho.linedashed_vert,fragmentShader:Ho.linedashed_frag},depth:{uniforms:va([L.common,L.displacementmap]),vertexShader:Ho.depth_vert,fragmentShader:Ho.depth_frag},normal:{uniforms:va([L.common,L.bumpmap,L.normalmap,L.displacementmap,{opacity:{value:1}}]),vertexShader:Ho.meshnormal_vert,fragmentShader:Ho.meshnormal_frag},sprite:{uniforms:va([L.sprite,L.fog]),vertexShader:Ho.sprite_vert,fragmentShader:Ho.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ho.background_vert,fragmentShader:Ho.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Ho.backgroundCube_vert,fragmentShader:Ho.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ho.cube_vert,fragmentShader:Ho.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ho.equirect_vert,fragmentShader:Ho.equirect_frag},distance:{uniforms:va([L.common,L.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ho.distance_vert,fragmentShader:Ho.distance_frag},shadow:{uniforms:va([L.lights,L.fog,{color:{value:new I(0)},opacity:{value:1}}]),vertexShader:Ho.shadow_vert,fragmentShader:Ho.shadow_frag}};Uo.physical={uniforms:va([Uo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new I(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new I(0)},specularColor:{value:new I(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Ho.meshphysical_vert,fragmentShader:Ho.meshphysical_frag};var Wo={r:0,b:0,g:0},Go=new _n,Ko=new Yt;Ko.set(-1,0,0,0,1,0,0,0,1);function qo(e,t,n,r,i,a){let o=new I(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new vi(new ca(1,1,1),new Ta({name:`BackgroundCubeMaterial`,uniforms:_a(Uo.backgroundCube.uniforms),vertexShader:Uo.backgroundCube.vertexShader,fragmentShader:Uo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Go.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ko),l.material.toneMapped=en.getTransfer(i.colorSpace)!==et,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new vi(new ha(2,2),new Ta({name:`BackgroundMaterial`,uniforms:_a(Uo.background.uniforms),vertexShader:Uo.background.vertexShader,fragmentShader:Uo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=en.getTransfer(i.colorSpace)!==et,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Wo,xa(e)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Jo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Yo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Xo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&P(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Zo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Qr,s=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Qo=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ra(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ca(5,5,5),i=new Ta({name:`CubemapFromEquirect`,uniforms:_a(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new vi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new wo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},$o=256,es=3,ts=20,ns=256,rs=16,is=3,as=new F,os=new I,ss=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wo(1,10,null),this._boxMesh=new vi(new ca(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=as}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(os));let h=new wo(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ms(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ps(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max($o,zt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?$o:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=cs(e,!1,!1),n=Math.log2(e)-es;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=cs(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=ms()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ps()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=us(),this._integrationMaterial=ds());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/rs);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-is)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(ns*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=fs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function cs(e,t,n){return new Qo(e,{minFilter:_,generateMipmaps:t,type:T,colorSpace:Qe,depthBuffer:n})}function ls(e,t,n){return new Ta({name:e,uniforms:t,vertexShader:Ho.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function us(){return ls(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ns}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ds(){return ls(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rs}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fs(){return ls(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ts}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ps(){return ls(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ms(){return ls(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function hs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Qo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ss(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ss(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function gs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&pt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function _s(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Fr:Pr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function vs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ys(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:ft(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function bs(e,t,n){let r=new WeakMap,i=new fn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new hn(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Gt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function xs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ss={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Cs(e,t,n,r,i,a){let o=new mn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Jr;u.setAttribute(`position`,new Ir([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Ir([0,2,0,0,2,0],2));let d=new Ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new vi(u,d),p=new vo(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new mn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new mn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new aa(t,n),a===!0&&(l.format=re,l.type=ee)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},en.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ss[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var ws=new dn,Ts=new aa(1,1),Es=new oa(1),Ds=new hn,Os=new gn,ks=new ra,As=[],js=[],Ms=new Float32Array(16),Ns=new Float32Array(9),Ps=new Float32Array(4);function Fs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=As[i];if(a===void 0&&(a=new Float32Array(i),As[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Is(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ls(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Rs(e,t){let n=js[t];n===void 0&&(n=new Int32Array(t),js[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function zs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Is(n,t))return;e.uniform2fv(this.addr,t),Ls(n,t)}}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Is(n,t))return;e.uniform3fv(this.addr,t),Ls(n,t)}}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Is(n,t))return;e.uniform4fv(this.addr,t),Ls(n,t)}}function Us(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Is(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ls(n,t)}else{if(Is(n,r))return;Ps.set(r),e.uniformMatrix2fv(this.addr,!1,Ps),Ls(n,r)}}function Ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Is(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ls(n,t)}else{if(Is(n,r))return;Ns.set(r),e.uniformMatrix3fv(this.addr,!1,Ns),Ls(n,r)}}function Gs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Is(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ls(n,t)}else{if(Is(n,r))return;Ms.set(r),e.uniformMatrix4fv(this.addr,!1,Ms),Ls(n,r)}}function Ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Is(n,t))return;e.uniform2iv(this.addr,t),Ls(n,t)}}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Is(n,t))return;e.uniform3iv(this.addr,t),Ls(n,t)}}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Is(n,t))return;e.uniform4iv(this.addr,t),Ls(n,t)}}function Xs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Is(n,t))return;e.uniform2uiv(this.addr,t),Ls(n,t)}}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Is(n,t))return;e.uniform3uiv(this.addr,t),Ls(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Is(n,t))return;e.uniform4uiv(this.addr,t),Ls(n,t)}}function ec(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function tc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?ec(Ts):ws,n.setTexture2D(t||a,i)}function nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Os,i)}function rc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?ec(Es):ks,n.setTextureCube(t||a,i)}function ic(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ds,i)}function ac(e){switch(e){case 5126:return zs;case 35664:return Bs;case 35665:return Vs;case 35666:return Hs;case 35674:return Us;case 35675:return Ws;case 35676:return Gs;case 5124:case 35670:return Ks;case 35667:case 35671:return qs;case 35668:case 35672:return Js;case 35669:case 35673:return Ys;case 5125:return Xs;case 36294:return Zs;case 36295:return Qs;case 36296:return $s;case 35678:case 36198:case 36298:case 36306:case 35682:return tc;case 35679:case 36299:case 36307:return nc;case 35680:case 36300:case 36308:case 36293:return rc;case 36289:case 36303:case 36311:case 36292:return ic}}function oc(e,t){e.uniform1fv(this.addr,t)}function sc(e,t){let n=Fs(t,this.size,2);e.uniform2fv(this.addr,n)}function cc(e,t){let n=Fs(t,this.size,3);e.uniform3fv(this.addr,n)}function lc(e,t){let n=Fs(t,this.size,4);e.uniform4fv(this.addr,n)}function uc(e,t){let n=Fs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function dc(e,t){let n=Fs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function fc(e,t){let n=Fs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function pc(e,t){e.uniform1iv(this.addr,t)}function mc(e,t){e.uniform2iv(this.addr,t)}function hc(e,t){e.uniform3iv(this.addr,t)}function gc(e,t){e.uniform4iv(this.addr,t)}function _c(e,t){e.uniform1uiv(this.addr,t)}function vc(e,t){e.uniform2uiv(this.addr,t)}function yc(e,t){e.uniform3uiv(this.addr,t)}function bc(e,t){e.uniform4uiv(this.addr,t)}function xc(e,t,n){let r=this.cache,i=t.length,a=Rs(n,i);Is(r,a)||(e.uniform1iv(this.addr,a),Ls(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ec(Ts):ws;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Sc(e,t,n){let r=this.cache,i=t.length,a=Rs(n,i);Is(r,a)||(e.uniform1iv(this.addr,a),Ls(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Os,a[e])}function Cc(e,t,n){let r=this.cache,i=t.length,a=Rs(n,i);Is(r,a)||(e.uniform1iv(this.addr,a),Ls(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?ec(Es):ks;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function wc(e,t,n){let r=this.cache,i=t.length,a=Rs(n,i);Is(r,a)||(e.uniform1iv(this.addr,a),Ls(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ds,a[e])}function Tc(e){switch(e){case 5126:return oc;case 35664:return sc;case 35665:return cc;case 35666:return lc;case 35674:return uc;case 35675:return dc;case 35676:return fc;case 5124:case 35670:return pc;case 35667:case 35671:return mc;case 35668:case 35672:return hc;case 35669:case 35673:return gc;case 5125:return _c;case 36294:return vc;case 36295:return yc;case 36296:return bc;case 35678:case 36198:case 36298:case 36306:case 35682:return xc;case 35679:case 36299:case 36307:return Sc;case 35680:case 36300:case 36308:case 36293:return Cc;case 36289:case 36303:case 36311:case 36292:return wc}}var Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ac(t.type)}},Dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tc(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},kc=/(\w+)(\])?(\[|\.)?/g;function Ac(e,t){e.seq.push(t),e.map[t.id]=t}function jc(e,t,n){let r=e.name,i=r.length;for(kc.lastIndex=0;;){let a=kc.exec(r),o=kc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ac(n,l===void 0?new Ec(s,e,t):new Dc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Oc(s),Ac(n,e)),n=e}}}var Mc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);jc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Nc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Pc=37297,Fc=0;function Ic(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Lc=new Yt;function Rc(e){en._getMatrix(Lc,en.workingColorSpace,e);let t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(en.getTransfer(e)){case $e:return[t,`LinearTransferOETF`];case et:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function zc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ic(e.getShaderSource(t),r)}return i}function Bc(e,t){let n=Rc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Vc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Hc(e,t){let n=Vc[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Uc=new F;function Wc(){return en.getLuminanceCoefficients(Uc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Uc.x.toFixed(4)}, ${Uc.y.toFixed(4)}, ${Uc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Gc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Jc).join(`
`)}function Kc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function qc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Jc(e){return e!==``}function Yc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Xc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(e){return e.replace(Zc,$c)}function $c(e,t){let n=Ho[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Qc(n)}var el=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(e){return e.replace(el,nl)}function nl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function rl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var il={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function al(e){return il[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ol={302:`ENVMAP_MODE_REFRACTION`};function sl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ol[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var cl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ll(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:cl[e.combine]||`ENVMAP_BLENDING_NONE`}function ul(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=al(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=sl(n),d=ll(n),f=Gc(n),p=Kc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Jc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Jc).join(`
`),g.length>0&&(g+=`
`)):(h=[rl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Jc).join(`
`),g=[rl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ho.tonemapping_pars_fragment,n.toneMapping===0?``:Hc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ho.colorspace_pars_fragment,Bc(`linearToOutputTexel`,n.outputColorSpace),Wc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Jc).join(`
`)),o=Qc(o),o=Yc(o,n),o=Xc(o,n),s=Qc(s),s=Yc(s,n),s=Xc(s,n),o=tl(o),s=tl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Nc(i,i.VERTEX_SHADER,v),x=Nc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=zc(i,b,`vertex`),n=zc(i,x,`fragment`);ft(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Mc(i,m),w=qc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Pc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var dl=0,fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pl(e),t.set(e,n)),n}},pl=class{constructor(e){this.id=dl++,this.code=e,this.usedTimes=0}};function ml(e){return e===1030||e===37490||e===36285}function hl(e,t,n,r,i,a){let o=new On,s=new fl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,ee,O;if(x){let e=Uo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,O=t.id}let k=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),te=m.isInstancedMesh===!0,j=m.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!b,ae=ie&&b.isPMREMTexture===!0,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.diffuseRoughness>0,_e=i.dispersion>0,ve=i.retroreflectivity>0,ye=i.iridescence>0,be=i.sheen>0,xe=i.transmission>0,Se=me&&!!i.anisotropyMap,Ce=he&&!!i.clearcoatMap,we=he&&!!i.clearcoatNormalMap,Te=he&&!!i.clearcoatRoughnessMap,Ee=ge&&!!i.diffuseRoughnessMap,De=ye&&!!i.iridescenceMap,Oe=ye&&!!i.iridescenceThicknessMap,ke=be&&!!i.sheenColorMap,Ae=be&&!!i.sheenRoughnessMap,je=!!i.specularMap,Me=!!i.specularColorMap,Ne=!!i.specularIntensityMap,Pe=xe&&!!i.transmissionMap,Fe=xe&&!!i.thicknessMap,Ie=!!i.gradientMap,Le=!!i.alphaMap,M=i.alphaTest>0,Re=!!i.alphaHash,ze=!!i.extensions,Be=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Be=e.toneMapping);let N=ae?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ve={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:j,batchingColor:j&&m._colorsTexture!==null,instancing:te,instancingColor:te&&m.instanceColor!==null,instancingMorph:te&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:en.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&b.mapping,envMapPMREM:ae,envMapMaxLod:ae?N.length-1:null,envMapSize:ae?N[0].width:null,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&ml(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:Se,clearcoat:he,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Te,diffuseRoughness:ge,diffuseRoughnessMap:Ee,dispersion:_e,retroreflection:ve,iridescence:ye,iridescenceMap:De,iridescenceThicknessMap:Oe,sheen:be,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:je,specularColorMap:Me,specularIntensityMap:Ne,transmission:xe,transmissionMap:Pe,thicknessMap:Fe,gradientMap:Ie,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Le,alphaTest:M,alphaHash:Re,combine:i.combine,mapUv:ne&&p(i.map.channel),aoMapUv:oe&&p(i.aoMap.channel),lightMapUv:se&&p(i.lightMap.channel),bumpMapUv:ce&&p(i.bumpMap.channel),normalMapUv:le&&p(i.normalMap.channel),displacementMapUv:ue&&p(i.displacementMap.channel),emissiveMapUv:de&&p(i.emissiveMap.channel),metalnessMapUv:fe&&p(i.metalnessMap.channel),roughnessMapUv:pe&&p(i.roughnessMap.channel),anisotropyMapUv:Se&&p(i.anisotropyMap.channel),clearcoatMapUv:Ce&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:we&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:De&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(i.sheenRoughnessMap.channel),specularMapUv:je&&p(i.specularMap.channel),specularColorMapUv:Me&&p(i.specularColorMap.channel),specularIntensityMapUv:Ne&&p(i.specularIntensityMap.channel),transmissionMapUv:Pe&&p(i.transmissionMap.channel),thicknessMapUv:Fe&&p(i.thicknessMap.channel),alphaMapUv:Le&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(le||me),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ne||Le),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Be,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&en.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&en.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ze&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ze&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Uo[t];n=Sa.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new ul(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function gl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function _l(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function vl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||_l),r.length>1&&r.sort(t||vl),i.length>1&&i.sort(t||vl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function bl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new yl,e.set(t,[i])):n>=r.length?(i=new yl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function xl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new F,color:new I};break;case`SpotLight`:n={position:new F,direction:new F,color:new I,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new F,color:new I,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new F,skyColor:new I,groundColor:new I};break;case`RectAreaLight`:n={color:new I,position:new F,halfWidth:new F,halfHeight:new F}}return e[t.id]=n,n}}}function Sl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Cl=0;function wl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Tl(e){let t=new xl,n=Sl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new F);let i=new F,a=new _n,o=new _n;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(wl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=L.LTC_FLOAT_1,r.rectAreaLTC2=L.LTC_FLOAT_2):(r.rectAreaLTC1=L.LTC_HALF_1,r.rectAreaLTC2=L.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Cl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function El(e){let t=new Tl(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Dl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new El(e),t.set(n,[a])):r>=i.length?(a=new El(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ol=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Al=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],jl=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ml=new _n,Nl=new F,Pl=new F;function Fl(e,t,n){let r=new Pi,i=new Gt,a=new Gt,o=new fn,s=new Oa,c=new ka,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new Ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Ol,fragmentShader:kl}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Jr;g.setAttribute(`position`,new Nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new vi(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){P(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new mn(i.x,i.y,{format:oe,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new aa(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ne,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new Qo(i.x),d.map.depthTexture=new oa(i.x,C)):(d.map=new mn(i.x,i.y),d.map.depthTexture=new aa(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ne,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let y=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Nl.setFromMatrixPosition(l.matrixWorld),e.position.copy(Nl),Pl.copy(e.position),Pl.add(Al[t]),e.up.copy(jl[t]),e.lookAt(Pl),e.updateMatrixWorld(),n.makeTranslation(-Nl.x,-Nl.y,-Nl.z),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ml,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,y,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new mn(i.x,i.y,{format:oe,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Il(e,t){function n(){let t=!1,n=new fn,r=null,i=new fn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ht[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new I(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new fn().fromArray(oe),le=new fn().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(pe(e.BLEND),g=!1);else if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ft(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:ft(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:ft(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:ft(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Ce(t){t!==O&&(j&&e.lineWidth(t),O=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function De(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Oe(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function Le(){try{e.texImage2D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function M(){try{e.texImage3D(...arguments)}catch(e){ft(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Be(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function N(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function He(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new I(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:Le,texImage3D:M,pixelStorei:ze,getParameter:Re,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:Be,viewport:N,reset:Ue}}function Ll(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Gt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):st(`canvas`)}function D(e,t,n){let r=1,i=Ue(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function ee(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function k(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?$e:en.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return ee(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function ie(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ae(e){se(e.target)}function oe(e){ce(e.target)}function se(e){e.removeEventListener(`dispose`,ae),ie(e),ue(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ce(e){e.removeEventListener(`dispose`,oe),ie(e),fe(e)}function le(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ce(t):se(t))}C.clear(),b.clear()}function ue(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&de(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function de(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function fe(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&se(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let pe=0;function me(){pe=0}function he(){return pe}function ge(e){pe=e}function _e(){let e=pe;return e>=i.maxTextures&&P(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),pe+=1,e}function ve(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ye(t,i){let a=r.get(t);if(t.isVideoTexture&&Ve(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ae(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function be(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ae(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function xe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ae(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function Se(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?je(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let Ce={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},we={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},Te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Ee(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,Ce[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,Ce[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,Ce[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,we[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,we[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function De(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ae),ne(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ve(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&de(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Oe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ke(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Oe(n.start,r.width,4),c=Oe(t.start,r.width,4);n.start<=i+1&&a===c&&Oe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ae(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=De(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=en.getPrimaries(en.workingColorSpace),r=o.colorSpace===``?null:en.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=D(o.image,!1,i.maxTextureSize);t=He(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=A(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);Ee(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=j(o,t);if(o.isDepthTexture)p=te(o.format===re,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&ke(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Ro(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Ro(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ue(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Ue(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);ee(o)&&o.mipmapsAutoUpdate===!0&&O(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function je(t,o,s){if(o.image.length!==6)return;let c=De(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=en.getPrimaries(en.workingColorSpace),r=o.colorSpace===``?null:en.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=D(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=He(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=A(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);Ee(e.TEXTURE_CUBE_MAP,o);let C;if(o.isDepthTexture){if(v=te(o.format===re,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ue(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}ee(o)&&o.mipmapsAutoUpdate===!0&&O(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Me(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=A(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Be(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=A(o.internalFormat,c,l,o.normalized,o.colorSpace);N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Pe(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?Se(i.depthTexture,0):ye(i.depthTexture,0);let u=c.__webglTexture,d=Be(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Pe(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Pe(i.__webglFramebuffer[0],t,0):Pe(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ne(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ne(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(t,n,i){let a=r.get(t);n!==void 0&&Me(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Fe(t)}function Le(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,oe),ne(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&N(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=A(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Be(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ne(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Ee(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Me(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);ee(i)?O(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),Ee(c,a),Me(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),ee(a)&&O(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),Ee(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Me(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);ee(i)?O(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Fe(t)}function M(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(ee(a)&&a.mipmapsAutoUpdate===!0){let t=k(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),O(t),n.unbindTexture()}}}let Re=[];function ze(t){if(t.samples>0){if(N(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Re.length=0,Re.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Re.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Be(e){return Math.min(i.maxSamples,e.samples)}function N(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ve(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function He(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(en.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):ft(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ue(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=_e,this.resetTextureUnits=me,this.getTextureUnits=he,this.setTextureUnits=ge,this.setTexture2D=ye,this.setTexture2DArray=be,this.setTexture3D=xe,this.setTextureCube=Se,this.rebindTextures=Ie,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=N,this.dispose=le}function Rl(e,t){function n(n,r=``){let i,a=en.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var zl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ta({vertexShader:zl,fragmentShader:Bl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new ha(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hl=class extends gt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Vl,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new Gt,T=null,E=null,D=new _o;D.viewport=new fn;let O=new _o;O.viewport=new fn;let k=[D,O],A=new To,te=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new qn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new qn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new qn,x[e]=t),t.getHandSpace()};function ae(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}te=null,ie=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?re:ne,a=_.stencil?ee:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new mn(d.textureWidth,d.textureHeight,{format:j,type:v,depthTexture:new aa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new mn(f.framebufferWidth,f.framebufferHeight,{format:j,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||ie!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,ie=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ce(A,i);for(let e=0;e<a.length;e++)ce(a[e],i);A.projectionMatrix.copy(D.projectionMatrix),A.projectionMatrixInverse.copy(D.projectionMatrixInverse),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),le(e,A,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=bt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=k[n];o===void 0&&(o=new _o,o.layers.enable(n),o.viewport=new fn,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new sa,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let fe=new Bo;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},Ul=new _n,Wl=new Yt;Wl.set(-1,0,0,0,1,0,0,0,1);function Gl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,xa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ul.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Wl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Kl(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ql=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jl=null;function Yl(){return Jl===null&&(Jl=new xi(ql,16,16,oe,T),Jl.name=`DFG_LUT`,Jl.minFilter=h,Jl.magFilter=h,Jl.wrapS=u,Jl.wrapT=u,Jl.generateMipmaps=!1,Jl.needsUpdate=!0),Jl}var Xl=class{constructor(e={}){let{canvas:t=ct(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ce,se,ae]),g=new Set([v,C,x,ee,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,O=null,k=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,re=null,ie=null,oe=null,le=null;this._outputColorSpace=Ze;let ue=0,de=0,fe=null,pe=-1,me=null,he=new fn,ge=new fn,_e=null,ve=new I(0),ye=0,be=t.width,xe=t.height,Se=1,Ce=null,we=null,Te=new fn(0,0,be,xe),Ee=new fn(0,0,be,xe),De=!1,Oe=new Pi,ke=new Ii,Ae=!1,je=!1,Me=new _n,Ne=new F,Pe=new fn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Le(){return fe===null?Se:1}let M=n;function Re(e,n){return t.getContext(e,n)}let ze,Be,N,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Qe,$e,et,tt,nt,rt,at,ot,st,lt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ht,!1),t.addEventListener(`webglcontextrestored`,gt,!1),t.addEventListener(`webglcontextcreationerror`,_t,!1),M===null){let t=`webgl2`;if(M=Re(t,e),M===null)throw Re(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}dt()}catch(e){throw t.removeEventListener(`webglcontextlost`,ht,!1),t.removeEventListener(`webglcontextrestored`,gt,!1),t.removeEventListener(`webglcontextcreationerror`,_t,!1),ft(`WebGLRenderer: `+e.message),e}function dt(){ze=new gs(M),ze.init(),ot=new Rl(M,ze),Be=new Xo(M,ze,e,ot),N=new Il(M,ze),Be.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),ie=M.createFramebuffer(),oe=M.createFramebuffer(),le=M.createFramebuffer(),Ve=new ys(M),He=new gl,Ue=new Ll(M,ze,N,He,Be,ot,Ve),We=new hs(j),Ge=new Vo(M),st=new Jo(M,Ge),Ke=new _s(M,Ge,Ve,st),qe=new xs(M,Ke,Ge,st,Ve),nt=new bs(M,Be,Ue),$e=new Zo(He),Je=new hl(j,We,ze,Be,st,$e),Ye=new Gl(j,He),Xe=new bl,Qe=new Dl(ze),tt=new qo(j,We,N,qe,p,s),et=new Fl(j,qe,Be),lt=new Kl(M,Ve,Be,N),rt=new Yo(M,ze,Ve),at=new vs(M,ze,Ve),Ve.programs=Je.programs,j.capabilities=Be,j.extensions=ze,j.properties=He,j.renderLists=Xe,j.shadowMap=et,j.state=N,j.info=Ve}m!==1009&&(te=new Cs(m,t.width,t.height,o,r,i));let pt=new Hl(j,M);this.xr=pt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(e){e!==void 0&&(Se=e,this.setSize(be,xe,!1))},this.getSize=function(e){return e.set(be,xe)},this.setSize=function(e,n,r=!0){pt.isPresenting?P(`WebGLRenderer: Can't change size while VR device is presenting.`):(be=e,xe=n,t.width=Math.floor(e*Se),t.height=Math.floor(n*Se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(be*Se,xe*Se).floor()},this.setDrawingBufferSize=function(e,n,r){be=e,xe=n,Se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)ft(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(he)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(he.copy(Te).multiplyScalar(Le()).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(ge.copy(Ee).multiplyScalar(Le()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(fe!==null){let t=fe.texture.format;e=h.has(t)}if(e){let e=fe.texture.type,t=g.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,M.clearBufferuiv(M.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,M.clearBufferiv(M.COLOR,0,b))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ht,!1),t.removeEventListener(`webglcontextrestored`,gt,!1),t.removeEventListener(`webglcontextcreationerror`,_t,!1),tt.dispose(),Xe.dispose(),Qe.dispose(),Ue.dispose(),He.dispose(),We.dispose(),qe.dispose(),Ke.dispose(),st.dispose(),lt.dispose(),Je.dispose(),pt.dispose(),pt.removeEventListener(`sessionstart`,wt),pt.removeEventListener(`sessionend`,Tt),Et.stop()};function ht(e){e.preventDefault(),ut(`WebGLRenderer: Context Lost.`),ne=!0}function gt(){ut(`WebGLRenderer: Context Restored.`),ne=!1;let e=Ve.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;dt(),Ve.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function _t(e){ft(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function vt(e){let t=e.target;t.removeEventListener(`dispose`,vt),yt(t)}function yt(e){bt(e),He.remove(e)}function bt(e){let t=He.get(e).programs;t!==void 0&&(t.forEach(function(e){Je.releaseProgram(e)}),e.isShaderMaterial&&Je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Fe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Lt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ke.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=Ge.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Le()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Le()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(ze.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ge.get(c).bytesPerElement:1,o=He.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function xt(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),Ae===!0&&$e.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Nt(e,t,r),e.side=0,e.needsUpdate=!0,Nt(e,t,r),e.side=2):Nt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),O=Qe.get(n),O.init(t),A.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),re!==null&&re.updateLights(O.state.lightsArray),je=this.localClippingEnabled,Ae=$e.init(this.clippingPlanes,je),Ae===!0&&$e.setGlobalState(this.clippingPlanes,t),re!==null&&et.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];xt(o,n,t,e),r.add(o)}else xt(i,n,t,e),r.add(i)}}),O=A.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=He.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ze.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let St=null;function Ct(e){St&&St(e)}function wt(){Et.stop()}function Tt(){Et.start()}let Et=new Bo;Et.setAnimationLoop(Ct),typeof self<`u`&&Et.setContext(self),this.setAnimationLoop=function(e){St=e,pt.setAnimationLoop(e),e===null?Et.stop():Et.start()},pt.addEventListener(`sessionstart`,wt),pt.addEventListener(`sessionend`,Tt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){ft(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=pt.enabled===!0&&pt.isPresenting===!0,r=te!==null&&(fe===null||n)&&te.begin(j,fe);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(t),t=pt.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,fe),O=Qe.get(e,A.length),O.init(t),O.state.textureUnits=Ue.getTextureUnits(),A.push(O),Me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?ke.setFromArrayCamera(t):Oe.setFromProjectionMatrix(Me,it,t.reversedDepth),je=this.localClippingEnabled,Ae=$e.init(this.clippingPlanes,je),w=Xe.get(e,k.length),w.init(),k.push(w),this.info.render.frame++,pt.enabled===!0&&pt.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Dt(e,t,-1/0,j.sortObjects)}Dt(e,t,0,j.sortObjects),w.finish(),re!==null&&re.updateLights(O.state.lightsArray),j.sortObjects===!0&&w.sort(Ce,we),Ie=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Ie&&tt.addToRenderList(w,e),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&$e.beginShadows();let i=O.state.shadowsArray;if(et.render(i,e,t),Ae===!0&&$e.endShadows(),(r&&te.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];kt(n,r,e,a)}Ie&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ot(w,e,n,n.viewport)}}else r.length>0&&kt(n,r,e,t),Ie&&tt.render(e),Ot(w,e,t)}fe!==null&&de===0&&(Ue.updateMultisampleRenderTarget(fe),Ue.updateRenderTargetMipmap(fe)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),st.resetDefaultState(),pe=-1,me=null,A.pop(),A.length>0?(O=A[A.length-1],Ue.setTextureUnits(O.state.textureUnits),Ae===!0&&$e.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,k.pop(),w=k.length>0?k[k.length-1]:null,re!==null&&re.renderEnd()};function Dt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?ke:Oe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Me);let i=qe.update(e),a=e.material;a.visible&&w.push(e,i,a,n,Pe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?ke:Oe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=qe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Pe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Pe.copy(e.boundingSphere.center)),Pe.applyMatrix4(e.matrixWorld).applyMatrix4(Me)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,Pe.z,s,t)}}else a.visible&&w.push(e,i,a,n,Pe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Dt(i[e],t,n,r)}function Ot(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Ae===!0&&$e.setGlobalState(j.clippingPlanes,n),r&&N.viewport(he.copy(r)),i.length>0&&At(i,t,n),a.length>0&&At(a,t,n),o.length>0&&At(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function kt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=ze.has(`EXT_color_buffer_half_float`)||ze.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new mn(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Be.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:en.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||he;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(ve),ye=j.getClearAlpha(),ye<1&&j.setClearColor(16777215,.5),j.clear(),Ie&&tt.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Ae===!0&&$e.setGlobalState(j.clippingPlanes,r),At(e,n,r),Ue.updateMultisampleRenderTarget(a),Ue.updateRenderTargetMipmap(a),ze.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,jt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ue.updateMultisampleRenderTarget(a),Ue.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(ve,ye),d!==void 0&&(r.viewport=d),j.toneMapping=u}function At(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&jt(o,t,n,s,l,c)}}function jt(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Mt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Nt(e,t,n){t.isScene!==!0&&(t=Fe);let r=He.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Je.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=We.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,vt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return It(e,s),d}else s.uniforms=Je.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,j),d=Je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=$e.uniform),It(e,s),r.needsLights=zt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Mt(O.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Pt(e,t,n,r,i){let a=He.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Nt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Ft(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Mc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function It(e,t){let n=He.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Lt(e,t,n,r,i){t.isScene!==!0&&(t=Fe),Ue.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=fe===null?j.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:en.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=We.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=He.get(r),y=O.state.lights;if(Ae===!0&&(je===!0||e!==me)){let t=e===me&&r.id===pe;$e.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==$e.numPlanes||v.numIntersection!==$e.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Mt(O.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let C=v.currentProgram;(b===!0||x===!0)&&(C=x===!0?Pt(r,t,i,s,h):Nt(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,C,v));let w=!1,T=!1,E=!1,D=C.getUniforms(),ee=v.uniforms;if(N.useProgram(C.program)&&(w=!0,T=!0,E=!0),r.id!==pe&&(pe=r.id,T=!0),w||me!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),D.setValue(M,`projectionMatrix`,e.projectionMatrix),D.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(M,Ne.setFromMatrixPosition(e.matrixWorld)),Be.logarithmicDepthBuffer&&D.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,T=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&D.setValue(M,`sunShadowMap`,y.state.sunShadowMap,Ue),y.state.directionalShadowMap.length>0&&D.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,Ue),y.state.spotShadowMap.length>0&&D.setValue(M,`spotShadowMap`,y.state.spotShadowMap,Ue),y.state.pointShadowMap.length>0&&D.setValue(M,`pointShadowMap`,y.state.pointShadowMap,Ue)),i.isSkinnedMesh){D.setOptional(M,i,`bindMatrix`),D.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(M,`boneTexture`,e.boneTexture,Ue))}i.isBatchedMesh&&(D.setOptional(M,i,`batchingTexture`),D.setValue(M,`batchingTexture`,i._matricesTexture,Ue),D.setOptional(M,i,`batchingIdTexture`),D.setValue(M,`batchingIdTexture`,i._indirectTexture,Ue),D.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(M,`batchingColorTexture`,i._colorsTexture,Ue));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&nt.update(i,n,C),(T||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,D.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=Yl()),T){if(D.setValue(M,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Rt(ee,E),a&&r.fog===!0&&Ye.refreshFogUniforms(ee,a),Ye.refreshMaterialUniforms(ee,r,Se,xe,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=S,t=0;for(let n of O.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;ee.probesSH.value=e.textures,ee.probesMin.value=e.min,ee.probesMax.value=e.max,ee.probesResolution.value=e.resolution}Mc.upload(M,Ft(v),ee,Ue)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Mc.upload(M,Ft(v),ee,Ue),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(M,`center`,i.center),D.setValue(M,`modelViewMatrix`,i.modelViewMatrix),D.setValue(M,`normalMatrix`,i.normalMatrix),D.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];lt.update(n,C),lt.bind(n,C)}}return C}function Rt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function zt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(e,t,n){let r=He.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),He.get(e.texture).__webglTexture=t,He.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=He.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){fe=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=He.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest,N.viewport(he),N.scissor(ge),N.setScissorTest(_e),pe=-1;return}if(o.__webglFramebuffer===void 0)Ue.setupRenderTarget(e);else if(o.__hasExternalTextures)Ue.rebindTextures(e,He.get(e.texture).__webglTexture,He.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&He.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ue.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=He.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ue.useMultisampledRTT(e)===!1?He.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest}else he.copy(Te).multiplyScalar(Se).floor(),ge.copy(Ee).multiplyScalar(Se).floor(),_e=De;if(n!==0&&(r=ie),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(he),N.scissor(ge),N.setScissorTest(_e),i){let r=He.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=He.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=He.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}pe=-1};function Bt(e){let t=He.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Be.textureFormatReadable(e.format),t.__typeReadable=Be.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){ft(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=He.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=Bt(o);if(u.__formatReadable===!1){ft(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){ft(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=fe===null?null:He.get(fe).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=He.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=Bt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=fe===null?null:He.get(fe).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await mt(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ue.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Ue.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ue.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(Ue.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=He.get(e),r=He.get(t),h=He.get(n.__renderTarget),g=He.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,He.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,He.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||He.has(e)){let n=He.get(e),r=He.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,oe),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){He.get(e).__webglFramebuffer===void 0&&Ue.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ue.setTextureCube(e,0):e.isData3DTexture?Ue.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ue.setTexture2DArray(e,0):Ue.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){ue=0,de=0,fe=null,N.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return it}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=en._getDrawingBufferColorSpace(e),t.unpackColorSpace=en._getUnpackColorSpace()}},Zl=[],Ql=new Map,$l={building:{label:`Building`,icon:`▦`},nature:{label:`Nature`,icon:`🌿`},decoration:{label:`Decoration`,icon:`🏮`},redstone:{label:`Redstone`,icon:`🔴`},nether:{label:`Nether`,icon:`🔥`},end:{label:`The End`,icon:`🌌`},ocean:{label:`Ocean`,icon:`🌊`},colors:{label:`Colours`,icon:`🎨`}};function eu(e){return e.split(`_`).map(e=>e.length<=3&&e===e.toUpperCase()?e:e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}var tu=1;function R(e,t={}){let n={id:tu++,name:e,display:t.display||eu(e),cat:t.cat||`building`,tex:t.tex||`stone:#8d8d8d`,shape:t.shape||`cube`,hard:t.hard??1,tool:t.tool||null,tier:t.tier??0,light:t.light??0,tint:t.tint||null,desc:t.desc||``,drops:t.drops===void 0?e:t.drops,sound:t.sound||`stone`,solid:t.solid??!0,flammable:t.flammable||!1,placeable:t.placeable!==!1};return(n.shape===`cross`||n.shape===`liquid`)&&(n.solid=!1),n.shape===`cross`&&(n.hard=t.hard??0),Zl.push(n),Ql.set(e,n),n}var z=(e,...t)=>`${e}:${t.join(`:`)}`,B=(e,t,n)=>({top:e,side:t,bottom:n}),nu=(e,t,n,r=null)=>({top:e,side:t,front:n,bottom:r});function ru(e,t,n,r,i,a,o={}){let s=z(`planks`,t,n),c=z(`log`,r,n),l=z(`log_top`,r,t);R(`${e}_planks`,{tex:s,cat:`building`,hard:2,tool:`axe`,flammable:!0,sound:`wood`,desc:`Sawn planks. Warm, workable and endlessly useful.`}),R(`${e}_log`,{tex:B(l,c,l),cat:`nature`,hard:2,tool:`axe`,flammable:!0,sound:`wood`,desc:`A full log with bark and growth rings.`}),R(`${e}_wood`,{tex:B(c,c,c),cat:`building`,hard:2,tool:`axe`,flammable:!0,sound:`wood`,desc:`Bark on every face — the log without its rings.`}),R(`${e}_stripped_log`,{tex:B(z(`planks`,n,t),z(`log`,n,t),z(`planks`,n,t)),cat:`building`,hard:2,tool:`axe`,flammable:!0,sound:`wood`,desc:`Bark stripped away to reveal smooth wood.`}),R(`${e}_stripped_wood`,{tex:z(`log`,n,t),cat:`building`,hard:2,tool:`axe`,flammable:!0,sound:`wood`,desc:`Stripped log, bark-free on every side.`}),o.fungus?(R(`${e}_fungus`,{tex:z(`mushroom`,i,a),cat:`nether`,shape:`cross`,hard:0,desc:`A strange fungus from the Nether.`}),R(`${e}_roots`,{tex:z(`roots`,i,a),cat:`nether`,shape:`cross`,hard:0,desc:`Twisting roots that thrive in the crimson and warped forests.`})):(R(`${e}_leaves`,{tex:z(`leaves`,i,a),cat:`nature`,shape:`leaves`,hard:.3,tool:`hoe`,tint:o.leafTint===!1?null:`foliage`,flammable:!0,sound:`grass`,drops:`${e}_sapling`,desc:`A canopy of leaves. Foliage colour shifts with the biome.`}),R(`${e}_sapling`,{tex:z(`sapling`,i,r),cat:`nature`,shape:`cross`,hard:0,desc:`A young tree waiting to grow.`}))}ru(`oak`,`#b08a52`,`#7b5c32`,`#6b5233`,`#4f8a2e`,`#3a6b22`),ru(`spruce`,`#7a5a37`,`#553c24`,`#4a3522`,`#2f5a37`,`#22432a`),ru(`birch`,`#d5c08a`,`#b19c6b`,`#e3ddcf`,`#7a9a48`,`#5c7a32`),ru(`jungle`,`#a8754c`,`#7a5232`,`#5a4426`,`#3f8a2a`,`#2c661d`),ru(`acacia`,`#b76a3c`,`#8a4d2a`,`#5f4028`,`#6a9a3a`,`#4e7429`),ru(`dark_oak`,`#5a3f24`,`#3d2a17`,`#3a2915`,`#356b2b`,`#24501e`),ru(`mangrove`,`#8a4f3d`,`#64372a`,`#5a3527`,`#4a7a2e`,`#345c20`),ru(`cherry`,`#d9a3a0`,`#b47c7a`,`#4d2f36`,`#e8a6c2`,`#c97fa1`),ru(`bamboo`,`#c9a85a`,`#a5863f`,`#8a8a3a`,`#5a8a3a`,`#3f6a28`),ru(`crimson`,`#6b3a4a`,`#4a2632`,`#5c2a38`,`#a03050`,`#7a2038`,{fungus:!0}),ru(`warped`,`#2f6b66`,`#204a47`,`#2a4f52`,`#3a8a7a`,`#28665a`,{fungus:!0});for(let[e,t,n,r,i,a={}]of[[`stone`,`stone:#8d8d8d`,1.5,`pickaxe`,`The ubiquitous grey building block.`],[`cobblestone`,`cobble:#8a8a8a:#626262`,2,`pickaxe`,`Rough, rustic and blast resistant.`],[`mossy_cobblestone`,`cobble:#7f8a6c:#55603f`,2,`pickaxe`,`Cobblestone with a coat of moss.`],[`smooth_stone`,`stone:#9d9d9d`,2,`pickaxe`,`Polished stone with a clean face.`],[`stone_bricks`,`brick:#8d8d8d:#6f6f6f`,1.5,`pickaxe`,`Tidy stone masonry.`],[`mossy_stone_bricks`,`brick:#7f8a6c:#5c6848`,1.5,`pickaxe`,`Old bricks sprouting moss.`],[`cracked_stone_bricks`,`brick:#858585:#5f5f5f`,1.5,`pickaxe`,`Weathered stone bricks with cracks.`],[`chiseled_stone_bricks`,`chisel:#8d8d8d:#6a6a6a`,1.5,`pickaxe`,`Ornately carved stone.`],[`granite`,`stone:#9a6a58`,1.5,`pickaxe`,`Speckled pink-orange rock.`],[`polished_granite`,`stone:#a5796a`,1.5,`pickaxe`,`Granite with a smooth finish.`],[`diorite`,`stone:#cfcfcf`,1.5,`pickaxe`,`Pale, speckled igneous rock.`],[`polished_diorite`,`stone:#dcdcdc`,1.5,`pickaxe`,`Diorite polished to a shine.`],[`andesite`,`stone:#888888`,1.5,`pickaxe`,`Durable grey volcanic rock.`],[`polished_andesite`,`stone:#999999`,1.5,`pickaxe`,`Andesite with a clean, smooth face.`],[`deepslate`,`deepslate:#4a4a50`,3,`pickaxe`,`Dark stone from the depths.`],[`cobbled_deepslate`,`cobble:#4a4a50:#303036`,3.5,`pickaxe`,`Rough deepslate rubble.`],[`polished_deepslate`,`stone:#55555c`,3.5,`pickaxe`,`Deepslate, smoothed for building.`],[`deepslate_bricks`,`brick:#4a4a50:#35353a`,3.5,`pickaxe`,`Bricks cut from deepslate.`],[`cracked_deepslate_bricks`,`brick:#46464c:#29292d`,3.5,`pickaxe`,`Cracked deepslate masonry.`],[`deepslate_tiles`,`brick:#424248:#2c2c31`,3.5,`pickaxe`,`Small, dark tiles.`],[`chiseled_deepslate`,`chisel:#4a4a50:#323237`,3.5,`pickaxe`,`Deepslate with a carved pattern.`],[`tuff`,`stone:#6d6f5f`,1.5,`pickaxe`,`Soft volcanic stone.`],[`polished_tuff`,`stone:#777a69`,1.5,`pickaxe`,`Tuff with a smooth finish.`],[`chiseled_tuff`,`chisel:#6d6f5f:#515342`,1.5,`pickaxe`,`Carved volcanic stone.`],[`tuff_bricks`,`brick:#6d6f5f:#4f5143`,1.5,`pickaxe`,`Bricks of compacted ash.`],[`calcite`,`stone:#d8d6cc`,1.5,`pickaxe`,`Bright, crystalline carbonate.`],[`dripstone_block`,`stone:#88685a`,1.5,`pickaxe`,`A block of ancient stone spikes.`],[`bedrock`,`stone:#2f2f33`,-1,null,`The unbreakable edge of the world.`],[`obsidian`,`obsidian:#1b1428`,12,`pickaxe`,`Volcanic glass. Extremely tough.`],[`crying_obsidian`,`obsidian:#2a1e40`,12,`pickaxe`,`Obsidian that weeps purple light.`,{light:1}]])R(e,{tex:t,hard:n,tool:r,desc:i,cat:(e.includes(`deepslate`),`building`),...a});for(let[e,t,n]of[[`coal_ore`,`#2e2e31`,3,0,96],[`iron_ore`,`#c8a184`,3,0,72],[`copper_ore`,`#c06a3c`,3,0,64],[`gold_ore`,`#f5cf45`,3,0,40],[`redstone_ore`,`#c62828`,3,0,24],[`lapis_ore`,`#2a56b8`,3,0,32],[`diamond_ore`,`#4fe3dc`,3,0,20],[`emerald_ore`,`#35d15a`,3,8,96]])R(e,{tex:z(`ore`,`#8d8d8d`,t),hard:n,tool:`pickaxe`,tier:1,cat:`nature`,desc:`A vein of ${e.replace(`_ore`,``).replace(`_`,` `)} in stone.`}),R(`deepslate_${e}`,{tex:z(`ore`,`#4a4a50`,t),hard:n+1.5,tool:`pickaxe`,tier:1,cat:`nature`,desc:`A deep vein of ${e.replace(`_ore`,``).replace(`_`,` `)}.`});R(`nether_gold_ore`,{tex:z(`ore`,`#6a3030`,`#f5cf45`),hard:3,tool:`pickaxe`,cat:`nether`,desc:`Gold embedded in netherrack.`}),R(`nether_quartz_ore`,{tex:z(`ore`,`#6a3030`,`#e8dfd4`),hard:3,tool:`pickaxe`,cat:`nether`,desc:`Pale quartz in crimson rock.`}),R(`ancient_debris`,{tex:z(`debris`,`#5a3a30`,`#8a5a3a`),hard:30,tool:`pickaxe`,tier:4,cat:`nether`,desc:`The rarest ore. Burns in lava, survives everything.`});for(let[e,t,n]of[[`coal_block`,`#202024`,`A compact block of coal.`],[`iron_block`,`#d8d8d8`,`A heavy block of iron.`],[`gold_block`,`#f5cf45`,`A soft, lustrous block of gold.`],[`redstone_block`,`#b71c1c`,`A block crackling with redstone energy.`],[`lapis_block`,`#2a56b8`,`Deep blue lapis lazuli.`],[`diamond_block`,`#4fe3dc`,`A dazzling block of diamond.`],[`emerald_block`,`#35d15a`,`A block of vivid green emerald.`],[`netherite_block`,`#3e353c`,`Indestructible netherite.`],[`quartz_block`,`#ece6dd`,`A clean block of nether quartz.`],[`raw_iron_block`,`#cbb59d`,`Raw iron, waiting to be smelted.`],[`raw_copper_block`,`#b9835b`,`Raw copper in a rough block.`],[`raw_gold_block`,`#e8c13f`,`Raw gold, gleaming dully.`]])R(e,{tex:z(`metal`,t),hard:5,tool:`pickaxe`,tier:2,cat:`building`,desc:n,sound:`metal`});for(let[e,t]of[[`copper`,`#c06a3c`],[`exposed_copper`,`#b07a5c`],[`weathered_copper`,`#7a9a78`],[`oxidized_copper`,`#4f9a84`]])R(`${e}_block`,{tex:z(`copper`,t),hard:3,tool:`pickaxe`,cat:`building`,desc:`Copper, slowly weathering with age.`}),R(`cut_${e}`,{tex:z(`metal`,t),hard:3,tool:`pickaxe`,cat:`building`,desc:`Cut copper with crisp edges.`});R(`amethyst_block`,{tex:z(`amethyst`,`#8a5ac8`,`#c9a6f0`),hard:1.5,tool:`pickaxe`,cat:`building`,desc:`A translucent purple crystal block.`}),R(`budding_amethyst`,{tex:z(`amethyst`,`#7a4ab8`,`#e0c8ff`),hard:1.5,tool:`pickaxe`,cat:`building`,desc:`A crystal cluster that grows amethyst buds.`,light:1});for(let[e,t,n,r,i]of[[`dirt`,`dirt:#8a5a3c`,.5,`shovel`,`Simple brown earth.`],[`coarse_dirt`,`dirt:#75503a`,.5,`shovel`,`Dry, gritty dirt.`],[`rooted_dirt`,`dirt:#8a5a3c`,.5,`shovel`,`Dirt threaded with pale roots.`],[`grass_block`,null,.6,`shovel`,`Earth crowned with living grass.`],[`podzol`,null,.6,`shovel`,`Acidic forest soil.`],[`mycelium`,null,.6,`shovel`,`A spreading purple fungal mat.`],[`farmland`,null,.6,`shovel`,`Tilled soil ready for crops.`],[`dirt_path`,null,.6,`shovel`,`A worn path through the grass.`],[`mud`,`mud:#4a3a33`,.6,`shovel`,`Thick, squelchy mud.`],[`packed_mud`,`stone:#8a6a4a`,1,`pickaxe`,`Mud compressed into sturdy blocks.`],[`mud_bricks`,`brick:#8a6a4a:#6a4e34`,1.5,`pickaxe`,`Bricks of dried mud.`],[`clay`,`stone:#9aa4b0`,.6,`shovel`,`A soft block of grey clay.`],[`gravel`,`gravel:#8a8580:#5f5b57`,.6,`shovel`,`Loose stones that slide and fall.`],[`sand`,`sand:#e0d3a0`,.5,`shovel`,`Warm, shifting sand.`],[`red_sand`,`sand:#b86b32`,.5,`shovel`,`Iron-rich desert sand.`],[`sandstone`,null,.8,`pickaxe`,`Compacted desert sand.`],[`chiseled_sandstone`,null,.8,`pickaxe`,`Carved sandstone.`],[`cut_sandstone`,null,.8,`pickaxe`,`Smooth, clean sandstone.`],[`smooth_sandstone`,null,.8,`pickaxe`,`Sandstone polished smooth.`],[`red_sandstone`,null,.8,`pickaxe`,`Compacted red sand.`],[`chiseled_red_sandstone`,null,.8,`pickaxe`,`Carved red sandstone.`],[`cut_red_sandstone`,null,.8,`pickaxe`,`Clean-cut red sandstone.`],[`smooth_red_sandstone`,null,.8,`pickaxe`,`Red sandstone polished smooth.`],[`snow_block`,`snow:#f2f7f8`,.4,`shovel`,`A crisp block of snow.`],[`powder_snow`,`snow:#eef5f7`,.4,`shovel`,`Soft snow that swallows you whole.`],[`ice`,`ice:#9ed6f0`,.5,`pickaxe`,`Slippery, translucent ice.`],[`packed_ice`,`ice:#8ec6ea`,.5,`pickaxe`,`Dense ice that never melts.`],[`blue_ice`,`ice:#6aa8e8`,.5,`pickaxe`,`Ancient, impossibly dense ice.`],[`moss_block`,`moss:#5a8a3a`,.6,`hoe`,`A bouncy carpet of living moss.`],[`moss_carpet`,`moss:#5a8a3a`,.2,`hoe`,`A thin layer of moss.`],[`sculk`,`sculk:#16363a`,1.5,`hoe`,`A dark, pulsing growth from the deep dark.`],[`sculk_catalyst`,`sculk:#173a3e`,1.5,`hoe`,`A sculk growth that spreads and feeds.`],[`sculk_sensor`,`sensor:#1b4044`,1.5,`hoe`,`It listens for footsteps.`],[`sculk_shrieker`,`shrieker:#14333a`,1.5,`hoe`,`Let out a scream and summon the Warden.`],[`bone_block`,`bone:#d8d2bd`,1.5,`pickaxe`,`A stack of polished bone.`],[`honey_block`,`honey:#e8a33a`,.5,`axe`,`Sticky honey that slows everything.`],[`slime_block`,`slime:#6aa84a`,.5,`axe`,`A bouncy green gel.`],[`honeycomb_block`,`honey:#d8942a`,.5,`axe`,`Waxy honeycomb packed tight.`],[`sponge`,`sponge:#c9c45a`,.6,`hoe`,`A porous sponge that soaks up water.`],[`wet_sponge`,`sponge:#9a9a52`,.6,`hoe`,`A sponge heavy with water.`],[`soul_sand`,`soulsand:#5a4433`,.5,`shovel`,`Sand that traps and slows the living.`],[`soul_soil`,`soulsand:#4a3a2e`,.5,`shovel`,`Dark soil of the soul sand valley.`]]){let a=t;e===`grass_block`&&(a=B(z(`grass_top`,`#6d9e46`),z(`grass_side`,`#6d9e46:#8a5a3c`),z(`dirt`,`#8a5a3c`))),e===`podzol`&&(a=B(z(`grass_top`,`#6a4a2a`),z(`grass_side`,`#6a4a2a:#8a5a3c`),z(`dirt`,`#8a5a3c`))),e===`mycelium`&&(a=B(z(`grass_top`,`#8a7a8a`),z(`grass_side`,`#8a7a8a:#8a5a3c`),z(`dirt`,`#8a5a3c`))),e===`farmland`&&(a=B(z(`dirt`,`#6a442e`),z(`farmland`,`#6a442e`),z(`dirt`,`#8a5a3c`))),e===`dirt_path`&&(a=B(z(`dirt`,`#9a7a4a`),z(`dirt`,`#9a7a4a`),z(`dirt`,`#8a5a3c`))),e===`sandstone`&&(a=B(z(`sandstone`,`#e0d3a0`),z(`sandstone_side`,`#e0d3a0`),z(`sandstone`,`#d8c890`))),e.startsWith(`chiseled_sandstone`)&&(a=B(z(`sandstone`,`#e8dbaa`),z(`chisel`,`#e0d3a0:#c9b982`),z(`sandstone`,`#d8c890`))),(e===`cut_sandstone`||e===`smooth_sandstone`)&&(a=B(z(`sandstone`,`#e8dbaa`),z(`stone`,`#e0d3a0`),z(`sandstone`,`#d8c890`))),e===`red_sandstone`&&(a=B(z(`sandstone`,`#b86b32`),z(`sandstone_side`,`#b86b32`),z(`sandstone`,`#a05a2a`))),e.startsWith(`chiseled_red_sandstone`)&&(a=B(z(`sandstone`,`#c47a3c`),z(`chisel`,`#b86b32:#96522a`),z(`sandstone`,`#a05a2a`))),(e===`cut_red_sandstone`||e===`smooth_red_sandstone`)&&(a=B(z(`sandstone`,`#c47a3c`),z(`stone`,`#b86b32`),z(`sandstone`,`#a05a2a`))),e===`moss_carpet`&&(a=z(`carpet`,`#5a8a3a`)),R(e,{tex:a,hard:n,tool:r,cat:`nature`,desc:i,sound:e.includes(`grass`)||e.includes(`moss`)?`grass`:e.includes(`sand`)||e.includes(`gravel`)?`gravel`:`stone`,tint:e===`grass_block`?`grass`:null,drops:e===`grass_block`||e===`farmland`||e===`dirt_path`?`dirt`:e})}for(let[e,t,n,r,i,a={}]of[[`netherrack`,`netherrack:#6a3030`,.4,`pickaxe`,`Crumbling crimson rock.`],[`nether_bricks`,`brick:#3a1f24:#261316`,2,`pickaxe`,`Bricks of netherrack.`],[`cracked_nether_bricks`,`brick:#372025:#221113`,2,`pickaxe`,`Cracked nether brick.`],[`chiseled_nether_bricks`,`chisel:#3a1f24:#241316`,2,`pickaxe`,`Ornate nether brick.`],[`red_nether_bricks`,`brick:#4a1f1f:#2e1212`,2,`pickaxe`,`Bricks dyed a deep blood red.`],[`basalt`,`basalt:#4a4a50:#303036`,1.5,`pickaxe`,`Columnar volcanic rock.`],[`polished_basalt`,`basalt:#55555c:#38383e`,1.5,`pickaxe`,`Basalt with a smooth face.`],[`smooth_basalt`,`stone:#48484e`,1.5,`pickaxe`,`Basalt polished completely smooth.`],[`blackstone`,`blackstone:#2e2a2e:#1c191c`,1.5,`pickaxe`,`Dark, hard volcanic stone.`],[`polished_blackstone`,`stone:#353136`,1.5,`pickaxe`,`Blackstone with a matte polish.`],[`polished_blackstone_bricks`,`brick:#353136:#201d21`,1.5,`pickaxe`,`Neat bricks of blackstone.`],[`chiseled_polished_blackstone`,`chisel:#353136:#201d21`,1.5,`pickaxe`,`Carved blackstone.`],[`gilded_blackstone`,`gilded:#2e2a2e:#e8b83a`,1.5,`pickaxe`,`Blackstone veined with gold.`],[`crimson_nylium`,`grass_top:#8a2f3a`,.6,`pickaxe`,`Crimson fungal turf.`],[`warped_nylium`,`grass_top:#2f7a6a`,.6,`pickaxe`,`Teal fungal turf.`],[`nether_wart_block`,`wart:#7a1f2a`,1,`hoe`,`A fleshy red growth.`],[`warped_wart_block`,`wart:#2a6a7a`,1,`hoe`,`A fleshy teal growth.`],[`shroomlight`,`glow:#e8a03a`,1,`hoe`,`A warm, glowing fungal bulb.`,{light:15}],[`glowstone`,`glow:#e8c85a`,.3,`pickaxe`,`Glowing crystals that light the Nether.`,{light:15}],[`magma_block`,`magma:#8a3a1a:#e8a03a`,.5,`pickaxe`,`Molten rock that burns underfoot.`,{light:3}],[`soul_fire_lantern`,`lantern:#3a7a8a`,.5,`pickaxe`,`A lantern lit by soul fire.`,{light:10}]])R(e,{tex:t,hard:n,tool:r,cat:`nether`,desc:i,...a});R(`end_stone`,{tex:z(`endstone`,`#d6d6a8`),hard:3,tool:`pickaxe`,cat:`end`,desc:`Pale yellow stone from the End.`}),R(`end_stone_bricks`,{tex:z(`brick`,`#d6d6a8:#b0b088`),hard:3,tool:`pickaxe`,cat:`end`,desc:`End stone cut into bricks.`}),R(`purpur_block`,{tex:z(`purpur`,`#a86aa8`),hard:1.5,tool:`pickaxe`,cat:`end`,desc:`A strange violet block.`}),R(`purpur_pillar`,{tex:B(z(`purpur`,`#b47ab4`),z(`purpur_side`,`#a86aa8`),z(`purpur`,`#b47ab4`)),hard:1.5,tool:`pickaxe`,cat:`end`,desc:`A tall pillar of purpur.`}),R(`dragon_egg`,{tex:z(`egg`,`#2a2a33:#8a5ac8`),hard:3,tool:`pickaxe`,cat:`end`,desc:`A trophy from the Ender Dragon.`,light:2}),R(`chorus_flower`,{tex:z(`purpur`,`#a86aa8`),hard:.4,cat:`end`,desc:`A blooming chorus flower.`}),R(`chorus_plant`,{tex:z(`purpur`,`#8a4a8a`),hard:.4,cat:`end`,desc:`A twisting chorus stem.`}),R(`end_rod`,{tex:z(`rod`,`#e8e0d0`),shape:`cross`,hard:0,cat:`end`,light:14,desc:`A floating rod of end light.`});for(let[e,t,n,r,i,a={}]of[[`prismarine`,`bricks:#5a9a8a:#3a6a60`,1.5,`pickaxe`,`Green-blue ocean stone.`],[`prismarine_bricks`,`brick:#5a9a8a:#3a6a60`,1.5,`pickaxe`,`Neatly cut prismarine.`],[`dark_prismarine`,`stone:#3a5a4a`,1.5,`pickaxe`,`Dark, polished ocean stone.`],[`sea_lantern`,`sealantern:#b8e8d8`,.3,`pickaxe`,`A glowing block of the sea.`,{light:15}],[`tube_coral_block`,`coral:#2a6ab8`,1.5,`pickaxe`,`A living blue coral colony.`],[`brain_coral_block`,`coral:#c86a8a`,1.5,`pickaxe`,`A living pink coral colony.`],[`bubble_coral_block`,`coral:#a84ab8`,1.5,`pickaxe`,`A living purple coral colony.`],[`fire_coral_block`,`coral:#b83a3a`,1.5,`pickaxe`,`A living red coral colony.`],[`horn_coral_block`,`coral:#d8b83a`,1.5,`pickaxe`,`A living yellow coral colony.`],[`dead_tube_coral_block`,`coral:#8a8a7a`,1.5,`pickaxe`,`Bleached dead coral.`],[`dead_brain_coral_block`,`coral:#8a8a7a`,1.5,`pickaxe`,`Bleached dead coral.`],[`dead_bubble_coral_block`,`coral:#8a8a7a`,1.5,`pickaxe`,`Bleached dead coral.`],[`dead_fire_coral_block`,`coral:#8a8a7a`,1.5,`pickaxe`,`Bleached dead coral.`],[`dead_horn_coral_block`,`coral:#8a8a7a`,1.5,`pickaxe`,`Bleached dead coral.`]])R(e,{tex:t,hard:n,tool:r,cat:`ocean`,desc:i,...a});R(`turtle_egg`,{tex:z(`egg`,`#e8e0c8:#8a8a6a`),hard:.5,shape:`cross`,cat:`ocean`,desc:`A clutch of turtle eggs.`});for(let[e,t,n]of[[`white`,`#e9ecec`,`#d8dcdc`],[`orange`,`#f07613`,`#d86408`],[`magenta`,`#bd44b3`,`#a03098`],[`light_blue`,`#3aafd9`,`#2898c0`],[`yellow`,`#f8c627`,`#e0ae10`],[`lime`,`#70b919`,`#5a9e0a`],[`pink`,`#ed8dac`,`#d87494`],[`gray`,`#3e4447`,`#2e3336`],[`light_gray`,`#8e8e86`,`#77776f`],[`cyan`,`#158991`,`#0a727a`],[`purple`,`#792aac`,`#621c94`],[`blue`,`#35399d`,`#252a86`],[`brown`,`#724728`,`#5c371c`],[`green`,`#546d1b`,`#435a10`],[`red`,`#a12722`,`#861a16`],[`black`,`#141519`,`#0a0b0e`]]){let r=eu(e);R(`${e}_wool`,{tex:z(`wool`,t,n),hard:.8,tool:`shears`,cat:`colors`,flammable:!0,desc:`${r} wool, soft and warm.`}),R(`${e}_concrete`,{tex:z(`concrete`,t,n),hard:1.8,tool:`pickaxe`,cat:`colors`,desc:`Smooth ${r.toLowerCase()} concrete.`}),R(`${e}_concrete_powder`,{tex:z(`powder`,t,n),hard:.5,tool:`shovel`,cat:`colors`,desc:`${r} concrete powder. It hardens when wet.`}),R(`${e}_terracotta`,{tex:z(`terracotta`,t,n),hard:1.25,tool:`pickaxe`,cat:`colors`,desc:`Fired ${r.toLowerCase()} clay.`}),R(`${e}_glazed_terracotta`,{tex:z(`glazed`,t,n),hard:1.4,tool:`pickaxe`,cat:`colors`,desc:`A patterned ${r.toLowerCase()} glaze.`}),R(`${e}_stained_glass`,{tex:z(`glass`,t),shape:`glass`,hard:.3,cat:`colors`,desc:`Translucent ${r.toLowerCase()} glass.`}),R(`${e}_shulker_box`,{tex:B(z(`shulker`,t),z(`shulker_side`,t,n),z(`shulker`,n)),hard:2,tool:`pickaxe`,cat:`decoration`,desc:`A ${r.toLowerCase()} shulker box.`})}R(`terracotta`,{tex:z(`terracotta`,`#a05a3a`,`#8a4a2e`),hard:1.25,tool:`pickaxe`,cat:`colors`,desc:`Fired clay, warm and earthen.`}),R(`glass`,{tex:z(`glass`,`#bfe8f0`),shape:`glass`,hard:.3,cat:`building`,desc:`Clear, fragile glass.`}),R(`tinted_glass`,{tex:z(`glass`,`#3a3a44`),shape:`glass`,hard:.3,cat:`building`,desc:`Smoked glass that blocks light.`});var iu=[[`crafting_table`,B(z(`planks`,`#b08a52`,`#7b5c32`),z(`crafting`,`#b08a52`,`#7b5c32`),z(`planks`,`#b08a52`,`#7b5c32`)),2.5,`axe`,`A workbench for crafting recipes.`],[`furnace`,nu(z(`stone`,`#8d8d8d`),z(`stone`,`#8d8d8d`),z(`furnace`,`#8d8d8d:#3a3a3a`),z(`stone`,`#8d8d8d`)),3.5,`pickaxe`,`Smelts ore and cooks food.`],[`blast_furnace`,nu(z(`stone`,`#8d8d8d`),z(`stone`,`#8d8d8d`),z(`furnace`,`#8d8d8d:#2a2a2a`),z(`stone`,`#8d8d8d`)),3.5,`pickaxe`,`A faster furnace for ore and metal.`],[`smoker`,nu(z(`stone`,`#8d8d8d`),z(`stone`,`#8d8d8d`),z(`furnace`,`#8d8d8d:#5a3a2a`),z(`stone`,`#8d8d8d`)),3.5,`pickaxe`,`Cooks food twice as fast.`],[`chest`,B(z(`planks`,`#b08a52`,`#7b5c32`),z(`chest`,`#b08a52`,`#5a3a1a`),z(`planks`,`#b08a52`,`#7b5c32`)),2.5,`axe`,`Stores your treasures.`],[`trapped_chest`,B(z(`planks`,`#b08a52`,`#7b5c32`),z(`chest`,`#b08a52`,`#5a3a1a`),z(`planks`,`#b08a52`,`#7b5c32`)),2.5,`axe`,`A chest with a hidden tripwire.`],[`barrel`,B(z(`planks`,`#8a6a3a`,`#6a4a24`),z(`barrel`,`#8a6a3a`,`#5a3a1a`),z(`planks`,`#8a6a3a`,`#6a4a24`)),2.5,`axe`,`A wooden storage barrel.`],[`bookshelf`,B(z(`planks`,`#b08a52`,`#7b5c32`),z(`bookshelf`,`#b08a52`,`#7b5c32`),z(`planks`,`#b08a52`,`#7b5c32`)),1.5,`axe`,`Holds books for enchanting.`],[`chiseled_bookshelf`,B(z(`planks`,`#b08a52`,`#7b5c32`),z(`bookshelf`,`#b08a52`,`#7b5c32`),z(`planks`,`#b08a52`,`#7b5c32`)),1.5,`axe`,`A carved bookshelf.`],[`lectern`,B(z(`planks`,`#b08a52`,`#7b5c32`),z(`bookshelf`,`#b08a52`,`#7b5c32`),z(`planks`,`#b08a52`,`#7b5c32`)),2,`axe`,`A reading stand for books.`],[`cartography_table`,B(z(`planks`,`#b08a52`,`#7b5c32`),z(`crafting`,`#b08a52`,`#7b5c32`),z(`planks`,`#b08a52`,`#7b5c32`)),2.5,`axe`,`Used to copy and zoom maps.`],[`fletching_table`,B(z(`planks`,`#b08a52`,`#7b5c32`),z(`crafting`,`#b08a52`,`#7b5c32`),z(`planks`,`#b08a52`,`#7b5c32`)),2.5,`axe`,`A table for making arrows.`],[`smithing_table`,B(z(`metal`,`#4a4a50`),z(`smithing`,`#4a4a50:#8a6a3a`),z(`planks`,`#8a6a3a`,`#5a3a1a`)),2.5,`axe`,`Upgrade gear with netherite.`],[`loom`,B(z(`planks`,`#b08a52`,`#7b5c32`),z(`loom`,`#b08a52`,`#7b5c32`),z(`planks`,`#b08a52`,`#7b5c32`)),2.5,`axe`,`Weave banners and patterns.`],[`stonecutter`,B(z(`stone`,`#8d8d8d`),z(`stonecutter`,`#8d8d8d`),z(`stone`,`#8d8d8d`)),3.5,`pickaxe`,`Cuts stone into precise shapes.`],[`grindstone`,B(z(`stone`,`#8d8d8d`),z(`stonecutter`,`#8d8d8d`),z(`planks`,`#5a3a1a`,`#3a2410`)),2,`pickaxe`,`Repairs tools and removes enchantments.`],[`anvil`,B(z(`metal`,`#3a3a40`),z(`anvil`,`#3a3a40`),z(`metal`,`#3a3a40`)),5,`pickaxe`,`Repairs and combines gear.`],[`chipped_anvil`,B(z(`metal`,`#3a3a40`),z(`anvil`,`#3a3a40`),z(`metal`,`#3a3a40`)),5,`pickaxe`,`A damaged anvil.`],[`damaged_anvil`,B(z(`metal`,`#3a3a40`),z(`anvil`,`#3a3a40`),z(`metal`,`#3a3a40`)),5,`pickaxe`,`An anvil on its last legs.`],[`enchanting_table`,B(z(`enchant`,`#2a1a3a:#c88aff`),z(`enchant`,`#2a1a3a:#c88aff`),z(`obsidian`,`#1b1428`)),5,`pickaxe`,`Infuse gear with arcane power.`,7],[`beacon`,B(z(`glass`,`#c8f0e8`),z(`beacon`,`#3a8a8a:#c8f0e8`),z(`obsidian`,`#1b1428`)),3,`pickaxe`,`Projects a beam of light. Place on a pyramid.`,15],[`respawn_anchor`,B(z(`obsidian`,`#2a1e40`),z(`anchor`,`#2a1e40:#c86aff`),z(`obsidian`,`#2a1e40`)),50,`pickaxe`,`Sets your respawn point in the Nether.`,10],[`lodestone`,B(z(`stone`,`#8d8d8d`),z(`lodestone`,`#8d8d8d:#6a5a7a`),z(`stone`,`#8d8d8d`)),3.5,`pickaxe`,`A magnet for compasses.`],[`jukebox`,B(z(`planks`,`#5a3a1a`,`#3a2410`),z(`jukebox`,`#5a3a1a:#8a6a3a`),z(`planks`,`#5a3a1a`,`#3a2410`)),2,`axe`,`Plays music discs.`],[`note_block`,B(z(`planks`,`#5a3a1a`,`#3a2410`),z(`note`,`#5a3a1a:#8a6a3a`),z(`planks`,`#5a3a1a`,`#3a2410`)),.8,`axe`,`Plays a note when powered.`],[`target`,B(z(`target`,`#e8d8c8`),z(`target_side`,`#e8d8c8:#c84a3a`),z(`target`,`#e8d8c8`)),.5,`hoe`,`A red-and-white target block.`],[`tnt`,B(z(`tnt_top`,`#c83a2a`),z(`tnt_side`,`#c83a2a:#e8e0d0`),z(`tnt_top`,`#c83a2a`)),0,null,`Primed by fire or redstone. Stand back.`],[`redstone_lamp`,{top:z(`glow`,`#8a4a2a`),side:z(`lamp`,`#6a3a2a`),bottom:z(`glow`,`#8a4a2a`)},.3,`pickaxe`,`Lights up when powered.`],[`observer`,B(z(`stone`,`#6a6a70`),z(`observer`,`#6a6a70:#3a3a40`),z(`stone`,`#6a6a70`)),3,`pickaxe`,`Watches the block in front of it.`],[`piston`,B(z(`planks`,`#8a6a3a`,`#5a3a1a`),z(`piston`,`#8a6a3a:#9a9a9a`),z(`stone`,`#8d8d8d`)),1.5,`pickaxe`,`Pushes blocks when powered.`],[`sticky_piston`,B(z(`planks`,`#8a6a3a`,`#5a3a1a`),z(`piston`,`#8a6a3a:#6a9a4a`),z(`stone`,`#8d8d8d`)),1.5,`pickaxe`,`Pushes and pulls blocks.`],[`dropper`,B(z(`stone`,`#6a6a70`),z(`observer`,`#6a6a70:#3a3a40`),z(`stone`,`#6a6a70`)),3.5,`pickaxe`,`Drops items when powered.`],[`dispenser`,B(z(`stone`,`#6a6a70`),z(`observer`,`#6a6a70:#3a3a40`),z(`stone`,`#6a6a70`)),3.5,`pickaxe`,`Fires items and arrows.`],[`hopper`,B(z(`metal`,`#3a3a40`),z(`hopper`,`#3a3a40`),z(`metal`,`#3a3a40`)),3,`pickaxe`,`Moves items into containers.`],[`cauldron`,B(z(`metal`,`#3a3a40`),z(`cauldron`,`#3a3a40`),z(`metal`,`#3a3a40`)),2,`pickaxe`,`Holds water, lava or powder snow.`],[`composter`,B(z(`planks`,`#8a6a3a`,`#5a3a1a`),z(`barrel`,`#8a6a3a:#5a3a1a`),z(`planks`,`#8a6a3a`,`#5a3a1a`)),.6,`axe`,`Turns plants into bone meal.`],[`bell`,B(z(`metal`,`#c8a83a`),z(`bell`,`#c8a83a:#8a6a1a`),z(`metal`,`#c8a83a`)),5,`pickaxe`,`Rings out across the village.`],[`campfire`,B(z(`planks`,`#5a3a1a`),z(`campfire`,`#5a3a1a:#e8a03a`),z(`planks`,`#5a3a1a`)),2,`axe`,`A crackling campfire.`,12],[`soul_campfire`,B(z(`planks`,`#3a2a1a`),z(`campfire`,`#3a2a1a:#3ac8e8`),z(`planks`,`#3a2a1a`)),2,`axe`,`A campfire burning soul fire.`,10],[`lantern`,{top:z(`metal`,`#3a3a40`),side:z(`lantern`,`#e8c85a`),bottom:z(`metal`,`#3a3a40`)},.5,`pickaxe`,`A warm hanging light.`,14],[`chain`,{top:z(`metal`,`#3a3a40`),side:z(`chain`,`#3a3a40`),bottom:z(`metal`,`#3a3a40`)},.5,`pickaxe`,`A hanging metal chain.`]];for(let[e,t,n,r,i,a=0]of iu)R(e,{tex:t,hard:n,tool:r,desc:i,cat:e.includes(`piston`)||e.includes(`observer`)||e.includes(`dispenser`)||e.includes(`dropper`)||e.includes(`hopper`)||e.includes(`lamp`)||e===`tnt`?`redstone`:`decoration`,light:a});var au=[[`pumpkin`,B(z(`pumpkin_top`,`#d88a2a`),z(`pumpkin_side`,`#d88a2a`),z(`pumpkin_top`,`#d88a2a`)),.4,`axe`,`A plump orange pumpkin.`],[`carved_pumpkin`,nu(z(`pumpkin_top`,`#d88a2a`),z(`pumpkin_side`,`#d88a2a`),z(`pumpkin_face`,`#d88a2a:#2a1a0a`),z(`pumpkin_top`,`#d88a2a`)),.4,`axe`,`A pumpkin with a carved face.`],[`jack_o_lantern`,nu(z(`pumpkin_top`,`#d88a2a`),z(`pumpkin_side`,`#d88a2a`),z(`pumpkin_face`,`#d88a2a:#e8b83a`),z(`pumpkin_top`,`#d88a2a`)),.4,`axe`,`A glowing jack o'lantern.`,15],[`melon`,B(z(`melon_top`,`#5a9a3a`),z(`melon_side`,`#5a9a3a:#3a6a2a`),z(`melon_top`,`#5a9a3a`)),.5,`axe`,`A juicy green melon.`],[`hay_block`,B(z(`hay_top`,`#c8a83a`),z(`hay_side`,`#c8a83a:#a5861a`),z(`hay_top`,`#c8a83a`)),.5,`hoe`,`A bale of golden hay.`],[`dried_kelp_block`,B(z(`kelp_top`,`#3a6a3a`),z(`kelp_side`,`#3a6a3a:#2a4a2a`),z(`kelp_top`,`#3a6a3a`)),.5,`hoe`,`Compressed dried kelp.`],[`cactus`,B(z(`cactus_top`,`#3a7a2a`),z(`cactus_side`,`#3a7a2a:#2a5a1a`),z(`cactus_top`,`#3a7a2a`)),.4,`axe`,`A prickly desert cactus.`],[`sugar_cane`,{top:z(`sugarcane`,`#8ac85a`),side:z(`sugarcane`,`#8ac85a`),bottom:z(`sugarcane`,`#6a9a3a`)},.2,`hoe`,`Tall sweet cane.`],[`bamboo`,{top:z(`bamboo_top`,`#8ac85a`),side:z(`bamboo`,`#8ac85a:#5a8a3a`),bottom:z(`bamboo_top`,`#8ac85a`)},.3,`axe`,`Fast-growing bamboo.`],[`wheat`,`crop:#d8c85a:#8a9a3a`,0,null,`Golden wheat ready to harvest.`,0,`cross`],[`carrots`,`crop:#f08a2a:#3a8a3a`,0,null,`Orange carrots poking from the soil.`,0,`cross`],[`potatoes`,`crop:#a8a85a:#3a8a3a`,0,null,`Leafy potato plants.`,0,`cross`],[`beetroots`,`crop:#b83a3a:#3a8a3a`,0,null,`Deep red beetroots.`,0,`cross`],[`nether_wart`,`crop:#8a1f2a:#5a1a1a`,0,null,`Crimson nether wart.`,0,`cross`],[`cocoa`,`crop:#a86a2a:#5a3a1a`,0,null,`A cocoa pod full of beans.`,0,`cross`]];for(let[e,t,n,r,i,a=0,o=`cube`]of au)R(e,{tex:t,hard:n,tool:r,desc:i,light:a,shape:o,cat:`nature`,sound:`grass`});for(let[e,t,n,r=0]of[[`short_grass`,`grassplant:#6a9a3a:#4a7a2a`,`A tuft of wild grass.`],[`fern`,`grassplant:#5a8a4a:#3a6a2a`,`A feathery forest fern.`],[`dead_bush`,`bush:#8a6a3a:#6a4a2a`,`A dry, brittle bush.`],[`dandelion`,`flower:#f8d83a:#4a8a2a`,`A cheerful yellow flower.`],[`poppy`,`flower:#d83a2a:#4a8a2a`,`A bright red poppy.`],[`blue_orchid`,`flower:#3ac8e8:#4a8a2a`,`A vivid blue orchid.`],[`allium`,`flower:#b85ac8:#4a8a2a`,`A round purple allium.`],[`azure_bluet`,`flower:#e8e8d8:#4a8a2a`,`A tiny white azure bluet.`],[`red_tulip`,`flower:#d83a3a:#4a8a2a`,`A red tulip.`],[`orange_tulip`,`flower:#e88a2a:#4a8a2a`,`An orange tulip.`],[`white_tulip`,`flower:#e8e8e0:#4a8a2a`,`A white tulip.`],[`pink_tulip`,`flower:#e88ab8:#4a8a2a`,`A pink tulip.`],[`oxeye_daisy`,`flower:#f0f0e0:#4a8a2a`,`A white daisy with a golden centre.`],[`cornflower`,`flower:#3a5ac8:#4a8a2a`,`A deep blue cornflower.`],[`lily_of_the_valley`,`flower:#f0f0e8:#4a8a2a`,`Delicate white bell flowers.`],[`wither_rose`,`flower:#2a2a2a:#3a3a2a`,`A rose that withers all it touches.`],[`sunflower`,`flower:#f8d83a:#4a8a2a`,`A tall sunflower facing the sun.`],[`lilac`,`flower:#b88ac8:#4a8a2a`,`A fragrant lilac bloom.`],[`rose_bush`,`flower:#c82a3a:#4a8a2a`,`A bush covered in roses.`],[`peony`,`flower:#e89ab8:#4a8a2a`,`A big pink peony.`],[`torchflower`,`flower:#f0a03a:#4a8a2a`,`A flower that glows like a torch.`,12],[`pitcher_plant`,`flower:#5a8ac8:#4a8a2a`,`A strange blue pitcher plant.`],[`brown_mushroom`,`mushroom:#8a6a4a:#5a3a2a`,`A humble brown mushroom.`],[`red_mushroom`,`mushroom:#d83a2a:#e8e0d0`,`A spotted red mushroom.`],[`azalea`,`flower:#b86a9a:#4a8a2a`,`A flowering azalea bush.`],[`flowering_azalea`,`flower:#e87aa8:#4a8a2a`,`An azalea covered in pink blooms.`],[`seagrass`,`grassplant:#3a8a5a:#2a6a4a`,`Waving seagrass.`],[`kelp`,`kelp:#3a7a4a:#2a5a3a`,`A tall strand of kelp.`],[`lily_pad`,`lily:#3a8a3a:#2a6a2a`,`A flat green lily pad.`],[`vine`,`vine:#3a7a2a:#2a5a1a`,`Creeping jungle vines.`],[`glow_lichen`,`lichen:#8ac8b8`,`A faintly glowing lichen.`],[`sculk_vein`,`vein:#1b4a4a:#2a7a6a`,`Spreading sculk veins.`],[`cave_vines`,`vine:#8ab83a:#5a8a2a`,`Vines that dangle in caves.`],[`hanging_roots`,`roots:#8a6a4a:#5a3a2a`,`Roots hanging from cave ceilings.`],[`mangrove_roots`,`roots:#5a3a2a:#3a241a`,`Tangled mangrove roots.`],[`nether_sprouts`,`grassplant:#3a8a6a:#2a5a4a`,`Small teal sprouts.`],[`big_dripleaf`,`flower:#5a9a3a:#3a7a2a`,`A broad, springy leaf.`],[`small_dripleaf`,`flower:#5a9a3a:#3a7a2a`,`A small dripleaf.`],[`spore_blossom`,`flower:#e87ab8:#5a3a4a`,`A blossom that releases spores.`,6],[`torch`,`torch:#e8b83a`,`A simple torch that lights the dark.`,14],[`soul_torch`,`torch:#3ac8e8`,`A torch burning soul fire.`,10],[`redstone_torch`,`torch:#e83a2a`,`A torch that emits redstone power.`,7],[`end_rod_plant`,`rod:#e8e0d0`,`A slender rod of end light.`,14]]){let i=`cross`;e===`lily_pad`&&(i=`cross`),R(e,{tex:z(t.split(`:`)[0],...t.split(`:`).slice(1)),shape:i,hard:0,cat:`nature`,desc:n,light:r,sound:`grass`})}R(`cobweb`,{tex:z(`web`,`#e8e8e8`),shape:`cross`,hard:4,cat:`decoration`,desc:`A sticky web that slows you down.`});for(let[e,t]of[[`tube`,`#2a6ab8`],[`brain`,`#c86a8a`],[`bubble`,`#a84ab8`],[`fire`,`#b83a3a`],[`horn`,`#d8b83a`]])R(`${e}_coral`,{tex:z(`coral_fan`,t),shape:`cross`,hard:0,cat:`ocean`,desc:`A living ${e} coral fan.`}),R(`dead_${e}_coral`,{tex:z(`coral_fan`,`#8a8a7a`),shape:`cross`,hard:0,cat:`ocean`,desc:`A bleached ${e} coral fan.`});R(`sea_pickle`,{tex:z(`seapickle`,`#5a9a5a:#8ac86a`),hard:.5,cat:`ocean`,desc:`A pickle that glows in the dark.`,light:6}),R(`water`,{tex:z(`water`,`#2a6ac8`),shape:`liquid`,hard:-1,cat:`nature`,drops:null,placeable:!1,desc:`Cool, clear water.`}),R(`lava`,{tex:z(`lava`,`#e86a1a:#f8c83a`),shape:`liquid`,hard:-1,cat:`nether`,drops:null,placeable:!1,light:12,desc:`Molten rock. Do not swim.`}),Ql.get(`water`).id,Ql.get(`lava`).id,Ql.get(`grass_block`).id,Ql.get(`bedrock`).id;var ou=Array(Zl.length+1).fill(null);for(let e of Zl)ou[e.id]=e;var su=Zl.filter(e=>e.placeable).length;Zl.filter(e=>e.name.endsWith(`_ore`)&&!e.name.startsWith(`deepslate_`)&&!e.name.startsWith(`nether_`));var cu=[],lu=0;function V(e,t){let n={n:++lu,id:e,name:t.name||e.split(`_`).map(e=>e[0].toUpperCase()+e.slice(1)).join(` `),category:t.category||`passive`,hostile:t.category===`hostile`||t.category===`boss`,boss:t.category===`boss`,archetype:t.archetype||`quadruped`,hp:t.hp??10,damage:t.damage??0,speed:t.speed??1.4,scale:t.scale??1,width:t.width??.9,height:t.height??1.5,colors:Object.assign({body:`#a06a3a`,head:`#a06a3a`,limb:`#7a4a28`,accent:`#d8c8a8`,eye:`#1a1a1a`},t.colors),flags:Object.assign({horns:!1,wings:!1,tail:!1,ears:!1,nose:!1,hat:!1,shell:!1,spikes:!1,rods:!1,tentacles:!1,crown:!1,saddle:!1,robe:!1,snout:!1,fins:!1,mane:!1,armor:!1},t.flags),egg:t.egg||[`#c8b89a`,`#8a6a4a`],desc:t.desc||``,biomes:t.biomes||[`plains`],time:t.time||`any`,group:t.group||2,drops:t.drops||[],ranged:t.ranged||!1,flying:t.flying||!1,aquatic:t.aquatic||!1,tameable:t.tameable||!1,light:t.light||0,sound:t.sound||`mob`};return cu.push(n),n}V(`allay`,{name:`Allay`,category:`passive`,archetype:`allay`,hp:20,speed:1.8,flying:!0,width:.6,height:.9,colors:{body:`#3a9ad8`,head:`#5ac8f0`,limb:`#2a6aa8`,accent:`#c8f0ff`,eye:`#1a2a3a`},flags:{wings:!0},egg:[`#5ac8f0`,`#2a6aa8`],time:`any`,biomes:[`dark`,`forest`],desc:`A tiny blue helper that fetches items for those it trusts.`,drops:[]}),V(`armadillo`,{name:`Armadillo`,category:`passive`,archetype:`armadillo`,hp:12,speed:.9,width:.9,height:.8,colors:{body:`#8a6a4a`,head:`#9a7a5a`,limb:`#6a4a32`,accent:`#b89a72`,eye:`#201810`},flags:{shell:!0,ears:!0},egg:[`#a88a62`,`#6a4a32`],biomes:[`savanna`,`badlands`],desc:`A cautious armadillo that curls into an armoured ball when scared.`,drops:[`armadillo_scute`]}),V(`axolotl`,{name:`Axolotl`,category:`passive`,archetype:`axolotl`,hp:14,speed:1.2,width:.7,height:.55,aquatic:!0,colors:{body:`#e8a8c8`,head:`#f0b8d8`,limb:`#d888a8`,accent:`#c86a8a`,eye:`#201018`},flags:{fins:!0,tail:!0,ears:!0},egg:[`#f0b8d8`,`#c86a8a`],biomes:[`caves`],desc:`A grinning amphibian that plays dead when hurt.`,drops:[]}),V(`bat`,{name:`Bat`,category:`passive`,archetype:`bat`,hp:6,speed:1.8,flying:!0,width:.5,height:.5,colors:{body:`#4a3a32`,head:`#5a463a`,limb:`#2a1f1a`,accent:`#8a6a5a`,eye:`#d8c84a`},flags:{wings:!0,ears:!0},egg:[`#5a463a`,`#2a1f1a`],biomes:[`caves`,`forest`],time:`night`,desc:`A restless cave dweller that squeaks through the dark.`,drops:[]}),V(`bee`,{name:`Bee`,category:`neutral`,archetype:`bee`,hp:10,speed:1.8,flying:!0,width:.6,height:.55,colors:{body:`#e8b83a`,head:`#f8c84a`,limb:`#2a2a1a`,accent:`#1a1a10`,eye:`#101008`},flags:{wings:!0,tail:!0},egg:[`#f8c84a`,`#2a2a1a`],biomes:[`plains`,`forest`,`cherry`,`jungle`],desc:`A busy pollinator. Disturb its hive and it will sting.`,drops:[]}),V(`camel`,{name:`Camel`,category:`passive`,archetype:`camel`,hp:32,speed:1.6,width:1.4,height:2.5,colors:{body:`#d8b87a`,head:`#e8c88a`,limb:`#b89a5a`,accent:`#8a6a3a`,eye:`#201810`},flags:{ears:!0,tail:!0,saddle:!0},egg:[`#e8c88a`,`#b89a5a`],biomes:[`desert`],desc:`A tall desert mount that can carry two riders.`,drops:[]}),V(`cat`,{name:`Cat`,category:`passive`,archetype:`cat`,hp:10,speed:1.7,width:.6,height:.8,colors:{body:`#c8a86a`,head:`#d8b87a`,limb:`#a88a4a`,accent:`#f0e0c8`,eye:`#5ac84a`},flags:{ears:!0,tail:!0},egg:[`#d8b87a`,`#a88a4a`],biomes:[`village`],desc:`A independent feline that scares off creepers and phantoms.`,drops:[],tameable:!0}),V(`chicken`,{name:`Chicken`,category:`passive`,archetype:`bird`,hp:4,speed:1.3,width:.5,height:.8,colors:{body:`#f0f0e8`,head:`#f8f8f0`,limb:`#e8a83a`,accent:`#d83a2a`,eye:`#1a1a1a`},flags:{wings:!0,tail:!0},egg:[`#f8f8f0`,`#d83a2a`],biomes:[`plains`,`forest`,`village`],desc:`Flaps about, lays eggs, and fears everything.`,drops:[`chicken`,`feather`]}),V(`cod`,{name:`Cod`,category:`passive`,archetype:`fish`,hp:3,speed:1.4,width:.5,height:.4,aquatic:!0,colors:{body:`#c8b89a`,head:`#d8c8aa`,limb:`#a8987a`,accent:`#e8d8b8`,eye:`#101010`},flags:{fins:!0,tail:!0},egg:[`#d8c8aa`,`#a8987a`],biomes:[`ocean`],desc:`A small silver fish that schools in the shallows.`,drops:[`cod`]}),V(`copper_golem`,{name:`Copper Golem`,category:`passive`,archetype:`copper_golem`,hp:12,speed:1.2,width:.7,height:1.1,colors:{body:`#c06a3c`,head:`#d87a4a`,limb:`#8a4a2a`,accent:`#4f9a84`,eye:`#f8e8a0`},flags:{ears:!0},egg:[`#d87a4a`,`#4f9a84`],biomes:[`village`],desc:`A little copper automaton that sorts buttons and loves lightning.`,drops:[`copper_ingot`]}),V(`cow`,{name:`Cow`,category:`passive`,archetype:`quadruped`,hp:10,speed:1.1,width:.9,height:1.4,colors:{body:`#4a3a32`,head:`#5a463a`,limb:`#3a2a22`,accent:`#f0f0e8`,eye:`#1a1a1a`},flags:{horns:!0,ears:!0,tail:!0,snout:!0},egg:[`#5a463a`,`#f0f0e8`],biomes:[`plains`,`forest`,`village`],desc:`A placid grazer. Right-click with a bucket for milk.`,drops:[`beef`,`leather`]}),V(`dolphin`,{name:`Dolphin`,category:`neutral`,archetype:`dolphin`,hp:10,speed:2.4,width:.9,height:.6,aquatic:!0,colors:{body:`#5a7a9a`,head:`#6a8aaa`,limb:`#4a6a8a`,accent:`#d8e8f0`,eye:`#0a1a2a`},flags:{fins:!0,tail:!0,nose:!0},egg:[`#6a8aaa`,`#d8e8f0`],biomes:[`ocean`],desc:`A playful swimmer that leads sailors to treasure.`,drops:[]}),V(`donkey`,{name:`Donkey`,category:`passive`,archetype:`horse`,hp:22,speed:1.5,width:1,height:1.9,colors:{body:`#8a7a6a`,head:`#9a8a7a`,limb:`#6a5a4a`,accent:`#d8c8b8`,eye:`#201810`},flags:{ears:!0,tail:!0,mane:!0},egg:[`#9a8a7a`,`#6a5a4a`],biomes:[`plains`,`savanna`],desc:`A stubborn pack animal that can carry a chest.`,drops:[`leather`],tameable:!0}),V(`fox`,{name:`Fox`,category:`passive`,archetype:`canine`,hp:10,speed:1.9,width:.7,height:.9,colors:{body:`#d87a3a`,head:`#e88a4a`,limb:`#8a4a2a`,accent:`#f0f0e8`,eye:`#101010`},flags:{ears:!0,tail:!0,snout:!0},egg:[`#e88a4a`,`#f0f0e8`],biomes:[`taiga`,`forest`,`snow`],desc:`A clever nocturnal hunter that pounces on chickens.`,drops:[]}),V(`frog`,{name:`Frog`,category:`passive`,archetype:`frog`,hp:10,speed:1.2,width:.6,height:.5,colors:{body:`#d87a3a`,head:`#e88a4a`,limb:`#b85a2a`,accent:`#f0e0c8`,eye:`#101008`},flags:{ears:!0},egg:[`#e88a4a`,`#b85a2a`],biomes:[`swamp`],desc:`A hopping amphibian that eats magma cubes whole.`,drops:[]}),V(`glow_squid`,{name:`Glow Squid`,category:`passive`,archetype:`squid`,hp:10,speed:1,width:.9,height:.9,aquatic:!0,colors:{body:`#2a8a8a`,head:`#3ab8b8`,limb:`#1a6a6a`,accent:`#8ae8e8`,eye:`#0a2a2a`},flags:{tentacles:!0},egg:[`#3ab8b8`,`#1a6a6a`],biomes:[`caves`],light:1,desc:`A squid that glows softly in the deepest water.`,drops:[`glow_ink_sac`]}),V(`goat`,{name:`Goat`,category:`neutral`,archetype:`goat`,hp:10,speed:1.5,width:.8,height:1.3,colors:{body:`#b8b0a0`,head:`#c8c0b0`,limb:`#8a8270`,accent:`#6a6250`,eye:`#201810`},flags:{horns:!0,ears:!0,tail:!0,nose:!0},egg:[`#c8c0b0`,`#6a6250`],biomes:[`mountains`],desc:`A sure-footed climber with a headbutt like a battering ram.`,drops:[`goat_horn`]}),V(`happy_ghast`,{name:`Happy Ghast`,category:`passive`,archetype:`happy_ghast`,hp:20,speed:1.1,flying:!0,width:2.2,height:2.2,colors:{body:`#f0f0e8`,head:`#f8f8f2`,limb:`#d8d8d0`,accent:`#a8c8d8`,eye:`#3a3a3a`},flags:{tentacles:!0},egg:[`#f8f8f2`,`#a8c8d8`],biomes:[`mountains`,`plains`],light:1,desc:`A gentle floating giant. Kids love it, and so do fireworks.`,drops:[]}),V(`horse`,{name:`Horse`,category:`passive`,archetype:`horse`,hp:24,speed:1.9,width:1.1,height:2,colors:{body:`#8a5a32`,head:`#9a6a3a`,limb:`#6a4222`,accent:`#3a2410`,eye:`#201810`},flags:{ears:!0,tail:!0,mane:!0,saddle:!0},egg:[`#9a6a3a`,`#3a2410`],biomes:[`plains`,`savanna`],desc:`A swift steed. Saddle it, then ride across the world.`,drops:[`leather`],tameable:!0}),V(`iron_golem`,{name:`Iron Golem`,category:`neutral`,archetype:`golem`,hp:100,speed:1,width:1.4,height:2.7,colors:{body:`#c8c8c0`,head:`#d8d8d0`,limb:`#a8a8a0`,accent:`#e8e8e0`,eye:`#1a1a1a`},flags:{nose:!0},egg:[`#d8d8d0`,`#a8a8a0`],biomes:[`village`],desc:`A hulking guardian of villages. Do not make it angry.`,drops:[`iron_ingot`]}),V(`llama`,{name:`Llama`,category:`neutral`,archetype:`llama`,hp:20,speed:1.3,width:1,height:1.9,colors:{body:`#e8d8b8`,head:`#f0e0c8`,limb:`#c8b898`,accent:`#8a6a4a`,eye:`#201810`},flags:{ears:!0,tail:!0,nose:!0,saddle:!0},egg:[`#f0e0c8`,`#8a6a4a`],biomes:[`mountains`,`savanna`],desc:`A woolly pack animal that spits when insulted.`,drops:[`leather`],tameable:!0}),V(`mooshroom`,{name:`Mooshroom`,category:`passive`,archetype:`quadruped`,hp:10,speed:1.1,width:1,height:1.5,colors:{body:`#b83a3a`,head:`#c84a4a`,limb:`#8a2a2a`,accent:`#f0f0e8`,eye:`#1a1a1a`},flags:{horns:!0,ears:!0,tail:!0,snout:!0},egg:[`#c84a4a`,`#f0f0e8`],biomes:[`mushroom`],desc:`A cow covered in mushrooms. Suspiciously delicious.`,drops:[`beef`,`leather`]}),V(`mule`,{name:`Mule`,category:`passive`,archetype:`horse`,hp:20,speed:1.5,width:1,height:1.8,colors:{body:`#6a5a4a`,head:`#7a6a5a`,limb:`#4a3a2a`,accent:`#2a2018`,eye:`#201810`},flags:{ears:!0,tail:!0,mane:!0,saddle:!0},egg:[`#7a6a5a`,`#4a3a2a`],biomes:[`plains`],desc:`A sturdy hybrid that carries a rider and a chest.`,drops:[`leather`],tameable:!0}),V(`ocelot`,{name:`Ocelot`,category:`passive`,archetype:`cat`,hp:10,speed:1.8,width:.6,height:.8,colors:{body:`#d8b85a`,head:`#e8c86a`,limb:`#b8983a`,accent:`#f0e8c8`,eye:`#3a7a2a`},flags:{ears:!0,tail:!0},egg:[`#e8c86a`,`#b8983a`],biomes:[`jungle`],desc:`A wild jungle cat. Toss it a fish and it may trust you.`,drops:[],tameable:!0}),V(`panda`,{name:`Panda`,category:`passive`,archetype:`panda`,hp:20,speed:.8,width:1.1,height:1.5,colors:{body:`#f0f0e8`,head:`#f8f8f0`,limb:`#2a2a2a`,accent:`#1a1a1a`,eye:`#101010`},flags:{ears:!0,tail:!0,nose:!0},egg:[`#f8f8f0`,`#2a2a2a`],biomes:[`jungle`],desc:`A bamboo-munching bear with an alarming amount of personality.`,drops:[`bamboo`]}),V(`parrot`,{name:`Parrot`,category:`passive`,archetype:`parrot`,hp:6,speed:1.8,width:.5,height:.8,colors:{body:`#d83a3a`,head:`#e84a4a`,limb:`#3a8ad8`,accent:`#f8d83a`,eye:`#101010`},flags:{wings:!0,tail:!0,nose:!0},egg:[`#e84a4a`,`#3a8ad8`],biomes:[`jungle`],desc:`A brightly coloured bird that mimics nearby sounds.`,drops:[`feather`],tameable:!0}),V(`pig`,{name:`Pig`,category:`passive`,archetype:`quadruped`,hp:10,speed:1.2,width:.9,height:1.2,colors:{body:`#e8a8a8`,head:`#f0b8b8`,limb:`#c88888`,accent:`#d88888`,eye:`#1a1a1a`},flags:{ears:!0,tail:!0,snout:!0},egg:[`#f0b8b8`,`#d88888`],biomes:[`plains`,`village`],desc:`A snuffling oinker. Saddle it and steer with a carrot on a stick.`,drops:[`porkchop`]}),V(`polar_bear`,{name:`Polar Bear`,category:`neutral`,archetype:`quadruped`,hp:30,speed:1.2,width:1.2,height:1.7,colors:{body:`#f0f4f4`,head:`#f8f8f8`,limb:`#d8e0e0`,accent:`#c8d0d0`,eye:`#101010`},flags:{ears:!0,tail:!0,snout:!0},egg:[`#f8f8f8`,`#d8e0e0`],biomes:[`snow`,`ocean`],desc:`A powerful arctic hunter. Stay away from its cubs.`,drops:[`cod`]}),V(`pufferfish`,{name:`Pufferfish`,category:`passive`,archetype:`pufferfish`,hp:3,speed:.8,width:.5,height:.5,aquatic:!0,colors:{body:`#e8c83a`,head:`#f0d84a`,limb:`#c8a82a`,accent:`#f0f0e0`,eye:`#101010`},flags:{fins:!0,tail:!0,spikes:!0},egg:[`#f0d84a`,`#c8a82a`],biomes:[`ocean`],desc:`A spiky fish that puffs up when threatened.`,drops:[`pufferfish`]}),V(`rabbit`,{name:`Rabbit`,category:`passive`,archetype:`rabbit`,hp:3,speed:2,width:.5,height:.6,colors:{body:`#b89a7a`,head:`#c8aa8a`,limb:`#987a5a`,accent:`#f0e8d8`,eye:`#101010`},flags:{ears:!0,tail:!0},egg:[`#c8aa8a`,`#987a5a`],biomes:[`plains`,`desert`,`snow`,`forest`],desc:`A twitchy hopper that is always one step from danger.`,drops:[`rabbit`,`rabbit_hide`]}),V(`salmon`,{name:`Salmon`,category:`passive`,archetype:`fish`,hp:3,speed:1.5,width:.6,height:.4,aquatic:!0,colors:{body:`#c85a4a`,head:`#d86a5a`,limb:`#a84a3a`,accent:`#e8a89a`,eye:`#101010`},flags:{fins:!0,tail:!0},egg:[`#d86a5a`,`#a84a3a`],biomes:[`ocean`],desc:`A pink fish that fights its way upstream.`,drops:[`salmon`]}),V(`sheep`,{name:`Sheep`,category:`passive`,archetype:`quadruped`,hp:8,speed:1.2,width:.9,height:1.3,colors:{body:`#f0f0e8`,head:`#e8d8c8`,limb:`#d8c8b8`,accent:`#f8f8f2`,eye:`#1a1a1a`},flags:{ears:!0,tail:!0},egg:[`#f8f8f2`,`#e8d8c8`],biomes:[`plains`,`forest`,`mountains`,`village`],desc:`A woolly cloud with legs. Shear it for wool.`,drops:[`mutton`,`white_wool`]}),V(`sniffer`,{name:`Sniffer`,category:`passive`,archetype:`sniffer`,hp:14,speed:.9,width:1.9,height:1.8,colors:{body:`#8a5a3a`,head:`#9a6a4a`,limb:`#6a422a`,accent:`#5a3a2a`,eye:`#201810`},flags:{ears:!0,tail:!0,nose:!0},egg:[`#9a6a4a`,`#5a3a2a`],biomes:[`plains`,`forest`],desc:`An ancient giant that sniffs out seeds from a lost world.`,drops:[`sniffer_egg`]}),V(`snow_golem`,{name:`Snow Golem`,category:`passive`,archetype:`snow_golem`,hp:4,speed:1.2,width:.7,height:1.8,colors:{body:`#f4f8f8`,head:`#f8fafb`,limb:`#e0e8ea`,accent:`#e88a2a`,eye:`#101010`},flags:{nose:!0},egg:[`#f8fafb`,`#e88a2a`],biomes:[`snow`],desc:`A cheerful snowman that hurls snowballs at monsters.`,drops:[`snowball`],ranged:!0}),V(`squid`,{name:`Squid`,category:`passive`,archetype:`squid`,hp:10,speed:1,width:.9,height:.9,aquatic:!0,colors:{body:`#3a4a6a`,head:`#4a5a7a`,limb:`#2a3a5a`,accent:`#8a9ab8`,eye:`#0a0a1a`},flags:{tentacles:!0},egg:[`#4a5a7a`,`#2a3a5a`],biomes:[`ocean`],desc:`A soft-bodied swimmer that squirts ink when startled.`,drops:[`ink_sac`]}),V(`strider`,{name:`Strider`,category:`passive`,archetype:`strider`,hp:20,speed:1.2,width:1.1,height:1.6,colors:{body:`#c85a6a`,head:`#d86a7a`,limb:`#a84a5a`,accent:`#f0a8b8`,eye:`#f8f0f0`},flags:{tail:!0,saddle:!0,ears:!0},egg:[`#d86a7a`,`#f0a8b8`],biomes:[`nether`],desc:`A lava-walking mount with a face full of tentacles.`,drops:[`string`],tameable:!0}),V(`tadpole`,{name:`Tadpole`,category:`passive`,archetype:`tadpole`,hp:6,speed:1.2,width:.4,height:.3,aquatic:!0,colors:{body:`#6a5a3a`,head:`#7a6a4a`,limb:`#5a4a2a`,accent:`#8a7a5a`,eye:`#101010`},flags:{tail:!0},egg:[`#7a6a4a`,`#5a4a2a`],biomes:[`swamp`],desc:`A wriggling little tadpole. One day it will be a frog.`,drops:[]}),V(`trader_llama`,{name:`Trader Llama`,category:`neutral`,archetype:`llama`,hp:20,speed:1.3,width:1,height:1.9,colors:{body:`#c8b8a0`,head:`#d8c8b0`,limb:`#a89880`,accent:`#3a8ad8`,eye:`#201810`},flags:{ears:!0,tail:!0,nose:!0,saddle:!0},egg:[`#d8c8b0`,`#3a8ad8`],biomes:[`plains`],desc:`A decorated llama that guards a wandering trader.`,drops:[`leather`]}),V(`tropical_fish`,{name:`Tropical Fish`,category:`passive`,archetype:`fish`,hp:3,speed:1.4,width:.5,height:.4,aquatic:!0,colors:{body:`#f8a83a`,head:`#f8c84a`,limb:`#d8882a`,accent:`#3ac8e8`,eye:`#101010`},flags:{fins:!0,tail:!0},egg:[`#f8c84a`,`#3ac8e8`],biomes:[`ocean`],desc:`A riot of colour in the warm shallows.`,drops:[`tropical_fish`]}),V(`turtle`,{name:`Turtle`,category:`passive`,archetype:`turtle`,hp:30,speed:.8,width:1.1,height:.5,aquatic:!0,colors:{body:`#5a8a4a`,head:`#6a9a5a`,limb:`#4a7a3a`,accent:`#8ab86a`,eye:`#101010`},flags:{shell:!0,fins:!0,tail:!0},egg:[`#6a9a5a`,`#4a7a3a`],biomes:[`ocean`,`beach`],desc:`An ancient mariner that returns to the beach to lay eggs.`,drops:[`seagrass`]}),V(`villager`,{name:`Villager`,category:`passive`,archetype:`villager`,hp:20,speed:1.2,width:.6,height:1.9,colors:{body:`#8a6a4a`,head:`#c8a07a`,limb:`#6a4a2a`,accent:`#4a8a4a`,eye:`#1a1a1a`},flags:{nose:!0,robe:!0},egg:[`#c8a07a`,`#4a8a4a`],biomes:[`village`],desc:`A tradesperson of the village. They love emeralds.`,drops:[]}),V(`wandering_trader`,{name:`Wandering Trader`,category:`passive`,archetype:`villager`,hp:20,speed:1.2,width:.6,height:1.9,colors:{body:`#3a6a8a`,head:`#c8a07a`,limb:`#2a4a6a`,accent:`#5a9ac8`,eye:`#1a1a1a`},flags:{nose:!0,robe:!0},egg:[`#c8a07a`,`#3a6a8a`],biomes:[`plains`],desc:`A mysterious merchant with rare goods and a llama or two.`,drops:[]}),V(`wolf`,{name:`Wolf`,category:`neutral`,archetype:`canine`,hp:8,speed:2,width:.6,height:.9,colors:{body:`#c8c8c0`,head:`#d8d8d0`,limb:`#a8a8a0`,accent:`#e8e8e0`,eye:`#3a6ac8`},flags:{ears:!0,tail:!0,snout:!0},egg:[`#d8d8d0`,`#a8a8a0`],biomes:[`forest`,`taiga`,`snow`],desc:`A loyal companion once tamed. Feed it bones to win its trust.`,drops:[],tameable:!0}),V(`blaze`,{name:`Blaze`,category:`hostile`,archetype:`blaze`,hp:20,damage:6,speed:1.2,flying:!0,width:.7,height:1.8,ranged:!0,colors:{body:`#e8a02a`,head:`#f8c83a`,limb:`#c8781a`,accent:`#f8e85a`,eye:`#f8f8e8`},flags:{rods:!0},egg:[`#f8c83a`,`#c8781a`],biomes:[`nether`],light:8,desc:`A floating pillar of fire that hurls fireballs.`,drops:[`blaze_rod`]}),V(`bogged`,{name:`Bogged`,category:`hostile`,archetype:`skeleton`,hp:16,damage:4,speed:1.3,width:.6,height:1.9,ranged:!0,colors:{body:`#8a9a6a`,head:`#9aaa7a`,limb:`#6a7a4a`,accent:`#5a6a3a`,eye:`#d8e8a8`},flags:{ears:!1},egg:[`#9aaa7a`,`#5a6a3a`],biomes:[`swamp`,`caves`],desc:`A moss-covered skeleton that fires poisoned arrows.`,drops:[`bone`,`arrow`]}),V(`breeze`,{name:`Breeze`,category:`hostile`,archetype:`breeze`,hp:30,damage:4,speed:1.8,flying:!0,width:.8,height:1.6,ranged:!0,colors:{body:`#7a9ac8`,head:`#8aaad8`,limb:`#5a7aa8`,accent:`#d8e8f8`,eye:`#f8f8ff`},flags:{rods:!0},egg:[`#8aaad8`,`#5a7aa8`],biomes:[`caves`],light:2,desc:`A whirlwind of blue wind that fires gusts of air.`,drops:[`wind_charge`]}),V(`cave_spider`,{name:`Cave Spider`,category:`hostile`,archetype:`spider`,hp:12,damage:2,speed:1.7,width:.7,height:.5,colors:{body:`#2a4a3a`,head:`#3a5a4a`,limb:`#1a3a2a`,accent:`#c82a2a`,eye:`#e83a3a`},flags:{},egg:[`#3a5a4a`,`#c82a2a`],biomes:[`caves`],desc:`A smaller, venomous spider that haunts abandoned mineshafts.`,drops:[`string`,`spider_eye`]}),V(`creeper`,{name:`Creeper`,category:`hostile`,archetype:`creeper`,hp:20,damage:22,speed:1.3,width:.7,height:1.7,colors:{body:`#5aa84a`,head:`#66b84a`,limb:`#4a8a3a`,accent:`#2a4a2a`,eye:`#101010`},flags:{},egg:[`#66b84a`,`#2a4a2a`],biomes:[`plains`,`forest`,`caves`],desc:`A silent green stalker. It hisses, then it explodes.`,drops:[`gunpowder`]}),V(`creaking`,{name:`Creaking`,category:`hostile`,archetype:`creaking`,hp:60,damage:8,speed:1.1,width:1,height:3,colors:{body:`#4a3a2a`,head:`#5a4a32`,limb:`#2a2018`,accent:`#8a6a3a`,eye:`#f8a83a`},flags:{horns:!0,spikes:!0},egg:[`#5a4a32`,`#f8a83a`],biomes:[`dark`],time:`night`,desc:`A cursed tree-creature that only stops when you find its heart.`,drops:[`resin_clump`]}),V(`drowned`,{name:`Drowned`,category:`hostile`,archetype:`zombie`,hp:20,damage:3,speed:1.2,width:.6,height:1.9,aquatic:!0,colors:{body:`#3a7a6a`,head:`#4a8a7a`,limb:`#2a5a4a`,accent:`#5a9a8a`,eye:`#2a2a1a`},flags:{},egg:[`#4a8a7a`,`#2a5a4a`],biomes:[`ocean`],desc:`A waterlogged zombie that sometimes carries a trident.`,drops:[`rotten_flesh`,`copper_ingot`]}),V(`elder_guardian`,{name:`Elder Guardian`,category:`hostile`,archetype:`guardian`,hp:80,damage:8,speed:.9,width:2,height:2,aquatic:!0,boss:!0,colors:{body:`#8a9a7a`,head:`#9aaa8a`,limb:`#6a7a5a`,accent:`#d8e8c8`,eye:`#f8a83a`},flags:{spikes:!0,fins:!0},egg:[`#9aaa8a`,`#f8a83a`],biomes:[`ocean`],desc:`A colossal guardian of the ocean monument. It curses those who enter.`,drops:[`prismarine_shard`,`sponge`]}),V(`ender_dragon`,{name:`Ender Dragon`,category:`boss`,archetype:`dragon`,hp:200,damage:12,speed:2,flying:!0,width:6,height:4,colors:{body:`#2a2a33`,head:`#3a3a44`,limb:`#1a1a22`,accent:`#8a5ac8`,eye:`#d85aff`},flags:{wings:!0,horns:!0,tail:!0,spikes:!0},egg:[`#2a2a33`,`#8a5ac8`],biomes:[`end`],light:2,desc:`The ancient ruler of the End. Break the end crystals, then bring it down.`,drops:[`dragon_egg`,`experience_bottle`]}),V(`enderman`,{name:`Enderman`,category:`hostile`,archetype:`enderman`,hp:40,damage:7,speed:1.9,width:.7,height:2.9,colors:{body:`#141418`,head:`#1a1a20`,limb:`#101014`,accent:`#8a5ac8`,eye:`#c86aff`},flags:{},egg:[`#1a1a20`,`#c86aff`],biomes:[`plains`,`forest`,`end`,`nether`],time:`night`,desc:`A tall shadow that hates being looked in the eye. It teleports.`,drops:[`ender_pearl`]}),V(`endermite`,{name:`Endermite`,category:`hostile`,archetype:`endermite`,hp:8,damage:2,speed:1.6,width:.4,height:.3,colors:{body:`#3a2a4a`,head:`#4a3a5a`,limb:`#2a1a3a`,accent:`#8a6aa8`,eye:`#c86aff`},flags:{},egg:[`#4a3a5a`,`#8a6aa8`],biomes:[`end`],desc:`A tiny silverfish of the End, drawn to ender pearls.`,drops:[]}),V(`evoker`,{name:`Evoker`,category:`hostile`,archetype:`illager`,hp:24,damage:6,speed:1.2,width:.6,height:1.9,ranged:!0,colors:{body:`#5a5a62`,head:`#a8a8a0`,limb:`#4a4a52`,accent:`#3a3a42`,eye:`#c82a2a`},flags:{robe:!0,nose:!0,hat:!1},egg:[`#a8a8a0`,`#5a5a62`],biomes:[`dark`],desc:`A spellcasting illager that summons vexes and fangs.`,drops:[`totem_of_undying`,`emerald`]}),V(`ghast`,{name:`Ghast`,category:`hostile`,archetype:`ghast`,hp:10,damage:8,speed:1,flying:!0,width:3.2,height:3.2,ranged:!0,colors:{body:`#e8e4e0`,head:`#f0ece8`,limb:`#d0ccc8`,accent:`#c8c4c0`,eye:`#1a1a1a`},flags:{tentacles:!0},egg:[`#f0ece8`,`#c8c4c0`],biomes:[`nether`],desc:`A vast floating jellyfish that sobs and spits fireballs.`,drops:[`ghast_tear`,`gunpowder`]}),V(`giant`,{name:`Giant`,category:`hostile`,archetype:`zombie`,hp:100,damage:12,speed:.7,width:3.6,height:7.2,colors:{body:`#4a8a4a`,head:`#5a9a5a`,limb:`#3a6a3a`,accent:`#6aaa6a`,eye:`#101010`},flags:{},egg:[`#5a9a5a`,`#3a6a3a`],biomes:[`plains`],desc:`A colossal zombie from an older world. Rarely seen, never forgotten.`,drops:[`rotten_flesh`]}),V(`guardian`,{name:`Guardian`,category:`hostile`,archetype:`guardian`,hp:30,damage:6,speed:1.1,width:1.2,height:1.2,aquatic:!0,ranged:!0,colors:{body:`#6a8a6a`,head:`#7a9a7a`,limb:`#5a7a5a`,accent:`#c8d8b8`,eye:`#f8a83a`},flags:{spikes:!0,fins:!0},egg:[`#7a9a7a`,`#f8a83a`],biomes:[`ocean`],desc:`A single-eyed sentinel that fires laser beams at intruders.`,drops:[`prismarine_shard`,`prismarine_crystals`]}),V(`hoglin`,{name:`Hoglin`,category:`hostile`,archetype:`hoglin`,hp:40,damage:8,speed:1.5,width:1.4,height:1.6,colors:{body:`#c88a6a`,head:`#d89a7a`,limb:`#a86a4a`,accent:`#f0d8c8`,eye:`#2a1a1a`},flags:{horns:!0,ears:!0,tail:!0,snout:!0},egg:[`#d89a7a`,`#a86a4a`],biomes:[`nether`],desc:`A hunched nether boar that charges anything that moves.`,drops:[`porkchop`,`leather`]}),V(`husk`,{name:`Husk`,category:`hostile`,archetype:`zombie`,hp:20,damage:3,speed:1.2,width:.6,height:1.9,colors:{body:`#c8b87a`,head:`#d8c88a`,limb:`#a8985a`,accent:`#8a7a4a`,eye:`#2a2a1a`},flags:{},egg:[`#d8c88a`,`#a8985a`],biomes:[`desert`],desc:`A sand-dried zombie that does not burn in daylight.`,drops:[`rotten_flesh`]}),V(`illusioner`,{name:`Illusioner`,category:`hostile`,archetype:`illager`,hp:32,damage:5,speed:1.2,width:.6,height:1.9,ranged:!0,colors:{body:`#3a5a8a`,head:`#a8a8a0`,limb:`#2a4a6a`,accent:`#d8c85a`,eye:`#2a2a8a`},flags:{robe:!0,nose:!0,hat:!0},egg:[`#a8a8a0`,`#3a5a8a`],biomes:[`mountains`],desc:`A master of mirrors and blindness. Its illusions fight for it.`,drops:[`bow`,`emerald`]}),V(`magma_cube`,{name:`Magma Cube`,category:`hostile`,archetype:`magma`,hp:16,damage:4,speed:1.2,width:.9,height:.9,colors:{body:`#8a2a1a`,head:`#a83a1a`,limb:`#6a1a0a`,accent:`#f8a83a`,eye:`#f8e85a`},flags:{},egg:[`#a83a1a`,`#f8a83a`],biomes:[`nether`],light:4,desc:`A bouncing blob of molten rock. Fire does not hurt it.`,drops:[`magma_cream`]}),V(`phantom`,{name:`Phantom`,category:`hostile`,archetype:`phantom`,hp:20,damage:6,speed:2.2,flying:!0,width:1.6,height:.8,colors:{body:`#3a5a5a`,head:`#4a6a6a`,limb:`#2a4a4a`,accent:`#8ab8b8`,eye:`#3af8e8`},flags:{wings:!0,tail:!0,fins:!0},egg:[`#4a6a6a`,`#3af8e8`],biomes:[`plains`,`forest`,`ocean`],time:`night`,desc:`A screaming manta that swoops at players who have not slept.`,drops:[`phantom_membrane`]}),V(`piglin`,{name:`Piglin`,category:`hostile`,archetype:`piglin`,hp:16,damage:5,speed:1.3,width:.6,height:1.9,colors:{body:`#c87a6a`,head:`#d88a7a`,limb:`#a85a4a`,accent:`#f0d8c8`,eye:`#3a2a1a`},flags:{ears:!0,nose:!0,robe:!1},egg:[`#d88a7a`,`#a85a4a`],biomes:[`nether`],desc:`A gold-obsessed nether warrior. Wear gold to avoid its wrath.`,drops:[`gold_ingot`,`porkchop`]}),V(`piglin_brute`,{name:`Piglin Brute`,category:`hostile`,archetype:`piglin`,hp:50,damage:7,speed:1.3,width:.7,height:2,colors:{body:`#b86a5a`,head:`#c87a6a`,limb:`#984a3a`,accent:`#e8c8b8`,eye:`#3a2a1a`},flags:{ears:!0,nose:!0,horns:!0},egg:[`#c87a6a`,`#984a3a`],biomes:[`nether`],desc:`A hulking piglin guard armed with a golden axe.`,drops:[`gold_ingot`]}),V(`pillager`,{name:`Pillager`,category:`hostile`,archetype:`illager`,hp:24,damage:5,speed:1.3,width:.6,height:1.9,ranged:!0,colors:{body:`#6a6a72`,head:`#a8a8a0`,limb:`#5a5a62`,accent:`#3a3a42`,eye:`#2a2a2a`},flags:{robe:!0,nose:!0,hat:!1},egg:[`#a8a8a0`,`#6a6a72`],biomes:[`plains`,`forest`],desc:`A crossbow-wielding raider. It shoots first and never asks.`,drops:[`crossbow`,`arrow`]}),V(`ravager`,{name:`Ravager`,category:`hostile`,archetype:`ravager`,hp:100,damage:12,speed:1.4,width:1.9,height:2.2,colors:{body:`#5a4a4a`,head:`#6a5a5a`,limb:`#4a3a3a`,accent:`#3a2a2a`,eye:`#c82a2a`},flags:{horns:!0,ears:!0,tail:!0,nose:!0,spikes:!0},egg:[`#6a5a5a`,`#c82a2a`],biomes:[`plains`],desc:`A monstrous raider beast that smashes through villages.`,drops:[`saddle`]}),V(`shulker`,{name:`Shulker`,category:`hostile`,archetype:`shulker`,hp:30,damage:4,speed:.4,width:1,height:1,ranged:!0,colors:{body:`#8a6a8a`,head:`#9a7a9a`,limb:`#6a4a6a`,accent:`#d8b8d8`,eye:`#f8e85a`},flags:{shell:!0},egg:[`#9a7a9a`,`#d8b8d8`],biomes:[`end`],desc:`A stubborn shell that hides in the End and fires homing bullets.`,drops:[`shulker_shell`]}),V(`silverfish`,{name:`Silverfish`,category:`hostile`,archetype:`silverfish`,hp:8,damage:2,speed:1.6,width:.4,height:.3,colors:{body:`#8a8a8a`,head:`#9a9a9a`,limb:`#6a6a6a`,accent:`#b8b8b8`,eye:`#1a1a1a`},flags:{},egg:[`#9a9a9a`,`#6a6a6a`],biomes:[`caves`,`mountains`],desc:`A tiny insect that swarms from infested stone.`,drops:[]}),V(`skeleton`,{name:`Skeleton`,category:`hostile`,archetype:`skeleton`,hp:20,damage:4,speed:1.3,width:.6,height:1.9,ranged:!0,colors:{body:`#c8c8c0`,head:`#d8d8d0`,limb:`#b8b8b0`,accent:`#e8e8e0`,eye:`#1a1a1a`},flags:{},egg:[`#d8d8d0`,`#1a1a1a`],biomes:[`plains`,`forest`,`snow`,`caves`],time:`night`,desc:`A rattling archer that burns in sunlight and fires arrows at range.`,drops:[`bone`,`arrow`]}),V(`skeleton_horse`,{name:`Skeleton Horse`,category:`hostile`,archetype:`horse`,hp:15,damage:4,speed:2,width:1.1,height:1.9,colors:{body:`#c8c8c0`,head:`#d8d8d0`,limb:`#a8a8a0`,accent:`#8a8a82`,eye:`#3a3a3a`},flags:{ears:!0,tail:!0,mane:!0},egg:[`#d8d8d0`,`#a8a8a0`],biomes:[`plains`],time:`night`,desc:`A bony steed that rises from lightning and rides across water.`,drops:[`bone`]}),V(`slime`,{name:`Slime`,category:`hostile`,archetype:`slime`,hp:16,damage:4,speed:1.2,width:.9,height:.9,colors:{body:`#6aa84a`,head:`#7ab85a`,limb:`#5a8a3a`,accent:`#a8e88a`,eye:`#1a3a1a`},flags:{},egg:[`#7ab85a`,`#5a8a3a`],biomes:[`caves`,`swamp`],desc:`A bouncing green cube that splits into smaller slimes.`,drops:[`slime_ball`]}),V(`spider`,{name:`Spider`,category:`hostile`,archetype:`spider`,hp:16,damage:3,speed:1.7,width:1.2,height:.9,colors:{body:`#3a2a2a`,head:`#4a3a3a`,limb:`#2a1a1a`,accent:`#8a6a2a`,eye:`#e83a3a`},flags:{},egg:[`#4a3a3a`,`#e83a3a`],biomes:[`plains`,`forest`,`caves`],time:`night`,desc:`A night hunter with eight legs and a taste for flies — and you.`,drops:[`string`,`spider_eye`]}),V(`stray`,{name:`Stray`,category:`hostile`,archetype:`skeleton`,hp:20,damage:4,speed:1.3,width:.6,height:1.9,ranged:!0,colors:{body:`#a8b8c8`,head:`#b8c8d8`,limb:`#8a9aa8`,accent:`#d8e8f8`,eye:`#3ac8e8`},flags:{},egg:[`#b8c8d8`,`#3ac8e8`],biomes:[`snow`],time:`night`,desc:`A frozen skeleton whose arrows slow the blood.`,drops:[`bone`,`arrow`]}),V(`vex`,{name:`Vex`,category:`hostile`,archetype:`vex`,hp:14,damage:5,speed:2.2,flying:!0,width:.5,height:.8,colors:{body:`#8ab8d8`,head:`#9ac8e8`,limb:`#6a98b8`,accent:`#d8e8f8`,eye:`#f8f8ff`},flags:{wings:!0},egg:[`#9ac8e8`,`#6a98b8`],biomes:[`dark`],desc:`A tiny, furious spirit summoned by an evoker. It phases through walls.`,drops:[]}),V(`vindicator`,{name:`Vindicator`,category:`hostile`,archetype:`illager`,hp:24,damage:7,speed:1.3,width:.6,height:1.9,colors:{body:`#5a5a62`,head:`#a8a8a0`,limb:`#4a4a52`,accent:`#3a3a42`,eye:`#2a2a2a`},flags:{robe:!0,nose:!0,hat:!1},egg:[`#a8a8a0`,`#5a5a62`],biomes:[`plains`,`dark`],desc:`A axe-wielding illager. It opens doors and closes conversations.`,drops:[`iron_axe`,`emerald`]}),V(`warden`,{name:`Warden`,category:`boss`,archetype:`warden`,hp:500,damage:30,speed:1.2,width:1.6,height:3.2,colors:{body:`#173a3a`,head:`#1b4a4a`,limb:`#0f2a2a`,accent:`#2a8a7a`,eye:`#3af8c8`},flags:{horns:!0,spikes:!0,tentacles:!0},egg:[`#1b4a4a`,`#3af8c8`],biomes:[`dark`],light:2,desc:`The blind horror of the deep dark. It hunts by sound and never stops.`,drops:[`sculk_catalyst`,`echo_shard`]}),V(`witch`,{name:`Witch`,category:`hostile`,archetype:`witch`,hp:26,damage:5,speed:1.2,width:.6,height:1.9,ranged:!0,colors:{body:`#4a2a5a`,head:`#8a8a7a`,limb:`#3a1a4a`,accent:`#c84ab8`,eye:`#2a1a2a`},flags:{robe:!0,hat:!0,nose:!0},egg:[`#8a8a7a`,`#4a2a5a`],biomes:[`swamp`,`dark`],desc:`A swamp hermit who throws potions and drinks healing brews.`,drops:[`glowstone_dust_block`,`redstone`,`sugar`]}),V(`wither`,{name:`Wither`,category:`boss`,archetype:`wither`,hp:300,damage:15,speed:1.2,flying:!0,width:2.4,height:3,ranged:!0,colors:{body:`#2a2a2e`,head:`#3a3a40`,limb:`#1a1a1e`,accent:`#5a5a62`,eye:`#3a6aff`},flags:{crown:!0,spikes:!0},egg:[`#3a3a40`,`#3a6aff`],biomes:[`nether`],light:2,desc:`A three-headed horror built from soul sand and skulls. It destroys everything.`,drops:[`nether_star`]}),V(`wither_skeleton`,{name:`Wither Skeleton`,category:`hostile`,archetype:`skeleton`,hp:20,damage:8,speed:1.3,width:.7,height:2.2,colors:{body:`#2a2a2e`,head:`#3a3a40`,limb:`#1a1a1e`,accent:`#4a4a52`,eye:`#1a1a1a`},flags:{},egg:[`#3a3a40`,`#1a1a1e`],biomes:[`nether`],desc:`A charred skeleton whose blade withers the living.`,drops:[`coal`,`bone`,`stone_sword`]}),V(`zoglin`,{name:`Zoglin`,category:`hostile`,archetype:`hoglin`,hp:40,damage:8,speed:1.6,width:1.4,height:1.6,colors:{body:`#c8a8b8`,head:`#d8b8c8`,limb:`#a8889a`,accent:`#8a6a7a`,eye:`#c82a2a`},flags:{horns:!0,ears:!0,tail:!0,snout:!0},egg:[`#d8b8c8`,`#c82a2a`],biomes:[`nether`],desc:`A zombified hoglin that attacks everything on sight.`,drops:[`rotten_flesh`]}),V(`zombie`,{name:`Zombie`,category:`hostile`,archetype:`zombie`,hp:20,damage:3,speed:1.2,width:.6,height:1.9,colors:{body:`#4a8a4a`,head:`#5a9a5a`,limb:`#3a6a3a`,accent:`#6aaa6a`,eye:`#101010`},flags:{},egg:[`#5a9a5a`,`#3a6a3a`],biomes:[`plains`,`forest`,`village`,`caves`],time:`night`,desc:`A shambling undead villager. It burns in daylight and hunts in packs.`,drops:[`rotten_flesh`]}),V(`zombie_horse`,{name:`Zombie Horse`,category:`hostile`,archetype:`horse`,hp:15,damage:4,speed:1.8,width:1.1,height:1.9,colors:{body:`#4a6a4a`,head:`#5a7a5a`,limb:`#3a5a3a`,accent:`#2a3a2a`,eye:`#f8a83a`},flags:{ears:!0,tail:!0,mane:!0},egg:[`#5a7a5a`,`#2a3a2a`],biomes:[`plains`],time:`night`,desc:`A rotting steed with a taste for open plains.`,drops:[`rotten_flesh`]}),V(`zombie_villager`,{name:`Zombie Villager`,category:`hostile`,archetype:`villager`,hp:20,damage:3,speed:1.2,width:.6,height:1.9,colors:{body:`#4a6a4a`,head:`#6a8a5a`,limb:`#3a5a3a`,accent:`#5a7a4a`,eye:`#101010`},flags:{nose:!0,robe:!0},egg:[`#6a8a5a`,`#3a5a3a`],biomes:[`village`,`plains`],time:`night`,desc:`A villager lost to the plague. A golden apple can cure it.`,drops:[`rotten_flesh`]}),V(`zombified_piglin`,{name:`Zombified Piglin`,category:`neutral`,archetype:`piglin`,hp:20,damage:5,speed:1.3,width:.6,height:1.9,colors:{body:`#6a8a5a`,head:`#7a9a6a`,limb:`#5a7a4a`,accent:`#8aaa7a`,eye:`#101010`},flags:{ears:!0,nose:!0},egg:[`#7a9a6a`,`#5a7a4a`],biomes:[`nether`],desc:`A golden sword and a short temper. Angering one angers them all.`,drops:[`gold_nugget`,`rotten_flesh`]}),V(`killer_rabbit`,{name:`Killer Rabbit`,category:`hostile`,archetype:`rabbit`,hp:3,damage:5,speed:2.4,width:.5,height:.6,colors:{body:`#f0f0f0`,head:`#f8f8f8`,limb:`#d8d8d8`,accent:`#e8e8e8`,eye:`#c82a2a`},flags:{ears:!0,tail:!0},egg:[`#f8f8f8`,`#c82a2a`],biomes:[`desert`],desc:`A white rabbit with red eyes. It is absolutely not cute.`,drops:[`rabbit`,`rabbit_hide`]});var uu=new Map(cu.map(e=>[e.id,e])),du=cu.length;cu.filter(e=>!e.hostile),cu.filter(e=>e.hostile);function fu(e,t=!1){return cu.filter(n=>!(n.boss||!n.biomes.includes(e)&&!n.biomes.includes(`any`)||n.time===`night`&&!t||n.time===`day`&&t))}var pu=[],mu=new Map,hu=1;function gu(e){return e.split(`_`).map(e=>e.length<=2?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}function _u(e,t={}){let n={id:hu++,name:e,display:t.display||gu(e),cat:t.cat||`misc`,icon:t.icon||{kind:`gem`,color:`#cfcfcf`},stack:t.stack??64,rarity:t.rarity||`common`,desc:t.desc||``,tool:t.tool||null,damage:t.damage||0,speed:t.speed||1,durability:t.durability||0,tier:t.tier||0,food:t.food||null,armor:t.armor||null,ranged:t.ranged||!1,place:t.place||null,use:t.use||null,value:t.value||0};return pu.push(n),mu.set(e,n),n}var vu={wooden:{color:`#b08a52`,dark:`#7b5c32`,level:1,speed:2,bonus:0,durability:59,rarity:`common`},stone:{color:`#9a9a9a`,dark:`#6a6a6a`,level:2,speed:4,bonus:1,durability:131,rarity:`common`},iron:{color:`#d8d8d8`,dark:`#9a9a9a`,level:3,speed:6,bonus:2,durability:250,rarity:`common`},golden:{color:`#f8c627`,dark:`#c89a10`,level:1,speed:12,bonus:0,durability:32,rarity:`rare`},diamond:{color:`#4fe3dc`,dark:`#2a9a94`,level:4,speed:8,bonus:3,durability:1561,rarity:`rare`},netherite:{color:`#5a4a52`,dark:`#33272d`,level:5,speed:9,bonus:4,durability:2031,rarity:`epic`}},yu={sword:{label:`Sword`,icon:`sword`,damage:[4,5,6,4,7,8],desc:`A balanced blade for close combat.`},pickaxe:{label:`Pickaxe`,icon:`pickaxe`,damage:[2,3,4,2,5,6],desc:`Mines stone, ore and deepslate.`},axe:{label:`Axe`,icon:`axe`,damage:[7,9,9,7,9,10],desc:`Chops wood — and hits hard.`},shovel:{label:`Shovel`,icon:`shovel`,damage:[2.5,3.5,4.5,2.5,5.5,6.5],desc:`Digs dirt, sand, gravel and snow.`},hoe:{label:`Hoe`,icon:`hoe`,damage:[1,1,1,1,1,1],desc:`Tills soil and harvests plants.`}},bu=Object.keys(vu),xu=Object.keys(yu);for(let e of xu)for(let t=0;t<bu.length;t++){let n=bu[t],r=vu[n],i=yu[e];_u(`${n===`wooden`?`wooden`:n}_${e}`,{display:`${n===`golden`?`Golden`:gu(n)} ${i.label}`,cat:`tools`,icon:{kind:i.icon,color:r.color,dark:r.dark},stack:1,rarity:r.rarity,damage:i.damage[t],speed:e===`sword`?1.5:e===`axe`?r.speed*.8:r.speed,durability:e===`sword`?Math.round(r.durability*1.15):r.durability,tier:r.level,tool:e,desc:i.desc})}_u(`bow`,{cat:`tools`,icon:{kind:`bow`,color:`#b08a52`,dark:`#6b4a22`},stack:1,rarity:`common`,damage:6,ranged:!0,durability:384,desc:`Draw and loose arrows at a distance.`}),_u(`crossbow`,{cat:`tools`,icon:{kind:`crossbow`,color:`#8a6a3a`,dark:`#4a3018`},stack:1,rarity:`common`,damage:11,ranged:!0,durability:465,desc:`A powerful crossbow with a slow, heavy shot.`}),_u(`trident`,{cat:`tools`,icon:{kind:`trident`,color:`#3ac8c8`,dark:`#1a7a7a`},stack:1,rarity:`rare`,damage:9,speed:1.2,durability:250,desc:`A legendary weapon of the drowned. Throwable.`}),_u(`mace`,{cat:`tools`,icon:{kind:`mace`,color:`#5a5a62`,dark:`#2a2a30`},stack:1,rarity:`epic`,damage:13,speed:1,durability:500,desc:`A heavy weapon that slams down from above.`}),_u(`shield`,{cat:`combat`,icon:{kind:`shield`,color:`#8a6a3a`,dark:`#4a3018`},stack:1,rarity:`common`,damage:0,desc:`Raise it to block incoming attacks.`}),_u(`fishing_rod`,{cat:`tools`,icon:{kind:`rod`,color:`#b08a52`,dark:`#6b4a22`},stack:1,damage:0,durability:64,desc:`Cast into water for fish and treasure.`}),_u(`shears`,{cat:`tools`,icon:{kind:`shears`,color:`#d8d8d8`,dark:`#8a8a8a`},stack:1,tool:`shears`,speed:5,durability:238,desc:`Shears wool and trims leaves.`}),_u(`flint_and_steel`,{cat:`tools`,icon:{kind:`flint`,color:`#8a8a8a`,dark:`#5a5a5a`},stack:1,durability:64,desc:`Strikes sparks to light fires.`}),_u(`brush`,{cat:`tools`,icon:{kind:`brush`,color:`#b08a52`,dark:`#d8b83a`},stack:1,durability:64,desc:`Brushes away sand and gravel to reveal treasures.`}),_u(`spyglass`,{cat:`tools`,icon:{kind:`spyglass`,color:`#c8a83a`,dark:`#3a3a40`},stack:1,desc:`Zoom in on distant horizons.`}),_u(`goat_horn`,{cat:`tools`,icon:{kind:`horn`,color:`#c8c0b0`,dark:`#8a8270`},stack:1,desc:`A haunting horn. It carries for miles.`}),_u(`elytra`,{cat:`combat`,icon:{kind:`elytra`,color:`#b8b8c8`,dark:`#6a6a7a`},stack:1,rarity:`epic`,desc:`Glide across the world on insectile wings.`});var Su={leather:{color:`#a06a3a`,dark:`#6a4220`,def:[1,3,2,1],dur:[55,80,75,65],rarity:`common`},chainmail:{color:`#b8b8c0`,dark:`#7a7a84`,def:[2,5,4,1],dur:[165,240,225,195],rarity:`common`},iron:{color:`#d8d8d8`,dark:`#8a8a8a`,def:[2,6,5,2],dur:[165,240,225,195],rarity:`common`},golden:{color:`#f8c627`,dark:`#c89a10`,def:[2,5,3,1],dur:[77,112,105,91],rarity:`rare`},diamond:{color:`#4fe3dc`,dark:`#2a9a94`,def:[3,8,6,3],dur:[363,528,495,429],rarity:`rare`},netherite:{color:`#5a4a52`,dark:`#33272d`,def:[3,8,6,3],dur:[407,592,555,481],rarity:`epic`}},Cu=[[`helmet`,0],[`chestplate`,1],[`leggings`,2],[`boots`,3]];for(let[e,t]of Object.entries(Su))for(let[n,r]of Cu)_u(`${e}_${n}`,{display:`${e===`golden`?`Golden`:gu(e)} ${gu(n)}`,cat:`combat`,icon:{kind:`armor`,piece:n,color:t.color,dark:t.dark},stack:1,rarity:t.rarity,armor:{slot:n,defense:t.def[r],durability:t.dur[r]},desc:`Protective ${e} armour for your ${n}.`});for(let[e,t,n,r,i,a]of[[`apple`,`#d83a3a`,4,2.4,`A crisp red apple.`,`food`],[`golden_apple`,`#f8d83a`,4,9.6,`A shimmering golden apple. It heals and protects.`,`food`],[`enchanted_golden_apple`,`#f8e88a`,4,9.6,`A legendary apple, humming with enchantment.`,`food`],[`bread`,`#c89a4a`,5,6,`A warm loaf of bread.`,`food`],[`porkchop`,`#e88a7a`,3,1.8,`Raw porkchop. Better cooked.`,`food`],[`cooked_porkchop`,`#c87a4a`,8,12.8,`Juicy cooked porkchop.`,`food`],[`beef`,`#c84a4a`,3,1.8,`Raw beef.`,`food`],[`steak`,`#8a4a2a`,8,12.8,`A perfectly seared steak.`,`food`],[`chicken`,`#e8b8a0`,2,1.2,`Raw chicken. Cook it first.`,`food`],[`cooked_chicken`,`#c88a4a`,6,7.2,`Golden roast chicken.`,`food`],[`mutton`,`#c86a6a`,2,1.2,`Raw mutton.`,`food`],[`cooked_mutton`,`#a85a3a`,6,9.6,`A hearty cooked mutton chop.`,`food`],[`rabbit`,`#c89a8a`,3,1.8,`Raw rabbit.`,`food`],[`cooked_rabbit`,`#b87a4a`,5,6,`Tender cooked rabbit.`,`food`],[`cod`,`#c8b89a`,2,.4,`A raw cod.`,`fish`],[`salmon`,`#e87a6a`,2,.4,`A raw salmon.`,`fish`],[`tropical_fish`,`#f8a83a`,1,.2,`A colourful tropical fish.`,`fish`],[`pufferfish`,`#d8c84a`,1,.2,`A spiky pufferfish. Poisonous.`,`fish`],[`cooked_cod`,`#d8b88a`,5,6,`Flaky cooked cod.`,`fish`],[`cooked_salmon`,`#d87a5a`,6,9.6,`Cooked salmon, rich and savoury.`,`fish`],[`carrot`,`#f08a2a`,3,3.6,`A crunchy orange carrot.`,`food`],[`golden_carrot`,`#f8c83a`,6,14.4,`A golden carrot. Excellent for eyesight.`,`food`],[`potato`,`#c8a86a`,1,.6,`A raw potato.`,`food`],[`baked_potato`,`#d8a84a`,5,6,`A fluffy baked potato.`,`food`],[`poisonous_potato`,`#9a9a4a`,2,1.2,`A sickly green potato. Probably avoid.`,`food`],[`beetroot`,`#a82a3a`,1,1.2,`A deep red beetroot.`,`food`],[`beetroot_soup`,`#8a1a2a`,6,7.2,`A warming bowl of beetroot soup.`,`food`],[`mushroom_stew`,`#b88a5a`,6,7.2,`A hearty mushroom stew.`,`food`],[`rabbit_stew`,`#b87a4a`,10,12,`A rich rabbit stew.`,`food`],[`cookie`,`#b87a3a`,2,.4,`A sweet little cookie.`,`food`],[`cake`,`#f0e0d0`,2,.4,`A whole cake. Somehow fits in your pocket.`,`food`],[`pumpkin_pie`,`#d88a3a`,8,4.8,`Spiced pumpkin pie.`,`food`],[`melon_slice`,`#e85a4a`,2,1.2,`A cool, juicy melon slice.`,`food`],[`sweet_berries`,`#c82a3a`,2,.4,`Tart red berries.`,`food`],[`glow_berries`,`#f8b83a`,2,.4,`Berries that glow with soft light.`,`food`],[`honey_bottle`,`#f8b83a`,6,1.2,`A bottle of sweet honey.`,`drink`],[`milk_bucket`,`#f0f0f0`,0,0,`A bucket of milk. Clears all effects.`,`drink`],[`chorus_fruit`,`#a86aa8`,4,2.4,`A strange fruit that teleports you.`,`food`],[`dried_kelp`,`#3a6a3a`,1,.6,`Chewy dried kelp.`,`food`]])_u(e,{cat:`food`,icon:a===`fish`?{kind:`fish`,color:t}:a===`drink`?{kind:`potion`,color:t}:{kind:`food`,color:t},stack:[`mushroom_stew`,`beetroot_soup`,`rabbit_stew`,`honey_bottle`,`milk_bucket`].includes(e)?1:64,food:{hunger:n,saturation:r,heal:e.includes(`golden`)?4:+(e===`apple`)},rarity:e.includes(`enchanted`)?`legendary`:e.includes(`golden`)?`rare`:`common`,desc:i});for(let[e,t,n,r]of[[`stick`,`#b08a52`,`A simple wooden stick.`],[`coal`,`#222226`,`A lump of black coal. Fuel for furnaces.`],[`charcoal`,`#2e2a26`,`Charcoal made by burning wood.`],[`iron_ingot`,`#d8d8d8`,`A refined iron ingot.`],[`gold_ingot`,`#f8c627`,`A gleaming gold ingot.`],[`copper_ingot`,`#c06a3c`,`A conductive copper ingot.`],[`netherite_ingot`,`#4a3a44`,`A rare and mighty netherite ingot.`],[`netherite_scrap`,`#5a3a30`,`A shard of ancient debris.`],[`iron_nugget`,`#c8c8c8`,`A tiny piece of iron.`],[`gold_nugget`,`#e8b83a`,`A tiny piece of gold.`],[`diamond`,`#4fe3dc`,`A brilliant blue diamond.`],[`emerald`,`#35d15a`,`A vivid green emerald.`],[`lapis_lazuli`,`#2a56b8`,`Deep blue lapis lazuli.`],[`redstone`,`#c62828`,`A pinch of glowing redstone dust.`],[`quartz`,`#ece6dd`,`A shard of nether quartz.`],[`amethyst_shard`,`#a86ae8`,`A splinter of purple amethyst.`],[`clay_ball`,`#9aa4b0`,`A ball of soft grey clay.`],[`brick`,`#a05a3a`,`A fired clay brick.`],[`flint`,`#5a5a5a`,`A sharp shard of flint.`],[`feather`,`#f0f0e8`,`A soft white feather.`],[`leather`,`#a06a3a`,`A cured piece of leather.`],[`rabbit_hide`,`#b88a6a`,`A soft rabbit hide.`],[`string`,`#e0e0e0`,`A length of spider silk.`],[`gunpowder`,`#6a6a6a`,`Dark explosive powder.`],[`bone`,`#e8e4d0`,`A dry white bone.`],[`bone_meal`,`#e8e4d0`,`Crushed bone, good for plants.`],[`slime_ball`,`#6aa84a`,`A wobbly ball of slime.`],[`magma_cream`,`#d87a2a`,`A glowing glob of magma cream.`],[`blaze_rod`,`#f8c83a`,`A rod wreathed in flame.`],[`blaze_powder`,`#f8a83a`,`Ground blaze rod, hot to the touch.`],[`ender_pearl`,`#1b6a5a`,`A pearl that hums with void energy.`],[`eye_of_ender`,`#5a9a4a`,`An ender pearl fused with blaze powder.`],[`ghast_tear`,`#e8e8f8`,`A cold tear from a ghast.`],[`phantom_membrane`,`#8a7a6a`,`A thin, leathery membrane.`],[`shulker_shell`,`#a87aa8`,`A fragment of a shulker shell.`],[`nether_star`,`#e8e8b8`,`A star forged from a wither.`],[`echo_shard`,`#1b4a5a`,`A shard that echoes the deep dark.`],[`heart_of_the_sea`,`#2a6a9a`,`A heart-shaped crystal from the ocean.`],[`nautilus_shell`,`#e8d8c8`,`A spiral shell of the nautilus.`],[`prismarine_shard`,`#5a9a8a`,`A shard of prismarine.`],[`prismarine_crystals`,`#8ac8b8`,`Glowing prismarine crystals.`],[`ink_sac`,`#1a1a22`,`A sac of black ink.`],[`glow_ink_sac`,`#3ad8c8`,`A sac of glowing ink.`],[`sugar`,`#f0f0f0`,`Sweet white sugar.`],[`wheat`,`#d8c85a`,`Golden wheat, ready to bake.`],[`wheat_seeds`,`#8ac85a`,`Tiny green wheat seeds.`],[`paper`,`#f0f0e8`,`A sheet of clean paper.`],[`book`,`#b08a52`,`A bound book of blank pages.`],[`experience_bottle`,`#a8e83a`,`A bottle of swirling experience.`],[`firework_rocket`,`#e8e8e8`,`A firework rocket. Point away from face.`],[`firework_star`,`#f8d83a`,`A firework star, ready to burst.`],[`wind_charge`,`#b8e8e8`,`A charge of compressed wind.`],[`heart_of_the_sea_2`,`#2a6a9a`,`A second heart of the sea.`,`heart_2`],[`music_disc_13`,`#3a3a3a`,`A mysterious music disc.`,`disc`],[`music_disc_cat`,`#4a6a3a`,`A music disc. C418 — Cat.`,`disc`],[`music_disc_blocks`,`#6a4a2a`,`A music disc. C418 — Blocks.`,`disc`],[`music_disc_chirp`,`#8a3a2a`,`A music disc. C418 — Chirp.`,`disc`],[`music_disc_far`,`#3a6a4a`,`A music disc. C418 — Far.`,`disc`],[`music_disc_mall`,`#5a3a6a`,`A music disc. C418 — Mall.`,`disc`],[`music_disc_mellohi`,`#6a5a3a`,`A music disc. C418 — Mellohi.`,`disc`],[`music_disc_stal`,`#3a3a4a`,`A music disc. C418 — Stal.`,`disc`],[`music_disc_strad`,`#c8a85a`,`A music disc. C418 — Strad.`,`disc`],[`music_disc_ward`,`#4a6a3a`,`A music disc. C418 — Ward.`,`disc`],[`music_disc_11`,`#5a5a5a`,`A music disc. C418 — 11.`,`disc`],[`music_disc_wait`,`#4a5a7a`,`A music disc. C418 — Wait.`,`disc`],[`music_disc_pigstep`,`#8a2a2a`,`A music disc. Lena Raine — Pigstep.`,`disc`],[`music_disc_otherside`,`#2a6a5a`,`A music disc. Lena Raine — Otherside.`,`disc`],[`music_disc_5`,`#5a3a2a`,`A music disc. Samuel Åberg — 5.`,`disc`],[`music_disc_relic`,`#6a5a3a`,`A music disc. Aaron Cherof — Relic.`,`disc`],[`music_disc_creator`,`#6a4a6a`,`A music disc. Lena Raine — Creator.`,`disc`],[`music_disc_creator_music_box`,`#8a6a4a`,`A music disc. Lena Raine — Creator (Music Box).`,`disc`],[`music_disc_precipice`,`#4a4a6a`,`A music disc. Aaron Cherof — Precipice.`,`disc`]])_u(e,{cat:`ingredients`,icon:{kind:r===`disc`?`disc`:/nugget/.test(e)?`nugget`:/ingot|scrap/.test(e)?`ingot`:/shard|crystal|pearl|diamond|emerald|lapis|quartz|amethyst|star|heart|shell/.test(e)?`gem`:/dust|powder|meal|sugar|redstone/.test(e)?`dust`:/seed/.test(e)?`seeds`:`misc`,color:t},desc:n,rarity:/netherite|nether_star|echo|heart|eye|elytra/.test(e)?`epic`:/diamond|emerald|amethyst|blaze|ghast|shulker|prismarine/.test(e)?`rare`:`common`});for(let[e,t,n]of[[`bucket`,`#c8c8c8`,`An empty iron bucket.`],[`water_bucket`,`#3a7ac8`,`A bucket full of water.`],[`lava_bucket`,`#e86a1a`,`A bucket of molten lava. Handle with care.`],[`powder_snow_bucket`,`#eef5f7`,`A bucket of powder snow.`],[`cod_bucket`,`#c8b89a`,`A bucket with a cod in it.`],[`salmon_bucket`,`#e87a6a`,`A bucket with a salmon in it.`],[`tropical_fish_bucket`,`#f8a83a`,`A bucket with a tropical fish.`],[`pufferfish_bucket`,`#d8c84a`,`A bucket with a pufferfish.`],[`axolotl_bucket`,`#e8a8c8`,`A bucket with an axolotl.`],[`tadpole_bucket`,`#6a8a4a`,`A bucket with a tadpole.`]])_u(e,{cat:`tools`,icon:{kind:`bucket`,color:t},stack:1,desc:n});_u(`water_bucket_place`,{display:`Water Bucket`,cat:`tools`,icon:{kind:`bucket`,color:`#3a7ac8`},stack:1,desc:`Places a block of water.`,place:`water`});for(let[e,t,n]of[[`potion`,`#c84ab8`,`A mysterious potion.`],[`splash_potion`,`#c84ab8`,`A potion that splashes on impact.`],[`lingering_potion`,`#c84ab8`,`A potion that leaves a cloud behind.`],[`potion_of_healing`,`#e84a6a`,`Restores health instantly.`],[`potion_of_swiftness`,`#4ae8c8`,`Grants a burst of speed.`],[`potion_of_strength`,`#c82a2a`,`Increases attack damage.`],[`potion_of_night_vision`,`#3a5ac8`,`See clearly in the dark.`],[`potion_of_fire_resistance`,`#e8a03a`,`Protects against fire and lava.`],[`potion_of_water_breathing`,`#3a8ae8`,`Breathe underwater.`],[`potion_of_invisibility`,`#c8c8d8`,`Become unseen.`]])_u(e,{cat:`ingredients`,icon:{kind:`potion`,color:t},stack:1,rarity:`rare`,desc:n});_u(`compass`,{cat:`tools`,icon:{kind:`compass`,color:`#c8c8c8`},stack:1,desc:`Points toward your spawn point.`}),_u(`recovery_compass`,{cat:`tools`,icon:{kind:`compass`,color:`#3a8a8a`},stack:1,rarity:`rare`,desc:`Points to where you last died.`}),_u(`clock`,{cat:`tools`,icon:{kind:`clock`,color:`#e8c85a`},stack:1,desc:`Shows the time of day.`}),_u(`map`,{cat:`tools`,icon:{kind:`map`,color:`#d8d0b0`},stack:1,desc:`A map of the surrounding land.`}),_u(`empty_map`,{cat:`tools`,icon:{kind:`map`,color:`#e8e0c8`},stack:1,desc:`A blank map waiting to be filled.`}),_u(`spyglass_zoom`,{display:`Spyglass Lens`,cat:`tools`,icon:{kind:`gem`,color:`#8ae8e8`},stack:1,desc:`A polished lens.`}),_u(`saddle`,{cat:`tools`,icon:{kind:`saddle`,color:`#a06a3a`},stack:1,desc:`Saddle a horse, pig or strider.`}),_u(`name_tag`,{cat:`tools`,icon:{kind:`tag`,color:`#e8d8b0`},stack:1,desc:`Give a mob a custom name.`}),_u(`lead`,{cat:`tools`,icon:{kind:`lead`,color:`#c8a86a`},stack:1,desc:`Lead a friendly mob on a leash.`}),_u(`totem_of_undying`,{cat:`combat`,icon:{kind:`totem`,color:`#f8d83a`},stack:1,rarity:`legendary`,desc:`Cheats death once when held.`}),_u(`end_crystal`,{cat:`combat`,icon:{kind:`gem`,color:`#e87ae8`},stack:64,rarity:`epic`,desc:`A crystal of the End. Heals the Ender Dragon.`}),_u(`arrow`,{cat:`combat`,icon:{kind:`arrow`,color:`#c8a86a`},stack:64,desc:`A sharp arrow.`}),_u(`spectral_arrow`,{cat:`combat`,icon:{kind:`arrow`,color:`#e8c83a`},stack:64,desc:`An arrow that reveals invisible foes.`}),_u(`tipped_arrow`,{cat:`combat`,icon:{kind:`arrow`,color:`#8ac84a`},stack:64,desc:`An arrow coated in potion.`}),_u(`fire_charge`,{cat:`combat`,icon:{kind:`dust`,color:`#e86a1a`},stack:64,desc:`A ball of fire, ready to throw.`}),_u(`snowball`,{cat:`combat`,icon:{kind:`gem`,color:`#f0f8f8`},stack:16,desc:`A packed snowball.`}),_u(`egg`,{cat:`combat`,icon:{kind:`egg`,color:`#f0ead8`,spots:`#d8c8a8`},stack:16,desc:`A chicken egg. Throwable.`}),_u(`ender_eye_use`,{display:`Eye of Ender`,cat:`tools`,icon:{kind:`gem`,color:`#5a9a4a`},stack:64,rarity:`rare`,desc:`Points toward the nearest stronghold.`});for(let e of cu)_u(`${e.id}_spawn_egg`,{display:`${e.name} Spawn Egg`,cat:`eggs`,icon:{kind:`egg`,color:e.egg[0],spots:e.egg[1]},stack:64,rarity:e.boss?`legendary`:e.hostile?`rare`:`common`,desc:`Spawn a ${e.name}. ${e.desc}`,spawn:e.id});var wu=Array(pu.length+1).fill(null);for(let e of pu)wu[e.id]=e;function Tu(e){return mu.get(e)||null}var Eu=pu.filter(e=>e.cat===`tools`&&e.tool).length;pu.filter(e=>e.cat===`eggs`).length;function Du(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Ou(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ku(e,t,n=0){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,1442695041);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function Au(e,t,n,r=0){let i=Math.imul(e|0,374761393)^Math.imul(t|0,1103515245)^Math.imul(n|0,668265263)^Math.imul(r|0,1442695041);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function ju(e,t,n){return e<t?t:e>n?n:e}function Mu(e,t,n){let r=ju((n-e)/(t-e),0,1);return r*r*(3-2*r)}var Nu=32,H=16,Pu=null,Fu=null,Iu=1,Lu=0,Ru=new Map,zu=new Map;function Bu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t.padEnd(6,`0`);return[parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16)]}function Vu(e,t,n){return`#`+[e,t,n].map(e=>Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,`0`)).join(``)}function U(e,t,n=1){let[r,i,a]=Bu(e);return n>=1?Vu(r*t,i*t,a*t):`rgba(${Math.round(r*t)},${Math.round(i*t)},${Math.round(a*t)},${n})`}function Hu(e,t,n){let r=Bu(e),i=Bu(t);return Vu(r[0]+(i[0]-r[0])*n,r[1]+(i[1]-r[1])*n,r[2]+(i[2]-r[2])*n)}function Uu(){let e=document.createElement(`canvas`);e.width=H,e.height=H;let t=e.getContext(`2d`);return t.imageSmoothingEnabled=!1,{canvas:e,ctx:t}}function Wu(e,t,n,r){t<0||n<0||t>=H||n>=H||(e.fillStyle=r,e.fillRect(t,n,1,1))}function W(e,t,n,r,i,a){e.fillStyle=a,e.fillRect(t,n,r,i)}function G(e,t,n,r=.1){for(let i=0;i<H;i++)for(let a=0;a<H;a++){let o=1+(t()*2-1)*r;Wu(e,a,i,U(n,o))}}function Gu(e,t,n,r=10,i=1){for(let a=0;a<r;a++)W(e,Math.floor(t()*H),Math.floor(t()*H),i,i,n)}function Ku(e,t,n,r,i,a){let o=Math.abs(r-t),s=-Math.abs(i-n),c=t<r?1:-1,l=n<i?1:-1,u=o+s;for(;Wu(e,t,n,a),t!==r||n!==i;){let e=2*u;e>=s&&(u+=s,t+=c),e<=o&&(u+=o,n+=l)}}function qu(e,t,n,r,i,a){for(let o=-i;o<=i;o++)for(let s=-i;s<=i;s++)s*s+o*o<=i*i+t()*.8&&Wu(e,n+s,r+o,U(a,.92+t()*.16))}function Ju(e,t){e.fillStyle=t,e.fillRect(0,0,H,1),e.fillRect(0,15,H,1),e.fillRect(0,0,1,H),e.fillRect(15,0,1,H)}function Yu(e,t,n){e.fillStyle=t,e.fillRect(0,0,H,1),e.fillRect(0,0,1,H),e.fillStyle=n,e.fillRect(0,15,H,1),e.fillRect(15,0,1,H)}var Xu={stone(e,t,n){let r=n[0]||`#8d8d8d`;G(e,t,r,.09),Gu(e,t,U(r,.84),12),Gu(e,t,U(r,1.08),8)},mud(e,t,n){let r=n[0]||`#4a3a33`;G(e,t,r,.12);for(let n=0;n<10;n++)qu(e,t,Math.floor(t()*16),Math.floor(t()*16),1,U(r,.82+t()*.3));Gu(e,t,U(r,.66),8)},bricks(e,t,n){let r=n[0]||`#5a9a8a`;W(e,0,0,H,H,n[1]||`#3a6a60`);for(let n=0;n<4;n++){let i=n%2?4:0;for(let a=-1;a<3;a++){let o=a*8+i,s=n*4;W(e,o,s,7,3,U(r,.86+t()*.22)),W(e,o,s,7,1,U(r,1.12)),Wu(e,o+6,s+2,U(r,.72))}}Gu(e,t,U(r,1.16),6)},cobble(e,t,n){let r=n[0]||`#8a8a8a`;W(e,0,0,H,H,n[1]||U(r,.7));for(let[n,i,a,o]of[[0,0,7,6],[8,0,8,4],[0,7,4,9],[5,5,6,5],[5,11,4,5],[11,5,5,6],[9,12,7,4],[0,0,3,3]])W(e,n,i,a,o,U(r,.86+t()*.25)),W(e,n+1,i+1,Math.max(1,a-2),1,U(r,1.1)),W(e,n+1,i+o-2,Math.max(1,a-2),1,U(r,.76));Gu(e,t,U(r,.7),10)},brick(e,t,n){let r=n[0]||`#8d8d8d`;W(e,0,0,H,H,n[1]||`#6f6f6f`);for(let n=0;n<4;n++){let i=n%2?4:0;for(let a=-1;a<3;a++){let o=a*8+i,s=n*4;W(e,o,s,7,3,U(r,.88+t()*.2)),W(e,o,s,7,1,U(r,1.08))}}Gu(e,t,U(r,.8),8)},chisel(e,t,n){let r=n[0]||`#8d8d8d`,i=n[1]||U(r,.72);G(e,t,r,.07),Ju(e,i),W(e,2,2,12,12,U(r,.92)),W(e,3,3,10,10,r),W(e,4,4,8,8,i),W(e,5,5,6,6,U(r,1.06)),W(e,6,6,4,4,i),W(e,7,7,2,2,U(r,1.15)),Gu(e,t,U(r,.82),5)},deepslate(e,t,n){let r=n[0]||`#4a4a50`;G(e,t,r,.1);for(let n=0;n<12;n++)W(e,Math.floor(t()*H),Math.floor(t()*H),1,2+Math.floor(t()*3),U(r,.82));Gu(e,t,U(r,1.14),5)},obsidian(e,t,n){G(e,t,n[0]||`#1b1428`,.24),Gu(e,t,`#5a3a8a`,9),Gu(e,t,`#8a6ab8`,4),Ku(e,2,12,12,3,`rgba(160,120,220,0.4)`)},ore(e,t,n){let r=n[0]||`#8d8d8d`,i=n[1]||`#f8d83a`;G(e,t,r,.08),Gu(e,t,U(r,.84),9);for(let n=0;n<5;n++){let n=2+Math.floor(t()*12),r=2+Math.floor(t()*12);qu(e,t,n,r,t()<.4?2:1,i),Wu(e,n-1,r-1,U(i,1.35)),Wu(e,n,r+1,U(i,.7))}},debris(e,t,n){let r=n[0]||`#5a3a30`,i=n[1]||`#8a5a3a`;G(e,t,r,.14);for(let n=0;n<7;n++)W(e,Math.floor(t()*14),Math.floor(t()*14),2+Math.floor(t()*2),1,U(i,.8+t()*.5));Gu(e,t,`#2a1a14`,10)},metal(e,t,n){let r=n[0]||`#c8c8c8`;G(e,t,r,.05),Ju(e,U(r,.72)),Yu(e,U(r,1.18),U(r,.76)),W(e,2,2,12,12,U(r,.94));for(let[t,n]of[[3,3],[12,3],[3,12],[12,12]])W(e,t,n,1,1,U(r,1.25));Ku(e,3,8,12,8,U(r,.86))},copper(e,t,n){let r=n[0]||`#c06a3c`;G(e,t,r,.08),Ju(e,U(r,.76)),Yu(e,U(r,1.12),U(r,.8));for(let n=0;n<16;n++)Wu(e,Math.floor(t()*H),Math.floor(t()*H),t()<.5?Hu(r,`#4f9a84`,.7):U(r,.8));W(e,3,3,2,2,U(r,1.2)),W(e,11,11,2,2,U(r,.78))},amethyst(e,t,n){let r=n[0]||`#8a5ac8`,i=n[1]||`#c9a6f0`;G(e,t,r,.12);for(let n=0;n<6;n++){let n=Math.floor(t()*12),r=Math.floor(t()*12),a=2+Math.floor(t()*4);e.fillStyle=U(i,.75+t()*.5),e.beginPath(),e.moveTo(n,r+a),e.lineTo(n+a,r),e.lineTo(n+a,r+a),e.closePath(),e.fill()}Ju(e,U(r,.7))},dirt(e,t,n){let r=n[0]||`#8a5a3c`;G(e,t,r,.13),Gu(e,t,U(r,.78),15),Gu(e,t,U(r,1.12),6),Gu(e,t,`#5a3a24`,3)},gravel(e,t,n){let r=n[0]||`#8a8580`,i=n[1]||`#5f5b57`;G(e,t,r,.14);for(let n=0;n<16;n++)W(e,Math.floor(t()*H),Math.floor(t()*H),1+Math.floor(t()*2),1+Math.floor(t()*2),U(t()<.5?r:i,.85+t()*.3))},sand(e,t,n){let r=n[0]||`#e0d3a0`;G(e,t,r,.055),Gu(e,t,U(r,.87),22),Gu(e,t,U(r,1.08),10)},sandstone(e,t,n){let r=n[0]||`#e0d3a0`;G(e,t,r,.04);for(let t=0;t<H;t+=4)W(e,0,t,H,1,U(r,.88));Gu(e,t,U(r,.92),12),Gu(e,t,U(r,1.05),8)},sandstone_side(e,t,n){let r=n[0]||`#e0d3a0`;G(e,t,r,.04),W(e,0,0,H,3,U(r,1.06)),W(e,0,12,H,1,U(r,.86)),Gu(e,t,U(r,.9),14)},grass_top(e,t,n){let r=n[0]||`#6d9e46`;G(e,t,r,.12);for(let n=0;n<26;n++)W(e,Math.floor(t()*H),Math.floor(t()*H),1,1,U(r,.75+t()*.55));for(let n=0;n<10;n++)W(e,Math.floor(t()*H),Math.floor(t()*H),1,2,U(r,.82))},grass_side(e,t,n){let r=n[0]||`#6d9e46`,i=n[1]||`#8a5a3c`;G(e,t,i,.12),Gu(e,t,U(i,.8),12),W(e,0,0,H,3,r);for(let n=0;n<H;n++){let i=2+Math.floor(t()*4);W(e,n,0,1,i,U(r,.88+t()*.24))}for(let n=0;n<10;n++)Wu(e,Math.floor(t()*H),3+Math.floor(t()*3),U(r,.9))},farmland(e,t,n){let r=n[0]||`#6a442e`;G(e,t,r,.1);for(let t=1;t<H;t+=4)W(e,0,t,H,1,U(r,.78));Gu(e,t,U(r,1.12),10)},snow(e,t,n){let r=n[0]||`#f2f7f8`;G(e,t,r,.03),Gu(e,t,U(r,.92),14),Gu(e,t,`#ffffff`,8)},ice(e,t,n){G(e,t,n[0]||`#9ed6f0`,.06);for(let n=0;n<4;n++)Ku(e,Math.floor(t()*16),0,Math.floor(t()*16),15,`rgba(230,250,255,0.55)`);Gu(e,t,`#e8faff`,5)},moss(e,t,n){let r=n[0]||`#5a8a3a`;G(e,t,r,.16);for(let n=0;n<12;n++)qu(e,t,Math.floor(t()*16),Math.floor(t()*16),1,U(r,.85+t()*.35))},sculk(e,t,n){let r=n[0]||`#16363a`;G(e,t,r,.2);for(let n=0;n<9;n++)Wu(e,Math.floor(t()*16),Math.floor(t()*16),t()<.4?`#3ac8b8`:U(r,.7))},sensor(e,t,n){G(e,t,n[0]||`#1b4044`,.18),Ju(e,`#0e2428`);for(let t=2;t<=5;t++)e.strokeStyle=`rgba(70,210,200,0.55)`,e.beginPath(),e.arc(8,8,t,0,Math.PI*2),e.stroke();W(e,6,6,4,4,`#5ae8d8`),W(e,7,7,2,2,`#c8fff8`)},shrieker(e,t,n){G(e,t,n[0]||`#14333a`,.2);for(let t=0;t<5;t++)W(e,4+t,10-t,8-t*2,1,`#0a1a1e`);W(e,5,5,6,6,`#0a1a1e`),W(e,6,6,4,4,`#2a8a7a`),Wu(e,7,7,`#8affe8`),Wu(e,8,7,`#8affe8`)},bone(e,t,n){let r=n[0]||`#d8d2bd`;G(e,t,r,.05);for(let t=3;t<16;t+=5)W(e,0,t,H,1,U(r,.78));for(let t=2;t<16;t+=5)W(e,t,0,1,H,U(r,.86))},honey(e,t,n){let r=n[0]||`#e8a33a`;G(e,t,r,.05);for(let t=0;t<16;t+=4)for(let n=t/4%2?2:0;n<16;n+=4)W(e,n,t,3,3,U(r,1.08)),Wu(e,n+1,t+1,U(r,.82))},slime(e,t,n){G(e,t,n[0]||`#6aa84a`,.08),W(e,3,3,6,3,`rgba(200,255,170,0.35)`),W(e,4,12,8,1,`rgba(40,100,30,0.4)`)},sponge(e,t,n){let r=n[0]||`#c9c45a`;G(e,t,r,.07);for(let n=0;n<26;n++)Wu(e,Math.floor(t()*16),Math.floor(t()*16),U(r,.62))},soulsand(e,t,n){G(e,t,n[0]||`#5a4433`,.12);for(let t=0;t<3;t++){let n=2+t*5,r=3+t%2*5;W(e,n,r,3,2,`#3a2a1e`),Wu(e,n+1,r+2,`#2a1a12`),Wu(e,n,r+2,`#2a1a12`)}Gu(e,t,`#2a1e14`,12)},netherrack(e,t,n){let r=n[0]||`#6a3030`;G(e,t,r,.18);for(let n=0;n<9;n++)Ku(e,Math.floor(t()*16),Math.floor(t()*16),Math.floor(t()*16),Math.floor(t()*16),U(r,.68));Gu(e,t,U(r,1.25),8)},basalt(e,t,n){let r=n[0]||`#4a4a50`,i=n[1]||`#303036`;G(e,t,r,.08);for(let t=0;t<16;t+=3)W(e,t,0,1,16,i);Gu(e,t,U(r,1.15),5)},blackstone(e,t,n){let r=n[0]||`#2e2a2e`;G(e,t,r,.16),Gu(e,t,U(r,1.3),8),Gu(e,t,`#4a3a6a`,4)},gilded(e,t,n){let r=n[0]||`#2e2a2e`,i=n[1]||`#e8b83a`;G(e,t,r,.16);for(let n=0;n<5;n++)Ku(e,Math.floor(t()*16),Math.floor(t()*16),Math.floor(t()*16),Math.floor(t()*16),i);Gu(e,t,U(i,1.2),5)},wart(e,t,n){let r=n[0]||`#7a1f2a`;G(e,t,r,.14);for(let n=0;n<18;n++)Wu(e,Math.floor(t()*16),Math.floor(t()*16),U(r,.65));Gu(e,t,U(r,1.25),8)},glow(e,t,n){let r=n[0]||`#e8c85a`;G(e,t,r,.05);for(let n=0;n<12;n++){let n=Math.floor(t()*14),i=Math.floor(t()*14);W(e,n,i,2,2,U(r,.8+t()*.45)),Wu(e,n,i,`#fff8c8`)}},magma(e,t,n){let r=n[0]||`#8a3a1a`,i=n[1]||`#f8a83a`;G(e,t,r,.15);for(let n=0;n<7;n++){let n=Math.floor(t()*16),r=Math.floor(t()*16);W(e,n,r,1+Math.floor(t()*3),1,i),Wu(e,n,r-1,U(i,1.2))}Gu(e,t,`#2a0a04`,12)},lantern(e,t,n){let r=n[0]||`#e8c85a`;W(e,0,0,16,16,U(r,.45)),W(e,3,2,10,12,r),W(e,4,3,8,10,U(r,1.15)),W(e,0,0,16,2,`#3a3a40`),W(e,0,14,16,2,`#3a3a40`),W(e,0,0,2,16,`#3a3a40`),W(e,14,0,2,16,`#3a3a40`),W(e,6,6,4,6,U(r,1.35))},endstone(e,t,n){let r=n[0]||`#d6d6a8`;G(e,t,r,.08),Gu(e,t,U(r,.85),18),Gu(e,t,U(r,1.07),8)},purpur(e,t,n){let r=n[0]||`#a86aa8`;G(e,t,r,.07);for(let t=0;t<16;t+=5)W(e,t,0,1,16,U(r,.8));for(let t=0;t<16;t+=5)W(e,0,t,16,1,U(r,.8));Gu(e,t,U(r,1.16),6)},purpur_side(e,t,n){let r=n[0]||`#a86aa8`;G(e,t,r,.07),W(e,2,0,3,16,U(r,.86)),W(e,6,0,4,16,U(r,1.08)),W(e,11,0,3,16,U(r,.9))},egg(e,t,n){let r=n[0]||`#2a2a33`,i=n[1]||`#8a5ac8`;G(e,t,r,.12);for(let n=0;n<9;n++)qu(e,t,2+Math.floor(t()*12),2+Math.floor(t()*12),1,i);Ju(e,U(r,.6))},rod(e,t,n){let r=n[0]||`#e8e0d0`;e.clearRect(0,0,16,16),W(e,7,1,2,14,r),W(e,7,1,1,14,U(r,1.2)),W(e,9,1,1,14,U(r,.75)),Wu(e,7,0,`#ffffff`),Wu(e,8,0,`#ffffff`);for(let t=3;t<14;t+=4)Wu(e,6,t,`rgba(255,255,255,0.3)`)},sealantern(e,t,n){let r=n[0]||`#b8e8d8`;G(e,t,r,.05);for(let n=0;n<14;n++)W(e,Math.floor(t()*16),Math.floor(t()*16),2,2,U(r,.79+t()*.4));Ju(e,`#6a9a8a`),W(e,6,6,4,4,`#f0fffa`)},coral(e,t,n){let r=n[0]||`#2a6ab8`;G(e,t,r,.12);for(let n=0;n<24;n++)qu(e,t,Math.floor(t()*16),Math.floor(t()*16),1,U(r,.7+t()*.65));Gu(e,t,U(r,1.25),9)},wool(e,t,n){let r=n[0]||`#e9ecec`,i=n[1]||U(r,.9);G(e,t,r,.04);for(let t=1;t<16;t+=3)for(let n=t%2?0:1;n<16;n+=3)W(e,n,t,1,1,i);Gu(e,t,U(r,.94),8)},concrete(e,t,n){let r=n[0]||`#888888`;G(e,t,r,.025),Gu(e,t,U(r,.95),8)},powder(e,t,n){let r=n[0]||`#888888`;G(e,t,r,.09),Gu(e,t,U(r,.8),20),Gu(e,t,U(r,1.15),12)},terracotta(e,t,n){let r=n[0]||`#a05a3a`,i=n[1]||U(r,.9);G(e,t,r,.045);for(let t=0;t<16;t+=5)W(e,0,t,16,1,i);Gu(e,t,U(r,.92),8)},glazed(e,t,n){let r=n[0]||`#888888`,i=n[1]||U(r,.65);W(e,0,0,16,16,r),W(e,0,0,8,8,U(r,1.12)),W(e,8,8,8,8,U(r,1.08));for(let t=0;t<8;t++)W(e,t,8-t,1,1,i),W(e,15-t,8+t,1,1,i);Ju(e,i)},glass(e,t,n){let r=n[0]||`#bfe8f0`;e.clearRect(0,0,16,16),W(e,0,0,16,1,U(r,.9,.85)),W(e,0,15,16,1,U(r,.9,.85)),W(e,0,0,1,16,U(r,.9,.85)),W(e,15,0,1,16,U(r,.9,.85)),W(e,2,2,12,12,U(r,1.05,.12)),Ku(e,3,12,11,4,`rgba(255,255,255,0.45)`),Ku(e,6,13,12,7,`rgba(255,255,255,0.3)`),Wu(e,2,2,`rgba(255,255,255,0.8)`)},shulker(e,t,n){let r=n[0]||`#8a6a8a`;G(e,t,r,.06),Ju(e,U(r,.64)),W(e,3,3,10,10,U(r,1.1)),W(e,5,5,6,6,U(r,.9)),Wu(e,7,7,`#f8e85a`),Wu(e,8,8,`#f8e85a`)},shulker_side(e,t,n){let r=n[0]||`#8a6a8a`,i=n[1]||U(r,.75);G(e,t,r,.06);for(let t=1;t<16;t+=4)W(e,t,0,2,16,U(r,1.08));for(let t=3;t<16;t+=4)W(e,t,0,1,16,i);W(e,0,0,16,2,U(r,1.15)),W(e,0,14,16,2,U(r,.7))},crafting(e,t,n){let r=n[0]||`#b08a52`,i=n[1]||`#7b5c32`;G(e,t,r,.04);for(let t=2;t<15;t+=4)W(e,0,t,16,1,i);for(let t=2;t<15;t+=4)W(e,t,0,1,16,i);W(e,2,2,4,4,U(r,1.12)),W(e,10,10,4,4,U(r,1.12)),Ju(e,U(r,.65))},furnace(e,t,n){let r=n[0]||`#8d8d8d`,i=n[1]||`#3a3a3a`;G(e,t,r,.07),Ju(e,U(r,.7)),W(e,3,7,10,7,i),W(e,4,8,8,5,`#1a1a1a`),W(e,6,10,4,2,`#e86a1a`),W(e,2,2,12,2,U(r,1.08))},chest(e,t,n){let r=n[0]||`#b08a52`,i=n[1]||`#5a3a1a`;G(e,t,r,.05),Ju(e,i),W(e,0,6,16,1,i),W(e,7,6,2,5,`#c8a83a`),W(e,7,8,2,2,`#8a6a1a`);for(let t=1;t<16;t+=4)W(e,t,1,1,5,U(r,.92))},barrel(e,t,n){let r=n[0]||`#8a6a3a`,i=n[1]||`#5a3a1a`;G(e,t,r,.05);for(let t=0;t<16;t+=4)W(e,t,0,1,16,i);W(e,0,2,16,1,`#4a4a50`),W(e,0,12,16,1,`#4a4a50`),Ju(e,U(r,.7))},bookshelf(e,t,n){let r=n[0]||`#b08a52`,i=n[1]||`#7b5c32`;G(e,t,r,.04),Ju(e,i);let a=[`#8a2a2a`,`#2a5a8a`,`#3a7a3a`,`#8a6a2a`,`#6a2a6a`,`#c8a83a`,`#2a7a7a`];for(let n of[2,9])for(let r=2;r<14;r+=2){let i=5+Math.floor(t()*2);W(e,r,n,1,i,a[Math.floor(t()*a.length)])}},smithing(e,t,n){let r=n[0]||`#4a4a50`,i=n[1]||`#8a6a3a`;G(e,t,r,.07),W(e,0,11,16,5,i),W(e,3,3,10,7,`#2a2a30`),W(e,5,5,6,3,`#8a8a90`),W(e,6,4,4,1,`#c8c8c8`)},loom(e,t,n){let r=n[0]||`#b08a52`,i=n[1]||`#7b5c32`;G(e,t,r,.04);for(let t=2;t<16;t+=3)W(e,t,1,1,14,`#e8e0d0`);W(e,0,0,16,2,i),W(e,0,14,16,2,i);for(let t=0;t<16;t+=4)W(e,t,2,1,12,U(r,.8))},stonecutter(e,t,n){G(e,t,n[0]||`#8d8d8d`,.06),Ju(e,`#5a5a5a`),e.strokeStyle=`#c8c8c8`,e.beginPath(),e.arc(8,8,4,0,Math.PI*2),e.stroke(),W(e,7,2,2,12,`#9a9a9a`),W(e,2,7,12,2,`#9a9a9a`)},anvil(e,t,n){let r=n[0]||`#3a3a40`;G(e,t,r,.08),W(e,2,2,12,4,`#55555c`),W(e,4,6,8,3,U(r,.8)),W(e,6,9,4,5,`#4a4a50`),W(e,4,13,8,2,`#55555c`),Ju(e,`#1a1a1e`)},enchant(e,t,n){let r=n[0]||`#2a1a3a`,i=n[1]||`#c88aff`;G(e,t,r,.1);for(let n=0;n<12;n++)Wu(e,Math.floor(t()*16),Math.floor(t()*16),i);Ku(e,3,12,7,5,i),Ku(e,8,4,12,11,i),W(e,6,8,4,3,`rgba(200,140,255,0.3)`),Ju(e,`#120818`)},beacon(e,t,n){let r=n[0]||`#3a8a8a`,i=n[1]||`#c8f0e8`;W(e,0,0,16,16,r);for(let t=7;t>1;t-=2)e.strokeStyle=t%4?i:`rgba(200,255,240,0.5)`,e.beginPath(),e.arc(8,8,t,0,Math.PI*2),e.stroke();W(e,7,7,2,2,`#ffffff`)},anchor(e,t,n){let r=n[0]||`#2a1e40`,i=n[1]||`#c86aff`;G(e,t,r,.1),e.strokeStyle=i,e.lineWidth=1,e.beginPath(),e.arc(8,8,5,.4,Math.PI*1.7),e.stroke(),W(e,4,4,2,2,i),W(e,10,10,2,2,i),W(e,7,2,2,12,`rgba(200,120,255,0.5)`)},lodestone(e,t,n){let r=n[0]||`#8d8d8d`,i=n[1]||`#6a5a7a`;G(e,t,r,.07),W(e,3,3,10,10,i),W(e,5,5,6,6,U(r,1.1)),W(e,7,7,2,2,`#c8b8d8`),Ju(e,U(r,.7))},jukebox(e,t,n){let r=n[0]||`#5a3a1a`,i=n[1]||`#8a6a3a`;G(e,t,r,.05),Ju(e,`#3a2410`),W(e,3,3,10,10,`#1a1a1a`);for(let t=3;t<=5;t+=2)e.strokeStyle=i,e.beginPath(),e.arc(8,8,t,0,Math.PI*2),e.stroke();W(e,7,7,2,2,`#c8a83a`)},note(e,t,n){let r=n[0]||`#5a3a1a`;n[1],G(e,t,r,.05),Ju(e,`#3a2410`),W(e,9,3,2,9,`#e8e0d0`),W(e,6,10,5,3,`#e8e0d0`),W(e,5,12,2,1,`#e8e0d0`),W(e,9,3,4,1,`#e8e0d0`)},target(e,t,n){let r=n[0]||`#e8d8c8`;W(e,0,0,16,16,r);for(let t=7;t>=1;t-=3)e.fillStyle=t%2?`#c84a3a`:r,e.beginPath(),e.arc(8,8,t,0,Math.PI*2),e.fill();W(e,6,6,4,4,`#c84a3a`),Ju(e,`#8a6a5a`)},target_side(e,t,n){let r=n[0]||`#e8d8c8`,i=n[1]||`#c84a3a`;W(e,0,0,16,16,r);for(let t=0;t<16;t+=4)W(e,t,0,2,16,i);Ju(e,`#8a6a5a`)},tnt_top(e,t,n){G(e,t,n[0]||`#c83a2a`,.07),W(e,6,6,4,4,`#2a2a2a`),W(e,7,7,2,2,`#e8e0d0`),W(e,7,0,2,6,`#8a6a3a`)},tnt_side(e,t,n){let r=n[0]||`#c83a2a`,i=n[1]||`#e8e0d0`;G(e,t,r,.05),W(e,0,6,16,5,i);for(let t of[[[1,0],[1,1],[1,2],[1,3],[1,4],[0,0],[2,0]],[[4,0],[4,1],[4,2],[4,3],[4,4],[3,0],[3,4],[5,0],[5,4]],[[7,0],[7,1],[7,2],[7,3],[7,4],[6,0],[8,0]]])for(let[n,r]of t)Wu(e,n+4,r+6,`#2a2a2a`);W(e,0,14,16,2,U(r,.75))},lamp(e,t,n){G(e,t,n[0]||`#6a3a2a`,.07);for(let t=2;t<16;t+=4)for(let n=2;n<16;n+=4)W(e,n,t,3,3,`#3a1a0a`),W(e,n+1,t+1,1,1,`#c86a2a`)},observer(e,t,n){let r=n[0]||`#6a6a70`,i=n[1]||`#3a3a40`;G(e,t,r,.06),Ju(e,i),W(e,4,4,8,8,`#2a2a30`),W(e,6,6,4,4,`#c82a2a`),W(e,7,7,2,2,`#ff8a7a`),Wu(e,2,2,`#8a8a90`),Wu(e,13,13,`#8a8a90`)},piston(e,t,n){let r=n[0]||`#8a6a3a`,i=n[1]||`#9a9a9a`;G(e,t,r,.05),W(e,2,2,12,12,i),W(e,3,3,10,10,U(i,.86));for(let t=4;t<13;t+=2)W(e,t,4,1,8,U(i,1.12));Ju(e,U(r,.7))},hopper(e,t,n){let r=n[0]||`#3a3a40`;G(e,t,r,.08),W(e,0,0,16,4,`#55555c`);for(let t=0;t<4;t++)W(e,t*2+1,0,1,4,U(r,1.2));W(e,3,4,10,2,`#2a2a30`),W(e,6,6,4,9,`#4a4a50`),Ju(e,`#1a1a1e`)},cauldron(e,t,n){G(e,t,n[0]||`#3a3a40`,.07),Ju(e,`#1a1a1e`),W(e,2,2,12,10,`#2a2a30`),W(e,4,3,8,7,`#0a0a0c`),W(e,4,3,8,1,`#5a5a62`),W(e,2,12,12,2,`#4a4a50`)},bell(e,t,n){let r=n[0]||`#c8a83a`,i=n[1]||`#8a6a1a`;W(e,0,0,16,16,`rgba(0,0,0,0)`),W(e,5,2,6,2,i),W(e,4,4,8,7,r),W(e,3,11,10,2,i),W(e,7,13,2,2,r),W(e,5,4,2,4,U(r,1.2))},campfire(e,t,n){let r=n[0]||`#5a3a1a`,i=n[1]||`#e8a03a`;G(e,t,r,.08),W(e,1,9,14,3,`#3a2410`),W(e,2,11,12,2,`#6a4a2a`);for(let t=2;t<14;t+=3)W(e,t,9,2,2,U(r,.8));W(e,5,5,6,5,i),W(e,6,3,4,4,U(i,1.2)),W(e,7,1,2,4,U(i,1.35)),W(e,6,7,4,2,`#fff0a0`)},chain(e,t,n){let r=n[0]||`#3a3a40`;e.clearRect(0,0,16,16);for(let t=0;t<16;t+=6)W(e,6,t,4,1,r),W(e,6,t+1,1,4,r),W(e,9,t+1,1,4,r),W(e,6,t+5,4,1,r)},pumpkin_top(e,t,n){let r=n[0]||`#d88a2a`;G(e,t,r,.06);for(let t=7;t>1;t-=3)e.strokeStyle=U(r,.82),e.beginPath(),e.arc(8,8,t,0,Math.PI*2),e.stroke();W(e,7,6,2,4,`#5a7a2a`),Ju(e,U(r,.78))},pumpkin_side(e,t,n){let r=n[0]||`#d88a2a`;G(e,t,r,.05);for(let t=1;t<16;t+=4)W(e,t,0,2,16,U(r,1.08)),W(e,t+2,0,1,16,U(r,.82));W(e,0,0,16,1,U(r,.8)),W(e,0,15,16,1,U(r,.8))},pumpkin_face(e,t,n){let r=n[0]||`#d88a2a`,i=n[1]||`#2a1a0a`;G(e,t,r,.05);for(let t=1;t<16;t+=4)W(e,t,0,2,16,U(r,1.08));W(e,3,4,3,2,i),W(e,2,6,2,2,i),W(e,10,4,3,2,i),W(e,12,6,2,2,i),W(e,4,10,8,1,i),W(e,4,11,1,2,i),W(e,11,11,1,2,i),W(e,6,11,1,1,i),W(e,9,11,1,1,i),W(e,7,12,2,1,i)},melon_top(e,t,n){let r=n[0]||`#5a9a3a`;G(e,t,r,.06),W(e,7,6,2,5,`#6a5a2a`);for(let t=0;t<16;t+=5)W(e,t,0,2,16,U(r,.8))},melon_side(e,t,n){let r=n[0]||`#5a9a3a`,i=n[1]||`#3a6a2a`;G(e,t,r,.06);for(let t=0;t<16;t+=4)W(e,t,0,2,16,U(r,.78)),W(e,t+2,0,1,16,i);for(let n=0;n<8;n++)Wu(e,Math.floor(t()*16),Math.floor(t()*16),`#8ac85a`)},hay_top(e,t,n){let r=n[0]||`#c8a83a`;G(e,t,r,.07);for(let t=7;t>1;t-=2)e.strokeStyle=U(r,.82),e.beginPath(),e.arc(8,8,t,0,Math.PI*2),e.stroke();W(e,2,7,12,2,`#8a6a1a`)},hay_side(e,t,n){let r=n[0]||`#c8a83a`,i=n[1]||`#a5861a`;for(let n=0;n<16;n++){let i=8+Math.floor(t()*8);W(e,n,16-i,1,i,U(r,.86+t()*.22))}W(e,0,3,16,1,i),W(e,0,12,16,1,i)},kelp_top(e,t,n){let r=n[0]||`#3a6a3a`;G(e,t,r,.1),W(e,7,2,2,12,U(r,1.2))},kelp_side(e,t,n){let r=n[0]||`#3a6a3a`,i=n[1]||`#2a4a2a`;G(e,t,r,.1);for(let t=2;t<16;t+=4)W(e,t,0,2,16,i);for(let t=2;t<16;t+=5)W(e,0,t,16,1,U(r,1.15))},cactus_top(e,t,n){let r=n[0]||`#3a7a2a`;G(e,t,r,.07),W(e,4,4,8,8,U(r,1.12));for(let[t,n]of[[2,2],[13,2],[2,13],[13,13]])W(e,t,n,1,1,`#e8e0c8`);Ju(e,U(r,.75))},cactus_side(e,t,n){let r=n[0]||`#3a7a2a`,i=n[1]||`#2a5a1a`;G(e,t,r,.06);for(let t=0;t<16;t+=5)W(e,t,0,2,16,i);for(let t=2;t<16;t+=4)W(e,3,t,1,1,`#e8e0c8`),W(e,11,t+1,1,1,`#e8e0c8`)},sugarcane(e,t,n){let r=n[0]||`#8ac85a`;e.clearRect(0,0,16,16);for(let t=2;t<16;t+=5){W(e,t,0,2,16,r),W(e,t+1,0,1,16,U(r,.78));for(let n=0;n<16;n+=5)W(e,t,n,2,1,U(r,.7))}},bamboo(e,t,n){let r=n[0]||`#8ac85a`,i=n[1]||`#5a8a3a`;e.clearRect(0,0,16,16),W(e,5,0,6,16,r),W(e,5,0,2,16,U(r,1.15)),W(e,9,0,2,16,i);for(let t=2;t<16;t+=5)W(e,4,t,8,1,U(r,.7))},bamboo_top(e,t,n){let r=n[0]||`#8ac85a`;G(e,t,r,.08),W(e,5,5,6,6,U(r,1.15)),W(e,7,7,2,2,`#5a8a3a`)},crop(e,t,n){let r=n[0]||`#d8c85a`,i=n[1]||`#8a9a3a`;e.clearRect(0,0,16,16);for(let t=3;t<16;t+=5)W(e,t,4,1,12,i),W(e,t-2,7,3,1,U(i,1.1)),W(e,t+1,10,3,1,U(i,.9)),W(e,t-1,2,3,3,r),Wu(e,t,2,U(r,1.25))},grassplant(e,t,n){let r=n[0]||`#6a9a3a`,i=n[1]||`#4a7a2a`;e.clearRect(0,0,16,16);for(let n=0;n<12;n++){let n=1+Math.floor(t()*14),a=4+Math.floor(t()*10);W(e,n,15-a,1,a,U(t()<.5?r:i,.9+t()*.25))}for(let n=0;n<6;n++)W(e,2+Math.floor(t()*12),3+Math.floor(t()*6),1,2,U(r,1.15))},bush(e,t,n){let r=n[0]||`#8a6a3a`,i=n[1]||`#6a4a2a`;e.clearRect(0,0,16,16);for(let n=0;n<7;n++){let n=2+Math.floor(t()*12),a=3+Math.floor(t()*10);Ku(e,n,15,n,a,r),Ku(e,n,a,n+2,a-2,i)}W(e,1,13,14,2,i)},flower(e,t,n){let r=n[0]||`#d83a2a`,i=n[1]||`#4a8a2a`;e.clearRect(0,0,16,16),W(e,7,6,1,10,i),W(e,5,10,3,1,U(i,.9)),W(e,8,11,3,1,U(i,.9));for(let[n,i]of[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]])Wu(e,7+n,4+i,U(r,.85+t()*.35));Wu(e,7,4,`#f8e8a0`),t()<.5&&Wu(e,8,5,U(r,1.2))},mushroom(e,t,n){let r=n[0]||`#d83a2a`,i=n[1]||`#e8e0d0`;e.clearRect(0,0,16,16),W(e,6,8,4,7,`#d8c8a8`),W(e,7,8,1,7,`#f0e0c0`),W(e,3,5,10,4,r),W(e,4,4,8,1,r),W(e,5,3,6,1,U(r,1.15)),W(e,5,6,2,1,i),W(e,9,5,1,1,i),W(e,7,7,1,1,i)},sapling(e,t,n){let r=n[0]||`#4f8a2e`,i=n[1]||`#6b5233`;e.clearRect(0,0,16,16),W(e,7,8,2,8,i);for(let n=2;n<10;n+=2)W(e,6-n%3,n,4+n%3,1,U(r,.9+t()*.3)),W(e,9-n%2,n+1,3,1,U(r,.8))},kelp(e,t,n){let r=n[0]||`#3a7a4a`,i=n[1]||`#2a5a3a`;e.clearRect(0,0,16,16);for(let t=3;t<16;t+=5)for(let n=0;n<16;n+=1)n%4==0?W(e,t,n+1,2,2,i):W(e,t+n%2,n,1,1,r)},lily(e,t,n){let r=n[0]||`#3a8a3a`,i=n[1]||`#2a6a2a`;e.clearRect(0,0,16,16),e.fillStyle=r,e.beginPath(),e.arc(8,8,6,.4,Math.PI*2-.4),e.lineTo(8,8),e.closePath(),e.fill(),e.strokeStyle=i,e.beginPath(),e.arc(8,8,6,.4,Math.PI*2-.4),e.stroke(),Wu(e,7,7,`#6ac85a`),Wu(e,8,6,`#6ac85a`)},vine(e,t,n){let r=n[0]||`#3a7a2a`,i=n[1]||`#2a5a1a`;e.clearRect(0,0,16,16);for(let n=0;n<4;n++){let n=1+Math.floor(t()*14);for(let a=0;a<16;a+=1)t()<.75&&W(e,n+ +(a%3==0),a,1,1,U(t()<.5?r:i,.9+t()*.2))}},lichen(e,t,n){let r=n[0]||`#8ac8b8`;e.clearRect(0,0,16,16);for(let n=0;n<22;n++)W(e,Math.floor(t()*16),Math.floor(t()*16),1+Math.floor(t()*2),1,U(r,.7+t()*.5,.8))},vein(e,t,n){let r=n[0]||`#1b4a4a`,i=n[1]||`#2a7a6a`;e.clearRect(0,0,16,16);for(let n=0;n<5;n++){let n=Math.floor(t()*16);Ku(e,n,15,n+Math.floor(t()*7)-3,4+Math.floor(t()*8),r),Wu(e,n,14,i)}},web(e,t,n){let r=n[0]||`#e8e8e8`;e.clearRect(0,0,16,16),e.strokeStyle=r;for(let t=0;t<4;t++)e.beginPath(),e.moveTo(8,8),e.lineTo(t*5,0),e.stroke(),e.beginPath(),e.moveTo(8,8),e.lineTo(16,t*5),e.stroke(),e.beginPath(),e.moveTo(8,8),e.lineTo(t*5,16),e.stroke(),e.beginPath(),e.moveTo(8,8),e.lineTo(0,t*5),e.stroke();for(let t=3;t<=6;t+=3)e.beginPath(),e.arc(8,8,t,0,Math.PI*2),e.stroke()},roots(e,t,n){let r=n[0]||`#8a6a4a`,i=n[1]||`#5a3a2a`;e.clearRect(0,0,16,16);for(let n=0;n<8;n++){let a=Math.floor(t()*16);for(let o=0;o<16;o+=2)W(e,a+Math.round(Math.sin(o*.4+n)*2),o,1,2,t()<.5?r:i)}},torch(e,t,n){let r=n[0]||`#e8b83a`;e.clearRect(0,0,16,16),W(e,7,7,2,9,`#8a6a3a`),W(e,7,7,1,9,`#a88a5a`),W(e,6,3,4,4,r),W(e,7,2,2,3,U(r,1.25)),Wu(e,7,2,`#fff8d0`),Wu(e,8,3,`#fff8d0`)},coral_fan(e,t,n){let r=n[0]||`#2a6ab8`;e.clearRect(0,0,16,16);for(let n=0;n<8;n++)Ku(e,8,15,2+Math.floor(t()*12),2+Math.floor(t()*8),U(r,.8+t()*.4));for(let n=0;n<8;n++)Wu(e,Math.floor(t()*16),Math.floor(t()*14),U(r,1.2))},seapickle(e,t,n){let r=n[0]||`#5a9a5a`,i=n[1]||`#8ac86a`;W(e,0,0,16,16,`#1a4a4a`);for(let t=0;t<5;t++){let n=2+t*3;W(e,n,4+t%2*2,2,9-t%2*2,r),W(e,n,4+t%2*2,1,9-t%2*2,i),Wu(e,n,3+t%2*2,i)}},water(e,t,n){let r=n[0]||`#2a6ac8`;G(e,t,r,.08);for(let t=0;t<16;t+=4)for(let n=0;n<16;n++)(n+t)%7<2&&Wu(e,n,t+Math.floor(Math.sin(n*.6)*2),U(r,1.2))},lava(e,t,n){let r=n[0]||`#e86a1a`,i=n[1]||`#f8c83a`;G(e,t,r,.12);for(let n=0;n<10;n++){let n=Math.floor(t()*16),r=Math.floor(t()*16);W(e,n,r,2,1,i),Wu(e,n,r,`#fff0a0`)}Gu(e,t,`#8a1a04`,10)},planks(e,t,n){let r=n[0]||`#b08a52`,i=n[1]||`#7b5c32`;G(e,t,r,.045);for(let n=0;n<16;n+=4){W(e,0,n,16,1,i),W(e,n===0||n===8?4:11,n,1,4,U(r,.78));for(let i=0;i<3;i++)W(e,Math.floor(t()*16),n+1+Math.floor(t()*2),2+Math.floor(t()*4),1,U(r,.9));W(e,0,n+3,16,1,U(r,1.07))}Gu(e,t,U(r,.86),5)},log(e,t,n){let r=n[0]||`#6b5233`,i=n[1]||`#4a3522`;G(e,t,r,.08);for(let n=0;n<16;n+=3){let i=4+Math.floor(t()*12);W(e,n,Math.floor(t()*4),1,i,U(r,.8))}for(let n=0;n<6;n++)W(e,Math.floor(t()*16),Math.floor(t()*16),2,1,U(r,1.15));Ju(e,i)},log_top(e,t,n){let r=n[0]||`#6b5233`,i=n[1]||`#b08a52`;W(e,0,0,16,16,r);for(let t=6;t>=1;t-=2)e.fillStyle=t%4?U(i,.88):U(i,1.02),e.beginPath(),e.arc(8,8,t,0,Math.PI*2),e.fill();Wu(e,8,8,U(i,.75)),Ju(e,U(r,.8))},leaves(e,t,n){let r=n[0]||`#4f8a2e`,i=n[1]||`#3a6b22`;e.clearRect(0,0,16,16);for(let n=0;n<16;n++)for(let a=0;a<16;a++){let o=t();o<.06||Wu(e,a,n,U(o<.5?r:i,.82+t()*.4))}for(let n=0;n<10;n++)W(e,Math.floor(t()*15),Math.floor(t()*15),2,1,U(r,1.2));for(let n=0;n<4;n++)e.clearRect(Math.floor(t()*16),Math.floor(t()*16),1,1)},carpet(e,t,n){let r=n[0]||`#5a8a3a`;G(e,t,r,.16);for(let n=0;n<18;n++)W(e,Math.floor(t()*15),Math.floor(t()*15),2,1,U(r,.8+t()*.4))}};function Zu(e){let t=e.tex;return typeof t==`string`?{top:t,side:t,bottom:t,front:t,back:t}:{top:t.top||t.side||t.all,side:t.side||t.top||t.all,bottom:t.bottom||t.top||t.side||t.all,front:t.front||t.side||t.top||t.all,back:t.back||t.side||t.top||t.all}}function Qu(e){return e.split(`:`)[0]}function $u(e){return zu.get(e)||null}function ed(e){let t=Ru.get(e);if(!t)return{u0:0,v0:0,u1:1,v1:1};let n=.35/Lu;return{u0:t.x/Lu+n,v0:1-(t.y+Nu)/Lu+n,u1:(t.x+Nu)/Lu-n,v1:1-t.y/Lu-n}}function td(){let e=new Set;for(let t of Zl){let n=Zu(t);for(let t of[`top`,`side`,`bottom`,`front`,`back`])n[t]&&e.add(n[t])}let t=[...e];Iu=Math.max(1,Math.ceil(Math.sqrt(t.length))),Lu=1024;let n=Lu/Iu;Pu=document.createElement(`canvas`),Pu.width=Pu.height=Lu;let r=Pu.getContext(`2d`);return r.imageSmoothingEnabled=!1,r.clearRect(0,0,Lu,Lu),t.forEach((e,t)=>{let i=t%Iu,a=Math.floor(t/Iu),o=Qu(e),s=e.split(`:`).slice(1),c;try{c=nd(o,s,Du(e))}catch(t){console.warn(`Texture generation failed for`,e,t),c=rd(s[0]||`#ff00ff`)}zu.set(e,c),Ru.set(e,{x:Math.round(i*n),y:Math.round(a*n),i:t}),r.drawImage(c,0,0,H,H,Ru.get(e).x,Ru.get(e).y,Math.round(n),Math.round(n))}),Fu=new ia(Pu),Fu.colorSpace=Ze,Fu.magFilter=f,Fu.minFilter=f,Fu.generateMipmaps=!1,Fu.wrapS=Fu.wrapT=u,Fu.needsUpdate=!0,Fu}function nd(e,t,n){let{canvas:r,ctx:i}=Uu(),a=Ou(n),o=Xu[e];return o?o(i,a,t):(console.warn(`Missing texture style:`,e),G(i,a,t[0]||`#888888`,.08)),r}function rd(e){let{canvas:t,ctx:n}=Uu();return W(n,0,0,16,16,e),W(n,0,0,8,8,`#000000`),W(n,8,8,8,8,`#000000`),t}function id(){return Fu}Object.keys(Xu);function ad(e,t=64,n=null){let r=document.createElement(`canvas`);r.width=r.height=t;let i=r.getContext(`2d`);i.imageSmoothingEnabled=!1;let a=Zu(e),o=$u(a.top),s=$u(a.front),c=$u(a.side);if(!o||!s||!c)return r;if(e.shape===`cross`){let e=$u(a.side);return e&&i.drawImage(e,t*.1,t*.05,t*.8,t*.9),r}let l=t*.5,u=t*.28,d=t/2,f=t*.47;return i.save(),i.translate(d,f-u*.9),i.transform(1,.5,-1,.5,0,0),i.drawImage(od(o,n),0,0,l,l),i.restore(),i.save(),i.translate(d,f),i.transform(1,.5,0,1.05,0,0),i.drawImage(od(s,n,.82),0,0,l,l*1),i.restore(),i.save(),i.translate(d,f),i.transform(1,-.5,0,1.05,0,0),i.drawImage(od(c,n,.68),0,0,l,l*1),i.restore(),r}function od(e,t,n=1){if(!t&&n===1)return e;let r=document.createElement(`canvas`);r.width=r.height=H;let i=r.getContext(`2d`);return i.imageSmoothingEnabled=!1,i.drawImage(e,0,0),t&&(i.globalCompositeOperation=`multiply`,i.fillStyle=t,i.fillRect(0,0,H,H),i.globalCompositeOperation=`destination-in`,i.drawImage(e,0,0)),n!==1&&(i.globalCompositeOperation=`source-atop`,i.fillStyle=n<1?`rgba(0,0,0,${1-n})`:`rgba(255,255,255,${n-1})`,i.fillRect(0,0,H,H)),r}function sd(e){return e*e*e*(e*(e*6-15)+10)}function cd(e,t,n){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,1442695041);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function ld(e,t,n,r){let i=Math.imul(e|0,374761393)^Math.imul(t|0,1103515245)^Math.imul(n|0,668265263)^Math.imul(r|0,1442695041);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}var ud=class{constructor(e=1){this.seed=e|0}n2(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=sd(i),s=sd(a),c=cd(n,r,this.seed),l=cd(n+1,r,this.seed),u=cd(n,r+1,this.seed),d=cd(n+1,r+1,this.seed),f=c+(l-c)*o;return f+(u+(d-u)*o-f)*s}n3(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=e-r,s=t-i,c=n-a,l=sd(o),u=sd(s),d=sd(c),f=this.seed,p=ld(r,i,a,f),m=ld(r+1,i,a,f),h=ld(r,i+1,a,f),g=ld(r+1,i+1,a,f),_=ld(r,i,a+1,f),v=ld(r+1,i,a+1,f),y=ld(r,i+1,a+1,f),b=ld(r+1,i+1,a+1,f),x=p+(m-p)*l,S=h+(g-h)*l,C=_+(v-_)*l,w=y+(b-y)*l,T=x+(S-x)*u;return T+(C+(w-C)*u-T)*d}fbm2(e,t,n=4,r=2,i=.5){let a=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=a*this.n2(e*o,t*o),c+=a,a*=i,o*=r;return s/c}fbm3(e,t,n,r=3,i=2,a=.5){let o=1,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*this.n3(e*s,t*s,n*s),l+=o,o*=a,s*=i;return c/l}ridged2(e,t,n=4){let r=1,i=1,a=0,o=0;for(let s=0;s<n;s++){let n=1-Math.abs(this.n2(e*i,t*i)*2-1);a+=r*n*n,o+=r,r*=.5,i*=2.05}return a/o}},dd=[{id:0,name:`Ocean`,top:`sand`,filler:`sand`,grass:`#71a84a`,foliage:`#5a9e3a`,water:`#2a6ac8`,sky:`#8fc7ff`,trees:null,treeChance:0,flowers:0},{id:1,name:`Beach`,top:`sand`,filler:`sand`,grass:`#8fbf55`,foliage:`#6aa83a`,water:`#2a7ad8`,sky:`#9fd0ff`,trees:null,treeChance:5e-4,flowers:0},{id:2,name:`Plains`,top:`grass_block`,filler:`dirt`,grass:`#7cbd55`,foliage:`#59ae30`,water:`#2a6ac8`,sky:`#8fc7ff`,trees:`oak`,treeChance:.005,flowers:.06},{id:3,name:`Forest`,top:`grass_block`,filler:`dirt`,grass:`#6aab46`,foliage:`#4e9e2a`,water:`#2a6ac8`,sky:`#8fc7ff`,trees:`oak`,treeChance:.05,flowers:.03},{id:4,name:`Birch Forest`,top:`grass_block`,filler:`dirt`,grass:`#8ac25a`,foliage:`#6ab840`,water:`#2a6ac8`,sky:`#9fd0ff`,trees:`birch`,treeChance:.045,flowers:.025},{id:5,name:`Dark Forest`,top:`grass_block`,filler:`dirt`,grass:`#4f8a3a`,foliage:`#3a6e26`,water:`#2a5a9a`,sky:`#7a9ab8`,trees:`dark_oak`,treeChance:.07,flowers:.005},{id:6,name:`Taiga`,top:`grass_block`,filler:`dirt`,grass:`#5a9a4a`,foliage:`#3a7a32`,water:`#2a5a9a`,sky:`#93c2e0`,trees:`spruce`,treeChance:.06,flowers:.01},{id:7,name:`Snowy Plains`,top:`snow_block`,filler:`dirt`,grass:`#9ac8a0`,foliage:`#7aaa7a`,water:`#4a8ac8`,sky:`#c3dbe8`,trees:`spruce`,treeChance:.004,flowers:0},{id:8,name:`Snowy Taiga`,top:`snow_block`,filler:`dirt`,grass:`#8ab894`,foliage:`#6a9a6a`,water:`#3a7ab8`,sky:`#b8d4e4`,trees:`spruce`,treeChance:.06,flowers:0},{id:9,name:`Desert`,top:`sand`,filler:`sandstone`,grass:`#c8b85a`,foliage:`#a89a3a`,water:`#2a7ad8`,sky:`#f0dfa8`,trees:null,treeChance:0,flowers:0},{id:10,name:`Savanna`,top:`grass_block`,filler:`dirt`,grass:`#c8b84a`,foliage:`#a8a038`,water:`#2a7ad8`,sky:`#f0e0a0`,trees:`acacia`,treeChance:.012,flowers:.015},{id:11,name:`Badlands`,top:`red_sand`,filler:`terracotta`,grass:`#c8a04a`,foliage:`#a88038`,water:`#2a6ac8`,sky:`#f0c890`,trees:null,treeChance:0,flowers:0},{id:12,name:`Jungle`,top:`grass_block`,filler:`dirt`,grass:`#4a9a2a`,foliage:`#2f8a1a`,water:`#2a7ab8`,sky:`#8fd0c0`,trees:`jungle`,treeChance:.09,flowers:.03},{id:13,name:`Swamp`,top:`grass_block`,filler:`mud`,grass:`#6a8a3a`,foliage:`#4a7a2a`,water:`#3a5a4a`,sky:`#9ab8a8`,trees:`oak`,treeChance:.03,flowers:.01},{id:14,name:`Cherry Grove`,top:`grass_block`,filler:`dirt`,grass:`#8ac86a`,foliage:`#e8a6c2`,water:`#2a6ac8`,sky:`#ffd8e8`,trees:`cherry`,treeChance:.045,flowers:.08},{id:15,name:`Meadow`,top:`grass_block`,filler:`dirt`,grass:`#8ac85a`,foliage:`#6ab840`,water:`#2a6ac8`,sky:`#a8d8ff`,trees:`oak`,treeChance:.002,flowers:.16},{id:16,name:`Mountains`,top:`stone`,filler:`stone`,grass:`#8aa87a`,foliage:`#6a9a5a`,water:`#2a6ac8`,sky:`#a8c8e8`,trees:`spruce`,treeChance:.006,flowers:.01},{id:17,name:`Snowy Peaks`,top:`snow_block`,filler:`stone`,grass:`#c8d8d0`,foliage:`#a8c8b8`,water:`#5a8ac8`,sky:`#d8e8f0`,trees:null,treeChance:0,flowers:0},{id:18,name:`Mushroom Fields`,top:`mycelium`,filler:`dirt`,grass:`#8a7a8a`,foliage:`#7a6a7a`,water:`#2a6ac8`,sky:`#c8b8d8`,trees:null,treeChance:0,flowers:.02},{id:19,name:`Village`,top:`grass_block`,filler:`dirt`,grass:`#7cbd55`,foliage:`#59ae30`,water:`#2a6ac8`,sky:`#8fc7ff`,trees:null,treeChance:0,flowers:.02}];dd.length;function fd(e){return dd[e]||dd[2]}var K=Object.fromEntries(dd.map(e=>[e.name.toUpperCase().replace(/ /g,`_`),e.id])),pd=61,md=62,hd=new Map,gd=!1;function q(e,t,n,r){if(r===`air`)return;let i=typeof r==`string`?Ql.get(r):null;if(!i)return;let a=`${Math.floor(e/16)},${Math.floor(n/16)}`;hd.has(a)||hd.set(a,[]),hd.get(a).push([(e%16+16)%16,t,(n%16+16)%16,i.id])}function _d(e,t,n,r,i,a,o){for(let s=t;s<=i;s++)for(let t=n;t<=a;t++)for(let n=e;n<=r;n++)q(n,s,t,o)}function vd(e,t,n,r,i=`oak`){let a=e-Math.floor(n/2),o=a+n-1,s=t-Math.floor(r/2),c=s+r-1,l=`${i}_planks`,u=`${i}_log`;_d(a,pd,s,o,pd,c,`cobblestone`);for(let e=md;e<65;e++)for(let t=s;t<=c;t++)for(let n=a;n<=o;n++)(n===a||n===o||t===s||t===c)&&q(n,e,t,(n===a||n===o)&&(t===s||t===c)?u:l);for(let e of[63,64]){for(let t=a+2;t<=o-2;t+=3)q(t,e,s,`glass`),q(t,e,c,`glass`);for(let t=s+2;t<=c-2;t+=3)q(a,e,t,`glass`),q(o,e,t,`glass`)}let d=e;q(d,md,c,`air`),q(d,63,c,`air`),q(d-1,64,c,`oak_planks`),q(d+1,64,c,`oak_planks`),_d(a+1,md,s+1,o-1,64,c-1,`air`),_d(a-1,65,s-1,o+1,65,c+1,`${i}_planks`),_d(a,66,s,o,66,c,`${i}_planks`);for(let e=a;e<=o;e++)q(e,67,s,u),q(e,67,c,u);for(let e=s;e<=c;e++)q(a,67,e,u),q(o,67,e,u);q(e,67,t,`lantern`),q(a+1,md,s+1,`crafting_table`),q(o-1,md,s+1,`furnace`),q(a+1,md,c-1,`bookshelf`),q(o-1,md,c-1,`chest`),q(a+1,64,s+1,`torch`),q(e,61,t,`hay_block`)}function yd(e,t){_d(e,md,t,e,64,t,`oak_log`),q(e,65,t,`lantern`)}function bd(e,t,n=`oak`,r=5){for(let i=0;i<r;i++)q(e,62+i,t,`${n}_log`);let i=62+r;for(let r=-2;r<=1;r++){let a=r<=-1?3:2;for(let o=-a;o<=a;o++)for(let s=-a;s<=a;s++)s*s+o*o>a*a+1||s===0&&o===0&&r<1||q(e+s,i+r,t+o,`${n}_leaves`)}}function xd(){if(gd)return;gd=!0;for(let e=2;e<=22;e++)for(let t=-1;t<=1;t++)q(t,pd,e,`dirt_path`);for(let e=-18;e<=18;e++)for(let t=0;t<=2;t++)q(e,pd,t,`dirt_path`);for(let e=-14;e<=0;e++)for(let t=-1;t<=1;t++)q(t,pd,e,`dirt_path`);_d(-2,pd,-2,2,pd,2,`cobblestone`),_d(-1,md,-1,1,md,1,`cobblestone`),q(0,md,0,`water`),_d(-1,63,-1,-1,64,-1,`oak_log`),_d(1,63,-1,1,64,-1,`oak_log`),_d(-1,63,1,-1,64,1,`oak_log`),_d(1,63,1,1,64,1,`oak_log`),_d(-2,65,-2,2,65,2,`oak_planks`),q(0,66,0,`lantern`),q(0,63,-1,`oak_log`),q(0,64,-1,`oak_log`),vd(-10,-9,9,7,`oak`),vd(9,-13,9,7,`spruce`),vd(-13,8,9,7,`birch`),vd(14,8,8,7,`oak`),_d(7,pd,-1,16,pd,5,`dirt`);for(let e=7;e<=16;e++)q(e,pd,-1,`oak_log`),q(e,pd,5,`oak_log`);for(let e=-1;e<=5;e++)q(7,pd,e,`oak_log`),q(16,pd,e,`oak_log`);for(let e=8;e<=15;e++)q(e,pd,2,`water`),q(e,pd,0,`farmland`),q(e,pd,1,`farmland`),q(e,pd,3,`farmland`),q(e,pd,4,`farmland`),q(e,md,0,`wheat`),q(e,md,1,`carrots`),q(e,md,3,`potatoes`),q(e,md,4,`beetroots`);q(17,md,0,`composter`),q(17,md,1,`hay_block`),_d(7,md,-1,7,63,-1,`oak_log`),_d(16,md,-1,16,63,-1,`oak_log`),_d(-19,pd,8,-8,pd,15,`grass_block`);for(let e=-19;e<=-8;e++)q(e,md,8,`oak_log`),q(e,md,15,`oak_log`);for(let e=8;e<=15;e++)q(-19,md,e,`oak_log`),q(-8,md,e,`oak_log`);q(-18,md,9,`hay_block`),q(-17,md,9,`hay_block`),q(-14,md,14,`water`);let e=(e,t)=>{_d(e,md,t,e+3,md,t+2,`oak_planks`),_d(e,63,t,e,64,t,`oak_log`),_d(e+3,63,t,e+3,64,t,`oak_log`),_d(e-1,65,t-1,e+4,65,t+3,`oak_planks`),q(e,63,t+2,`barrel`),q(e+3,63,t+2,`chest`),q(e+1,63,t+1,`melon`),q(e+2,63,t+1,`pumpkin`)};e(5,13),e(-6,12),yd(4,5),yd(-4,5),yd(4,17),yd(-4,17);for(let[e,t]of[[3,8],[-3,8],[3,15],[-3,15],[5,3],[-5,3],[7,9],[-7,9]])q(e,pd,t,`grass_block`),q(e,md,t,[`dandelion`,`poppy`,`oxeye_daisy`,`cornflower`,`azure_bluet`][Math.floor(Math.random()*5)]);_d(-23,pd,-6,-19,pd,-1,`blackstone`),_d(-23,md,-6,-19,65,-1,`air`),_d(-23,md,-6,-23,66,-6,`obsidian`),_d(-19,md,-6,-19,66,-6,`obsidian`),_d(-23,66,-6,-19,66,-6,`obsidian`),_d(-23,md,-2,-23,66,-2,`obsidian`),_d(-19,md,-2,-19,66,-2,`obsidian`),_d(-23,66,-2,-19,66,-2,`obsidian`),_d(-22,md,-5,-20,64,-3,`lava`),bd(-22,-17,`oak`,6),bd(22,-19,`cherry`,5),bd(24,14,`oak`,5),bd(-24,18,`spruce`,7),bd(19,20,`birch`,5),bd(-18,-22,`dark_oak`,6)}function Sd(e,t){return xd(),hd.get(`${e},${t}`)||null}var Cd={BASE:md,GROUND_TOP:pd,SPAWN:{x:.5,y:md,z:22.5}},J={};for(let[e,t]of Ql)J[e]=t.id;var wd={coal_ore:.018,iron_ore:.013,copper_ore:.011,gold_ore:.006,redstone_ore:.009,lapis_ore:.006,diamond_ore:.0045,emerald_ore:.004},Td={deepslate_coal_ore:.018,deepslate_iron_ore:.014,deepslate_copper_ore:.011,deepslate_gold_ore:.007,deepslate_redstone_ore:.01,deepslate_lapis_ore:.006,deepslate_diamond_ore:.005,deepslate_emerald_ore:.004},Ed=[`dandelion`,`poppy`,`blue_orchid`,`allium`,`azure_bluet`,`red_tulip`,`orange_tulip`,`white_tulip`,`pink_tulip`,`oxeye_daisy`,`cornflower`,`lily_of_the_valley`],Dd=[`terracotta`,`orange_terracotta`,`yellow_terracotta`,`white_terracotta`,`brown_terracotta`,`red_terracotta`],Od=class{constructor(e){this.seed=e|0,this.n=new ud(this.seed),this.n2=new ud(this.seed^2654435769),this.n3=new ud(this.seed^1374496523),this.n4=new ud(this.seed^739982445),this._lastHeightKey=null,this._lastHeight=0}heightAt(e,t){let n=e*100003+t;if(this._lastHeightKey===n)return this._lastHeight;let r=this.n.fbm2(e*.0021+17.3,t*.0021-9.7,4),i=this.n2.ridged2(e*.0052-41.1,t*.0052+23.9,3),a=this.n3.fbm2(e*.019+5.5,t*.019+11.2,3),o=26+r*28,s=Mu(.52,.88,r);o+=i**2.15*(14+s*49),o+=(a-.5)*7;let c=Math.sqrt(e*e+t*t);if(c<64){let e=Mu(32,64,c);o=61*(1-e)+o*e}o=ju(o,4,102);let l=Math.floor(o);return this._lastHeightKey=n,this._lastHeight=l,l}tempAt(e,t){return this.n3.fbm2(e*.0032+731,t*.0032-211,3)}humidAt(e,t){return this.n4.fbm2(e*.0032-423,t*.0032+517,3)}biomeAt(e,t,n=this.heightAt(e,t)){if(Math.sqrt(e*e+t*t)<38)return K.VILLAGE;if(n<40)return K.OCEAN;if(n<=44)return K.BEACH;if(n>83)return K.SNOWY_PEAKS;if(n>71)return K.MOUNTAINS;let r=this.tempAt(e,t),i=this.humidAt(e,t),a=ku(e>>4,t>>4,this.seed^30634);return r>.69&&i<.3?K.BADLANDS:r>.68&&i<.44?K.DESERT:i>.73&&r>.52?a<.35?K.SWAMP:K.JUNGLE:i>.58&&r>.58?a<.14?K.CHERRY_GROVE:K.FOREST:r<.3?a<.4?K.SNOWY_TAIGA:K.SNOWY_PLAINS:r<.42?a<.3?K.TAIGA:K.FOREST:r>.6&&i<.55?K.SAVANNA:i>.52&&a<.18?K.DARK_FOREST:i>.46&&a<.42?K.BIRCH_FOREST:n>56&&a<.22?K.MEADOW:a<.05&&r>.45&&i>.4?K.MUSHROOM_FIELDS:a<.28?K.FOREST:K.PLAINS}surfaceFor(e,t,n,r){if(t<41)return{top:ku(n,r,4)<.3?`gravel`:`sand`,filler:`sand`,depth:3};switch(e){case K.OCEAN:return{top:`sand`,filler:`sand`,depth:3};case K.BEACH:return{top:`sand`,filler:`sand`,depth:3};case K.DESERT:return{top:`sand`,filler:`sandstone`,depth:5};case K.BADLANDS:return{top:`red_sand`,filler:`terracotta`,depth:8};case K.SNOWY_PLAINS:case K.SNOWY_TAIGA:case K.SNOWY_PEAKS:return{top:`snow_block`,filler:`dirt`,depth:3};case K.MOUNTAINS:return{top:t>78?`snow_block`:`stone`,filler:`stone`,depth:2};case K.MUSHROOM_FIELDS:return{top:`mycelium`,filler:`dirt`,depth:3};case K.SWAMP:return{top:`grass_block`,filler:`mud`,depth:3};case K.JUNGLE:return{top:`grass_block`,filler:`dirt`,depth:3};case K.CHERRY_GROVE:case K.MEADOW:case K.VILLAGE:return{top:`grass_block`,filler:`dirt`,depth:3};default:return{top:`grass_block`,filler:`dirt`,depth:3}}}generateChunk(e,t){let n=new Uint16Array(28672),r=new Uint8Array(256),i=new Uint8Array(256),a=e*16,o=t*16,s=(e,t,r,i,a=!0)=>{if(e<0||r<0||e>=16||r>=16||t<0||t>=112)return;let o=(t*16+r)*16+e;(a||n[o]===0)&&(n[o]=i)},c=(e,t,r)=>e<0||r<0||e>=16||r>=16||t<0||t>=112?0:n[(t*16+r)*16+e];for(let e=0;e<16;e++)for(let t=0;t<16;t++){let n=a+t,l=o+e,u=this.heightAt(n,l),d=this.biomeAt(n,l,u);r[e*16+t]=d,i[e*16+t]=u;let f=this.surfaceFor(d,u,n,l),p=J[f.top]||J.stone,m=J[f.filler]||J.dirt,h=J.stone;for(let r=0;r<=u;r++){let i;if(i=r===0||r===1&&Au(n,r,l,3)<.55?J.bedrock:r>=u-f.depth?r===u?p:m:d===K.BADLANDS&&r>u-16?J[Dd[(r/2|0)%Dd.length]]:r<22?J.deepslate:h,r>2&&r<u-1&&r<108){let e=this.n.fbm3(n*.043,r*.061,l*.043,2),t=Math.abs(this.n2.fbm3(n*.021+90,r*.034,l*.021-50,2)-.5);(e>.625||t<.043)&&(i=r<8?J.lava:0)}i!==0&&s(t,r,e,i,!0)}for(let r=2;r<u-3;r++){let i=c(t,r,e);if(i!==h&&i!==J.deepslate)continue;let a=Au(n>>1,r>>1,l>>1,this.seed^12648430);if(i===J.deepslate){let n=null;r<58&&(a<Td.deepslate_iron_ore?n=`deepslate_iron_ore`:a<Td.deepslate_coal_ore?n=`deepslate_coal_ore`:a<Td.deepslate_copper_ore?n=`deepslate_copper_ore`:a<Td.deepslate_gold_ore&&r<34?n=`deepslate_gold_ore`:a<Td.deepslate_redstone_ore&&r<24?n=`deepslate_redstone_ore`:a<Td.deepslate_lapis_ore&&r<28?n=`deepslate_lapis_ore`:a<Td.deepslate_diamond_ore&&r<16&&(n=`deepslate_diamond_ore`)),n&&s(t,r,e,J[n],!0),a>.9975&&s(t,r,e,J.ancient_debris,!0)}else{let n=null;a<wd.coal_ore?n=`coal_ore`:a<wd.iron_ore&&r<56?n=`iron_ore`:a<wd.copper_ore&&r<52?n=`copper_ore`:a<wd.gold_ore&&r<34?n=`gold_ore`:a<wd.redstone_ore&&r<24?n=`redstone_ore`:a<wd.lapis_ore&&r<28?n=`lapis_ore`:a<wd.diamond_ore&&r<16?n=`diamond_ore`:a<wd.emerald_ore&&r<40&&d===K.MOUNTAINS&&(n=`emerald_ore`),n&&s(t,r,e,J[n],!0)}}if(u<42)for(let n=u+1;n<=42;n++)c(t,n,e)===0&&s(t,n,e,J.water,!0);d===K.MOUNTAINS&&u>76&&(s(t,u,e,J.snow_block,!0),u>80&&c(t,u+1,e)===0&&ku(n,l,7)<.3&&s(t,u+1,e,J.snow_block,!0))}for(let e=0;e<16;e++)for(let t=0;t<16;t++){let n=a+t,l=o+e,u=i[e*16+t],d=r[e*16+t];if(c(t,u+1,e)!==0)continue;c(t,u,e);let f=u<42,p=ku(n,l,this.seed^4660);if(f){u<41&&p<.008&&s(t,43,e,J.lily_pad,!0),p>.993&&d===K.OCEAN&&s(t,43,e,J.seagrass,!0);continue}if(d===K.DESERT||d===K.BADLANDS){if(p<.012){let r=1+Math.floor(ku(n,l,9)*3);for(let n=1;n<=r;n++)s(t,u+n,e,J.cactus,!0)}else p<.03&&s(t,u+1,e,J.dead_bush,!0);continue}if(d===K.SNOWY_PLAINS||d===K.SNOWY_TAIGA||d===K.SNOWY_PEAKS)continue;if(d===K.MUSHROOM_FIELDS){p<.02&&s(t,u+1,e,p<.01?J.red_mushroom:J.brown_mushroom,!0);continue}let m=fd(d);if(p<m.flowers?s(t,u+1,e,J[Ed[Math.floor(ku(n,l,11)*Ed.length)%Ed.length]],!0):p<m.flowers+.09?s(t,u+1,e,J.short_grass,!0):d===K.JUNGLE&&p<.13?s(t,u+1,e,J.fern,!0):d===K.SWAMP&&p<.14?s(t,u+1,e,J.short_grass,!0):d===K.PLAINS&&p>.996?s(t,u+1,e,J.pumpkin,!0):d===K.JUNGLE&&p>.994?s(t,u+1,e,J.bamboo,!0):d===K.VILLAGE&&p>.97&&s(t,u+1,e,J.short_grass,!0),(d===K.BEACH||d===K.SWAMP||d===K.JUNGLE)&&u>=42&&u<=43&&p>.984){let r=2+Math.floor(ku(n,l,13)*2);for(let n=1;n<=r;n++)s(t,u+n,e,J.sugar_cane,!0)}}for(let e=-3;e<19;e++)for(let t=-3;t<19;t++){let n=a+t,r=o+e;if(Math.sqrt(n*n+r*r)<34)continue;let i=this.heightAt(n,r);if(i<42)continue;let l=fd(this.biomeAt(n,r,i));l.trees&&(ku(n,r,this.seed^43981)>l.treeChance||this.growTree(n,i+1,r,l.trees,s,c,ku(n,r,this.seed)))}let l=Sd(e,t);if(l)for(let[e,t,n,r]of l)t>=0&&t<112&&s(e,t,n,r,!0);return{blocks:n,biomes:r,heights:i}}growTree(e,t,n,r,i,a,o){let s=5+Math.floor(o*5);if(r===`spruce`){for(let r=0;r<s;r++)i(e,t+r,n,J.spruce_log,!0);let r=0;for(let a=s-1;a>=1;a--){let o=Math.min(3,Math.floor((s-a)/2)+r%2);for(let r=-o;r<=o;r++)for(let s=-o;s<=o;s++)s*s+r*r>o*o+1||(s!==0||r!==0)&&i(e+s,t+a,n+r,J.spruce_leaves,!1);r++}i(e,t+s,n,J.spruce_leaves,!1);return}if(r===`jungle`){for(let r=0;r<s+3;r++)i(e,t+r,n,J.jungle_log,!0);let r=t+s+2;for(let t=-2;t<=2;t++){let a=t===2?1:t===-2?3:4;for(let o=-a;o<=a;o++)for(let s=-a;s<=a;s++)s*s+o*o>a*a+1||i(e+s,r+t,n+o,J.jungle_leaves,!1)}return}if(r===`acacia`){let r=e,a=n,c=+(o<.5);for(let e=0;e<s;e++)e===3&&(c?r+=1:a+=1),i(r,t+e,a,J.acacia_log,!0);let l=t+s;for(let e=0;e<=1;e++){let t=3-e;for(let n=-t;n<=t;n++)for(let o=-t;o<=t;o++)Math.abs(o)+Math.abs(n)>t+1||i(r+o,l+e,a+n,J.acacia_leaves,!1)}return}if(r===`dark_oak`){for(let r=0;r<s;r++)i(e,t+r,n,J.dark_oak_log,!0),i(e+1,t+r,n,J.dark_oak_log,!0),i(e,t+r,n+1,J.dark_oak_log,!0),i(e+1,t+r,n+1,J.dark_oak_log,!0);let r=t+s;for(let t=-1;t<=1;t++){let a=t===1?2:3;for(let o=-a;o<=a+1;o++)for(let s=-a;s<=a+1;s++)s*s+o*o>(a+1)*(a+1)||i(e+s,r+t,n+o,J.dark_oak_leaves,!1)}return}let c=r===`birch`?`birch`:r===`cherry`?`cherry`:`oak`;for(let r=0;r<s;r++)i(e,t+r,n,J[`${c}_log`],!0);let l=t+s;for(let t=-2;t<=1;t++){let r=t<=-1?2:1;for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++)o===0&&a===0&&t<1||o*o+a*a>r*r+1||i(e+o,l+t,n+a,J[`${c}_leaves`],!1)}i(e,l+2,n,J[`${c}_leaves`],!1)}},kd=[{name:`top`,dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],tangents:[0,2],shade:1},{name:`bottom`,dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],tangents:[0,2],shade:.52},{name:`south`,dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],tangents:[0,1],shade:.84},{name:`north`,dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],tangents:[0,1],shade:.72},{name:`east`,dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],tangents:[2,1],shade:.78},{name:`west`,dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],tangents:[2,1],shade:.68}],Ad=[[0,0],[1,0],[1,1],[0,1]],jd=kd.map(e=>e.corners.map(t=>{let[n,r]=e.tangents,i=t[n]?1:-1,a=t[r]?1:-1,o=e.dir,s=(e,t)=>{let s=[o[0],o[1],o[2]];return s[n]+=e*i,s[r]+=t*a,s};return{side1:s(1,0),side2:s(0,1),corner:s(1,1)}})),Md=[.48,.7,.85,1],Nd=dd.map(e=>({grass:new I(e.grass).convertSRGBToLinear(),foliage:new I(e.foliage).convertSRGBToLinear(),white:new I(1,1,1)})),Pd=new Map;function Fd(e){let t=Pd.get(e);return t||(t=ed(e),Pd.set(e,t)),t}function Id(e){return!!e&&e.solid&&e.shape!==`liquid`&&e.shape!==`cross`&&e.shape!==`glass`}var Ld=new oi({map:null,vertexColors:!0,fog:!0}),Rd=new oi({map:null,vertexColors:!0,fog:!0,alphaTest:.35,side:2}),zd=new oi({map:null,vertexColors:!0,fog:!0,transparent:!0,depthWrite:!1,side:2}),Bd=new oi({map:null,vertexColors:!0,fog:!0});function Vd(e,t,n){return new Ta({transparent:!0,depthWrite:!1,side:2,uniforms:{uDeep:{value:new I(e).convertSRGBToLinear()},uShallow:{value:new I(t).convertSRGBToLinear()},uFogColor:{value:new I(`#8fc7ff`)},uFogNear:{value:40},uFogFar:{value:110},uTime:{value:0},uAlpha:{value:n},uWave:{value:1}},vertexShader:`
      uniform float uTime;
      uniform float uWave;
      varying vec3 vWorld;
      varying vec3 vNormal;
      varying float vDepth;
      void main() {
        vec3 p = position;
        vec3 world = (modelMatrix * vec4(p, 1.0)).xyz;
        if (normal.y > 0.5) {
          p.y += sin(world.x * 0.55 + uTime * 1.1) * 0.035 * uWave + sin(world.z * 0.72 - uTime * 0.85) * 0.028 * uWave;
        }
        vWorld = (modelMatrix * vec4(p, 1.0)).xyz;
        vNormal = normal;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uFogColor;
      uniform float uFogNear;
      uniform float uFogFar;
      uniform float uTime;
      uniform float uAlpha;
      uniform float uWave;
      varying vec3 vWorld;
      varying vec3 vNormal;
      varying float vDepth;
      void main() {
        float wave = sin(vWorld.x * 0.85 + uTime * 1.2) * 0.5 + sin(vWorld.z * 1.05 - uTime * 0.9) * 0.5;
        float ripple = smoothstep(0.72, 0.99, sin(vWorld.x * 2.4 + uTime * 1.7) * sin(vWorld.z * 2.1 - uTime * 1.3));
        vec3 col = mix(uDeep, uShallow, 0.5 + wave * 0.2);
        col += ripple * 0.16 * uWave;
        if (vNormal.y > 0.5) col += 0.06;
        float fogFactor = smoothstep(uFogNear, uFogFar, vDepth);
        col = mix(col, uFogColor, fogFactor);
        gl_FragColor = vec4(col, uAlpha);
      }
    `})}var Hd=Vd(`#1c4f9e`,`#4a9ae8`,.78),Ud=Vd(`#7a1a04`,`#f8a83a`,.96);Ud.uniforms.uWave.value=.35;function Wd(e){Ld.map=e,Rd.map=e,zd.map=e,Bd.map=e;for(let e of[Ld,Rd,zd,Bd])e.needsUpdate=!0}function Gd(e,t,n,r){for(let i of[Hd,Ud])i.uniforms.uTime.value=e,t&&i.uniforms.uFogColor.value.copy(t),i.uniforms.uFogNear.value=n,i.uniforms.uFogFar.value=r}var Kd=class{constructor(){this.pos=[],this.norm=[],this.uv=[],this.col=[],this.idx=[]}get empty(){return this.idx.length===0}geometry(e=!1){let t=new Jr;return t.setAttribute(`position`,new Ir(this.pos,3)),e&&t.setAttribute(`normal`,new Ir(this.norm,3)),t.setAttribute(`uv`,new Ir(this.uv,2)),t.setAttribute(`color`,new Ir(this.col,3)),t.setIndex(this.idx),t.computeBoundingSphere(),t}liquidGeometry(){let e=new Jr;return e.setAttribute(`position`,new Ir(this.pos,3)),e.setAttribute(`normal`,new Ir(this.norm,3)),e.computeBoundingSphere(),e}};function qd(e,t,n,r,i,a){let o=jd[i][a],s=+!!e(t+o.side1[0],n+o.side1[1],r+o.side1[2]),c=+!!e(t+o.side2[0],n+o.side2[1],r+o.side2[2]),l=+!!e(t+o.corner[0],n+o.corner[1],r+o.corner[2]);return s&&c?Md[0]:Md[3-s-c-l]}function Jd(e,t,n,r,i,a,o,s,c=1){let l=kd[a],u=Fd(t._faceSpecs?t._faceSpecs[l.name]:null),d=e.pos.length/3,f=t.light>0?1.16:c;for(let t=0;t<4;t++){let c=l.corners[t];e.pos.push(n+c[0],r+c[1],i+c[2]),e.norm.push(l.dir[0],l.dir[1],l.dir[2]);let[d,p]=Ad[t];e.uv.push(d?u.u1:u.u0,p?u.v1:u.v0);let m=qd(s,n,r,i,a,t),h=l.shade*m*f;e.col.push(o.r*h,o.g*h,o.b*h)}e.idx.push(d,d+1,d+2,d,d+2,d+3)}function Yd(e,t,n,r,i,a,o){let s=t._faceSpecs.side,c=Fd(s),l=o*.4%.5-.25,u=o*.7%.5-.25,d=[[[.15+l,0,.15+u],[.85+l,0,.85+u]],[[.85+l,0,.15+u],[.15+l,0,.85+u]]];for(let t of d){let o=e.pos.length/3,s=[[t[0][0],0,t[0][2]],[t[1][0],0,t[1][2]],[t[1][0],1,t[1][2]],[t[0][0],1,t[0][2]]];for(let t=0;t<4;t++){e.pos.push(n+s[t][0],r+s[t][1],i+s[t][2]),e.norm.push(0,1,0);let[o,l]=Ad[t];e.uv.push(o?c.u1:c.u0,l?c.v1:c.v0),e.col.push(a.r,a.g,a.b)}e.idx.push(o,o+1,o+2,o,o+2,o+3)}}function Xd(e,t,n,r,i,a){let o=t._faceSpecs.side,s=Fd(o),c=e.pos.length/3,l=[[.06,.06],[.94,.06],[.94,.94],[.06,.94]];for(let t=0;t<4;t++){e.pos.push(n+l[t][0],r+.02,i+l[t][1]),e.norm.push(0,1,0);let[o,c]=Ad[t];e.uv.push(o?s.u1:s.u0,c?s.v1:s.v0),e.col.push(a.r,a.g,a.b)}e.idx.push(c,c+1,c+2,c,c+2,c+3)}function Zd(e,t,n,r,i,a){let o=kd[i],s=e.pos.length/3;for(let i=0;i<4;i++){let s=o.corners[i],c=s[1]?a:0;e.pos.push(t+s[0],n+c,r+s[2]),e.norm.push(o.dir[0],o.dir[1],o.dir[2])}e.idx.push(s,s+1,s+2,s,s+2,s+3)}function Qd(e,t){let{cx:n,cz:r,blocks:i,biomes:a}=t,o={opaque:new Kd,cutout:new Kd,glass:new Kd,glow:new Kd,water:new Kd,lava:new Kd},s=n*16,c=r*16,l=(t,n,r)=>n<0||n>=112?0:t>=0&&t<16&&r>=0&&r<16?i[(n*16+r)*16+t]:e.getBlock(s+t,n,c+r),u=(e,t,n)=>ou[l(e,t,n)]||null,d=(e,t,n)=>Id(u(e,t,n)),f=(e,t,n)=>Id(u(e,t,n));for(let e=0;e<112;e++)for(let t=0;t<16;t++)for(let n=0;n<16;n++){let r=i[(e*16+t)*16+n];if(r===0)continue;let p=ou[r];if(!p)continue;p._faceSpecs||(p._faceSpecs=Zu(p));let m=Nd[a[t*16+n]]||Nd[2],h=m.white;if(s+n,c+t,p.shape===`liquid`){let r=p.name===`lava`?o.lava:o.water;e+.9,$d(l(n,e+1,t))||Zd(r,n,e,t,0,.9),!$d(l(n-1,e,t))&&!d(n-1,e,t)&&Zd(r,n,e,t,5,.9),!$d(l(n+1,e,t))&&!d(n+1,e,t)&&Zd(r,n,e,t,4,.9),!$d(l(n,e,t-1))&&!d(n,e,t-1)&&Zd(r,n,e,t,3,.9),!$d(l(n,e,t+1))&&!d(n,e,t+1)&&Zd(r,n,e,t,2,.9);continue}if(p.shape===`cross`){let r=p.tint===`grass`?m.grass:p.tint===`foliage`?m.foliage:h;p.name===`lily_pad`?Xd(o.cutout,p,n,e,t,r):Yd(o.cutout,p,n,e,t,r,(n*13+t*7+e)%7);continue}let g=p.shape===`leaves`,_=p.shape===`glass`,v=p.tint===`foliage`?m.foliage:h,y=_?o.glass:g?o.cutout:p.light>0?o.glow:o.opaque;for(let r=0;r<6;r++){let i=kd[r],a=u(n+i.dir[0],e+i.dir[1],t+i.dir[2]);if(a&&a.shape!==`liquid`&&a.shape!==`cross`){if(_){if(a.shape===`glass`||Id(a))continue}else if(Id(a)||g&&a.shape===`leaves`)continue}let o=p.tint===`grass`?r===0?m.grass:h:v;Jd(y,p,n,e,t,r,o,f)}}let p={};for(let[e,t]of Object.entries(o))p[e]=t.empty?null:e===`water`||e===`lava`?t.liquidGeometry():t.geometry();return p}function $d(e){let t=ou[e];return!!t&&t.shape===`liquid`}var ef={opaque:Ld,cutout:Rd,glass:zd,glow:Bd,water:Hd,lava:Ud},tf=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],nf=class{constructor(e,t=1337,n={}){this.scene=e,this.seed=t|0,this.gen=new Od(this.seed),this.chunks=new Map,this.edits=new Map,this.dirty=new Set,this.renderDistance=n.renderDistance||5,this.group=new Gn,this.group.name=`chunks`,e.add(this.group),this.meshBuilds=0,this.frustum=new Pi,this._mat=new _n,this._sphere=new Br,this._tmp=new F,this.stats={chunks:0,meshed:0,triangles:0},this.lastCenter={cx:null,cz:null}}key(e,t){return`${e},${t}`}getChunk(e,t){return this.chunks.get(this.key(e,t))||null}ensureData(e,t){let n=this.key(e,t),r=this.chunks.get(n);if(r)return r;let i=this.gen.generateChunk(e,t);r={cx:e,cz:t,key:n,blocks:i.blocks,biomes:i.biomes,heights:i.heights,meshes:null,dirty:!0,lastUsed:performance.now()};let a=this.edits.get(n);if(a)for(let[e,t]of a)r.blocks[e]=t;return this.chunks.set(n,r),this.dirty.add(n),r}buildMesh(e,t){let n=this.chunks.get(this.key(e,t));if(!n)return;for(let[n,r]of tf)this.ensureData(e+n,t+r);let r=Qd(this,n);if(n.meshes)for(let e of Object.values(n.meshes))e&&(this.group.remove(e),e.geometry.dispose());n.meshes={};let i=0;for(let[a,o]of Object.entries(r)){if(!o)continue;let r=ef[a],s=new vi(o,r);s.position.set(e*16,0,t*16),a===`water`&&(s.renderOrder=2),a===`lava`&&(s.renderOrder=1),a===`glass`&&(s.renderOrder=3),s.frustumCulled=!0,s.name=`chunk-${e},${t}-${a}`,this.group.add(s),n.meshes[a]=s,i+=o.index?o.index.count/3:o.attributes.position.count/3}return n.dirty=!1,this.meshBuilds++,this.dirty.delete(n.key),i}async loadArea(e,t=null,n=4){let r=[];for(let t=-e;t<=e;t++)for(let n=-e;n<=e;n++)r.push([n,t,n*n+t*t]);r.sort((e,t)=>e[2]-t[2]);let i=0;for(let[e,a]of r)this.ensureData(e,a),i++,i%n===0&&(t&&t(i/r.length*.55,`Generating terrain`),await rf());i=0;for(let[e,n]of r)this.buildMesh(e,n),i++,i%2==0&&(t&&t(.55+i/r.length*.45,`Building chunk meshes`),await rf());this.stats.chunks=this.chunks.size,this.stats.meshed=[...this.chunks.values()].filter(e=>e.meshes).length,t&&t(1,`World ready`)}update(e,t,n=this.renderDistance,r=6){this.renderDistance=n;let i=Math.floor(e/16),a=Math.floor(t/16),o=performance.now(),s=[];for(let e=-n;e<=n;e++)for(let t=-n;t<=n;t++){let r=t*t+e*e;if(r>(n+.35)*(n+.35))continue;let o=i+t,c=a+e,l=this.chunks.get(this.key(o,c));l?!l.meshes&&!l.dirty?s.push({cx:o,cz:c,d2:r,kind:1}):l.dirty&&s.push({cx:o,cz:c,d2:r,kind:2}):s.push({cx:o,cz:c,d2:r,kind:0})}s.sort((e,t)=>e.kind-t.kind||e.d2-t.d2);for(let e of s){if(performance.now()-o>r)break;if(e.kind===0)this.ensureData(e.cx,e.cz);else if(this.chunks.has(this.key(e.cx,e.cz))||this.ensureData(e.cx,e.cz),this.buildMesh(e.cx,e.cz),performance.now()-o>r)break}let c=n+2.5;for(let[e,t]of this.chunks){let n=t.cx-i,r=t.cz-a;if(Math.abs(n)>c||Math.abs(r)>c){if(t.meshes)for(let e of Object.values(t.meshes))e&&(this.group.remove(e),e.geometry.dispose());this.chunks.delete(e),this.dirty.delete(e)}else t.meshes&&(t.lastUsed=performance.now())}this.stats.chunks=this.chunks.size,this.stats.meshed=0,this.stats.triangles=0;for(let e of this.chunks.values()){if(!e.meshes)continue;this.stats.meshed++;let t=e.meshes.opaque;t&&t.geometry.index&&(this.stats.triangles+=t.geometry.index.count/3)}}getBlock(e,t,n){if(t<0||t>=112)return 0;let r=Math.floor(e/16),i=Math.floor(n/16),a=this.chunks.get(this.key(r,i));if(!a)return 0;let o=e-r*16,s=n-i*16;return a.blocks[(t*16+s)*16+o]}getDef(e,t,n){return ou[this.getBlock(e,t,n)]||null}isLoaded(e,t){return this.chunks.has(this.key(Math.floor(e/16),Math.floor(t/16)))}setBlock(e,t,n,r,i=!0){if(t<0||t>=112)return!1;let a=Math.floor(e/16),o=Math.floor(n/16),s=this.chunks.get(this.key(a,o));if(!s)return!1;let c=e-a*16,l=n-o*16,u=(t*16+l)*16+c;if(s.blocks[u]===r)return!1;if(s.blocks[u]=r,i){let e=s.key,t=this.edits.get(e);t||(t=new Map,this.edits.set(e,t)),t.set(u,r)}return this.markDirty(a,o),c===0&&this.markDirty(a-1,o),c===15&&this.markDirty(a+1,o),l===0&&this.markDirty(a,o-1),l===15&&this.markDirty(a,o+1),!0}markDirty(e,t){let n=this.chunks.get(this.key(e,t));n&&(n.dirty=!0,this.dirty.add(n.key))}getHeight(e,t,n=!1){let r=Math.floor(e),i=Math.floor(t);if(!this.chunks.get(this.key(Math.floor(r/16),Math.floor(i/16)))){let e=this.gen.heightAt(r,i);return e<42&&(e=42),e}for(let e=111;e>=0;e--){let t=ou[this.getBlock(r,e,i)];if(t&&(n||t.shape!==`liquid`)){if(t.shape===`cross`||t.shape===`liquid`){if(n)return e}else return e}}return 0}surfaceY(e,t){return this.getHeight(e,t)+1}biomeAt(e,t){let n=this.chunks.get(this.key(Math.floor(e/16),Math.floor(t/16)));if(!n)return fd(this.gen.biomeAt(Math.floor(e),Math.floor(t)));let r=(Math.floor(e)%16+16)%16,i=(Math.floor(t)%16+16)%16;return fd(n.biomes[i*16+r])}collides(e,t,n,r,i,a){let o=Math.floor(e),s=Math.floor(r-1e-5),c=Math.floor(t),l=Math.floor(i-1e-5),u=Math.floor(n),d=Math.floor(a-1e-5);for(let e=c;e<=l;e++)for(let t=u;t<=d;t++)for(let n=o;n<=s;n++){let r=this.getDef(n,e,t);if(r&&r.solid&&r.shape!==`liquid`)return!0}return!1}raycast(e,t,n=7,r=!1){let i=Math.floor(e.x),a=Math.floor(e.y),o=Math.floor(e.z),s=t.x>0?1:-1,c=t.y>0?1:-1,l=t.z>0?1:-1,u=t.x===0?1/0:Math.abs(1/t.x),d=t.y===0?1/0:Math.abs(1/t.y),f=t.z===0?1/0:Math.abs(1/t.z),p=(e,t)=>t>0?Math.floor(e)+1:Math.floor(e),m=t.x===0?1/0:(p(e.x,s)-e.x)/t.x,h=t.y===0?1/0:(p(e.y,c)-e.y)/t.y,g=t.z===0?1/0:(p(e.z,l)-e.z)/t.z,_=0,v=0,y=0,b=0;for(let e=0;e<256&&b<=n;e++){if(a>=0&&a<112){let e=this.getDef(i,a,o);if(e&&e.shape!==`cross`&&(r||e.shape!==`liquid`))return{x:i,y:a,z:o,def:e,normal:{x:_,y:v,z:y},distance:b}}m<h&&m<g?(i+=s,b=m,m+=u,_=-s,v=0,y=0):h<g?(a+=c,b=h,h+=d,_=0,v=-c,y=0):(o+=l,b=g,g+=f,_=0,v=0,y=-l)}return null}serializeEdits(){let e={};for(let[t,n]of this.edits)e[t]=[...n];return e}loadEdits(e){if(this.edits.clear(),e)for(let[t,n]of Object.entries(e)){this.edits.set(t,new Map(n));let e=this.chunks.get(t);if(e){for(let[t,r]of n)e.blocks[t]=r;this.markDirty(Math.floor(e.cx),Math.floor(e.cz))}}}dispose(){this.scene.remove(this.group);for(let e of this.chunks.values())for(let t of Object.values(e.meshes||{}))t&&t.geometry.dispose();this.chunks.clear()}};function rf(){return new Promise(e=>requestAnimationFrame(()=>e()))}var af=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,of=`
  uniform vec3 uTop;
  uniform vec3 uBottom;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  varying vec3 vWorld;
  void main() {
    vec3 dir = normalize(vWorld);
    float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 col = mix(uBottom, uTop, pow(h, 0.72));
    float sun = pow(max(dot(dir, normalize(uSunDir)), 0.0), 5.0);
    col += uSunColor * sun * 0.32;
    float horizon = exp(-abs(dir.y) * 5.5);
    col += uSunColor * horizon * 0.10;
    gl_FragColor = vec4(col, 1.0);
  }
`,sf=class{constructor(e,t={}){this.scene=e,this.time=t.time??.31,this.dayLength=t.dayLength??600,this.fancy=!0,this.seed=t.seed||1,this.uniforms={uTop:{value:new I(`#4a8fe0`)},uBottom:{value:new I(`#b8dcff`)},uSunColor:{value:new I(`#fff2c8`)},uSunDir:{value:new F(0,1,0)}},this.dome=new vi(new ga(280,24,16),new Ta({uniforms:this.uniforms,vertexShader:af,fragmentShader:of,side:1,depthWrite:!1,fog:!1})),this.dome.frustumCulled=!1,e.add(this.dome),this.sun=new vi(new la(12,32),new oi({color:`#fff4c0`,fog:!1,transparent:!0,opacity:.95})),this.sun.frustumCulled=!1,e.add(this.sun),this.moon=new vi(new la(8.5,32),new oi({color:`#dfe8ff`,fog:!1,transparent:!0,opacity:.9})),this.moon.frustumCulled=!1,e.add(this.moon);let n=Ou(this.seed^659918),r=[];for(let e=0;e<900;e++){let e=n()*Math.PI*2,t=Math.acos(n()*.95);r.push(Math.sin(t)*Math.cos(e)*240,Math.cos(t)*240,Math.sin(t)*Math.sin(e)*240)}let i=new Jr;i.setAttribute(`position`,new Ir(r,3)),this.stars=new ta(i,new Xi({color:`#e8f0ff`,size:1.45,sizeAttenuation:!0,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.stars.frustumCulled=!1,e.add(this.stars),this.clouds=new Gn,this.clouds.name=`clouds`;let a=new oi({color:`#ffffff`,transparent:!0,opacity:.62,depthWrite:!1,fog:!0});for(let e=0;e<34;e++){let e=new Gn,t=2+Math.floor(n()*4);for(let r=0;r<t;r++){let t=5+n()*12,r=5+n()*10,i=new vi(new ca(t,2.2+n()*1.6,r),a);i.position.set((n()-.5)*17,(n()-.5)*2.2,(n()-.5)*15),e.add(i)}e.position.set((n()-.5)*340,76+n()*18,(n()-.5)*340),e.userData.drift=.5+n()*.9,this.clouds.add(e)}e.add(this.clouds),this.hemi=new io(`#cfe6ff`,`#6f5a3e`,.8),e.add(this.hemi),this.sunLight=new bo(`#fff0cc`,1.25),this.sunLight.position.set(60,100,30),e.add(this.sunLight),this.ambient=new xo(`#ffffff`,.22),e.add(this.ambient),this.fog=new $n(`#a8d0f0`,38,110),e.fog=this.fog,this.colors={dayTop:new I(`#4a8fe0`),dayBottom:new I(`#b8dcff`),duskTop:new I(`#405080`),duskBottom:new I(`#f09a68`),nightTop:new I(`#050b16`),nightBottom:new I(`#17233a`),fogDay:new I(`#a8d0f0`),fogDusk:new I(`#d6a08a`),fogNight:new I(`#0d1624`),sunDay:new I(`#fff2c8`),sunDusk:new I(`#ff9a58`),fog:new I(`#a8d0f0`)},this.target=new F,this.update(0,null,90)}update(e,t,n=90){this.time=(this.time+e/this.dayLength)%1;let r=(this.time-.25)*Math.PI*2,i=new F(Math.cos(r)*.75,Math.sin(r),Math.cos(r)*.3).normalize(),a=i.y,o=Wt.smoothstep(a,-.15,.25),s=Math.max(0,1-Math.abs(a)*4)*(1-Math.max(0,a)*.3),c=1-o,l=this.colors.nightTop.clone().lerp(this.colors.dayTop,o).lerp(this.colors.duskTop,s*.5),u=this.colors.nightBottom.clone().lerp(this.colors.dayBottom,o).lerp(this.colors.duskBottom,s*.7);this.uniforms.uTop.value.copy(l),this.uniforms.uBottom.value.copy(u),this.uniforms.uSunColor.value.copy(this.colors.sunDay).lerp(this.colors.sunDusk,s),this.uniforms.uSunDir.value.copy(i);let d=this.colors.fogNight.clone().lerp(this.colors.fogDay,o).lerp(this.colors.fogDusk,s*.55);this.fog.color.copy(d),this.colors.fog.copy(d),this.fog.near=Math.max(18,n*.35),this.fog.far=n*1.2,this.hemi.intensity=.23+o*.72,this.hemi.color.set(`#cfe6ff`).lerp(new I(`#8596b8`),c*.5),this.hemi.groundColor.set(`#4a3c2e`),this.sunLight.intensity=.16+o*1.15,this.sunLight.color.copy(this.colors.sunDay).lerp(this.colors.sunDusk,s),this.ambient.intensity=.16+o*.15,this.scene.background=d;let f=t||new F;this.dome.position.copy(f),this.sun.position.copy(f).addScaledVector(i,210),this.sun.lookAt(f),this.sun.material.opacity=Math.max(0,o*.95),this.sun.visible=a>-.15,this.moon.position.copy(f).addScaledVector(i,-210),this.moon.lookAt(f),this.moon.visible=a<.15,this.stars.position.copy(f),this.stars.rotation.y=this.time*Math.PI*2,this.stars.material.opacity=c*.9,this.stars.visible=this.fancy,this.clouds.position.x=f.x,this.clouds.position.z=f.z,this.clouds.visible=this.fancy;for(let t of this.clouds.children)t.position.x+=t.userData.drift*e,t.position.x-f.x>180&&(t.position.x=f.x-180);return this.sunLight.position.copy(f).addScaledVector(i,130),this.sunLight.target.position.copy(f),this.sunLight.target.updateMatrixWorld(),{day:o,night:c,dusk:s,fog:d,sunDir:i}}get isNight(){return this.time<.24||this.time>.76}setTime(e){this.time=(e%1+1)%1}},cf=new Map,lf=32;function uf(e){let t=e.replace(`#`,``);return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function df(e,t,n){return`#`+[e,t,n].map(e=>Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,`0`)).join(``)}function ff(e,t=.7){let[n,r,i]=uf(e);return df(n*t,r*t,i*t)}function pf(e,t=1.2){let[n,r,i]=uf(e);return df(n*t,r*t,i*t)}function mf(){let e=document.createElement(`canvas`);e.width=e.height=lf;let t=e.getContext(`2d`);return t.imageSmoothingEnabled=!1,{c:e,ctx:t}}function hf(e,t,n,r,i=1){e.fillStyle=r,e.fillRect(t,n,i,i)}function Y(e,t,n,r,i,a){e.fillStyle=a,e.fillRect(t,n,r,i)}function X(e,t,n,r,i,a,o=1){let s=Math.abs(r-t),c=-Math.abs(i-n),l=t<r?1:-1,u=n<i?1:-1,d=s+c;for(;Y(e,t-Math.floor(o/2),n-Math.floor(o/2),o,o,a),t!==r||n!==i;){let e=2*d;e>=c&&(d+=c,t+=l),e<=s&&(d+=s,n+=u)}}function Z(e,t,n){e.fillStyle=n,e.beginPath(),t.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),e.fill()}function gf(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function _f(e,t=`#8a5a2a`,n=8,r=26,i=19,a=8){X(e,n,r,i,a,ff(t,.55),4),X(e,n,r,i,a,t,2),X(e,n-1,r-1,i-1,a-1,pf(t,1.15),1)}var vf={pickaxe(e,t){_f(e);let n=t.icon.color,r=t.icon.dark||ff(n);X(e,7,13,13,6,r,5),X(e,7,13,14,7,n,3),X(e,14,7,23,6,r,5),X(e,14,7,22,7,n,3),X(e,22,7,26,11,n,2),hf(e,10,8,pf(n,1.35),2)},axe(e,t){_f(e);let n=t.icon.color;Z(e,[[17,5],[25,7],[27,15],[21,19],[17,14]],t.icon.dark||ff(n)),Z(e,[[18,6],[24,8],[25,14],[21,17],[18,13]],n),X(e,20,8,23,9,pf(n,1.4),1)},shovel(e,t){_f(e);let n=t.icon.color;Z(e,[[17,4],[25,8],[20,15],[15,11]],t.icon.dark||ff(n)),Z(e,[[18,5],[24,8],[20,13],[16,10]],n),X(e,18,6,21,8,pf(n,1.4),1)},hoe(e,t){_f(e);let n=t.icon.color,r=t.icon.dark||ff(n);Y(e,17,5,7,3,r),Y(e,18,6,6,1,n),Y(e,22,5,3,6,n),Y(e,22,10,3,1,r)},sword(e,t){let n=t.icon.color;X(e,16,22,25,5,t.icon.dark||ff(n),5),X(e,16,21,24,5,n,3),X(e,17,20,23,7,pf(n,1.35),1),X(e,10,24,18,16,`#b08a52`,4),X(e,10,24,18,16,`#d8b87a`,2),X(e,10,18,18,24,`#c8a83a`,3),hf(e,9,25,`#c8a83a`,2),hf(e,24,5,pf(n,1.5),2)},bow(e){let t=item.icon.color;e.strokeStyle=t,e.lineWidth=3,e.beginPath(),e.arc(20,16,11,Math.PI*.55,Math.PI*1.45),e.stroke(),e.strokeStyle=pf(t,1.2),e.lineWidth=1,e.beginPath(),e.arc(20,16,11,Math.PI*.6,Math.PI*1.4),e.stroke(),e.strokeStyle=`#e8e8e0`,e.lineWidth=1,e.beginPath(),e.moveTo(15,5),e.lineTo(15,27),e.stroke(),X(e,16,16,28,16,`#c8a86a`,1),Z(e,[[28,16],[25,13],[25,19]],`#d8d8d0`)},crossbow(e,t){let n=t.icon.color,r=t.icon.dark||ff(n);Y(e,6,14,20,3,r),Y(e,7,15,18,1,n),X(e,15,15,25,15,`#e8e8e0`,1),e.strokeStyle=n,e.lineWidth=3,e.beginPath(),e.arc(14,15,10,-Math.PI*.4,Math.PI*.4),e.stroke(),Y(e,10,18,4,7,r),Y(e,11,18,2,7,n),X(e,20,8,26,22,`#c8a86a`,1)},trident(e,t){let n=t.icon.color,r=t.icon.dark||ff(n);X(e,16,8,16,26,n,3),X(e,16,4,16,10,n,2),X(e,9,5,9,11,n,2),X(e,23,5,23,11,n,2),X(e,9,10,16,12,n,2),X(e,23,10,16,12,n,2),X(e,9,22,16,24,r,2),hf(e,15,3,pf(n,1.4),2)},mace(e,t){let n=t.icon.color;X(e,14,28,19,14,`#6a4a2a`,3),Y(e,14,4,10,10,ff(n,.6)),Y(e,15,5,8,8,n),Y(e,16,6,2,2,pf(n,1.3)),Y(e,19,9,2,2,pf(n,1.2))},shield(e,t){let n=t.icon.color;Z(e,[[8,5],[24,5],[24,17],[16,27],[8,17]],t.icon.dark||ff(n)),Z(e,[[9,6],[23,6],[23,16],[16,25],[9,16]],n),Z(e,[[14,8],[18,8],[18,18],[16,21],[14,18]],`#9a9a9a`),X(e,10,8,22,8,pf(n,1.3),1)},shears(e){X(e,8,24,22,8,`#c8c8c8`,3),X(e,24,24,10,8,`#a8a8a8`,3),gf(e,7,26,3,`#d8d8d8`),gf(e,25,26,3,`#d8d8d8`),hf(e,13,15,`#6a6a6a`,2)},rod(e,t){let n=t.icon.color;X(e,8,25,23,6,n,2),e.strokeStyle=`#e8e8e0`,e.lineWidth=1,e.beginPath(),e.moveTo(23,6),e.quadraticCurveTo(28,18,22,26),e.stroke(),hf(e,22,26,`#d8d8d8`,2)},flint(e){Z(e,[[6,12],[14,6],[20,12],[16,22],[7,20]],`#5a5a5a`),Z(e,[[8,13],[14,8],[18,13],[15,20],[9,18]],`#7a7a7a`),X(e,18,8,25,20,`#c8c8c8`,2),Y(e,17,20,8,3,`#9a9a9a`)},brush(e){X(e,10,26,20,10,`#b08a52`,3),Y(e,18,7,6,4,`#8a8a8a`);for(let t=0;t<4;t++)Y(e,19+t,11,1,6,`#e8d8b8`)},horn(e,t){let n=t.icon.color;e.strokeStyle=n,e.lineWidth=5,e.beginPath(),e.arc(14,18,9,Math.PI*.2,Math.PI*1.2),e.stroke(),e.strokeStyle=pf(n,1.2),e.lineWidth=2,e.beginPath(),e.arc(14,18,9,Math.PI*.25,Math.PI*1.15),e.stroke(),Y(e,21,15,5,9,n)},elytra(e){let t=item.icon.color;Z(e,[[5,8],[16,13],[16,26],[7,21]],t),Z(e,[[27,8],[16,13],[16,26],[25,21]],t),Z(e,[[8,10],[15,14],[15,23],[9,19]],pf(t,1.15)),Z(e,[[24,10],[17,14],[17,23],[23,19]],pf(t,1.15))},bucket(e,t){let n=t.icon.color;Z(e,[[9,11],[23,11],[21,26],[11,26]],ff(n,.8)),Z(e,[[10,12],[22,12],[20,24],[12,24]],n),Y(e,9,11,14,2,pf(n,1.2)),e.strokeStyle=`#8a8a8a`,e.lineWidth=2,e.beginPath(),e.arc(16,11,8,Math.PI,0),e.stroke(),Y(e,12,16,8,3,`rgba(255,255,255,0.4)`)},potion(e,t){let n=t.icon.color;Y(e,13,4,6,4,`#d8d8e0`),Y(e,12,7,8,3,`#b8b8c8`),gf(e,16,20,9,`#d8d8e8`),e.globalCompositeOperation=`source-atop`,gf(e,16,21,7,n),e.globalCompositeOperation=`source-over`,Y(e,9,19,2,4,`rgba(255,255,255,0.6)`),hf(e,22,15,`rgba(255,255,255,0.5)`,2)},food(e,t){let n=t.icon.color;if(t.name?.includes(`bread`)){Z(e,[[5,12],[10,7],[23,7],[27,13],[24,22],[8,22]],ff(n,.85)),Z(e,[[6,13],[11,8],[22,8],[26,14],[23,21],[9,21]],n);for(let t=0;t<4;t++)X(e,12+t*3,10,16+t*3,18,`#b07a3a`,1)}else if(t.name?.includes(`carrot`)||t.name?.includes(`potato`)||t.name?.includes(`beetroot`))Z(e,[[14,7],[20,7],[22,14],[16,26],[11,14]],n),Y(e,15,4,3,4,`#4a8a3a`),X(e,14,8,13,12,pf(n,1.3),1);else if(t.name?.includes(`cookie`)){gf(e,16,16,9,ff(n,.8)),gf(e,16,16,8,n);for(let[t,n]of[[12,13],[19,12],[16,19],[21,18]])hf(e,t,n,`#5a3a1a`,2)}else/chop|beef|steak|mutton|rabbit|chicken|fish|cod|salmon/.test(t.name||``)?(gf(e,16,16,9,ff(n,.75)),gf(e,16,16,8,n),Y(e,17,22,6,3,`#e8e0d0`),Y(e,22,23,3,2,`#e8e0d0`),X(e,12,13,19,13,pf(n,1.25),1)):(gf(e,16,17,9,ff(n,.75)),gf(e,16,17,8,n),Y(e,15,5,2,6,`#5a3a1a`),Z(e,[[17,8],[22,5],[20,11]],`#4a8a3a`),Y(e,11,11,2,3,pf(n,1.4)))},fish(e,t){let n=t.icon.color;Z(e,[[6,16],[14,9],[24,10],[28,16],[24,22],[14,23]],n),Z(e,[[6,16],[2,10],[2,22]],ff(n,.8)),gf(e,22,14,1.5,`#101010`),X(e,12,12,20,12,pf(n,1.2),1),Z(e,[[15,9],[18,4],[20,10]],ff(n,.85))},ingot(e,t){let n=t.icon.color;Z(e,[[7,12],[23,10],[27,20],[10,24]],ff(n,.75)),Z(e,[[8,13],[22,11],[25,19],[11,22]],n),X(e,10,15,21,13,pf(n,1.4),1),X(e,12,19,23,17,ff(n,.8),1)},nugget(e,t){let n=t.icon.color;Z(e,[[10,14],[18,10],[24,16],[20,23],[12,21]],n),Z(e,[[12,14],[18,12],[21,16],[18,20],[13,19]],pf(n,1.2)),hf(e,15,14,`#ffffff`)},gem(e,t){let n=t.icon.color;Z(e,[[16,4],[27,14],[16,28],[5,14]],ff(n,.7)),Z(e,[[16,6],[24,14],[16,25],[8,14]],n),Z(e,[[16,6],[20,14],[16,25],[12,14]],pf(n,1.18)),hf(e,14,9,`#ffffff`,2)},dust(e,t){let n=t.icon.color;for(let[t,r,i]of[[12,20,4],[20,18,3],[16,12,3],[22,24,2],[9,12,2]])gf(e,t,r,i,ff(n,.8)),gf(e,t-1,r-1,i-1,n),hf(e,t-1,r-1,pf(n,1.4))},seeds(e,t){let n=t.icon.color;for(let[t,r]of[[10,18],[16,12],[22,17],[14,22],[20,24],[9,12]])Y(e,t,r,3,2,n),Y(e,t,r,1,1,pf(n,1.3))},disc(e,t){let n=t.icon.color;gf(e,16,16,12,`#0a0a0c`),gf(e,16,16,11,`#1a1a1e`),gf(e,16,16,4,n),gf(e,16,16,1,`#0a0a0c`),e.strokeStyle=`rgba(255,255,255,0.25)`,e.lineWidth=1,e.beginPath(),e.arc(16,16,8,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(16,16,6,0,Math.PI*2),e.stroke()},compass(e,t){gf(e,16,16,11,`#6a6a6a`),gf(e,16,16,10,t.icon.color),gf(e,16,16,8,`#3a3a40`),Z(e,[[16,9],[19,17],[16,15],[13,17]],`#d83a2a`),Z(e,[[16,23],[13,15],[16,17],[19,15]],`#e8e8e8`),hf(e,16,16,`#0a0a0c`)},clock(e,t){gf(e,16,16,11,`#c8a83a`),gf(e,16,16,10,t.icon.color),gf(e,16,16,8,`#f0e8c8`),X(e,16,16,16,9,`#3a3a40`,2),X(e,16,16,21,18,`#3a3a40`,2),hf(e,16,16,`#c83a2a`,2)},map(e,t){Y(e,5,8,22,18,`#8a6a3a`),Y(e,6,9,20,16,t.icon.color),X(e,9,20,14,16,`#8a6a4a`,1),X(e,16,20,23,12,`#8a6a4a`,1),X(e,20,20,26,15,`#b83a2a`,2),hf(e,12,12,`#5a8a3a`,2)},saddle(e){Z(e,[[6,14],[12,10],[22,12],[26,18],[20,22],[10,20]],`#7a4a22`),Z(e,[[8,15],[14,12],[22,14],[23,18],[18,20],[11,18]],`#a06a3a`),Y(e,14,10,5,4,`#5a3a1a`),Y(e,8,18,4,4,`#3a2a1a`)},tag(e){Z(e,[[7,10],[17,6],[26,14],[22,25],[9,22]],`#c8b88a`),Z(e,[[9,11],[17,8],[24,15],[21,23],[10,21]],`#e8d8b0`),gf(e,20,12,2,`#8a7a5a`),X(e,13,15,19,19,`#8a7a5a`,1)},lead(e){e.strokeStyle=`#c8a86a`,e.lineWidth=2,e.beginPath(),e.arc(17,16,9,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(12,8,4,0,Math.PI*2),e.stroke(),Y(e,24,20,5,6,`#8a6a3a`)},totem(e){let t=item.icon.color;Y(e,12,6,8,6,t),Y(e,13,7,6,4,pf(t,1.15)),Y(e,14,8,1,2,`#3a3a20`),Y(e,17,8,1,2,`#3a3a20`),Y(e,10,12,12,5,t),Y(e,12,17,8,8,t),Y(e,13,18,6,5,pf(t,1.1)),Y(e,5,12,5,3,t),Y(e,22,12,5,3,t),hf(e,16,14,`#3a3a20`,2)},armor(e,t){let n=t.icon.color,r=t.icon.dark||ff(n),i=t.icon.piece;i===`helmet`?(Z(e,[[8,18],[10,8],[22,8],[24,18],[20,22],[12,22]],r),Z(e,[[9,17],[11,9],[21,9],[23,17],[19,20],[13,20]],n),Y(e,12,14,8,4,`#2a2a2e`),Y(e,14,15,2,2,`#6ae8ff`),Y(e,18,15,2,2,`#6ae8ff`),X(e,11,10,13,10,pf(n,1.3),1)):i===`chestplate`?(Z(e,[[11,5],[21,5],[26,10],[23,24],[9,24],[6,10]],r),Z(e,[[12,6],[20,6],[24,11],[21,23],[11,23],[8,11]],n),Y(e,14,9,4,12,ff(n,.85)),X(e,10,8,12,8,pf(n,1.3),1),Y(e,6,10,5,4,n),Y(e,21,10,5,4,n)):i===`leggings`?(Z(e,[[9,5],[23,5],[23,13],[19,27],[14,27],[16,14],[12,14],[9,27],[5,27]],r),Z(e,[[10,6],[22,6],[22,12],[18,26],[15,26],[16,13],[12,13],[10,26],[6,26]],n),Y(e,11,7,10,3,pf(n,1.15))):(Z(e,[[5,12],[11,12],[13,22],[20,22],[22,12],[27,12],[28,24],[19,26],[17,18],[15,18],[13,26],[4,24]],r),Z(e,[[6,13],[10,13],[12,21],[20,21],[22,13],[26,13],[27,23],[19,25],[17,17],[15,17],[13,25],[5,23]],n))},arrow(e,t){let n=t.icon.color;X(e,7,25,25,7,n,2),Z(e,[[25,7],[27,12],[21,11]],`#d8d8d8`),Z(e,[[7,25],[3,20],[8,18]],`#e8e8e0`),Z(e,[[9,23],[4,26],[6,21]],`#c8a86a`),X(e,11,21,14,24,`#d83a3a`,1)},egg(e,t){let n=t.icon.color,r=t.icon.spots||pf(n,1.2);e.save(),e.translate(16,16),e.scale(.8,1.1),gf(e,0,0,11,ff(n,.75)),gf(e,0,-1,10,n),e.restore();for(let[t,n,i]of[[12,12,2],[20,18,2],[15,22,1],[21,10,1],[9,19,1]])gf(e,t,n,i,r);gf(e,13,10,2,`rgba(255,255,255,0.5)`)},misc(e,t){let n=t.icon.color;X(e,8,24,21,10,ff(n,.7),4),X(e,8,24,21,10,n,2),hf(e,20,8,pf(n,1.3),3)}};function yf(e){if(!e)return``;let t=`${e.name||e.display}|${JSON.stringify(e.icon||{})}|${e.blockId||``}`;if(cf.has(t))return cf.get(t);let n=``;if(e.isBlock&&e.block)n=ad(e.block,64).toDataURL();else{let{c:t,ctx:r}=mf();(vf[e.icon?.kind||`misc`]||vf.misc)(r,e),n=t.toDataURL()}return cf.set(t,n),n}function bf(e,t=null){if(!e)return``;let n=`block:${e.id}:${t||``}`;if(cf.has(n))return cf.get(n);let r=ad(e,64,t).toDataURL();return cf.set(n,r),r}var xf=27,Sf=4.5,Cf=7.3,wf=11.5,Tf=8.2,Ef=class{constructor(e,t,n,r={}){this.scene=e,this.camera=t,this.world=n,this.mode=r.mode||`creative`,this.position=new F(Cd.SPAWN.x,Cd.SPAWN.y,Cd.SPAWN.z),this.spawnPoint=this.position.clone(),this.velocity=new F,this.yaw=0,this.pitch=-.05,this.onGround=!1,this.flying=!1,this.sprinting=!1,this.inWater=!1,this.headInWater=!1,this.height=1.8,this.radius=.3,this.eyeHeight=1.62,this.input={forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,flyUp:!1,flyDown:!1},this.hp=20,this.maxHp=20,this.hunger=20,this.air=10,this.selected=0,this.hotbar=[],this.mineTarget=null,this.mineProgress=0,this.mineHeld=!1,this.attackCooldown=0,this.swing=0,this.swingKind=``,this.bob=0,this.fov=74,this.lastSpace=0,this.particles=r.particles,this.audio=r.audio,this.onToast=r.onToast||(()=>{}),this.onDamage=r.onDamage||(()=>{}),this.onDeath=r.onDeath||(()=>{}),this.onSelect=r.onSelect||(()=>{}),this.onBreak=r.onBreak||(()=>{}),this.oldPosition=this.position.clone(),this.stepTimer=0,this.underwater=!1,this.breakingDef=null,this._buildViewModel()}_buildViewModel(){this.viewGroup=new Gn,this.viewGroup.name=`view-model`,this.camera.add(this.viewGroup),this.hand=new vi(new ca(.18,.5,.18),new Da({color:12154962})),this.hand.position.set(.12,-.48,-.12),this.hand.rotation.set(-1.08,-.22,.1),this.viewGroup.add(this.hand),this.itemHolder=new Gn,this.itemHolder.position.set(.38,-.34,-.68),this.itemHolder.rotation.set(.18,-.42,-.12),this.viewGroup.add(this.itemHolder),this.currentItem=null,this.itemMesh=null,this.blockTextureCache=new Map,this.viewGroup.visible=!1}blockMaterial(e,t){let n=Zu(e),r=n[t]||n.side;if(this.blockTextureCache.has(r))return this.blockTextureCache.get(r);let i=$u(r);if(!i)return new Da({color:9079434});let a=new ia(i);a.magFilter=f,a.minFilter=f,a.colorSpace=Ze;let o=new Da({map:a});return this.blockTextureCache.set(r,o),o}setHeldItem(e){let t=e?`${e.name}|${e.id??``}`:`empty`;if(t!==this.currentItem&&(this.currentItem=t,this.itemMesh&&(this.itemHolder.remove(this.itemMesh),this.itemMesh.traverse?.(e=>{e.geometry&&e.geometry.dispose()}),this.itemMesh=null),this.viewGroup.visible=!1,e)){if(this.viewGroup.visible=!0,e.isBlock){let t=e.block,n=[0,1,2,3,4,5].map(e=>this.blockMaterial(t,[`east`,`west`,`top`,`bottom`,`south`,`north`][e])),r=new vi(new ca(.34,.34,.34),n);r.position.set(.03,.02,0),r.rotation.set(.1,.65,.08),this.itemMesh=r,this.itemHolder.add(r)}else{let t=yf(e.item||e),n=new no().load(t);n.magFilter=f,n.minFilter=f,n.colorSpace=Ze;let r=new oi({map:n,transparent:!0,alphaTest:.08,side:2,depthTest:!1}),i=new vi(new ha(.48,.48),r);i.position.set(.02,.12,0),i.rotation.set(-.1,-.38,-.68),i.renderOrder=999,this.itemMesh=i,this.itemHolder.add(i)}}}setView(e,t){this.yaw=e,this.pitch=Math.max(-Math.PI/2+.02,Math.min(Math.PI/2-.02,t))}look(e,t,n=.0023,r=!1){this.yaw-=e*n,this.pitch-=(r?-t:t)*n,this.pitch=Math.max(-Math.PI/2+.02,Math.min(Math.PI/2-.02,this.pitch))}get forward(){return new F(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}get eyePosition(){let e=this.position.clone();return e.y+=this.eyeHeight,!this.flying&&!this.inWater&&(e.y+=Math.sin(this.bob*2)*.025),e}forwardFlat(){return new F(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}rightFlat(){return new F(Math.cos(this.yaw),0,-Math.sin(this.yaw))}update(e,t,n){e=Math.min(e,.05);let r=this.position;this.oldPosition.copy(r),this.attackCooldown=Math.max(0,this.attackCooldown-e),this.swing=Math.max(0,this.swing-e*4.2);let i=this.world.getDef(Math.floor(r.x),Math.floor(r.y+.4),Math.floor(r.z));this.inWater=!!i&&i.shape===`liquid`;let a=this.world.getDef(Math.floor(r.x),Math.floor(r.y+this.eyeHeight),Math.floor(r.z));this.headInWater=!!a&&a.shape===`liquid`&&a.name===`water`,this.underwater=this.headInWater;let o=this.forwardFlat(),s=this.rightFlat(),c=0,l=0;this.input.forward&&(c+=o.x,l+=o.z),this.input.back&&(c-=o.x,l-=o.z),this.input.right&&(c+=s.x,l+=s.z),this.input.left&&(c-=s.x,l-=s.z);let u=c!==0||l!==0;if(u){let e=Math.hypot(c,l);c/=e,l/=e}this.sprinting=this.input.sprint&&u&&(this.flying||this.hunger>2);let d=this.flying?this.sprinting?wf*1.7:wf:this.inWater?2.7:this.sprinting?Cf:Sf;if(this.flying){this.velocity.x+=(c*d-this.velocity.x)*Math.min(1,e*12),this.velocity.z+=(l*d-this.velocity.z)*Math.min(1,e*12);let t=0;(this.input.jump||this.input.flyUp)&&(t=d*.75),(this.input.sprint||this.input.flyDown)&&(t=-d*.75),this.velocity.y+=(t-this.velocity.y)*Math.min(1,e*10),this.moveCollide(this.velocity.x*e,this.velocity.y*e,this.velocity.z*e),this.onGround&&t<0&&(this.velocity.y=0)}else if(this.inWater)this.velocity.x+=(c*d-this.velocity.x)*Math.min(1,e*8),this.velocity.z+=(l*d-this.velocity.z)*Math.min(1,e*8),this.velocity.y-=xf*.12*e,this.input.jump&&(this.velocity.y=3.1),this.velocity.y=Math.max(-3,this.velocity.y),this.moveCollide(this.velocity.x*e,this.velocity.y*e,this.velocity.z*e);else{let t=this.onGround?15:5.5;this.velocity.x+=(c*d-this.velocity.x)*Math.min(1,e*t),this.velocity.z+=(l*d-this.velocity.z)*Math.min(1,e*t),!u&&this.onGround&&(this.velocity.x*=Math.max(0,1-e*14),this.velocity.z*=Math.max(0,1-e*14)),this.velocity.y-=xf*e,this.input.jump&&this.onGround&&(this.velocity.y=Tf,this.onGround=!1,this.audio?.jump());let n=this.velocity.y;if(this.moveCollide(this.velocity.x*e,this.velocity.y*e,this.velocity.z*e),this.onGround&&n<-13){let e=Math.floor((-n-12)*.8);e>0&&this.takeDamage(e)}}r.y<-8&&(r.y=80,this.velocity.set(0,0,0)),r.y>130&&(r.y=130,this.velocity.y=0);let f=Math.hypot(this.velocity.x,this.velocity.z);if(this.onGround&&f>.4&&!this.flying?(this.bob+=e*f*1.8,this.stepTimer-=e*f,this.stepTimer<=0&&(this.stepTimer=2.2,this.audio?.step(this.world.getDef(Math.floor(r.x),Math.floor(r.y-.2),Math.floor(r.z))))):this.bob+=e*.7,this.mode===`survival`&&(this.hunger=Math.max(0,this.hunger-e*.008*(this.sprinting?4:1)),this.hunger>0&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+e*.04))),this.itemMesh){let e=this.swing,t=Math.sin(this.bob*2)*.018*Math.min(1,f/4);this.itemHolder.position.set(.38+t,-.34+Math.abs(t)*.4-e*.13,-.68),this.itemHolder.rotation.set(.18-e*.75,-.42+e*.25,-.12-e*.35)}this.updateCamera(e,n),this.updateMining(e)}moveCollide(e,t,n){let r=this.position,i=this.radius,a=this.height;if(this.onGround=!1,e){let t=r.x+e;this.world.collides(t-i,r.y+.02,r.z-i,t+i,r.y+a,r.z+i)?this.velocity.x=0:r.x=t}if(n){let e=r.z+n;this.world.collides(r.x-i,r.y+.02,e-i,r.x+i,r.y+a,e+i)?this.velocity.z=0:r.z=e}if(t){let e=r.y+t;if(!this.world.collides(r.x-i,e+.02,r.z-i,r.x+i,e+a,r.z+i))r.y=e;else{if(t<0){let e=this.world.surfaceY(r.x,r.z);Math.abs(e-r.y)<1.05&&(r.y=e),this.onGround=!0}this.velocity.y=0}}if((e||n)&&!this.flying&&(Math.floor(r.y+.06),!this.world.collides(r.x-i,r.y+.3,r.z-i,r.x+i,r.y+a,r.z+i))){let e=this.world.surfaceY(r.x,r.z);e-r.y>.1&&e-r.y<1.1&&(r.y=e)}this.onGround||this.world.collides(r.x-i,r.y-.08,r.z-i,r.x+i,r.y+.02,r.z+i)&&(this.onGround=!0)}updateCamera(e,t){let n=this.eyePosition;this.camera.position.copy(n),this.camera.rotation.order=`YXZ`,this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0;let r=this.flying&&this.sprinting?86:this.sprinting?80:74;this.fov+=(r-this.fov)*Math.min(1,e*5),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}raycast(e=7){return this.world.raycast(this.eyePosition,this.forward,e)}selectedStack(){return this.hotbar[this.selected]||null}beginMine(){this.mineHeld=!0,this.breakKey=null,this.mineProgress=0}endMine(){this.mineHeld=!1,this.mineProgress=0,this.breakingDef=null}updateMining(e){if(!this.mineHeld)return;let t=this.raycast();if(!t){this.mineProgress=0,this.breakingDef=null;return}let n=`${t.x},${t.y},${t.z}`;n!==this.breakKey&&(this.breakKey=n,this.mineProgress=0,this.breakingDef=t.def);let r=this.selectedStack(),i=r?.item?.tool,a=1,o=t.def;if(o.hard<0){this.mineProgress=0;return}o.tool&&i===o.tool&&(a=(r.item.tier||1)*1.8),i===`sword`&&o.tool===`axe`&&(a=1);let s=Math.max(.05,o.hard);this.mineProgress+=e*a/(s*(this.mode===`creative`?.35:1.1)),this.mineProgress>=1&&(this.breakBlock(t),this.mineProgress=0,this.breakKey=null)}breakBlock(e){let{x:t,y:n,z:r,def:i}=e;this.world.setBlock(t,n,r,0),this.particles?.spawn(t+.5,n+.5,r+.5,this.blockColor(i),10,{speed:1.4,life:.55,size:.075}),this.audio?.breakBlock(i),this.swing=1,this.swingKind=`break`,this.onBreak?.(i,t,n,r),this.mode===`survival`&&i.drops&&this.onToast?.(`Mined ${i.display}`,i)}blockColor(e){return(Zu(e).side||``).split(`:`)[1]||`#8a8a8a`}placeBlock(){let e=this.selectedStack();if(!e||!e.isBlock)return!1;let t=e.block;if(!t||!t.placeable)return!1;let n=this.raycast();if(!n)return!1;let r=n.x+n.normal.x,i=n.y+n.normal.y,a=n.z+n.normal.z,o=this.world.getDef(r,i,a);if(o&&o.shape!==`liquid`&&o.shape!==`cross`)return!1;let s=this.radius;return r+1>this.position.x-s&&r<this.position.x+s&&a+1>this.position.z-s&&a<this.position.z+s&&i+1>this.position.y+.05&&i<this.position.y+this.height?!1:(this.world.setBlock(r,i,a,t.id),this.particles?.spawn(r+.5,i+.5,a+.5,this.blockColor(t),5,{speed:.7,life:.35,size:.06}),this.audio?.placeBlock(t),this.swing=1,this.swingKind=`place`,!0)}attack(e){if(!e||this.attackCooldown>0)return!1;this.attackCooldown=.42;let t=this.selectedStack()?.item?.damage||1;return e.takeDamage(t,this),this.swing=1,this.swingKind=`attack`,this.audio?.hit(),!0}takeDamage(e,t=null){this.mode===`creative`||e<=0||(this.hp=Math.max(0,this.hp-e),this.onDamage?.(e,t),this.audio?.hurt(),this.particles?.spawn(this.position.x,this.position.y+1.1,this.position.z,`#d84a3a`,5,{speed:1,life:.4}),this.hp<=0&&this.die())}heal(e){this.hp=Math.min(this.maxHp,this.hp+e)}die(){this.onDeath?.(),this.position.copy(this.spawnPoint),this.velocity.set(0,0,0),this.hp=this.maxHp,this.hunger=20}toggleFly(e=null){this.mode!==`creative`&&e!==!1?this.onToast?.(`Flight is only available in Creative mode`):(this.flying=e??!this.flying,this.velocity.y=0,this.onToast?.(this.flying?`Flight enabled`:`Flight disabled`))}doubleTapSpace(){this.mode===`creative`&&this.toggleFly()}reset(){this.position.copy(this.spawnPoint),this.velocity.set(0,0,0),this.hp=this.maxHp,this.hunger=20,this.flying=!1}},Df=new Map;function Of(e,t={}){let n=`${e}|${t.emissive||``}|${t.transparent||``}|${t.opacity??1}`;if(Df.has(n))return Df.get(n);let r=new Da({color:new I(e),emissive:t.emissive?new I(t.emissive):0,emissiveIntensity:t.emissiveIntensity??1,transparent:!!t.transparent,opacity:t.opacity??1,flatShading:!0});return Df.set(n,r),r}function kf(e,t){let n=new I(e);return n.offsetHSL(0,0,t),`#${n.getHexString()}`}function Af(e,t,n,r,i={}){let a=new vi(new ca(t,n,r),Of(e,i));return a.castShadow=!0,a.receiveShadow=!0,a}function Q(e,t,n,r,i,a,o,s,c){let l=Af(t,n,r,i,c);return l.position.set(a,o,s),e.add(l),l}function $(e,t,n,r){let i=new Gn;return i.position.set(t,n,r),e.add(i),i}function jf(e,t,n,r,i,a,o,s=`#f4f3e8`){let c=Math.max(.035,a),l=Math.max(.04,a*1.05);for(let a of[-1,1]){let u=Q(e,s,c,l,.018,t+a*i,n,r+.002);u.material=Of(s,{emissive:s,emissiveIntensity:.12}),Q(e,o,c*.55,l*.8,.022,t+a*i+a*.004,n-.002,r+.012,{emissive:o,emissiveIntensity:.65})}}function Mf(e,t,n,r,i,a,o=`#2a1a18`){return Q(e,o,i,a,.02,t,n,r+.004)}function Nf(e,t,n,r,i,a,o,s,c=!0){let l=[];for(let c of[-1,1]){let u=$(e,a*c,o,s);Q(u,t,n,r,i,0,-r/2,0),l.push(u)}return l}function Pf(e,t,n,r,i,a,o,s,c){let l=[];for(let u of[-1,1]){let d=$(e,a*u,o,s);Q(d,t,n,r,i,u*n/2,0,0),c&&Q(d,c,n*.55,r*.16,i*1.04,u*n*.3,-r*.18,0),d.userData.side=u,l.push(d)}return l}function Ff(e,t,n={}){let r=t.colors,i=t.height,a=Math.max(.42,t.width),o=i*(n.legH||.42),s=i*(n.bodyH||.34),c=i*(n.headS||.19),l=Nf(e,r.limb,a*.23,o,a*.26,a*.2,o,0),u=Q(e,n.bodyColor||r.body,a*.68,s,a*.4,0,o+s/2,0),d=$(e,0,o+s+c*.46,0),f=Q(d,n.headColor||r.head,a*.58,c,a*.55,0,0,0),p=[];for(let t of[-1,1]){let i=$(e,a*.42*t,o+s-.02,0);Q(i,n.armColor||r.head,a*.16,s*.94,a*.18,0,-s*.44,0),p.push(i)}return jf(d,0,c*.08,a*.285,a*.14,c*.2,r.eye),e.userData.parts={legs:l,arms:p,head:d,body:u,headBox:f},e.userData.parts}function If(e,t,n={}){let r=t.colors,i=Math.max(.5,t.width),a=t.height,o=a*(n.legH||.4),s=a*(n.bodyH||.28),c=a*(n.bodyD||.72),l=Q(e,r.body,i*.92,s,c,0,o+s/2,0),u=$(e,0,o+s*.9,c*.42),d=i*(n.headW||.58),f=a*(n.headH||.23),p=a*(n.headD||.26);Q(u,r.head,d,f,p,0,0,p*.34),n.snout!==!1&&Q(u,r.accent,d*.55,f*.34,p*.48,0,-f*.24,p*.84),jf(u,0,f*.12,p*.86,d*.24,f*.17,r.eye);let m=[...Nf(e,r.limb,i*.18,o,i*.18,i*.3,o,c*.33),...Nf(e,r.limb,i*.18,o,i*.18,i*.3,o,-c*.33)],h=null;return t.flags.tail&&(h=$(e,0,o+s*.85,-c*.5),Q(h,r.limb,i*.08,a*.18,i*.08,0,a*.06,-a*.04)),e.userData.parts={legs:m,head:u,body:l,tail:h},e.userData.parts}function Lf(e,t,n){let r=t.colors;if(t.flags.horns)for(let e of[-1,1]){let i=Q(n.head,r.accent,t.width*.07,t.height*.12,t.width*.07,e*t.width*.18,t.height*.14,t.height*.12);i.rotation.z=e*.5}if(t.flags.ears)for(let e of[-1,1])Q(n.head,r.head,t.width*.11,t.height*.1,t.width*.05,e*t.width*.22,t.height*.12,t.height*.04);if(t.flags.mane)for(let e=0;e<4;e++)Q(n.head,r.accent,t.width*.07,t.height*.11,t.width*.07,0,t.height*.17-e*t.height*.04,-t.height*.03);t.flags.saddle&&Q(n.body,`#7a3a22`,t.width*.4,t.height*.05,t.height*.18,0,t.height*.16,0)}var Rf={quadruped(e,t){let n=If(e,t);if(Lf(e,t,n),t.id===`mooshroom`){for(let[e,r,i]of[[-.14,.1,.2],[.17,-.03,-.15],[.02,.12,-.25]])Q(n.body,`#d8d0c8`,t.width*.2,t.height*.1,t.width*.2,e*t.width,r*t.height,i*t.height);Q(n.body,`#d83a3a`,t.width*.12,t.height*.08,t.width*.12,0,t.height*.18,0)}return n},horse(e,t){let n=If(e,t,{legH:.47,bodyH:.3,bodyD:.82,headH:.2,headD:.34,snout:!1}),r=t.colors;Q(n.head,r.accent,t.width*.22,t.height*.2,t.height*.14,0,-t.height*.02,t.height*.16);for(let e of[-1,1])Q(n.head,r.head,t.width*.1,t.height*.13,t.width*.07,e*t.width*.2,t.height*.1,0);for(let e=0;e<4;e++)Q(n.head,r.accent,t.width*.06,t.height*.06,t.width*.06,0,t.height*.2-e*t.height*.05,-t.height*.04);let i=$(e,0,t.height*.68,-t.width*.55);return Q(i,r.accent,t.width*.08,t.height*.34,t.width*.08,0,-t.height*.15,0),n.tail=i,t.flags.saddle&&Q(n.body,`#6a3a20`,t.width*.5,t.height*.06,t.height*.2,0,t.height*.16,0),n},zombie(e,t){let n=Ff(e,t,{bodyColor:t.colors.body,headColor:t.colors.head});for(let e of n.arms)e.rotation.x=-1.25;return Q(n.body,t.colors.accent,t.width*.42,t.height*.08,t.width*.42,0,.02,0),n},skeleton(e,t){let n=Ff(e,t,{bodyH:.28,legH:.46,bodyColor:t.colors.body,headColor:t.colors.head});if(Q(n.body,t.colors.accent,t.width*.58,t.height*.04,t.width*.3,0,.02,0),Q(n.body,t.colors.accent,t.width*.48,t.height*.04,t.width*.3,0,-t.height*.06,0),t.id===`wither_skeleton`)for(let e of[-1,1])Q(n.head,`#3a3a40`,t.width*.08,t.height*.1,t.width*.08,e*t.width*.16,t.height*.12,0);return n},villager(e,t){let n=Ff(e,t,{bodyH:.38,legH:.36,headS:.2}),r=t.colors;return Q(n.head,r.accent,t.width*.2,t.height*.12,t.width*.16,0,-t.height*.015,t.width*.32),Q(n.body,r.accent,t.width*.5,t.height*.1,t.width*.42,0,-t.height*.08,0),t.id===`wandering_trader`&&(Q(n.head,`#b83a3a`,t.width*.7,t.height*.07,t.width*.68,0,t.height*.15,0),Q(n.head,`#b83a3a`,t.width*.5,t.height*.05,t.width*.5,0,t.height*.2,0)),n},illager(e,t){let n=Ff(e,t,{bodyH:.4,legH:.34,headS:.19}),r=t.colors;return Q(n.head,r.accent,t.width*.2,t.height*.1,t.width*.16,0,0,t.width*.32),Q(n.body,r.accent,t.width*.58,t.height*.12,t.width*.44,0,-t.height*.04,0),t.flags.robe&&Q(e,r.body,t.width*.76,t.height*.44,t.width*.48,0,t.height*.22,0),(t.id===`evoker`||t.id===`illusioner`)&&(Q(n.head,`#2a2a32`,t.width*.66,t.height*.07,t.width*.62,0,t.height*.16,0),Q(n.head,`#2a2a32`,t.width*.46,t.height*.1,t.width*.44,0,t.height*.22,0)),n},witch(e,t){let n=Ff(e,t,{bodyH:.38,legH:.36}),r=t.colors;return Q(n.head,r.accent,t.width*.2,t.height*.12,t.width*.16,0,0,t.width*.3),Q(n.head,`#2a1a2a`,t.width*.85,t.height*.08,t.width*.82,0,t.height*.15,0),Q(n.head,`#2a1a2a`,t.width*.55,t.height*.14,t.width*.55,0,t.height*.23,0),Q(n.head,`#2a1a2a`,t.width*.28,t.height*.08,t.width*.3,0,t.height*.31,0),n},piglin(e,t){let n=Ff(e,t,{bodyH:.37,legH:.37}),r=t.colors;Q(n.head,r.accent,t.width*.5,t.height*.1,t.width*.23,0,-t.height*.03,t.width*.3);for(let e of[-1,1])Q(n.head,r.accent,t.width*.13,t.height*.13,t.width*.05,e*t.width*.26,t.height*.02,0);return t.id===`piglin_brute`&&Q(n.head,`#c8a83a`,t.width*.16,t.height*.1,t.width*.16,0,t.height*.16,0),n},creeper(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.72,i*.42,r*.6,0,i*.55,0),o=$(e,0,i*.83,0);Q(o,n.head,r*.76,i*.24,r*.72,0,0,0),jf(o,0,i*.035,r*.36,r*.21,r*.16,`#101810`),Mf(o,0,-i*.055,r*.366,r*.25,i*.1,`#101810`);let s=[];for(let t of[-1,1])for(let a of[-1,1]){let o=$(e,t*r*.23,i*.35,a*r*.21);Q(o,n.limb,r*.2,i*.35,r*.2,0,-i*.17,0),s.push(o)}return e.userData.parts={legs:s,head:o,body:a},e.userData.parts},spider(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.66,i*.4,r*.95,0,i*.55,-r*.08),o=$(e,0,i*.58,r*.46);Q(o,n.head,r*.44,i*.3,r*.36,0,0,0);for(let e of[-1,1])for(let t of[0,1])Q(o,n.eye,r*.08,i*.1,.02,e*r*(.1+t*.09),i*.06-t*i*.04,r*.185,{emissive:n.eye,emissiveIntensity:.8});let s=[];for(let t of[-1,1])for(let a=0;a<4;a++){let o=$(e,t*r*.28,i*.5,r*(.3-a*.2)),c=Q(o,n.limb,r*.5,i*.07,r*.07,t*r*.24,-i*.04,0);c.rotation.z=t*-.25,o.rotation.y=t*(.35+a*.18),s.push(o)}return e.userData.parts={legs:s,head:o,body:a},e.userData.parts},enderman(e,t){let n=t.colors,r=t.width,i=t.height,a=Nf(e,n.limb,r*.17,i*.52,r*.2,r*.18,i*.52,0),o=Q(e,n.body,r*.54,i*.37,r*.28,0,i*.7,0),s=$(e,0,i*.94,0);Q(s,n.head,r*.46,i*.18,r*.4,0,0,0);for(let e of[-1,1])Q(s,`#d8a8ff`,r*.14,i*.035,.02,e*r*.11,i*.015,r*.2,{emissive:`#d8a8ff`,emissiveIntensity:1});let c=[];for(let t of[-1,1]){let a=$(e,t*r*.33,i*.86,0);Q(a,n.limb,r*.12,i*.62,r*.12,0,-i*.3,0),c.push(a)}return e.userData.parts={legs:a,head:s,body:o,arms:c},e.userData.parts},warden(e,t){let n=Ff(e,t,{bodyH:.36,legH:.42,headS:.17,armColor:t.colors.body}),r=t.colors;Q(n.body,r.accent,t.width*.5,t.height*.1,t.width*.5,0,t.height*.03,0,{emissive:r.accent,emissiveIntensity:.5});for(let e of[-1,1]){let i=Q(n.head,r.accent,t.width*.12,t.height*.14,t.width*.12,e*t.width*.2,t.height*.12,0);i.rotation.z=e*.8}for(let e of[-1,1])for(let i of[0,1,2])Q(n.body,r.accent,t.width*.07,t.height*.08,t.width*.07,e*t.width*(.18+i*.12),t.height*(.05-i*.01),t.width*.24);return n},creaking(e,t){let n=t.colors,r=t.width,i=t.height,a=Nf(e,n.limb,r*.15,i*.4,r*.15,r*.18,i*.4,0);Q(e,n.body,r*.52,i*.48,r*.34,0,i*.64,0);let o=$(e,0,i*.93,0);Q(o,n.head,r*.4,i*.15,r*.36,0,0,0);for(let e of[-1,1])Q(o,n.eye,r*.09,i*.03,.02,e*r*.1,i*.01,r*.18,{emissive:n.eye,emissiveIntensity:1});let s=[];for(let t of[-1,1]){let a=$(e,t*r*.34,i*.82,0);Q(a,n.limb,r*.1,i*.55,r*.1,0,-i*.27,0),s.push(a)}for(let t=0;t<3;t++)Q(e,n.accent,r*.08,i*.08,r*.08,(t-1)*r*.18,i*.98+t*i*.03,-r*.03);return e.userData.parts={legs:a,head:o,arms:s},e.userData.parts},golem(e,t){let n=t.colors,r=t.width*1.2,i=t.height,a=Nf(e,n.limb,r*.24,i*.38,r*.26,r*.22,i*.38,0),o=Q(e,n.body,r*.72,i*.36,r*.48,0,i*.58,0),s=$(e,0,i*.85,0);Q(s,n.head,r*.42,i*.18,r*.38,0,0,0),jf(s,0,0,r*.19,r*.1,i*.035,n.eye),Q(s,n.accent,r*.34,i*.05,.02,0,-i*.06,r*.195);let c=[];for(let t of[-1,1]){let a=$(e,t*r*.44,i*.7,0);Q(a,n.limb,r*.2,i*.48,r*.22,0,-i*.22,0),c.push(a)}for(let e of[-1,1])Q(o,n.accent,r*.08,r*.08,.02,e*r*.2,i*.04,r*.245);return e.userData.parts={legs:a,head:s,body:o,arms:c},e.userData.parts},snow_golem(e,t){let n=t.colors,r=t.width,i=t.height;Q(e,`#f4f8f8`,r*.72,i*.3,r*.68,0,i*.22,0),Q(e,`#ffffff`,r*.56,i*.27,r*.52,0,i*.52,0);let a=$(e,0,i*.79,0);Q(a,`#ffffff`,r*.46,i*.25,r*.44,0,0,0);for(let e of[-1,1])Q(a,n.eye,r*.07,i*.04,.02,e*r*.11,i*.03,r*.225);Q(a,`#e8862a`,r*.1,i*.13,r*.1,0,-i*.04,r*.25);for(let t of[-1,1])Q(e,`#7a5a32`,r*.08,i*.07,r*.5,t*r*.42,i*.55,0);return e.userData.parts={head:a},e.userData.parts},copper_golem(e,t){let n=t.colors,r=t.width,i=t.height,a=Nf(e,n.limb,r*.19,i*.28,r*.2,r*.17,i*.28,0);Q(e,n.body,r*.58,i*.38,r*.42,0,i*.48,0);let o=$(e,0,i*.75,0);Q(o,n.head,r*.44,i*.2,r*.4,0,0,0),jf(o,0,0,r*.2,r*.1,i*.05,n.eye,`#f8f8e0`),Q(o,n.accent,r*.08,r*.08,.02,0,-i*.04,r*.21);for(let e of[-1,1])Q(o,n.accent,r*.08,i*.12,r*.08,e*r*.23,i*.1,0);let s=[];for(let t of[-1,1]){let a=$(e,t*r*.36,i*.62,0);Q(a,n.limb,r*.14,i*.36,r*.14,0,-i*.17,0),s.push(a)}return e.userData.parts={legs:a,head:o,arms:s},e.userData.parts},ravager(e,t){let n=t.colors,r=t.width,i=t.height,a=i*.36;for(let t of[-1,1])for(let i of[-1,1])Q($(e,i*r*.3,a,t*r*.28),n.limb,r*.2,a,r*.2,0,-a/2,0);Q(e,n.body,r*.82,i*.36,r*1.3,0,a+i*.18,0);let o=$(e,0,i*.62,r*.65);Q(o,n.head,r*.6,i*.24,r*.55,0,0,0);for(let e of[-1,1]){let t=Q(o,n.accent,r*.09,i*.17,r*.09,e*r*.2,i*.13,0);t.rotation.z=e*.5}return jf(o,0,i*.03,r*.28,r*.13,i*.045,n.eye),Q(o,`#3a1a1a`,r*.38,i*.08,.03,0,-i*.07,r*.28),e.userData.parts={head:o},e.userData.parts},hoglin(e,t){let n=t.colors,r=t.width,i=t.height,a=i*.35;for(let t of[-1,1])for(let i of[-1,1])Q($(e,i*r*.28,a,t*r*.3),n.limb,r*.18,a,r*.18,0,-a/2,0);Q(e,n.body,r*.72,i*.34,r*1.1,0,a+i*.18,0);let o=$(e,0,i*.6,r*.58);Q(o,n.head,r*.5,i*.22,r*.42,0,0,0),Q(o,n.accent,r*.28,i*.1,r*.18,0,-i*.05,r*.3),jf(o,0,i*.03,r*.215,r*.12,i*.045,n.eye);for(let e of[-1,1]){let t=Q(o,n.accent,r*.08,i*.15,r*.08,e*r*.16,i*.13,0);t.rotation.z=e*.5}return e.userData.parts={head:o},e.userData.parts},llama(e,t){let n=If(e,t,{legH:.47,bodyH:.24,bodyD:.66,headH:.15,headD:.2}),r=t.colors;Q($(e,0,t.height*.7,t.width*.3),r.body,t.width*.18,t.height*.3,t.width*.2,0,t.height*.13,0),n.head.position.y=t.height*.9,n.head.position.z=t.width*.47;for(let e of[-1,1])Q(n.head,r.head,t.width*.1,t.height*.13,t.width*.06,e*t.width*.18,t.height*.14,0);return t.id===`trader_llama`&&(Q(n.body,`#3a6aa8`,t.width*.6,t.height*.06,t.height*.4,0,t.height*.13,0),Q(n.body,`#c8a83a`,t.width*.3,t.height*.18,t.height*.2,0,t.height*.1,0)),n},goat(e,t){let n=If(e,t,{legH:.42,bodyH:.3,bodyD:.62,headH:.2}),r=t.colors;for(let e of[-1,1]){let i=Q(n.head,r.accent,t.width*.08,t.height*.24,t.width*.08,e*t.width*.16,t.height*.19,-t.height*.02);i.rotation.x=-.35}return Q(n.head,r.accent,t.width*.12,t.height*.08,t.width*.06,0,-t.height*.06,t.height*.13),n},camel(e,t){let n=If(e,t,{legH:.52,bodyH:.24,bodyD:.7,headH:.18,headD:.26}),r=t.colors;Q(n.body,r.body,t.width*.45,t.height*.13,t.width*.45,0,t.height*.15,0),Q(n.body,r.body,t.width*.4,t.height*.1,t.width*.4,0,t.height*.2,t.width*.1);for(let e of[-1,1])Q(n.head,r.head,t.width*.09,t.height*.1,t.width*.05,e*t.width*.19,t.height*.12,0);return t.flags.saddle&&Q(n.body,`#a83a2a`,t.width*.55,t.height*.05,t.height*.22,0,t.height*.2,0),n},panda(e,t){let n=If(e,t,{legH:.34,bodyH:.4,bodyD:.72,headH:.25});t.colors,Q(n.body,`#2a2a2a`,t.height*.28,t.height*.22,t.width*.28,t.width*.2,t.height*.04,0),Q(n.body,`#2a2a2a`,t.height*.22,t.height*.2,t.width*.22,-t.width*.24,t.height*.02,0);for(let e of[-1,1])Q(n.head,`#2a2a2a`,t.width*.16,t.height*.12,.02,e*t.width*.15,t.height*.02,t.width*.34);return n},rabbit(e,t){let n=t.colors,r=t.width,i=t.height;Q(e,n.body,r*.66,i*.36,i*.52,0,i*.42,0);let a=$(e,0,i*.65,i*.25);Q(a,n.head,r*.5,i*.34,i*.36,0,0,0);for(let e of[-1,1]){let t=Q(a,n.head,r*.13,i*.38,r*.08,e*r*.13,i*.32,0);t.rotation.z=e*.12,Q(a,n.accent,r*.07,i*.18,.02,e*r*.13,i*.33,r*.05)}jf(a,0,i*.03,i*.185,r*.15,i*.06,n.eye),Q(a,`#e89aa8`,r*.08,i*.05,.02,0,-i*.05,i*.19);let o=Q(e,n.accent,r*.18,r*.18,r*.18,0,i*.4,-i*.28);return e.userData.parts={head:a,tail:o},e.userData.parts},cat(e,t){let n=If(e,t,{legH:.32,bodyH:.34,bodyD:.56,headH:.26,headD:.2}),r=t.colors;for(let e of[-1,1]){let i=Q(n.head,r.head,t.width*.13,t.height*.16,t.width*.07,e*t.width*.18,t.height*.17,0);i.rotation.z=e*.1}return jf(n.head,0,t.height*.02,t.height*.105,t.width*.14,t.height*.045,r.eye,`#f0f0c8`),Q(n.head,r.accent,t.width*.18,t.height*.07,t.width*.1,0,-t.height*.04,t.height*.12),n.tail&&(n.tail.rotation.x=-.8),n},canine(e,t){let n=If(e,t,{legH:.38,bodyH:.28,bodyD:.66,headH:.22}),r=t.colors;for(let e of[-1,1])Q(n.head,r.head,t.width*.11,t.height*.1,t.width*.06,e*t.width*.18,t.height*.15,0);let i=$(e,0,t.height*.58,-t.width*.45),a=Q(i,r.limb,t.width*.08,t.height*.22,t.width*.08,0,t.height*.05,-t.height*.08);return a.rotation.x=-.6,n.tail=i,n},bird(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.6,i*.44,r*.62,0,i*.46,0),o=$(e,0,i*.72,r*.24);Q(o,n.head,r*.36,i*.24,r*.34,0,0,0),Q(o,n.accent,r*.16,i*.07,r*.2,0,-i*.03,r*.22);for(let e of[-1,1])Q(o,n.eye,r*.05,i*.04,.01,e*r*.11,i*.04,r*.17);if(t.id===`parrot`)for(let t=0;t<3;t++)Q(e,n.accent,r*.11,i*.22,r*.05,(t-1)*r*.1,i*.13,-r*.3);let s=Nf(e,n.limb,r*.09,i*.3,r*.07,r*.12,i*.3,0),c=Pf(e,n.head,r*.34,i*.1,r*.5,r*.27,i*.56,0,n.accent);return e.userData.parts={legs:s,head:o,wings:c,body:a},e.userData.parts},bat(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.36,i*.36,r*.34,0,i*.5,0),o=$(e,0,i*.72,0);Q(o,n.head,r*.3,i*.2,r*.28,0,0,0);for(let e of[-1,1]){let t=Q(o,n.limb,r*.1,i*.18,r*.05,e*r*.11,i*.14,0);t.rotation.z=e*.2}jf(o,0,0,r*.145,r*.08,i*.03,n.eye);let s=Pf(e,n.limb,r*.9,i*.36,r*.05,r*.55,i*.53,0,n.accent);return e.userData.parts={head:o,wings:s,body:a},zf(e,a,o,s)},bee(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.62,i*.4,r*.8,0,i*.5,0);Q(a,n.accent,r*.62,i*.12,r*.16,0,0,0),Q(a,n.accent,r*.62,i*.12,r*.16,0,0,r*.3);let o=$(e,0,i*.53,r*.42);Q(o,n.head,r*.42,i*.34,r*.3,0,0,0),jf(o,0,0,r*.155,r*.1,i*.05,n.eye);let s=Pf(e,`#e8f8ff`,r*.44,i*.2,r*.4,r*.3,i*.72,0,null);return e.userData.parts={head:o,wings:s,body:a},e.userData.parts},allay(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.5,i*.48,r*.4,0,i*.43,0),o=$(e,0,i*.76,0);Q(o,n.head,r*.42,i*.26,r*.4,0,0,0),jf(o,0,0,r*.2,r*.11,i*.04,n.eye),Q(o,n.accent,r*.12,i*.06,r*.12,0,-i*.06,0);let s=Pf(e,`#d8f4ff`,r*.6,i*.24,r*.12,r*.3,i*.62,0,`#8ecde8`,{emissive:`#a8e0ff`,emissiveIntensity:.25});return e.userData.parts={head:o,wings:s,body:a},e.userData.parts},vex(e,t){let n=Rf.allay(e,t);return n.body.material=Of(t.colors.body,{transparent:!0,opacity:.9}),n},phantom(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.36,i*.34,r*.8,0,i*.5,0),o=$(e,0,i*.55,r*.45);Q(o,n.head,r*.32,i*.22,r*.3,0,0,0),jf(o,0,0,r*.15,r*.08,i*.03,n.eye,`#c8ffdf`);let s=Pf(e,n.limb,r*1.1,i*.5,r*.05,r*.65,i*.58,0,n.accent);return e.userData.parts={head:o,wings:s,body:a},e.userData.parts},ghast(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.95,i*.72,r*.9,0,i*.55,0),o=$(e,0,i*.48,0);for(let e of[-1,1])Q(o,n.eye,r*.1,i*.08,.03,e*r*.22,i*.06,r*.46,{emissive:`#e8e8e8`,emissiveIntensity:.6});Q(o,`#3a1a1a`,r*.36,i*.09,.03,0,-i*.13,r*.46);let s=[];for(let t=0;t<6;t++){let a=$(e,(t-2.5)*r*.1,i*.24,0);Q(a,n.limb,r*.08,i*.3,r*.08,0,-i*.14,0),s.push(a)}return e.userData.parts={head:o,tentacles:s,body:a},e.userData.parts},happy_ghast(e,t){let n=Rf.ghast(e,t);t.colors;let r=t.width,i=t.height;for(let e of[-1,1])Q(n.head,`#d8d8d8`,r*.16,i*.1,.03,e*r*.22,i*.1,r*.47),Q(n.head,`#8ac8d8`,r*.1,i*.04,.04,e*r*.22,i*.1,r*.485);return Q(n.head,`#5a3a2a`,r*.42,i*.12,r*.06,0,-i*.03,r*.47),n},blaze(e,t){let n=t.colors,r=t.width,i=t.height,a=$(e,0,i*.7,0);Q(a,n.head,r*.42,i*.22,r*.4,0,0,0),jf(a,0,0,r*.2,r*.1,i*.04,n.eye||`#f8e86a`);let o=[];for(let t=0;t<8;t++){let a=t/8*Math.PI*2,s=$(e,Math.cos(a)*r*.42,i*.5+t%2*i*.08,Math.sin(a)*r*.38);Q(s,t%2?n.accent:`#f8b83a`,r*.09,i*.28,r*.09,0,0,0,{emissive:`#f8a83a`,emissiveIntensity:.7}),s.rotation.z=Math.cos(a)*.4,o.push(s)}return e.userData.parts={head:a,rods:o},e.userData.parts},breeze(e,t){let n=t.colors,r=t.width,i=t.height,a=$(e,0,i*.68,0);Q(a,n.head,r*.44,i*.24,r*.4,0,0,0),jf(a,0,0,r*.2,r*.1,i*.035,n.eye,`#f0e8ff`);let o=[];for(let t=0;t<5;t++){let a=t/5*Math.PI*2,s=$(e,Math.cos(a)*r*.28,i*.5,Math.sin(a)*r*.28);Q(s,t%2?n.accent:`#9ae8e0`,r*.08,i*.3,r*.08,0,0,0,{emissive:`#8ae8e0`,emissiveIntensity:.5}),o.push(s)}let s=Q(e,n.body,r*.35,i*.3,r*.32,0,i*.44,0);return e.userData.parts={head:a,rods:o,body:s},e.userData.parts},squid(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.head,r*.7,i*.55,r*.7,0,i*.58,0);jf(a,0,0,r*.355,r*.16,i*.08,n.eye);let o=[];for(let t=0;t<6;t++){let a=$(e,(t-2.5)*r*.1,i*.33,0);Q(a,n.limb,r*.07,i*.35,r*.07,0,-i*.17,0),o.push(a)}return e.userData.parts={head:a,tentacles:o},e.userData.parts},fish(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.4,i*.42,r*.8,0,i*.5,0),o=$(e,0,i*.5,r*.35);return Q(o,n.head,r*.32,i*.34,r*.26,0,0,0),jf(o,0,i*.04,r*.135,r*.09,i*.04,n.eye),Q(e,n.accent,r*.08,i*.28,r*.3,0,i*.55,-r*.42),Q(e,n.accent,r*.06,i*.18,r*.24,r*.2,i*.8,0),e.userData.parts={head:o,body:a},e.userData.parts},pufferfish(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.7,i*.7,r*.7,0,i*.5,0);for(let t=0;t<8;t++){let a=t/8*Math.PI*2;Q(e,n.accent,r*.1,r*.1,r*.1,Math.cos(a)*r*.36,i*.5+Math.sin(a)*i*.3,0)}return jf(a,0,i*.08,r*.355,r*.17,i*.09,n.eye),Q(e,n.accent,r*.06,i*.3,r*.25,0,i*.5,-r*.38),e.userData.parts={body:a},e.userData.parts},turtle(e,t){let n=t.colors,r=t.width,i=t.height,a=i*.25;for(let t of[-1,1])for(let i of[-1,1])Q(e,n.limb,r*.2,a,r*.18,t*r*.3,a/2,i*r*.25);Q(e,n.body,r*.72,i*.25,r*.8,0,i*.35,0);let o=Q(e,n.accent,r*.78,i*.22,r*.86,0,i*.5,0),s=$(e,0,i*.38,r*.48);return Q(s,n.head,r*.26,i*.2,r*.28,0,0,0),jf(s,0,i*.03,r*.145,r*.08,i*.035,n.eye),e.userData.parts={head:s,shell:o},e.userData.parts},axolotl(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.4,i*.35,r*.8,0,i*.45,0),o=$(e,0,i*.47,r*.4);Q(o,n.head,r*.36,i*.3,r*.3,0,0,0),jf(o,0,i*.03,r*.155,r*.1,i*.035,n.eye),Q(o,`#d85a7a`,r*.16,i*.05,.02,0,-i*.06,r*.155);for(let e of[-1,1])for(let t=0;t<3;t++)Q(o,n.accent,r*.04,i*.1,r*.04,e*r*.22,i*.1-t*i*.05,0);return Q(e,n.accent,r*.05,i*.22,r*.28,0,i*.5,-r*.4),e.userData.parts={head:o,body:a},e.userData.parts},tadpole(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.32,i*.4,r*.34,0,i*.45,r*.16);return jf(a,0,i*.06,r*.16,r*.09,i*.04,n.eye),Q(e,n.limb,r*.05,i*.24,r*.35,0,i*.4,-r*.2),e.userData.parts={body:a},e.userData.parts},dolphin(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.34,i*.34,r*1.1,0,i*.5,0);Q(e,n.head,r*.28,i*.27,r*.3,0,i*.52,r*.58),Q(e,n.accent,r*.16,i*.08,r*.42,0,i*.46,r*.62),Q(e,n.accent,r*.06,i*.25,r*.25,0,i*.7,0),Q(e,n.accent,r*.5,i*.05,r*.24,0,i*.43,-r*.2),Q(e,n.accent,r*.55,i*.06,r*.3,0,i*.44,-r*.58);for(let e of[-1,1])Q(a,n.eye,r*.05,i*.05,.02,e*r*.14,i*.05,r*.45);return e.userData.parts={body:a},e.userData.parts},guardian(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.7,i*.6,r*.7,0,i*.5,0),o=$(e,0,i*.52,r*.35);Q(o,n.head,r*.46,i*.4,r*.3,0,0,0),jf(o,0,i*.02,r*.155,r*.11,i*.06,n.eye,`#f8d85a`);for(let t=0;t<7;t++){let a=t/7*Math.PI*2;Q(e,n.accent,r*.08,r*.08,i*.25,Math.cos(a)*r*.4,i*.5+Math.sin(a)*i*.15,0)}let s=Q(e,n.accent,r*.1,i*.18,r*.4,0,i*.45,-r*.5);return e.userData.parts={head:o,body:a,tail:s},e.userData.parts},shulker(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.85,i*.6,r*.85,0,i*.36,0),o=$(e,0,i*.7,0);Q(o,n.head,r*.45,i*.24,r*.45,0,0,0),jf(o,0,i*.02,r*.228,r*.12,i*.04,n.eye);for(let e of[-1,1])for(let t of[-1,1])Q(a,n.accent,r*.18,r*.18,r*.18,e*r*.35,i*.16,t*r*.35);return e.userData.parts={head:o,shell:a},e.userData.parts},slime(e,t){let n=t.colors,r=t.width,i=t.height,a=Af(n.body,r*.9,i*.75,r*.9,{transparent:!0,opacity:.82});return a.position.y=i*.4,e.add(a),jf(e,0,i*.55,r*.455,r*.15,i*.1,n.eye),Mf(e,0,i*.35,r*.456,r*.2,i*.04,`#2a3a2a`),e.userData.parts={body:a},e.userData.parts},magma(e,t){let n=Rf.slime(e,t);for(let e=0;e<6;e++)Q(n.body,`#f8a83a`,t.width*.12,t.height*.08,t.width*.05,(e-2.5)*t.width*.13,t.height*.08,t.width*.46,{emissive:`#f8a83a`,emissiveIntensity:.7});return n},silverfish(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.38,i*.28,r*.7,0,i*.4,0),o=Q(e,n.head,r*.3,i*.26,r*.26,0,i*.42,r*.45);for(let e of[-1,1])Q(o,n.eye,r*.045,i*.03,.01,e*r*.08,i*.02,r*.13);for(let t=0;t<3;t++)Q(e,n.limb,r*.42,i*.04,r*.04,0,i*.3,r*(.18-t*.22));return e.userData.parts={body:a,head:o},e.userData.parts},endermite(e,t){let n=t.colors,r=t.width,i=t.height,a=Q(e,n.body,r*.4,i*.3,r*.72,0,i*.4,0);Q(e,n.head,r*.3,i*.26,r*.28,0,i*.43,r*.44);for(let t of[-1,1])Q(e,n.eye,r*.05,i*.04,.02,t*r*.08,i*.46,r*.44,{emissive:`#d85aff`,emissiveIntensity:.8});for(let t=0;t<3;t++)Q(e,n.limb,r*.5,i*.035,r*.04,0,i*.3,r*(.2-t*.22));return e.userData.parts={body:a},e.userData.parts},strider(e,t){let n=t.colors,r=t.width,i=t.height,a=i*.35;for(let t of[-1,1])for(let i of[-1,1]){let o=$(e,t*r*.3,a,i*r*.28);Q(o,n.limb,r*.17,a,r*.17,0,-a/2,0),o.rotation.z=t*.15}Q(e,n.body,r*.72,i*.3,r*.85,0,a+i*.15,0),Q(e,n.head,r*.46,i*.25,r*.48,0,i*.7,r*.45);for(let t of[-1,1])Q(e,n.eye,r*.08,i*.06,.02,t*r*.15,i*.72,r*.69,{emissive:n.eye,emissiveIntensity:.9});for(let t of[-1,1])Q(e,n.accent,r*.12,i*.13,r*.08,t*r*.2,i*.78,r*.42);return e.userData.parts={head:e.children[4]},e.userData.parts},frog(e,t){let n=t.colors,r=t.width,i=t.height;Q(e,n.body,r*.72,i*.4,r*.7,0,i*.34,0);let a=$(e,0,i*.55,r*.15);Q(a,n.head,r*.66,i*.28,r*.5,0,0,0);for(let e of[-1,1])Q(a,n.eye,r*.15,i*.15,r*.15,e*r*.23,i*.16,0),Q(a,`#101010`,r*.07,i*.07,.02,e*r*.23,i*.16,r*.08);for(let t of[-1,1])for(let a of[-1,1])Q(e,n.limb,r*.18,i*.16,r*.2,t*r*.3,i*.08,a*r*.26);return e.userData.parts={head:a},e.userData.parts},armadillo(e,t){let n=t.colors,r=t.width,i=t.height;for(let t of[-1,1])for(let a of[-1,1])Q(e,n.limb,r*.16,i*.2,r*.16,t*r*.28,i*.1,a*r*.25);Q(e,n.body,r*.7,i*.35,r*.9,0,i*.3,0);for(let t=0;t<4;t++)Q(e,n.accent,r*.72,i*.06,r*.16,0,i*.47,r*(.28-t*.19));let a=Q(e,n.head,r*.34,i*.22,r*.28,0,i*.32,r*.5);for(let e of[-1,1])Q(a,n.eye,r*.05,i*.04,.02,e*r*.1,i*.03,r*.14);return e.userData.parts={head:a},e.userData.parts},sniffer(e,t){let n=t.colors,r=t.width,i=t.height,a=i*.32;for(let t of[-1,1])for(let i of[-1,1])Q($(e,t*r*.32,a,i*r*.32),n.limb,r*.24,a,r*.24,0,-a/2,0);Q(e,n.body,r*.8,i*.34,r*1.15,0,a+i*.16,0);let o=$(e,0,i*.65,r*.6);Q(o,n.head,r*.5,i*.25,r*.4,0,0,0),Q(o,n.accent,r*.3,i*.18,r*.25,0,-i*.04,r*.3),jf(o,0,i*.04,r*.205,r*.13,i*.05,n.eye);for(let e of[-1,1])Q(o,n.accent,r*.08,i*.18,r*.08,e*r*.18,i*.18,0);return e.userData.parts={head:o},e.userData.parts},dragon(e,t){let n=t.colors,r=t.width,i=t.height;Q(e,n.body,r*.7,i*.42,r*1.6,0,i*.42,0);let a=$(e,0,i*.52,r*.85);Q(a,n.head,r*.34,i*.34,r*.6,0,i*.1,r*.25),Q(a,n.head,r*.42,i*.36,r*.5,0,i*.18,r*.48),jf(a,0,i*.26,r*.25,r*.1,i*.05,`#d84aff`,`#f0d0ff`);for(let e of[-1,1]){let t=Q(a,n.accent,r*.08,i*.28,r*.08,e*r*.18,i*.33,r*.26);t.rotation.z=e*.7}let o=Pf(e,n.accent,r*1.15,i*.85,r*.08,r*.75,i*.6,0,n.limb);for(let t of[-1,1]){let a=$(e,0,i*.45,-r*.75);Q(a,n.limb,r*.2,i*.2,r*1.2,0,0,-r*.5),a.rotation.y=t*.1}return e.userData.parts={head:a,wings:o,body:e.children[0]},e.userData.parts},wither(e,t){let n=t.colors,r=t.width,i=t.height;Q(e,n.body,r*.55,i*.42,r*.5,0,i*.45,0);for(let t of[-1,0,1]){let a=$(e,t*r*.35,i*.8,0);Q(a,n.head,r*.34,i*.24,r*.34,0,0,0),jf(a,0,0,r*.17,r*.09,i*.04,`#3a6aff`,`#c8d8ff`);for(let e of[-1,1])Q(a,n.accent,r*.08,i*.12,r*.08,e*r*.16,i*.15,0)}for(let t=0;t<6;t++){let a=t/6*Math.PI*2;Q(e,n.accent,r*.1,r*.1,r*.1,Math.cos(a)*r*.3,i*.5+Math.sin(a)*i*.18,0)}return e.userData.parts={body:e.children[0]},e.userData.parts},giant(e,t){return Ff(e,t,{bodyH:.4,legH:.4,headS:.16})}};function zf(e,t,n,r){return e.userData.parts={body:t,head:n,wings:r},e.userData.parts}function Bf(e){let t=new Gn;t.name=`mob-${e.id}`;let n=Rf[e.archetype];n||(n=e.category===`passive`?Rf.quadruped:e.flying?Rf.phantom:Rf.zombie);let r=n(t,e)||{};t.userData.parts={...r},t.userData.mob=e,!t.userData.parts.head&&t.children[0]&&(t.userData.parts.head=t.children[0]);let i=new vi(new la(Math.max(.25,e.width*.6),12),new oi({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=.012,i.name=`mob-shadow`,t.add(i),t.userData.baseY=0,t}function Vf(e,t=44){let n=document.createElement(`canvas`);n.width=n.height=t;let r=n.getContext(`2d`);r.imageSmoothingEnabled=!1;let i=e.colors,a=t/44;r.fillStyle=i.head,r.fillRect(8*a,8*a,28*a,26*a),r.fillStyle=kf(i.head,-.12),r.fillRect(8*a,30*a,28*a,4*a),r.fillStyle=i.limb,(e.flags.ears||e.archetype===`cat`||e.archetype===`canine`)&&(r.fillRect(10*a,3*a,7*a,7*a),r.fillRect(27*a,3*a,7*a,7*a),r.fillStyle=i.accent,r.fillRect(12*a,5*a,3*a,3*a),r.fillRect(29*a,5*a,3*a,3*a)),e.flags.horns&&(r.fillStyle=i.accent,r.fillRect(6*a,4*a,5*a,8*a),r.fillRect(33*a,4*a,5*a,8*a)),e.flags.hat&&(r.fillStyle=`#2a1a2a`,r.fillRect(5*a,2*a,34*a,4*a),r.fillRect(14*a,-5*a,16*a,9*a)),e.flags.crown&&(r.fillStyle=`#e8c84a`,r.fillRect(9*a,1*a,4*a,7*a),r.fillRect(18*a,-2*a,4*a,10*a),r.fillRect(27*a,1*a,4*a,7*a));let o=i.eye;return r.fillStyle=`#f4efe0`,r.fillRect(13*a,16*a,7*a,5*a),r.fillRect(24*a,16*a,7*a,5*a),r.fillStyle=o,r.fillRect(15*a,17*a,3*a,3*a),r.fillRect(26*a,17*a,3*a,3*a),r.fillStyle=i.accent,e.flags.snout||e.archetype===`piglin`||e.archetype===`hoglin`?(r.fillRect(17*a,22*a,10*a,7*a),r.fillStyle=`#3a2a1a`,r.fillRect(19*a,25*a,2*a,2*a),r.fillRect(23*a,25*a,2*a,2*a)):(r.fillRect(20*a,24*a,4*a,3*a),r.fillStyle=`#2a1a18`,r.fillRect(17*a,29*a,10*a,2*a)),n}new Set(cu.filter(e=>e.boss).map(e=>e.id));var Hf=new F,Uf=new F,Wf=class{constructor(e,t,n,r,i,a,o={}){this.mob=e,this.world=t,this.scene=n,this.group=Bf(e),this.group.position.set(r,i,a),this.home=new F(r,i,a),this.vel=new F,this.hp=o.hp??e.hp,this.maxHp=this.hp,this.yaw=Math.random()*Math.PI*2,this.targetYaw=this.yaw,this.onGround=!1,this.state=`idle`,this.stateTimer=Math.random()*2,this.wanderDir=Math.random()*Math.PI*2,this.walkPhase=Math.random()*10,this.attackCooldown=0,this.hurtTimer=0,this.dead=!1,this.age=0,this.attackAnim=0,this.flying=!!e.flying,this.aquatic=!!e.aquatic,this.hostile=!!e.hostile,this.tamed=!1,this.anger=0,this.name=e.name,this.particles=o.particles,this.audio=o.audio,this.onDeath=o.onDeath||null,this.group.userData.entity=this,n.add(this.group),this.baseY=i,this.radius=Math.max(.25,e.width*.5),this.height=e.height}get position(){return this.group.position}update(e,t,n,r){if(this.dead)return;this.age+=e,this.attackCooldown=Math.max(0,this.attackCooldown-e),this.hurtTimer=Math.max(0,this.hurtTimer-e),this.attackAnim=Math.max(0,this.attackAnim-e*3.2);let i=this.group.position,a=t?t.position.x:i.x;t?t.position.y:i.y;let o=t?t.position.z:i.z,s=a-i.x,c=o-i.z,l=Math.sqrt(s*s+c*c),u=r<.24||r>.76;if([`zombie`,`skeleton`,`stray`,`drowned`,`husk`,`zombie_villager`,`phantom`].includes(this.mob.id)&&!u&&!this.aquatic&&t&&t.world&&this.world&&this.world.getBlock(Math.floor(i.x),Math.floor(i.y+this.height+.6),Math.floor(i.z))===0){if(this.hp-=e*1.8,this.hp<=0){this.die();return}Math.random()<e*3&&this.particles?.spawn(i.x,i.y+this.height*.7,i.z,`#f8a83a`,1,{speed:.3,life:.4,size:.07})}let d=0,f=0,p=0,m=this.hostile&&l<24&&t&&!t.spectator,h=this.anger>0&&l<24;this.stateTimer-=e,m||h?(this.state=`chase`,l>1.6&&(f=s/(l||1),p=c/(l||1),d=1),this.targetYaw=Math.atan2(f,p),l<this.radius+1.5&&this.attackCooldown<=0&&(this.attackCooldown=1.15+Math.random()*.5,this.attackAnim=1,this.audio?.mobAttack(this.mob),t?.takeDamage&&t.takeDamage(this.mob.damage||2,this),this.anger=Math.max(0,this.anger-4))):this.stateTimer<=0&&(this.stateTimer=1.5+Math.random()*4,this.state=Math.random()<.58?`walk`:`idle`,this.wanderDir=Math.random()*Math.PI*2),this.state===`walk`&&!m&&!h&&(f=Math.sin(this.wanderDir),p=Math.cos(this.wanderDir),d=1,this.targetYaw=this.wanderDir,i.distanceTo(this.home)>18&&(this.wanderDir=Math.atan2(this.home.x-i.x,this.home.z-i.z)));let g=(this.targetYaw-this.yaw+Math.PI*3)%(Math.PI*2)-Math.PI;this.yaw+=g*Math.min(1,e*7),this.group.rotation.y=this.yaw;let _=this.mob.speed*(this.state===`chase`?1.12:.65);if(d){let t=_*e,n=i.x+f*t,r=i.z+p*t;this.tryMove(n,i.y,r),this.walkPhase+=e*_*4.2}else this.walkPhase+=e*1.1;let v=this.world.surfaceY(i.x,i.z);if(this.flying){let t=this.mob.id===`happy_ghast`||this.mob.id===`ghast`?Math.max(v+4,this.home.y):v+1.2+Math.sin(this.age*1.7)*.6;i.y+=(t-i.y)*Math.min(1,e*1.7)}else if(this.aquatic){let t=this.findWaterY(i.x,i.z);i.y+=((t??v)-i.y)*Math.min(1,e*2.2),this.group.rotation.z=Math.sin(this.age*2)*.12,i.y+=Math.sin(this.age*2.6)*e*.18}else{let t=v+.02;i.y>t+.05?(this.vel.y-=24*e,i.y+=this.vel.y*e,i.y<t&&(i.y=t,this.vel.y=0)):(i.y=t,this.vel.y=0);let n=.7,r=this.world.getDef(Math.floor(i.x+f*n),Math.floor(i.y+.2),Math.floor(i.z+p*n));d&&r&&r.solid&&(i.y=Math.min(i.y+_*e*2.4,v+1.05))}let y=this.group.userData.parts,b=Math.sin(this.walkPhase)*(d?.42:.04);if(y){if(y.legs&&y.legs.forEach((e,t)=>{e.rotation.x=b*(t%2?-1:1)}),y.arms&&y.arms.forEach((e,t)=>{let n=this.attackAnim;this.mob.archetype===`zombie`?e.rotation.x=-1.25+b*.1:e.rotation.x=-b*(t%2?-1:1)-n*1.35,e.rotation.z=(t%2?1:-1)*.04}),y.wings){let e=Math.sin(this.age*(this.flying?16:8))*.65;y.wings.forEach((t,n)=>{t.rotation.z=(n%2?-1:1)*(.15+(this.flying?e:.08)),t.rotation.x=this.flying?Math.sin(this.age*12+n)*.12:0})}y.tail&&(y.tail.rotation.y=Math.sin(this.age*2.1)*.32),y.head&&(y.head.rotation.x=Math.sin(this.age*1.1)*.04+(this.state===`chase`?.05:0)),y.head&&(y.head.rotation.y=Math.sin(this.age*.7)*.08),y.body&&!this.flying&&(y.body.position.y+=0)}this.hurtTimer>0?this.group.scale.setScalar(1+Math.sin(this.hurtTimer*55)*.035):this.group.scale.x!==1&&this.group.scale.setScalar(1)}tryMove(e,t,n){let r=this.world.getDef(Math.floor(e),Math.floor(t+.4),Math.floor(n));return r&&r.solid?!1:(this.group.position.x=e,this.group.position.z=n,!0)}findWaterY(e,t){let n=Math.floor(e),r=Math.floor(t);for(let e=42;e>4;e--){let t=this.world.getDef(n,e,r);if(t&&t.shape===`liquid`)return e+.1}return null}takeDamage(e,t=null){this.dead||(this.hp-=e,this.hurtTimer=.35,this.anger=10,this.particles?.spawn(this.group.position.x,this.group.position.y+this.height*.55,this.group.position.z,this.mob.colors.accent,5,{speed:1,life:.45,size:.08}),this.audio?.mobHurt(this.mob),t?.position&&(Hf.copy(this.group.position).sub(t.position).setY(0).normalize(),this.group.position.addScaledVector(Hf,.18)),this.hp<=0&&this.die())}die(){if(this.dead)return;this.dead=!0;let e=this.group.position;this.particles?.spawn(e.x,e.y+this.height*.4,e.z,this.mob.egg[0],16,{speed:2,life:.8,size:.11}),this.particles?.spawn(e.x,e.y+this.height*.4,e.z,`#f4efe0`,6,{speed:1.3,life:.5,size:.07}),this.audio?.mobDeath(this.mob),this.onDeath?.(this),this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose()})}},Gf=class{constructor(e,t,n,r,i={}){this.scene=e,this.world=t,this.particles=n,this.audio=r,this.entities=[],this.spawnTimer=0,this.cap=i.cap||42,this.onEvent=i.onEvent||null,this.populateSpawnArea()}populateSpawnArea(){let e=62.02,t=[[`villager`,2.5,e,5.5],[`villager`,-2.5,e,6.5],[`villager`,1.5,e,-3.5],[`wandering_trader`,-4.5,e,13.5],[`trader_llama`,-2.5,e,16.2],[`cat`,3.6,e,-2.2],[`iron_golem`,4.5,e,9.5],[`cow`,-13.5,e,11.5],[`cow`,-14.4,e,12.7],[`sheep`,-15.5,e,10.6],[`chicken`,8.5,e,4.2],[`chicken`,9.3,e,4.8],[`pig`,12.5,e,9.2],[`horse`,22.5,e,4.5],[`horse`,24,e,5.8],[`donkey`,26,e,2],[`bee`,5.5,64.52000000000001,12],[`bee`,6.2,65.12,12.8],[`parrot`,18.5,64.22,13.2],[`rabbit`,-6.5,e,19],[`fox`,20,e,-14],[`wolf`,-22,e,9]];for(let[e,n,r,i]of t){let t=uu.get(e);t&&this.spawnEntity(t,n,r,i)}}spawn(e,t,n,r,i={}){let a=typeof e==`string`?uu.get(e):e;if(!a)return null;let o=n??this.world.surfaceY(t,r)+.04;return this.spawnEntity(a,t,o,r,i)}spawnEntity(e,t,n,r,i={}){let a=new Wf(e,this.world,this.scene,t,n,r,{particles:this.particles,audio:this.audio,onDeath:e=>this.onEvent?.(`death`,e),...i});return this.entities.push(a),this.onEvent?.(`spawn`,a),a}spawnNearPlayer(e,t=null){let n=this.lastNight,r;if(t)r=[uu.get(t)].filter(Boolean);else if(r=fu(this.world.biomeAt(e.position.x,e.position.z).name.toLowerCase().replace(/ /g,`_`).replace(`snowy_plains`,`snowy`).replace(`snowy_taiga`,`snowy`),n),r.length||(r=cu.filter(e=>!e.boss&&e.biomes.includes(`plains`))),n){let e=r.filter(e=>e.hostile);e.length&&Math.random()<.72&&(r=e)}else{let e=r.filter(e=>!e.hostile);e.length&&Math.random()<.8&&(r=e)}if(!r.length)return null;let i=r[Math.floor(Math.random()*r.length)],a=Math.random()*Math.PI*2,o=16+Math.random()*17,s=e.position.x+Math.cos(a)*o,c=e.position.z+Math.sin(a)*o;if(!this.world.isLoaded(s,c))return null;let l;if(i.aquatic){let e=this.findWater(s,c);if(e==null)return null;l=e}else l=this.world.surfaceY(s,c)+.03,i.flying&&(l+=3+Math.random()*3);let u=this.spawnEntity(i,s,l,c);if(!i.boss&&!i.flying&&Math.random()<.35)for(let e=1;e<3;e++){let e=s+(Math.random()-.5)*2.6,t=c+(Math.random()-.5)*2.6;this.spawnEntity(i,e,this.world.surfaceY(e,t)+.03,t)}return u}findWater(e,t){let n=Math.floor(e),r=Math.floor(t);for(let e=42;e>8;e--){let t=this.world.getDef(n,e,r);if(t&&t.shape===`liquid`&&t.name===`water`)return e}return null}update(e,t,n){this.lastNight=n<.24||n>.76;for(let r of this.entities)r.dead||r.update(e,t,this.entities,n);if(this.entities.some(e=>e.dead)&&(this.entities=this.entities.filter(e=>!e.dead)),this.spawnTimer-=e,this.spawnTimer<=0&&t&&(this.spawnTimer=2.4+Math.random()*2.6,this.entities.filter(e=>e.position.distanceTo(t.position)<64).length<this.cap&&this.spawnNearPlayer(t)),t){for(let e of this.entities)e.home.distanceTo(t.position)>90&&e.position.distanceTo(t.position)>80&&(e.dead=!0,this.scene.remove(e.group));this.entities=this.entities.filter(e=>!e.dead)}}raycast(e,t,n=4.2){let r=null,i=n;for(let n of this.entities){if(n.dead)continue;let a=n.position.x,o=n.position.y+n.height*.5,s=n.position.z;Hf.set(a-e.x,o-e.y,s-e.z);let c=Hf.dot(t);if(c<0||c>i+n.radius)continue;Uf.copy(t).multiplyScalar(c).add(e);let l=Math.max(n.radius,n.height*.45);Uf.distanceToSquared(new F(a,o,s))<l*l&&c<i&&(r=n,i=c)}return r?{entity:r,distance:i}:null}clear(){for(let e of this.entities)this.scene.remove(e.group);this.entities=[]}},Kf=420,qf=class{constructor(e){this.scene=e,this.mesh=new Ai(new ca(1,1,1),new oi({vertexColors:!1,color:16777215}),Kf),this.mesh.instanceMatrix.setUsage(rt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,new I(1,1,1)),e.add(this.mesh),this.items=[],this.dummy=new Wn,this.color=new I,this.initialized=!1}spawn(e,t,n,r,i=8,a={}){let o=a.speed??1.4,s=a.life??.7,c=a.size??.09,l=a.gravity??9;for(let a=0;a<i;a++){this.items.length>=Kf&&this.items.shift();let i=Math.random()*Math.PI*2,a=Math.random()*.8+.25;this.items.push({x:e+(Math.random()-.5)*.45,y:t+(Math.random()-.5)*.4,z:n+(Math.random()-.5)*.45,vx:Math.cos(i)*o*Math.random(),vy:a*o,vz:Math.sin(i)*o*Math.random(),life:s*(.6+Math.random()*.7),maxLife:s,size:c*(.6+Math.random()*.8),color:new I(r),gravity:l}),this.initialized||this.mesh.setColorAt(this.items.length-1,this.items[this.items.length-1].color)}this.mesh.instanceColor.needsUpdate=!0}update(e){let t=0;for(let n=0;n<this.items.length;n++){let r=this.items[n];if(r.life-=e,r.life<=0||(r.vy-=r.gravity*e,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<-2))continue;let i=r.size*Math.min(1,r.life/r.maxLife*2);this.dummy.position.set(r.x,r.y,r.z),this.dummy.rotation.set(r.life*2,r.life*3,0),this.dummy.scale.setScalar(i),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix),this.mesh.setColorAt(t,r.color),t!==n&&(this.items[t]=r),t++}this.items.length=t,this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.items.length=0,this.mesh.count=0}},Jf=class{constructor(){this.ctx=null,this.master=null,this.volume=.55,this.muted=!1,this.started=!1}ensure(){if(this.ctx)return this.ctx.state===`suspended`&&this.ctx.resume().catch(()=>{}),this.ctx;try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.master.connect(this.ctx.destination),this.started=!0}catch{this.ctx=null}return this.ctx}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.master&&(this.master.gain.value=this.muted?0:this.volume)}toggleMute(){return this.muted=!this.muted,this.master&&(this.master.gain.value=this.muted?0:this.volume),this.muted}tone(e,t,n=`sine`,r=.08,i=0,a=0){if(this.muted)return;let o=this.ensure();if(!o)return;let s=o.currentTime+a,c=o.createOscillator(),l=o.createGain();c.type=n,c.frequency.setValueAtTime(e,s),i&&c.frequency.exponentialRampToValueAtTime(Math.max(20,e+i),s+t),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(r,s+.01),l.gain.exponentialRampToValueAtTime(1e-4,s+t),c.connect(l).connect(this.master),c.start(s),c.stop(s+t+.02)}noise(e=.1,t=.06,n=900,r=0){if(this.muted)return;let i=this.ensure();if(!i)return;let a=Math.max(1,Math.floor(i.sampleRate*e)),o=i.createBuffer(1,a,i.sampleRate),s=o.getChannelData(0);for(let e=0;e<a;e++)s[e]=(Math.random()*2-1)*(1-e/a);let c=i.createBufferSource();c.buffer=o;let l=i.createBiquadFilter();l.type=`lowpass`,l.frequency.value=n;let u=i.createGain();u.gain.value=t,c.connect(l).connect(u).connect(this.master),c.start(i.currentTime+r)}uiClick(){this.tone(650,.045,`square`,.022,-120)}select(){this.tone(880,.035,`square`,.018)}jump(){this.tone(260,.12,`sine`,.02,80)}step(e){let t=e?.sound===`wood`?260:e?.sound===`grass`?420:180;this.noise(.06,.018,t)}breakBlock(e){let t=e?.sound===`wood`?520:e?.sound===`grass`?900:1200;this.noise(.16,.05,t),this.tone(e?.sound===`wood`?140:90,.1,`triangle`,.03,-40)}placeBlock(e){this.noise(.09,.035,e?.sound===`wood`?500:850)}hit(){this.tone(120,.08,`square`,.025,-40)}hurt(){this.tone(220,.18,`sawtooth`,.05,-100)}mobHurt(e){let t=e?.boss?90:e?.archetype===`bird`?900:250;this.tone(t,.1,`square`,.018,e?.boss?-30:80)}mobDeath(e){let t=e?.boss?70:300;this.tone(t,.28,`sawtooth`,.025,-t*.6),this.noise(.22,.03,600)}mobAttack(e){this.tone(e?.boss?60:160,.16,`sawtooth`,.025,-40)}levelUp(){[523,659,784,1047].forEach((e,t)=>this.tone(e,.16,`triangle`,.03,0,t*.08))}splash(){this.noise(.22,.05,700)}portal(){this.tone(180,.6,`sine`,.03,300)}},Yf=`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18S2 12.4 2 6.8C2 4 4.2 2 6.8 2 8.3 2 9.5 2.8 10 4c.5-1.2 1.7-2 3.2-2C15.8 2 18 4 18 6.8 18 12.4 10 18 10 18Z" fill="currentColor"/></svg>`,Xf=`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18S2 12.4 2 6.8C2 4 4.2 2 6.8 2 8.3 2 9.5 2.8 10 4c.5-1.2 1.7-2 3.2-2C15.8 2 18 4 18 6.8 18 12.4 10 18 10 18Z" fill="rgba(0,0,0,.42)" stroke="rgba(255,255,255,.22)" stroke-width="1"/></svg>`,Zf=`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 2c1.7 0 2.5 2.2 2.5 4.4S8.7 10 7 10 4.5 8.6 4.5 6.4 5.3 2 7 2Zm6.5 1.2c1.5-.1 3.1 1.1 3.4 2.8.3 1.6-.4 3.2-1.9 4.1v6.2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-6.2c-1.1-.7-1.8-1.9-1.8-3.2 0-2 1.4-3.6 3.3-3.7Z" fill="currentColor"/></svg>`,Qf=`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 2c1.7 0 2.5 2.2 2.5 4.4S8.7 10 7 10 4.5 8.6 4.5 6.4 5.3 2 7 2Zm6.5 1.2c1.5-.1 3.1 1.1 3.4 2.8.3 1.6-.4 3.2-1.9 4.1v6.2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-6.2c-1.1-.7-1.8-1.9-1.8-3.2 0-2 1.4-3.6 3.3-3.7Z" fill="rgba(0,0,0,.42)" stroke="rgba(255,255,255,.2)" stroke-width="1"/></svg>`,$f=class{constructor(e){this.game=e,this.el=document.getElementById(`hud`),this.hotbar=document.getElementById(`hotbar`),this.hearts=document.getElementById(`hearts`),this.hunger=document.getElementById(`hunger`),this.status=document.getElementById(`status-bars`),this.xp=document.getElementById(`xp-bar`),this.coords=document.getElementById(`debug-coords`),this.biome=document.getElementById(`debug-biome`),this.extra=document.getElementById(`debug-extra`),this.fps=document.getElementById(`debug-fps`),this.modeLabel=document.getElementById(`mode-label`),this.timeLabel=document.getElementById(`time-label`),this.itemName=document.getElementById(`item-name`),this.hint=document.getElementById(`hint`),this.toastEl=document.getElementById(`toasts`),this.entityInfo=document.getElementById(`entity-info`),this.entityName=document.getElementById(`entity-name`),this.entityHp=document.getElementById(`entity-hp`),this.breakRing=document.getElementById(`break-ring`),this.debugEl=document.getElementById(`debug`),this.itemNameTimer=0,this.lastMode=null}setMode(e){this.lastMode=e,this.modeLabel.textContent=e.toUpperCase(),this.status.classList.toggle(`hidden`,e!==`survival`),this.xp.classList.toggle(`hidden`,e!==`survival`),this.renderStatus()}renderStatus(){let e=this.game.player;if(!e)return;let t=Math.max(0,Math.ceil(e.hp/2)),n=Math.max(0,Math.ceil(e.hunger/2));this.hearts.innerHTML=Array.from({length:10},(e,n)=>`<span style="color:${t>n?`#ff5548`:`transparent`}">${t>n?Yf:Xf}</span>`).join(``),this.hunger.innerHTML=Array.from({length:10},(e,t)=>`<span style="color:${n>t?`#e8a83a`:`transparent`}">${n>t?Zf:Qf}</span>`).join(``)}renderHotbar(e,t){this.hotbar.innerHTML=Array.from({length:9},(n,r)=>{let i=e[r],a=i&&i.count>1?`<span class="count">${i.count}</span>`:``,o=i?`<img src="${i.icon}" alt="" draggable="false" />`:`<span class="empty-plus">+</span>`;return`<button class="slot ${r===t?`selected`:``}" data-slot="${r}" aria-label="Hotbar slot ${r+1}">
        <span class="key">${r+1}</span>${o}${a}</button>`}).join(``)}bindHotbar(){this.hotbar.addEventListener(`click`,e=>{let t=e.target.closest(`.slot`);t&&this.game.selectSlot(Number(t.dataset.slot))})}showItemName(e){e?(this.itemName.textContent=e.display,this.itemName.classList.remove(`hidden`),this.itemNameTimer=2.2):this.itemName.classList.add(`hidden`)}toast(e,t=null){let n=document.createElement(`div`);for(n.className=`toast`,n.innerHTML=`${t?.icon?`<img src="${t.icon}" alt="" />`:`<span>✦</span>`}<span>${e}</span>`,this.toastEl.appendChild(n);this.toastEl.children.length>4;)this.toastEl.firstElementChild.remove();setTimeout(()=>{n.classList.add(`out`),setTimeout(()=>n.remove(),320)},2800)}setBreak(e){e>.01?(this.breakRing.classList.add(`on`),this.breakRing.style.setProperty(`--p`,e.toFixed(3))):this.breakRing.classList.remove(`on`)}showEntity(e){e?(this.entityInfo.classList.remove(`hidden`),this.entityName.textContent=e.mob.name,this.entityHp.style.width=`${Math.max(0,e.hp/e.maxHp*100)}%`):this.entityInfo.classList.add(`hidden`)}update(e,t){this.itemNameTimer>0&&(this.itemNameTimer-=e,this.itemNameTimer<=0&&this.itemName.classList.add(`hidden`)),t&&(this.coords.textContent=`${t.x} ${t.y} ${t.z}`,this.biome.textContent=t.biome,this.fps.textContent=`${t.fps} FPS`,this.extra.textContent=t.extra,this.timeLabel.textContent=t.timeLabel,t.hp!==void 0&&this.lastMode===`survival`&&this.renderStatus())}setTime(e){this.timeLabel.textContent=e}setDebugVisible(e){this.debugEl.style.display=e?``:`none`,this.el.classList.toggle(`show-debug`,e)}};function ep(e,t=64){return{name:e.name,display:e.display,isBlock:!0,block:e,count:t,id:`block-${e.id}`,get icon(){return bf(e)}}}function tp(e,t=1){return{name:e.name,display:e.display,isBlock:!1,item:e,count:t,id:`item-${e.id}`,get icon(){return yf(e)}}}var np=[{id:`all`,label:`Everything`,icon:`✦`},{id:`building`,label:`Building`,icon:`▦`},{id:`nature`,label:`Nature`,icon:`🌿`},{id:`decoration`,label:`Decoration`,icon:`🏮`},{id:`colors`,label:`Colours`,icon:`🎨`},{id:`tools`,label:`Tools`,icon:`⛏`},{id:`combat`,label:`Combat`,icon:`⚔`},{id:`food`,label:`Food`,icon:`🍖`},{id:`ingredients`,label:`Ingredients`,icon:`💎`},{id:`eggs`,label:`Spawn Eggs`,icon:`🥚`},{id:`redstone`,label:`Redstone`,icon:`🔴`},{id:`nether`,label:`Nether`,icon:`🔥`},{id:`end`,label:`The End`,icon:`🌌`},{id:`ocean`,label:`Ocean`,icon:`🌊`}],rp=class{constructor(e){this.game=e,this.entries=[],this.visible=[],this.tab=`all`,this.search=``,this.selected=null,this.el=document.getElementById(`inventory`),this.grid=document.getElementById(`inv-grid`),this.tabsEl=document.getElementById(`inv-tabs`),this.empty=document.getElementById(`inv-empty`),this.searchEl=document.getElementById(`inv-search`),this.allEl=document.getElementById(`inv-all`),this.countEl=document.getElementById(`inv-count`),this.preview=document.getElementById(`inv-preview`),this.nameEl=document.getElementById(`inv-name`),this.rarityEl=document.getElementById(`inv-rarity`),this.descEl=document.getElementById(`inv-desc`),this.metaEl=document.getElementById(`inv-meta`),this.giveBtn=document.getElementById(`inv-give`),this.buildEntries(),this.bind()}buildEntries(){let e=new Map;for(let t of Zl)t.placeable&&e.set(`block-${t.id}`,{key:`block-${t.id}`,cat:t.cat,display:t.display,block:t,stack:ep(t),desc:t.desc||`A ${t.display.toLowerCase()} block.`,rarity:t.name.includes(`diamond`)||t.name.includes(`emerald`)?`rare`:`common`,meta:[[`Hardness`,t.hard<0?`∞`:String(t.hard)],[`Tool`,t.tool?t.tool:`Any`],[`Category`,$l[t.cat]?.label||t.cat]]});for(let t of pu){let n=t.cat||`misc`;[`tools`,`combat`,`food`,`ingredients`,`eggs`].includes(n)&&e.set(`item-${t.id}`,{key:`item-${t.id}`,cat:n,display:t.display,item:t,stack:tp(t,t.cat===`eggs`?64:t.stack),desc:t.desc||`A curious item.`,rarity:t.rarity,meta:[[`Stack`,String(t.stack)],t.damage?[`Attack`,String(t.damage)]:null,t.tool?[`Tool`,t.tool]:null,t.food?[`Food`,String(t.food)]:null,t.rarity?[`Rarity`,t.rarity]:null].filter(Boolean)})}this.entries=[...e.values()]}bind(){this.tabsEl.addEventListener(`click`,e=>{let t=e.target.closest(`.tab-btn`);t&&(this.tab=t.dataset.tab,this.game.audio.uiClick(),this.renderTabs(),this.renderGrid())}),this.searchEl.addEventListener(`input`,()=>{this.search=this.searchEl.value.trim().toLowerCase(),this.renderGrid()}),this.allEl.addEventListener(`change`,()=>this.renderGrid()),this.grid.addEventListener(`click`,e=>{let t=e.target.closest(`.inv-item`);if(!t)return;let n=this.entries.find(e=>e.key===t.dataset.key);n&&(this.select(n),e.shiftKey&&this.give())}),this.grid.addEventListener(`dblclick`,e=>{let t=e.target.closest(`.inv-item`);if(!t)return;let n=this.entries.find(e=>e.key===t.dataset.key);n&&(this.select(n),this.give(),this.close())}),this.giveBtn.addEventListener(`click`,()=>this.give()),document.getElementById(`inv-close`).addEventListener(`click`,()=>this.close()),this.el.addEventListener(`click`,e=>{e.target===this.el&&this.close()})}open(){this.el.classList.remove(`hidden`),this.game.openOverlay(`inventory`),this.renderTabs(),this.renderGrid(),!this.selected&&this.entries.length&&this.select(this.entries[0]),this.searchEl.focus()}close(){this.el.classList.add(`hidden`),this.game.closeOverlay(`inventory`)}renderTabs(){let e={};for(let t of this.entries)e[t.cat]=(e[t.cat]||0)+1;let t=np.map(t=>{let n=t.id===`all`?this.entries.length:e[t.id]||0;return n?`<button class="tab-btn ${this.tab===t.id?`active`:``}" data-tab="${t.id}">
        <span class="t-ico">${t.icon}</span><span>${t.label}</span><span class="t-count">${n}</span></button>`:``}).join(``);this.tabsEl.innerHTML=t}currentEntries(){let e=this.entries;if(this.tab!==`all`&&(e=e.filter(e=>e.cat===this.tab)),this.search){let t=this.search;e=e.filter(e=>e.display.toLowerCase().includes(t)||e.block?.name.includes(t)||e.item?.name.includes(t)||e.desc.toLowerCase().includes(t))}return this.allEl.checked||(e=e.slice(0,180)),e}renderGrid(){let e=this.currentEntries();this.visible=e,this.countEl.textContent=`${e.length} item${e.length===1?``:`s`}`,this.empty.classList.toggle(`hidden`,e.length>0),this.grid.innerHTML=e.map(e=>{let t=e.stack.count>1?`<span class="count">${e.stack.count}</span>`:``;return`<button class="inv-item ${this.selected?.key===e.key?`selected`:``}" data-key="${e.key}" title="${e.display}">
        <img src="${e.stack.icon}" alt="" loading="lazy" draggable="false" />${t}</button>`}).join(``),this.grid.scrollTop=0}select(e){this.selected=e;for(let t of this.grid.querySelectorAll(`.inv-item`))t.classList.toggle(`selected`,t.dataset.key===e.key);this.preview.innerHTML=`<img src="${e.stack.icon}" alt="" draggable="false" />`,this.nameEl.textContent=e.display,this.rarityEl.textContent=e.rarity||`common`,this.rarityEl.className=`rarity ${e.rarity||``}`,this.descEl.textContent=e.desc,this.metaEl.innerHTML=e.meta.map(([e,t])=>`<div class="meta-row"><span>${e}</span><b>${t}</b></div>`).join(``),this.giveBtn.textContent=e.item?.spawn?`Spawn ${e.item.display.replace(` Spawn Egg`,``)}`:`Put in hotbar`}give(){if(!this.selected)return;let e=this.selected;if(e.item?.spawn){let t=this.game.spawnMob(e.item.spawn);this.game.toast(t?`Spawned ${e.display.replace(` Spawn Egg`,``)}`:`Find more open ground first`,e.stack);return}let t={...e.stack};t.count=t.isBlock?64:Math.min(e.item?.stack||64,64),this.game.giveHotbar(t),this.game.toast(`Added ${e.display} to hotbar`,t)}},ip=[{id:`all`,label:`All`},{id:`passive`,label:`Passive`},{id:`neutral`,label:`Neutral`},{id:`hostile`,label:`Hostile`},{id:`boss`,label:`Bosses`}],ap=class{constructor(e){this.game=e,this.el=document.getElementById(`bestiary`),this.grid=document.getElementById(`bestiary-grid`),this.tabsEl=document.getElementById(`bestiary-tabs`),this.searchEl=document.getElementById(`bestiary-search`),this.countEl=document.getElementById(`mob-count`),this.cat=`all`,this.search=``,this.fromTitle=!1,this.icons=new Map;for(let e of cu)this.icons.set(e.id,Vf(e,64).toDataURL());this.bind()}bind(){this.tabsEl.addEventListener(`click`,e=>{let t=e.target.closest(`.chip`);t&&(this.cat=t.dataset.cat,this.game.audio.uiClick(),this.renderTabs(),this.renderGrid())}),this.searchEl.addEventListener(`input`,()=>{this.search=this.searchEl.value.trim().toLowerCase(),this.renderGrid()}),this.grid.addEventListener(`click`,e=>{let t=e.target.closest(`.mob-card`);if(!t)return;let n=t.dataset.id,r=cu.find(e=>e.id===n),i=this.game.spawnMob(n);this.game.toast(i?`${r?.name||`Mob`} spawned nearby`:`No room to spawn that mob here`,r?{name:r.id,display:r.name,icon:this.icons.get(r.id)}:null)}),document.getElementById(`bestiary-close`).addEventListener(`click`,()=>this.close()),this.el.addEventListener(`click`,e=>{e.target===this.el&&this.close()})}open(e=!1){this.fromTitle=e,this.el.classList.remove(`hidden`),e||this.game.openOverlay(`bestiary`),this.renderTabs(),this.renderGrid()}close(){this.el.classList.add(`hidden`),this.fromTitle?this.game.showTitle():this.game.closeOverlay(`bestiary`)}list(){let e=cu;if(this.cat!==`all`&&(e=e.filter(e=>e.category===this.cat)),this.search){let t=this.search;e=e.filter(e=>e.name.toLowerCase().includes(t)||e.id.includes(t)||e.desc.toLowerCase().includes(t))}return e}renderTabs(){this.tabsEl.innerHTML=ip.map(e=>{let t=e.id===`all`?cu.length:cu.filter(t=>t.category===e.id).length;return t?`<button class="chip ${this.cat===e.id?`active`:``}" data-cat="${e.id}">${e.label} <span style="opacity:.55">${t}</span></button>`:``}).join(``)}renderGrid(){let e=this.list();this.countEl.textContent=`${e.length} mob${e.length===1?``:`s`}`,this.grid.innerHTML=e.map(e=>{let t=e.hostile,n=Math.max(20,e.hp);return`<button class="mob-card" data-id="${e.id}" title="${e.desc}">
        <div class="mob-head">
          <div class="mob-egg"><img src="${this.icons.get(e.id)}" alt="" width="30" height="34" style="image-rendering:pixelated;width:30px;height:34px" /></div>
          <div>
            <div class="mob-name">${e.name}</div>
            <div class="mob-tag ${t?`hostile`:`passive`}">${e.category}${e.boss?` · boss`:``}</div>
          </div>
        </div>
        <div class="mob-desc">${e.desc}</div>
        <div class="mob-meta"><span>${e.hp} HP</span><span class="hp-mini"><i style="width:${Math.max(8,e.hp/n*100)}%"></i></span><span>${e.damage?`${e.damage} DMG`:`calm`}</span></div>
      </button>`}).join(``)}},op=`mc-infinite-settings`,sp=`mc-infinite-save`;function cp(){try{return JSON.parse(localStorage.getItem(op)||`{}`)}catch{return{}}}function lp(e){let t=Math.floor(e*24*60),n=Math.floor(t/60)%24,r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}var up=new class{constructor(){this.canvas=document.getElementById(`game`),this.renderer=new Xl({canvas:this.canvas,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ze,this.renderer.toneMapping=0,this.scene=new er,this.camera=new _o(74,window.innerWidth/window.innerHeight,.05,480),this.scene.add(this.camera),this.settings=Object.assign({distance:4,volume:.55,dayLength:10,fancy:!0,debug:!0,invert:!1,mode:`creative`},cp()),this.isTouch=matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0,this.started=!1,this.initialLoaded=!1,this.overlay=null,this.clock=0,this.lastFrame=performance.now(),this.fpsSmooth=60,this.frameCount=0,this.fpsTimer=0,this.targetBlock=null,this.targetEntity=null,this.saveTimer=0,this.keys=new Set,this.mouseHeld=!1,this.lookPointer=null,this.lastSpaceTap=0,this.autoSaveTimer=30,this.titleAngle=.62,this.el={title:document.getElementById(`title`),loading:document.getElementById(`loading`),loadingFill:document.getElementById(`loading-fill`),loadingText:document.getElementById(`loading-text`),play:document.getElementById(`play`),continue:document.getElementById(`continue`),hud:document.getElementById(`hud`),pause:document.getElementById(`pause`),settings:document.getElementById(`settings`),controls:document.getElementById(`controls`),underwater:document.getElementById(`underwater`),touch:document.getElementById(`touch-ui`),hint:document.getElementById(`hint`),fatal:document.getElementById(`fatal`),seed:document.getElementById(`seed`),modeLabel:document.getElementById(`mode-label`)},this.el.play.disabled=!0,this.el.play.textContent=`Loading…`,this.el.play.style.opacity=`0.65`,this.el.hint.classList.add(`hidden`),this.outline=this.makeOutline(),this.scene.add(this.outline);let e=new URLSearchParams(location.search).get(`seed`);e&&(this.el.seed.value=e),document.getElementById(`title-bestiary`).disabled=!0,this.bindDOM(),this.updateStats(),this.titleCamera(),this.boot().catch(e=>this.fatal(e)),this.loop()}makeOutline(){let e=new Yi(new ma(new ca(1.004,1.004,1.004)),new Li({color:1118481,transparent:!0,opacity:.62,depthTest:!0}));return e.visible=!1,e.name=`block-outline`,e}updateStats(){document.getElementById(`stat-blocks`).textContent=su,document.getElementById(`stat-mobs`).textContent=du,document.getElementById(`stat-tools`).textContent=Eu;let e=null;try{e=JSON.parse(localStorage.getItem(sp)||`null`)}catch{}if(e){this.el.continue.classList.remove(`hidden`);let t=e.seed??``;this.el.seed.value||(this.el.seed.value=String(t))}this.el.seed.value||(this.el.seed.value=`1337`)}async boot(){td(),Wd(id()),this.seed=this.parseSeed(this.el.seed.value),this.world=new nf(this.scene,this.seed,{renderDistance:this.settings.distance}),this.world.renderDistance=this.settings.distance,this.sky=new sf(this.scene,{time:.31,dayLength:this.settings.dayLength*60,seed:this.seed}),this.sky.dayLength=this.settings.dayLength*60,this.particles=new qf(this.scene),this.audio=new Jf,this.audio.setVolume(this.settings.volume),this.player=new Ef(this.scene,this.camera,this.world,{mode:this.settings.mode,particles:this.particles,audio:this.audio,onToast:(e,t)=>this.toast(e,t),onDamage:()=>{this.hud?.renderStatus()},onDeath:()=>{this.toast(`You died — returned to spawn`),this.saveWorld(!0)}}),this.player.setView(0,-.04),this.createHotbar(),this.mobs=new Gf(this.scene,this.world,this.particles,this.audio,{cap:42,onEvent:(e,t)=>{e===`death`&&(this.kills=(this.kills||0)+1)}}),this.hud=new $f(this),this.hud.bindHotbar(),this.inventory=new rp(this),this.bestiary=new ap(this),this.hud.setMode(this.player.mode),this.renderHotbar(),this.applySettings(),this.syncTimeLabel(),this.loadingProgress(.02,`Warming up chunks…`),await this.world.loadArea(3,(e,t)=>this.loadingProgress(.02+e*.96,t),3),this.initialLoaded=!0,this.loadingProgress(1,`World ready`),this.el.play.disabled=!1,this.el.play.textContent=`Play`,this.el.play.style.opacity=``,setTimeout(()=>{this.el.loading.style.display=`none`},500),document.getElementById(`title-bestiary`).disabled=!1,this.world.update(this.player.position.x,this.player.position.z,this.settings.distance,10)}parseSeed(e){let t=String(e||`1337`).trim();if(/^-?\d+$/.test(t))return Number(t)|0;let n=2166136261;for(let e=0;e<t.length;e++)n^=t.charCodeAt(e),n=Math.imul(n,16777619);return n|0}loadingProgress(e,t){this.el.loadingFill.style.width=`${Math.max(4,Math.min(100,e*100))}%`,t&&(this.el.loadingText.textContent=t)}createHotbar(){let e=[[`block`,`grass_block`],[`block`,`stone`],[`block`,`oak_planks`],[`block`,`oak_log`],[`block`,`glass`],[`block`,`torch`],[`item`,`diamond_pickaxe`],[`item`,`diamond_sword`],[`item`,`golden_apple`]];this.hotbar=e.map(([e,t])=>{if(e===`block`){let e=Ql.get(t);return e?ep(e,64):null}let n=Tu(t);return n?tp(n,n.cat===`food`?16:1):null}),this.player.hotbar=this.hotbar,this.player.selected=0,this.player.setHeldItem(this.hotbar[0])}renderHotbar(){this.hud.renderHotbar(this.hotbar,this.player?.selected||0)}selectSlot(e){if(!this.player)return;this.player.selected=e,this.renderHotbar();let t=this.player.selectedStack();this.player.setHeldItem(t),this.hud.showItemName(t),this.audio.select()}giveHotbar(e){let t=this.player.selected,n={...e};n.isBlock&&(n.count=64),n.icon=e.icon,this.hotbar[t]=n,this.player.setHeldItem(n),this.renderHotbar(),this.hud.showItemName(n)}titleCamera(){let e=this.clock,t=.58+Math.sin(e*.045)*.06;this.camera.position.set(Math.cos(t)*35,73+Math.sin(e*.11)*.5,Math.sin(t)*35+8);let n=new F(0,64.5,3);this.camera.lookAt(n),this.camera.fov=70,this.camera.updateProjectionMatrix()}startGame(e=!1){this.initialLoaded&&(this.audio.ensure(),e&&this.applySave(),this.started=!0,this.overlay=null,this.el.title.classList.add(`hidden`),this.el.hud.classList.remove(`hidden`),this.isTouch&&this.el.touch.classList.remove(`hidden`),this.player.viewGroup.visible=!0,this.hud.setMode(this.player.mode),this.el.modeLabel.textContent=this.player.mode.toUpperCase(),this.renderHotbar(),this.player.setHeldItem(this.player.selectedStack()),this.hud.showItemName(this.player.selectedStack()),this.hud.hint.classList.remove(`hidden`),this.hud.hint.textContent=this.isTouch?`Joystick to move · drag the world to look · buttons to jump, mine and place`:`Click to capture the mouse · WASD move · Space jump · E inventory · Esc menu`,setTimeout(()=>this.hud.hint.classList.add(`hidden`),7e3),this.el.underwater.classList.remove(`on`),this.lastFrame=performance.now(),this.toast(`Welcome to Minecraft Infinite · seed ${this.seed}`))}showTitle(){this.started&&this.saveWorld(!0),this.started=!1,this.overlay=null,this.el.title.classList.remove(`hidden`),this.el.hud.classList.add(`hidden`),this.el.pause.classList.add(`hidden`),this.el.settings.classList.add(`hidden`),this.el.controls.classList.add(`hidden`),this.el.touch.classList.add(`hidden`),this.player.viewGroup.visible=!1,this.el.underwater.classList.remove(`on`),this.player.input={forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,flyUp:!1,flyDown:!1},document.pointerLockElement&&document.exitPointerLock(),this.titleCamera(),this.updateStats()}openOverlay(e){this.overlay=e,document.pointerLockElement&&document.exitPointerLock(),this.player?.input&&Object.keys(this.player.input).forEach(e=>{this.player.input[e]=!1}),this.mouseHeld=!1,this.player?.endMine()}closeOverlay(e){this.overlay===e&&(this.overlay=null)}showPause(){if(this.started){this.overlay=`pause`,this.el.pause.classList.remove(`hidden`),document.pointerLockElement&&document.exitPointerLock();for(let e of Object.keys(this.player.input))this.player.input[e]=!1;this.player.endMine(),this.renderPauseInfo()}}resume(){this.el.pause.classList.add(`hidden`),this.overlay=null,this.lastFrame=performance.now()}renderPauseInfo(){let e=this.player;document.getElementById(`pause-info`).innerHTML=`Seed ${this.seed}<br>${Math.floor(e.position.x)} ${Math.floor(e.position.y)} ${Math.floor(e.position.z)} · ${this.world.biomeAt(e.position.x,e.position.z).name}<br>${this.world.stats.meshed} chunks meshed · ${this.kills||0} mobs defeated`}saveWorld(e=!1){if(!this.player)return!1;let t={version:1,seed:this.seed,time:this.sky?.time??.31,edits:this.world.serializeEdits(),position:{x:this.player.position.x,y:this.player.position.y,z:this.player.position.z},yaw:this.player.yaw,pitch:this.player.pitch,mode:this.player.mode,flying:this.player.flying,selected:this.player.selected,hotbar:this.hotbar.map(e=>e?{name:e.name,isBlock:!!e.isBlock,count:e.count}:null),kills:this.kills||0};try{return localStorage.setItem(sp,JSON.stringify(t)),this.el.continue.classList.remove(`hidden`),e||this.toast(`World saved`),!0}catch{return e||this.toast(`Could not save — storage is full`),!1}}applySave(){let e=null;try{e=JSON.parse(localStorage.getItem(sp)||`null`)}catch{}if(e){if(e.seed!==void 0&&(Number(this.el.seed.value),e.seed),e.edits&&this.world.loadEdits(e.edits),e.time!=null&&this.sky&&this.sky.setTime(e.time),e.position&&(this.player.position.set(e.position.x,e.position.y,e.position.z),this.player.velocity.set(0,0,0)),e.yaw!=null&&this.player.setView(e.yaw,e.pitch??-.04),e.mode&&(this.player.mode=e.mode,this.hud.setMode(e.mode)),this.player.flying=!!e.flying,e.hotbar){for(let t=0;t<9;t++){let n=e.hotbar[t];if(!n)this.hotbar[t]=null;else if(n.isBlock){let e=Ql.get(n.name);this.hotbar[t]=e?ep(e,n.count||64):null}else{let e=Tu(n.name);this.hotbar[t]=e?tp(e,n.count||1):null}}this.player.hotbar=this.hotbar,this.player.selected=e.selected||0}this.kills=e.kills||0,this.toast(`World loaded`)}}applySettings(){let e=this.settings;this.world&&(this.world.renderDistance=e.distance),this.sky&&(this.sky.fancy=e.fancy,this.sky.dayLength=e.dayLength*60,this.sky.clouds&&(this.sky.clouds.visible=e.fancy)),this.audio.setVolume(e.volume),this.hud?.setDebugVisible(e.debug),document.getElementById(`set-distance`).value=e.distance,document.getElementById(`set-distance-out`).textContent=`${e.distance} chunks`,document.getElementById(`set-volume`).value=e.volume,document.getElementById(`set-volume-out`).textContent=`${Math.round(e.volume*100)}%`,document.getElementById(`set-day`).value=e.dayLength,document.getElementById(`set-day-out`).textContent=`${e.dayLength}m`,document.getElementById(`set-fancy`).checked=e.fancy,document.getElementById(`set-debug`).checked=e.debug,document.getElementById(`set-invert`).checked=e.invert;try{localStorage.setItem(op,JSON.stringify(e))}catch{}}bindDOM(){let e=e=>document.getElementById(e);e(`play`).addEventListener(`click`,()=>{this.audio.ensure(),this.startGame(!1)}),e(`continue`).addEventListener(`click`,()=>{this.audio.ensure();let e=this.readSaveSeed();e!=null&&e!==this.seed?(this.toast(`Reloading saved world…`),location.search=`?seed=${e}`):this.startGame(!0)}),e(`new-world`).addEventListener(`click`,()=>{let e=Math.floor(Math.random()*2e9)+1;this.el.seed.value=String(e),localStorage.removeItem(sp),location.search=`?seed=${e}`}),e(`seed-dice`).addEventListener(`click`,()=>{this.el.seed.value=String(Math.floor(Math.random()*2e9)+1),this.audio.uiClick()}),e(`title-bestiary`).addEventListener(`click`,()=>{this.audio.ensure(),this.bestiary.open(!0)}),e(`title-controls`).addEventListener(`click`,()=>{this.el.controls.classList.remove(`hidden`),this.audio.uiClick()}),e(`controls-close`).addEventListener(`click`,()=>this.el.controls.classList.add(`hidden`)),this.el.controls.addEventListener(`click`,e=>{e.target===this.el.controls&&this.el.controls.classList.add(`hidden`)}),e(`btn-pause`).addEventListener(`click`,()=>this.showPause()),e(`btn-bestiary-top`).addEventListener(`click`,()=>{this.started&&(this.overlay=`bestiary`,this.bestiary.open(!1))}),e(`btn-sound`).addEventListener(`click`,()=>{let t=this.audio.toggleMute();e(`btn-sound`).textContent=t?`🔇`:`🔊`,e(`btn-sound`).title=t?`Unmute`:`Mute`}),e(`resume`).addEventListener(`click`,()=>this.resume()),e(`pause-bestiary`).addEventListener(`click`,()=>{this.el.pause.classList.add(`hidden`),this.bestiary.open(!1)}),e(`save-game`).addEventListener(`click`,()=>this.saveWorld(!1)),e(`open-settings`).addEventListener(`click`,()=>{this.el.pause.classList.add(`hidden`),this.settingsFromPause=!0,this.el.settings.classList.remove(`hidden`)}),e(`quit-menu`).addEventListener(`click`,()=>this.showTitle()),e(`settings-close`).addEventListener(`click`,()=>{this.el.settings.classList.add(`hidden`),this.settingsFromPause&&this.started?(this.settingsFromPause=!1,this.el.pause.classList.remove(`hidden`),this.overlay=`pause`):this.overlay=null,this.applySettings()}),e(`set-distance`).addEventListener(`input`,e=>{this.settings.distance=Number(e.target.value),this.applySettings()}),e(`set-volume`).addEventListener(`input`,e=>{this.settings.volume=Number(e.target.value),this.applySettings()}),e(`set-day`).addEventListener(`input`,e=>{this.settings.dayLength=Number(e.target.value),this.applySettings()}),e(`set-fancy`).addEventListener(`change`,e=>{this.settings.fancy=e.target.checked,this.applySettings()}),e(`set-debug`).addEventListener(`change`,e=>{this.settings.debug=e.target.checked,this.applySettings()}),e(`set-invert`).addEventListener(`change`,e=>{this.settings.invert=e.target.checked,this.applySettings()});for(let e of document.querySelectorAll(`.mode-btn`))e.addEventListener(`click`,()=>{document.querySelectorAll(`.mode-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this.settings.mode=e.dataset.mode,this.player&&(this.player.mode=e.dataset.mode,e.dataset.mode===`survival`&&(this.player.flying=!1),this.hud?.setMode(e.dataset.mode)),this.audio.uiClick()});window.addEventListener(`resize`,()=>this.onResize()),window.addEventListener(`keydown`,e=>this.onKeyDown(e)),window.addEventListener(`keyup`,e=>this.onKeyUp(e)),window.addEventListener(`blur`,()=>this.clearInput()),document.addEventListener(`mousemove`,e=>this.onMouseMove(e)),this.canvas.addEventListener(`pointerdown`,e=>this.onPointerDown(e)),window.addEventListener(`pointerup`,e=>this.onPointerUp(e)),this.canvas.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`wheel`,e=>this.onWheel(e),{passive:!1}),document.addEventListener(`pointerlockchange`,()=>{document.pointerLockElement===this.canvas?this.el.hint.classList.add(`hidden`):this.started&&!this.overlay&&!this.isTouch&&(this.el.hint.classList.remove(`hidden`),this.el.hint.textContent=`Click the world to look around`,setTimeout(()=>this.el.hint.classList.add(`hidden`),3500))}),this.bindTouch(),window.addEventListener(`error`,e=>this.fatal(e.error||e.message)),window.addEventListener(`unhandledrejection`,e=>this.fatal(e.reason))}bindTouch(){let e=document.getElementById(`joystick`),t=document.getElementById(`joystick-knob`),n=null,r=(e,n)=>{t.style.transform=`translate(${e}px, ${n}px)`},i=t=>{let n=e.getBoundingClientRect(),i=n.left+n.width/2,a=n.top+n.height/2,o=t.clientX-i,s=t.clientY-a,c=n.width*.34,l=Math.hypot(o,s);l>c&&(o=o/l*c,s=s/l*c),r(o,s);let u=this.player;u&&(u.input.forward=s<-c*.18,u.input.back=s>c*.18,u.input.left=o<-c*.18,u.input.right=o>c*.18,u.input.sprint=!1)};e.addEventListener(`pointerdown`,t=>{n=t.pointerId,e.setPointerCapture(t.pointerId),i(t),t.preventDefault()}),e.addEventListener(`pointermove`,e=>{n===e.pointerId&&i(e)});let a=e=>{n===e.pointerId&&(n=null,r(0,0),this.player&&(this.player.input.forward=this.player.input.back=this.player.input.left=this.player.input.right=!1))};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a);let o=(e,t,n)=>{let r=document.getElementById(e);r.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),r.setPointerCapture?.(e.pointerId),t()});let i=e=>{e.preventDefault(),n()};r.addEventListener(`pointerup`,i),r.addEventListener(`pointercancel`,i),r.addEventListener(`pointerleave`,e=>{e.pointerType===`mouse`&&n()})};o(`t-jump`,()=>{this.player&&(this.player.input.jump=!0)},()=>{this.player&&(this.player.input.jump=!1)}),o(`t-break`,()=>{this.player?.beginMine()},()=>{this.player?.endMine()}),o(`t-place`,()=>{this.player?.placeBlock()},()=>{}),o(`t-up`,()=>{this.player&&(this.player.input.flyUp=!0)},()=>{this.player&&(this.player.input.flyUp=!1)}),o(`t-down`,()=>{this.player&&(this.player.input.flyDown=!0)},()=>{this.player&&(this.player.input.flyDown=!1)})}clearInput(){if(this.player){for(let e of Object.keys(this.player.input))this.player.input[e]=!1;this.player.endMine()}}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(window.innerWidth,window.innerHeight)}onKeyDown(e){if(e.target instanceof HTMLInputElement){e.code===`Escape`&&e.target.blur();return}let t=e.code;if(t===`Escape`)e.preventDefault(),this.el.settings.classList.contains(`hidden`)?this.el.controls.classList.contains(`hidden`)?this.overlay===`inventory`?this.inventory.close():this.overlay===`bestiary`?this.bestiary.close():this.overlay===`pause`?this.resume():this.started&&this.showPause():this.el.controls.classList.add(`hidden`):(this.el.settings.classList.add(`hidden`),this.started&&(this.el.pause.classList.remove(`hidden`),this.overlay=`pause`));else if(this.started&&!this.overlay){if(t===`KeyW`)this.player.input.forward=!0;else if(t===`KeyS`)this.player.input.back=!0;else if(t===`KeyA`)this.player.input.left=!0;else if(t===`KeyD`)this.player.input.right=!0;else if(t===`ShiftLeft`||t===`ShiftRight`)this.player.input.sprint=!0;else if(t===`Space`){if(!e.repeat){let e=performance.now();e-this.lastSpaceTap<290&&this.player.mode===`creative`&&this.player.doubleTapSpace(),this.lastSpaceTap=e}this.player.input.jump=!0,e.preventDefault()}else if(t===`KeyE`&&!e.repeat)e.preventDefault(),this.overlay===`inventory`?this.inventory.close():(this.el.pause.classList.add(`hidden`),this.inventory.open());else if(t===`KeyB`&&!e.repeat)e.preventDefault(),this.overlay===`bestiary`?this.bestiary.close():(this.el.pause.classList.add(`hidden`),this.bestiary.open(!1));else if(t===`KeyF`&&!e.repeat)this.player.toggleFly();else if(t===`F3`&&!e.repeat)e.preventDefault(),this.settings.debug=!this.settings.debug,this.applySettings();else if(t===`KeyQ`&&!e.repeat){let e=this.player.selectedStack();e&&this.toast(`Dropped ${e.display}`,e)}else/^Digit[1-9]$/.test(t)&&!e.repeat&&this.selectSlot(Number(t.slice(5))-1);[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`Space`].includes(t)&&e.preventDefault()}}onKeyUp(e){if(!this.player)return;let t=e.code;t===`KeyW`?this.player.input.forward=!1:t===`KeyS`?this.player.input.back=!1:t===`KeyA`?this.player.input.left=!1:t===`KeyD`?this.player.input.right=!1:t===`ShiftLeft`||t===`ShiftRight`?this.player.input.sprint=!1:t===`Space`&&(this.player.input.jump=!1)}onMouseMove(e){this.started&&!this.overlay&&!this.isTouch&&document.pointerLockElement===this.canvas&&this.player.look(e.movementX,e.movementY,.0022,this.settings.invert)}onPointerDown(e){if(this.started&&!this.overlay){if(e.pointerType===`touch`){if(e.clientX<150&&e.clientY>window.innerHeight-240)return;this.lookPointer={id:e.pointerId,x:e.clientX,y:e.clientY},this.canvas.setPointerCapture?.(e.pointerId)}else if(!document.pointerLockElement)this.canvas.requestPointerLock?.();else if(e.button===0){let e=this.targetEntity;e?this.player.attack(e):this.player.beginMine(),this.mouseHeld=!0}else if(e.button===2){e.preventDefault();let t=this.targetEntity;t?this.toast(`${t.mob.name} ${t.hostile?`snarls at you`:`nuzzles you gently`}`,{icon:this.bestiary?.icons.get(t.mob.id)}):this.player.placeBlock()}}}onPointerUp(e){e.pointerType===`touch`&&this.lookPointer?.id===e.pointerId?this.lookPointer=null:e.button===0&&(this.mouseHeld=!1,this.player?.endMine())}onWheel(e){if(!this.started||this.overlay)return;e.preventDefault();let t=Math.sign(e.deltaY);if(!t)return;let n=(this.player.selected+t+9)%9;this.selectSlot(n)}bindCanvasDrag(){}onCanvasPointerMove(e){if(!this.lookPointer||this.lookPointer.id!==e.pointerId)return;let t=e.clientX-this.lookPointer.x,n=e.clientY-this.lookPointer.y;this.lookPointer.x=e.clientX,this.lookPointer.y=e.clientY,this.player.look(t,n,.0042,this.settings.invert)}spawnMob(e){if(!this.mobs||!this.player)return!1;let t=uu.get(e);if(!t)return!1;let n=this.player.forwardFlat(),r=this.player.position.x+n.x*4.5,i=this.player.position.z+n.z*4.5;if(t.boss&&(r+=n.x*3,i+=n.z*3),!this.world.isLoaded(r,i))return!1;let a=this.world.surfaceY(r,i)+.05;if(t.flying&&(a+=2.5),t.aquatic&&(a=this.mobs.findWater(r,i),a==null))return!1;let o=this.mobs.spawn(t,r,a,i);return o&&(this.audio.mobAttack(t),this.particles?.spawn(r,a+.5,i,t.egg[0],12,{speed:1.7,life:.8,size:.1})),!!o}toast(e,t=null){this.hud?.toast(e,t)}syncTimeLabel(){if(!this.sky||!this.hud)return;let e=this.sky.isNight;this.hud.setTime(`${e?`☾`:`☀`} ${lp(this.sky.time)}`)}updateTarget(){let e=this.player.eyePosition,t=this.player.forward,n=this.player.raycast(this.player.mode===`creative`?8:6),r=this.mobs.raycast(e,t,4.4),i=null;r&&(!n||r.distance<n.distance)&&(i=r.entity),this.targetEntity=i,this.targetBlock=n,n?(this.outline.visible=!0,this.outline.position.set(n.x+.5,n.y+.5,n.z+.5)):this.outline.visible=!1,this.hud.showEntity(i),this.hud.setBreak(this.player.mineHeld&&this.player.mineProgress>.01?Math.min(1,this.player.mineProgress):0)}updateHUD(e){let t=this.player,n=this.world.biomeAt(t.position.x,t.position.z),r=this.sky.time,i=this.sky.isNight;this.hud.update(e,{x:Math.floor(t.position.x),y:Math.floor(t.position.y),z:Math.floor(t.position.z),biome:n.name,fps:Math.round(this.fpsSmooth),extra:`${this.world.stats.meshed} chunks · ${this.world.stats.triangles.toLocaleString()} tris · ${this.mobs.entities.length} mobs`,timeLabel:`${i?`☾`:`☀`} ${lp(r)}`,hp:t.hp})}loop(){requestAnimationFrame(()=>this.loop());let e=performance.now(),t=(e-this.lastFrame)/1e3;this.lastFrame=e,t=Math.min(t,.1),this.clock+=t,this.fpsSmooth+=(1/Math.max(.001,t)-this.fpsSmooth)*.05,this.fpsTimer+=t,this.frameCount++,this.fpsTimer>.5&&(this.fpsTimer=0,this.frameCount=0),this.started&&!this.overlay?(this.player.update(t,this.keys,this.sky.time),this.mobs.update(t,this.player,this.sky.time),this.world.update(this.player.position.x,this.player.position.z,this.settings.distance,6),this.updateTarget(),this.updateHUD(t),this.autoSaveTimer-=t,this.autoSaveTimer<=0&&(this.autoSaveTimer=60,this.world.edits.size&&this.saveWorld(!0))):this.started&&this.overlay?(this.player.updateCamera(t,this.sky.time),(this.targetEntity||this.targetBlock)&&(this.targetEntity=null,this.hud.showEntity(null),this.outline.visible=!1,this.hud.setBreak(0))):this.started||this.titleCamera();let n=this.started?this.player.eyePosition:this.camera.position;this.sky.update(this.overlay?0:t,n,this.settings.distance*13),this.particles.update(t);let r=this.sky.fog;if(Gd(this.clock,this.sky.colors.fog,r.near,r.far),this.started){let e=this.player.underwater;this.el.underwater.classList.toggle(`on`,e),e?(this.scene.fog.near=2,this.scene.fog.far=24):(this.scene.fog.near=this.sky.fog.near,this.scene.fog.far=this.sky.fog.far),this.syncTimeLabel()}this.renderer.render(this.scene,this.camera)}fatal(e){console.error(e),this.el&&(this.el.fatal.classList.remove(`hidden`),this.el.fatal.textContent=`Minecraft Infinite hit a snag\n\n${e?.message||e}\n\nTry reloading the page.`)}readSaveSeed(){try{return JSON.parse(localStorage.getItem(sp)||`null`)?.seed??null}catch{return null}}};up.canvas.addEventListener(`pointermove`,e=>up.onCanvasPointerMove(e)),window.__game=up;