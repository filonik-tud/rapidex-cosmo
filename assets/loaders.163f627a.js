import{_ as S,d as pn,a as gn,g as mn,c as xn,B as bn,L as It,p as kt,b as Ft,U as vn,M as $e,G as zt,C as Te,h as yn,F as wn}from"./layer.6384b77b.js";import{g as Pn}from"./phong-lighting.adf0dbf3.js";import{L as Cn,M as st}from"./index.308dbe2e.js";import{l as Me,s as Ke}from"./objects.1ec32615.js";class Ot{constructor(t){S(this,"opts",void 0),S(this,"typedArrayManager",void 0),S(this,"indexStarts",[0]),S(this,"vertexStarts",[0]),S(this,"vertexCount",0),S(this,"instanceCount",0),S(this,"attributes",void 0),S(this,"_attributeDefs",void 0),S(this,"data",void 0),S(this,"getGeometry",void 0),S(this,"geometryBuffer",void 0),S(this,"buffers",void 0),S(this,"positionSize",void 0),S(this,"normalize",void 0);const{attributes:n={}}=t;this.typedArrayManager=pn,this.attributes={},this._attributeDefs=n,this.opts=t,this.updateGeometry(t)}updateGeometry(t){Object.assign(this.opts,t);const{data:n,buffers:r={},getGeometry:i,geometryBuffer:o,positionFormat:s,dataChanged:a,normalize:c=!0}=this.opts;if(this.data=n,this.getGeometry=i,this.positionSize=o&&o.size||(s==="XY"?2:3),this.buffers=r,this.normalize=c,o&&(gn(n.startIndices),this.getGeometry=this.getGeometryFromBuffer(o),c||(r.positions=o)),this.geometryBuffer=r.positions,Array.isArray(a))for(const f of a)this._rebuildGeometry(f);else this._rebuildGeometry()}updatePartialGeometry({startRow:t,endRow:n}){this._rebuildGeometry({startRow:t,endRow:n})}getGeometryFromBuffer(t){const n=t.value||t;return ArrayBuffer.isView(n)?mn(n,{size:this.positionSize,offset:t.offset,stride:t.stride,startIndices:this.data.startIndices}):null}_allocate(t,n){const{attributes:r,buffers:i,_attributeDefs:o,typedArrayManager:s}=this;for(const a in o)if(a in i)s.release(r[a]),r[a]=null;else{const c=o[a];c.copy=n,r[a]=s.allocate(r[a],t,c)}}_forEachGeometry(t,n,r){const{data:i,getGeometry:o}=this,{iterable:s,objectInfo:a}=xn(i,n,r);for(const c of s){a.index++;const f=o?o(c,a):null;t(f,a.index)}}_rebuildGeometry(t){if(!this.data)return;let{indexStarts:n,vertexStarts:r,instanceCount:i}=this;const{data:o,geometryBuffer:s}=this,{startRow:a=0,endRow:c=1/0}=t||{},f={};if(t||(n=[0],r=[0]),this.normalize||!s)this._forEachGeometry((l,u)=>{const h=l&&this.normalizeGeometry(l);f[u]=h,r[u+1]=r[u]+(h?this.getGeometrySize(h):0)},a,c),i=r[r.length-1];else if(r=o.startIndices,i=r[o.length]||0,ArrayBuffer.isView(s))i=i||s.length/this.positionSize;else if(s instanceof bn){const l=s.accessor.stride||this.positionSize*4;i=i||s.byteLength/l}else if(s.buffer){const l=s.stride||this.positionSize*4;i=i||s.buffer.byteLength/l}else if(s.value){const l=s.value,u=s.stride/l.BYTES_PER_ELEMENT||this.positionSize;i=i||l.length/u}this._allocate(i,Boolean(t)),this.indexStarts=n,this.vertexStarts=r,this.instanceCount=i;const d={};this._forEachGeometry((l,u)=>{const h=f[u]||l;d.vertexStart=r[u],d.indexStart=n[u];const g=u<r.length-1?r[u+1]:i;d.geometrySize=g-r[u],d.geometryIndex=u,this.updateGeometryAttributes(h,d)},a,c),this.vertexCount=n[n.length-1]}}const Rt={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function Gt(e,t,n={}){return Sn(e,n)!==t?(Mn(e,n),!0):!1}function Sn(e,t={}){return Math.sign(_n(e,t))}function _n(e,t={}){const{start:n=0,end:r=e.length}=t,i=t.size||2;let o=0;for(let s=n,a=r-i;s<r;s+=i)o+=(e[s]-e[a])*(e[s+1]+e[a+1]),a=s;return o/2}function Mn(e,t){const{start:n=0,end:r=e.length,size:i=2}=t,o=(r-n)/i,s=Math.floor(o/2);for(let a=0;a<s;++a){const c=n+a*i,f=n+(o-1-a)*i;for(let d=0;d<i;++d){const l=e[c+d];e[c+d]=e[f+d],e[f+d]=l}}}function A(e,t){const n=t.length,r=e.length;if(r>0){let i=!0;for(let o=0;o<n;o++)if(e[r-n+o]!==t[o]){i=!1;break}if(i)return!1}for(let i=0;i<n;i++)e[r+i]=t[i];return!0}function je(e,t){const n=t.length;for(let r=0;r<n;r++)e[r]=t[r]}function K(e,t,n,r,i=[]){const o=r+t*n;for(let s=0;s<n;s++)i[s]=e[o+s];return i}function Be(e,t,n,r,i=[]){let o,s;if(n&8)o=(r[3]-e[1])/(t[1]-e[1]),s=3;else if(n&4)o=(r[1]-e[1])/(t[1]-e[1]),s=1;else if(n&2)o=(r[2]-e[0])/(t[0]-e[0]),s=2;else if(n&1)o=(r[0]-e[0])/(t[0]-e[0]),s=0;else return null;for(let a=0;a<e.length;a++)i[a]=(s&1)===a?r[s]:o*(t[a]-e[a])+e[a];return i}function ge(e,t){let n=0;return e[0]<t[0]?n|=1:e[0]>t[2]&&(n|=2),e[1]<t[1]?n|=4:e[1]>t[3]&&(n|=8),n}function Dt(e,t){const{size:n=2,broken:r=!1,gridResolution:i=10,gridOffset:o=[0,0],startIndex:s=0,endIndex:a=e.length}=t||{},c=(a-s)/n;let f=[];const d=[f],l=K(e,0,n,s);let u,h;const g=jt(l,i,o,[]),p=[];A(f,l);for(let b=1;b<c;b++){for(u=K(e,b,n,s,u),h=ge(u,g);h;){Be(l,u,h,g,p);const v=ge(p,g);v&&(Be(l,p,v,g,p),h=v),A(f,p),je(l,p),En(g,i,h),r&&f.length>n&&(f=[],d.push(f),A(f,l)),h=ge(u,g)}A(f,u),je(l,u)}return r?d:d[0]}const at=0,Ln=1;function ae(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}function $t(e,t=null,n){if(!e.length)return[];const{size:r=2,gridResolution:i=10,gridOffset:o=[0,0],edgeTypes:s=!1}=n||{},a=[],c=[{pos:e,types:s?new Array(e.length/r).fill(Ln):null,holes:t||[]}],f=[[],[]];let d=[];for(;c.length;){const{pos:l,types:u,holes:h}=c.shift();An(l,r,h[0]||l.length,f),d=jt(f[0],i,o,d);const g=ge(f[1],d);if(g){let p=ft(l,u,r,0,h[0]||l.length,d,g);const b={pos:p[0].pos,types:p[0].types,holes:[]},v={pos:p[1].pos,types:p[1].types,holes:[]};c.push(b,v);for(let P=0;P<h.length;P++)p=ft(l,u,r,h[P],h[P+1]||l.length,d,g),p[0]&&(b.holes.push(b.pos.length),b.pos=ae(b.pos,p[0].pos),s&&(b.types=ae(b.types,p[0].types))),p[1]&&(v.holes.push(v.pos.length),v.pos=ae(v.pos,p[1].pos),s&&(v.types=ae(v.types,p[1].types)))}else{const p={positions:l};s&&(p.edgeTypes=u),h.length&&(p.holeIndices=h),a.push(p)}}return a}function ft(e,t,n,r,i,o,s){const a=(i-r)/n,c=[],f=[],d=[],l=[],u=[];let h,g,p;const b=K(e,a-1,n,r);let v=Math.sign(s&8?b[1]-o[3]:b[0]-o[2]),P=t&&t[a-1],m=0,x=0;for(let C=0;C<a;C++)h=K(e,C,n,r,h),g=Math.sign(s&8?h[1]-o[3]:h[0]-o[2]),p=t&&t[r/n+C],g&&v&&v!==g&&(Be(b,h,s,o,u),A(c,u)&&d.push(P),A(f,u)&&l.push(P)),g<=0?(A(c,h)&&d.push(p),m-=g):d.length&&(d[d.length-1]=at),g>=0?(A(f,h)&&l.push(p),x+=g):l.length&&(l[l.length-1]=at),je(b,h),v=g,P=p;return[m?{pos:c,types:t&&d}:null,x?{pos:f,types:t&&l}:null]}function jt(e,t,n,r){const i=Math.floor((e[0]-n[0])/t)*t+n[0],o=Math.floor((e[1]-n[1])/t)*t+n[1];return r[0]=i,r[1]=o,r[2]=i+t,r[3]=o+t,r}function En(e,t,n){n&8?(e[1]+=t,e[3]+=t):n&4?(e[1]-=t,e[3]-=t):n&2?(e[0]+=t,e[2]+=t):n&1&&(e[0]-=t,e[2]-=t)}function An(e,t,n,r){let i=1/0,o=-1/0,s=1/0,a=-1/0;for(let c=0;c<n;c+=t){const f=e[c],d=e[c+1];i=f<i?f:i,o=f>o?f:o,s=d<s?d:s,a=d>a?d:a}return r[0][0]=i,r[0][1]=s,r[1][0]=o,r[1][1]=a,r}const Tn=85.051129;function Nn(e,t){const{size:n=2,startIndex:r=0,endIndex:i=e.length,normalize:o=!0}=t||{},s=e.slice(r,i);Bt(s,n,0,i-r);const a=Dt(s,{size:n,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(o)for(const c of a)Zt(c,n);return a}function In(e,t=null,n){const{size:r=2,normalize:i=!0,edgeTypes:o=!1}=n||{};t=t||[];const s=[],a=[];let c=0,f=0;for(let l=0;l<=t.length;l++){const u=t[l]||e.length,h=f,g=kn(e,r,c,u);for(let p=g;p<u;p++)s[f++]=e[p];for(let p=c;p<g;p++)s[f++]=e[p];Bt(s,r,h,f),Fn(s,r,h,f,n?.maxLatitude),c=u,a[l]=f}a.pop();const d=$t(s,a,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:o});if(i)for(const l of d)Zt(l.positions,r);return d}function kn(e,t,n,r){let i=-1,o=-1;for(let s=n+1;s<r;s+=t){const a=Math.abs(e[s]);a>i&&(i=a,o=s-1)}return o}function Fn(e,t,n,r,i=Tn){const o=e[n],s=e[r-t];if(Math.abs(o-s)>180){const a=K(e,0,t,n);a[0]+=Math.round((s-o)/360)*360,A(e,a),a[1]=Math.sign(a[1])*i,A(e,a),a[0]=o,A(e,a)}}function Bt(e,t,n,r){let i=e[0],o;for(let s=n;s<r;s+=t){o=e[s];const a=o-i;(a>180||a<-180)&&(o-=Math.round(a/360)*360),e[s]=i=o}}function Zt(e,t){let n;const r=e.length/t;for(let o=0;o<r&&(n=e[o*t],(n+180)%360===0);o++);const i=-Math.round(n/360)*360;if(i!==0)for(let o=0;o<r;o++)e[o*t]+=i}function zn(e,t,n,r){let i;if(Array.isArray(e[0])){const o=e.length*t;i=new Array(o);for(let s=0;s<e.length;s++)for(let a=0;a<t;a++)i[s*t+a]=e[s][a]||0}else i=e;return n?Dt(i,{size:t,gridResolution:n}):r?Nn(i,{size:t}):i}const On=1,Rn=2,Ne=4;class Gn extends Ot{constructor(t){super({...t,attributes:{positions:{size:3,padding:18,initialize:!0,type:t.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(t){return this.attributes[t]}getGeometryFromBuffer(t){return this.normalize?super.getGeometryFromBuffer(t):null}normalizeGeometry(t){return this.normalize?zn(t,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):t}getGeometrySize(t){if(ct(t)){let r=0;for(const i of t)r+=this.getGeometrySize(i);return r}const n=this.getPathLength(t);return n<2?0:this.isClosed(t)?n<3?0:n+2:n}updateGeometryAttributes(t,n){if(n.geometrySize!==0)if(t&&ct(t))for(const r of t){const i=this.getGeometrySize(r);n.geometrySize=i,this.updateGeometryAttributes(r,n),n.vertexStart+=i}else this._updateSegmentTypes(t,n),this._updatePositions(t,n)}_updateSegmentTypes(t,n){const r=this.attributes.segmentTypes,i=t?this.isClosed(t):!1,{vertexStart:o,geometrySize:s}=n;r.fill(0,o,o+s),i?(r[o]=Ne,r[o+s-2]=Ne):(r[o]+=On,r[o+s-2]+=Rn),r[o+s-1]=Ne}_updatePositions(t,n){const{positions:r}=this.attributes;if(!r||!t)return;const{vertexStart:i,geometrySize:o}=n,s=new Array(3);for(let a=i,c=0;c<o;a++,c++)this.getPointOnPath(t,c,s),r[a*3]=s[0],r[a*3+1]=s[1],r[a*3+2]=s[2]}getPathLength(t){return t.length/this.positionSize}getPointOnPath(t,n,r=[]){const{positionSize:i}=this;n*i>=t.length&&(n+=1-t.length/i);const o=n*i;return r[0]=t[o],r[1]=t[o+1],r[2]=i===3&&t[o+2]||0,r}isClosed(t){if(!this.normalize)return Boolean(this.opts.loop);const{positionSize:n}=this,r=t.length-n;return t[0]===t[r]&&t[1]===t[r+1]&&(n===2||t[2]===t[r+2])}}function ct(e){return Array.isArray(e[0])}const Dn=`#define SHADER_NAME path-layer-vertex-shader

attribute vec2 positions;

attribute float instanceTypes;
attribute vec3 instanceStartPositions;
attribute vec3 instanceEndPositions;
attribute vec3 instanceLeftPositions;
attribute vec3 instanceRightPositions;
attribute vec3 instanceLeftPositions64Low;
attribute vec3 instanceStartPositions64Low;
attribute vec3 instanceEndPositions64Low;
attribute vec3 instanceRightPositions64Low;
attribute float instanceStrokeWidths;
attribute vec4 instanceColors;
attribute vec3 instancePickingColors;

uniform float widthScale;
uniform float widthMinPixels;
uniform float widthMaxPixels;
uniform float jointType;
uniform float capType;
uniform float miterLimit;
uniform bool billboard;
uniform int widthUnits;

uniform float opacity;

varying vec4 vColor;
varying vec2 vCornerOffset;
varying float vMiterLength;
varying vec2 vPathPosition;
varying float vPathLength;
varying float vJointType;

const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);

float flipIfTrue(bool flag) {
  return -(float(flag) * 2. - 1.);
}

// calculate line join positions
vec3 lineJoin(
  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
  vec2 width
) {
  bool isEnd = positions.x > 0.0;
  // side of the segment - -1: left, 0: center, 1: right
  float sideOfPath = positions.y;
  float isJoint = float(sideOfPath == 0.0);

  vec3 deltaA3 = (currPoint - prevPoint);
  vec3 deltaB3 = (nextPoint - currPoint);

  mat3 rotationMatrix;
  bool needsRotation = !billboard && project_needs_rotation(currPoint, rotationMatrix);
  if (needsRotation) {
    deltaA3 = deltaA3 * rotationMatrix;
    deltaB3 = deltaB3 * rotationMatrix;
  }
  vec2 deltaA = deltaA3.xy / width;
  vec2 deltaB = deltaB3.xy / width;

  float lenA = length(deltaA);
  float lenB = length(deltaB);

  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);

  vec2 perpA = vec2(-dirA.y, dirA.x);
  vec2 perpB = vec2(-dirB.y, dirB.x);

  // tangent of the corner
  vec2 tangent = dirA + dirB;
  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
  // direction of the corner
  vec2 miterVec = vec2(-tangent.y, tangent.x);
  // direction of the segment
  vec2 dir = isEnd ? dirA : dirB;
  // direction of the extrusion
  vec2 perp = isEnd ? perpA : perpB;
  // length of the segment
  float L = isEnd ? lenA : lenB;

  // A = angle of the corner
  float sinHalfA = abs(dot(miterVec, perp));
  float cosHalfA = abs(dot(dirA, miterVec));

  // -1: right, 1: left
  float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);

  // relative position to the corner:
  // -1: inside (smaller side of the angle)
  // 0: center
  // 1: outside (bigger side of the angle)
  float cornerPosition = sideOfPath * turnDirection;

  float miterSize = 1.0 / max(sinHalfA, EPSILON);
  // trim if inside corner extends further than the line segment
  miterSize = mix(
    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
    miterSize,
    step(0.0, cornerPosition)
  );

  vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
    * (sideOfPath + isJoint * turnDirection);

  // special treatment for start cap and end cap
  bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  bool isCap = isStartCap || isEndCap;

  // extend out a triangle to envelope the round cap
  if (isCap) {
    offsetVec = mix(perp * sideOfPath, dir * capType * 4.0 * flipIfTrue(isStartCap), isJoint);
    vJointType = capType;
  } else {
    vJointType = jointType;
  }

  // Generate variables for fragment shader
  vPathLength = L;
  vCornerOffset = offsetVec;
  vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
  vMiterLength = isCap ? isJoint : vMiterLength;

  vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
  vPathPosition = vec2(
    dot(offsetFromStartOfPath, perp),
    dot(offsetFromStartOfPath, dir)
  );
  geometry.uv = vPathPosition;

  float isValid = step(instanceTypes, 3.5);
  vec3 offset = vec3(offsetVec * width * isValid, 0.0);

  if (needsRotation) {
    offset = rotationMatrix * offset;
  }
  return currPoint + offset;
}

// In clipspace extrusion, if a line extends behind the camera, clip it to avoid visual artifacts
void clipLine(inout vec4 position, vec4 refPosition) {
  if (position.w < EPSILON) {
    float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    position = refPosition + (position - refPosition) * r;
  }
}

void main() {
  geometry.pickingColor = instancePickingColors;

  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);

  float isEnd = positions.x;

  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
  vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);

  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
  vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);

  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
  vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);

  geometry.worldPosition = currPosition;
  vec2 widthPixels = vec2(clamp(
    project_size_to_pixel(instanceStrokeWidths * widthScale, widthUnits),
    widthMinPixels, widthMaxPixels) / 2.0);
  vec3 width;

  if (billboard) {
    // Extrude in clipspace
    vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);
    vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
    vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);

    clipLine(prevPositionScreen, currPositionScreen);
    clipLine(nextPositionScreen, currPositionScreen);
    clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

    width = vec3(widthPixels, 0.0);
    DECKGL_FILTER_SIZE(width, geometry);

    vec3 pos = lineJoin(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w,
      project_pixel_size_to_clipspace(width.xy)
    );

    gl_Position = vec4(pos * currPositionScreen.w, currPositionScreen.w);
  } else {
    // Extrude in commonspace
    prevPosition = project_position(prevPosition, prevPosition64Low);
    currPosition = project_position(currPosition, currPosition64Low);
    nextPosition = project_position(nextPosition, nextPosition64Low);

    width = vec3(project_pixel_size(widthPixels), 0.0);
    DECKGL_FILTER_SIZE(width, geometry);

    vec4 pos = vec4(
      lineJoin(prevPosition, currPosition, nextPosition, width.xy),
      1.0);
    geometry.position = pos;
    gl_Position = project_common_position_to_clipspace(pos);
  }
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  DECKGL_FILTER_COLOR(vColor, geometry);
}
`,$n=`#define SHADER_NAME path-layer-fragment-shader

precision highp float;

uniform float miterLimit;

varying vec4 vColor;
varying vec2 vCornerOffset;
varying float vMiterLength;
/*
 * vPathPosition represents the relative coordinates of the current fragment on the path segment.
 * vPathPosition.x - position along the width of the path, between [-1, 1]. 0 is the center line.
 * vPathPosition.y - position along the length of the path, between [0, L / width].
 */
varying vec2 vPathPosition;
varying float vPathLength;
varying float vJointType;

void main(void) {
  geometry.uv = vPathPosition;

  if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
    // if joint is rounded, test distance from the corner
    if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
      discard;
    }
    // trim miter
    if (vJointType < 0.5 && vMiterLength > miterLimit + 1.0) {
      discard;
    }
  }
  gl_FragColor = vColor;

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`,Ut=[0,0,0,255],jn={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:e=>e.path},getColor:{type:"accessor",value:Ut},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},Ie={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};class Vt extends It{constructor(...t){super(...t),S(this,"state",void 0)}getShaders(){return super.getShaders({vs:Dn,fs:$n,modules:[kt,Ft]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({positions:{size:3,vertexOffset:1,type:5130,fp64:this.use64bitPositions(),transition:Ie,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:5121,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:Ie,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,accessor:"getColor",transition:Ie,defaultValue:Ut},instancePickingColors:{size:3,type:5121,accessor:(r,{index:i,target:o})=>this.encodePickingColor(r&&r.__source?r.__source.index:i,o)}}),this.setState({pathTesselator:new Gn({fp64:this.use64bitPositions()})})}updateState(t){super.updateState(t);const{props:n,changeFlags:r}=t,i=this.getAttributeManager();if(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getPath)){const{pathTesselator:a}=this.state,c=n.data.attributes||{};a.updateGeometry({data:n.data,geometryBuffer:c.getPath,buffers:c,normalize:!n._pathType,loop:n._pathType==="loop",getGeometry:n.getPath,positionFormat:n.positionFormat,wrapLongitude:n.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:r.dataChanged}),this.setState({numInstances:a.instanceCount,startIndices:a.vertexStarts}),r.dataChanged||i.invalidateAll()}if(r.extensionsChanged){var s;const{gl:a}=this.context;(s=this.state.model)===null||s===void 0||s.delete(),this.state.model=this._getModel(a),i.invalidateAll()}}getPickingInfo(t){const n=super.getPickingInfo(t),{index:r}=n,{data:i}=this.props;return i[0]&&i[0].__source&&(n.object=i.find(o=>o.__source.index===r)),n}disablePickingIndex(t){const{data:n}=this.props;if(n[0]&&n[0].__source)for(let r=0;r<n.length;r++)n[r].__source.index===t&&this._disablePickingIndex(r);else this._disablePickingIndex(t)}draw({uniforms:t}){const{jointRounded:n,capRounded:r,billboard:i,miterLimit:o,widthUnits:s,widthScale:a,widthMinPixels:c,widthMaxPixels:f}=this.props;this.state.model.setUniforms(t).setUniforms({jointType:Number(n),capType:Number(r),billboard:i,widthUnits:vn[s],widthScale:a,miterLimit:o,widthMinPixels:c,widthMaxPixels:f}).draw()}_getModel(t){const n=[0,1,2,1,4,2,1,3,4,3,5,4],r=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new $e(t,{...this.getShaders(),id:this.props.id,geometry:new zt({drawMode:4,attributes:{indices:new Uint16Array(n),positions:{value:new Float32Array(r),size:2}}}),isInstanced:!0})}calculatePositions(t){const{pathTesselator:n}=this.state;t.startIndices=n.vertexStarts,t.value=n.get("positions")}calculateSegmentTypes(t){const{pathTesselator:n}=this.state;t.startIndices=n.vertexStarts,t.value=n.get("segmentTypes")}}S(Vt,"defaultProps",jn);S(Vt,"layerName","PathLayer");var Ye={exports:{}};Ye.exports=Le;Ye.exports.default=Le;function Le(e,t,n){n=n||2;var r=t&&t.length,i=r?t[0]*n:e.length,o=Ht(e,0,i,n,!0),s=[];if(!o||o.next===o.prev)return s;var a,c,f,d,l,u,h;if(r&&(o=Hn(e,t,o,n)),e.length>80*n){a=f=e[0],c=d=e[1];for(var g=n;g<i;g+=n)l=e[g],u=e[g+1],l<a&&(a=l),u<c&&(c=u),l>f&&(f=l),u>d&&(d=u);h=Math.max(f-a,d-c),h=h!==0?32767/h:0}return Y(o,s,n,a,c,h,0),s}function Ht(e,t,n,r,i){var o,s;if(i===Ve(e,t,n,r)>0)for(o=t;o<n;o+=r)s=lt(o,e[o],e[o+1],s);else for(o=n-r;o>=t;o-=r)s=lt(o,e[o],e[o+1],s);return s&&Ee(s,s.next)&&(q(s),s=s.next),s}function G(e,t){if(!e)return e;t||(t=e);var n=e,r;do if(r=!1,!n.steiner&&(Ee(n,n.next)||w(n.prev,n,n.next)===0)){if(q(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Y(e,t,n,r,i,o,s){if(!!e){!s&&o&&Xn(e,r,i,o);for(var a=e,c,f;e.prev!==e.next;){if(c=e.prev,f=e.next,o?Zn(e,r,i,o):Bn(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(f.i/n|0),q(e),e=f.next,a=f.next;continue}if(e=f,e===a){s?s===1?(e=Un(G(e),t,n),Y(e,t,n,r,i,o,2)):s===2&&Vn(e,t,n,r,i,o):Y(G(e),t,n,r,i,o,1);break}}}}function Bn(e){var t=e.prev,n=e,r=e.next;if(w(t,n,r)>=0)return!1;for(var i=t.x,o=n.x,s=r.x,a=t.y,c=n.y,f=r.y,d=i<o?i<s?i:s:o<s?o:s,l=a<c?a<f?a:f:c<f?c:f,u=i>o?i>s?i:s:o>s?o:s,h=a>c?a>f?a:f:c>f?c:f,g=r.next;g!==t;){if(g.x>=d&&g.x<=u&&g.y>=l&&g.y<=h&&Z(i,a,o,c,s,f,g.x,g.y)&&w(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zn(e,t,n,r){var i=e.prev,o=e,s=e.next;if(w(i,o,s)>=0)return!1;for(var a=i.x,c=o.x,f=s.x,d=i.y,l=o.y,u=s.y,h=a<c?a<f?a:f:c<f?c:f,g=d<l?d<u?d:u:l<u?l:u,p=a>c?a>f?a:f:c>f?c:f,b=d>l?d>u?d:u:l>u?l:u,v=Ze(h,g,t,n,r),P=Ze(p,b,t,n,r),m=e.prevZ,x=e.nextZ;m&&m.z>=v&&x&&x.z<=P;){if(m.x>=h&&m.x<=p&&m.y>=g&&m.y<=b&&m!==i&&m!==s&&Z(a,d,c,l,f,u,m.x,m.y)&&w(m.prev,m,m.next)>=0||(m=m.prevZ,x.x>=h&&x.x<=p&&x.y>=g&&x.y<=b&&x!==i&&x!==s&&Z(a,d,c,l,f,u,x.x,x.y)&&w(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;m&&m.z>=v;){if(m.x>=h&&m.x<=p&&m.y>=g&&m.y<=b&&m!==i&&m!==s&&Z(a,d,c,l,f,u,m.x,m.y)&&w(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;x&&x.z<=P;){if(x.x>=h&&x.x<=p&&x.y>=g&&x.y<=b&&x!==i&&x!==s&&Z(a,d,c,l,f,u,x.x,x.y)&&w(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Un(e,t,n){var r=e;do{var i=r.prev,o=r.next.next;!Ee(i,o)&&Wt(i,r,r.next,o)&&X(i,o)&&X(o,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(o.i/n|0),q(r),q(r.next),r=e=o),r=r.next}while(r!==e);return G(r)}function Vn(e,t,n,r,i,o){var s=e;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&er(s,a)){var c=Jt(s,a);s=G(s,s.next),c=G(c,c.next),Y(s,t,n,r,i,o,0),Y(c,t,n,r,i,o,0);return}a=a.next}s=s.next}while(s!==e)}function Hn(e,t,n,r){var i=[],o,s,a,c,f;for(o=0,s=t.length;o<s;o++)a=t[o]*r,c=o<s-1?t[o+1]*r:e.length,f=Ht(e,a,c,r,!1),f===f.next&&(f.steiner=!0),i.push(Qn(f));for(i.sort(Wn),o=0;o<i.length;o++)n=Jn(i[o],n);return n}function Wn(e,t){return e.x-t.x}function Jn(e,t){var n=Kn(e,t);if(!n)return t;var r=Jt(n,e);return G(r,r.next),G(n,n.next)}function Kn(e,t){var n=t,r=e.x,i=e.y,o=-1/0,s;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var a=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=r&&a>o&&(o=a,s=n.x<n.next.x?n:n.next,a===r))return s}n=n.next}while(n!==t);if(!s)return null;var c=s,f=s.x,d=s.y,l=1/0,u;n=s;do r>=n.x&&n.x>=f&&r!==n.x&&Z(i<d?r:o,i,f,d,i<d?o:r,i,n.x,n.y)&&(u=Math.abs(i-n.y)/(r-n.x),X(n,e)&&(u<l||u===l&&(n.x>s.x||n.x===s.x&&Yn(s,n)))&&(s=n,l=u)),n=n.next;while(n!==c);return s}function Yn(e,t){return w(e.prev,e,t.prev)<0&&w(t.next,e,e.next)<0}function Xn(e,t,n,r){var i=e;do i.z===0&&(i.z=Ze(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,qn(i)}function qn(e){var t,n,r,i,o,s,a,c,f=1;do{for(n=e,e=null,o=null,s=0;n;){for(s++,r=n,a=0,t=0;t<f&&(a++,r=r.nextZ,!!r);t++);for(c=f;a>0||c>0&&r;)a!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,c--),o?o.nextZ=i:e=i,i.prevZ=o,o=i;n=r}o.nextZ=null,f*=2}while(s>1);return e}function Ze(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Qn(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Z(e,t,n,r,i,o,s,a){return(i-s)*(t-a)>=(e-s)*(o-a)&&(e-s)*(r-a)>=(n-s)*(t-a)&&(n-s)*(o-a)>=(i-s)*(r-a)}function er(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!tr(e,t)&&(X(e,t)&&X(t,e)&&nr(e,t)&&(w(e.prev,e,t.prev)||w(e,t.prev,t))||Ee(e,t)&&w(e.prev,e,e.next)>0&&w(t.prev,t,t.next)>0)}function w(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ee(e,t){return e.x===t.x&&e.y===t.y}function Wt(e,t,n,r){var i=ce(w(e,t,n)),o=ce(w(e,t,r)),s=ce(w(n,r,e)),a=ce(w(n,r,t));return!!(i!==o&&s!==a||i===0&&fe(e,n,t)||o===0&&fe(e,r,t)||s===0&&fe(n,e,r)||a===0&&fe(n,t,r))}function fe(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ce(e){return e>0?1:e<0?-1:0}function tr(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Wt(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function X(e,t){return w(e.prev,e,e.next)<0?w(e,t,e.next)>=0&&w(e,e.prev,t)>=0:w(e,t,e.prev)<0||w(e,e.next,t)<0}function nr(e,t){var n=e,r=!1,i=(e.x+t.x)/2,o=(e.y+t.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&i<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Jt(e,t){var n=new Ue(e.i,e.x,e.y),r=new Ue(t.i,t.x,t.y),i=e.next,o=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function lt(e,t,n,r){var i=new Ue(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function q(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ue(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Le.deviation=function(e,t,n,r){var i=t&&t.length,o=i?t[0]*n:e.length,s=Math.abs(Ve(e,0,o,n));if(i)for(var a=0,c=t.length;a<c;a++){var f=t[a]*n,d=a<c-1?t[a+1]*n:e.length;s-=Math.abs(Ve(e,f,d,n))}var l=0;for(a=0;a<r.length;a+=3){var u=r[a]*n,h=r[a+1]*n,g=r[a+2]*n;l+=Math.abs((e[u]-e[g])*(e[h+1]-e[u+1])-(e[u]-e[h])*(e[g+1]-e[u+1]))}return s===0&&l===0?0:Math.abs((l-s)/s)};function Ve(e,t,n,r){for(var i=0,o=t,s=n-r;o<n;o+=r)i+=(e[s]-e[o])*(e[o+1]+e[s+1]),s=o;return i}Le.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var o=0;o<e[i].length;o++)for(var s=0;s<t;s++)n.vertices.push(e[i][o][s]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n};const le=Rt.CLOCKWISE,dt=Rt.COUNTER_CLOCKWISE,F={isClosed:!0};function rr(e){if(e=e&&e.positions||e,!Array.isArray(e)&&!ArrayBuffer.isView(e))throw new Error("invalid polygon")}function J(e){return"positions"in e?e.positions:e}function me(e){return"holeIndices"in e?e.holeIndices:null}function ir(e){return Array.isArray(e[0])}function or(e){return e.length>=1&&e[0].length>=2&&Number.isFinite(e[0][0])}function sr(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function ar(e,t,n,r){for(let i=0;i<t;i++)if(e[n+i]!==e[r-t+i])return!1;return!0}function ut(e,t,n,r,i){let o=t;const s=n.length;for(let a=0;a<s;a++)for(let c=0;c<r;c++)e[o++]=n[a][c]||0;if(!sr(n))for(let a=0;a<r;a++)e[o++]=n[0][a]||0;return F.start=t,F.end=o,F.size=r,Gt(e,i,F),o}function ht(e,t,n,r,i=0,o,s){o=o||n.length;const a=o-i;if(a<=0)return t;let c=t;for(let f=0;f<a;f++)e[c++]=n[i+f];if(!ar(n,r,i,o))for(let f=0;f<r;f++)e[c++]=n[i+f];return F.start=t,F.end=c,F.size=r,Gt(e,s,F),c}function fr(e,t){rr(e);const n=[],r=[];if("positions"in e){const{positions:i,holeIndices:o}=e;if(o){let s=0;for(let a=0;a<=o.length;a++)s=ht(n,s,i,t,o[a-1],o[a],a===0?le:dt),r.push(s);return r.pop(),{positions:n,holeIndices:r}}e=i}if(!ir(e))return ht(n,0,e,t,0,n.length,le),n;if(!or(e)){let i=0;for(const[o,s]of e.entries())i=ut(n,i,s,t,o===0?le:dt),r.push(i);return r.pop(),{positions:n,holeIndices:r}}return ut(n,0,e,t,le),n}function cr(e,t,n){let r=me(e);r&&(r=r.map(o=>o/t));let i=J(e);if(n){const o=i.length;i=i.slice();const s=[];for(let a=0;a<o;a+=t){s[0]=i[a],s[1]=i[a+1];const c=n(s);i[a]=c[0],i[a+1]=c[1]}}return Ye.exports(i,r,t)}class lr extends Ot{constructor(t){const{fp64:n,IndexType:r=Uint32Array}=t;super({...t,attributes:{positions:{size:3,type:n?Float64Array:Float32Array},vertexValid:{type:Uint8ClampedArray,size:1},indices:{type:r,size:1}}})}get(t){const{attributes:n}=this;return t==="indices"?n.indices&&n.indices.subarray(0,this.vertexCount):n[t]}updateGeometry(t){super.updateGeometry(t);const n=this.buffers.indices;if(n)this.vertexCount=(n.value||n).length;else if(this.data&&!this.getGeometry)throw new Error("missing indices buffer")}normalizeGeometry(t){if(this.normalize){const n=fr(t,this.positionSize);return this.opts.resolution?$t(J(n),me(n),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?In(J(n),me(n),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):n}return t}getGeometrySize(t){if(pt(t)){let n=0;for(const r of t)n+=this.getGeometrySize(r);return n}return J(t).length/this.positionSize}getGeometryFromBuffer(t){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(t):null}updateGeometryAttributes(t,n){if(t&&pt(t))for(const r of t){const i=this.getGeometrySize(r);n.geometrySize=i,this.updateGeometryAttributes(r,n),n.vertexStart+=i,n.indexStart=this.indexStarts[n.geometryIndex+1]}else this._updateIndices(t,n),this._updatePositions(t,n),this._updateVertexValid(t,n)}_updateIndices(t,{geometryIndex:n,vertexStart:r,indexStart:i}){const{attributes:o,indexStarts:s,typedArrayManager:a}=this;let c=o.indices;if(!c||!t)return;let f=i;const d=cr(t,this.positionSize,this.opts.preproject);c=a.allocate(c,i+d.length,{copy:!0});for(let l=0;l<d.length;l++)c[f++]=d[l]+r;s[n+1]=i+d.length,o.indices=c}_updatePositions(t,{vertexStart:n,geometrySize:r}){const{attributes:{positions:i},positionSize:o}=this;if(!i||!t)return;const s=J(t);for(let a=n,c=0;c<r;a++,c++){const f=s[c*o],d=s[c*o+1],l=o>2?s[c*o+2]:0;i[a*3]=f,i[a*3+1]=d,i[a*3+2]=l}}_updateVertexValid(t,{vertexStart:n,geometrySize:r}){const{positionSize:i}=this,o=this.attributes.vertexValid,s=t&&me(t);if(t&&t.edgeTypes?o.set(t.edgeTypes,n):o.fill(1,n,n+r),s)for(let a=0;a<s.length;a++)o[n+s[a]/i-1]=0;o[n+r-1]=0}}function pt(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}const Kt=`
attribute vec2 vertexPositions;
attribute float vertexValid;

uniform bool extruded;
uniform bool isWireframe;
uniform float elevationScale;
uniform float opacity;

varying vec4 vColor;

struct PolygonProps {
  vec4 fillColors;
  vec4 lineColors;
  vec3 positions;
  vec3 nextPositions;
  vec3 pickingColors;
  vec3 positions64Low;
  vec3 nextPositions64Low;
  float elevations;
};

vec3 project_offset_normal(vec3 vector) {
  if (project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
    // normals generated by the polygon tesselator are in lnglat offsets instead of meters
    return normalize(vector * project_uCommonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

void calculatePosition(PolygonProps props) {
#ifdef IS_SIDE_VERTEX
  if(vertexValid < 0.5){
    gl_Position = vec4(0.);
    return;
  }
#endif

  vec3 pos;
  vec3 pos64Low;
  vec3 normal;
  vec4 colors = isWireframe ? props.lineColors : props.fillColors;

  geometry.worldPosition = props.positions;
  geometry.worldPositionAlt = props.nextPositions;
  geometry.pickingColor = props.pickingColors;

#ifdef IS_SIDE_VERTEX
  pos = mix(props.positions, props.nextPositions, vertexPositions.x);
  pos64Low = mix(props.positions64Low, props.nextPositions64Low, vertexPositions.x);
#else
  pos = props.positions;
  pos64Low = props.positions64Low;
#endif

  if (extruded) {
    pos.z += props.elevations * vertexPositions.y * elevationScale;
  }
  gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);

  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  if (extruded) {
  #ifdef IS_SIDE_VERTEX
    normal = vec3(
      props.positions.y - props.nextPositions.y + (props.positions64Low.y - props.nextPositions64Low.y),
      props.nextPositions.x - props.positions.x + (props.nextPositions64Low.x - props.positions64Low.x),
      0.0);
    normal = project_offset_normal(normal);
  #else
    normal = project_normal(vec3(0.0, 0.0, 1.0));
  #endif
    geometry.normal = normal;
    vec3 lightColor = lighting_getLightColor(colors.rgb, project_uCameraPosition, geometry.position.xyz, normal);
    vColor = vec4(lightColor, colors.a * opacity);
  } else {
    vColor = vec4(colors.rgb, colors.a * opacity);
  }
  DECKGL_FILTER_COLOR(vColor, geometry);
}
`,dr=`#define SHADER_NAME solid-polygon-layer-vertex-shader

attribute vec3 positions;
attribute vec3 positions64Low;
attribute float elevations;
attribute vec4 fillColors;
attribute vec4 lineColors;
attribute vec3 pickingColors;

`.concat(Kt,`

void main(void) {
  PolygonProps props;

  props.positions = positions;
  props.positions64Low = positions64Low;
  props.elevations = elevations;
  props.fillColors = fillColors;
  props.lineColors = lineColors;
  props.pickingColors = pickingColors;

  calculatePosition(props);
}
`),ur=`#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX


attribute vec3 instancePositions;
attribute vec3 nextPositions;
attribute vec3 instancePositions64Low;
attribute vec3 nextPositions64Low;
attribute float instanceElevations;
attribute vec4 instanceFillColors;
attribute vec4 instanceLineColors;
attribute vec3 instancePickingColors;

`.concat(Kt,`

void main(void) {
  PolygonProps props;

  #if RING_WINDING_ORDER_CW == 1
    props.positions = instancePositions;
    props.positions64Low = instancePositions64Low;
    props.nextPositions = nextPositions;
    props.nextPositions64Low = nextPositions64Low;
  #else
    props.positions = nextPositions;
    props.positions64Low = nextPositions64Low;
    props.nextPositions = instancePositions;
    props.nextPositions64Low = instancePositions64Low;
  #endif
  props.elevations = instanceElevations;
  props.fillColors = instanceFillColors;
  props.lineColors = instanceLineColors;
  props.pickingColors = instancePickingColors;

  calculatePosition(props);
}
`),hr=`#define SHADER_NAME solid-polygon-layer-fragment-shader

precision highp float;

varying vec4 vColor;

void main(void) {
  gl_FragColor = vColor;

  DECKGL_FILTER_COLOR(gl_FragColor, geometry);
}
`,be=[0,0,0,255],pr={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:e=>e.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:be},getLineColor:{type:"accessor",value:be},material:!0},de={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};class Yt extends It{constructor(...t){super(...t),S(this,"state",void 0)}getShaders(t){return super.getShaders({vs:t==="top"?dr:ur,fs:hr,defines:{RING_WINDING_ORDER_CW:!this.props._normalize&&this.props._windingOrder==="CCW"?0:1},modules:[kt,Pn,Ft]})}get wrapLongitude(){return!1}initializeState(){const{gl:t,viewport:n}=this.context;let{coordinateSystem:r}=this.props;n.isGeospatial&&r===Te.DEFAULT&&(r=Te.LNGLAT),this.setState({numInstances:0,polygonTesselator:new lr({preproject:r===Te.LNGLAT&&n.projectFlat.bind(n),fp64:this.use64bitPositions(),IndexType:!t||yn(t,wn.ELEMENT_INDEX_UINT32)?Uint32Array:Uint16Array})});const i=this.getAttributeManager(),o=!0;i.remove(["instancePickingColors"]),i.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:o},positions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:de,accessor:"getPolygon",update:this.calculatePositions,noAlloc:o,shaderAttributes:{positions:{vertexOffset:0,divisor:0},instancePositions:{vertexOffset:0,divisor:1},nextPositions:{vertexOffset:1,divisor:1}}},vertexValid:{size:1,divisor:1,type:5121,update:this.calculateVertexValid,noAlloc:o},elevations:{size:1,transition:de,accessor:"getElevation",shaderAttributes:{elevations:{divisor:0},instanceElevations:{divisor:1}}},fillColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:de,accessor:"getFillColor",defaultValue:be,shaderAttributes:{fillColors:{divisor:0},instanceFillColors:{divisor:1}}},lineColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:de,accessor:"getLineColor",defaultValue:be,shaderAttributes:{lineColors:{divisor:0},instanceLineColors:{divisor:1}}},pickingColors:{size:3,type:5121,accessor:(s,{index:a,target:c})=>this.encodePickingColor(s&&s.__source?s.__source.index:a,c),shaderAttributes:{pickingColors:{divisor:0},instancePickingColors:{divisor:1}}}})}getPickingInfo(t){const n=super.getPickingInfo(t),{index:r}=n,{data:i}=this.props;return i[0]&&i[0].__source&&(n.object=i.find(o=>o.__source.index===r)),n}disablePickingIndex(t){const{data:n}=this.props;if(n[0]&&n[0].__source)for(let r=0;r<n.length;r++)n[r].__source.index===t&&this._disablePickingIndex(r);else this._disablePickingIndex(t)}draw({uniforms:t}){const{extruded:n,filled:r,wireframe:i,elevationScale:o}=this.props,{topModel:s,sideModel:a,polygonTesselator:c}=this.state,f={...t,extruded:Boolean(n),elevationScale:o};a&&(a.setInstanceCount(c.instanceCount-1),a.setUniforms(f),i&&(a.setDrawMode(3),a.setUniforms({isWireframe:!0}).draw()),r&&(a.setDrawMode(6),a.setUniforms({isWireframe:!1}).draw())),s&&(s.setVertexCount(c.vertexCount),s.setUniforms(f).draw())}updateState(t){super.updateState(t),this.updateGeometry(t);const{props:n,oldProps:r,changeFlags:i}=t,o=this.getAttributeManager();if(i.extensionsChanged||n.filled!==r.filled||n.extruded!==r.extruded){var a;(a=this.state.models)===null||a===void 0||a.forEach(c=>c.delete()),this.setState(this._getModels(this.context.gl)),o.invalidateAll()}}updateGeometry({props:t,oldProps:n,changeFlags:r}){if(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getPolygon)){const{polygonTesselator:o}=this.state,s=t.data.attributes||{};o.updateGeometry({data:t.data,normalize:t._normalize,geometryBuffer:s.getPolygon,buffers:s,getGeometry:t.getPolygon,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:r.dataChanged}),this.setState({numInstances:o.instanceCount,startIndices:o.vertexStarts}),r.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(t){const{id:n,filled:r,extruded:i}=this.props;let o,s;if(r){const a=this.getShaders("top");a.defines.NON_INSTANCED_MODEL=1,o=new $e(t,{...a,id:"".concat(n,"-top"),drawMode:4,attributes:{vertexPositions:new Float32Array([0,1])},uniforms:{isWireframe:!1,isSideVertex:!1},vertexCount:0,isIndexed:!0})}return i&&(s=new $e(t,{...this.getShaders("side"),id:"".concat(n,"-side"),geometry:new zt({drawMode:1,vertexCount:4,attributes:{vertexPositions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),instanceCount:0,isInstanced:1}),s.userData.excludeAttributes={indices:!0}),{models:[s,o].filter(Boolean),topModel:o,sideModel:s}}calculateIndices(t){const{polygonTesselator:n}=this.state;t.startIndices=n.indexStarts,t.value=n.get("indices")}calculatePositions(t){const{polygonTesselator:n}=this.state;t.startIndices=n.vertexStarts,t.value=n.get("positions")}calculateVertexValid(t){t.value=this.state.polygonTesselator.get("vertexValid")}}S(Yt,"defaultProps",pr);S(Yt,"layerName","SolidPolygonLayer");function xe(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function gr(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Xt(e){let t,n,r;e.length!==2?(t=xe,n=(a,c)=>xe(e(a),c),r=(a,c)=>e(a)-c):(t=e===xe||e===gr?e:mr,n=e,r=e);function i(a,c,f=0,d=a.length){if(f<d){if(t(c,c)!==0)return d;do{const l=f+d>>>1;n(a[l],c)<0?f=l+1:d=l}while(f<d)}return f}function o(a,c,f=0,d=a.length){if(f<d){if(t(c,c)!==0)return d;do{const l=f+d>>>1;n(a[l],c)<=0?f=l+1:d=l}while(f<d)}return f}function s(a,c,f=0,d=a.length){const l=i(a,c,f,d-1);return l>f&&r(a[l-1],c)>-r(a[l],c)?l-1:l}return{left:i,center:s,right:o}}function mr(){return 0}function xr(e){return e===null?NaN:+e}const br=Xt(xe),vr=br.right;Xt(xr).center;const yr=vr,wr=Math.sqrt(50),Pr=Math.sqrt(10),Cr=Math.sqrt(2);function ve(e,t,n){const r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),o=r/Math.pow(10,i),s=o>=wr?10:o>=Pr?5:o>=Cr?2:1;let a,c,f;return i<0?(f=Math.pow(10,-i)/s,a=Math.round(e*f),c=Math.round(t*f),a/f<e&&++a,c/f>t&&--c,f=-f):(f=Math.pow(10,i)*s,a=Math.round(e/f),c=Math.round(t/f),a*f<e&&++a,c*f>t&&--c),c<a&&.5<=n&&n<2?ve(e,t,n*2):[a,c,f]}function Sr(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[i,o,s]=r?ve(t,e,n):ve(e,t,n);if(!(o>=i))return[];const a=o-i+1,c=new Array(a);if(r)if(s<0)for(let f=0;f<a;++f)c[f]=(o-f)/-s;else for(let f=0;f<a;++f)c[f]=(o-f)*s;else if(s<0)for(let f=0;f<a;++f)c[f]=(i+f)/-s;else for(let f=0;f<a;++f)c[f]=(i+f)*s;return c}function He(e,t,n){return t=+t,e=+e,n=+n,ve(e,t,n)[2]}function _r(e,t,n){t=+t,e=+e,n=+n;const r=t<e,i=r?He(t,e,n):He(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function Xe(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function qt(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function te(){}var Q=.7,ye=1/Q,U="\\s*([+-]?\\d+)\\s*",ee="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",N="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Mr=/^#([0-9a-f]{3,8})$/,Lr=new RegExp(`^rgb\\(${U},${U},${U}\\)$`),Er=new RegExp(`^rgb\\(${N},${N},${N}\\)$`),Ar=new RegExp(`^rgba\\(${U},${U},${U},${ee}\\)$`),Tr=new RegExp(`^rgba\\(${N},${N},${N},${ee}\\)$`),Nr=new RegExp(`^hsl\\(${ee},${N},${N}\\)$`),Ir=new RegExp(`^hsla\\(${ee},${N},${N},${ee}\\)$`),gt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Xe(te,D,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:mt,formatHex:mt,formatHex8:kr,formatHsl:Fr,formatRgb:xt,toString:xt});function mt(){return this.rgb().formatHex()}function kr(){return this.rgb().formatHex8()}function Fr(){return Qt(this).formatHsl()}function xt(){return this.rgb().formatRgb()}function D(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Mr.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?bt(t):n===3?new M(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?ue(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?ue(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Lr.exec(e))?new M(t[1],t[2],t[3],1):(t=Er.exec(e))?new M(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Ar.exec(e))?ue(t[1],t[2],t[3],t[4]):(t=Tr.exec(e))?ue(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Nr.exec(e))?wt(t[1],t[2]/100,t[3]/100,1):(t=Ir.exec(e))?wt(t[1],t[2]/100,t[3]/100,t[4]):gt.hasOwnProperty(e)?bt(gt[e]):e==="transparent"?new M(NaN,NaN,NaN,0):null}function bt(e){return new M(e>>16&255,e>>8&255,e&255,1)}function ue(e,t,n,r){return r<=0&&(e=t=n=NaN),new M(e,t,n,r)}function zr(e){return e instanceof te||(e=D(e)),e?(e=e.rgb(),new M(e.r,e.g,e.b,e.opacity)):new M}function we(e,t,n,r){return arguments.length===1?zr(e):new M(e,t,n,r??1)}function M(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Xe(M,we,qt(te,{brighter(e){return e=e==null?ye:Math.pow(ye,e),new M(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Q:Math.pow(Q,e),new M(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new M(R(this.r),R(this.g),R(this.b),Pe(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:vt,formatHex:vt,formatHex8:Or,formatRgb:yt,toString:yt}));function vt(){return`#${O(this.r)}${O(this.g)}${O(this.b)}`}function Or(){return`#${O(this.r)}${O(this.g)}${O(this.b)}${O((isNaN(this.opacity)?1:this.opacity)*255)}`}function yt(){const e=Pe(this.opacity);return`${e===1?"rgb(":"rgba("}${R(this.r)}, ${R(this.g)}, ${R(this.b)}${e===1?")":`, ${e})`}`}function Pe(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function R(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function O(e){return e=R(e),(e<16?"0":"")+e.toString(16)}function wt(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new E(e,t,n,r)}function Qt(e){if(e instanceof E)return new E(e.h,e.s,e.l,e.opacity);if(e instanceof te||(e=D(e)),!e)return new E;if(e instanceof E)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),s=NaN,a=o-i,c=(o+i)/2;return a?(t===o?s=(n-r)/a+(n<r)*6:n===o?s=(r-t)/a+2:s=(t-n)/a+4,a/=c<.5?o+i:2-o-i,s*=60):a=c>0&&c<1?0:s,new E(s,a,c,e.opacity)}function Rr(e,t,n,r){return arguments.length===1?Qt(e):new E(e,t,n,r??1)}function E(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Xe(E,Rr,qt(te,{brighter(e){return e=e==null?ye:Math.pow(ye,e),new E(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Q:Math.pow(Q,e),new E(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new M(ke(e>=240?e-240:e+120,i,r),ke(e,i,r),ke(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new E(Pt(this.h),he(this.s),he(this.l),Pe(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Pe(this.opacity);return`${e===1?"hsl(":"hsla("}${Pt(this.h)}, ${he(this.s)*100}%, ${he(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Pt(e){return e=(e||0)%360,e<0?e+360:e}function he(e){return Math.max(0,Math.min(1,e||0))}function ke(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}function Gr(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function en(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}function Dr(e,t,n,r,i){var o=e*e,s=o*e;return((1-3*e+3*o-s)*t+(4-6*o+3*s)*n+(1+3*e+3*o-3*s)*r+s*i)/6}function $r(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),i=e[r],o=e[r+1],s=r>0?e[r-1]:2*i-o,a=r<t-1?e[r+2]:2*o-i;return Dr((n-r/t)*t,s,i,o,a)}}const qe=e=>()=>e;function jr(e,t){return function(n){return e+n*t}}function Br(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Zr(e){return(e=+e)==1?tn:function(t,n){return n-t?Br(t,n,e):qe(isNaN(t)?n:t)}}function tn(e,t){var n=t-e;return n?jr(e,n):qe(isNaN(e)?t:e)}const Ct=function e(t){var n=Zr(t);function r(i,o){var s=n((i=we(i)).r,(o=we(o)).r),a=n(i.g,o.g),c=n(i.b,o.b),f=tn(i.opacity,o.opacity);return function(d){return i.r=s(d),i.g=a(d),i.b=c(d),i.opacity=f(d),i+""}}return r.gamma=e,r}(1);function Ur(e){return function(t){var n=t.length,r=new Array(n),i=new Array(n),o=new Array(n),s,a;for(s=0;s<n;++s)a=we(t[s]),r[s]=a.r||0,i[s]=a.g||0,o[s]=a.b||0;return r=e(r),i=e(i),o=e(o),a.opacity=1,function(c){return a.r=r(c),a.g=i(c),a.b=o(c),a+""}}}var Vr=Ur($r);function Hr(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(o){for(i=0;i<n;++i)r[i]=e[i]*(1-o)+t[i]*o;return r}}function Wr(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Jr(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),o=new Array(n),s;for(s=0;s<r;++s)i[s]=H(e[s],t[s]);for(;s<n;++s)o[s]=t[s];return function(a){for(s=0;s<r;++s)o[s]=i[s](a);return o}}function Kr(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Ce(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Yr(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=H(e[i],t[i]):r[i]=t[i];return function(o){for(i in n)r[i]=n[i](o);return r}}var We=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Fe=new RegExp(We.source,"g");function Xr(e){return function(){return e}}function qr(e){return function(t){return e(t)+""}}function Qr(e,t){var n=We.lastIndex=Fe.lastIndex=0,r,i,o,s=-1,a=[],c=[];for(e=e+"",t=t+"";(r=We.exec(e))&&(i=Fe.exec(t));)(o=i.index)>n&&(o=t.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(r=r[0])===(i=i[0])?a[s]?a[s]+=i:a[++s]=i:(a[++s]=null,c.push({i:s,x:Ce(r,i)})),n=Fe.lastIndex;return n<t.length&&(o=t.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?c[0]?qr(c[0].x):Xr(t):(t=c.length,function(f){for(var d=0,l;d<t;++d)a[(l=c[d]).i]=l.x(f);return a.join("")})}function H(e,t){var n=typeof t,r;return t==null||n==="boolean"?qe(t):(n==="number"?Ce:n==="string"?(r=D(t))?(t=r,Ct):Qr:t instanceof D?Ct:t instanceof Date?Kr:Wr(t)?Hr:Array.isArray(t)?Jr:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Yr:Ce)(e,t)}function Qe(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function ei(e,t){t===void 0&&(t=e,e=H);for(var n=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);n<r;)o[n]=e(i,i=t[++n]);return function(s){var a=Math.max(0,Math.min(r-1,Math.floor(s*=r)));return o[a](s-a)}}function ti(e){return function(){return e}}function ni(e){return+e}var St=[0,1];function T(e){return e}function Je(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:ti(isNaN(t)?NaN:.5)}function ri(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function ii(e,t,n){var r=e[0],i=e[1],o=t[0],s=t[1];return i<r?(r=Je(i,r),o=n(s,o)):(r=Je(r,i),o=n(o,s)),function(a){return o(r(a))}}function oi(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),o=new Array(r),s=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<r;)i[s]=Je(e[s],e[s+1]),o[s]=n(t[s],t[s+1]);return function(a){var c=yr(e,a,1,r)-1;return o[c](i[c](a))}}function si(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function ai(){var e=St,t=St,n=H,r,i,o,s=T,a,c,f;function d(){var u=Math.min(e.length,t.length);return s!==T&&(s=ri(e[0],e[u-1])),a=u>2?oi:ii,c=f=null,l}function l(u){return u==null||isNaN(u=+u)?o:(c||(c=a(e.map(r),t,n)))(r(s(u)))}return l.invert=function(u){return s(i((f||(f=a(t,e.map(r),Ce)))(u)))},l.domain=function(u){return arguments.length?(e=Array.from(u,ni),d()):e.slice()},l.range=function(u){return arguments.length?(t=Array.from(u),d()):t.slice()},l.rangeRound=function(u){return t=Array.from(u),n=Qe,d()},l.clamp=function(u){return arguments.length?(s=u?!0:T,d()):s!==T},l.interpolate=function(u){return arguments.length?(n=u,d()):n},l.unknown=function(u){return arguments.length?(o=u,l):o},function(u,h){return r=u,i=h,d()}}function fi(){return ai()(T,T)}function ci(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Se(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function V(e){return e=Se(Math.abs(e)),e?e[1]:NaN}function li(e,t){return function(n,r){for(var i=n.length,o=[],s=0,a=e[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),o.push(n.substring(i-=a,i+a)),!((c+=a+1)>r));)a=e[s=(s+1)%e.length];return o.reverse().join(t)}}function di(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var ui=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function _e(e){if(!(t=ui.exec(e)))throw new Error("invalid format: "+e);var t;return new et({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}_e.prototype=et.prototype;function et(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}et.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function hi(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var nn;function pi(e,t){var n=Se(e,t);if(!n)return e+"";var r=n[0],i=n[1],o=i-(nn=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,s=r.length;return o===s?r:o>s?r+new Array(o-s+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Se(e,Math.max(0,t+o-1))[0]}function _t(e,t){var n=Se(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const Mt={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:ci,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>_t(e*100,t),r:_t,s:pi,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Lt(e){return e}var Et=Array.prototype.map,At=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function gi(e){var t=e.grouping===void 0||e.thousands===void 0?Lt:li(Et.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?Lt:di(Et.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",a=e.minus===void 0?"\u2212":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function f(l){l=_e(l);var u=l.fill,h=l.align,g=l.sign,p=l.symbol,b=l.zero,v=l.width,P=l.comma,m=l.precision,x=l.trim,C=l.type;C==="n"?(P=!0,C="g"):Mt[C]||(m===void 0&&(m=12),x=!0,C="g"),(b||u==="0"&&h==="=")&&(b=!0,u="0",h="=");var $=p==="$"?n:p==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():"",j=p==="$"?r:/[%p]/.test(C)?s:"",k=Mt[C],hn=/[defgprs%]/.test(C);m=m===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m));function it(y){var z=$,L=j,B,ot,ie;if(C==="c")L=k(y)+L,y="";else{y=+y;var oe=y<0||1/y<0;if(y=isNaN(y)?c:k(Math.abs(y),m),x&&(y=hi(y)),oe&&+y==0&&g!=="+"&&(oe=!1),z=(oe?g==="("?g:a:g==="-"||g==="("?"":g)+z,L=(C==="s"?At[8+nn/3]:"")+L+(oe&&g==="("?")":""),hn){for(B=-1,ot=y.length;++B<ot;)if(ie=y.charCodeAt(B),48>ie||ie>57){L=(ie===46?i+y.slice(B+1):y.slice(B))+L,y=y.slice(0,B);break}}}P&&!b&&(y=t(y,1/0));var se=z.length+y.length+L.length,I=se<v?new Array(v-se+1).join(u):"";switch(P&&b&&(y=t(I+y,I.length?v-L.length:1/0),I=""),h){case"<":y=z+y+L+I;break;case"=":y=z+I+y+L;break;case"^":y=I.slice(0,se=I.length>>1)+z+y+L+I.slice(se);break;default:y=I+z+y+L;break}return o(y)}return it.toString=function(){return l+""},it}function d(l,u){var h=f((l=_e(l),l.type="f",l)),g=Math.max(-8,Math.min(8,Math.floor(V(u)/3)))*3,p=Math.pow(10,-g),b=At[8+g/3];return function(v){return h(p*v)+b}}return{format:f,formatPrefix:d}}var pe,rn,on;mi({thousands:",",grouping:[3],currency:["$",""]});function mi(e){return pe=gi(e),rn=pe.format,on=pe.formatPrefix,pe}function xi(e){return Math.max(0,-V(Math.abs(e)))}function bi(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(V(t)/3)))*3-V(Math.abs(e)))}function vi(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,V(t)-V(e))+1}function yi(e,t,n,r){var i=_r(e,t,n),o;switch(r=_e(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(o=bi(i,s))&&(r.precision=o),on(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=vi(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=xi(i))&&(r.precision=o-(r.type==="%")*2);break}}return rn(r)}function tt(e){var t=e.domain;return e.ticks=function(n){var r=t();return Sr(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return yi(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,o=r.length-1,s=r[i],a=r[o],c,f,d=10;for(a<s&&(f=s,s=a,a=f,f=i,i=o,o=f);d-- >0;){if(f=He(s,a,n),f===c)return r[i]=s,r[o]=a,t(r);if(f>0)s=Math.floor(s/f)*f,a=Math.ceil(a/f)*f;else if(f<0)s=Math.ceil(s*f)/f,a=Math.floor(a*f)/f;else break;c=f}return e},e}function wi(){var e=fi();return e.copy=function(){return si(e,wi())},Gr.apply(e,arguments),tt(e)}function Pi(){var e=0,t=1,n,r,i,o,s=T,a=!1,c;function f(l){return l==null||isNaN(l=+l)?c:s(i===0?.5:(l=(o(l)-n)*i,a?Math.max(0,Math.min(1,l)):l))}f.domain=function(l){return arguments.length?([e,t]=l,n=o(e=+e),r=o(t=+t),i=n===r?0:1/(r-n),f):[e,t]},f.clamp=function(l){return arguments.length?(a=!!l,f):a},f.interpolator=function(l){return arguments.length?(s=l,f):s};function d(l){return function(u){var h,g;return arguments.length?([h,g]=u,s=l(h,g),f):[s(0),s(1)]}}return f.range=d(H),f.rangeRound=d(Qe),f.unknown=function(l){return arguments.length?(c=l,f):c},function(l){return o=l,n=l(e),r=l(t),i=n===r?0:1/(r-n),f}}function sn(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function Ci(){var e=tt(Pi()(T));return e.copy=function(){return sn(e,Ci())},en.apply(e,arguments)}function Si(){var e=0,t=.5,n=1,r=1,i,o,s,a,c,f=T,d,l=!1,u;function h(p){return isNaN(p=+p)?u:(p=.5+((p=+d(p))-o)*(r*p<r*o?a:c),f(l?Math.max(0,Math.min(1,p)):p))}h.domain=function(p){return arguments.length?([e,t,n]=p,i=d(e=+e),o=d(t=+t),s=d(n=+n),a=i===o?0:.5/(o-i),c=o===s?0:.5/(s-o),r=o<i?-1:1,h):[e,t,n]},h.clamp=function(p){return arguments.length?(l=!!p,h):l},h.interpolator=function(p){return arguments.length?(f=p,h):f};function g(p){return function(b){var v,P,m;return arguments.length?([v,P,m]=b,f=ei(p,[v,P,m]),h):[f(0),f(.5),f(1)]}}return h.range=g(H),h.rangeRound=g(Qe),h.unknown=function(p){return arguments.length?(u=p,h):u},function(p){return d=p,i=p(e),o=p(t),s=p(n),a=i===o?0:.5/(o-i),c=o===s?0:.5/(s-o),r=o<i?-1:1,h}}function _i(){var e=tt(Si()(T));return e.copy=function(){return sn(e,_i())},en.apply(e,arguments)}var Tt={},ze={},Oe=34,W=10,Re=13;function an(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function Mi(e,t){var n=an(e);return function(r,i){return t(n(r),i,e)}}function Nt(e){var t=Object.create(null),n=[];return e.forEach(function(r){for(var i in r)i in t||n.push(t[i]=i)}),n}function _(e,t){var n=e+"",r=n.length;return r<t?new Array(t-r+1).join(0)+n:n}function Li(e){return e<0?"-"+_(-e,6):e>9999?"+"+_(e,6):_(e,4)}function Ei(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Li(e.getUTCFullYear())+"-"+_(e.getUTCMonth()+1,2)+"-"+_(e.getUTCDate(),2)+(i?"T"+_(t,2)+":"+_(n,2)+":"+_(r,2)+"."+_(i,3)+"Z":r?"T"+_(t,2)+":"+_(n,2)+":"+_(r,2)+"Z":n||t?"T"+_(t,2)+":"+_(n,2)+"Z":"")}function Ai(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function r(l,u){var h,g,p=i(l,function(b,v){if(h)return h(b,v-1);g=b,h=u?Mi(b,u):an(b)});return p.columns=g||[],p}function i(l,u){var h=[],g=l.length,p=0,b=0,v,P=g<=0,m=!1;l.charCodeAt(g-1)===W&&--g,l.charCodeAt(g-1)===Re&&--g;function x(){if(P)return ze;if(m)return m=!1,Tt;var $,j=p,k;if(l.charCodeAt(j)===Oe){for(;p++<g&&l.charCodeAt(p)!==Oe||l.charCodeAt(++p)===Oe;);return($=p)>=g?P=!0:(k=l.charCodeAt(p++))===W?m=!0:k===Re&&(m=!0,l.charCodeAt(p)===W&&++p),l.slice(j+1,$-1).replace(/""/g,'"')}for(;p<g;){if((k=l.charCodeAt($=p++))===W)m=!0;else if(k===Re)m=!0,l.charCodeAt(p)===W&&++p;else if(k!==n)continue;return l.slice(j,$)}return P=!0,l.slice(j,g)}for(;(v=x())!==ze;){for(var C=[];v!==Tt&&v!==ze;)C.push(v),v=x();u&&(C=u(C,b++))==null||h.push(C)}return h}function o(l,u){return l.map(function(h){return u.map(function(g){return d(h[g])}).join(e)})}function s(l,u){return u==null&&(u=Nt(l)),[u.map(d).join(e)].concat(o(l,u)).join(`
`)}function a(l,u){return u==null&&(u=Nt(l)),o(l,u).join(`
`)}function c(l){return l.map(f).join(`
`)}function f(l){return l.map(d).join(e)}function d(l){return l==null?"":l instanceof Date?Ei(l):t.test(l+="")?'"'+l.replace(/"/g,'""')+'"':l}return{parse:r,parseRows:i,format:s,formatBody:a,formatRows:c,formatRow:f,formatValue:d}}var Ti=Ai(","),Ni=Ti.parse;function Ii(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function ki(e,t){return fetch(e,t).then(Ii)}function Fi(e){return function(t,n,r){return arguments.length===2&&typeof n=="function"&&(r=n,n=void 0),ki(t,n).then(function(i){return e(i,r)})}}var ne=Fi(Ni);function re(e){for(var t=e.length/6|0,n=new Array(t),r=0;r<t;)n[r]="#"+e.slice(r*6,++r*6);return n}const zi=e=>Vr(e[e.length-1]);var Oi=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(re);const co=zi(Oi);function Ae(e){var t=e.length;return function(n){return e[Math.max(0,Math.min(t-1,Math.floor(n*t)))]}}Ae(re("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));var lo=Ae(re("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));Ae(re("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));Ae(re("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));const uo=e=>{const t=D(e);return[t.r,t.g,t.b]},ho=e=>{const t=D(e),n=Math.trunc(t.opacity);return[t.r/255,t.g/255,t.b/255,n]},Ri=1e3,Gi=1/Ri,Di=60,$i=e=>t=>t.geometry.type==e,ji=async e=>await(await fetch(e)).json(),nt=e=>async t=>(await ji(t)).features.filter($i(e)),Bi=nt("Point"),Zi=nt("LineString"),Ui=nt("Polygon"),Vi=async e=>{console.log("loadNetworkNodes",e);const t=await Bi(e+"/nodes.geojson");return console.log("Number of Nodes:",t.length),t},Hi=async e=>{console.log("loadNetworkEdges",e);const t=await Zi(e+"/edges.geojson");return console.log("Number of Edges:",t.length),t},Wi=async e=>{console.log("loadNetworkZones",e);const t=await Ui(e+"/aggrid_polygon.geojson");return console.log("Number of Zones:",t.length),t},fn=async e=>{const t=await ne(e),n=t[0],r={CapA:parseFloat(n["Capacity Factor A"]),CapF:parseFloat(n["Capacity Factor F"]),FFTT:parseFloat(n["FFTT Factor"])},i=`CapA-${r.CapA.toFixed(2)}-CapF-${r.CapF.toFixed(2)}-FFTT-${r.FFTT.toFixed(2)}`;return{data:t,folder:i}},cn=(e,t)=>e.from==t.from&&e.to==t.to,Ji=(e,t)=>{const n=r=>Math.trunc(parseFloat(r));return n(e.fishnetid)==n(t.fishnetid)},ln=async(e,t)=>{const n=await ne(e,Me);return t.every((r,i)=>{const o=r.properties,s=n[i];if(!cn(o,s))return console.error(`Mismatched link at ${i}.`,o,s),!1;const a=parseFloat(s.distance),c=o.length,f=a/c;o.distance={expected:c,observed:a,ratio:f};const d=parseFloat(s.tt),l=c*Gi/o.maxspeed*Di,u=d/l;let h;Object.hasOwn(s,"estimated?")&&(h=s["estimated?"].toLowerCase()=="yes"),o.traveltime={expected:l,observed:d,ratio:u,estimated:h};let g;return Object.hasOwn(s,"volume")&&(g=parseFloat(s.volume)),o.traveldemand={observed:g},o.congestion=u,!0}),t},dn=async(e,t,n=1)=>{const r=await ne(e,Me),i=t.length,o=new Float32Array(i*i);return r.every((s,a)=>{const c=parseInt(s.origin),f=parseInt(s.destination),d=parseFloat(s.demand);return o[c*i+f]=d*n,!0}),t.every((s,a)=>{const c=s.properties,f=st(Array.from({length:i},(u,h)=>o[h*i+a])),d=st(Array.from({length:i},(u,h)=>o[a*i+h])),l=f-d;return c.traveldemand={incoming:f,outgoing:d,delta:l},!0}),t},po=async(e,t)=>(console.log("loadNetworkEdgeTraveltimes",e),t=await ln(e+"/link_TT.csv",t),t),go=async(e,t)=>(console.log("loadNetworkZoneTraveldemands",e),t=await dn(e+"/zone_TD.csv",t),t),mo=async(e,t)=>{console.log("loadNetworkEdgeModelTraveltimes",e);const r=`/estimates/${(await fn(e+"/Results.csv")).folder}/Elite1LinkResults.csv`;return t=await ln(e+r,t),t},xo=async(e,t)=>{console.log("loadNetworkZoneModelTraveldemands",e);const r=`/estimates/${(await fn(e+"/Results.csv")).folder}/Elite1ODResults.csv`;return t=await dn(e+r,t),t},Ki=cn,Yi=Ji,rt=({networkId:e})=>`/data/networks/${e}`,Xi=({networkId:e,modelId:t})=>`/data/networks/${e}/models/${t}`,un=({networkId:e,modelId:t,assignmentId:n})=>`/data/networks/${e}/models/${t}/assignments/${n}`;async function qi(e){return await Vi(rt(e))}async function Qi(e){return await Hi(rt(e))}async function eo(e){return await Wi(rt(e))}async function to(e,t,n){const{modelId:r,assignmentId:i}=e;return t.every((o,s)=>{const a=o.properties,f=n({},o);return Ke(a,["models",r,"assignments",i],f),!0}),t}async function no(e,t,n){const{modelId:r,assignmentId:i}=e,o=await ne(`${un(e)}/link_emissions.csv`,Me);return t.every((s,a)=>{const c=s.properties,f=o[a];if(!Ki(c,f))return console.error(`Mismatched link at ${a}.`,c,f),!1;const d=n(f,s);return Ke(c,["models",r,"assignments",i],d),!0}),t}async function ro(e,t,n){const{modelId:r,assignmentId:i}=e,o=await ne(`${un(e)}/zone_emissions.csv`,Me);return t.every((s,a)=>{const c=s.properties,f=o[a];if(!Yi(c,f))return console.error(`Mismatched zone at ${a}.`,c,f),!1;const d=n(f,s);return Ke(c,["models",r,"assignments",i],d),!0}),t}const Ge={nodes:qi,links:Qi,zones:eo},De={nodes:to,links:no,zones:ro},io={nodes:(e,t)=>e,links:(e,t)=>{const n=t.properties;e.volume=parseFloat(e.volume);const r=e.volume/n.capacity;return e.volume_capacity={ratio:r},e},zones:(e,t)=>(t.properties,e.emissions=parseFloat(e.co2),e)};async function*bo(e,t,n=io){const i=await(await fetch(`${Xi(e)}/assignments/index.json`)).json();for(const{path:o}of i){const[s,a]=Cn(o),c={...e,assignmentId:a};await Promise.all([De.nodes(c,t.nodes,n.nodes),De.links(c,t.links,n.links),De.zones(c,t.zones,n.zones)]),yield c}}async function vo(e){const[t,n,r]=await Promise.all([Ge.nodes(e),Ge.links(e),Ge.zones(e)]);return{nodes:t,links:n,zones:r}}export{Vt as P,co as R,Yt as S,ji as a,vo as b,bo as c,_i as d,ni as e,tt as f,re as g,zi as h,Gr as i,uo as j,Vi as k,wi as l,lo as m,fr as n,Hi as o,mo as p,po as q,ho as r,Ci as s,Wi as t,xo as u,go as v};
