const c=`#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))

struct AmbientLight {
 vec3 color;
};

struct PointLight {
 vec3 color;
 vec3 position;
 vec3 attenuation;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

uniform AmbientLight lighting_uAmbientLight;
uniform PointLight lighting_uPointLight[MAX_LIGHTS];
uniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];
uniform int lighting_uPointLightCount;
uniform int lighting_uDirectionalLightCount;

uniform bool lighting_uEnabled;

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

#endif
`,h={lightSources:{}};function l(){let{color:t=[0,0,0],intensity:i=1}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t.map(n=>n*i/255)}function s(t){let{ambientLight:i,pointLights:n=[],directionalLights:e=[]}=t;const o={};return i?o["lighting_uAmbientLight.color"]=l(i):o["lighting_uAmbientLight.color"]=[0,0,0],n.forEach((g,r)=>{o["lighting_uPointLight[".concat(r,"].color")]=l(g),o["lighting_uPointLight[".concat(r,"].position")]=g.position,o["lighting_uPointLight[".concat(r,"].attenuation")]=g.attenuation||[1,0,0]}),o.lighting_uPointLightCount=n.length,e.forEach((g,r)=>{o["lighting_uDirectionalLight[".concat(r,"].color")]=l(g),o["lighting_uDirectionalLight[".concat(r,"].direction")]=g.direction}),o.lighting_uDirectionalLightCount=e.length,o}function a(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:h;if("lightSources"in t){const{ambientLight:i,pointLights:n,directionalLights:e}=t.lightSources||{};return i||n&&n.length>0||e&&e.length>0?Object.assign({},s({ambientLight:i,pointLights:n,directionalLights:e}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in t){const i={pointLights:[],directionalLights:[]};for(const n of t.lights||[])switch(n.type){case"ambient":i.ambientLight=n;break;case"directional":i.directionalLights.push(n);break;case"point":i.pointLights.push(n);break}return a({lightSources:i})}return{}}const u={name:"lights",vs:c,fs:c,getUniforms:a,defines:{MAX_LIGHTS:3}},_=`
uniform float lighting_uAmbient;
uniform float lighting_uDiffuse;
uniform float lighting_uShininess;
uniform vec3  lighting_uSpecularColor;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
    vec3 halfway_direction = normalize(light_direction + view_direction);
    float lambertian = dot(light_direction, normal_worldspace);
    float specular = 0.0;
    if (lambertian > 0.0) {
      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
      specular = pow(specular_angle, lighting_uShininess);
    }
    lambertian = max(lambertian, 0.0);
    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (lighting_uEnabled) {
    vec3 view_direction = normalize(cameraPosition - position_worldspace);
    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uPointLightCount) {
        break;
      }
      PointLight pointLight = lighting_uPointLight[i];
      vec3 light_position_worldspace = pointLight.position;
      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
    }

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uDirectionalLightCount) {
        break;
      }
      DirectionalLight directionalLight = lighting_uDirectionalLight[i];
      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}

vec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = vec3(0, 0, 0);
  vec3 surfaceColor = vec3(0, 0, 0);

  if (lighting_uEnabled) {
    vec3 view_direction = normalize(cameraPosition - position_worldspace);

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uPointLightCount) {
        break;
      }
      PointLight pointLight = lighting_uPointLight[i];
      vec3 light_position_worldspace = pointLight.position;
      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
    }

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uDirectionalLightCount) {
        break;
      }
      DirectionalLight directionalLight = lighting_uDirectionalLight[i];
      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,d={};function f(t){const{ambient:i=.35,diffuse:n=.6,shininess:e=32,specularColor:o=[30,30,30]}=t;return{lighting_uAmbient:i,lighting_uDiffuse:n,lighting_uShininess:e,lighting_uSpecularColor:o.map(g=>g/255)}}function L(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:d;if(!("material"in t))return{};const{material:i}=t;return i?f(i):{lighting_uEnabled:!1}}const m={name:"gouraud-lighting",dependencies:[u],vs:_,defines:{LIGHTING_VERTEX:1},getUniforms:L};export{m as g};
