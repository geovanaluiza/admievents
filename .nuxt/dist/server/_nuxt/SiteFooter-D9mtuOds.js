import { defineComponent, mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _imports_0 = publicAssetsURL("/nu-shield.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))}><div class="container header-inner"><a href="/" class="brand" aria-label="Northwest University Admissions home"><img class="brand-mark"${ssrRenderAttr("src", _imports_0)} alt=""><div class="brand-name"> Northwest University <span>Admissions</span></div></a><nav class="header-nav" aria-label="Main navigation"><a href="/#missions">Upcoming events</a><a href="https://www.northwestu.edu/financial-aid" target="_blank" rel="noopener">Financial aid</a><a href="https://www.northwestu.edu/admissions" target="_blank" rel="noopener">Admissions</a><a href="mailto:admissions@northwestu.edu">Contact</a></nav><div class="header-actions"><a href="mailto:admissions@northwestu.edu" class="btn btn-coral btn-sm"> Register </a></div></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))}><div class="container"><div class="footer-inner"><div class="foot-brand"><img${ssrRenderAttr("src", _imports_0)} alt="Northwest University"><div><strong>Northwest University</strong><p>5520 108th Ave NE, Kirkland, WA 98033</p></div></div><nav class="foot-nav" aria-label="Footer"><a href="https://www.northwestu.edu/admissions" target="_blank" rel="noopener">Admissions</a><a href="https://www.northwestu.edu/financial-aid" target="_blank" rel="noopener">Financial Aid</a><a href="https://nueagles.com" target="_blank" rel="noopener">Athletics</a><a href="https://www.northwestu.edu/about/locations" target="_blank" rel="noopener">Campus Map</a><a href="https://www.northwestu.edu/privacy" target="_blank" rel="noopener">Privacy</a><a href="https://www.northwestu.edu/about/consumer-information" target="_blank" rel="noopener">Title IX</a></nav><div class="foot-social" aria-label="Social media"><a href="https://www.instagram.com/northwestu" target="_blank" rel="noopener" aria-label="Instagram">IG</a><a href="https://www.facebook.com/northwestu" target="_blank" rel="noopener" aria-label="Facebook">FB</a><a href="https://www.youtube.com/northwestuniversity" target="_blank" rel="noopener" aria-label="YouTube">YT</a></div></div><p class="foot-legal"> © ${ssrInterpolate(unref(year))} Northwest University. All rights reserved. · Questions? <a href="mailto:admissions@northwestu.edu" style="${ssrRenderStyle({ "color": "rgba(240,244,248,.55)" })}">admissions@northwestu.edu</a></p></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=SiteFooter-D9mtuOds.js.map
