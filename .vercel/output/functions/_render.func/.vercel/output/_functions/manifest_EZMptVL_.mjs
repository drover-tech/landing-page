import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_C1DoExuu.mjs';
import { e as decodeKey } from './chunks/astro/server_Dgt1kWl0.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/StanleyWalker/Desktop/landing-page/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-EBP01EQ288\");\n"}],"styles":[{"type":"external","src":"/_astro/index.CCuAD0tc.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submitform","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submitForm\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submitForm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submitForm.ts","pathname":"/api/submitForm","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-EBP01EQ288\");\n"}],"styles":[{"type":"external","src":"/_astro/index.CCuAD0tc.css"},{"type":"inline","content":".invalid-feedback[data-astro-cid-uwnxe3i2],.empty-feedback[data-astro-cid-uwnxe3i2]{display:none}.was-validated[data-astro-cid-uwnxe3i2] :-moz-placeholder-shown:invalid[data-astro-cid-uwnxe3i2]~.empty-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :placeholder-shown:invalid[data-astro-cid-uwnxe3i2]~.empty-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :not(:-moz-placeholder-shown):invalid[data-astro-cid-uwnxe3i2]~.invalid-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :not(:placeholder-shown):invalid[data-astro-cid-uwnxe3i2]~.invalid-feedback[data-astro-cid-uwnxe3i2]{display:block}.is-invalid[data-astro-cid-uwnxe3i2],.was-validated[data-astro-cid-uwnxe3i2] :invalid[data-astro-cid-uwnxe3i2]{border-color:#dc3545}.flex[data-astro-cid-uwnxe3i2]{display:flex;gap:1rem}.flex-wrap[data-astro-cid-uwnxe3i2]{flex-wrap:wrap}.flex-1[data-astro-cid-uwnxe3i2]{flex:1 1 50%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astroship.web3templates.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/StanleyWalker/Desktop/landing-page/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/StanleyWalker/Desktop/landing-page/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/submitForm@_@ts":"pages/api/submitform.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/StanleyWalker/Desktop/landing-page/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_EZMptVL_.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.vKWshHKt.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","/_astro/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","/_astro/inter-cyrillic-wght-normal.CMZtQduZ.woff2","/_astro/inter-greek-wght-normal.CaVNZxsx.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/inter-latin-ext-wght-normal.CFHvXkgd.woff2","/_astro/bricolage-grotesque-vietnamese-wght-normal.BUzh504Q.woff2","/_astro/inter-latin-wght-normal.C2S99t-D.woff2","/_astro/bricolage-grotesque-latin-ext-wght-normal.Bng-wUCG.woff2","/_astro/bricolage-grotesque-latin-wght-normal.SiLHXWCe.woff2","/_astro/index.CCuAD0tc.css","/favicon.svg","/opengraph.jpg","/robots.txt"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"bjEE4V3qzR7yWVd+miUwsyl/OZcfVA5YgrxkBnl4t7g=","experimentalEnvGetSecretEnabled":false});

export { manifest };
