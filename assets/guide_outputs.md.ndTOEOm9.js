import{_ as s,D as a,c as e,I as i,a4 as n,o as p}from"./chunks/framework.-wPYvEFr.js";const E=JSON.parse('{"title":"Output Components","description":"","frontmatter":{},"headers":[],"relativePath":"guide/outputs.md","filePath":"guide/outputs.md"}'),o={name:"guide/outputs.md"},r=n(`<h1 id="output-components" tabindex="-1">Output Components <a class="header-anchor" href="#output-components" aria-label="Permalink to &quot;Output Components&quot;">​</a></h1><p>formkit-primevue can also be used to output data.</p><p>Different types of data can behandled.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Some outputs depends on vue-i18n e.g. <strong>OutputNumber</strong> or <strong>OutputDate</strong>.</p><p>numberFormats / datetimeFormats from vue-i18n are used to display the values accordingly to the selected format.</p></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="outputnumber" tabindex="-1">OutputNumber <a class="header-anchor" href="#outputnumber" aria-label="Permalink to &quot;OutputNumber&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> formkitItem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      $formkit: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;primeOutputNumber&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mumber&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;decimal&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vue-i18n format</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><h2 id="naming-in-formkit" tabindex="-1">Naming in FormKit <a class="header-anchor" href="#naming-in-formkit" aria-label="Permalink to &quot;Naming in FormKit&quot;">​</a></h2><p>Outputs are used in schema with <strong>prime</strong> as prefix and the <strong>output name</strong> as suffix.</p><p>E.g. OutputText -&gt; primeOutputText</p><h2 id="supported-inputs" tabindex="-1">Supported Inputs <a class="header-anchor" href="#supported-inputs" aria-label="Permalink to &quot;Supported Inputs&quot;">​</a></h2>`,11);function u(l,h,d,m,k,c){const t=a("DisplayOutputComponents");return p(),e("div",null,[r,i(t)])}const f=s(o,[["render",u]]);export{E as __pageData,f as default};
