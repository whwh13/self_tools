import{_ as vo}from"./index-BiYku2R9.js";let xo="https://huggingface.co/snowfluke/ppu-paddle-ocr-models/resolve/main",P0="https://huggingface.co/snowfluke/ppu-paddle-ocr-models/resolve/main",U0={detection:`${xo}/detection/ort/PP-OCRv6_tiny_det.ort`,recognition:`${xo}/recognition/ort/PP-OCRv6_tiny_rec.ort`,charactersDictionary:`${P0}/recognition/ppocrv6_tiny_dict.txt`},L0=U0,qt=L0;var Kn=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,q0=Object.getOwnPropertyNames,V0=Object.prototype.hasOwnProperty,G0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),W=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}},Kt=(e,t)=>{for(var r in t)Kn(e,r,{get:t[r],enumerable:!0})},F0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of q0(t))!V0.call(e,n)&&n!==r&&Kn(e,n,{get:()=>t[n],enumerable:!(i=W0(t,n))||i.enumerable});return e},fr=e=>F0(Kn({},"__esModule",{value:!0}),e),Jt,ft,Bt,So,$p,vp=W(()=>{"use strict";Jt=new Map,ft=[],Bt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Jt.get(e);if(i===void 0)Jt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=ft.indexOf(e);n!==-1&&ft.splice(n,1);for(let a=0;a<ft.length;a++)if(Jt.get(ft[a]).priority<=r){ft.splice(a,0,e);return}ft.push(e)}return}throw new TypeError("not a valid backend")},So=async e=>{let t=Jt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},$p=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?ft:r,n,a=[],s=new Set;for(let l of i){let d=await So(l);typeof d=="string"?a.push({name:l,err:d}):(n||(n=d),n===d&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),H0=W(()=>{"use strict";vp()}),xp,j0=W(()=>{"use strict";xp="1.29.0"}),Ii,Ce,Sp=W(()=>{"use strict";j0(),Ii="warning",Ce={wasm:{},webgl:{},webgpu:{},versions:{common:xp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ii=e}},get logLevel(){return Ii}},Object.defineProperty(Ce,"logLevel",{enumerable:!0})}),ge,K0=W(()=>{"use strict";Sp(),ge=Ce}),Tp,kp,X0=W(()=>{"use strict";Tp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let h=a*n,c=0,f=h,_=h*2,y=-1;s==="RGBA"?(c=0,f=h,_=h*2,y=h*3):s==="RGB"?(c=0,f=h,_=h*2):s==="RBG"&&(c=0,_=h,f=h*2);for(let w=0;w<a;w++)for(let S=0;S<n;S++){let $=(e.data[c++]-d[0])*l[0],b=(e.data[f++]-d[1])*l[1],T=(e.data[_++]-d[2])*l[2],k=y===-1?255:(e.data[y++]-d[3])*l[3];i.fillStyle="rgba("+$+","+b+","+T+","+k+")",i.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},kp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,h;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let c=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,_=0,y=1,w=2,S=3,$=0,b=c,T=c*2,k=-1;o==="RGBA"?($=0,b=c,T=c*2,k=c*3):o==="RGB"?($=0,b=c,T=c*2):o==="RBG"&&($=0,T=c,b=c*2),i=r.createImageData(n,a);for(let I=0;I<a*n;_+=f,y+=f,w+=f,S+=f,I++)i.data[_]=(e.data[$++]-h[0])*d[0],i.data[y]=(e.data[b++]-h[1])*d[1],i.data[w]=(e.data[T++]-h[2])*d[2],i.data[S]=k===-1?255:(e.data[k++]-h[3])*d[3]}else throw new Error("Can not access image data");return i}}),zr,Ip,Ep,Cp,zp,Ap,Z0=W(()=>{"use strict";Xn(),zr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,h=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),c=4,f=0,_=1,y=2,w=3,S=0,$=d,b=d*2,T=-1;o==="RGB"&&(c=3,f=0,_=1,y=2,w=-1),l==="RGBA"?T=d*3:l==="RBG"?(S=0,b=d,$=d*2):l==="BGR"&&(b=0,$=d,S=d*2);for(let k=0;k<d;k++,f+=c,y+=c,_+=c,w+=c)h[S++]=(e[f]+s[0])/a[0],h[$++]=(e[_]+s[1])/a[1],h[b++]=(e[y]+s[2])/a[2],T!==-1&&w!==-1&&(h[T++]=(e[w]+s[3])/a[3]);return l==="RGBA"?new Me("float32",h,[1,4,r,i]):new Me("float32",h,[1,3,r,i])},Ip=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=l();h.width=e.width,h.height=e.height;let c=d(h);if(c!=null){let f=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=_}else o.tensorFormat="RGBA",o.height=f,o.width=_;c.drawImage(e,0,0),s=c.getImageData(0,0,_,f).data}else throw new Error("Can not access image data")}else if(i){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=h,o.width=c,t!==void 0){let f=l();f.width=c,f.height=h;let _=d(f);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=l();h.width=e.width,h.height=e.height;let c=d(h);if(c!=null){let f=e.height,_=e.width;return c.drawImage(e,0,0,_,f),s=c.getImageData(0,0,_,f).data,o.height=f,o.width=_,zr(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,c)=>{let f=l(),_=d(f);if(!e||!_)return c();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{f.width=y.width,f.height=y.height,_.drawImage(y,0,0,f.width,f.height);let w=_.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,h(zr(w.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return zr(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Ep=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new Me({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},Cp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Me({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},zp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Me({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},Ap=(e,t,r)=>new Me({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),At,dr,Ei,Op,Q0=W(()=>{"use strict";At=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),dr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ei=!1,Op=()=>{if(!Ei){Ei=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(At.set("int64",BigInt64Array),dr.set(BigInt64Array,"int64")),t&&(At.set("uint64",BigUint64Array),dr.set(BigUint64Array,"uint64")),i?(At.set("float16",r),dr.set(r,"float16")):At.set("float16",Uint16Array)}}}),Rp,Bp,Y0=W(()=>{"use strict";Xn(),Rp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Bp=(e,t)=>{switch(e.location){case"cpu":return new Me(e.type,e.data,t);case"cpu-pinned":return new Me({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Me({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Me({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Me({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Me,Xn=W(()=>{"use strict";X0(),Z0(),Q0(),Y0(),Me=class{constructor(e,t,r){Op();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=At.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=At.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=dr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let a=Rp(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return Ip(e,t)}static fromTexture(e,t){return Ep(e,t)}static fromGpuBuffer(e,t){return Cp(e,t)}static fromMLTensor(e,t){return zp(e,t)}static fromPinnedBuffer(e,t,r){return Ap(e,t,r)}toDataURL(e){return Tp(this,e)}toImageData(e){return kp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Bp(this,e)}}}),Xe,Dp=W(()=>{"use strict";Xn(),Xe=Me}),mr,Ci,Ze,Le,bt,wt,Mp=W(()=>{"use strict";Sp(),mr=(e,t)=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ci=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(a+=`::${t}`),mr("CPU",a);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},Ze=e=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||Ci("BEGIN",e)},Le=e=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||Ci("END",e)},bt=e=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||console.time(`ORT::${e}`)},wt=e=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||console.timeEnd(`ORT::${e}`)}}),Np,J0=W(()=>{"use strict";vp(),Dp(),Mp(),Np=class Pp{constructor(t){this.handler=t}async run(t,r,i){Ze(),bt("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof Xe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Xe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,h=Object.getOwnPropertyNames(r);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let f=r[c];(f===null||f instanceof Xe)&&(d=!0,s=!1,n[c]=f)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,a),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let h=o[d];h instanceof Xe?l[d]=h:l[d]=new Xe(h.type,h.data,h.dims)}return wt("InferenceSession.run"),Le(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){Ze(),bt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,f=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(c=r,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(f=t.byteLength-c,typeof i=="number"){if(f=i,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||c+f>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,c,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await $p(s),d=await o.createInferenceSessionHandler(a,l);return wt("InferenceSession.create"),Le(),new Pp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Zn,ey=W(()=>{"use strict";J0(),Zn=Np}),ty=W(()=>{"use strict"}),ry=W(()=>{"use strict"}),iy=W(()=>{"use strict"}),ny=W(()=>{"use strict"}),Up={};Kt(Up,{InferenceSession:()=>Zn,TRACE:()=>mr,TRACE_EVENT_BEGIN:()=>bt,TRACE_EVENT_END:()=>wt,TRACE_FUNC_BEGIN:()=>Ze,TRACE_FUNC_END:()=>Le,Tensor:()=>Xe,env:()=>ge,registerBackend:()=>Bt});var We=W(()=>{"use strict";H0(),K0(),ey(),Dp(),ty(),ry(),Mp(),iy(),ny()}),Qn=W(()=>{"use strict"}),Lp={};Kt(Lp,{default:()=>Wp});var zi,Ai,Wp,ay=W(()=>{"use strict";Zf(),Pt(),Yn(),zi="ort-wasm-proxy-worker",Ai=globalThis.self?.name===zi,Ai&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Jn(r.wasm).then(()=>{ga(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:n}=r;ya(n,i).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:i}=r,n=Jr(i);postMessage({type:t,out:n});break}case"create":{let{model:i,options:n}=r;_a(i,n).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":ba(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:n,inputs:a,outputIndices:s,options:o}=r;wa(i,n,a,s,new Array(s.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},va([...a,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":$a(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Wp=Ai?null:e=>new Worker(e??De,{type:"module",name:zi})}),qp={};Kt(qp,{default:()=>Vp});async function To(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(u,p)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Yc||(t.Yc=new Map)).set(u,p)},t.unmountExternalData=()=>{delete t.Yc,delete t.Zd,delete t.Yd,delete t.$d},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=u=>async(...p)=>{try{if(t.Xc)throw Error("Session already started");let g=t.Xc={Kd:p[0],errors:[]},m=await u(...p);if(t.Xc!==g)throw Error("Session mismatch");t.dd?.flush();let x=g.errors;if(0<x.length){let E=await Promise.all(x);if(E=E.filter(A=>A),0<E.length)throw Error(E.join(`
`))}return m}finally{t.Xc=null}};t.jsepInit=(u,p)=>{if(u==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let g=t.dd;t.jsepRegisterBuffer=(m,x,E,A)=>g.registerBuffer(m,x,E,A),t.jsepGetBuffer=m=>g.getBuffer(m),t.jsepCreateDownloader=(m,x,E)=>g.createDownloader(m,x,E),t.jsepOnCreateSession=m=>{g.onCreateSession(m)},t.jsepOnReleaseSession=m=>{g.onReleaseSession(m)},t.jsepOnRunStart=m=>g.onRunStart(m),t.Id=(m,x)=>{g.upload(m,x)}}else if(u==="webnn"){let g=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=m=>g.onRunStart(m),t.webnnOnRunEnd=g.onRunEnd.bind(g),t.webnnOnReleaseSession=m=>{g.onReleaseSession(m)},t.webnnCreateMLTensorDownloader=(m,x)=>g.createMLTensorDownloader(m,x),t.webnnRegisterMLTensor=(m,x,E,A)=>g.registerMLTensor(m,x,E,A),t.webnnCreateMLContext=m=>g.createMLContext(m),t.webnnRegisterGraphInput=g.registerGraphInput.bind(g),t.webnnIsGraphInput=g.isGraphInput.bind(g),t.webnnRegisterGraphOutput=g.registerGraphOutput.bind(g),t.webnnIsGraphOutput=g.isGraphOutput.bind(g),t.webnnCreateTemporaryTensor=g.createTemporaryTensor.bind(g),t.webnnIsGraphInputOutputTypeSupported=g.isGraphInputOutputTypeSupported.bind(g)}};let s=()=>{let u=p=>(...g)=>{let m=Je;return g=p(...g),Je!=m?new Promise((x,E)=>{fi={resolve:x,reject:E}}):g};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=u(t[p])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s?.()};var o,l,d=(u,p)=>{throw p},h=import.meta.url,c="";if(r||i){try{c=new URL(".",h).href}catch{}i&&(l=u=>{var p=new XMLHttpRequest;return p.open("GET",u,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),o=async u=>{if(z(u))return new Promise((g,m)=>{var x=new XMLHttpRequest;x.open("GET",u,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?g(x.response):m(x.status)},x.onerror=m,x.send(null)});var p=await fetch(u,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var f,_,y,w,S,$,b=console.log.bind(console),T=console.error.bind(console),k=b,I=T,C=!1,z=u=>u.startsWith("file://");function v(){dt.buffer!=P.buffer&&ee()}if(n){let u=function(p){try{var g=p.data,m=g.Sc;if(m==="load"){let x=[];self.onmessage=E=>x.push(E),$=()=>{postMessage({Sc:"loaded"});for(let E of x)u(E);self.onmessage=u};for(let E of g.xd)t[E]&&!t[E].proxy||(t[E]=(...A)=>{postMessage({Sc:"callHandler",vd:E,args:A})},E=="print"&&(k=t[E]),E=="printErr"&&(I=t[E]));dt=g.Od,ee(),_=g.Pd,Ae(),Cr()}else if(m==="run"){(function(x){var E=(v(),N)[x+52>>>2>>>0];x=(v(),N)[x+56>>>2>>>0],As(E,E-x),oe(E)})(g.Rc),bi(g.Rc,0,0,1,0,0),Oa(),pi(g.Rc),M||(Ts(),M=!0);try{zm(g.Md,g.bd)}catch(x){if(x!="unwind")throw x}}else g.target!=="setimmediate"&&(m==="checkMailbox"?M&&vr():m&&(I(`worker: received unknown command ${m}`),I(g)))}catch(x){throw ks(),x}};var M=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=u}var P,j,V,L,O,N,H,Q,J,te,ae,U=!1;function ee(){var u=dt.buffer;t.HEAP8=P=new Int8Array(u),V=new Int16Array(u),t.HEAPU8=j=new Uint8Array(u),L=new Uint16Array(u),t.HEAP32=O=new Int32Array(u),t.HEAPU32=N=new Uint32Array(u),H=new Float32Array(u),Q=new Float64Array(u),J=new BigInt64Array(u),te=new BigUint64Array(u)}function Y(){U=!0,n?$():nt.sb()}function F(u){throw I(u="Aborted("+u+")"),C=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),S?.(u),u}function ke(){return{a:{ma:Jg,hb:Yg,g:Am,J:Om,f:Rm,o:Bm,i:Dm,$:Mm,b:Nm,S:Pm,Ia:Pa,n:Um,aa:qa,Ya:Va,Ea:Ga,Ga:Fa,Za:Ha,Wa:ja,Pa:Ka,Va:Xa,ka:Za,Fa:Qa,Ca:Ya,Xa:Ja,Da:es,cb:Lm,fa:Wm,xa:qm,va:Gm,ea:Hm,N:jm,H:Km,wa:Xm,_:rg,ya:ig,Sa:ng,Aa:sg,Ja:og,ta:ug,ga:lg,Ra:pi,$a:dg,Q:fg,r:bg,c:li,ib:wg,y:$g,M:vg,D:xg,l:Sg,s:us,jb:Tg,I:kg,R:Ig,j:Eg,u:Cg,q:zg,k:Ag,Ma:Og,Na:Rg,Oa:Bg,Ka:cs,La:hs,ua:fs,eb:Mg,bb:Pg,v:Ug,ba:Lg,ha:Wg,ab:Ng,V:qg,_a:Vg,Ba:Gg,F:Dg,T:Fg,la:Ir,za:jg,gb:Hg,fb:Kg,Ta:_s,Ua:bs,Ha:ni,U:ws,ja:$s,Qa:vs,ia:xs,lb:D0,na:z0,mb:B0,oa:C0,G:b0,e:i0,t:t0,w:e0,B:h0,nb:k0,Z:T0,x:s0,pa:I0,X:A0,ca:S0,ob:x0,pb:v0,O:f0,qa:$0,qb:w0,L:y0,Y:E0,d:r0,A:a0,m:n0,kb:M0,p:u0,z:l0,C:o0,E:d0,K:m0,ra:_0,P:O0,da:g0,W:R0,rb:c0,sa:p0,h:Zg,a:dt,db:ii}}}async function Ae(){function u(m,x){var E=nt=m.exports;m={};for(let[A,D]of Object.entries(E))typeof D=="function"?(E=pg(D),m[A]=E):m[A]=D;return nt=m,nt=(function(){var A=nt,D=G=>se=>G(se)>>>0,q=G=>()=>G()>>>0;return(A=Object.assign({},A)).tb=D(A.tb),A.Xb=q(A.Xb),A.Zb=D(A.Zb),A.lc=D(A.lc),A.mc=q(A.mc),A.qc=D(A.qc),A})(),za.push(nt._b),Ss=(m=nt).tb,Ts=m.ub,t._OrtInit=m.vb,t._OrtGetLastError=m.wb,t._OrtCreateSessionOptions=m.xb,t._OrtAppendExecutionProvider=m.yb,t._OrtAddFreeDimensionOverride=m.zb,t._OrtAddSessionConfigEntry=m.Ab,t._OrtReleaseSessionOptions=m.Bb,t._OrtCreateSession=m.Cb,t._OrtReleaseSession=m.Db,t._OrtGetInputOutputCount=m.Eb,t._OrtGetInputOutputMetadata=m.Fb,t._OrtFree=m.Gb,t._OrtCreateTensor=m.Hb,t._OrtGetTensorData=m.Ib,t._OrtReleaseTensor=m.Jb,t._OrtCreateRunOptions=m.Kb,t._OrtAddRunConfigEntry=m.Lb,t._OrtReleaseRunOptions=m.Mb,t._OrtCreateBinding=m.Nb,t._OrtBindInput=m.Ob,t._OrtBindOutput=m.Pb,t._OrtClearBoundOutputs=m.Qb,t._OrtReleaseBinding=m.Rb,t._OrtRunWithBinding=m.Sb,t._OrtRun=m.Tb,t._OrtEndProfiling=m.Ub,t._JsepOutput=m.Vb,t._JsepGetNodeName=m.Wb,Er=m.Xb,et=t._free=m.Yb,Qt=t._malloc=m.Zb,bi=m.ac,ks=m.bc,Is=m.cc,Es=m.dc,wi=m.ec,Cs=m.fc,zs=m.gc,le=m.hc,Yt=m.ic,As=m.jc,oe=m.kc,$i=m.lc,ue=m.mc,Os=m.nc,vi=m.oc,Rs=m.pc,Bs=m.qc,Ds=m.rc,xi=m.sc,Ms=m.tc,Ns=m.uc,Ps=m.vc,Us=m.wc,Ls=m.xc,Ws=m.yc,qs=m.zc,Vs=m.Ac,Gs=m.Bc,Fs=m.Cc,Hs=m.Dc,js=m.Ec,Ks=m.Fc,Xs=m.Gc,Zs=m.Hc,Qs=m.Ic,Ys=m.Jc,Js=m.Kc,eo=m.Lc,to=m.Mc,ro=m.Nc,io=m.Pc,no=m.Qc,ao=m.$c,so=m.ad,oo=m.fd,uo=m.kd,lo=m.ld,po=m.md,co=m.nd,ho=m.od,fo=m.pd,mo=m.qd,go=m.rd,yo=m.wd,_o=m.Ud,bo=m.Vd,wo=m.Wd,$o=m.Xd,_=x,nt}var p,g=ke();return t.instantiateWasm?new Promise(m=>{t.instantiateWasm(g,(x,E)=>{m(u(x,E))})}):n?u(new WebAssembly.Instance(_,ke()),_):(ae??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-D-icqfN-.wasm",import.meta.url).href,import.meta.url).href,p=await(async function(m){var x=ae;if(!f&&!z(x))try{var E=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,m)}catch(A){I(`wasm streaming compile failed: ${A}`),I("falling back to ArrayBuffer instantiation")}return(async function(A,D){try{var q=await(async function(G){if(!f)try{var se=await o(G);return new Uint8Array(se)}catch{}if(G==ae&&f)G=new Uint8Array(f);else{if(!l)throw"both async and sync fetching of the wasm failed";G=l(G)}return G})(A);return await WebAssembly.instantiate(q,D)}catch(G){I(`failed to asynchronously prepare wasm: ${G}`),F(G)}})(x,m)})(g),u(p.instance,p.module))}class $e{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var Oe=u=>{u.terminate(),u.onmessage=()=>{}},me=[],we=0,Re=null,yr=u=>{lt.length==0&&(Ba(),Ra(lt[0]));var p=lt.pop();if(!p)return 6;Xt.push(p),xt[u.Rc]=p,p.Rc=u.Rc;var g={Sc:"run",Md:u.Ld,bd:u.bd,Rc:u.Rc};return p.postMessage(g,u.jd),0},Qe=0,ve=(u,p,...g)=>{var m,x=16*g.length,E=ue(),A=$i(x),D=A>>>3;for(m of g)typeof m=="bigint"?((v(),J)[D++>>>0]=1n,(v(),J)[D++>>>0]=m):((v(),J)[D++>>>0]=0n,(v(),Q)[D++>>>0]=m);return u=Is(u,0,x,A,p),oe(E),u};function ii(u){if(n)return ve(0,1,u);if(y=u,!(0<Qe)){for(var p of Xt)Oe(p);for(p of lt)Oe(p);lt=[],Xt=[],xt={},C=!0}d(0,new $e(u))}function Ca(u){if(n)return ve(1,0,u);ni(u)}var ni=u=>{if(y=u,n)throw Ca(u),"unwind";ii(u)},lt=[],Xt=[],za=[],xt={},Aa=u=>{var p=u.Rc;delete xt[p],lt.push(u),Xt.splice(Xt.indexOf(u),1),u.Rc=0,Es(p)};function Oa(){za.forEach(u=>u())}var Ra=u=>new Promise(p=>{u.onmessage=x=>{var E=x.data;if(x=E.Sc,E.Zc&&E.Zc!=Er()){var A=xt[E.Zc];A?A.postMessage(E,E.jd):I(`Internal error! Worker sent a message "${x}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else x==="checkMailbox"?vr():x==="spawnThread"?yr(E):x==="cleanupThread"?$r(()=>{Aa(xt[E.Nd])}):x==="loaded"?(u.loaded=!0,p(u)):E.target==="setimmediate"?u.postMessage(E):x==="uncaughtException"?u.onerror(E.error):x==="callHandler"?t[E.vd](...E.args):x&&I(`worker sent an unknown command ${x}`)},u.onerror=x=>{throw I(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var g,m=[];for(g of[])t.propertyIsEnumerable(g)&&m.push(g);u.postMessage({Sc:"load",xd:m,Od:dt,Pd:_})});function Ba(){var u=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});lt.push(u)}var dt,zm=(u,p)=>{Qe=0,u=xi(u,p),0<Qe?y=u:wi(u)},_r=[],br=0;function Am(u){var p=new ai(u>>>=0);return(v(),P)[p.Tc+12>>>0]==0&&(Da(p,!0),br--),Ma(p,!1),_r.push(p),Bs(u)}var Lt=0,Om=()=>{le(0,0);var u=_r.pop();Os(u.cd),Lt=0};function Da(u,p){p=p?1:0,(v(),P)[u.Tc+12>>>0]=p}function Ma(u,p){p=p?1:0,(v(),P)[u.Tc+13>>>0]=p}class ai{constructor(p){this.cd=p,this.Tc=p-24}}var si=u=>{var p=Lt;if(!p)return Yt(0),0;var g=new ai(p);(v(),N)[g.Tc+16>>>2>>>0]=p;var m=(v(),N)[g.Tc+4>>>2>>>0];if(!m)return Yt(0),p;for(var x of u){if(x===0||x===m)break;if(Rs(x,m,g.Tc+16))return Yt(x),p}return Yt(m),p};function Rm(){return si([])}function Bm(u){return si([u>>>0])}function Dm(u,p,g,m){return si([u>>>0,p>>>0,g>>>0,m>>>0])}var Mm=()=>{var u=_r.pop();u||F("no exception to throw");var p=u.cd;throw(v(),P)[u.Tc+13>>>0]==0&&(_r.push(u),Ma(u,!0),Da(u,!1),br++),vi(p),Lt=p};function Nm(u,p,g){var m=new ai(u>>>=0);throw p>>>=0,g>>>=0,(v(),N)[m.Tc+16>>>2>>>0]=0,(v(),N)[m.Tc+4>>>2>>>0]=p,(v(),N)[m.Tc+8>>>2>>>0]=g,vi(u),br++,Lt=u}var Pm=()=>br;function Na(u,p,g,m){return n?ve(2,1,u,p,g,m):Pa(u,p,g,m)}function Pa(u,p,g,m){if(u>>>=0,p>>>=0,g>>>=0,m>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return n&&x.length===0?Na(u,p,g,m):(u={Ld:g,Rc:u,bd:m,jd:x},n?(u.Sc="spawnThread",postMessage(u,x),0):yr(u))}function Um(u){throw Lt||=u>>>0,Lt}var Ua=globalThis.TextDecoder&&new TextDecoder,La=(u,p,g,m)=>{if(g=p+g,m)return g;for(;u[p]&&!(p>=g);)++p;return p},Wa=(u,p=0,g,m)=>{if(16<(g=La(u,p>>>=0,g,m))-p&&u.buffer&&Ua)return Ua.decode(u.buffer instanceof ArrayBuffer?u.subarray(p,g):u.slice(p,g));for(m="";p<g;){var x=u[p++];if(128&x){var E=63&u[p++];if((224&x)==192)m+=String.fromCharCode((31&x)<<6|E);else{var A=63&u[p++];65536>(x=(240&x)==224?(15&x)<<12|E<<6|A:(7&x)<<18|E<<12|A<<6|63&u[p++])?m+=String.fromCharCode(x):(x-=65536,m+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else m+=String.fromCharCode(x)}return m},Te=(u,p,g)=>(u>>>=0)?Wa((v(),j),u,p,g):"";function qa(u,p,g){return n?ve(3,1,u,p,g):0}function Va(u,p){if(n)return ve(4,1,u,p)}function Ga(u,p){if(n)return ve(5,1,u,p)}function Fa(u,p,g){if(n)return ve(6,1,u,p,g)}function Ha(u,p,g){return n?ve(7,1,u,p,g):0}function ja(u,p){if(n)return ve(8,1,u,p)}function Ka(u,p,g){if(n)return ve(9,1,u,p,g)}function Xa(u,p,g,m){if(n)return ve(10,1,u,p,g,m)}function Za(u,p,g,m){if(n)return ve(11,1,u,p,g,m)}function Qa(u,p,g,m){if(n)return ve(12,1,u,p,g,m)}function Ya(u){if(n)return ve(13,1,u)}function Ja(u,p){if(n)return ve(14,1,u,p)}function es(u,p,g){if(n)return ve(15,1,u,p,g)}var Lm=()=>F(""),Ye=u=>{u>>>=0;for(var p="";;){var g=(v(),j)[u++>>>0];if(!g)return p;p+=String.fromCharCode(g)}},oi={},ui={},Wt=class extends Error{constructor(u){super(u),this.name="BindingError"}};function it(u,p,g={}){return(function(m,x,E={}){var A=x.name;if(!m)throw new Wt(`type "${A}" must have a positive integer typeid pointer`);if(ui.hasOwnProperty(m)){if(E.yd)return;throw new Wt(`Cannot register type '${A}' twice`)}ui[m]=x,oi.hasOwnProperty(m)&&(x=oi[m],delete oi[m],x.forEach(D=>D()))})(u,p,g)}var ts=(u,p,g)=>{switch(p){case 1:return g?m=>(v(),P)[m>>>0]:m=>(v(),j)[m>>>0];case 2:return g?m=>(v(),V)[m>>>1>>>0]:m=>(v(),L)[m>>>1>>>0];case 4:return g?m=>(v(),O)[m>>>2>>>0]:m=>(v(),N)[m>>>2>>>0];case 8:return g?m=>(v(),J)[m>>>3>>>0]:m=>(v(),te)[m>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${u}`)}};function Wm(u,p,g,m,x){u>>>=0,g>>>=0,p=Ye(p>>>0);let E=A=>A;if(m=m===0n){let A=8*g;E=D=>BigInt.asUintN(A,D),x=E(x)}it(u,{name:p,Oc:E,Vc:(A,D)=>(typeof D=="number"&&(D=BigInt(D)),D),Uc:ts(p,g,!m),Wc:null})}function qm(u,p,g,m){it(u>>>=0,{name:p=Ye(p>>>0),Oc:function(x){return!!x},Vc:function(x,E){return E?g:m},Uc:function(x){return this.Oc((v(),j)[x>>>0])},Wc:null})}var rs=[],St=[0,1,,1,null,1,!0,1,!1,1];function li(u){9<(u>>>=0)&&--St[u+1]===0&&(St[u]=void 0,rs.push(u))}var Pe=u=>{if(!u)throw new Wt(`Cannot use deleted val. handle = ${u}`);return St[u]},qe=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=rs.pop()||St.length;return St[p]=u,St[p+1]=1,p}};function di(u){return this.Oc((v(),N)[u>>>2>>>0])}var Vm={name:"emscripten::val",Oc:u=>{var p=Pe(u);return li(u),p},Vc:(u,p)=>qe(p),Uc:di,Wc:null};function Gm(u){return it(u>>>0,Vm)}var Fm=(u,p)=>{switch(p){case 4:return function(g){return this.Oc((v(),H)[g>>>2>>>0])};case 8:return function(g){return this.Oc((v(),Q)[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${u}`)}};function Hm(u,p,g){g>>>=0,it(u>>>=0,{name:p=Ye(p>>>0),Oc:m=>m,Vc:(m,x)=>x,Uc:Fm(p,g),Wc:null})}function jm(u,p,g,m,x){u>>>=0,g>>>=0,p=Ye(p>>>0);let E=D=>D;if(m===0){var A=32-8*g;E=D=>D<<A>>>A,x=E(x)}it(u,{name:p,Oc:E,Vc:(D,q)=>q,Uc:ts(p,g,m!==0),Wc:null})}function Km(u,p,g){function m(E){var A=(v(),N)[E>>>2>>>0];return E=(v(),N)[E+4>>>2>>>0],new x((v(),P).buffer,E,A)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];it(u>>>=0,{name:g=Ye(g>>>0),Oc:m,Uc:m},{yd:!0})}var pt=(u,p,g)=>{var m=(v(),j);if(p>>>=0,0<g){var x=p;g=p+g-1;for(var E=0;E<u.length;++E){var A=u.codePointAt(E);if(127>=A){if(p>=g)break;m[p++>>>0]=A}else if(2047>=A){if(p+1>=g)break;m[p++>>>0]=192|A>>6,m[p++>>>0]=128|63&A}else if(65535>=A){if(p+2>=g)break;m[p++>>>0]=224|A>>12,m[p++>>>0]=128|A>>6&63,m[p++>>>0]=128|63&A}else{if(p+3>=g)break;m[p++>>>0]=240|A>>18,m[p++>>>0]=128|A>>12&63,m[p++>>>0]=128|A>>6&63,m[p++>>>0]=128|63&A,E++}}m[p>>>0]=0,u=p-x}else u=0;return u},wr=u=>{for(var p=0,g=0;g<u.length;++g){var m=u.charCodeAt(g);127>=m?p++:2047>=m?p+=2:55296<=m&&57343>=m?(p+=4,++g):p+=3}return p};function Xm(u,p){it(u>>>=0,{name:p=Ye(p>>>0),Oc(g){var m=(v(),N)[g>>>2>>>0];return m=Te(g+4,m,!0),et(g),m},Vc(g,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var x=typeof m=="string";if(!(x||ArrayBuffer.isView(m)&&m.BYTES_PER_ELEMENT==1))throw new Wt("Cannot pass non-string to std::string");var E=x?wr(m):m.length,A=Qt(4+E+1),D=A+4;return(v(),N)[A>>>2>>>0]=E,x?pt(m,D,E+1):(v(),j).set(m,D>>>0),g!==null&&g.push(et,A),A},Uc:di,Wc(g){et(g)}})}var is=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Zm=(u,p,g)=>{if(u>>>=1,16<(p=La((v(),L),u,p/2,g))-u&&is)return is.decode((v(),L).slice(u,p));for(g="";u<p;++u){var m=(v(),L)[u>>>0];g+=String.fromCharCode(m)}return g},Qm=(u,p,g)=>{if(g??=2147483647,2>g)return 0;var m=p;g=(g-=2)<2*u.length?g/2:u.length;for(var x=0;x<g;++x){var E=u.charCodeAt(x);(v(),V)[p>>>1>>>0]=E,p+=2}return(v(),V)[p>>>1>>>0]=0,p-m},Ym=u=>2*u.length,Jm=(u,p,g)=>{var m="";u>>>=2;for(var x=0;!(x>=p/4);x++){var E=(v(),N)[u+x>>>0];if(!E&&!g)break;m+=String.fromCodePoint(E)}return m},eg=(u,p,g)=>{if(p>>>=0,g??=2147483647,4>g)return 0;var m=p;g=m+g-4;for(var x=0;x<u.length;++x){var E=u.codePointAt(x);if(65535<E&&x++,(v(),O)[p>>>2>>>0]=E,(p+=4)+4>g)break}return(v(),O)[p>>>2>>>0]=0,p-m},tg=u=>{for(var p=0,g=0;g<u.length;++g)65535<u.codePointAt(g)&&g++,p+=4;return p};function rg(u,p,g){if(u>>>=0,p>>>=0,g=Ye(g>>>=0),p===2)var m=Zm,x=Qm,E=Ym;else m=Jm,x=eg,E=tg;it(u,{name:g,Oc:A=>{var D=(v(),N)[A>>>2>>>0];return D=m(A+4,D*p,!0),et(A),D},Vc:(A,D)=>{if(typeof D!="string")throw new Wt(`Cannot pass non-string to C++ string type ${g}`);var q=E(D),G=Qt(4+q+p);return(v(),N)[G>>>2>>>0]=q/p,x(D,G+4,q+p),A!==null&&A.push(et,G),G},Uc:di,Wc(A){et(A)}})}function ig(u,p){it(u>>>=0,{zd:!0,name:p=Ye(p>>>0),Oc:()=>{},Vc:()=>{}})}function ng(u){bi(u>>>0,!i,1,!r,131072,!1),Oa()}var $r=u=>{if(!C)try{if(u(),!(0<Qe))try{n?Er()&&wi(y):ni(y)}catch(p){p instanceof $e||p=="unwind"||d(0,p)}}catch(p){p instanceof $e||p=="unwind"||d(0,p)}},ag=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function pi(u){u>>>=0,ag||(Atomics.waitAsync((v(),O),u>>>2,u).value.then(vr),u+=128,Atomics.store((v(),O),u>>>2,1))}var vr=()=>$r(()=>{var u=Er();u&&(pi(u),zs())});function sg(u,p){(u>>>=0)==p>>>0?setTimeout(vr):n?postMessage({Zc:u,Sc:"checkMailbox"}):(u=xt[u])&&u.postMessage({Sc:"checkMailbox"})}var ci=[];function og(u,p,g,m,x){for(p>>>=0,x>>>=0,ci.length=0,g=x>>>3,m=x+m>>>3;g<m;){var E;E=(v(),J)[g++>>>0]?(v(),J)[g++>>>0]:(v(),Q)[g++>>>0],ci.push(E)}return(p?Si[p]:Qg[u])(...ci)}var ug=()=>{Qe=0};function lg(u){u>>>=0,n?postMessage({Sc:"cleanupThread",Nd:u}):Aa(xt[u])}function dg(u){}var xr=u=>{try{u()}catch(p){F(p)}};function pg(u){var p=(...g)=>{Sr.push(u);try{return u(...g)}finally{C||(Sr.pop(),Je&&ct===1&&Sr.length===0&&(ct=0,Qe+=1,xr(bo),typeof Fibers<"u"&&Fibers.be()))}};return ss.set(u,p),p}var ct=0,Je=null,ns=0,Sr=[],hi=new Map,as=new Map,ss=new Map,cg=0,fi=null,hg=[],os=u=>(function(p){if(!C){if(ct===0){var g=!1,m=!1;p((x=0)=>{if(!C&&(ns=x,g=!0,m)){ct=2,xr(()=>wo(Je)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),x=!1;try{var E=(function(){var q=(v(),O)[Je+8>>>2>>>0];return q=as.get(q),q=ss.get(q),--Qe,q()})()}catch(q){E=q,x=!0}var A=!1;if(!Je){var D=fi;D&&(fi=null,(x?D.reject:D.resolve)(E),A=!0)}if(x&&!A)throw E}}),m=!0,g||(ct=1,Je=(function(){var x=Qt(65548),E=x+12;if((v(),N)[x>>>2>>>0]=E,(v(),N)[x+4>>>2>>>0]=E+65536,E=Sr[0],!hi.has(E)){var A=cg++;hi.set(E,A),as.set(A,E)}return E=hi.get(E),(v(),O)[x+8>>>2>>>0]=E,x})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),xr(()=>_o(Je)))}else ct===2?(ct=0,xr($o),et(Je),Je=null,hg.forEach($r)):F(`invalid state: ${ct}`);return ns}})(p=>{u().then(p)});function fg(u){return u>>>=0,os(async()=>{var p=await Pe(u);return qe(p)})}var mi=[],mg=u=>{var p=mi.length;return mi.push(u),p},gg=(u,p)=>{for(var g=Array(u),m=0;m<u;++m){var x=m,E=(v(),N)[p+4*m>>>2>>>0],A=ui[E];if(A===void 0)throw u=`parameter ${m}`,E=Ss(E),p=Ye(E),et(E),new Wt(`${u} has unknown type ${p}`);g[x]=A}return g},yg=(u,p,g)=>{var m=[];return u=u(m,g),m.length&&((v(),N)[p>>>2>>>0]=qe(m)),u},_g={},Tr=u=>{var p=_g[u];return p===void 0?Ye(u):p};function bg(u,p,g){var[m,...x]=gg(u,p>>>0);p=m.Vc.bind(m);var E=x.map(q=>q.Uc.bind(q));u--;var A={toValue:Pe};switch(u=E.map((q,G)=>{var se=`argFromPtr${G}`;return A[se]=q,`${se}(args${G?"+"+8*G:""})`}),g){case 0:var D="toValue(handle)";break;case 2:D="new (toValue(handle))";break;case 3:D="";break;case 1:A.getStringOrSymbol=Tr,D="toValue(handle)[getStringOrSymbol(methodName)]"}return D+=`(${u})`,m.zd||(A.toReturnWire=p,A.emval_returnValue=yg,D=`return emval_returnValue(toReturnWire, destructorsRef, ${D})`),D=`return function (handle, methodName, destructorsRef, args) {
  ${D}
  }`,g=new Function(Object.keys(A),D)(...Object.values(A)),D=`methodCaller<(${x.map(q=>q.name)}) => ${m.name}>`,mg(Object.defineProperty(g,"name",{value:D}))}function wg(u,p){return p>>>=0,(u=Pe(u>>>0))==Pe(p)}function $g(u){return(u>>>=0)?(u=Tr(u),qe(globalThis[u])):qe(globalThis)}function vg(u){return u=Tr(u>>>0),qe(t[u])}function xg(u,p){return p>>>=0,u=Pe(u>>>0),p=Pe(p),qe(u[p])}function Sg(u){9<(u>>>=0)&&(St[u+1]+=1)}function us(u,p,g,m,x){return mi[u>>>0](p>>>0,g>>>0,m>>>0,x>>>0)}function Tg(u,p,g,m,x){return us(u>>>0,p>>>0,g>>>0,m>>>0,x>>>0)}function kg(){return qe([])}function Ig(u){u=Pe(u>>>0);for(var p=Array(u.length),g=0;g<u.length;g++)p[g]=u[g];return qe(p)}function Eg(u){return qe(Tr(u>>>0))}function Cg(){return qe({})}function zg(u){for(var p=Pe(u>>>=0);p.length;){var g=p.pop();p.pop()(g)}li(u)}function Ag(u,p,g){p>>>=0,g>>>=0,u=Pe(u>>>0),p=Pe(p),g=Pe(g),u[p]=g}function Og(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),(v(),O)[p>>>2>>>0]=u.getUTCSeconds(),(v(),O)[p+4>>>2>>>0]=u.getUTCMinutes(),(v(),O)[p+8>>>2>>>0]=u.getUTCHours(),(v(),O)[p+12>>>2>>>0]=u.getUTCDate(),(v(),O)[p+16>>>2>>>0]=u.getUTCMonth(),(v(),O)[p+20>>>2>>>0]=u.getUTCFullYear()-1900,(v(),O)[p+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),O)[p+28>>>2>>>0]=u}var ls=u=>u%4==0&&(u%100!=0||u%400==0),ds=[0,31,60,91,121,152,182,213,244,274,305,335],ps=[0,31,59,90,120,151,181,212,243,273,304,334];function Rg(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),(v(),O)[p>>>2>>>0]=u.getSeconds(),(v(),O)[p+4>>>2>>>0]=u.getMinutes(),(v(),O)[p+8>>>2>>>0]=u.getHours(),(v(),O)[p+12>>>2>>>0]=u.getDate(),(v(),O)[p+16>>>2>>>0]=u.getMonth(),(v(),O)[p+20>>>2>>>0]=u.getFullYear()-1900,(v(),O)[p+24>>>2>>>0]=u.getDay();var g=(ls(u.getFullYear())?ds:ps)[u.getMonth()]+u.getDate()-1|0;(v(),O)[p+28>>>2>>>0]=g,(v(),O)[p+36>>>2>>>0]=-60*u.getTimezoneOffset(),g=new Date(u.getFullYear(),6,1).getTimezoneOffset();var m=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(g!=m&&u.getTimezoneOffset()==Math.min(m,g)),(v(),O)[p+32>>>2>>>0]=u}function Bg(u){u>>>=0;var p=new Date((v(),O)[u+20>>>2>>>0]+1900,(v(),O)[u+16>>>2>>>0],(v(),O)[u+12>>>2>>>0],(v(),O)[u+8>>>2>>>0],(v(),O)[u+4>>>2>>>0],(v(),O)[u>>>2>>>0],0),g=(v(),O)[u+32>>>2>>>0],m=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),E=new Date(p.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,x);return 0>g?(v(),O)[u+32>>>2>>>0]=+(x!=E&&A==m):0<g!=(A==m)&&(x=Math.max(E,x),p.setTime(p.getTime()+6e4*((0<g?A:x)-m))),(v(),O)[u+24>>>2>>>0]=p.getDay(),g=(ls(p.getFullYear())?ds:ps)[p.getMonth()]+p.getDate()-1|0,(v(),O)[u+28>>>2>>>0]=g,(v(),O)[u>>>2>>>0]=p.getSeconds(),(v(),O)[u+4>>>2>>>0]=p.getMinutes(),(v(),O)[u+8>>>2>>>0]=p.getHours(),(v(),O)[u+12>>>2>>>0]=p.getDate(),(v(),O)[u+16>>>2>>>0]=p.getMonth(),(v(),O)[u+20>>>2>>>0]=p.getYear(),u=p.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function cs(u,p,g,m,x,E,A){return n?ve(16,1,u,p,g,m,x,E,A):-52}function hs(u,p,g,m,x,E){if(n)return ve(17,1,u,p,g,m,x,E)}var Zt={},Dg=()=>performance.timeOrigin+performance.now();function fs(u,p){if(n)return ve(18,1,u,p);if(Zt[u]&&(clearTimeout(Zt[u].id),delete Zt[u]),!p)return 0;var g=setTimeout(()=>{delete Zt[u],$r(()=>Cs(u,performance.timeOrigin+performance.now()))},p);return Zt[u]={id:g,ae:p},0}function Mg(u,p,g,m){u>>>=0,p>>>=0,g>>>=0,m>>>=0;var x=new Date().getFullYear(),E=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var A=Math.max(E,x);(v(),N)[u>>>2>>>0]=60*A,(v(),O)[p>>>2>>>0]=+(E!=x),u=(p=D=>{var q=Math.abs(D);return`UTC${0<=D?"-":"+"}${String(Math.floor(q/60)).padStart(2,"0")}${String(q%60).padStart(2,"0")}`})(E),p=p(x),x<E?(pt(u,g,17),pt(p,m,17)):(pt(u,m,17),pt(p,g,17))}var Ng=()=>Date.now();function Pg(u,p,g){return g>>>=0,0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),u=Math.round(1e6*u),(v(),J)[g>>>3>>>0]=BigInt(u),0):28}var gi=[],ms=(u,p)=>{gi.length=0;for(var g;g=(v(),j)[u++>>>0];){var m=g!=105;p+=(m&=g!=112)&&p%8?4:0,gi.push(g==112?(v(),N)[p>>>2>>>0]:g==106?(v(),J)[p>>>3>>>0]:g==105?(v(),O)[p>>>2>>>0]:(v(),Q)[p>>>3>>>0]),p+=m?8:4}return gi};function Ug(u,p,g){return u>>>=0,p=ms(p>>>0,g>>>0),Si[u](...p)}function Lg(u,p,g){return u>>>=0,p=ms(p>>>0,g>>>0),Si[u](...p)}var Wg=()=>{};function qg(u,p){return I(Te(u>>>0,p>>>0))}var Vg=()=>{throw Qe+=1,"unwind"};function Gg(){return 4294901760}var Fg=()=>navigator.hardwareConcurrency,Tt={},kr=u=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+p[1]:0},gs=u=>{for(var p of u)(u=kr(p))&&(Tt[u]=p)};function Hg(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),gs(u),Tt.gd=kr(u[3]),Tt.Jd=u,Tt.gd}function Ir(u){if(!(u=Tt[u>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(u))u=p[1];else{if(!(p=/^(.+?)@/.exec(u)))return 0;u=p[1]}et(Ir.hd??0),p=wr(u)+1;var g=Qt(p);return g&&pt(u,g,p),Ir.hd=g,Ir.hd}function jg(u){u>>>=0;var p=(v(),j).length;if(u<=p||4294901760<u)return!1;for(var g=1;4>=g;g*=2){var m=p*(1+.2/g);m=Math.min(m,u+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(u,m)/65536))-dt.buffer.byteLength+65535)/65536|0;try{dt.grow(m),ee();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function Kg(u,p,g){if(u>>>=0,p>>>=0,Tt.gd==u)var m=Tt.Jd;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),gs(m);for(var x=3;m[x]&&kr(m[x])!=u;)++x;for(u=0;u<g&&m[u+x];++u)(v(),O)[p+4*u>>>2>>>0]=kr(m[u+x]);return u}var yi,_i={},ys=()=>{if(!yi){var u,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in _i)_i[u]===void 0?delete p[u]:p[u]=_i[u];var g=[];for(u in p)g.push(`${u}=${p[u]}`);yi=g}return yi};function _s(u,p){if(n)return ve(19,1,u,p);u>>>=0,p>>>=0;var g,m=0,x=0;for(g of ys()){var E=p+m;(v(),N)[u+x>>>2>>>0]=E,m+=pt(g,E,1/0)+1,x+=4}return 0}function bs(u,p){if(n)return ve(20,1,u,p);u>>>=0,p>>>=0;var g=ys();for(var m of((v(),N)[u>>>2>>>0]=g.length,u=0,g))u+=wr(m)+1;return(v(),N)[p>>>2>>>0]=u,0}function ws(u){return n?ve(21,1,u):52}function $s(u,p,g,m){return n?ve(22,1,u,p,g,m):52}function vs(u,p,g,m){return n?ve(23,1,u,p,g,m):70}var Xg=[null,[],[]];function xs(u,p,g,m){if(n)return ve(24,1,u,p,g,m);p>>>=0,g>>>=0,m>>>=0;for(var x=0,E=0;E<g;E++){var A=(v(),N)[p>>>2>>>0],D=(v(),N)[p+4>>>2>>>0];p+=8;for(var q=0;q<D;q++){var G=u,se=(v(),j)[A+q>>>0],pe=Xg[G];se===0||se===10?((G===1?k:I)(Wa(pe)),pe.length=0):pe.push(se)}x+=D}return(v(),N)[m>>>2>>>0]=x,0}function Zg(u){return u>>>0}n||(function(){for(var u=t.numThreads-1;u--;)Ba();me.push(async()=>{var p=(async function(){if(!n)return Promise.all(lt.map(Ra))})();we++,await p,--we==0&&Re&&(p=Re,Re=null,p())})})(),n||(dt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ee()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>ue(),t.stackRestore=u=>oe(u),t.stackAlloc=u=>$i(u),t.setValue=function(u,p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":(v(),P)[u>>>0]=p;break;case"i16":(v(),V)[u>>>1>>>0]=p;break;case"i32":(v(),O)[u>>>2>>>0]=p;break;case"i64":(v(),J)[u>>>3>>>0]=BigInt(p);break;case"float":(v(),H)[u>>>2>>>0]=p;break;case"double":(v(),Q)[u>>>3>>>0]=p;break;case"*":(v(),N)[u>>>2>>>0]=p;break;default:F(`invalid type for setValue: ${g}`)}},t.getValue=function(u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return(v(),P)[u>>>0];case"i16":return(v(),V)[u>>>1>>>0];case"i32":return(v(),O)[u>>>2>>>0];case"i64":return(v(),J)[u>>>3>>>0];case"float":return(v(),H)[u>>>2>>>0];case"double":return(v(),Q)[u>>>3>>>0];case"*":return(v(),N)[u>>>2>>>0];default:F(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Te,t.stringToUTF8=pt,t.lengthBytesUTF8=wr;var Ss,Ts,Er,et,Qt,bi,ks,Is,Es,wi,Cs,zs,le,Yt,As,oe,$i,ue,Os,vi,Rs,Bs,Ds,xi,Ms,Ns,Ps,Us,Ls,Ws,qs,Vs,Gs,Fs,Hs,js,Ks,Xs,Zs,Qs,Ys,Js,eo,to,ro,io,no,ao,so,oo,uo,lo,po,co,ho,fo,mo,go,yo,_o,bo,wo,$o,nt,Qg=[ii,Ca,Na,qa,Va,Ga,Fa,Ha,ja,Ka,Xa,Za,Qa,Ya,Ja,es,cs,hs,fs,_s,bs,ws,$s,vs,xs],Si={1055492:(u,p,g,m,x)=>{if(t===void 0||!t.Yc)return 1;if((u=Te(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Yc.get(u)))return 2;if(p=Number(p>>>0),g=Number(g>>>0),m=Number(m>>>0),p+g>u.byteLength)return 3;try{let E=u.subarray(p,p+g);switch(x){case 0:(v(),j).set(E,m>>>0);break;case 1:t.Qd?t.Qd(m,E):t.Id(m,E);break;default:return 4}return 0}catch{return 4}},1056316:(u,p,g)=>{t.td(u,(v(),j).subarray(p>>>0,p+g>>>0))},1056380:()=>t.Sd(),1056422:u=>{t.sd(u)},1056459:()=>{t.Bd()},1056490:()=>{t.Cd()},1056519:()=>{t.Gd()},1056544:u=>t.Ad(u),1056577:u=>t.Ed(u),1056609:(u,p,g)=>{t.ed(Number(u),Number(p),Number(g),!0)},1056672:(u,p,g)=>{t.ed(Number(u),Number(p),Number(g))},1056729:()=>typeof wasmOffsetConverter<"u",1056786:u=>{t.$b("Abs",u,void 0)},1056837:u=>{t.$b("Neg",u,void 0)},1056888:u=>{t.$b("Floor",u,void 0)},1056941:u=>{t.$b("Ceil",u,void 0)},1056993:u=>{t.$b("Reciprocal",u,void 0)},1057051:u=>{t.$b("Sqrt",u,void 0)},1057103:u=>{t.$b("Exp",u,void 0)},1057154:u=>{t.$b("Erf",u,void 0)},1057205:u=>{t.$b("Sigmoid",u,void 0)},1057260:(u,p,g)=>{t.$b("HardSigmoid",u,{alpha:p,beta:g})},1057339:u=>{t.$b("HardSwish",u,void 0)},1057396:u=>{t.$b("Log",u,void 0)},1057447:u=>{t.$b("Sin",u,void 0)},1057498:u=>{t.$b("Cos",u,void 0)},1057549:u=>{t.$b("Tan",u,void 0)},1057600:u=>{t.$b("Asin",u,void 0)},1057652:u=>{t.$b("Acos",u,void 0)},1057704:u=>{t.$b("Atan",u,void 0)},1057756:u=>{t.$b("Sinh",u,void 0)},1057808:u=>{t.$b("Cosh",u,void 0)},1057860:u=>{t.$b("Asinh",u,void 0)},1057913:u=>{t.$b("Acosh",u,void 0)},1057966:u=>{t.$b("Atanh",u,void 0)},1058019:u=>{t.$b("Tanh",u,void 0)},1058071:u=>{t.$b("Not",u,void 0)},1058122:(u,p,g)=>{t.$b("Clip",u,{min:p,max:g})},1058191:u=>{t.$b("Clip",u,void 0)},1058243:(u,p)=>{t.$b("Elu",u,{alpha:p})},1058301:u=>{t.$b("Gelu",u,void 0)},1058353:u=>{t.$b("Relu",u,void 0)},1058405:(u,p)=>{t.$b("LeakyRelu",u,{alpha:p})},1058469:(u,p)=>{t.$b("ThresholdedRelu",u,{alpha:p})},1058539:(u,p)=>{t.$b("Cast",u,{to:p})},1058597:u=>{t.$b("Add",u,void 0)},1058648:u=>{t.$b("Sub",u,void 0)},1058699:u=>{t.$b("Mul",u,void 0)},1058750:u=>{t.$b("Div",u,void 0)},1058801:u=>{t.$b("Pow",u,void 0)},1058852:u=>{t.$b("Equal",u,void 0)},1058905:u=>{t.$b("Greater",u,void 0)},1058960:u=>{t.$b("GreaterOrEqual",u,void 0)},1059022:u=>{t.$b("Less",u,void 0)},1059074:u=>{t.$b("LessOrEqual",u,void 0)},1059133:(u,p,g,m,x)=>{t.$b("ReduceMean",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1059308:(u,p,g,m,x)=>{t.$b("ReduceMax",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1059482:(u,p,g,m,x)=>{t.$b("ReduceMin",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1059656:(u,p,g,m,x)=>{t.$b("ReduceProd",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1059831:(u,p,g,m,x)=>{t.$b("ReduceSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1060005:(u,p,g,m,x)=>{t.$b("ReduceL1",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1060178:(u,p,g,m,x)=>{t.$b("ReduceL2",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1060351:(u,p,g,m,x)=>{t.$b("ReduceLogSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1060528:(u,p,g,m,x)=>{t.$b("ReduceSumSquare",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1060708:(u,p,g,m,x)=>{t.$b("ReduceLogSumExp",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1060888:u=>{t.$b("Where",u,void 0)},1060941:(u,p,g)=>{t.$b("Transpose",u,{perm:p?Array.from((v(),O).subarray(Number(p)>>>0,Number(g)>>>0)):[]})},1061065:(u,p,g,m)=>{t.$b("DepthToSpace",u,{blocksize:p,mode:Te(g),format:m?"NHWC":"NCHW"})},1061198:(u,p,g,m)=>{t.$b("DepthToSpace",u,{blocksize:p,mode:Te(g),format:m?"NHWC":"NCHW"})},1061331:(u,p,g,m)=>{t.$b("DFT",u,{axis:p,inverse:g,onesided:m})},1061423:(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be,ht)=>{t.$b("ConvTranspose",u,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[g],group:m,kernelShape:[x],pads:[E,A],strides:[D],wIsConst:()=>!!(v(),P)[G>>>0],outputPadding:se?Array.from((v(),O).subarray(Number(se)>>>0,Number(pe)>>>0)):[],outputShape:ye?Array.from((v(),O).subarray(Number(ye)>>>0,Number(be)>>>0)):[],activation:Te(ht)})},1061856:(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be)=>{t.$b("ConvTranspose",u,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from((v(),O).subarray(Number(g)>>>0,(Number(g)>>>0)+2>>>0)),group:m,kernelShape:Array.from((v(),O).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((v(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((v(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(v(),P)[q>>>0],outputPadding:G?Array.from((v(),O).subarray(Number(G)>>>0,Number(se)>>>0)):[],outputShape:pe?Array.from((v(),O).subarray(Number(pe)>>>0,Number(ye)>>>0)):[],activation:Te(be)})},1062517:(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be,ht)=>{t.$b("ConvTranspose",u,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[g],group:m,kernelShape:[x],pads:[E,A],strides:[D],wIsConst:()=>!!(v(),P)[G>>>0],outputPadding:se?Array.from((v(),O).subarray(Number(se)>>>0,Number(pe)>>>0)):[],outputShape:ye?Array.from((v(),O).subarray(Number(ye)>>>0,Number(be)>>>0)):[],activation:Te(ht)})},1062950:(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be)=>{t.$b("ConvTranspose",u,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from((v(),O).subarray(Number(g)>>>0,(Number(g)>>>0)+2>>>0)),group:m,kernelShape:Array.from((v(),O).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((v(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((v(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(v(),P)[q>>>0],outputPadding:G?Array.from((v(),O).subarray(Number(G)>>>0,Number(se)>>>0)):[],outputShape:pe?Array.from((v(),O).subarray(Number(pe)>>>0,Number(ye)>>>0)):[],activation:Te(be)})},1063611:(u,p)=>{t.$b("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},1063702:(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be)=>{t.$b("AveragePool",u,{format:be?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:E?Array.from((v(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((v(),O).subarray(Number(D)>>>0,Number(q)>>>0)):[],pads:G?Array.from((v(),O).subarray(Number(G)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),O).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1064181:(u,p)=>{t.$b("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},1064272:(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be)=>{t.$b("AveragePool",u,{format:be?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:E?Array.from((v(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((v(),O).subarray(Number(D)>>>0,Number(q)>>>0)):[],pads:G?Array.from((v(),O).subarray(Number(G)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),O).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1064751:(u,p)=>{t.$b("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},1064838:(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be)=>{t.$b("MaxPool",u,{format:be?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:E?Array.from((v(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((v(),O).subarray(Number(D)>>>0,Number(q)>>>0)):[],pads:G?Array.from((v(),O).subarray(Number(G)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),O).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1065313:(u,p)=>{t.$b("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},1065400:(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be)=>{t.$b("MaxPool",u,{format:be?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:E?Array.from((v(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((v(),O).subarray(Number(D)>>>0,Number(q)>>>0)):[],pads:G?Array.from((v(),O).subarray(Number(G)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),O).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1065875:(u,p,g,m,x)=>{t.$b("Gemm",u,{alpha:p,beta:g,transA:m,transB:x})},1065979:u=>{t.$b("MatMul",u,void 0)},1066033:(u,p,g,m)=>{t.$b("ArgMax",u,{keepDims:!!p,selectLastIndex:!!g,axis:m})},1066141:(u,p,g,m)=>{t.$b("ArgMin",u,{keepDims:!!p,selectLastIndex:!!g,axis:m})},1066249:(u,p)=>{t.$b("Softmax",u,{axis:p})},1066312:(u,p)=>{t.$b("Concat",u,{axis:p})},1066372:(u,p,g,m,x)=>{t.$b("Split",u,{axis:p,numOutputs:g,splitSizes:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1066528:u=>{t.$b("Expand",u,void 0)},1066582:(u,p)=>{t.$b("Gather",u,{axis:Number(p)})},1066653:(u,p)=>{t.$b("GatherElements",u,{axis:Number(p)})},1066732:(u,p)=>{t.$b("GatherND",u,{batch_dims:Number(p)})},1066811:(u,p,g,m,x,E,A,D,q,G,se)=>{t.$b("Resize",u,{antialias:p,axes:g?Array.from((v(),O).subarray(Number(g)>>>0,Number(m)>>>0)):[],coordinateTransformMode:Te(x),cubicCoeffA:E,excludeOutside:A,extrapolationValue:D,keepAspectRatioPolicy:Te(q),mode:Te(G),nearestMode:Te(se)})},1067173:(u,p,g,m,x,E,A)=>{t.$b("Slice",u,{starts:p?Array.from((v(),O).subarray(Number(p)>>>0,Number(g)>>>0)):[],ends:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[],axes:E?Array.from((v(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[]})},1067437:u=>{t.$b("Tile",u,void 0)},1067489:(u,p,g)=>{t.$b("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},1067603:(u,p,g)=>{t.$b("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},1067717:u=>{t.$b("Range",u,void 0)},1067770:(u,p)=>{t.$b("Einsum",u,{equation:Te(p)})},1067851:(u,p,g,m,x)=>{t.$b("Pad",u,{mode:p,value:g,pads:m?Array.from((v(),O).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},1067994:(u,p,g,m,x,E)=>{t.$b("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!m,format:E?"NHWC":"NCHW"})},1068163:(u,p,g,m,x,E)=>{t.$b("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!m,format:E?"NHWC":"NCHW"})},1068332:(u,p,g)=>{t.$b("CumSum",u,{exclusive:Number(p),reverse:Number(g)})},1068429:(u,p,g)=>{t.$b("DequantizeLinear",u,{axis:p,blockSize:g})},1068519:(u,p,g,m,x)=>{t.$b("GridSample",u,{align_corners:p,mode:Te(g),padding_mode:Te(m),format:x?"NHWC":"NCHW"})},1068689:(u,p,g,m,x)=>{t.$b("GridSample",u,{align_corners:p,mode:Te(g),padding_mode:Te(m),format:x?"NHWC":"NCHW"})},1068859:(u,p)=>{t.$b("ScatterND",u,{reduction:Te(p)})},1068944:(u,p,g,m,x,E,A,D,q)=>{t.$b("Attention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:m,scale:x,doRotary:E,qkvHiddenSizes:A?Array.from((v(),O).subarray(Number(D)>>>0,Number(D)+A>>>0)):[],pastPresentShareBuffer:!!q})},1069216:u=>{t.$b("BiasAdd",u,void 0)},1069271:u=>{t.$b("BiasSplitGelu",u,void 0)},1069332:u=>{t.$b("FastGelu",u,void 0)},1069388:(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be,ht,Ti)=>{t.$b("Conv",u,{format:pe?"NHWC":"NCHW",auto_pad:p,dilations:g?Array.from((v(),O).subarray(Number(g)>>>0,Number(m)>>>0)):[],group:x,kernel_shape:E?Array.from((v(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:D?Array.from((v(),O).subarray(Number(D)>>>0,Number(q)>>>0)):[],strides:G?Array.from((v(),O).subarray(Number(G)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!(v(),P)[Number(ye)>>>0],activation:Te(be),activation_params:ht?Array.from((v(),H).subarray(Number(ht)>>>0,Number(Ti)>>>0)):[]})},1069972:u=>{t.$b("Gelu",u,void 0)},1070024:(u,p,g,m,x,E,A,D,q)=>{t.$b("GroupQueryAttention",u,{numHeads:p,kvNumHeads:g,scale:m,softcap:x,doRotary:E,rotaryInterleaved:A,smoothSoftmax:D,localWindowSize:q})},1070241:(u,p,g,m)=>{t.$b("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!m})},1070352:(u,p,g,m)=>{t.$b("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!m})},1070463:(u,p,g,m,x,E)=>{t.$b("MatMulNBits",u,{k:p,n:g,accuracyLevel:m,bits:x,blockSize:E})},1070590:(u,p,g,m,x,E)=>{t.$b("MultiHeadAttention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:m,scale:x,doRotary:E})},1070749:(u,p)=>{t.$b("QuickGelu",u,{alpha:p})},1070813:(u,p,g,m,x)=>{t.$b("RotaryEmbedding",u,{interleaved:!!p,numHeads:g,rotaryEmbeddingDim:m,scale:x})},1070952:(u,p,g)=>{t.$b("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},1071054:(u,p,g)=>{t.$b("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},1071156:(u,p,g,m)=>{t.$b("GatherBlockQuantized",u,{gatherAxis:p,quantizeAxis:g,blockSize:m})},1071277:u=>{t.Fd(u)},1071311:(u,p)=>t.Hd(Number(u),Number(p),t.Xc.Kd,t.Xc.errors)};function Yg(u,p,g){return os(async()=>{await t.Dd(Number(u),Number(p),Number(g))})}function Jg(){return typeof wasmOffsetConverter<"u"}function e0(u,p,g,m){var x=ue();try{return Vs(u,p,g,m)}catch(E){if(oe(x),E!==E+0)throw E;le(1,0)}}function t0(u,p,g){var m=ue();try{return Us(u,p,g)}catch(x){if(oe(m),x!==x+0)throw x;le(1,0)}}function r0(u){var p=ue();try{Ms(u)}catch(g){if(oe(p),g!==g+0)throw g;le(1,0)}}function i0(u,p){var g=ue();try{return xi(u,p)}catch(m){if(oe(g),m!==m+0)throw m;le(1,0)}}function n0(u,p,g){var m=ue();try{Ds(u,p,g)}catch(x){if(oe(m),x!==x+0)throw x;le(1,0)}}function a0(u,p){var g=ue();try{Gs(u,p)}catch(m){if(oe(g),m!==m+0)throw m;le(1,0)}}function s0(u,p,g,m,x,E,A){var D=ue();try{return Ws(u,p,g,m,x,E,A)}catch(q){if(oe(D),q!==q+0)throw q;le(1,0)}}function o0(u,p,g,m,x,E){var A=ue();try{Ns(u,p,g,m,x,E)}catch(D){if(oe(A),D!==D+0)throw D;le(1,0)}}function u0(u,p,g,m){var x=ue();try{qs(u,p,g,m)}catch(E){if(oe(x),E!==E+0)throw E;le(1,0)}}function l0(u,p,g,m,x){var E=ue();try{Ps(u,p,g,m,x)}catch(A){if(oe(E),A!==A+0)throw A;le(1,0)}}function d0(u,p,g,m,x,E,A){var D=ue();try{Hs(u,p,g,m,x,E,A)}catch(q){if(oe(D),q!==q+0)throw q;le(1,0)}}function p0(u,p,g,m,x,E,A){var D=ue();try{js(u,p,g,m,x,E,A)}catch(q){if(oe(D),q!==q+0)throw q;le(1,0)}}function c0(u,p,g,m,x,E,A,D){var q=ue();try{Qs(u,p,g,m,x,E,A,D)}catch(G){if(oe(q),G!==G+0)throw G;le(1,0)}}function h0(u,p,g,m,x){var E=ue();try{return Fs(u,p,g,m,x)}catch(A){if(oe(E),A!==A+0)throw A;le(1,0)}}function f0(u,p,g){var m=ue();try{return Ys(u,p,g)}catch(x){if(oe(m),x!==x+0)throw x;le(1,0)}}function m0(u,p,g,m,x,E,A,D){var q=ue();try{Js(u,p,g,m,x,E,A,D)}catch(G){if(oe(q),G!==G+0)throw G;le(1,0)}}function g0(u,p,g,m,x,E,A,D,q,G,se,pe){var ye=ue();try{Ks(u,p,g,m,x,E,A,D,q,G,se,pe)}catch(be){if(oe(ye),be!==be+0)throw be;le(1,0)}}function y0(u,p,g){var m=ue();try{return eo(u,p,g)}catch(x){if(oe(m),x!==x+0)throw x;return le(1,0),0n}}function _0(u,p,g,m,x,E,A,D,q){var G=ue();try{Ls(u,p,g,m,x,E,A,D,q)}catch(se){if(oe(G),se!==se+0)throw se;le(1,0)}}function b0(u){var p=ue();try{return to(u)}catch(g){if(oe(p),g!==g+0)throw g;le(1,0)}}function w0(u,p){var g=ue();try{return yo(u,p)}catch(m){if(oe(g),m!==m+0)throw m;return le(1,0),0n}}function $0(u){var p=ue();try{return ro(u)}catch(g){if(oe(p),g!==g+0)throw g;return le(1,0),0n}}function v0(u,p,g,m){var x=ue();try{return uo(u,p,g,m)}catch(E){if(oe(x),E!==E+0)throw E;le(1,0)}}function x0(u,p,g,m,x){var E=ue();try{return lo(u,p,g,m,x)}catch(A){if(oe(E),A!==A+0)throw A;le(1,0)}}function S0(u,p,g,m,x,E){var A=ue();try{return po(u,p,g,m,x,E)}catch(D){if(oe(A),D!==D+0)throw D;le(1,0)}}function T0(u,p,g,m,x,E){var A=ue();try{return Xs(u,p,g,m,x,E)}catch(D){if(oe(A),D!==D+0)throw D;le(1,0)}}function k0(u,p,g,m,x,E){var A=ue();try{return co(u,p,g,m,x,E)}catch(D){if(oe(A),D!==D+0)throw D;le(1,0)}}function I0(u,p,g,m,x,E,A,D){var q=ue();try{return Zs(u,p,g,m,x,E,A,D)}catch(G){if(oe(q),G!==G+0)throw G;le(1,0)}}function E0(u,p,g,m,x){var E=ue();try{return ho(u,p,g,m,x)}catch(A){if(oe(E),A!==A+0)throw A;return le(1,0),0n}}function C0(u,p,g,m){var x=ue();try{return fo(u,p,g,m)}catch(E){if(oe(x),E!==E+0)throw E;le(1,0)}}function z0(u,p,g,m){var x=ue();try{return mo(u,p,g,m)}catch(E){if(oe(x),E!==E+0)throw E;le(1,0)}}function A0(u,p,g,m,x,E,A,D,q,G,se,pe){var ye=ue();try{return go(u,p,g,m,x,E,A,D,q,G,se,pe)}catch(be){if(oe(ye),be!==be+0)throw be;le(1,0)}}function O0(u,p,g,m,x,E,A,D,q,G,se){var pe=ue();try{so(u,p,g,m,x,E,A,D,q,G,se)}catch(ye){if(oe(pe),ye!==ye+0)throw ye;le(1,0)}}function R0(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be,ht,Ti){var N0=ue();try{oo(u,p,g,m,x,E,A,D,q,G,se,pe,ye,be,ht,Ti)}catch(ki){if(oe(N0),ki!==ki+0)throw ki;le(1,0)}}function B0(u,p,g){var m=ue();try{return io(u,p,g)}catch(x){if(oe(m),x!==x+0)throw x;le(1,0)}}function D0(u,p,g){var m=ue();try{return no(u,p,g)}catch(x){if(oe(m),x!==x+0)throw x;le(1,0)}}function M0(u,p,g,m){var x=ue();try{ao(u,p,g,m)}catch(E){if(oe(x),E!==E+0)throw E;le(1,0)}}function Cr(){if(0<we)Re=Cr;else if(n)w?.(t),Y();else{for(var u=me;0<u.length;)u.shift()(t);0<we?Re=Cr:(t.calledRun=!0,C||(Y(),w?.(t)))}}return n||(nt=await Ae(),Cr()),t.PTR_SIZE=4,U?t:new Promise((u,p)=>{w=u,S=p})}var Vp,ko,sy=W(()=>{"use strict";Vp=To,ko=globalThis.self?.name?.startsWith("em-pthread"),ko&&To()}),Oi,zn,Io,De,Gp,Ar,Eo,Co,Ri,zo,Bi,Fp,Di,Hp,Yn=W(()=>{"use strict";Qn(),Oi=typeof location>"u"?void 0:location.origin,zn=import.meta.url>"file:"&&import.meta.url<"file;",Io=()=>{if(zn){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Oi).href}return import.meta.url},De=Io(),Gp=()=>{if(De&&!De.startsWith("blob:"))return De.substring(0,De.lastIndexOf("/")+1)},Ar=(e,t)=>{try{let r=t??De;return(r?new URL(e,r):new URL(e)).origin===Oi}catch{return!1}},Eo=(e,t)=>{let r=t??De;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Co=(e,t)=>`${t??"./"}${e}`,Ri=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},zo=async e=>(await import(e)).default,Bi=(ay(),fr(Lp)).default,Fp=async()=>{if(!De)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ar(De))return[void 0,Bi()];let e=await Ri(De);return[e,Bi(e)]},Di=(sy(),fr(qp)).default,Hp=async(e,t,r,i)=>{let n=Di&&!(e||t);if(n)if(De)n=Ar(De)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,Di];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Eo(a,t),o=r&&s&&!Ar(s,t),l=o?await Ri(s):s??Co(a,t);return[o?l:void 0,await zo(l)]}}}),Mi,Or,er,Ni,Ao,Oo,Ro,Jn,_e,Pt=W(()=>{"use strict";Yn(),Or=!1,er=!1,Ni=!1,Ao=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Oo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ro=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Jn=async e=>{if(Or)return Promise.resolve();if(er)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ni)throw new Error("previous call to 'initializeWebAssembly()' failed.");er=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ro())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Oo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Ao();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n?.mjs,o=s?.href??s,l=n?.wasm,d=l?.href??l,h=e.wasmBinary,[c,f]=await Hp(o,a,r>1,!!h||!!d),_=!1,y=[];if(t>0&&y.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),y.push(new Promise((w,S)=>{let $={numThreads:r};if(h)$.wasmBinary=h,$.locateFile=b=>b;else if(d||a)$.locateFile=b=>d??a+b;else if(o&&o.indexOf("blob:")!==0)$.locateFile=b=>new URL(b,o).href;else if(c){let b=Gp();b&&($.locateFile=T=>b+T)}f($).then(b=>{er=!1,Or=!0,Mi=b,w(),c&&URL.revokeObjectURL(c)},b=>{er=!1,Ni=!0,S(b)})})),await Promise.race(y),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},_e=()=>{if(Or&&Mi)return Mi;throw new Error("WebAssembly is not initialized yet.")}}),Ke,jr,fe,ea=W(()=>{"use strict";Pt(),Ke=(e,t)=>{let r=_e(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},jr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")jr(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},fe=e=>{let t=_e(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),jp,oy=W(()=>{"use strict";Pt(),ea(),jp=e=>{let t=_e(),r=0,i=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Ke(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&fe("Can't create run options."),e?.extra!==void 0&&jr(e.extra,"",new WeakSet,(s,o)=>{let l=Ke(s,i),d=Ke(o,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&fe(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),Bo,Do,Mo,kt,No,Kp,uy=W(()=>{"use strict";Pt(),ea(),Bo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Do=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Mo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},kt=(e,t,r,i)=>{let n=Ke(t,i),a=Ke(r,i);_e()._OrtAddSessionConfigEntry(e,n,a)!==0&&fe(`Can't set a session config entry: ${t} - ${r}.`)},No=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",kt(e,"session.disable_quant_qdq","1",r),kt(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let c=n?.deviceType;c&&kt(e,"deviceType",c,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let c=n;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);kt(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=Ke(a,r),l=s.length,d=0,h=0;if(l>0){d=_e()._malloc(l*_e().PTR_SIZE),r.push(d),h=_e()._malloc(l*_e().PTR_SIZE),r.push(h);for(let c=0;c<l;c++)_e().setValue(d+c*_e().PTR_SIZE,s[c][0],"*"),_e().setValue(h+c*_e().PTR_SIZE,s[c][1],"*")}await _e()._OrtAppendExecutionProvider(e,o,d,h,l)!==0&&fe(`Can't append execution provider: ${a}.`)}},Kp=async e=>{let t=_e(),r=0,i=[],n=e||{};Mo(n);try{let a=Bo(n.graphOptimizationLevel??"all"),s=Do(n.executionMode??"sequential"),o=typeof n.logId=="string"?Ke(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let h=typeof n.optimizedModelFilePath=="string"?Ke(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,l,d,h),r===0&&fe("Can't create session options."),n.executionProviders&&await No(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);kt(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[c,f]of Object.entries(n.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let _=Ke(c,i);t._OrtAddFreeDimensionOverride(r,_,f)!==0&&fe(`Can't set a free dimension override: ${c} - ${f}.`)}return n.extra!==void 0&&jr(n.extra,"",new WeakSet,(c,f)=>{kt(r,c,f,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&fe("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),Ot,ot,Rt,ri,Kr,ta,ra,An,re=W(()=>{"use strict";Ot=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ot=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Rt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},ri=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Kr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ta=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ra=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",An=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ia,Xp=W(()=>{"use strict";Qn(),ia=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await n.read();if(o)break;let d=l.byteLength;new Uint8Array(a,s,d).set(l),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Po,Uo,Lo,Wo,na,qo,de,ut=W(()=>{"use strict";re(),Po=["V","I","W","E","F"],Uo=(e,t)=>{console.log(`[${Po[e]},${new Date().toISOString()}]${t}`)},na=(e,t)=>{Lo=e,Wo=t},qo=(e,t)=>{let r=Kr(e),i=Kr(Lo);r>=i&&Uo(r,typeof t=="function"?t():t)},de=(...e)=>{Wo&&qo(...e)}}),Vo,Ht,R,Xr,Zp,Qp,Yp,ie=W(()=>{"use strict";Vo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ht=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let o=Vo.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let l=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(l!==d&&l>1&&d>1)return;let h=Math.max(l,d);if(l&&d)s[a-o]=Math.max(l,d);else{if(h>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},R=class Fr{static size(t){return Fr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Fr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Fr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Xr=class _t{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)_t.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],n[l],a,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,a,s,o,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return _t.computeShapeHelper(t,r,d,i,n,a,s,o,l),d}static computeConvOutputShape(t,r,i,n,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return _t.computeShapeHelper(!1,t,l,i,n,a,s,o),l}static computeShapeHelper(t,r,i,n,a,s,o,l,d=0){if(t)for(let h=0;h<r.length-2;h++)i.push(1);else for(let h=0;h<r.length-2;h++)i.push(_t.adjustPadAndReturnShape(r[h+2],n[h],a[h],s[h],o,h,h+r.length-2,l,d))}static computeOutputSize(t,r,i,n,a){let s=Math.floor(t/r)+1;return a===1&&(s=Math.ceil(t/r)+1,(s-1)*r>=i+n&&(s-=1)),s}static adjustPadAndReturnShape(t,r,i,n,a,s,o,l,d=0){let h=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[o]=0,_t.computeOutputSize(t-h,r,t,0,d);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=(Math.floor((t+r-1)/r)-1)*r+n-t;return a[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),a[o]=c-a[s],_t.computeOutputSize(t+a[s]+a[o]-h,r,t,a[s],d)}default:throw new Error("Unsupported AutoPad type")}else return _t.computeOutputSize(t+a[s]+a[o]-h,r,t,a[s],d)}},Zp=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Ht.isValidBroadcast(n,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Qp=-34028234663852886e22,Yp=34028234663852886e22}),aa,Jp=W(()=>{"use strict";re(),aa=(e,t)=>new(ri(t))(e)}),Pi,Go,Ui,Fo,Li,Ho,Wi,qi,Vi,jo,ec,ly=W(()=>{"use strict";re(),ut(),Pi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Go=(e,t)=>{if(t==="int32")return e;let r=Pi.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(ri(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let l=a[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ui=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Fo=1,Li=()=>Fo++,Ho=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Wi=(e,t)=>{let r=Pi.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},qi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Wi(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Ui(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Vi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!a?.input.dataTypes.includes(t)){if(s=Ho.get(t),!s||a?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Wi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Go(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Ui(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},jo=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Li();return this.tensorTrackersById.set(e,new Vi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=Li(),s=new qi({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new Vi(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let o=this.getMLContext(e);for(let[d,h]of this.freeTensors.entries())if(h.canReuseTensor(o,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let c=this.freeTensors.splice(d,1)[0];return c.sessionId=e,c}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new qi({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},ec=(...e)=>new jo(...e)}),tr,Ko,tc,dy=W(()=>{"use strict";re(),Pt(),Jp(),ly(),ut(),tr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ko=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},tc=class{constructor(e){this.tensorManager=ec(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,na(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Ko(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=tr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=tr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!_e().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return aa(r,t)}}registerMLTensor(e,t,r,i){let n=tr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=tr.get(Ot(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!n?.input.dataTypes.includes(i):!!n?.output.dataTypes.includes(i)}flush(){}}}),sa=W(()=>{"use strict"}),Gi,Rr,Br,Xo,Zo,Fi,On,Qo,rc,py=W(()=>{"use strict";ut(),sa(),Gi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Rr=[],Br=e=>Math.ceil(Number(e)/16)*16,Xo=e=>{for(let t=0;t<Rr.length;t++){let r=Rr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Zo=1,Fi=()=>Zo++,On=async(e,t,r,i)=>{let n=Br(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},Qo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Gi)Rr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=Br(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);if(a===n&&i%4===0)this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,r,i,n);else{let o=new Uint8Array(a);o.set(t),this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,o,0,a)}de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Br(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Fi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Xo(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Fi(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await On(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Gi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},rc=(...e)=>new Qo(...e)}),Yo,he,Se=W(()=>{"use strict";Yo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new Yo(e)}),jt,Dr,Ee,Ie,Z,xe,Rn,Gt,$t,X,rr,B,K,ic,oa,Jo,nc,ne=W(()=>{"use strict";re(),ie(),jt=64,Dr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ee=(e,t=1)=>{let r=Dr(e,t);return typeof r=="string"?r:r[0]},Ie=(e,t=1)=>{let r=Dr(e,t);return typeof r=="string"?r:r[1]},Z=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},xe=e=>e%4===0?4:e%2===0?2:1,Rn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Gt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,$t=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,X=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,rr=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Dr(t,n),h=typeof d=="string"?d:d[1],c=typeof d=="string"?d:d[0],f={indices:l,value:h,storage:c,tensor:t},_=U=>typeof U=="string"?U:`${U}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=a?"uniforms.":"",S=`${w}${e}_shape`,$=`${w}${e}_strides`,b="";for(let U=0;U<s-1;U++)b+=`
    let dim${U} = current / ${X($,U,s)};
    let rest${U} = current % ${X($,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;b+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${b}
    return indices;
  }`,k=U=>(y.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),I=[];if(s>=2)for(let U=s-1;U>=0;U--)I.push(`${X($,U,s)} * (indices[${U}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${I.join("+")};
  }`,z=U=>(y.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),v=(...U)=>s===0?"0u":`${f.indices}(${U.map(_).join(",")})`,M=(U,ee)=>s<2?`${U}`:`${X(U,ee,s)}`,P=(U,ee,Y)=>s<2?`${U}=${Y};`:`${X(U,ee,s)}=${Y};`,j={},V=(U,ee)=>{y.broadcastedIndicesToOffset=!0;let Y=`${ee.name}broadcastedIndicesTo${e}Offset`;if(Y in j)return`${Y}(${U})`;let F=[];for(let ke=s-1;ke>=0;ke--){let Ae=ee.indicesGet("outputIndices",ke+ee.rank-s);F.push(`${M($,ke)} * (${Ae} % ${M(S,ke)})`)}return j[Y]=`fn ${Y}(outputIndices: ${ee.type.indices}) -> u32 {
             return ${F.length>0?F.join("+"):"0u"};
           }`,`${Y}(${U})`},L=(U,ee)=>(()=>{if(f.storage===f.value)return`${e}[${U}]=${ee};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${ee}), select(0u, 0xFFFFFFFFu, ${ee} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${ee}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${ee}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),O=U=>(()=>{if(f.storage===f.value)return`${e}[${U}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${U}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${U}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),N=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${h} {
    return ${O(`i2o_${e}(indices)`)};
  }`,H=s<2?"":(()=>{let U=o.map(Y=>`d${Y}: u32`).join(", "),ee=o.map(Y=>`d${Y}`).join(", ");return`
  fn get_${e}(${U}) -> ${h} {
    return get_${e}ByIndices(${v(ee)});
  }`})(),Q=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let ee=U.map(_).join(",");return s===0?O("0u"):s===1?O(ee[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${ee})`)},J=U=>s<2?O(U):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${U})`),te=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${h}) {
    ${L(`i2o_${e}(indices)`,"value")}
  }`,ae=s<2?"":(()=>{let U=o.map(Y=>`d${Y}: u32`).join(", "),ee=o.map(Y=>`d${Y}`).join(", ");return`
  fn set_${e}(${U}, value: ${h}) {
    set_${e}ByIndices(${v(ee)}, value);
  }`})();return{impl:()=>{let U=[],ee=!1;return y.offsetToIndices&&(U.push(T),ee=!0),y.indicesToOffset&&(U.push(C),ee=!0),y.broadcastedIndicesToOffset&&(Object.values(j).forEach(Y=>U.push(Y)),ee=!0),y.set&&(U.push(ae),ee=!0),y.setByIndices&&(U.push(te),ee=!0),y.get&&(U.push(H),ee=!0),y.getByIndices&&(U.push(N),ee=!0),!a&&ee&&U.unshift(`const ${S} = ${f.indices}(${r.join(",")});`,`const ${$} = ${f.indices}(${R.computeStrides(r).join(",")});`),U.join(`
`)},type:f,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:V,indices:v,indicesGet:M,indicesSet:P,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let ee=U[s];if(typeof ee!="string")throw new Error("value must be string");let Y=U.slice(0,s).map(_).join(",");return s===0?L("0u",ee):s===1?L(Y[0],ee):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${Y}, ${ee})`)},setByOffset:L,setByIndices:(U,ee)=>s<2?L(U,ee):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${ee});`),get:Q,getByOffset:O,getByIndices:J,usage:i,name:e,strides:$,shape:S,rank:s}},B=(e,t,r,i=1)=>rr(e,t,r,"input",i),K=(e,t,r,i=1)=>rr(e,t,r,"output",i),ic=(e,t,r)=>rr(e,t,r,"atomicOutput",1),oa=(e,t,r,i=1)=>rr(e,t,r,"internal",i),Jo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=jt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},nc=(e,t)=>new Jo(e,t)}),eu,Hi,tu,ru,iu,nu,Ne,ac,sc,vt=W(()=>{"use strict";re(),ie(),Se(),ne(),eu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Hi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),tu=(e,t)=>R.sortBasedOnPerm(e,Hi(e.length,t)),ru=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},iu=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},nu=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ne=(e,t)=>{let r=e.dataType,i=e.dims.length,n=Hi(i,t),a=tu(e.dims,n),s=e.dims,o=a,l=i<2||nu(n,e.dims),d;if(l)return d=y=>{let w=B("input",r,s,4),S=K("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,S)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:h,newPerm:c}=iu(e.dims,n),f=R.areEqual(c,[2,3,1]),_=R.areEqual(c,[3,1,2]);if(h.length===2||f||_){s=f?[h[0],h[1]*h[2]]:_?[h[0]*h[1],h[2]]:h,o=[s[1],s[0]];let y=16;return d=w=>{let S=B("a",r,s.length),$=K("output",r,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${y+1}>, ${y}>;
  ${w.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:w},...Z(s,o)]}},getShaderSource:d}}return d=y=>{let w=B("a",r,s.length),S=K("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,S)}

  ${ru(n,i,w,S)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Z(s,o)]}},getShaderSource:d}},ac=(e,t)=>{eu(e.inputs,t.perm),e.compute(Ne(e.inputs[0],t.perm))},sc=e=>he({perm:e.perm})}),au,su,ou,uu,lu,du,pu,cu,hu,fu,Ve,oc,uc,lc,dc,pc,cc,hc,fc,mc,gc,cy=W(()=>{"use strict";re(),ie(),ne(),ua(),vt(),au={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},su={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},ou={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},uu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},lu=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},du=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},pu=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},cu=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},hu=(e,t)=>{let r=[];if(!cu(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},fu=(e,t,r,i,n,a,s)=>{let o=r[0].dims,l=R.size(a),d=R.size(s),h=B("_A",r[0].dataType,o),c=K("output",n,a),f=64;l===1&&(f=256);let _=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,y=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(h,c)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${ou[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${au[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${su[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${i==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${uu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Ve=(e,t,r,i)=>{let n=e.inputs.length===1?r:Bn(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((_,y)=>y));let s=R.normalizeAxes(a,e.inputs[0].dims.length),o=s,l=e.inputs[0],d=hu(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ne(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=lu(o.length,l.dims.length));let[h,c]=du(l.dims,o),f=h;n.keepDims&&(f=pu(h,s)),e.compute(fu(t,n.cacheKey,[l],i,e.inputs[0].dataType,f,c),{inputs:[l]})},oc=(e,t)=>{Ve(e,"ReduceMeanShared",t,"mean")},uc=(e,t)=>{Ve(e,"ReduceL1Shared",t,"l1")},lc=(e,t)=>{Ve(e,"ReduceL2Shared",t,"l2")},dc=(e,t)=>{Ve(e,"ReduceLogSumExpShared",t,"logSumExp")},pc=(e,t)=>{Ve(e,"ReduceMaxShared",t,"max")},cc=(e,t)=>{Ve(e,"ReduceMinShared",t,"min")},hc=(e,t)=>{Ve(e,"ReduceProdShared",t,"prod")},fc=(e,t)=>{Ve(e,"ReduceSumShared",t,"sum")},mc=(e,t)=>{Ve(e,"ReduceSumSquareShared",t,"sumSquare")},gc=(e,t)=>{Ve(e,"ReduceLogSumShared",t,"logSum")}}),Ge,mu,Zr,Bn,Fe,gu,yu,_u,bu,wu,$u,vu,xu,Su,Tu,He,yc,_c,bc,wc,$c,vc,xc,Sc,Tc,kc,ua=W(()=>{"use strict";re(),ie(),Se(),ne(),cy(),Ge=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},mu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Zr=(e,t,r,i,n,a,s=!1,o=!1)=>{let l=[],d=r[0].dims,h=d.length,c=R.normalizeAxes(n,h),f=!o&&c.length===0;d.forEach((w,S)=>{f||c.indexOf(S)>=0?s&&l.push(1):l.push(w)});let _=l.length,y=R.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],$=B("_A",r[0].dataType,h),b=K("output",a,_),T=i($,b,c),k=T[2];for(let I=0,C=0;I<h;I++)f||c.indexOf(I)>=0?(s&&C++,k=`for(var j${I}: u32 = 0; j${I} < ${d[I]}; j${I}++) {
                  ${T[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${$.indicesSet("input_indices",I,`j${I}`)}
                  ${k}
                }`):(S.push(`${$.indicesSet("input_indices",I,b.indicesGet("output_indices",C))};`),C++);return`

        ${w.registerUniform("output_size","u32").declareVariables($,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${k}
          ${T[3]}
          ${T.length===4?b.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Z(d,l)]})}},Bn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Fe=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:Bn(n,r);e.compute(Zr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?mu:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},gu=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},yu=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},_u=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},bu=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},wu=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},$u=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},vu=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},xu=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Su=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Tu=(e,t)=>{Ge(e.inputs),Fe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},He=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},yc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$u(e,t):oc(e,t)},_c=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yu(e,t):uc(e,t)},bc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_u(e,t):lc(e,t)},wc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bu(e,t):dc(e,t)},$c=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wu(e,t):pc(e,t)},vc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vu(e,t):cc(e,t)},xc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xu(e,t):hc(e,t)},Sc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Su(e,t):fc(e,t)},Tc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tu(e,t):mc(e,t)},kc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gu(e,t):gc(e,t)}}),ji,Ic,Ec,Dn,hy=W(()=>{"use strict";re(),Se(),ua(),ji=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Ic=(e,t)=>{ji(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Zr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ec=(e,t)=>{ji(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Zr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Dn=e=>he(e)}),ku,Mr,Iu,Eu,Cu,gr,zu,Cc,la=W(()=>{"use strict";re(),ie(),sa(),ne(),ku=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],h=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=n.dims[0]/3,f=c,_=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let y=d;if(c!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==c+f+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(f!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let S=y+w,$=-1,b=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:S,maxSequenceLength:$,inputHiddenSize:h,hiddenSize:c,vHiddenSize:_,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Mr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Iu=(e,t,r,i,n,a,s,o)=>{let l=xe(s?1:a),d=64,h=a/l;h<d&&(d=32);let c=Math.ceil(a/l/d),f=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:h},{type:12,data:c}],_=Ee(e.dataType,l),y=Ie(1,l),w=["type"];s&&w.push("type"),o&&w.push("type");let S=$=>{let b=K("x",e.dataType,e.dims,l),T=[b],k=s?B("seq_lens",s.dataType,s.dims):void 0;k&&T.push(k);let I=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;I&&T.push(I);let C=Ie(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(z).declareVariables(...T)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Mr(k,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${l}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:f})}},Eu=(e,t,r,i,n,a,s,o,l)=>{let d=s+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,d],c=e>1&&i,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=c?[a.batchSize,f,d,a.headSize]:void 0,y=a.nReps?a.nReps:1,w=a.scale===0?1/Math.sqrt(a.headSize):a.scale,S=xe(a.headSize),$=a.headSize/S,b=12,T={x:Math.ceil(d/b),y:Math.ceil(a.sequenceLength/b),z:a.batchSize*a.numHeads},k=[{type:12,data:a.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:y}],I=c&&i&&R.size(i.dims)>0,C=["type","type"];I&&C.push("type"),n&&C.push("type"),o&&C.push("type"),l&&C.push("type");let z=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&z.push({dims:_,dataType:t.dataType,gpuDataType:0});let v=M=>{let P=B("q",t.dataType,t.dims,S),j=B("key",r.dataType,r.dims,S),V=[P,j];if(I){let te=B("past_key",i.dataType,i.dims,S);V.push(te)}n&&V.push(B("attention_bias",n.dataType,n.dims));let L=o?B("seq_lens",o.dataType,o.dims):void 0;L&&V.push(L);let O=l?B("total_sequence_length_input",l.dataType,l.dims):void 0;O&&V.push(O);let N=K("output",t.dataType,h),H=[N];c&&H.push(K("present_key",t.dataType,_,S));let Q=Ie(1,S),J=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${P.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${P.type.storage}, ${b*b}>;
  ${M.registerUniforms(J).declareVariables(...V,...H)}
  ${M.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Mr(L,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${N.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:z,dispatchGroup:T,programUniforms:k}),getShaderSource:v}},Cu=(e,t,r,i,n,a,s=void 0,o=void 0)=>{let l=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,h=n.vHiddenSize*d,c=e>1&&i,f=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=c?[n.batchSize,f,l,n.headSize]:void 0,y=[n.batchSize,n.sequenceLength,h],w=12,S={x:Math.ceil(n.vHeadSize/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},$=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],b=c&&i&&R.size(i.dims)>0,T=["type","type"];b&&T.push("type"),s&&T.push("type"),o&&T.push("type");let k=[{dims:y,dataType:t.dataType,gpuDataType:0}];c&&k.push({dims:_,dataType:t.dataType,gpuDataType:0});let I=C=>{let z=B("probs",t.dataType,t.dims),v=B("v",r.dataType,r.dims),M=[z,v];b&&M.push(B("past_value",i.dataType,i.dims));let P=s?B("seq_lens",s.dataType,s.dims):void 0;s&&M.push(P);let j=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;o&&M.push(j);let V=[K("output",t.dataType,y)];c&&V.push(K("present_value",t.dataType,_));let L=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${z.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${z.type.value}, ${w*w}>;
  ${C.registerUniforms(L).declareVariables(...M,...V)}
  ${C.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Mr(P,j,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:$}),getShaderSource:I}},gr=(e,t,r,i,n,a,s,o,l,d,h=void 0,c=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),_=f>1?s:void 0,y=f>1?o:void 0,w=f>1?d.pastSequenceLength:0,S=w+d.kvSequenceLength,$=l&&R.size(l.dims)>0?l:void 0,b=[t,r];_&&R.size(_.dims)>0&&b.push(_),$&&b.push($),h&&b.push(h),c&&b.push(c);let T=e.compute(Eu(f,t,r,_,$,d,w,h,c),{inputs:b,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Iu(T,d.batchSize,d.numHeads,w,d.sequenceLength,S,h,c),{inputs:h&&c?[T,h,c]:[T],outputs:[]});let k=[T,i];y&&R.size(y.dims)>0&&k.push(y),h&&k.push(h),c&&k.push(c),e.compute(Cu(f,T,i,y,d,w,h,c),{inputs:k,outputs:f>1?[0,2]:[0]})},zu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let f=K("output_q",l[0].dataType,r),_=K("output_k",l[0].dataType,r),y=K("output_v",l[0].dataType,r),w=B("input",l[0].dataType,l[0].dims),S=B("weight",l[1].dataType,l[1].dims),$=B("bias",l[2].dataType,l[2].dims),b=w.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${c.registerUniforms(T).declareVariables(w,S,$,f,_,y)}
  ${c.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:h},{inputs:l,outputs:[-1,-1,-1]})},Cc=(e,t)=>{let r=ku(e.inputs,t),[i,n,a]=zu(e,r);return gr(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Au,Ou,Ru,zc,fy=W(()=>{"use strict";We(),re(),ie(),Se(),ne(),Au=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((o,l)=>{if(o!==i[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Ou=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?xe(a[a.length-1]):1,o=n==="NHWC"&&a.length>1?s:1,l=R.size(a)/s,d=i,h=d?a.length:a,c=B("x",e[0].dataType,e[0].dims,s),f=B("scale",e[1].dataType,e[1].dims,o),_=B("bias",e[2].dataType,e[2].dims,o),y=B("inputMean",e[3].dataType,e[3].dims,o),w=B("inputVar",e[4].dataType,e[4].dims,o),S=K("y",e[0].dataType,h,s),$=()=>{let T="";if(i)T=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let k=1;k<f.rank;k++)T+=`cIndices[${k}] = outputIndices[${k}];`;T+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return T},b=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(c,f,_,y,w,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Z(a)]:[{type:12,data:l}]})}},Ru=e=>he(e),zc=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Ru({...t,outputCount:i});if(ge.webgpu.validateInputContent&&Au(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ou(r,n))}}),Bu,Du,Ac,my=W(()=>{"use strict";ie(),ne(),Bu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Du=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,n=e[0].dataType,a=B("input",n,t,4),s=B("bias",n,[r],4),o=B("residual",n,t,4),l=K("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Ac=e=>{Bu(e.inputs),e.compute(Du(e.inputs))}}),Mu,ce,Oc,Rc,Bc,Dc,Mc,Nc,Pc,Uc,Lc,Nu,Wc,qc,Vc,Gc,pr,Fc,Hr,Hc,jc,Kc,Xc,Zc,Qc,Yc,Jc,eh,th,rh,ih,nh,ah,sh,oh,uh,Ki,lh,Mn,Nn,dh,ph,ch,Pu,Uu,hh,da=W(()=>{"use strict";re(),ie(),Se(),ne(),Mu=(e,t,r,i,n,a,s)=>{let o=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=B("inputData",r,[o],4),h=K("outputData",i,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(d,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,n,a=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Mu(d,R.size(e.dims),e.dataType,a,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:l})}},Oc=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},Rc=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},Bc=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},Dc=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},Mc=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},Nc=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},Pc=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},Uc=e=>he(e),Lc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Nu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},Wc=(e,t)=>{let r=t||Nu(e.inputs),i=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},qc=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},Vc=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},Gc=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},pr=e=>he(e),Fc=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Hr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Hc=e=>{let t=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Hr(t)))},jc=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},Kc=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},Xc=e=>{let t=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Hr(t)))},Zc=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Qc=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},Yc=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},Jc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},eh=e=>{let t=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},th=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},rh=e=>he(e),ih=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},nh=e=>{let t=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},ah=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},sh=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},oh=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},uh=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},Ki=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,lh=e=>{e.compute(ce(e.inputs[0],"Tanh",Ki))},Mn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ki("v")};
}
`,Nn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,dh=e=>{let t=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",Nn,Mn(t),void 0,e.inputs[0].dataType))},ph=(e,t)=>{let r=Ie(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},ch=e=>{e.compute(ce(e.inputs[0],"Log","log"))},Pu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Uu=e=>`quick_gelu_impl(${e})`,hh=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",Uu,Pu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Lu,Wu,fh,gy=W(()=>{"use strict";ie(),ne(),da(),Lu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Wu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),i=B("bias",e[0].dataType,[e[0].dims[2]],4),n=K("output",e[0].dataType,t,4),a=R.size(t)/4,s=Ee(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${Hr(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},fh=e=>{Lu(e.inputs),e.compute(Wu(e.inputs))}}),qu,Vu,je,mh,gh,yh,_h,bh,wh,$h,vh,xh,Sh,yy=W(()=>{"use strict";re(),ie(),ne(),qu=(e,t,r,i,n,a,s,o,l,d,h,c)=>{let f,_;typeof o=="string"?f=_=(b,T)=>`${o}((${b}),(${T}))`:typeof o=="function"?f=_=o:(f=o.scalar,_=o.vector);let y=K("outputData",h,i.length,4),w=B("aData",l,t.length,4),S=B("bData",d,r.length,4),$;if(n)if(a){let b=R.size(t)===1,T=R.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;b||T?$=y.setByOffset("global_idx",_(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):$=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",_(s||k?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=y.setByOffset("global_idx",_(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(T,k,I="")=>{let C=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${y.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${w.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,y)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${T}[${k}] = ${I}(${f(C,z)});
          `};h===9?$=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,y)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Vu=(e,t,r,i,n,a,s=r.dataType)=>{let o=r.dims.map(Number),l=i.dims.map(Number),d=!R.areEqual(o,l),h=o,c=R.size(o),f=!1,_=!1,y=[d];if(d){let w=Ht.calcShape(o,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");h=w.slice(),c=R.size(h);let S=R.size(o)===1,$=R.size(l)===1,b=o.length>0&&o[o.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;y.push(S),y.push($),y.push(b),y.push(T);let k=1;for(let I=1;I<h.length;I++){let C=o[o.length-I],z=l[l.length-I];if(C===z)k*=C;else break}k%4===0?(_=!0,f=!0):(S||$||b||T)&&(f=!0)}else f=!0;return y.push(f),{name:e,shaderCache:{hint:t+y.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>qu(w,o,l,h,f,d,_,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:h,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(h)/4)},...Z(o,l,h)]})}},je=(e,t,r,i,n,a)=>{e.compute(Vu(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},mh=e=>{je(e,"Add",(t,r)=>`${t}+${r}`)},gh=e=>{je(e,"Div",(t,r)=>`${t}/${r}`)},yh=e=>{je(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},_h=e=>{je(e,"Mul",(t,r)=>`${t}*${r}`)},bh=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;je(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},wh=e=>{je(e,"Sub",(t,r)=>`${t}-${r}`)},$h=e=>{je(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},vh=e=>{je(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},xh=e=>{je(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Sh=e=>{je(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Gu,Fu,Hu,ju,Th,kh,_y=W(()=>{"use strict";re(),ie(),Se(),ne(),Gu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Fu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Hu=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},ju=(e,t,r,i)=>{let n=R.size(r),a=new Array(e.length),s=new Array(e.length),o=0,l=[],d=[],h=[{type:12,data:n}];for(let w=0;w<e.length;++w)o+=e[w].dims[t],a[w]=o,d.push(e[w].dims.length),s[w]=B(`input${w}`,i,d[w]),l.push("rank"),h.push({type:12,data:a[w]});for(let w=0;w<e.length;++w)h.push(...Z(e[w].dims));h.push(...Z(r));let c=K("output",i,r.length),f=c.indicesGet("indices",t),_=Array.from(Array(a.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),y=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...s,c)})()}

  ${Fu(a.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${_});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Hu(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h}),getShaderSource:y}},Th=(e,t)=>{let r=e.inputs,i=r[0].dims,n=R.normalizeAxis(t.axis,i.length);Gu(r,n);let a=i.slice();a[n]=r.reduce((o,l)=>o+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(o=>R.size(o.dims)>0);e.compute(ju(s,n,a,r[0].dataType),{inputs:s})},kh=e=>he({axis:e.axis})}),Dt,Mt,Nt,pa,Ut=W(()=>{"use strict";re(),ie(),Dt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Mt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Nt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},pa=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Qp,Yp];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ze,Ih,ca=W(()=>{"use strict";ze=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Ih=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Eh,by=W(()=>{"use strict";Eh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),hr,ha,fa=W(()=>{"use strict";re(),ie(),ne(),Ut(),hr=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${X(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,X(n,o+a,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},ha=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],d=o[o.length-1],h=s[s.length-1],c=xe(d),f=xe(h),_=xe(l),y=R.size(r)/c/_,w=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),$=[R.size(S),l,d],b=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:h}];Mt(t,b),b.push(...Z(S,s,o)),w&&b.push(...Z(e[2].dims)),b.push(...Z($));let T=k=>{let I=oa("batch_dims",e[0].dataType,S.length),C=B("a",e[0].dataType,s.length,f),z=B("b",e[1].dataType,o.length,c),v=K("output",e[0].dataType,$.length,c),M=Ee(v.type.tensor),P=Dt(t,v.type.value,M),j=[C,z],V="";if(w){let N=n?c:1;j.push(B("bias",e[2].dataType,e[2].dims.length,N)),V=`${n?`value += bias[col / ${N}];`:`value += ${v.type.value}(bias[row + i]);`}`}let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Nt(t,L);let O=()=>{let N=`var a_data: ${C.type.value};`;for(let H=0;H<f;H++)N+=`
              let b_data${H} = b[(b_offset + (k + ${H}) * uniforms.N + col) / ${c}];`;for(let H=0;H<_;H++){N+=`a_data = a[(a_offset + (row + ${H}) * uniforms.K + k) / ${f}];`;for(let Q=0;Q<f;Q++)N+=`
            values[${H}] = fma(${z.type.value}(a_data${f===1?"":`[${Q}]`}), b_data${Q}, values[${H}]);
`}return N};return`
  ${k.registerUniforms(L).registerInternalVariables(I).declareVariables(...j,v)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${hr("a_indices",C,C.rank-2,I.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${hr("b_indices",z,z.rank-2,I.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${O()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${V}
      ${P}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${f};${_};${n}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:T}}}),Ku,Xu,Pn,Xi,Zu,Un,Qu,Qr,ma=W(()=>{"use strict";re(),ie(),ne(),Ut(),fa(),ca(),Ku=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Xu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Pn=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],h=n?l:a,c=n?a:l,f=h/t[0],_=a/t[1];if(!((n&&f===4&&e[1]===4||!n&&(f===3||f===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${r}>, ${h/f}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ku(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Xu(n,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Xi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Zu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Un=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32,l=!1)=>{let d=e[1]*t[1],h=e[0]*t[0],c=n?d:a,f=n?a:d;if(!(f%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let _=f/t[1],y=c/t[0],w=a/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Xi(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Xi(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Zu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${c}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Qu=(e,t,r,i,n=!1)=>{let[a,s,o,l]=i,d=Ee(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${ze(e,d)} {
      var value = ${ze(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${hr("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${ze(e,d)} {
      var value = ${ze(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${hr("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ze(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${ze(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Qr=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),d=o.slice(0,-2),h=i?i.slice(0,-2):r.slice(0,-2),c=R.size(h),f=s[s.length-2],_=s[s.length-1],y=o[o.length-1],w=_%4===0&&y%4===0,S=f<=8?[4,1,1]:[4,4,1],$=[8,8,1],b=[Math.ceil(y/$[0]/S[0]),Math.ceil(f/$[1]/S[1]),Math.ceil(c/$[2]/S[2])],T=w?4:1,k=[...l,f,_/T],I=k.length,C=[...d,_,y/T],z=C.length,v=[c,f,y/T],M=[{type:6,data:f},{type:6,data:y},{type:6,data:_}];Mt(t,M),M.push(...Z(h,k,C));let P=["rank","rank"],j=e.length>2;j&&(M.push(...Z(e[2].dims)),P.push("rank")),M.push(...Z(v));let V=L=>{let O=h.length,N=oa("batchDims",e[0].dataType,O,1),H=Ee(e[0].dataType),Q=B("a",e[0].dataType,I,T),J=B("b",e[1].dataType,z,T),te=K("result",e[0].dataType,v.length,T),ae=[Q,J];if(j){let ke=n?T:1;ae.push(B("bias",e[2].dataType,e[2].dims.length,ke))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Nt(t,U);let ee=Ee(te.type.tensor),Y=Dt(t,te.type.value,ee),F=Qu(T,j,Y,[N,Q,J,te],n);return`
  ${L.registerUniforms(U).registerInternalVariables(N).declareVariables(...ae,te)}
  ${F}
  ${w?Pn(S,$,H,N):Un(S,$,H,N)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${n}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:M}),getShaderSource:V}}}),Yu,Ch,wy=W(()=>{"use strict";re(),ut(),ne(),Ut(),ca(),by(),ma(),Yu=(e,t,r,i,n=!1,a,s=4,o=4,l=4,d="f32")=>{let h=M=>{switch(M){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},c=M=>{switch(M){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",$=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${ze(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${w}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(s)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${ze(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${ze(s,d)}(0.0);`,k=e?i&&r?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${ze(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${ze(o,d)}(0.0);`,I=ze(l,d),C=ze(e?s:o,d),z=ze(e?o:s,d),v=Dt(a,I,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?T:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Ih(n)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ch=(e,t,r,i,n,a,s,o,l)=>{let d=t.format==="NHWC",h=d?e[0].dims[3]:e[0].dims[1],c=r[0],f=d?r[2]:r[3],_=d?r[1]:r[2],y=d?r[3]:r[1],w=d&&(h%4===0||h%3===0)&&y%4===0,S=d?y:f*_,$=d?f*_:y,b=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/b[0]/T[0]),Math.ceil($/b[1]/T[1]),Math.ceil(c/b[2]/T[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let I=w?d&&h%4!==0?3:4:1,C=b[1]*T[1],z=b[0]*T[0],v=Math.max(b[0]*I,b[1]),M=i%C===0,P=n%z===0,j=a%v===0,V=w?[I,4,4]:[1,1,1],L=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Mt(t,L),L.push(...Z(e[0].dims,e[1].dims));let O=["rank","rank"];s&&(L.push(...Z(e[2].dims)),O.push("rank")),L.push(...Z(r));let N=H=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Nt(t,Q);let J=w?4:1,te=Ee(e[0].dataType),ae=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${te}>`:te}) {
        result[flatIndex] = ${w?`vec4<${te}>`:te}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${te}>`:te}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,U=B("x",e[0].dataType,e[0].dims.length,I===3?1:I),ee=B("w",e[1].dataType,e[1].dims.length,J),Y=[U,ee],F=K("result",e[0].dataType,r.length,J);if(s){let ke=B("bias",e[2].dataType,e[2].dims.length,J);Y.push(ke),ae+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${te}>`:te} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${Eh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${H.registerUniforms(Q).declareVariables(...Y,F)}
        ${ae}
        ${Yu(d,M,P,j,s,t,V[0],V[1],V[2],te)}
        ${w?Pn(T,b,te,void 0,!d,v):Un(T,b,te,void 0,!d,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${w};${M};${P};${j};${C};${z};${v}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:L}),getShaderSource:N}}}),Ju,Zi,ir,el,Qi,tl,zh,Ah,$y=W(()=>{"use strict";re(),ut(),ie(),ne(),Ut(),ca(),Ju=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Zi=e=>typeof e=="number"?[e,e,e]:e,ir=(e,t)=>t<=1?e:e+(e-1)*(t-1),el=(e,t,r,i=1)=>{let n=ir(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},Qi=(e,t,r,i,n)=>{n==null&&(n=el(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},tl=(e,t,r,i,n,a,s,o,l,d)=>{let h,c,f,_;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=Qi([t,r,i,1],[o,l,d],1,[n,a,s],e);c=y[0],f=y[1],_=y[2]}else if(Array.isArray(e)){if(!e.every((w,S,$)=>w===$[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=Qi([t,r,i,1],[o,l,d],1,[n,a,s],e[0]);c=y[0],f=y[1],_=y[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/n),f=Math.ceil(r/a),_=Math.ceil(i/s);let y=(c-1)*n+o-t,w=(f-1)*a+l-r,S=(_-1)*s+d-i,$=Math.floor(y/2),b=y-$,T=Math.floor(w/2),k=w-T,I=Math.floor(S/2),C=S-I;h={top:T,bottom:k,left:I,right:C,front:$,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:f,outWidth:_}},zh=(e,t,r,i,n,a=!1,s="channelsLast")=>{let o,l,d,h,c;if(s==="channelsLast")[o,l,d,h,c]=e;else if(s==="channelsFirst")[o,c,l,d,h]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,_,y,w]=t,[S,$,b]=Zi(r),[T,k,I]=Zi(i),C=ir(_,T),z=ir(y,k),v=ir(w,I),{padInfo:M,outDepth:P,outHeight:j,outWidth:V}=tl(n,l,d,h,S,$,b,C,z,v),L=a?f*c:f,O=[0,0,0,0,0];return s==="channelsFirst"?O=[o,L,P,j,V]:s==="channelsLast"&&(O=[o,P,j,V,L]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:d,inWidth:h,inChannels:c,outDepth:P,outHeight:j,outWidth:V,outChannels:L,padInfo:M,strideDepth:S,strideHeight:$,strideWidth:b,filterDepth:_,filterHeight:y,filterWidth:w,effectiveFilterDepth:C,effectiveFilterHeight:z,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:k,dilationWidth:I,inShape:e,outShape:O,filterShape:t}},Ah=(e,t,r,i,n,a)=>{let s=a==="channelsLast",o=s?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],h={x:r.map((b,T)=>T)},c=[Math.ceil(Ju(h.x.map(b=>r[b]))/d[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${c}`);let f=l?s&&o%4!==0?3:4:1,_=R.size(r),y=[{type:12,data:_},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Mt(t,y),y.push(...Z(e[0].dims,e[1].dims));let w=["rank","rank"],S=e.length===3;S&&(y.push(...Z(e[2].dims)),w.push("rank")),y.push(...Z(r));let $=b=>{let T=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Nt(t,T);let k=l?4:1,I=Ee(e[0].dataType),C=B("x",e[0].dataType,e[0].dims.length,f===3?1:f),z=B("W",e[1].dataType,e[1].dims.length,k),v=[C,z],M=K("result",e[0].dataType,r.length,k),P="";if(S){let L=B("bias",e[2].dataType,e[2].dims.length,k);v.push(L),P+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${I}>`:I} {
          return bias[${s?X("coords",4,5):X("coords",1,5)}${l?"/ 4":""}];
        }`}let j=ze(f,I),V=Dt(t,j,I);return`
            ${P}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${z.getByIndices("aIndices")};
            }
          ${b.registerUniforms(T).declareVariables(...v,M)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${M.offsetToIndices("global_idx")};
              let batch = ${X("coords",0,C.rank)};
              let d2 = ${s?X("coords",C.rank-1,C.rank):X("coords",1,C.rank)};
              let xFRCCorner = vec3<u32>(${s?X("coords",1,C.rank):X("coords",2,C.rank)},
              ${s?X("coords",2,C.rank):X("coords",3,C.rank)},
              ${s?X("coords",3,C.rank):X("coords",4,C.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?X("uniforms.x_shape",1,C.rank):X("uniforms.x_shape",2,C.rank)};
              let xShapeZ = ${s?X("uniforms.x_shape",2,C.rank):X("uniforms.x_shape",3,C.rank)};
              let xShapeW = ${s?X("uniforms.x_shape",3,C.rank):X("uniforms.x_shape",4,C.rank)};
              let xShapeU = ${s?X("uniforms.x_shape",4,C.rank):X("uniforms.x_shape",1,C.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${S?"value = value + getBiasByOutputCoords(coords)":""};
              ${V}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${S}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:c[0],y:c[1],z:c[2]},programUniforms:y}),getShaderSource:$}}}),Oh,Rh,vy=W(()=>{"use strict";re(),ie(),ne(),Ut(),Oh=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],h=d/t.group,c=l&&h>=4?xe(d):1,f=R.size(r)/c,_=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Mt(t,_),_.push(...Z(s,[o[0],o[1],o[2],o[3]/c]));let y=n?["rank","rank","rank"]:["rank","rank"];_.push(...Z([r[0],r[1],r[2],r[3]/c]));let w=S=>{let $=K("output",e[0].dataType,r.length,c),b=Ee($.type.tensor),T=Dt(t,$.type.value,b),k=B("x",e[0].dataType,s.length),I=B("w",e[1].dataType,o.length,c),C=[k,I];n&&C.push(B("b",e[2].dataType,e[2].dims,c));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Nt(t,z);let v=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(z).declareVariables(...C,$)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${v}
    ${a}
    ${T}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:_}),getShaderSource:w}},Rh=(e,t,r,i)=>{let n=e.length>2,a=xe(r[3]),s=xe(r[2]),o=R.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[r[0],r[1],r[2],r[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Mt(t,c),c.push(...Z(l,d,h));let f=(s-1)*t.strides[1]+d[1],_=y=>{let w=K("output",e[0].dataType,h.length,a),S=Ee(w.type.tensor),$=Dt(t,w.type.value,S),b=B("x",e[0].dataType,l.length,a),T=B("w",e[1].dataType,d.length,a),k=[b,T];n&&k.push(B("b",e[2].dataType,e[2].dims,a));let I=n?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Nt(t,C),`
  ${y.registerUniforms(C).declareVariables(...k,w)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${f}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${$}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:_}}}),rl,Nr,il,Pr,Ln,Yi,nl,al,Wn,xy=W(()=>{"use strict";ie(),wy(),$y(),ma(),vy(),Ut(),fa(),vt(),rl=(e,t,r,i,n,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),l=o.length,d=t[0],h=t.slice(2).map((f,_)=>f+(f-1)*(r[_]-1)),c=o.map((f,_)=>f+i[_]+i[_+l]).map((f,_)=>Math.floor((f-h[_]+n[_])/n[_]));return c.splice(0,0,s),c.splice(a?3:1,0,d),c},Nr=[2,3,1,0],il=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Pr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();Xr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},Ln=e=>{let t=pa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Yi=(e,t,r,i)=>{let n=r.format==="NHWC",a=rl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let C=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(Ne(t[1],Nr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),C.push(z)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Rh(C,r,a,i),{inputs:C}):e.compute(Oh(C,r,a,i),{inputs:C});return}let s=t.length===3,o=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],h=t[1].dims[2],c=t[1].dims[3],f=a[n?1:2],_=a[n?2:3],y=a[n?3:1],w=n&&h===o&&c===l&&r.pads[0]===0&&r.pads[1]===0;if(w||h===1&&c===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=a[0],z,v,M,P=[];if(n){let L=e.kernelCustomData.wT??e.compute(Ne(t[1],Nr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=L),w){let O=o*l*d;z=t[0].reshape([1,C,O]),v=L.reshape([1,O,y]),M=[1,C,y]}else z=t[0].reshape([C,o*l,d]),v=L.reshape([1,d,y]),M=[C,f*_,y];P.push(z),P.push(v)}else z=t[0].reshape([C,d,o*l]),v=t[1].reshape([1,y,d]),M=[C,y,f*_],P.push(v),P.push(z);s&&P.push(t[2]);let j=M[2],V=P[0].dims[P[0].dims.length-1];j<8&&V<8?e.compute(ha(P,r,a,M,n,i),{inputs:P}):e.compute(Qr(P,r,a,M,n,i),{inputs:P});return}let S=!0,$=e.kernelCustomData.wT??e.compute(Ne(t[1],Nr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let b=[t[0],$];s&&b.push(t[2]);let T=n?f*_:y,k=n?y:f*_,I=h*c*d;e.compute(Ch(b,r,a,T,k,I,s,S,i),{inputs:b})},nl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Pr({...t,pads:n,strides:a,dilations:s,kernelShape:o},i);Yi(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},al=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Pr(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=zh(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(Ah(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Wn=(e,t)=>{if(il(e.inputs,t),e.inputs[0].dims.length===3)nl(e,t);else if(e.inputs[0].dims.length===5)al(e,e.inputs,t);else{let r=Pr(t,e.inputs);Yi(e,e.inputs,r)}}}),Bh,Sy=W(()=>{"use strict";re(),ut(),ie(),ne(),Bh=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,d=o[3],h=a?xe(l):1,c=a&&d===1&&l>=4,f=c?Math.floor(l/4)*4:Math.floor(l/h)*h,_=l-f,y=a?xe(d):1,w=a?d===1?h:y:1,S=R.size(n)/y,$=[Math.ceil(S/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let b=["rank","rank"],T=[t.strides[0],t.strides[1]],k=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],I=[t.dilations[0],t.dilations[1]],C=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],z=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:S},{type:12,data:T},{type:12,data:k},{type:12,data:I},{type:12,data:C},{type:6,data:z},{type:12,data:f},{type:12,data:l},{type:12,data:d},...Z(e[0].dims,e[1].dims)];i&&(v.push(...Z(e[2].dims)),b.push("rank")),v.push(...Z(n));let M=P=>{let j=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],V=Ee(e[0].dataType),L=a?1:2,O=a?2:3,N=a?3:1,H=B("W",e[1].dataType,e[1].dims.length,w),Q=B("Dy",e[0].dataType,e[0].dims.length,h),J=[Q,H];i&&J.push(B("bias",e[2].dataType,[n[N]].length,y));let te=K("result",e[0].dataType,n.length,y),ae=()=>{let Y="";if(c)h===4?Y+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${H.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?Y+=`
          dotProd = dotProd + dot(vec4<${V}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${V}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(Y+=`
          dotProd = dotProd + dot(vec4<${V}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${V}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}, ${H.getByOffset("w_offset + 2u")}, ${H.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Y+=`
                  let xValue = ${a?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,h===1)Y+=`
          let w_offset = ${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${H.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let F=0;F<h;F++)Y+=`
            let wValue${F} = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${F}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${F}] * wValue${F};`;return Y},U=()=>{if(_===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let Y="";if(h===1){Y+="dotProd = dotProd";for(let F=0;F<_;F++)Y+=`
            + ${Q.getByOffset(`x_offset + ${F}`)} * ${H.getByOffset(`w_offset + ${F}`)}`;Y+=";"}else if(h===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);Y+=`
          let xValue = ${Q.getByOffset("x_offset")};
          let wValue = ${H.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Y},ee=`
            let outputIndices = ${te.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${te.indicesGet("outputIndices",0)};
            let d1 = ${te.indicesGet("outputIndices",N)};
            let r = ${te.indicesGet("outputIndices",L)};
            let c = ${te.indicesGet("outputIndices",O)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${te.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${V}(dyRCorner) + ${V}(wR)) / ${V}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${V}(uniforms.Dy_shape[${L}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${V}(dyCCorner) + ${V}(wC)) / ${V}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${V}(uniforms.Dy_shape[${O}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${H.indicesToOffset(`${H.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${ae()}
                  inputChannel = inputChannel + ${c?4:h};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${te.setByOffset("global_idx","value")};
          `;return`
    ${P.registerUniforms(j).declareVariables(...J,te)}
      ${P.mainStart()}
      ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ee}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${w}${y}${c}${_}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:M}}}),sl,ol,ul,Ji,Dh,ll,en,dl,Mh,Ty=W(()=>{"use strict";Sy(),Ut(),vt(),sl=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,ol=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},ul=(e,t,r,i,n,a,s,o,l,d)=>{let h=e.length-2,c=d.length===0;l.length<h&&l.push(...Array(h-l.length).fill(0));let f=e[0],_=t[o?3:1]*n;for(let y=0,w=e.length-h-(o?1:0);y<h;++y,++w){let S=e[w],$=c?S*s[y]:d[y],b=sl(S,s[y],a[y],t[w],r[y],$);ol(b,i,a,y,y+h),c&&d.push(s[y]*(S-1)+l[y]+(t[w]-1)*r[y]+1-a[y]-a[y+h])}d.splice(0,0,f),d.splice(o?3:1,0,_)},Ji=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,f)=>c*f,1)===0){r.length=0;for(let c=2;c<t[1].dims.length;++c)r.push(t[1].dims[c])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}let d=e.strides.slice();if(d.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;d=new Array(c).fill(1)}ul(o,r,l,e.autoPad,e.group,n,d,i,s,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:l,strides:d}),h},Dh=e=>{let t=pa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:h,outputShape:c,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ll=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},en=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Ne(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(Bh(a,r,i),{inputs:a})},dl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=Ji({...t,pads:o,strides:s,dilations:a,kernelShape:n,outputPadding:l},i);en(e,i,d,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Mh=(e,t)=>{if(ll(e.inputs,t),e.inputs[0].dims.length===3)dl(e,t);else{let r=Ji(t,e.inputs);en(e,e.inputs,r)}}}),pl,Nh,Ph,ky=W(()=>{"use strict";re(),ie(),Se(),ne(),pl=(e,t,r,i)=>{let n=R.size(t),a=t.length,s=B("input",e,a),o=K("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(l,a),h=c=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=X("uniforms.input_shape","uniforms.axis",a),y=i.reverse?f+(i.exclusive?" + 1":""):"0",w=i.reverse?_:f+(i.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...Z(t,t)]}),getShaderSource:h}},Nh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(pl(i,r,n,t),{inputs:[0]})},Ph=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),cl,hl,fl,Uh,Lh,Iy=W(()=>{"use strict";re(),ie(),Se(),ne(),cl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},hl=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},fl=(e,t)=>{let r,i,n,a,s,o,l=t.format==="NHWC",d=t.blocksize,h=t.mode==="DCR";l?([r,i,n,a]=e.dims,s=h?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],o=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=h?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],o=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),f=c.dims.length,_=e.dataType,y=B("a",_,f),w=K("output",_,f),S=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(y,w)}

  ${hl(o,f,y,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let b=l?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],T=R.size(b),k=c.dims,I=R.sortBasedOnPerm(k,o);return{outputs:[{dims:b,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...Z(k,I)]}},getShaderSource:S}},Uh=(e,t)=>{cl(e.inputs),e.compute(fl(e.inputs[0],t))},Lh=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),at,nr,Ur,tn,mt,ml,gl,yl,rn,nn,an,_l,bl,sn,wl,Wh,qh,Ey=W(()=>{"use strict";re(),ie(),Se(),ne(),at=256,nr=512,Ur=2*Math.PI,tn=e=>{let t=[],r=e;for(let i of[4,2,3,5])for(;r%i===0;)t.push(i),r/=i;return r===1?t:void 0},mt=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},ml=(e,t,r,i,n)=>{let a=r/e,s=nr-i,o=d=>`smem[${s}u + base + ${d*t}u]`,l=`  for (var t = local_idx; t < ${a}u; t += ${at}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let d=0;d<e;d++){let h=`${i}u + t + ${d*a}u`;if(d===0)l+=`    leg[0] = smem[${h}];
`;else{let c=n*Ur*d/(e*t);l+=`    { let a = ${mt(c)} * angleUnit; leg[${d}] = cmul(smem[${h}], vec2<f32>(cos(a), sin(a))); }
`}}if(l+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)l+=`    ${o(0)} = leg[0] + leg[1];
    ${o(1)} = leg[0] - leg[1];
`;else if(e===4){let d=n<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";l+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,l+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,l+=`    let oddRot = ${d};
`,l+=`    ${o(0)} = evenSum + oddSum;
    ${o(1)} = evenDiff + oddRot;
`,l+=`    ${o(2)} = evenSum - oddSum;
    ${o(3)} = evenDiff - oddRot;
`}else for(let d=0;d<e;d++){let h=["leg[0]"];for(let c=1;c<e;c++){let f=n*Ur*(c*d)/e,_=mt(Math.cos(f)),y=mt(Math.sin(f));h.push(`vec2<f32>(leg[${c}].x*${_} - leg[${c}].y*${y}, leg[${c}].x*${y} + leg[${c}].y*${_})`)}l+=`    ${o(d)} = ${h.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},gl=(e,t,r)=>{let i="",n=1,a=0;for(let s of e)i+=ml(s,n,t,a,r),n*=s,a=nr-a;return{code:i,resultOffset:a}},yl=(e,t,r,i,n)=>{let a=e.dims,s=a.length,o=a[s-1],l=a[t],d=r&&i?(l-1)*2:l;n!==void 0&&(d=n);let h=r&&i?1:2,c=i&&!r?Math.floor(d/2)+1:d,f=a.slice();f[t]=c,f[s-1]=h;let _=1;for(let w=t+1;w<s-1;w++)_*=a[w];let y=R.size(a)/o/l;return{dataType:e.dataType,outputDims:f,length:d,signalLength:l,inner:_,batch:y,inputComponents:o,outputComponents:h,outputLength:c,inverse:r,onesided:i}},rn=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),nn=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],an=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),_l=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:n,inverse:a,onesided:s}=e,o=Ie(t),l=a?1:-1,d=a?1/r:1,h=tn(r),c=f=>{let _=B("x",t,[1]),y=K("y",t,[1]),w=I=>{let C=`inBase + (${I}) * uniforms.inner * ${i}u`,z=`f32(${_.getByOffset(C)})`,v=i===2?`f32(${_.getByOffset(`${C} + 1u`)})`:"0.0";return`vec2<f32>(${z}, ${v})`},S;if(a&&s){let I=Math.floor(r/2)+1,C=r%2===0?`select(provided, provided - 1u, provided == ${I}u)`:"provided";S=`
    let provided = min(uniforms.signalLength, ${I}u);
    for (var i = local_idx; i < ${r}u; i += ${at}u) {
      if (i < provided) { smem[i] = ${w("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${C}; k += ${at}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else S=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${at}u) {
      if (i < loadCount) { smem[i] = ${w("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:$,resultOffset:b}=gl(h,r,l),T=d===1?`smem[${b}u + i]`:`smem[${b}u + i] * ${mt(d)}`,k=n===2?y.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${an(f,_,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*nr}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${f.mainStart(at)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${n}u;
    ${S}
${$}    for (var i = local_idx; i < uniforms.outputLength; i += ${at}u) {
      let v = ${T};
      let off = outBase + i * uniforms.inner * ${n}u;
      ${y.setByOffset("off",`${o}(v.x)`)}
      ${k}
    }
  }`};return{name:"DFT",shaderCache:{hint:rn(e,"fft"),inputDependencies:["type"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:nn(e),dispatchGroup:{x:e.batch}})}},bl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:n,inverse:a,onesided:s}=e,o=Ie(t),l=a?1:-1,d=a?1/r:1,h=c=>{let f=B("x",t,[1]),_=K("y",t,[1]),y=T=>{let k=`inBase + (${T}) * uniforms.inner * ${i}u`,I=`f32(${f.getByOffset(k)})`,C=i===2?`f32(${f.getByOffset(`${k} + 1u`)})`:"0.0";return`vec2<f32>(${I}, ${C})`},w=a&&s?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(r/2)+1}u);
    if (k < provided) { return ${y("k")}; }
    let m = ${r}u - k;
    if (m < provided) {
      let h = ${y("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${y("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,S=`
      let angle = ${mt(l*Ur)} * f32(knMod) / ${mt(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,$=n===2?_.setByOffset("off + 1u",`${o}(v.y)`):"",b=d===1?"acc":`acc * ${mt(d)}`;return`
  ${an(c,f,_)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${w}
  ${c.mainStart(at)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${n}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${at}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${S}
      }
      let v = ${b};
      let off = outBase + k * uniforms.inner * ${n}u;
      ${_.setByOffset("off",`${o}(v.x)`)}
      ${$}
    }
  }`};return{name:"DFT",shaderCache:{hint:rn(e,"direct"),inputDependencies:["type"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:nn(e),dispatchGroup:{x:e.batch}})}},sn=e=>{if(!e||e.dataType===0)return;if(R.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},wl=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},Wh=(e,t)=>{wl(e.inputs);let r=e.inputs[0],i=r.dims.length,n=t.inverse!==0,a=t.onesided!==0,s=sn(e.inputs[1]);if(s!==void 0&&s<=0)throw new Error("dft_length must be greater than zero.");let o=R.normalizeAxis(sn(e.inputs[2])??t.axis,i);if(o===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(n&&a&&r.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=yl(r,o,n,a,s);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let d=l.length<=nr&&tn(l.length)!==void 0?_l(l):bl(l);e.compute(d,{inputs:[0]})},qh=e=>he({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Lr,ar,on,$l,vl,xl,Sl,un,Tl,Vh,Gh,Cy=W(()=>{"use strict";re(),ie(),Se(),ne(),Lr="[a-zA-Z]|\\.\\.\\.",ar="("+Lr+")+",on="^"+ar+"$",$l="("+ar+",)*"+ar,vl="^"+$l+"$",xl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Sl=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(vl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,a)=>{let s=e[a].dims.slice();if(!n.match(RegExp(on)))throw new Error("Invalid LHS term");let o=this.processTerm(n,!0,s,a);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,a])=>a.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(ar)))throw new Error("Invalid RHS");i.match(RegExp(Lr,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(n);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(on))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Lr,"g")),d=new xl(i);return l?.forEach((h,c)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=n-l.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let y=String.fromCharCode(48+_);d.addSymbol(y,c+_),this.addSymbol(y,r[o++],i)}}else d.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[o++],i)}),d}},un=e=>e+"_max",Tl=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,h)=>B(`input${h}`,t,d)),a=R.size(i),s=K("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let h=[],c="var prod = 1.0;",f="var sum = 0.0;",_="sum += prod;",y=[],w=[],S=[],$=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,I)=>{if(r.rhs.symbolToIndices.has(I)){let C=r.rhs.symbolToIndices.get(I)?.[0];C!==void 0&&r.lhs.forEach((z,v)=>{if(k.inputIndices.includes(v)){let M=z.symbolToIndices.get(I);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(P=>{h.push(`${n[v].indicesSet(`input${v}Indices`,P,s.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,z)=>{if(k.inputIndices.includes(z)){let v=C.symbolToIndices.get(I);if(v===void 0)throw new Error("Invalid symbol error");v.forEach(M=>{y.push(`${n[z].indicesSet(`input${z}Indices`,M,`${I}`)}`)}),$.push(`prod *= ${n[z].getByIndices(`input${z}Indices`)};`)}}),w.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${un(I)}; ${I}++) {`),S.push("}")});let T=b?[...h,`let sum = ${n.map((k,I)=>k.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...h,f,...w,...y,c,...$,_,...S];return`
            ${d.registerUniforms(o.map(k=>({name:`${un(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((k,I)=>`var input${I}Indices: ${n[I].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(c=>r.symbolToInfo.has(c)).map(c=>({type:12,data:r.symbolToInfo.get(c)?.dimValue||0}));d.push({type:12,data:a});let h=e.map((c,f)=>[...Z(c)]).reduce((c,f)=>c.concat(f),d);return h.push(...Z(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:l}},Vh=(e,t)=>{let r=new Sl(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(Tl(n,e.inputs[0].dataType,r,i))},Gh=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),kl,ln,Il,El,Fh,zy=W(()=>{"use strict";re(),ie(),ne(),kl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ln=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Il=(e,t)=>e.length>t.length?ln(e,t):ln(t,e),El=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Il(t,r),n=e[0].dataType,a=n===9||R.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(R.size(i)/o),d=c=>{let f=B("input",n,t.length,s),_=K("output",n,i.length,o),y;if(n===9){let w=(S,$,b="")=>`
          let outputIndices${$} = ${_.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${f.broadcastedIndicesToOffset(`outputIndices${$}`,_)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${S}[${$}] = ${b}(${f.getByOffset(`index${$}`)}[component${$}]);
        `;y=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(f,_)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},h=[{type:12,data:l},...Z(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h})}},Fh=e=>{kl(e.inputs),e.compute(El(e.inputs),{inputs:[0]})}}),Cl,Hh,Ay=W(()=>{"use strict";re(),ie(),ne(),da(),Cl=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),n=i%4===0,a=s=>{let o=B("x",t,[1],4),l=B("bias",t,[1],4),d=K("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${l.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,f=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(h).declareVariables(o,l,d)}

    ${Mn(Ie(t))}

    ${s.mainStart(jt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Nn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/jt/4)}})}},Hh=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?dh(e):e.compute(Cl(e.inputs))}}),zl,Al,jh,Kh,Oy=W(()=>{"use strict";re(),ie(),Se(),ne(),zl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Al=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let o=r[a],l=e[0].dataType===9?4:1,d=Math.ceil(R.size(s)/l),h=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...Z(e[0].dims,e[1].dims,s)],c=f=>{let _=B("data",e[0].dataType,e[0].dims.length,l),y=B("inputIndices",e[1].dataType,e[1].dims.length),w=K("output",e[0].dataType,s.length,l),S=b=>{let T=i.length,k=`var indicesIndices${b}  = ${y.type.indices}(0);`;for(let I=0;I<T;I++)k+=`${T>1?`indicesIndices${b}[${I}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${I}]`:`outputIndices${b}`};`;k+=`
          var idx${b} = ${y.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let I=0,C=0;I<n;I++)I===a?(k+=`${n>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = u32(idx${b});`,C+=T):(k+=`${n>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${C}]`:`outputIndices${b}`};`,C++);return k},$;if(e[0].dataType===9){let b=(T,k,I="")=>`
          let outputIndices${k} = ${w.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${_.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${T}[${k}] = ${I}(${_.getByOffset(`index${k}`)}[component${k}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,y,w)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:c}},jh=e=>he({axis:e.axis}),Kh=(e,t)=>{let r=e.inputs;zl(r),e.compute(Al(e.inputs,t))}}),Ol,Xh,Zh,Ry=W(()=>{"use strict";re(),ie(),ne(),Ol=(e,t,r,i,n,a,s,o,l)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:l}],h=[a];d.push(...Z(t.dims,h));let c=f=>{let _=B("indices_data",t.dataType,t.dims.length),y=K("input_slice_offsets_data",12,1,1),w=[_,y],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(S).declareVariables(...w)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Xh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=R.sizeToDimension(a,a.length-1),l=R.sizeFromDimension(i,t.batchDims+s),d=R.sizeToDimension(i,t.batchDims),h=R.sizeFromDimension(i,t.batchDims),c=o/d,f=new Array(s),_=l;for(let k=0;k<s;++k)f[s-1-k]=_,_*=i[t.batchDims+s-1-k];let y=Ol(e,r[1],f,t.batchDims,i,o,c,h,s),w=t.batchDims+s;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=a.slice(0,-1).concat(i.slice(w)),$=R.size(S),b=[{type:12,data:$},{type:12,data:l},...Z(r[0].dims,y.dims,S)],T=k=>{let I=B("data",r[0].dataType,r[0].dims.length),C=B("slice_offsets",12,y.dims.length),z=K("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,C,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:T},{inputs:[r[0],y]})},Zh=e=>({batchDims:e.batch_dims,cacheKey:""})}),Rl,Bl,Qh,Yh,By=W(()=>{"use strict";re(),ie(),Se(),ne(),Rl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((o,l)=>l===r?Math.ceil(o/i)===a.dims[l]:o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,l)=>o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Bl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.gatherAxis,n),s=R.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(a,1,...i);let l=R.size(o),d=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...Z(...e.map((_,y)=>_.dims),o)],f=_=>{let y=B("data",e[0].dataType,e[0].dims.length),w=B("inputIndices",e[1].dataType,e[1].dims.length),S=B("scales",e[2].dataType,e[2].dims.length),$=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=K("output",d,o.length),T=[y,w,S];$&&T.push($);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(k).declareVariables(...T,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ie(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,y)=>y!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:f}},Qh=(e,t)=>{let r=e.inputs;Rl(r,t),e.compute(Bl(e.inputs,t))},Yh=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Dl,Ml,Jh,ef,Dy=W(()=>{"use strict";re(),ie(),Se(),ne(),Dl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ml=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,o=R.normalizeAxis(t.axis,n),l=r[o],d=a.slice(0),h=R.size(d),c=B("input",i,n),f=B("indicesInput",s,a.length),_=K("output",i,d.length),y=[{type:12,data:h},{type:6,data:l},{type:12,data:o}];return y.push(...Z(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,f,_)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},Jh=e=>he({axis:e.axis}),ef=(e,t)=>{let r=e.inputs;Dl(r),e.compute(Ml(e.inputs,t))}}),Nl,Pl,tf,rf,My=W(()=>{"use strict";re(),ie(),ne(),Nl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Pl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=Zp.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,a];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(a/l),h=Math.ceil(n/l),c=!0,f=R.size(o),_=[{type:12,data:c?d:f},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(_.push(...Z(e[2].dims)),y.push("rank")),_.push(...Z(o));let w=$=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",k=B("a",e[0].dataType,e[0].dims),I=B("b",e[1].dataType,e[1].dims),C=k.type.value,z=null,v=[k,I];e.length===3&&(z=B("c",e[2].dataType,e[2].dims.length),v.push(z));let M=K("output",e[0].dataType,o.length);v.push(M);let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(P).declareVariables(...v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${T}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${C}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=$=>{let b=B("a",e[0].dataType,e[0].dims),T=B("b",e[1].dataType,e[1].dims),k=null,I=[b,T];e.length===3&&(k=B("c",e[2].dataType,e[2].dims.length),I.push(k));let C=K("output",e[0].dataType,o.length);I.push(C);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",M="";t.transA&&t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let P=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(z).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${$.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${M}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${P}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*h},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:_}),getShaderSource:w}},tf=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},rf=(e,t)=>{Nl(e.inputs),e.compute(Pl(e.inputs,t))}}),tt,st,It,Et,Ul,Ll,Wl,ql,Vl,Gl,Fl,Hl,nf,af,Ny=W(()=>{"use strict";re(),ie(),Se(),ne(),[tt,st,It,Et]=[0,1,2,3],Ul=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Ll=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Wl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,ql=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Vl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Gl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${tt}] = batch;
     indices[${st}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${It}] = u32(r);
            indices[${Et}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${It}] = u32(clamp(r, 0, H - 1));
          indices[${Et}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${It}] = gs_reflect(r, border[1], border[3]);
          indices[${Et}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Fl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tt}], indices[${st}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tt}], indices[${st}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tt}], indices[${st}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tt}], indices[${st}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tt}], indices[${st}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tt}], indices[${st}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Hl=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=B("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tt,st,It,Et]=[0,3,1,2]);let s=K("output",e[0].dataType,a.length),o=r.type.value,l=R.size(a),d=[{type:12,data:l},...Z(e[0].dims,i,a)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Ll}
  ${Wl(o)}
  ${ql(t)}
  ${Vl(t)}
  ${Gl(r,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${It}]);
      let W_in = i32(uniforms.x_shape[${Et}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${tt}], indices[${It}], indices[${Et}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Fl(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let f=R.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:h}},nf=(e,t)=>{Ul(e.inputs),e.compute(Hl(e.inputs,t))},af=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Be,jl,sf,dn,Kl,cr,of,uf=W(()=>{"use strict";re(),ie(),Se(),sa(),la(),ne(),vt(),Be=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,jl=(e,t)=>{let r=e[0],i=Be(e,1),n=Be(e,2),a=Be(e,3),s=Be(e,4),o=Be(e,5),l=Be(e,6),d=Be(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],c=r.dims[1],f=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=c,y=0,w=0,S=Math.floor(f/t.numHeads);if(l&&d&&R.size(l.dims)&&R.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],w=l.dims[2]}else if(l&&R.size(l.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,_=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,_=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,_=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(a&&R.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=y+_,T=0;if(s&&R.size(s.dims)>0){T=8;let z=s.dims;throw z.length===1?z[0]===h?T=1:z[0]===3*h+2&&(T=3):z.length===2&&z[0]===h&&z[1]===b&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,I=f;if(n&&R.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(_!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=n.dims[2]}else{if(_!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=n.dims[1]*n.dims[3],k=!0}}let C=!1;if(s&&R.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&R.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==h||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:f,vHiddenSize:I,headSize:S,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:C,passPastInKv:k,qkvFormat:$}},sf=e=>he({...e}),dn=he({perm:[0,2,1,3]}),Kl=(e,t,r,i,n,a,s)=>{let o=[i,n,a],l=R.size(o),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],h=c=>{let f=K("qkv_with_bias",t.dataType,o),_=B("qkv",t.dataType,o),y=B("bias",r.dataType,o),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(w).declareVariables(_,y,f)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},cr=(e,t,r,i,n,a,s,o)=>{let l=a;if(s&&R.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Kl(e,a,s,t,i,r*n,o),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(Ne(l,dn.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,i,r,n])),r===1||i===1?l:e.compute(Ne(l,dn.perm),{inputs:[l],outputs:[-1]})[0]},of=(e,t)=>{let r=jl(e.inputs,t),i=e.inputs[0],n=Be(e.inputs,1),a=Be(e.inputs,2),s=Be(e.inputs,3),o=Be(e.inputs,4),l=Be(e.inputs,5),d=Be(e.inputs,6),h=Be(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let c=n&&a&&n.dims.length===4&&a.dims.length===4,f=cr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(c)return gr(e,f,n,a,o,void 0,d,h,l,r);if(!n||!a)throw new Error("key and value must be provided");let _=cr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),y=cr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);gr(e,f,_,y,o,void 0,d,h,l,r)}}),Xl,Zl,Ql,Yl,qn,lf,df,pf=W(()=>{"use strict";re(),ie(),Se(),ne(),Xl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Zl=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},Ql=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${X("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Yl=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},qn=(e,t)=>{let r=e[0].dims,i=R.size(r),n=e[0].dataType,a=R.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=B("input",n,r.length),l=new Array(t.numOutputs),d=[],h=[],c=0,f=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){c+=t.splitSizes[y],l[y]=c;let w=r.slice();w[a]=t.splitSizes[y],h.push(w),s[y]=K(`output${y}`,n,w.length),d.push({dims:h[y],dataType:e[0].dataType})}f.push({type:12,data:l},...Z(r,...h));let _=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${Ql(l.length)}
  ${Yl(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${X("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f})}},lf=(e,t)=>{Xl(e.inputs);let r=e.inputs.length===1?t:Zl(e.inputs,t);e.compute(qn(e.inputs,r),{inputs:[0]})},df=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),Jl,Yr,cf,hf=W(()=>{"use strict";re(),ie(),Se(),ne(),Jl=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!R.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],h=n.dims[0],c=R.sizeFromDimension(r.dims,1)/d,f=o===0?n.dims[1]*2:c/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},Yr=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],o=R.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,h=e[2].dims[1],c=n===0?h*2:d/i,f=new Array(s,l,d/c,c-h),_=R.computeStrides(f),y=[{type:1,data:a},{type:12,data:f},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[o,d,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,l*c,1]}):[],...Z(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let $=B("input",e[0].dataType,e[0].dims.length),b=B("position_ids",e[1].dataType,e[1].dims.length),T=B("cos_cache",e[2].dataType,e[2].dims.length),k=B("sin_cache",e[3].dataType,e[3].dims.length),I=K("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables($,b,T,k,I)}

        ${S.mainStart(jt)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",K("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(f)/jt)},programUniforms:y})}},cf=(e,t)=>{Jl(e.inputs,t),e.compute(Yr(e.inputs,t))}}),ed,td,pn,rd,ff,Py=W(()=>{"use strict";Se(),re(),la(),uf(),pf(),vt(),hf(),ne(),ed=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],h=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],c=d,f=0,_=!i||i.dims.length===0,y=Math.floor(_?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);_&&(h=y*t.numHeads);let w=a&&a.dims.length!==0,S=s&&s.dims.length!==0;if(w&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');c=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let b=0,T=!1,k=t.kvNumHeads?y*t.kvNumHeads:h;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(c!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(c!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],T=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=I.dims.reduce((z,v)=>z*v,1);if(C!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${C}.`);for(let z=0;z<I.dims.length;z++)if(I.dims[z]!==1&&I.dims[z]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${z}] = ${I.dims[z]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:k,headSize:y,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:$}},td=he({perm:[0,2,1,3]}),pn=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Ne(i,td.perm),{inputs:[i],outputs:[-1]})[0]),i},rd=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=h=>{let c=B("seq_lens",r.dataType,r.dims),f=B("total_seq_lens",i.dataType,i.dims),_=K("pos_ids",n,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(y).declareVariables(c,f,_)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${c.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},ff=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=ed(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,c=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[f,_,y]=!n&&!a?e.compute(qn([i],c),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],w,S;if(t.doRotary){let k=e.compute(rd(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],I=e.inputs[7],C=e.inputs[8],z=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),v=[f,k,I,C],M=[-1];w=e.compute(Yr(v,z),{inputs:v,outputs:M})[0],v.splice(0,1,_);let P=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(Yr(v,P),{inputs:v,outputs:M})[0]}let $=cr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:f,void 0,0),b=pn(e,t.doRotary?S:_,r),T=pn(e,y,r);gr(e,$,b,T,void 0,void 0,s,o,void 0,r,l,d)}}),cn,id,nd,mf,Uy=W(()=>{"use strict";re(),ie(),vt(),ne(),cn=(e,t,r,i,n,a,s,o)=>{let l=xe(a),d=l===1?"f32":`vec${l}f`,h=l===1?"vec2f":`mat2x${l}f`,c=n*s,f=64;c===1&&(f=256);let _=[n,s,a/l],y=[n,s,2],w=["rank","type","type"],S=[];S.push(...Z(_,y));let $=b=>{let T=B("x",t.dataType,3,l),k=B("scale",r.dataType,r.dims),I=B("bias",i.dataType,i.dims),C=K("output",1,3,2),z=[T,k,I,C];return`
  var<workgroup> workgroup_shared : array<${h}, ${f}>;
  const workgroup_size = ${f}u;
  ${b.declareVariables(...z)}
  ${b.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${$t("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${$t("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:c},programUniforms:S}),getShaderSource:$},{inputs:[t,r,i],outputs:[-1]})[0]},id=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],o=i[1],l=R.sizeFromDimension(i,a),d=xe(l),h=R.size(n)/d,c=cn(e,t[0],t[1],t[2],s,l,o,r.epsilon),f=[s,o,l/d],_=[s,o],y=["type","none"],w=S=>{let $=B("x",t[0].dataType,f.length,d),b=B("scale_shift",1,_.length,2),T=K("output",t[0].dataType,f.length,d),k=[$,b,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...Z(f,_,f)]}),getShaderSource:w},{inputs:[t[0],c]})},nd=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],o=R.sizeFromDimension(i,1)/s,l=xe(s),d=R.size(n)/l,h=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],c=["type","type"],f=!1,_=[0,i.length-1];for(let $=0;$<i.length-2;$++)f=f||i[$+1]!==1,_.push($+1);f=f&&i[i.length-1]!==1;let y=f?e.compute(Ne(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},($,b)=>i[_[b]])),w=cn(e,y,t[1],t[2],a,o,s,r.epsilon),S=$=>{let b=Ee(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,k=z=>{let v=z===0?"x":"y",M=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${M}(scale.${v}))`;case 2:return`vec2<${b}>(${M}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${b}>(${M}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${l}`)}},I=B("input",t[0].dataType,t[0].dims,l),C=K("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:S},{inputs:[t[0],w]})},mf=(e,t)=>{t.format==="NHWC"?nd(e,e.inputs,t):id(e,e.inputs,t)}}),ad,sd,gf,Ly=W(()=>{"use strict";re(),ie(),ne(),ad=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},sd=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],o=n,l=R.normalizeAxis(t.axis,n.length),d=R.sizeToDimension(n,l),h=R.sizeFromDimension(n,l),c=R.size(a.dims),f=s?R.size(s.dims):0;if(c!==h||s&&f!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${f}`);let _=[];for(let I=0;I<n.length;++I)I<l?_.push(n[I]):_.push(1);let y=xe(h),w=["type","type"],S=[{type:12,data:d},{type:1,data:h},{type:12,data:Math.floor(h/y)},{type:1,data:t.epsilon}];s&&w.push("type");let $=r>1,b=r>2,T=I=>{let C=Ee(e[0].dataType),z=[B("x",e[0].dataType,e[0].dims,y),B("scale",a.dataType,a.dims,y)];s&&z.push(B("bias",s.dataType,s.dims,y)),z.push(K("output",e[0].dataType,o,y)),$&&z.push(K("mean_data_output",1,_)),b&&z.push(K("inv_std_output",1,_));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(v).declareVariables(...z)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Rn("f32",y)};
    var mean_square_vector = ${Rn("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Gt(C,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${$t("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${$t("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Gt(C,y,"x[j + offset]")};
      let f32scale = ${Gt(C,y,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Gt(C,y,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return $&&k.push({dims:_,dataType:1}),b&&k.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:T}},gf=(e,t)=>{ad(e.inputs),e.compute(sd(e.inputs,t,e.outputCount))}}),od,yf,Wy=W(()=>{"use strict";ie(),fa(),ma(),od=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},yf=e=>{od(e.inputs);let t=Ht.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(ha(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=R.size(e.inputs[0].dims.slice(0,-2)),s=R.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,a,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,a,r],h=[o,l];e.compute(Qr(h,{activation:""},t,d),{inputs:h})}else e.compute(Qr(e.inputs,{activation:""},t))}}}),ud,ld,dd,_f,bf,qy=W(()=>{"use strict";re(),ie(),Se(),ne(),ud=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!R.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(R.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(R.size(l)!==d)throw new Error("zeroPoints input size error.")}},ld=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,h=e[0].dataType,c=xe(t.k),f=xe(d),_=xe(s),y=o.concat([n,s]),w=n>1&&s/_%2===0?2:1,S=R.size(y)/_/w,$=64,b=[],T=[l,n,a/c],k=R.convertShape(e[1].dims).slice();k.splice(-1,1,d/f),b.push(...Z(T)),b.push(...Z(k)),b.push(...Z(e[2].dims)),e.length===4&&b.push(...Z(R.convertShape(e[3].dims)));let I=[l,n,s/_];b.push(...Z(I));let C=z=>{let v=T.length,M=B("a",e[0].dataType,v,c),P=B("b",12,k.length,f),j=B("scales",e[2].dataType,e[2].dims.length),V=[M,P,j],L=e.length===4?B("zero_points",12,e[3].dims.length):void 0;L&&V.push(L);let O=I.length,N=K("output",e[0].dataType,O,_),H=Ee(e[0].dataType),Q=(()=>{switch(c){case 1:return`array<${H}, 8>`;case 2:return`mat4x2<${H}>`;case 4:return`mat2x4<${H}>`;default:throw new Error(`${c}-component is not supported.`)}})(),J=Math.floor(32/t.bits),te=Math.floor(J/8),ae=()=>{let Y="";for(let F=0;F<te;F++){let ke=F*t.bits*4,Ae=ke+t.bits;Y+=`
          // reuse a data (pass ${F})
            var input_offset${F>0?F:""} = ${F===0?M.indicesToOffset(`${M.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${F>0?F:""}: ${Q};
            for (var j${F>0?F:""}: u32 = 0; j${F>0?F:""} < ${8/c}; j${F>0?F:""}++) {
              a_data${F>0?F:""}[j${F>0?F:""}] = ${M.getByOffset(`input_offset${F>0?F:""}`)};
              input_offset${F>0?F:""}++;
            }
          `;for(let $e=0;$e<_*w;$e++)Y+=`
            b_value = ${f===1?`b${$e}_data`:`b${$e}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${F*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ke}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ae}u) & b_mask);`}
            b_quantized_values = ${Q}(${Array.from({length:4},(Oe,me)=>`${H}(b_value_lower[${me}]), ${H}(b_value_upper[${me}])`).join(", ")});
            b_dequantized_values = ${c===1?`${Q}(${Array.from({length:8},(Oe,me)=>`(b_quantized_values[${me}] - ${L?`zero_point${$e}`:"zero_point"}) * scale${$e}`).join(", ")});`:`(b_quantized_values - ${Q}(${Array(8).fill(`${L?`zero_point${$e}`:"zero_point"}`).join(",")})) * scale${$e};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor($e/_)}]${_>1?`[${$e%_}]`:""} += ${Array.from({length:8/c},(Oe,me)=>`${c===1?`a_data${F>0?F:""}[${me}] * b_dequantized_values[${me}]`:`dot(a_data${F>0?F:""}[${me}], b_dequantized_values[${me}])`}`).join(" + ")};
          `}return Y},U=()=>{let Y=`
            var col_index = col * ${_};
            ${L?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${H}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let F=0;F<_*w;F++)Y+=`
            let scale${F} = ${j.getByOffset("col_index * nBlocksPerCol + block")};
            ${L?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${L.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${F} = ${H}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Y},ee=()=>{let Y=`col_index = col * ${_};`;for(let F=0;F<_*w;F++)Y+=`
            let b${F}_data = ${P.getByIndices(`${P.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Y+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,Y};return`
        var<workgroup> workgroup_shared: array<${N.type.value}, ${w*$}>;
        ${z.declareVariables(...V,N)}
        ${z.mainStart([$,1,1])}
          let output_indices = ${N.offsetToIndices(`(global_idx / ${$}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${U()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${ee()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${ae()}
                word_offset += ${J/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${N.type.value} = ${N.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${N.setByIndices(`${N.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${f};${_};${w};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:S},programUniforms:b}),getShaderSource:C}},dd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,h=e[0].dataType,c=xe(t.k),f=xe(d),_=o.concat([n,s]),y=128,w=s%8===0?8:s%4===0?4:1,S=y/w,$=Math.floor(32/t.bits),b=S*f*$,T=b/c,k=b/t.blockSize,I=R.size(_)/w,C=[],z=[l,n,a/c],v=R.convertShape(e[1].dims).slice();v.splice(-1,1,d/f),C.push(...Z(z)),C.push(...Z(v)),C.push(...Z(e[2].dims)),e.length===4&&C.push(...Z(R.convertShape(e[3].dims)));let M=[l,n,s];C.push(...Z(M));let P=j=>{let V=z.length,L=B("a",e[0].dataType,V,c),O=B("b",12,v.length,f),N=B("scales",e[2].dataType,e[2].dims.length),H=[L,O,N],Q=e.length===4?B("zero_points",12,e[3].dims.length):void 0;Q&&H.push(Q);let J=M.length,te=K("output",e[0].dataType,J),ae=Ee(e[0].dataType),U=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${ae}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ae}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ae}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ae}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${L.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${te.type.value}, ${S}>, ${w}>;
        ${j.declareVariables(...H,te)}
        ${j.mainStart([S,w,1])}
          let output_indices = ${te.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${L.getByIndices(`${L.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${L.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${Q?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ae}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ae}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${N.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let ee=Math.floor($/8),Y="";for(let F=0;F<ee;F++){let ke=F*t.bits*4,Ae=ke+t.bits;Y+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${F*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ke}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ae}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ae}>(${Array.from({length:4},($e,Oe)=>`${ae}(b_value_lower[${Oe}]), ${ae}(b_value_upper[${Oe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ae}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},($e,Oe)=>`${`dot(a_data${Oe}, b_dequantized_values[${Oe}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return Y})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${te.type.value} = ${te.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${te.setByIndices(`${te.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${f};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:h}],dispatchGroup:{x:I},programUniforms:C}),getShaderSource:P}},_f=(e,t)=>{ud(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(dd(e.inputs,t)):e.compute(ld(e.inputs,t))},bf=e=>he(e)}),pd,cd,hd,fd,md,gd,yd,_d,wf,Vy=W(()=>{"use strict";re(),ie(),ne(),pd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},cd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${X("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${X("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},hd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${X("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${X("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${X("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},fd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${X("uniforms.x_shape",n,t)})) {
                  k = i32(${X("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${X("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},md=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${X("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${X("uniforms.x_shape",n,t)})) {
                  k -= i32(${X("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${X("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},gd=(e,t,r)=>{switch(r.mode){case 0:return cd(e,t,r.pads.length);case 1:return hd(e,t,r.pads.length);case 2:return fd(e,t,r.pads.length);case 3:return md(e,t,r.pads.length);default:throw new Error("Invalid mode")}},yd=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=R.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...Z(e[0].dims,r));let o=["rank"],l=d=>{let h=K("output",e[0].dataType,r.length),c=B("x",e[0].dataType,i.length),f=c.type.value,_=gd(h,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?f:"f32"}),`
            ${d.registerUniforms(y).declareVariables(c,h)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:a}),getShaderSource:l}},_d=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)a[Number(o[l])]=Number(r[l]),a[Number(o[l])+n]=Number(r[l+o.length])}else r.forEach((o,l)=>a[Number(l)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},wf=(e,t)=>{pd(e.inputs);let r=_d(e.inputs,t);e.compute(yd(e.inputs,r),{inputs:[0]})}}),sr,hn,fn,mn,gn,bd,wd,yn,_n,$f,vf,bn,xf,Sf,wn,Tf,kf,If,Ef,Gy=W(()=>{"use strict";We(),re(),ie(),ne(),sr=e=>{if(ge.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},hn=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();Xr.adjustPoolAttributes(r,n,s,o,l,d);let h=Xr.computePoolOutputShape(r,n,o,l,s,d,t.autoPad,t.ceilMode),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let f=h.slice();return f.push(f.splice(1,1)[0]),[c,i?f:h]},fn=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),n=R.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(d+h);a.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:h}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];f=!!(w+S),a.push({type:12,data:_},{type:12,data:y},{type:12,data:w},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,f]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=R.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,h)=>d+h);return[a,s,!!l,!1,!1]}},mn=(e,t,r,i,n,a,s,o,l,d,h,c)=>{let f=n.format==="NHWC",_=t.type.value,y=K("output",t.type.tensor,i);if(n.kernelShape.length<=2){let w="",S="",$="",b=r-(f?2:1);if(h?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let T=r-(f?3:2);c?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${_}(${o});
              var pad = 0;
              ${S}
              ${w}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=n.kernelShape.length,S=n.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${_}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${X("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${X("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${X("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${X("uniforms.pads","j - 2u",S)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},gn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,bd=e=>`${gn(e)};${e.countIncludePad}`,wd=e=>`${gn(e)};${e.storageOrder};${e.dilations}`,yn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),_n=(e,t,r,i)=>{let[n,a]=hn(t,i,r),s=B("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[h,c,f,_,y]=fn(a,n);h.push(...Z(t.dims,a));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${f};${_};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:h}),getShaderSource:S=>mn(S,s,t.dims.length,a.length,n,l,d,0,c,f,_,y)}},$f=e=>{let t=e.count_include_pad!==0,r=yn(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:bd(i)}},vf=(e,t)=>{sr(e.inputs),e.compute(_n("AveragePool",e.inputs[0],!1,t))},bn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},xf=e=>{let t=e.format;return{format:t,...bn,cacheKey:t}},Sf=(e,t)=>{sr(e.inputs),e.compute(_n("GlobalAveragePool",e.inputs[0],!0,t))},wn=(e,t,r,i)=>{let[n,a]=hn(t,i,r),s=`
      value = max(x_val, value);
    `,o="",l=B("x",t.dataType,t.dims.length),d=["rank"],[h,c,f,_,y]=fn(a,n);return h.push(...Z(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${f};${_};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:h}),getShaderSource:w=>mn(w,l,t.dims.length,a.length,n,s,o,t.dataType===10?-65504:-1e5,c,f,_,y)}},Tf=(e,t)=>{sr(e.inputs),e.compute(wn("MaxPool",e.inputs[0],!1,t))},kf=e=>{let t=e.storage_order,r=e.dilations,i=yn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:wd(n)}},If=e=>{let t=e.format;return{format:t,...bn,cacheKey:t}},Ef=(e,t)=>{sr(e.inputs),e.compute(wn("GlobalMaxPool",e.inputs[0],!0,t))}}),$d,vd,Cf,zf,Fy=W(()=>{"use strict";re(),ie(),Se(),ne(),$d=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},vd=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,o=R.size(a),l=i===3||i===2,d=l?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,f=c?l?[Math.ceil(R.size(c.dims)/4)]:c.dims:void 0,_=h.length===0||h.length===1&&h[0]===1,y=_===!1&&h.length===1,w=xe(o),S=_&&(!l||w===4),$=S?w:1,b=S&&!l?w:1,T=B("input",l?12:i,d.length,b),k=B("scale",s,h.length),I=c?B("zero_point",l?12:i,f.length):void 0,C=K("output",s,a.length,$),z=[T,k];I&&z.push(I);let v=[d,h];c&&v.push(f);let M=[{type:12,data:o/$},{type:12,data:r},{type:12,data:t.blockSize},...Z(...v,a)],P=j=>{let V=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${j.registerUniforms(V).declareVariables(...z,C)}
      ${j.mainStart()}
          ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${k.getByOffset("0")}`:y?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?_?l?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:y?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:P,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:M})}},Cf=(e,t)=>{$d(e.inputs,t),e.compute(vd(e.inputs,t))},zf=e=>he({axis:e.axis,blockSize:e.blockSize})}),xd,Sd,Af,Hy=W(()=>{"use strict";We(),re(),ne(),xd=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},Sd=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...Z(a)],l=d=>{let h=K("output",i,a.length),c=h.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${d.registerUniforms(f).declareVariables(h)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Af=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ge.webgpu.validateInputContent&&xd(t,r,i),e.compute(Sd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Td,kd,Of,Rf,jy=W(()=>{"use strict";re(),ie(),Se(),ne(),Td=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},kd=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(R.sizeToDimension(i,i.length-1)/a),o=i[i.length-1],l=R.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...Z(e[1].dims,e[2].dims,n)],h=c=>{let f=B("indices",e[1].dataType,e[1].dims.length),_=B("updates",e[2].dataType,e[2].dims.length,a),y=t.reduction!=="none"&&t.reduction!==""?ic("output",e[0].dataType,n.length):K("output",e[0].dataType,n.length,a);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,_,y)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Td(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:h}},Of=e=>he({reduction:e.reduction}),Rf=(e,t)=>{e.compute(kd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Id,Ed,Cd,$n,zd,Ad,Od,Rd,Bd,Dd,Md,Nd,vn,Pd,Ud,Ld,Wd,qd,Bf,Df,Ky=W(()=>{"use strict";re(),ie(),Se(),ne(),Id=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ed=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},Cd=(e,t,r,i,n,a)=>{let[s,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(h=>i.push(h)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Id(i,t),t.axes.length>0&&Ed(i,t.axes,d).forEach((h,c)=>i[c]=h)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(h=>n.push(Number(h))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},$n=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,zd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${$n("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${$n("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ad=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Od=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},Rd=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},Bd=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},Dd=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${X("uniforms.scales","i",i)};
        var roi_low = ${X("uniforms.roi","i",n)};
        var roi_hi = ${X("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${X("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Md=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${X("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${X("uniforms.roi","i",a)};
          var roi_hi = ${X("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${X("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Nd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${X("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,vn=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Pd=(e,t,r,i,n)=>{let[a,s,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${vn(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Ud=(e,t,r,i,n,a,s,o,l,d)=>{let h=r.length===2,c=!0,[f,_]=h?[0,1]:c?[2,3]:[1,2],y=e.type.value,w=S=>{let $=S===f?"row":"col";return`
      fn ${$}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",S)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[S]},
        ${i[S]}, ${r[S]}, ${a[S]}, ${a[S]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[S]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${$}: ${y} = originalIdx + ${y}(i);
          if (${$} < 0 || ${$} >= ${r[S]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${$} = max(0, min(${$}, ${r[S]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",S,`u32(${$})`)};
          data[i + 1] = ${S===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(f)};
    ${w(_)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Ld=(e,t,r,i,n)=>{let[a,s,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${vn(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${s}];
      var height:${h} = originalIndices[${o}];
      var width:${h} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Wd=(e,t,r,i,n,a)=>{let s=e.dims,o=Od(a,t.axes,s.length),l=Rd(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((b,T)=>b===0?1:l[T]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=Bd(s,d,t)));let h=K("output",e.dataType,l.length),c=B("input",e.dataType,s.length),f=R.size(l),_=s.length===l.length&&s.every((b,T)=>b===l[T]),y=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=c.type.value,$=b=>`
      ${_?"":`
      ${zd(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Nd(c,s)};
              ${Ad(t.nearestMode,r,S)};
              ${Md(c,h,s,l,d.length,o.length,y)};
              `;case"linear":return`
              ${Dd(h,s,l,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Pd(c,h,s,y,w)}`;if(s.length===3||s.length===5)return`${Ld(c,h,s,y,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Ud(c,h,s,l,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(c,h)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...Z(s,l)]})}},qd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Bf=(e,t)=>{let r=[],i=[],n=[],a=qd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Cd(e.inputs,t,a,r,i,n),e.compute(Wd(e.inputs[0],t,a,r,i,n),{inputs:[0]})},Df=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),Vd,Gd,Mf,Xy=W(()=>{"use strict";re(),ie(),ne(),Vd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Gd=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=R.size(a),o=a,l=s,d=a.slice(-1)[0],h=i?a.slice(0,-1).concat(1):[],c=!n&&e.length>3,f=e.length>4,_=i&&r>1,y=i&&r>2,w=r>3,S=64,$=xe(d),b=[{type:12,data:l},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],T=I=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[B("x",e[0].dataType,e[0].dims,$),B("skip",e[1].dataType,e[1].dims,$),B("gamma",e[2].dataType,e[2].dims,$)];c&&z.push(B("beta",e[3].dataType,e[3].dims,$)),f&&z.push(B("bias",e[4].dataType,e[4].dims,$)),z.push(K("output",e[0].dataType,o,$)),_&&z.push(K("mean_output",1,h)),y&&z.push(K("inv_std_output",1,h)),w&&z.push(K("input_skip_bias_sum",e[0].dataType,o,$));let v=Ee(e[0].dataType),M=Ee(1,$);return`

      ${I.registerUniforms(C).declareVariables(...z)}
      var<workgroup> sum_shared : array<${M}, ${S}>;
      var<workgroup> sum_squared_shared : array<${M}, ${S}>;

      ${I.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Gt(v,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${$t("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${$t("square_sum",$)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:o,dataType:e[0].dataType}];return r>1&&k.push({dims:h,dataType:1}),r>2&&k.push({dims:h,dataType:1}),r>3&&k.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${_};${y};${w}`,inputDependencies:e.map((I,C)=>"type")},getShaderSource:T,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},Mf=(e,t)=>{Vd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Gd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Fd,or,Hd,xn,jd,Kd,Nf,Pf,Zy=W(()=>{"use strict";re(),ie(),Se(),ne(),Fd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},or=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Hd=(e,t)=>{if(e.length>1){let r=or(e,1),i=or(e,2),n=or(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:n})}else return t},xn=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},jd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${X("uniforms.input_shape","i",r.length)};
            let steps_i = ${X("uniforms.steps","i",r.length)};
            let signs_i = ${X("uniforms.signs","i",r.length)};
            let starts_i = ${X("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Kd=(e,t)=>{let r=e[0].dims,i=R.size(r),n=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=or(e,4);a.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map(($,b)=>xn($,b,r,n,a)),o=t.ends.map(($,b)=>xn($,b,r,n,a));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let $=0;$<r.length;++$)n.includes($)||(s.splice($,0,0),o.splice($,0,r[$]),a.splice($,0,1));let l=a.map($=>Math.sign($));a.forEach(($,b,T)=>{if($<0){let k=(o[b]-s[b])/$,I=s[b],C=I+k*a[b];s[b]=C,o[b]=I,T[b]=-$}});let d=r.slice(0);n.forEach(($,b)=>{d[$]=Math.ceil((o[$]-s[$])/a[$])});let h={dims:d,dataType:e[0].dataType},c=K("output",e[0].dataType,d.length),f=B("input",e[0].dataType,e[0].dims.length),_=R.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],w=[{type:12,data:_},{type:12,data:s},{type:6,data:l},{type:12,data:a},...Z(e[0].dims,d)],S=$=>`
      ${$.registerUniforms(y).declareVariables(f,c)}
        ${jd(f,c,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},Nf=(e,t)=>{Fd(e.inputs,t);let r=Hd(e.inputs,t);e.compute(Kd(e.inputs,r),{inputs:[0]})},Pf=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),Xd,Zd,Uf,Lf,Qy=W(()=>{"use strict";re(),ie(),Se(),vt(),ne(),Xd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Zd=(e,t)=>{let r=e.inputs[0],i=r.dims,n=R.size(i),a=i.length,s=R.normalizeAxis(t.axis,a),o=s<i.length-1,l,d=[];o?(d=Array.from({length:a},(z,v)=>v),d[s]=a-1,d[a-1]=s,l=e.compute(Ne(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let h=l.dims,c=h[a-1],f=n/c,_=xe(c),y=c/_,w=64;f===1&&(w=256);let S=(z,v)=>v===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:v===2?`max(${z}.x, ${z}.y)`:v===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,$=B("x",l.dataType,l.dims,_),b=K("result",l.dataType,l.dims,_),T=$.type.value,k=Ee(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,I=z=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables($,b)}
      ${z.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${$t("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:l.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:y}]}),getShaderSource:I},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Ne(C,d),{inputs:[C]})},Uf=(e,t)=>{Xd(e.inputs),Zd(e,t)},Lf=e=>he({axis:e.axis})}),Sn,Qd,Yd,Jd,Wf,Yy=W(()=>{"use strict";re(),ie(),ne(),Sn=e=>Array.from(e.getBigInt64Array(),Number),Qd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Sn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Yd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Jd=(e,t)=>{let r=e[0].dims,i=t??Sn(e[1]),n=Yd(r,i),a=R.size(n),s=e[0].dataType,o=B("input",s,r.length),l=K("output",s,n.length),d=h=>`
      const inputShape = ${o.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(o,l)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...Z(e[0].dims,n)]}),getShaderSource:d}},Wf=e=>{Qd(e.inputs),e.compute(Jd(e.inputs),{inputs:[0]})}}),ep,tp,qf,Jy=W(()=>{"use strict";re(),ie(),ne(),ep=(e,t,r,i,n)=>{let a=K("output_data",n,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),o=B("b_data",t[2].dataType,t[2].dims.length,4),l=B("c_data",t[0].dataType,t[0].dims.length,4),d,h=(c,f,_)=>`select(${f}, ${c}, ${_})`;if(!i)d=a.setByOffset("global_idx",h(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let c=(f,_,y="")=>{let w=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,$=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${a.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,a)};
            let offset_b${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,a)};
            let offset_c${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,a)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${f}[${_}] = ${y}(${h(w,S,$)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},tp=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(R.areEqual(t,r)&&R.areEqual(r,i)),s=t,o=R.size(t);if(a){let d=Ht.calcShape(Ht.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=R.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>ep(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Z(i,t,r,s)]})}},qf=e=>{e.compute(tp(e.inputs))}}),Vf,e_=W(()=>{"use strict";hy(),la(),fy(),my(),gy(),yy(),_y(),xy(),Ty(),ky(),Iy(),Ey(),Cy(),zy(),Ay(),Oy(),Ry(),By(),Dy(),My(),Ny(),Py(),Uy(),Ly(),Wy(),qy(),uf(),Vy(),Gy(),Fy(),Hy(),jy(),ua(),Ky(),hf(),Xy(),Zy(),Qy(),pf(),Yy(),vt(),da(),Jy(),Vf=new Map([["Abs",[Oc]],["Acos",[Rc]],["Acosh",[Bc]],["Add",[mh]],["ArgMax",[Ec,Dn]],["ArgMin",[Ic,Dn]],["Asin",[Dc]],["Asinh",[Mc]],["Atan",[Nc]],["Atanh",[Pc]],["Attention",[Cc]],["AveragePool",[vf,$f]],["BatchNormalization",[zc]],["BiasAdd",[Ac]],["BiasSplitGelu",[fh]],["Cast",[Lc,Uc]],["Ceil",[qc]],["Clip",[Wc]],["Concat",[Th,kh]],["Conv",[Wn,Ln]],["ConvTranspose",[Mh,Dh]],["Cos",[Vc]],["Cosh",[Gc]],["CumSum",[Nh,Ph]],["DepthToSpace",[Uh,Lh]],["DequantizeLinear",[Cf,zf]],["DFT",[Wh,qh]],["Div",[gh]],["Einsum",[Vh,Gh]],["Elu",[Fc,pr]],["Equal",[yh]],["Erf",[Hc]],["Exp",[jc]],["Expand",[Fh]],["FastGelu",[Hh]],["Floor",[Kc]],["FusedConv",[Wn,Ln]],["Gather",[Kh,jh]],["GatherElements",[ef,Jh]],["GatherBlockQuantized",[Qh,Yh]],["GatherND",[Xh,Zh]],["Gelu",[Xc]],["Gemm",[rf,tf]],["GlobalAveragePool",[Sf,xf]],["GlobalMaxPool",[Ef,If]],["Greater",[$h]],["GreaterOrEqual",[xh]],["GridSample",[nf,af]],["GroupQueryAttention",[ff]],["HardSigmoid",[ih,rh]],["HardSwish",[nh]],["InstanceNormalization",[mf]],["LayerNormalization",[gf]],["LeakyRelu",[Zc,pr]],["Less",[vh]],["LessOrEqual",[Sh]],["Log",[ch]],["MatMul",[yf]],["MatMulNBits",[_f,bf]],["MaxPool",[Tf,kf]],["Mul",[_h]],["MultiHeadAttention",[of,sf]],["Neg",[Yc]],["Not",[Qc]],["Pad",[wf]],["Pow",[bh]],["QuickGelu",[hh,pr]],["Range",[Af]],["Reciprocal",[Jc]],["ReduceMin",[vc]],["ReduceMean",[yc]],["ReduceMax",[$c]],["ReduceSum",[Sc]],["ReduceProd",[xc]],["ReduceL1",[_c]],["ReduceL2",[bc]],["ReduceLogSum",[kc]],["ReduceLogSumExp",[wc]],["ReduceSumSquare",[Tc]],["Relu",[eh]],["Resize",[Bf,Df]],["RotaryEmbedding",[cf]],["ScatterND",[Rf,Of]],["Sigmoid",[th]],["Sin",[ah]],["Sinh",[sh]],["Slice",[Nf,Pf]],["SkipLayerNormalization",[Mf]],["Split",[lf,df]],["Sqrt",[oh]],["Softmax",[Uf,Lf]],["Sub",[wh]],["Tan",[uh]],["Tanh",[lh]],["ThresholdedRelu",[ph,pr]],["Tile",[Wf]],["Transpose",[ac,sc]],["Where",[qf]]])}),Gf,t_=W(()=>{"use strict";We(),ut(),ne(),Gf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){Ze(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Le(e.programInfo.name)}dispose(){}build(e,t){Ze(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=nc(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Le(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Ff={};Kt(Ff,{WebGpuBackend:()=>Hf});var rp,ip,np,Hf,r_=W(()=>{"use strict";We(),re(),ut(),Jp(),py(),e_(),t_(),rp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},ip=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${rp(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},np=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Hf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=o=>t.features.has(o)&&r.push(o)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new np(s),this.gpuDataManager=rc(this),this.programManager=new Gf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,na(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ze(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let n=r[i],a=n.kernelId,s=this.kernels.get(a),o=s.kernelType,l=s.kernelName,d=n.programName,h=n.inputTensorViews,c=n.outputTensorViews,f=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(S=>({dims:S.dims,dataType:ot(S.dataType)})),outputsMetadata:c.map(S=>({dims:S.dims,dataType:ot(S.dataType)})),kernelId:a,kernelType:o,kernelName:l,programName:d,startTime:y,endTime:w});else{let S="";h.forEach((b,T)=>{S+=`input[${T}]: [${b.dims}] | ${ot(b.dataType)}, `});let $="";c.forEach((b,T)=>{$+=`output[${T}]: [${b.dims}] | ${ot(b.dataType)}, `}),console.log(`[profiling] kernel "${a}|${o}|${l}|${d}" ${S}${$}start time: ${y} ns, execution time: ${w-y} ns`)}mr("GPU",`${d}::${f}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Le()}run(e,t,r,i,n,a){Ze(e.name);let s=[];for(let b=0;b<t.length;++b){let T=t[b].data;if(T===0)continue;let k=this.gpuDataManager.get(T);if(!k)throw new Error(`no GPU data for input: ${T}`);s.push(k)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),h=r.length===0?o.map((b,T)=>T):r;if(h.length!==o.length)throw new Error(`Output size ${h.length} must be equal to ${o.length}.`);let c=[],f=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(h[b])||h[b]<-3||h[b]>=a)throw new Error(`Invalid output index: ${h[b]}`);if(h[b]===-3)continue;let T=h[b]===-1,k=h[b]===-2,I=T||k?n(o[b].dataType,o[b].dims):i(h[b],o[b].dataType,o[b].dims);if(c.push(I),I.data===0)continue;let C=this.gpuDataManager.get(I.data);if(!C)throw new Error(`no GPU data for output: ${I.data}`);if(T&&this.temporaryData.push(C),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(C)}f.push(C)}if(s.length!==t.length||f.length!==c.length){if(f.length===0)return Le(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let b=0,T=[];d.forEach(z=>{let v=typeof z.data=="number"?[z.data]:z.data;if(v.length===0)return;let M=z.type===10?2:4,P,j;z.type===10?(j=v.length>4?16:v.length>2?8:v.length*M,P=v.length>4?16:M*v.length):(j=v.length<=2?v.length*M:16,P=16),b=Math.ceil(b/j)*j,T.push(b);let V=z.type===10?8:4;b+=v.length>4?Math.ceil(v.length/V)*P:v.length*M});let k=16;b=Math.ceil(b/k)*k;let I=new ArrayBuffer(b);d.forEach((z,v)=>{let M=T[v],P=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(I,M,P.length).set(P);else if(z.type===12)new Uint32Array(I,M,P.length).set(P);else if(z.type===10)new Uint16Array(I,M,P.length).set(P);else if(z.type===1)new Float32Array(I,M,P.length).set(P);else throw new Error(`Unsupported uniform type: ${ot(z.type)}`)});let C=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,I,0,b),this.gpuDataManager.release(C.id),_={offset:0,size:b,buffer:C.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),w=y[1]===1&&y[2]===1,S=ip(e,t,w),$=this.programManager.getArtifact(S);if($||($=this.programManager.build(e,y),this.programManager.setArtifact(S,$),de("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let b=0;b<d.length;b++){let T=d[b],k=T.type,I=typeof T.data=="number"?1:T.data.length,[C,z]=$.uniformVariablesInfo[b];if(k!==C||I!==z)throw new Error(`Uniform variable ${b} mismatch: expect type ${C} with size ${z}, got type ${k} with size ${I} in program "${$.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run($,s,f,y,_),Le(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Vf.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await On(this,e,t);return aa(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),jf={};Kt(jf,{init:()=>Kf});var Wr,ap,Kf,i_=W(()=>{"use strict";re(),ut(),ie(),dy(),Wr=class Xf{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new Xf(this.module,this.dataType,this.data,t)}},ap=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let o=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*n++,a)),h=Number(e.getValue(i*n++,"*")),c=Number(e.getValue(i*n++,a)),f=[];for(let _=0;_<c;_++)f.push(Number(e.getValue(i*n++,a)));o.push(new Wr(e,d,h,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],n=(s,o,l)=>new Wr(this.module,o,this.output(s,l),l),a=(s,o)=>{let l=Rt(s,o);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Wr(this.module,s,d,o)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Kf=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(r_(),fr(Ff)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,d,h=!1)=>{if(h)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(o),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(l),c)}},async(o,l,d)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>s.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,d,h)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let c=new ap(t,s,Number(l));return s.computeKernel(Number(o),c,h)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new tc(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,l,d,h)=>a.ensureTensor(s,o,l,d,h),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),sp,ga,ya,gt,op,Tn,Jr,_a,ba,kn,wa,$a,va,Zf=W(()=>{"use strict";We(),oy(),uy(),re(),Pt(),ea(),Xp(),sp=(e,t)=>{_e()._OrtInit(e,t)!==0&&fe("Can't initialize onnxruntime.")},ga=async e=>{sp(e.wasm.numThreads,Kr(e.logLevel))},ya=async(e,t)=>{_e().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(i_(),fr(jf)).init;t==="webgpu"&&await i("webgpu",_e(),e,r),t==="webnn"&&await i("webnn",_e(),e)}},gt=new Map,op=e=>{let t=_e(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&fe("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},Tn=(e,t)=>{let r=_e(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&fe("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let l=r.HEAP32[n/4];if(l===0)return[o,0];let d=r.HEAPU32[n/4+1],h=[];for(let c=0;c<d;c++){let f=Number(r.getValue(n+8+c*a,"*"));h.push(f!==0?r.UTF8ToString(f):Number(r.getValue(n+8+(c+d)*a,"*")))}return[o,l,h]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},Jr=e=>{let t=_e(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},_a=async(e,t)=>{let r,i,n=_e();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Jr(e);let a=0,s=0,o=0,l=[],d=[],h=[];try{if([s,l]=await Kp(t),t?.externalData&&n.mountExternalData){let k=[];for(let I of t.externalData){let C=typeof I=="string"?I:I.path,z=typeof I=="string"?I:I.data;k.push(ia(z).then(v=>{n.mountExternalData(C,v)}))}await Promise.all(k)}for(let k of t?.executionProviders??[])if((typeof k=="string"?k:k.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof k!="string"){let I=k,C=I?.context,z=I?.gpuDevice,v=I?.deviceType,M=I?.powerPreference;C?n.currentContext=C:z?n.currentContext=await n.webnnCreateMLContext(z):n.currentContext=await n.webnnCreateMLContext({deviceType:v,powerPreference:M})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),n.webgpuOnCreateSession?.(a),a===0&&fe("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[c,f]=op(a),_=!!t?.enableGraphCapture,y=[],w=[],S=[],$=[],b=[];for(let k=0;k<c;k++){let[I,C,z]=Tn(a,k);I===0&&fe("Can't get an input name."),d.push(I);let v=n.UTF8ToString(I);y.push(v),S.push(C===0?{name:v,isTensor:!1}:{name:v,isTensor:!0,type:ot(C),shape:z})}for(let k=0;k<f;k++){let[I,C,z]=Tn(a,k+c);I===0&&fe("Can't get an output name."),h.push(I);let v=n.UTF8ToString(I);w.push(v),$.push(C===0?{name:v,isTensor:!1}:{name:v,isTensor:!0,type:ot(C),shape:z});{if(_&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let M=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[v]??"cpu",P=n.webnnIsGraphOutput;if(M==="cpu"&&P&&P(a,v)){b.push("ml-tensor-cpu-output");continue}if(M!=="cpu"&&M!=="cpu-pinned"&&M!=="gpu-buffer"&&M!=="ml-tensor")throw new Error(`Not supported preferred output location: ${M}.`);if(_&&M!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${M}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(M)}}let T=null;return b.some(k=>k==="gpu-buffer"||k==="ml-tensor"||k==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(a),o===0&&fe("Can't create IO binding."),T={handle:o,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(k=>k==="ml-tensor-cpu-output"?"ml-tensor":k).map(k=>An(k))}),gt.set(a,[a,d,h,T,_,!1]),[a,y,w,S,$]}catch(c){throw d.forEach(f=>n._OrtFree(f)),h.forEach(f=>n._OrtFree(f)),o!==0&&n._OrtReleaseBinding(o)!==0&&fe("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&fe("Can't release session."),c}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&fe("Can't release session options."),l.forEach(c=>n._free(c)),n.unmountExternalData?.()}},ba=e=>{let t=_e(),r=gt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&fe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&fe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(l=>t._OrtFree(l)),a.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&fe("Can't release session."),gt.delete(e)},kn=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let o=_e(),l=o.PTR_SIZE,d=e[0],h=e[1],c=e[3],f=c,_,y;if(d==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let $=e[2].gpuBuffer;y=Rt(Ot(d),h);{let b=o.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=b(i,a,$,y)}}else if(c==="ml-tensor"){let $=e[2].mlTensor;y=Rt(Ot(d),h);let b=o.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=b(i,$,Ot(d),h)}else{let $=e[2];if(Array.isArray($)){y=l*$.length,_=o._malloc(y),r.push(_);for(let b=0;b<$.length;b++){if(typeof $[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);o.setValue(_+b*l,Ke($[b],r),"*")}}else{let b=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(d!=="string"&&b&&T){let k=o.UTF8ToString(n);if(b(i,k)||T(i,k)){let I=Ot(d);y=Rt(I,h),f="ml-tensor";let C=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!C||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await C(i,I,h);z(v,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),_=v}else y=$.byteLength,_=o._malloc(y),r.push(_),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),_)}else y=$.byteLength,_=o._malloc(y),r.push(_),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),_)}}let w=o.stackSave(),S=o.stackAlloc(4*h.length);try{h.forEach((b,T)=>o.setValue(S+T*l,b,l===4?"i32":"i64"));let $=o._OrtCreateTensor(Ot(d),_,y,S,h.length,An(f));$===0&&fe(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push($)}finally{o.stackRestore(w)}},wa=async(e,t,r,i,n,a)=>{let s=_e(),o=s.PTR_SIZE,l=gt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],h=l[1],c=l[2],f=l[3],_=l[4],y=l[5],w=t.length,S=i.length,$=0,b=[],T=[],k=[],I=[],C=[],z=s.stackSave(),v=s.stackAlloc(w*o),M=s.stackAlloc(w*o),P=s.stackAlloc(S*o),j=s.stackAlloc(S*o);try{[$,b]=jp(a),bt("wasm prepareInputOutputTensor");for(let N=0;N<w;N++)await kn(r[N],T,I,e,h[t[N]],t[N],_);for(let N=0;N<S;N++)await kn(n[N],k,I,e,c[i[N]],w+i[N],_);wt("wasm prepareInputOutputTensor");for(let N=0;N<w;N++)s.setValue(v+N*o,T[N],"*"),s.setValue(M+N*o,h[t[N]],"*");for(let N=0;N<S;N++)s.setValue(P+N*o,k[N],"*"),s.setValue(j+N*o,c[i[N]],"*");if(f&&!y){let{handle:N,outputPreferredLocations:H,outputPreferredLocationsEncoded:Q}=f;if(h.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${h.length}).`);bt("wasm bindInputsOutputs");for(let J=0;J<w;J++){let te=t[J];await s._OrtBindInput(N,h[te],T[J])!==0&&fe(`Can't bind input[${J}] for session=${e}.`)}for(let J=0;J<S;J++){let te=i[J];n[J]?.[3]?(C.push(k[J]),s._OrtBindOutput(N,c[te],k[J],0)!==0&&fe(`Can't bind pre-allocated output[${J}] for session=${e}.`)):s._OrtBindOutput(N,c[te],0,Q[te])!==0&&fe(`Can't bind output[${J}] to ${H[J]} for session=${e}.`)}wt("wasm bindInputsOutputs"),gt.set(e,[d,h,c,f,_,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let V;f?V=await s._OrtRunWithBinding(d,f.handle,S,P,$):V=await s._OrtRun(d,M,v,w,j,S,P,$),V!==0&&fe("failed to call OrtRun().");let L=[],O=[];bt("wasm ProcessOutputTensor");for(let N=0;N<S;N++){let H=Number(s.getValue(P+N*o,"*"));if(H===k[N]||C.includes(k[N])){L.push(n[N]),H!==k[N]&&s._OrtReleaseTensor(H)!==0&&fe("Can't release tensor.");continue}let Q=s.stackSave(),J=s.stackAlloc(4*o),te=!1,ae,U=0;try{s._OrtGetTensorData(H,J,J+o,J+2*o,J+3*o)!==0&&fe(`Can't access output tensor data on index ${N}.`);let ee=o===4?"i32":"i64",Y=Number(s.getValue(J,ee));U=s.getValue(J+o,"*");let F=s.getValue(J+o*2,"*"),ke=Number(s.getValue(J+o*3,ee)),Ae=[];for(let me=0;me<ke;me++)Ae.push(Number(s.getValue(F+me*o,ee)));s._OrtFree(F)!==0&&fe("Can't free memory for tensor dims.");let $e=Ae.reduce((me,we)=>me*we,1);ae=ot(Y);let Oe=f?.outputPreferredLocations[i[N]];if(ae==="string"){if(Oe==="gpu-buffer"||Oe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let me=[];for(let we=0;we<$e;we++){let Re=s.getValue(U+we*o,"*"),yr=s.getValue(U+(we+1)*o,"*"),Qe=we===$e-1?void 0:yr-Re;me.push(s.UTF8ToString(Re,Qe))}L.push([ae,Ae,me,"cpu"])}else if(Oe==="gpu-buffer"&&$e>0){let me=s.jsepGetBuffer;if(!me)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let we=me(U),Re=Rt(Y,$e);if(Re===void 0||!ta(ae))throw new Error(`Unsupported data type: ${ae}`);te=!0,L.push([ae,Ae,{gpuBuffer:we,download:s.jsepCreateDownloader(we,Re,ae),dispose:()=>{s._OrtReleaseTensor(H)!==0&&fe("Can't release tensor.")}},"gpu-buffer"])}else if(Oe==="ml-tensor"&&$e>0){let me=s.webnnEnsureTensor,we=s.webnnIsGraphInputOutputTypeSupported;if(!me||!we)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Rt(Y,$e)===void 0||!ra(ae))throw new Error(`Unsupported data type: ${ae}`);if(!we(e,ae,!1))throw new Error(`preferredLocation "ml-tensor" for ${ae} output is not supported by current WebNN Context.`);let Re=await me(e,U,Y,Ae,!1);te=!0,L.push([ae,Ae,{mlTensor:Re,download:s.webnnCreateMLTensorDownloader(U,ae),dispose:()=>{s.webnnReleaseTensorId(U),s._OrtReleaseTensor(H)}},"ml-tensor"])}else if(Oe==="ml-tensor-cpu-output"&&$e>0){let me=s.webnnCreateMLTensorDownloader(U,ae)(),we=L.length;te=!0,O.push((async()=>{let Re=[we,await me];return s.webnnReleaseTensorId(U),s._OrtReleaseTensor(H),Re})()),L.push([ae,Ae,[],"cpu"])}else{let me=ri(ae),we=new me($e);new Uint8Array(we.buffer,we.byteOffset,we.byteLength).set(s.HEAPU8.subarray(U,U+we.byteLength)),L.push([ae,Ae,we,"cpu"])}}finally{s.stackRestore(Q),ae==="string"&&U&&s._free(U),te||s._OrtReleaseTensor(H)}}f&&!_&&(s._OrtClearBoundOutputs(f.handle)!==0&&fe("Can't clear bound outputs."),gt.set(e,[d,h,c,f,_,!1]));for(let[N,H]of await Promise.all(O))L[N][2]=H;return wt("wasm ProcessOutputTensor"),L}finally{s.webnnOnRunEnd?.(d),s.stackRestore(z),T.forEach(V=>s._OrtReleaseTensor(V)),k.forEach(V=>s._OrtReleaseTensor(V)),I.forEach(V=>s._free(V)),$!==0&&s._OrtReleaseRunOptions($),b.forEach(V=>s._free(V))}},$a=e=>{let t=_e(),r=gt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&fe("Can't get an profile file name."),t._OrtFree(n)},va=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),yt,Ue,Vt,ur,lr,qr,In,Vr,Ct,zt,up,Qf,Yf,Jf,em,tm,rm,im,nm=W(()=>{"use strict";We(),Zf(),Pt(),Yn(),yt=()=>!!ge.wasm.proxy&&typeof document<"u",Vt=!1,ur=!1,lr=!1,Vr=new Map,Ct=(e,t)=>{let r=Vr.get(e);r?r.push(t):Vr.set(e,[t])},zt=()=>{if(Vt||!ur||lr||!Ue)throw new Error("worker not ready")},up=e=>{switch(e.data.type){case"init-wasm":Vt=!1,e.data.err?(lr=!0,In[1](e.data.err)):(ur=!0,In[0]()),qr&&(URL.revokeObjectURL(qr),qr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Vr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Qf=async()=>{if(!ur){if(Vt)throw new Error("multiple calls to 'initWasm()' detected.");if(lr)throw new Error("previous call to 'initWasm()' failed.");if(Vt=!0,yt())return new Promise((e,t)=>{Ue?.terminate(),Fp().then(([r,i])=>{try{Ue=i,Ue.onerror=a=>t(a),Ue.onmessage=up,In=[e,t];let n={type:"init-wasm",in:ge};!n.in.wasm.wasmPaths&&(r||zn)&&(n.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-D-icqfN-.wasm",import.meta.url).href,import.meta.url).href}),Ue.postMessage(n),qr=r}catch(n){t(n)}},t)});try{await Jn(ge.wasm),await ga(ge),ur=!0}catch(e){throw lr=!0,e}finally{Vt=!1}}},Yf=async e=>{if(yt())return zt(),new Promise((t,r)=>{Ct("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ge}};Ue.postMessage(i)});await ya(ge,e)},Jf=async e=>yt()?(zt(),new Promise((t,r)=>{Ct("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ue.postMessage(i,[e.buffer])})):Jr(e),em=async(e,t)=>{if(yt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return zt(),new Promise((r,i)=>{Ct("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Ue.postMessage(n,a)})}else return _a(e,t)},tm=async e=>{if(yt())return zt(),new Promise((t,r)=>{Ct("release",[t,r]);let i={type:"release",in:e};Ue.postMessage(i)});ba(e)},rm=async(e,t,r,i,n,a)=>{if(yt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return zt(),new Promise((s,o)=>{Ct("run",[s,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:a}};Ue.postMessage(d,va(l))})}else return wa(e,t,r,i,n,a)},im=async e=>{if(yt())return zt(),new Promise((t,r)=>{Ct("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ue.postMessage(i)});$a(e)}}),En,lp,am,n_=W(()=>{"use strict";We(),nm(),re(),Qn(),Xp(),En=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},lp=e=>{switch(e[3]){case"cpu":return new Xe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ta(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Xe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!ra(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Xe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},am=class{async fetchModelAndCopyToWasmMemory(e){return Jf(await ia(e))}async loadModel(e,t){Ze();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await em(r,t),Le()}async dispose(){return tm(this.sessionId)}async run(e,t,r){Ze();let i=[],n=[];Object.entries(e).forEach(c=>{let f=c[0],_=c[1],y=this.inputNames.indexOf(f);if(y===-1)throw new Error(`invalid input '${f}'`);i.push(_),n.push(y)});let a=[],s=[];Object.entries(t).forEach(c=>{let f=c[0],_=c[1],y=this.outputNames.indexOf(f);if(y===-1)throw new Error(`invalid output '${f}'`);a.push(_),s.push(y)});let o=i.map((c,f)=>En(c,()=>`input "${this.inputNames[n[f]]}"`)),l=a.map((c,f)=>c?En(c,()=>`output "${this.outputNames[s[f]]}"`):null),d=await rm(this.sessionId,n,o,s,l,r),h={};for(let c=0;c<d.length;c++)h[this.outputNames[s[c]]]=a[c]??lp(d[c]);return Le(),h}startProfiling(){}endProfiling(){im(this.sessionId)}}}),sm={};Kt(sm,{OnnxruntimeWebAssemblyBackend:()=>Gn,initializeFlags:()=>Vn,wasmBackend:()=>om});var Vn,Gn,om,a_=W(()=>{"use strict";We(),nm(),n_(),Vn=()=>{(typeof ge.wasm.initTimeout!="number"||ge.wasm.initTimeout<0)&&(ge.wasm.initTimeout=0);let e=ge.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ge.wasm.simd=!1),typeof ge.wasm.proxy!="boolean"&&(ge.wasm.proxy=!1),typeof ge.wasm.trace!="boolean"&&(ge.wasm.trace=!1),typeof ge.wasm.numThreads!="number"||!Number.isInteger(ge.wasm.numThreads)||ge.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ge.wasm.numThreads=1;else{let t=typeof navigator>"u"?G0("node:os").cpus().length:navigator.hardwareConcurrency;ge.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Gn=class{async init(e){Vn(),await Qf(),await Yf(e)}async createInferenceSessionHandler(e,t){let r=new am;return await r.loadModel(e,t),r}},om=new Gn});We();We();We();var s_="1.29.0",o_=Up;{let e=(a_(),fr(sm)).wasmBackend;Bt("webgpu",e,5),Bt("webnn",e,5),Bt("cpu",e,10),Bt("wasm",e,10)}Object.defineProperty(ge.versions,"web",{value:s_,enumerable:!0});const um=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return Zn},get TRACE(){return mr},get TRACE_EVENT_BEGIN(){return bt},get TRACE_EVENT_END(){return wt},get TRACE_FUNC_BEGIN(){return Ze},get TRACE_FUNC_END(){return Le},get Tensor(){return Xe},default:o_,get env(){return ge},get registerBackend(){return Bt}},Symbol.toStringTag,{value:"Module"}));let xa={verbose:!1,debug:!1,debugFolder:"out"},lm={mean:[.485,.456,.406],stdDeviation:[.229,.224,.225],maxSideLength:"auto",minimumAreaThreshold:20,paddingVertical:.4,paddingHorizontal:.6},dm={imageHeight:48,strategy:"per-line",crossLineWidthFactor:1,minimumConfidence:.5,charactersDictionary:[],maxCropSourceSideLength:2e3,mainThreadYieldMs:0,recBatchSize:6,rotateVerticalCrops:!0,spaceRecovery:!1},u_=10,l_={executionProviders:["cpu"],graphOptimizationLevel:"all",enableCpuMemArena:!0,enableMemPattern:!0,executionMode:"sequential",interOpNumThreads:0,intraOpNumThreads:0},pm="opencv",d_={engine:pm},Cn={model:{},detection:lm,recognition:dm,debugging:xa,session:l_,processing:d_};function Fn(e,...t){if(!t.length)return e;let r=t.shift();if(Gr(e)&&Gr(r)){for(let i in r)if(Object.prototype.hasOwnProperty.call(r,i)){if(i==="__proto__"||i==="constructor"||i==="prototype")continue;let n=r[i],a=e[i];Gr(n)?((!a||!Gr(a))&&(e[i]={}),Fn(e[i],n)):n!==void 0&&(e[i]=n)}}return Fn(e,...t)}async function p_(e,t={}){const{timeoutMs:r=3e5,retries:i=2}=t;let n;for(let a=0;a<=i;a++)try{let s=await fetch(e,{signal:AbortSignal.timeout(r)});if(!s.ok)throw new Error(`HTTP ${s.status} ${s.statusText}`);return await s.arrayBuffer()}catch(s){n=s,a<i&&await new Promise(o=>setTimeout(o,500*(a+1)))}throw new Error(`Failed to fetch ${e} after ${i+1} attempt(s): ${String(n)}`)}function Hn(e){return(typeof e=="string"?e:new TextDecoder("utf-8").decode(e)).split(/\r?\n/)}function Gr(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)&&!ArrayBuffer.isView(e)}function c_(e,t){return e!=="auto"?e:Math.min(1920,Math.max(960,Math.round(t*.75/32)*32))}function cm(e,t,r){let i=e,n=t,a=1;return Math.max(n,i)>r&&(a=r/(n>i?n:i),i=Math.round(i*a),n=Math.round(n*a)),{width:i,height:n,ratio:a}}function h_(e,t,r,i,n){let a=Math.round(e.height*i),s=Math.round(e.height*n),o=e.x-s,l=e.y-a;o=Math.max(0,o),l=Math.max(0,l);let d=Math.min(t,e.x+e.width+s),h=Math.min(r,e.y+e.height+a),c=d-o,f=h-l;return{x:o,y:l,width:c,height:f}}function f_(e,t,r,i){let n=e.x/t,a=e.y/t,s=e.width/t,o=e.height/t,l=Math.max(0,Math.round(n)),d=Math.max(0,Math.round(a)),h=Math.min(r-l,Math.round(s)),c=Math.min(i-d,Math.round(o));return{x:l,y:d,width:h,height:c}}function m_(e,t,r,i,n,a,s,o,l){let d=[];return e.iterate(h=>{let c=e.getRect(h);if(c.width*c.height<=s)return;let f=h_(c,t,r,o,l),_=f_(f,i,n,a);_.width>5&&_.height>5&&d.push(_)}),d}function g_(e,t,r){let i=[];for(let n of e){const{bbox:a}=n;let s={x:Math.max(0,a.x0),y:Math.max(0,a.y0),width:a.x1-a.x0,height:a.y1-a.y0};s.x+s.width>t&&(s.width=t-s.x),s.y+s.height>r&&(s.height=r-s.y),s.width>5&&s.height>5&&i.push(s)}return i}let y_=3;function __(e,t,r,i,n){let o=e.getContext("2d").getImageData(0,0,t,r).data,l=r*t,d=new Float32Array(y_*l),h=i[0]??.485,c=i[1]??.456,f=i[2]??.406,_=n[0]??.229,y=n[1]??.224,w=n[2]??.225,S=1/(255*_),$=1/(255*y),b=1/(255*w),T=h/_,k=c/y,I=f/w,C=l,z=l*2;for(let v=0,M=0;v<l;v++,M+=4){let P=o[M],j=o[M+1],V=o[M+2];d[v]=P*S-T,d[C+v]=j*$-k,d[z+v]=V*b-I}return d}function dp(e,t,r,i){let n=i(t,r),a=n.getContext("2d"),s=a.createImageData(t,r),o=s.data,l=t*r;for(let d=0;d<l;d++){let h=e[d]||0,c=Math.round(h*255),f=d*4;o[f]=c,o[f+1]=c,o[f+2]=c,o[f+3]=255}return a.putImageData(s,0,0),n}class hm{options;debugging;session;platform;engine;lastDetectionCanvas=null;constructor(t,r,i={},n={},a="opencv"){this.platform=t,this.session=r,this.options={...lm,...i},this.debugging={...xa,...n},a==="opencv"&&!this.platform.imageProcessor?this.engine="canvas-native":this.engine=a}log(t){this.debugging.verbose&&console.log(`[DetectionService] ${t}`)}async run(t){this.log("Starting text detection process");try{let r;this.platform.isCanvas(t)?r=t:this.engine==="opencv"&&this.platform.imageProcessor?r=await this.platform.imageProcessor.prepareCanvas(t):r=await this.platform.canvas.prepareCanvas(t);let i=await this.preprocessDetection(r),n=await this.runInference(i.tensor,i.width,i.height);if(!n)return console.error("Text detection failed (output tensor is null)"),[];let a=this.postprocessDetection(n,i);if(this.debugging.debug&&this.debugging.debugFolder&&this.lastDetectionCanvas)try{await this.debugDetectionCanvas(this.lastDetectionCanvas,i.width,i.height),await this.debugDetectedBoxes(r,a)}catch(s){this.log(`Debug dump failed: ${s instanceof Error?s.message:String(s)}`)}return this.log(`Detected ${a.length} text boxes in image`),a}catch(r){return console.error("Error during text detection:",r instanceof Error?r.message:String(r)),[]}}async preprocessDetection(t){const{width:r,height:i}=t;let n=c_(this.options.maxSideLength??"auto",Math.max(r,i));const{width:a,height:s,ratio:o}=cm(r,i,n);let l=Math.ceil(a/32)*32,d=Math.ceil(s/32)*32,h=this.platform.createCanvas(l,d);h.getContext("2d").drawImage(t,0,0,r,i,0,0,a,s);let f=this.options.mean??[.485,.456,.406],_=this.options.stdDeviation??[.229,.224,.225],y=__(h,l,d,f,_);return this.log(`Detection preprocessed: original(${r}x${i}), model_input(${l}x${d}), resize_ratio: ${o.toFixed(4)}, engine: ${this.engine}`),{tensor:y,width:l,height:d,resizeRatio:o,originalWidth:r,originalHeight:i}}async runInference(t,r,i){let n;try{this.log("Running detection inference..."),n=new this.platform.ort.Tensor("float32",t,[1,3,i,r]);let a={x:n},o=(await this.session.run(a))[this.session.outputNames[0]||"sigmoid_0.tmp_0"];return this.log("Detection inference complete!"),o?o.data:(console.error(`Output tensor ${this.session.outputNames[0]} not found in detection results`),null)}catch(a){throw console.error("Error during model inference:",a instanceof Error?a.message:String(a)),a}finally{n?.dispose()}}postprocessDetection(t,r,i=this.options.minimumAreaThreshold??50,n=this.options.paddingVertical||.4,a=this.options.paddingHorizontal||.6){this.log("Post-processing detection results...");const{width:s,height:o,resizeRatio:l,originalWidth:d,originalHeight:h}=r;if(this.engine==="opencv"&&this.platform.imageProcessor)return this.lastDetectionCanvas=this.debugging.debug&&this.debugging.debugFolder?dp(t,s,o,this.platform.createCanvas.bind(this.platform)):null,this.postprocessWithOpenCV(t,s,o,l,d,h,i,n,a);let c=dp(t,s,o,this.platform.createCanvas.bind(this.platform));return this.lastDetectionCanvas=c,this.postprocessWithCanvasNative(c,l,d,h,i,n,a)}postprocessWithOpenCV(t,r,i,n,a,s,o,l,d){let h=this.platform.imageProcessor,c=new h.cv.Mat(i,r,h.cv.CV_8UC1),f=c.data,_=r*i;for(let w=0;w<_;w++){let S=t[w]||0;f[w]=Math.round(Math.min(Math.max(S,0),1)*255)}let y=new h.ImageProcessor(c);try{let w=new h.Contours(y.toMat(),{mode:h.cv.RETR_LIST,method:h.cv.CHAIN_APPROX_SIMPLE}),S=m_(w,r,i,n,a,s,o,l,d);return w.destroy(),this.log(`Found ${S.length} potential text boxes (opencv)`),S}finally{y.destroy()}}postprocessWithCanvasNative(t,r,i,n,a,s,o){let d=this.platform.canvas.createProcessor(t).grayscale().threshold({thresh:0}).findRegions({foreground:"light",minArea:a,thresh:0,padding:{vertical:s,horizontal:o},scale:1/r}),h=g_(d,i,n);return this.log(`Found ${h.length} potential text boxes (canvas-native)`),h}async debugDetectionCanvas(t,r,i){let n=this.debugging.debugFolder??"";await this.platform.saveDebugImage(t,"detection-debug",n),this.log(`Probability map visualized and saved to: ${n}`)}async debugDetectedBoxes(t,r){let i=this.platform.isCanvas(t)?t:await this.platform.canvas.prepareCanvas(t),n=this.platform.createCanvas(i.width,i.height),a=n.getContext("2d");a.drawImage(i,0,0);for(let o of r){const{x:l,y:d,width:h,height:c}=o;this.platform.canvas.getToolkit().drawLine({ctx:a,x:l,y:d,width:h,height:c})}let s=this.debugging.debugFolder??"";await this.platform.saveDebugImage(n,"boxes-debug",s),this.log(`Boxes visualized and saved to: ${s}`)}}function pp(e){return e.reason instanceof Error?e.reason:new DOMException("The batch operation was aborted.","AbortError")}function b_(e){if(Symbol.asyncIterator in e)return e[Symbol.asyncIterator]();let t=e[Symbol.iterator]();return{next:()=>Promise.resolve(t.next()),return:r=>Promise.resolve(t.return?.(r)??{done:!0,value:void 0})}}async function cp(e,t,r,i){const{settle:n,signal:a}=t;let s=Math.max(1,Math.floor(t.concurrency));if(a?.aborted)throw pp(a);let o=0,l=0,d=!1,h=!1,c,f=Array.isArray(e)?e:null,_=f?null:b_(e),y=Promise.resolve(),w=async()=>{let b=y,T;y=new Promise(k=>{T=k}),await b;try{return await _.next()}finally{T()}},S=()=>{d=!0};a?.addEventListener("abort",S,{once:!0});let $=async()=>{for(;!d;){let b,T;if(f){if(o>=f.length)return;T=o++,b=f[T]}else{let k=await w();if(k.done||d)return;T=o++,b=k.value}try{let k=await r(b,T);if(d)return;i({index:T,status:"fulfilled",value:k})}catch(k){if(n)i({index:T,status:"rejected",reason:k});else{d=!0,h=!0,c=k;return}}finally{l++,t.onProgress?.(l,t.total)}}};try{await Promise.all(Array.from({length:s},()=>$()))}finally{a?.removeEventListener("abort",S),await _?.return?.()}if(a?.aborted)throw pp(a);if(h)throw c}function w_(){let e=[],t=null,r=!1,i=null,n=()=>{let a=t;t=null,a?.()};return{push(a){e.push(a),n()},close(){r=!0,n()},fail(a){i={error:a},r=!0,n()},async*drain(){for(;;){for(;e.length>0;)yield e.shift();if(i)throw i.error;if(r)return;await new Promise(a=>{t=a})}}}}async function $_(e,t,r,i){let n=e.canvas.getToolkit(),a=[];for(const[s,o]of r.entries()){let l=n.crop({bbox:{x0:o.x,y0:o.y,x1:o.x+o.width,y1:o.y+o.height},canvas:t});if(i.saveCropsTo&&e.saveImage){let d=`crop_${String(s).padStart(3,"0")}.png`;await e.saveImage(l,[i.saveCropsTo,d].join(e.pathSeparator))}i.crop&&a.push(await v_(l))}return a}async function v_(e){let t=e;if(typeof t.toBuffer=="function"){let r=t.toBuffer("image/png");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}if(typeof t.convertToBlob=="function")return(await t.convertToBlob({type:"image/png"})).arrayBuffer();if(typeof t.toBlob=="function"){let r=t.toBlob.bind(t);return(await new Promise((n,a)=>r(s=>s?n(s):a(new Error("Canvas toBlob() returned null")),"image/png"))).arrayBuffer()}throw new Error("Canvas cannot be encoded to a PNG buffer on this platform")}function x_(e){if(e.length===0)return{text:"",results:[],confidence:0};let t=e.map(i=>i.text).join(" "),r=e.reduce((i,n)=>i+n.confidence,0)/e.length;return{text:t,results:e,confidence:r}}function S_(e){if(e.length===0)return{text:"",lines:[],confidence:0};let t=[],r=[],i=e[0];if(!i)return{text:"",lines:[],confidence:0};let n=i.box.y,a=i.box.height;for(let d of e){const{box:h}=d;Math.abs(h.y-n)<a/2?(r.push(d),a=(a*(r.length-1)+h.height)/r.length):(r.sort((c,f)=>c.box.x-f.box.x),t.push(r),r=[d],n=h.y,a=h.height)}r.length>0&&(r.sort((d,h)=>d.box.x-h.box.x),t.push(r));let s=t.map(d=>d.map(h=>h.text).join(" ")).join(`
`),o=t.reduce((d,h)=>d+h.reduce((c,f)=>c+f.confidence,0),0),l=t.reduce((d,h)=>d+h.length,0);return{text:s,lines:t,confidence:l>0?o/l:0}}function fm(e){if(e.length===0)return[];let t=[...e].sort((o,l)=>o.box.y-l.box.y||o.box.x-l.box.x),r=[],i=t[0];if(!i)return[];let n=[i],a=i.box.height,s=i.box.height;for(let o=1;o<t.length;o++){let l=t[o],d=t[o-1];if(!l||!d)continue;let h=Math.abs(l.box.y-d.box.y),c=s*.5;h<=c?(n.push(l),a+=l.box.height,s=a/n.length):(n.sort((f,_)=>f.box.x-_.box.x),r.push(n),n=[l],a=l.box.height,s=l.box.height)}return n.length>0&&(n.sort((o,l)=>o.box.x-l.box.x),r.push(n)),r}let T_=4,hp=16384;function mm(e,t,r,i){let n=Math.min(...t.map(b=>b.box.x)),a=Math.min(...t.map(b=>b.box.y)),s=Math.max(...t.map(b=>b.box.x+b.box.width)),o=Math.max(...t.map(b=>b.box.y+b.box.height)),l={x:n,y:a,width:s-n,height:o-a},d=o-a,h=Math.max(1,Math.round(d*.4)),c=t.map(({box:b})=>Math.max(1,Math.round(b.width*Math.min(d/b.height,T_)))),f=c.reduce((b,T)=>b+T,0)+h*(t.length-1);if(f>hp){let b=hp/f;c=c.map(T=>Math.max(1,Math.round(T*b))),h=Math.max(1,Math.floor(h*b))}let _=c.reduce((b,T)=>b+T,0)+h*(t.length-1),y=r(_,d),w=y.getContext("2d");w.fillStyle="white",w.fillRect(0,0,_,d);let S=0,$=[];for(let b=0;b<t.length;b++){let T=t[b],k=c[b];if(!T||k===void 0)continue;const{box:I}=T;let C=i.getToolkit().crop({bbox:{x0:I.x,y0:I.y,x1:I.x+I.width,y1:I.y+I.height},canvas:e});w.drawImage(C,0,0,I.width,I.height,S,0,k,d);let z=b<t.length-1?h:0;$.push(k+z),S+=k+z}return{mergedCanvas:y,mergedBox:l,cropWidths:$}}function gm(e,t,r){let i=[...e];if(t.length!==i.length||r.length===0)return I_(e,r);let n=r.reduce((l,d)=>l+d,0),a=r.map(()=>""),s=0,o=(r[0]??0)/n;for(let l=0;l<i.length;l++){let d=t[l]??0;for(;d>=o&&s<r.length-1;)s++,o+=(r[s]??0)/n;a[s]+=i[l]??""}return a}let k_=4;function I_(e,t){if(t.length===1)return[e];let r=t.reduce((o,l)=>o+l,0),i=[...e],n=i.length>0?r/i.length:0,a=[],s=0;for(let o=0;o<t.length;o++){if(o===t.length-1){a.push(i.slice(s).join(""));break}let l=Math.min(s+Math.round((t[o]??0)/n),i.length),d=l,h=!1;for(let c=0;c<=k_&&!h;c++)for(let f of[l-c,l+c]){let _=i[f];if(f>s&&f<i.length&&_!==void 0&&/\s/.test(_)){d=f,h=!0;break}}a.push(i.slice(s,d).join("")),s=h?d+1:d}return a}function E_(e,t,r,i){let n=[...e].sort((o,l)=>t(l)-t(o)),a=[],s=[];for(let o of n){let l=!1;for(let d=0;d<a.length;d++){let h=a[d],c=s[d];if(h===void 0||c===void 0)continue;let f=i*h.length;if(c+f+t(o)<=r){h.push(o),s[d]=c+t(o),l=!0;break}}l||(a.push([o]),s.push(t(o)))}return a}class ym{cache=new Map;maxSize;constructor(t=10){this.maxSize=t}get(t){let r=this.cache.get(t);if(r!==void 0)return this.cache.delete(t),this.cache.set(t,r),r}set(t,r){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxSize){let i=this.cache.keys().next().value;i!==void 0&&this.cache.delete(i)}this.cache.set(t,r)}clear(){this.cache.clear()}static generateKey(t){let r=new Uint8Array(t);if(r.length===0)return"0_0";let i=Math.min(r.length,C_),n=r.length-1,a=0;for(let s=0;s<i;s++){let o=i===1?0:Math.round(s*n/(i-1));a=(a<<5)-a+(r[o]??0),a=a&a}return`${a}_${r.length}`}}let C_=4096,fp=new ym;class z_{options=Cn;detectionSession=null;recognitionSession=null;detector=null;recognitor=null;platform;constructor(t,r){this.platform=t,this.options=Fn({},Cn,r),this.options.session=this.options.session||Cn.session}log(t){this.options.debugging?.verbose&&console.log(`[PaddleOcrService:Base] ${t}`)}async recognize(t,r){(!this.detector||!this.recognitor)&&await this.initSessions();try{let i;if(typeof t=="string"){if(!t.startsWith("http")&&!t.startsWith("/"))throw new Error("Invalid image string format. Must be an HTTP URL, an absolute path, ArrayBuffer, or Canvas");i=await this.platform.loadResource(t,t)}else if(t instanceof ArrayBuffer)i=t;else if(typeof t.toBuffer=="function"){let _=t.toBuffer("image/png");i=_.buffer.slice(_.byteOffset,_.byteOffset+_.byteLength)}else{let f=t,w=f.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,f.width,f.height).data;i=w.buffer.slice(w.byteOffset,w.byteOffset+w.byteLength)}let n=ym.generateKey(i);if(!r?.noCache&&!r?.dictionary){let f=fp.get(n);if(f)return this.log("Using cached OCR result"),r?.flatten?{text:f.text,results:f.lines?f.lines.flat():f.results??[],confidence:f.confidence}:f}let a=[],s=typeof t=="string"||t instanceof ArrayBuffer?await this.platform.canvas.prepareCanvas(i):t;if(a=await this.detector.run(s),a.length===0)return r?.flatten?{text:"",results:[],confidence:0}:{text:"",lines:[],confidence:0};let o=this.options.recognition?.charactersDictionary;if(r?.dictionary){let f="";if(typeof r.dictionary=="string"){let _=await this.platform.loadResource(r.dictionary,r.dictionary);f=new TextDecoder("utf-8").decode(_)}else f=new TextDecoder("utf-8").decode(r.dictionary);o=Hn(f)}let l=r?.strategy??this.options.recognition?.strategy??"per-line",d=await this.recognitor.run(s,a,o,l),h=S_(d),c=r?.flatten?x_(d):h;return!r?.noCache&&!r?.dictionary&&fp.set(n,c),c}catch(i){let n=i instanceof Error?i:new Error(String(i));throw console.error("recognize: error",n.message,n.stack),i}}async detect(t,r){this.detector||await this.initSessions();const{crop:i,saveCropsTo:n,...a}=r??{};let s=Object.keys(a).length>0?new hm(this.platform,this.detectionSession,{...this.options.detection,...a},this.options.debugging,this.options.processing?.engine??pm):this.detector,o;if(typeof t=="string"){if(!t.startsWith("http")&&!t.startsWith("/"))throw new Error("Invalid image string format. Must be an HTTP URL, an absolute path, ArrayBuffer, or Canvas");o=await this.platform.canvas.prepareCanvas(await this.platform.loadResource(t,t))}else t instanceof ArrayBuffer?o=await this.platform.canvas.prepareCanvas(t):o=t;let l=(await s.run(o)).filter(h=>h.width>0&&h.height>0);if(!i&&!n)return{boxes:l};let d=await $_(this.platform,o,l,{crop:i,saveCropsTo:n});return i?{boxes:l,crops:d}:{boxes:l}}async batchRecognize(t,r){let i=r?.settle??!1,n=[];return await cp(t,{concurrency:this.resolveConcurrency(r?.concurrency),settle:i,signal:r?.signal,onProgress:r?.onProgress,total:Array.isArray(t)?t.length:void 0},a=>this.recognize(a,r),a=>{n[a.index]=a}),i?n:n.map(a=>a.status==="fulfilled"?a.value:void 0)}async*batchRecognizeStream(t,r){let i=w_(),n=(async()=>{try{await cp(t,{concurrency:this.resolveConcurrency(r?.concurrency),settle:r?.settle??!1,signal:r?.signal,onProgress:r?.onProgress,total:Array.isArray(t)?t.length:void 0},a=>this.recognize(a,r),a=>i.push(a)),i.close()}catch(a){i.fail(a)}})();yield*i.drain(),await n}resolveConcurrency(t){return typeof t=="number"&&t>0?Math.floor(t):(this.options.session?.executionProviders??[]).some(n=>{let a=(typeof n=="string"?n:n.name).toLowerCase();return a!=="cpu"&&a!=="wasm"})?1:4}}let mp=new Set(["cpu","wasm"]);function A_(e){return typeof e=="string"?e:e.name}async function O_(e,t,r,i,n){let a=r??{};try{return await e.InferenceSession.create(t,a)}catch(s){let l=(a.executionProviders??[]).map(A_);if(l.every(y=>mp.has(y))||l.length===0)throw s;let c=l.find(y=>mp.has(y))??(l.includes("wasm")?"wasm":"cpu"),f=s instanceof Error?s.message:String(s);i(`executionProviders=${JSON.stringify(l)} failed (${f}); falling back to ["${c}"].`);let _={...a,executionProviders:[c]};return n?.(_),e.InferenceSession.create(t,_)}}let jn=null;function R_(e){jn=e}function rt(){if(!jn)throw new Error('No canvas platform registered. Import "ppu-ocv" (Node), "ppu-ocv/web" (browser), "ppu-ocv/canvas" (Node canvas-only), "ppu-ocv/canvas-web" (browser canvas-only), or "ppu-ocv/canvas-mobile" (React Native / Skia) to auto-register.');return jn}function B_(e){return typeof e=="object"&&e!==null&&typeof e.getContext=="function"&&typeof e.width=="number"&&typeof e.height=="number"}let _m={createCanvas(e,t){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(e,t);if(typeof document<"u"){let r=document.createElement("canvas");return r.width=e,r.height=t,r}throw new Error("No canvas implementation available in this environment.")},async loadImage(e){let t;if(e instanceof ArrayBuffer)t=new Blob([e]);else if(typeof e=="string")t=await(await fetch(e)).blob();else throw new Error("loadImage: unsupported source type");let r=await createImageBitmap(t),i=_m.createCanvas(r.width,r.height);return i.getContext("2d").drawImage(r,0,0),r.close(),i},isCanvas(e){return typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas}};class Ft{static _baseInstance=null;step=0;constructor(){}static getInstance(){return Ft._baseInstance||(Ft._baseInstance=new Ft),Ft._baseInstance}crop(t){const{bbox:r,canvas:i}=t;let n=rt().createCanvas(r.x1-r.x0,r.y1-r.y0);return n.getContext("2d").drawImage(i,r.x0,r.y0,r.x1-r.x0,r.y1-r.y0,0,0,n.width,n.height),n}isDirty(t){const{canvas:r,threshold:i=127.5,majorColorThreshold:n=.97}=t;let a=0,s=0,o=this.crop({bbox:{x0:r.width*.1,y0:r.height*.1,x1:r.width*.9,y1:r.height*.9},canvas:r}),d=o.getContext("2d").getImageData(0,0,o.width,o.height).data;for(let c=0;c<d.length;c+=4){let f=d[c],_=d[c+1],y=d[c+2];f>=i&&_>=i&&y>=i?a++:s++}return Math.max(a,s)/(s+a)<n}drawLine(t){const{ctx:r,x:i,y:n,width:a,height:s,lineWidth:o=2,color:l="blue"}=t;r.beginPath(),r.strokeStyle=l,r.lineWidth=o,r.strokeRect(i,n,a,s),r.closePath()}drawContour(t){const{ctx:r,contour:i,strokeStyle:n="red",lineWidth:a=2}=t;let s=i.data32S;if(!(s.length<4)){r.strokeStyle=n,r.lineWidth=a,r.beginPath(),r.moveTo(s[0]??0,s[1]??0);for(let o=2;o<s.length;o+=2)r.lineTo(s[o]??0,s[o+1]??0);r.closePath(),r.stroke()}}}async function D_(e){return B_(e)?e:rt().loadImage(e)}async function M_(e){if(e instanceof ArrayBuffer)return e;if(typeof e.toBuffer=="function"){let a=e.toBuffer("image/png"),s=new ArrayBuffer(a.byteLength);return new Uint8Array(s).set(new Uint8Array(a)),s}let t=e.toBlob;if(typeof t=="function")return(await new Promise((s,o)=>{t.call(e,l=>l?s(l):o(new Error("toBlob returned null")),"image/png")})).arrayBuffer();if(typeof e.convertToBlob=="function")return(await e.convertToBlob({type:"image/png"})).arrayBuffer();if(typeof e.toDataURL=="function"){let s=e.toDataURL("image/png").replace(/^data:image\/png;base64,/,""),o=atob(s),l=new ArrayBuffer(o.length),d=new Uint8Array(l);for(let h=0;h<o.length;h++)d[h]=o.charCodeAt(h);return l}let i=e.getContext("2d").getImageData(0,0,e.width,e.height),n=new ArrayBuffer(i.data.byteLength);return new Uint8Array(n).set(new Uint8Array(i.data.buffer,i.data.byteOffset,i.data.byteLength)),n}function N_(e,t,r,i={}){const{foreground:n="light",thresh:a=127,minArea:s=1,maxArea:o=1/0,padding:l,scale:d=1}=i;let h=new Uint8Array(t*r),c=[],f=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],_=y=>{let w=e[y]??0;return n==="light"?w>a:w<=a};for(let y=0;y<r;y++)for(let w=0;w<t;w++){let S=y*t+w;if(h[S]||(h[S]=1,!_(S*4)))continue;let $=[S],b=w,T=w,k=y,I=y,C=0;for(;$.length>0;){let z=$.pop();if(z===void 0)break;C++;let v=z%t,M=(z-v)/t;v<b?b=v:v>T&&(T=v),M<k?k=M:M>I&&(I=M);for(const[P,j]of f){let V=v+P,L=M+j;if(V<0||V>=t||L<0||L>=r)continue;let O=L*t+V;h[O]||(h[O]=1,_(O*4)&&$.push(O))}}if(C>=s&&C<=o){let z=b,v=k,M=T+1,P=I+1;if(l){let j=P-v,V=Math.round(j*(l.vertical??0)),L=Math.round(j*(l.horizontal??0));z=Math.max(0,z-L),v=Math.max(0,v-V),M=Math.min(t,M+L),P=Math.min(r,P+V)}d!==1&&(z=Math.max(0,Math.round(z*d)),v=Math.max(0,Math.round(v*d)),M=Math.round(M*d),P=Math.round(P*d)),c.push({bbox:{x0:z,y0:v,x1:M,y1:P},area:C})}}return c}class gp{_canvas;constructor(t){this._canvas=t}get width(){return this._canvas.width}get height(){return this._canvas.height}resize(t){const{width:r,height:i}=t;let n=rt().createCanvas(r,i);return n.getContext("2d").drawImage(this._canvas,0,0,r,i),this._canvas=n,this}grayscale(){const{width:t,height:r}=this._canvas;let i=this._canvas.getContext("2d").getImageData(0,0,t,r),n=i.data;for(let s=0;s<n.length;s+=4){let o=Math.round(.299*(n[s]??0)+.587*(n[s+1]??0)+.114*(n[s+2]??0));n[s]=o,n[s+1]=o,n[s+2]=o}let a=rt().createCanvas(t,r);return a.getContext("2d").putImageData(i,0,0),this._canvas=a,this}convert(t={}){const{alpha:r=1,beta:i=0}=t;if(r===1&&i===0)return this;const{width:n,height:a}=this._canvas;let s=this._canvas.getContext("2d").getImageData(0,0,n,a),o=s.data;for(let d=0;d<o.length;d+=4)o[d]=Math.round((o[d]??0)*r+i),o[d+1]=Math.round((o[d+1]??0)*r+i),o[d+2]=Math.round((o[d+2]??0)*r+i);let l=rt().createCanvas(n,a);return l.getContext("2d").putImageData(s,0,0),this._canvas=l,this}invert(){const{width:t,height:r}=this._canvas;let i=this._canvas.getContext("2d").getImageData(0,0,t,r),n=i.data;for(let s=0;s<n.length;s+=4)n[s]=255-(n[s]??0),n[s+1]=255-(n[s+1]??0),n[s+2]=255-(n[s+2]??0);let a=rt().createCanvas(t,r);return a.getContext("2d").putImageData(i,0,0),this._canvas=a,this}threshold(t={}){const{thresh:r=127,maxValue:i=255}=t,{width:n,height:a}=this._canvas;let s=this._canvas.getContext("2d").getImageData(0,0,n,a),o=s.data;for(let d=0;d<o.length;d+=4){let c=(o[d]===o[d+1]&&o[d+1]===o[d+2]?o[d]??0:Math.round(.299*(o[d]??0)+.587*(o[d+1]??0)+.114*(o[d+2]??0)))>r?i:0;o[d]=c,o[d+1]=c,o[d+2]=c}let l=rt().createCanvas(n,a);return l.getContext("2d").putImageData(s,0,0),this._canvas=l,this}border(t={}){const{size:r=10,color:i="white"}=t,{width:n,height:a}=this._canvas;let s=rt().createCanvas(n+r*2,a+r*2),o=s.getContext("2d");return o.fillStyle=i,o.fillRect(0,0,s.width,s.height),o.drawImage(this._canvas,r,r),this._canvas=s,this}rotate(t){const{angle:r,cx:i=this._canvas.width/2,cy:n=this._canvas.height/2}=t;if(r===0)return this;const{width:a,height:s}=this._canvas;let o=rt().createCanvas(a,s),l=o.getContext("2d");return l.save(),l.translate(i,n),l.rotate(-r*Math.PI/180),l.drawImage(this._canvas,-i,-n),l.restore(),this._canvas=o,this}findRegions(t={}){const{width:r,height:i}=this._canvas;let n=this._canvas.getContext("2d").getImageData(0,0,r,i).data;return N_(n,r,i,t)}toCanvas(){return this._canvas}static async prepareCanvas(t){return D_(t)}static async prepareBuffer(t){return M_(t)}}R_(_m);class Sa{pathSeparator="/";ort=um;createCanvas(t,r){let i=rt().createCanvas(t,r);return i.getContext.bind(i)("2d",{willReadFrequently:!0}),i}isCanvas(t){return!!t&&typeof t.getContext=="function"}async loadResource(t,r){if(t instanceof ArrayBuffer)return t;let i=typeof t=="string"?t:r,n=await fetch(i);if(!n.ok)throw new Error(`Failed to fetch resource from ${i}`);return n.arrayBuffer()}async saveDebugImage(t,r,i){return Promise.resolve()}canvas={prepareCanvas:t=>gp.prepareCanvas(t),createProcessor:t=>new gp(t),getToolkit:()=>Ft.getInstance()}}function P_(){return`https://cdn.jsdelivr.net/npm/onnxruntime-web@${ge.versions.web??ge.versions.common}/dist/`}function bm(){return typeof globalThis.WorkerGlobalScope=="function"}function U_(){!(typeof window<"u"||bm())||ge.wasm.wasmPaths||(ge.wasm.wasmPaths=P_())}U_();async function L_(){if(typeof navigator>"u")return!1;let e=navigator;if(!e.gpu||typeof e.gpu.requestAdapter!="function")return!1;try{let t=await e.gpu.requestAdapter();return t!=null}catch{return!1}}async function W_(){return await L_()?["webgpu","wasm"]:["wasm"]}class yp extends hm{constructor(t,r={},i={}){super(new Sa,t,r,i,"canvas-native")}}let wm=0,$m="<unk>",ei=8,q_=1.5,V_=2.5;function _p(e){return new RegExp("\\p{L}","u").test(e)?0:new RegExp("\\p{N}","u").test(e)?1:2}function vm(e,t){if(e.length<4)return;let r=[];for(let s=1;s<t.length;s++)r.push((t[s]??0)-(t[s-1]??0));let i=[...r].sort((s,o)=>s-o),n=i[Math.floor(i.length/2)]??0;if(n<=0)return;let a=i.find(s=>s>0)??0;if(!(a<=0))for(let s=e.length-1;s>=1;s--){let o=t[s-1]??0,l=t[s]??0,d=_p(e[s]??"")===_p(e[s-1]??"")?V_:q_;l-o>n+d*a&&e[s]!==" "&&e[s-1]!==" "&&e[s]!==e[s-1]&&(e.splice(s,0," "),t.splice(s,0,(o+l)/2))}}let G_=65248,F_=/[\u2E80-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]/;function xm(e,t){for(let r=e.length-1;r>=1;r--)e[r]===" "&&e[r-1]===" "&&(e.splice(r,1),t.splice(r,1));if(!F_.test(e.join("")))for(let r=0;r<e.length;r++){let i=e[r]?.codePointAt(0)??0;i>=65281&&i<=65374?e[r]=String.fromCodePoint(i-G_):i===12288&&(e[r]=" ")}}function Ta(e,t,r,i,n=!1){let a=i.length,s=a-1,o=[],l=-1,d=0,h=0,c=[];for(let _=0;_<t;_++){let y=_*r,w=e[y],S=0;for(let $=1;$<r;$++){let b=e[y+$];b>w&&(w=b,S=$)}if(S===wm||S===l){l=S;continue}if(S>=0&&S<a){n&&S!==s&&(e[y+s]??0)>.001&&o[o.length-1]!==" "&&(o.push(" "),c.push((_+.5)/t));let $=i[S]??"";S===s?$!==$m&&(o.push(" "),d+=w,h++,c.push((_+.5)/t)):(o.push($),d+=w,h++,c.push((_+.5)/t))}l=S}vm(o,c),xm(o,c);let f=h>0?d/h:0;return{text:o.join(""),confidence:f,positions:c}}function Sm(e,t,r,i=!1,n=!1){let a=e.data,s=e.dims,o=s[1],l=s[2]??r;if(!t)return{text:"",confidence:0,positions:[]};let d=t;return t.length===l-1?d=["",...t]:l!==t.length&&i&&console.warn(`Warning: Model output classes (${l}) does not match dictionary length (${t.length}).
 Consider using our model & dictionary catalogue at https://github.com/PT-Perkasa-Pilar-Utama/ppu-paddle-ocr-models.`),Ta(a,o,l,d,n)}function Tm(e,t,r,i,n=!1){let a=i;return i.length===r-1&&(a=["",...i]),Ta(e,t,r,a,n)}const H_=Object.freeze(Object.defineProperty({__proto__:null,BLANK_INDEX:wm,MIN_CROP_WIDTH:ei,UNK_TOKEN:$m,ctcGreedyDecode:Ta,decodeLogitsRow:Tm,decodeResults:Sm,injectGapSpaces:vm,refineDecodedChars:xm},Symbol.toStringTag,{value:"Module"}));async function ka(e,t,r,i){let n=e.width,a=e.height;if(a===0||n===0)throw new Error(`Crop dimensions are zero: ${n}x${a}`);let s=n/a,o=Math.max(ei,Math.round(t*s));if(r){let h=new r.ImageProcessor(e);try{h.resize({width:o,height:t});let c=h.toMat();return c.isContinuous()&&(c.channels()===4||c.channels()===1)?{imageTensor:Im(c,o,t),tensorWidth:o,tensorHeight:t}:{imageTensor:Ia(h.toCanvas(),o,t),tensorWidth:o,tensorHeight:t}}finally{h.destroy()}}let l=i(e).resize({width:o,height:t});return{imageTensor:km(l,o,t),tensorWidth:o,tensorHeight:t}}function km(e,t,r){let i=e.toCanvas();return Ia(i,t,r)}function Ia(e,t,r){let a=e.getContext("2d").getImageData(0,0,t,r).data,s=r*t,o=new Float32Array(3*s),l=1/127.5;for(let d=0,h=0;d<s;d++,h+=4)o[d]=(a[h]??0)*l-1;return o.copyWithin(s,0,s),o.copyWithin(s*2,0,s),o}function Im(e,t,r){let i=e.channels(),n=e.data,a=r*t,s=new Float32Array(3*a),o=1/127.5;for(let l=0,d=0;l<a;l++,d+=i)s[l]=n[d]*o-1;return s.copyWithin(a,0,a),s.copyWithin(a*2,0,a),s}const j_=Object.freeze(Object.defineProperty({__proto__:null,createImageTensor:km,createImageTensorFromCanvas:Ia,createImageTensorFromMat:Im,preprocessImage:ka},Symbol.toStringTag,{value:"Module"}));async function Em(e,t,r){let i=t.options.imageHeight??48,n=Math.max(1,t.options.recBatchSize??6),a=r??t.options.charactersDictionary??[],s=t.options.spaceRecovery??!1,o=t.engine==="opencv"?t.platform.imageProcessor:void 0,l=await Promise.all(e.map(c=>ka(c,i,o,t.platform.canvas.createProcessor.bind(t.platform.canvas)))),d=l.map((c,f)=>f).sort((c,f)=>{let _=l[c]?.tensorWidth??0,y=l[f]?.tensorWidth??0;return _-y}),h=Array.from({length:e.length});for(let c=0;c<d.length;c+=n){let f=d.slice(c,c+n),_=Math.max(...f.map($=>l[$]?.tensorWidth??1)),y=i*_,w=new Float32Array(f.length*3*y);f.forEach(($,b)=>{let T=l[$];if(!T)return;let k=b*3*y;for(let I=0;I<3;I++)for(let C=0;C<i;C++){let z=(I*i+C)*T.tensorWidth,v=k+(I*i+C)*_;w.set(T.imageTensor.subarray(z,z+T.tensorWidth),v);let M=T.imageTensor[z+T.tensorWidth-1]??0;w.fill(M,v+T.tensorWidth,v+_)}});let S;try{S=new t.platform.ort.Tensor("float32",w,[f.length,3,i,_]);let $=await t.runInference(S);const[,b,T]=$.dims;let k=$.data,I=(b??0)*(T??0);f.forEach((C,z)=>{let v=(l[C]?.tensorWidth??_)/_,M=Math.max(1,Math.min(b??0,Math.ceil((b??0)*v)));h[C]=Tm(k.subarray(z*I,z*I+M*(T??0)),M,T??0,a,s)})}finally{S?.dispose()}}return h}function K_(e){let r=e.inputMetadata?.[0]?.shape?.[0];return typeof r!="number"||r<0}function Cm(e,t){if(!(t.options.rotateVerticalCrops??!0)||e.height/e.width<1.5)return e;let r=t.platform.createCanvas(e.height,e.width),i=r.getContext("2d");return i.translate(0,e.width),i.rotate(-Math.PI/2),i.drawImage(e,0,0),r}function Ea(e,t,r){return r.getToolkit().crop({bbox:{x0:t.x,y0:t.y,x1:t.x+t.width,y1:t.y+t.height},canvas:e})}async function X_(e,t,r){let i=t.options.imageHeight??48,n=t.engine==="opencv"?t.platform.imageProcessor:void 0;const{imageTensor:a,tensorWidth:s,tensorHeight:o}=await ka(e,i,n,t.platform.canvas.createProcessor.bind(t.platform.canvas));let l;try{l=new t.platform.ort.Tensor("float32",a,[1,3,o,s]);let d=await t.runInference(l),h=r??t.options.charactersDictionary??[];return Sm(d,h,s,t.debugging.verbose)}finally{l?.dispose()}}function ti(e){return[...e].sort((t,r)=>Math.abs(t.box.y-r.box.y)<(t.box.height+r.box.height)/4?t.box.x-r.box.x:t.box.y-r.box.y)}async function Z_(e,t,r,i,n){let a=r.debugging.debugFolder?`${r.debugging.debugFolder}${r.platform.pathSeparator}crops`:"";if(r.debugging.debug&&a){let o=r.platform.canvas.getToolkit();"clearOutput"in o&&typeof o.clearOutput=="function"&&o.clearOutput(a)}if(!r.debugging.debug){let o=t.map(({box:h})=>Cm(Ea(e,h,r.platform.canvas),r)),l=await Em(o,r,n),d=t.map(({box:h},c)=>({text:l[c]?.text??"",box:h,confidence:l[c]?.confidence??0}));return ti(d)}let s=[];for(const{box:o,index:l}of t){let d=await i(e,o,l,t.length,a,n);d!==null&&s.push(d)}return ti(s)}async function Q_(e,t,r,i){let n=fm(t),a=[],s=[];for(let d of n){let h=d[0];if(h)if(d.length===1)s.push(Cm(Ea(e,h.box,r.platform.canvas),r)),a.push({lineBoxes:d,cropWidths:null});else{const{mergedCanvas:c,cropWidths:f}=mm(e,d,r.platform.createCanvas.bind(r.platform),r.platform.canvas);s.push(c),a.push({lineBoxes:d,cropWidths:f})}}let o=await Em(s,r,i),l=[];return a.forEach((d,h)=>{let c=o[h];if(c)if(d.cropWidths===null){let f=d.lineBoxes[0];f&&l.push({text:c.text,box:f.box,confidence:c.confidence})}else{let f=gm(c.text,c.positions,d.cropWidths);for(let _=0;_<d.lineBoxes.length;_++){let y=d.lineBoxes[_];y&&l.push({text:(f[_]??"").trim(),box:y.box,confidence:c.confidence})}}}),ti(l)}async function Y_(e,t,r,i){let n=fm(t),a=r.options.imageHeight??48,s=20,o=[];for(let y of n)if(y.length===1){let w=y[0];if(!w)continue;let S=Ea(e,w.box,r.platform.canvas);o.push({canvas:S,boxes:y,cropWidths:[S.width]})}else{const{mergedCanvas:w,cropWidths:S}=mm(e,y,r.platform.createCanvas.bind(r.platform),r.platform.canvas);o.push({canvas:w,boxes:y,cropWidths:S})}let l=o.map(({canvas:y,boxes:w,cropWidths:S},$)=>{let b=y.width/y.height,T=Math.max(ei,Math.round(a*b));return{canvas:y,boxes:w,cropWidths:S,resizedWidth:T,originalHeight:y.height,index:$}}),d=Math.max(...l.map(y=>y.resizedWidth)),h=r.options.crossLineWidthFactor??1.5,c=Math.round(d*h),f=E_(l,y=>y.resizedWidth,c,s),_=[];for(let y of f){let w=[...y].sort((L,O)=>L.index-O.index),S=Math.max(...w.map(L=>L.originalHeight)),$=w.map(L=>{if(L.originalHeight>=S)return L.resizedWidth;let O=S/L.originalHeight;return Math.max(ei,Math.round(L.resizedWidth*O))}),T=$.reduce((L,O)=>L+O,0)+s*(w.length-1),k=r.platform.createCanvas(T,a),I=k.getContext("2d");I.fillStyle="white",I.fillRect(0,0,T,a);let C=0;for(let L=0;L<w.length;L++){let O=w[L],N=$[L];O===void 0||N===void 0||(I.drawImage(O.canvas,0,0,O.canvas.width,O.canvas.height,C,0,N,a),C+=N,L<w.length-1&&(C+=s))}const{text:z,confidence:v,positions:M}=await X_(k,r,i);let P=[],j=[];for(let L=0;L<w.length;L++){let O=w[L],N=$[L];if(!O||N===void 0)continue;let H=N/O.canvas.width;for(let Q=0;Q<O.boxes.length;Q++){let J=O.boxes[Q];if(!J)continue;let te=(O.cropWidths[Q]??0)*H;Q===O.boxes.length-1&&L<w.length-1&&(te+=s),P.push(te),j.push(J)}}let V=gm(z,M,P);for(let L=0;L<j.length;L++){let O=j[L];O&&_.push({text:(V[L]??"").trim(),box:O.box,confidence:v})}}return ti(_)}class J_{options;debugging;session;platform;engine;constructor(t,r,i={},n={},a="opencv"){this.platform=t,this.session=r,this.options={...dm,...i},this.debugging={...xa,...n},a==="opencv"&&!this.platform.imageProcessor?this.engine="canvas-native":this.engine=a}log(t){this.debugging.verbose&&console.log(`[RecognitionService] ${t}`)}async run(t,r,i,n="per-line"){this.log("Starting text recognition process");try{let a;this.platform.isCanvas(t)?a=t:this.engine==="opencv"&&this.platform.imageProcessor?a=await this.platform.imageProcessor.prepareCanvas(t):a=await this.platform.canvas.prepareCanvas(t);let s=this.filterValidBoxes(r);if(s.length===0)return[];const{canvas:o,ratio:l}=this.buildCropCanvas(a);let d=l===1?s:s.map(_=>({..._,box:bp(_.box,l)})),h=this.buildContext(),c;switch(n){case"cross-line":c=await Y_(o,d,h,i);break;case"per-line":c=await Q_(o,d,h,i);break;case"per-box":default:c=await Z_(o,d,h,(_,y,w,S,$,b)=>this.processBox(_,y,w,S,$,b),i)}l!==1&&(c=c.map(_=>({..._,box:bp(_.box,1/l)})));let f=this.options.minimumConfidence??.5;return f>0?c.filter(_=>{let y=/[\p{L}\p{N}]/u.test(_.text)?f:Math.min(1,f+.3);return _.confidence>=y}):c}catch(a){return console.error("Error during text recognition:",a instanceof Error?a.message:String(a)),[]}}buildContext(){return{platform:this.platform,options:K_(this.session)?this.options:{...this.options,recBatchSize:1},debugging:this.debugging,engine:this.engine,runInference:t=>this.runInference(t)}}filterValidBoxes(t){return t.map((r,i)=>({box:r,index:i})).filter(({box:r,index:i})=>this.isValidBox(r,i))}buildCropCanvas(t){const{width:r,height:i}=t;let n=this.options.maxCropSourceSideLength??2e3;const{width:a,height:s,ratio:o}=cm(r,i,n);if(o===1)return{canvas:t,ratio:1};let l=this.platform.createCanvas(a,s);return l.getContext("2d").drawImage(t,0,0,r,i,0,0,a,s),{canvas:l,ratio:o}}async processBox(t,r,i,n,a,s){let o=Date.now();try{let l=this.platform.canvas.getToolkit().crop({bbox:{x0:r.x,y0:r.y,x1:r.x+r.width,y1:r.y+r.height},canvas:t}),d=this.buildContext();const{text:h,confidence:c}=await this.recognizeTextViaContext(l,d,s);if(this.debugging.debug&&a){await this.platform.saveDebugImage(l,`crop_${String(i).padStart(3,"0")}.png`,a);let f=Date.now()-o;this.log(`Box ${i+1}/${n}: [x:${r.x}, y:${r.y}, w:${r.width}, h:${r.height}]
	 → "${h}" (processed in ${f}ms)
`)}return{text:h,box:r,confidence:c}}catch(l){let d=l instanceof Error?l:new Error(String(l));return console.error(`Error processing box ${i+1}: ${d.message}`,d.stack),null}}async recognizeTextViaContext(t,r,i){const{preprocessImage:n}=await vo(()=>Promise.resolve().then(()=>j_),[],import.meta.url),{decodeResults:a}=await vo(()=>Promise.resolve().then(()=>H_),void 0,import.meta.url);let s=r.options.imageHeight??48,o=r.engine==="opencv"?r.platform.imageProcessor:void 0;const{imageTensor:l,tensorWidth:d,tensorHeight:h}=await n(t,s,o,r.platform.canvas.createProcessor.bind(r.platform.canvas));let c;try{c=new r.platform.ort.Tensor("float32",l,[1,3,h,d]);let f=await r.runInference(c),_=i??r.options.charactersDictionary??[];return a(f,_,d,this.debugging.verbose,r.options.spaceRecovery??!1)}finally{c?.dispose()}}isValidBox(t,r){return t.width<=0||t.height<=0?(console.warn(`Skipping invalid box ${r+1}: w=${t.width}, h=${t.height}`),!1):!0}async runInference(t){let r=this.options.mainThreadYieldMs??0;r>0&&await new Promise(o=>setTimeout(o,r));let i={x:t},n=await this.session.run(i),a=Object.keys(n)[0],s=a?n[a]:void 0;if(!s)throw new Error(`Recognition output tensor '${a}' not found. Available keys: ${Object.keys(n)}`);return s}}function bp(e,t){return{x:Math.round(e.x*t),y:Math.round(e.y*t),width:Math.max(1,Math.round(e.width*t)),height:Math.max(1,Math.round(e.height*t))}}function eb(e,t=typeof window<"u"&&!bm()){return t?{mainThreadYieldMs:u_,...e}:e}class wp extends J_{constructor(t,r={},i={}){super(new Sa,t,eb(r),i,"canvas-native")}}let tb={graphOptimizationLevel:"all"};class ib extends z_{constructor(t){super(new Sa,t),(this.options.session===void 0||Object.keys(this.options.session).length===0)&&(this.options.session=tb)}async initSessions(){throw new Error("Initialization is handled proactively in PaddleOcrService. Call initialize() instead.")}async _loadResource(t,r){if(t instanceof ArrayBuffer)return this.log("Loading resource from ArrayBuffer"),t;let i=typeof t=="string"?t:r;return this.log(`Fetching resource from URL: ${i}`),p_(i)}async _resolveSessionExecutionProviders(){let t=this.options.session??{};if(t.executionProviders&&t.executionProviders.length>0){this.log(`Using user-provided executionProviders: ${JSON.stringify(t.executionProviders)}`);return}let r=await W_();this.options.session={...t,executionProviders:r},this.log(`Resolved executionProviders: ${JSON.stringify(r)}`)}async _createSession(t){return O_(um,t,this.options.session,r=>console.warn(`[PaddleOcrService] ${r}`),r=>this.options.session=r)}async initialize(){try{this.log("Initializing PaddleOcrService (Web)..."),await this._resolveSessionExecutionProviders();const[t,r,i]=await Promise.all([this._loadResource(this.options.model?.detection,qt.detection),this._loadResource(this.options.model?.recognition,qt.recognition),this._loadResource(this.options.model?.charactersDictionary,qt.charactersDictionary)]),[n,a]=await Promise.all([this._createSession(new Uint8Array(t)),this._createSession(new Uint8Array(r))]);this.detectionSession=n,this.recognitionSession=a,this.options.model&&(this.options.model.detection=t),this.options.model&&(this.options.model.recognition=r),this.log(`Detection ONNX model loaded successfully
	input: ${n.inputNames}
	output: ${n.outputNames}`),this.log(`Recognition ONNX model loaded successfully
	input: ${a.inputNames}
	output: ${a.outputNames}`);let s=Hn(i);if(s.length===0)throw new Error("Character dictionary is empty or could not be loaded.");this.options.model&&(this.options.model.charactersDictionary=i),this.options.recognition&&(this.options.recognition.charactersDictionary=s),this.log(`Character dictionary loaded with ${s.length} entries.`),this.detector=new yp(n,this.options.detection,this.options.debugging),this.recognitor=new wp(a,this.options.recognition,this.options.debugging),this.options.model&&(this.options.model.detection=void 0),this.options.model&&(this.options.model.recognition=void 0)}catch(t){throw console.error("Failed to initialize PaddleOcrService Web:",t),t}}isInitialized(){return this.detectionSession!==null&&this.recognitionSession!==null}async changeDetectionModel(t){this.log("Changing detection model...");let r=await this._loadResource(t,qt.detection);await this.detectionSession?.release(),this.detectionSession=await this._createSession(new Uint8Array(r)),this.detector=new yp(this.detectionSession,this.options.detection,this.options.debugging),this.options.model&&(this.options.model.detection=r),this.log("Detection model changed successfully.")}async changeRecognitionModel(t){this.log("Changing recognition model...");let r=await this._loadResource(t,qt.recognition);await this.recognitionSession?.release(),this.recognitionSession=await this._createSession(new Uint8Array(r)),this.recognitor=new wp(this.recognitionSession,this.options.recognition,this.options.debugging),this.options.model&&(this.options.model.recognition=r),this.log("Recognition model changed successfully.")}async changeTextDictionary(t){this.log("Changing text dictionary...");let r=await this._loadResource(t,qt.charactersDictionary),i=Hn(r);if(i.length===0)throw new Error("Character dictionary is empty or could not be loaded.");this.options.model&&(this.options.model.charactersDictionary=r),this.options.recognition&&(this.options.recognition.charactersDictionary=i),this.log(`Character dictionary changed successfully with ${i.length} entries.`)}async recognize(t,r){return super.recognize(t,r)}async destroy(){await this.detectionSession?.release(),await this.recognitionSession?.release(),this.detectionSession=null,this.recognitionSession=null,this.detector=null,this.recognitor=null}}export{xa as DEFAULT_DEBUGGING_OPTIONS,lm as DEFAULT_DETECTION_OPTIONS,L0 as DEFAULT_MODEL,qt as DEFAULT_MODEL_URLS,Cn as DEFAULT_PADDLE_OPTIONS,pm as DEFAULT_PROCESSING_ENGINE,d_ as DEFAULT_PROCESSING_OPTIONS,dm as DEFAULT_RECOGNITION_OPTIONS,P0 as DICT_BASE_URL,yp as DetectionService,xo as MODEL_BASE_URL,ib as PaddleOcrService,wp as RecognitionService,U0 as V6_TINY_MODEL,W_ as getDefaultWebExecutionProviders,L_ as isWebGpuAvailable,bm as isWebWorker};
