import{_ as a,C as e,c as l,o as n,j as s,G as h,ag as d,a as p}from"./chunks/framework.5AHqCHuU.js";const c=JSON.parse('{"title":"Form Components","description":"","frontmatter":{},"headers":[],"relativePath":"guide/form.md","filePath":"guide/form.md"}'),r={name:"guide/form.md"};function k(o,t,g,E,y,m){const i=e("DisplayFormComponents");return n(),l("div",null,[t[0]||(t[0]=s("h1",{id:"form-components",tabindex:"-1"},[p("Form Components "),s("a",{class:"header-anchor",href:"#form-components","aria-label":'Permalink to "Form Components"'},"​")],-1)),t[1]||(t[1]=s("p",null,"For the simple usage with schema and data values FormKitDataEdit and FormKitDataView (and FormkitDebug) components are available.",-1)),h(i),t[2]||(t[2]=d(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>To use the components there must be an import or global registration.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FormKitDataEdit v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;formData&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;formSchema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                     @data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">saved</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;submitHandler&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/&gt;</span></span></code></pre></div><h3 id="debug" tabindex="-1">Debug <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;Debug&quot;">​</a></h3><p>Use properties <strong>:debug-schema=&quot;true&quot;</strong> and / or <strong>:debug-data=&quot;true&quot;</strong> for debugging of schema / data.</p><h2 id="formkitdataedit" tabindex="-1">FormKitDataEdit <a class="header-anchor" href="#formkitdataedit" aria-label="Permalink to &quot;FormKitDataEdit&quot;">​</a></h2><h3 id="main-properties" tabindex="-1">Main Properties <a class="header-anchor" href="#main-properties" aria-label="Permalink to &quot;Main Properties&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">Object</td><td style="text-align:left;">The data object to be edited with 2-Way-Binding</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">Object</td><td style="text-align:left;">The data object to be edited</td></tr><tr><td style="text-align:left;">:schema</td><td style="text-align:left;">Object</td><td style="text-align:left;">The schema object to be used</td></tr><tr><td style="text-align:left;">:debug-schema</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">Display the schema</td></tr><tr><td style="text-align:left;">:debug-data</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">Display the data</td></tr><tr><td style="text-align:left;">:show-reset</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">Display some Button for resetting data to initial state</td></tr></tbody></table><h3 id="style-properties" tabindex="-1">Style Properties <a class="header-anchor" href="#style-properties" aria-label="Permalink to &quot;Style Properties&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">formClass</td><td style="text-align:left;">String</td><td style="text-align:left;">Add additional classes to the form</td></tr><tr><td style="text-align:left;">actionsClass</td><td style="text-align:left;">String</td><td style="text-align:left;">Add additional classes to the action div</td></tr><tr><td style="text-align:left;">submitClass</td><td style="text-align:left;">String</td><td style="text-align:left;">Add additional classes to the submit button</td></tr><tr><td style="text-align:left;">submitSeverity</td><td style="text-align:left;">String</td><td style="text-align:left;">PrimeVue Button severity</td></tr><tr><td style="text-align:left;">submitLabel</td><td style="text-align:left;">String</td><td style="text-align:left;">Default: Save</td></tr><tr><td style="text-align:left;">submitIcon</td><td style="text-align:left;">String</td><td style="text-align:left;">PrimeVue Button icon</td></tr><tr><td style="text-align:left;">resetClass</td><td style="text-align:left;">String</td><td style="text-align:left;">Add additional classes to the reset button</td></tr><tr><td style="text-align:left;">resetSeverity</td><td style="text-align:left;">String</td><td style="text-align:left;">PrimeVue Button severity</td></tr><tr><td style="text-align:left;">resetLabel</td><td style="text-align:left;">String</td><td style="text-align:left;">Default: Reset</td></tr><tr><td style="text-align:left;">resetIcon</td><td style="text-align:left;">String</td><td style="text-align:left;">PrimeVue Button icon</td></tr></tbody></table><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { FormKitDataEdit } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@sfxcode/formkit-primevue/components&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> formSchema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// some schema should be provided</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> formData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// some data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> submitHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // some action on form submit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">FormKitDataEdit</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">formData</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">formSchema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debug-schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debug-data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data-saved</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">submitHandler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="formkitdataview" tabindex="-1">FormKitDataView <a class="header-anchor" href="#formkitdataview" aria-label="Permalink to &quot;FormKitDataView&quot;">​</a></h2><p>Same as FormKitDataEdit but without Action Buttons.</p>`,14))])}const u=a(r,[["render",k]]);export{c as __pageData,u as default};
