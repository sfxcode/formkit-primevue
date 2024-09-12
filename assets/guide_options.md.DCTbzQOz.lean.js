import{_ as e,B as l,c as p,j as a,a as n,G as t,a2 as o,o as h}from"./chunks/framework.BZXeJLPV.js";const u=JSON.parse('{"title":"Options","description":"","frontmatter":{},"headers":[],"relativePath":"guide/options.md","filePath":"guide/options.md"}'),r={name:"guide/options.md"};function E(k,s,c,d,y,g){const i=l("DisplayComponents");return h(),p("div",null,[s[0]||(s[0]=a("h1",{id:"options",tabindex:"-1"},[n("Options "),a("a",{class:"header-anchor",href:"#options","aria-label":'Permalink to "Options"'},"​")],-1)),s[1]||(s[1]=a("p",null,"In some inputs options are needed. There are several ways to deal with the options.",-1)),s[2]||(s[2]=a("h2",{id:"option-based-inputs",tabindex:"-1"},[n("Option based Inputs "),a("a",{class:"header-anchor",href:"#option-based-inputs","aria-label":'Permalink to "Option based Inputs"'},"​")],-1)),t(i,{full:!1}),s[3]||(s[3]=o(`<h2 id="ways-of-usage" tabindex="-1">Ways of Usage <a class="header-anchor" href="#ways-of-usage" aria-label="Permalink to &quot;Ways of Usage&quot;">​</a></h2><h3 id="simple-array" tabindex="-1">Simple Array <a class="header-anchor" href="#simple-array" aria-label="Permalink to &quot;Simple Array&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const stringArray = [&#39;refresh&#39;, &#39;hourly&#39;, &#39;daily&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const schema</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">= [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $formkit: &#39;primeDropdown&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: &#39;selectString&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: &#39;Simple String Array Dropdown&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options: stringArray,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="object-array-select-object-by-key" tabindex="-1">Object Array / Select Object by key <a class="header-anchor" href="#object-array-select-object-by-key" aria-label="Permalink to &quot;Object Array / Select Object by key&quot;">​</a></h3><p>Here you have to select a property name for <strong>optionLabel</strong> as key.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const cities = [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { name: &#39;New York&#39;, code: &#39;NY&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { name: &#39;Rome&#39;, code: &#39;RM&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { name: &#39;London&#39;, code: &#39;LDN&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { name: &#39;Istanbul&#39;, code: &#39;IST&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { name: &#39;Paris&#39;, code: &#39;PRS&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const schema = [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $formkit: &#39;primeDropdown&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: &#39;selectObjectByLabel&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: &#39;Select Object Dropdown&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    optionLabel: &#39;name&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options: cities,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="object-array-select-object-by-key-and-value-by-key" tabindex="-1">Object Array / Select Object by key and value by key <a class="header-anchor" href="#object-array-select-object-by-key-and-value-by-key" aria-label="Permalink to &quot;Object Array / Select Object by key and value by key&quot;">​</a></h3><p>Here you have to select a property name for <strong>optionLabel</strong> as key and a property name for <strong>optionValue</strong> as key.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const options = [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { label: &#39;Every page load&#39;, value: &#39;refresh&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { label: &#39;Every hour&#39;, value: &#39;hourly&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { label: &#39;Every day&#39;, value: &#39;daily&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const schema = [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $formkit: &#39;primeDropdown&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: &#39;selectValue&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: &#39;Cookie notice Dropdown&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value: &#39;hourly&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    optionLabel: &#39;label&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    optionValue: &#39;value&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    help: &#39;Cookie notice frequency ?&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div>`,9))])}const m=e(r,[["render",E]]);export{u as __pageData,m as default};
