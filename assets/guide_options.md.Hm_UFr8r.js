import{_ as s,c as a,o as n,U as i}from"./chunks/framework.Cv3v39SO.js";const y=JSON.parse('{"title":"Options","description":"","frontmatter":{},"headers":[],"relativePath":"guide/options.md","filePath":"guide/options.md"}'),e={name:"guide/options.md"},l=i(`<h1 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h1><p>In some inputs options are needed. There are several ways to deal with the options.</p><div class="warning custom-block"><p class="custom-block-title">Important Note</p><p>Until Version 1.5.x only Object Array / Select Object by key and value by key was possible. This is fixed from 1.6.x.</p></div><h2 id="option-based-inputs" tabindex="-1">Option based Inputs <a class="header-anchor" href="#option-based-inputs" aria-label="Permalink to &quot;Option based Inputs&quot;">​</a></h2><ul><li>Dropdown</li><li>Listbox</li><li>MultiSelect</li><li>RadioButton</li><li>SelectButton</li></ul><h2 id="ways-of-usage" tabindex="-1">Ways of Usage <a class="header-anchor" href="#ways-of-usage" aria-label="Permalink to &quot;Ways of Usage&quot;">​</a></h2><h3 id="simple-array" tabindex="-1">Simple Array <a class="header-anchor" href="#simple-array" aria-label="Permalink to &quot;Simple Array&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const stringArray = [&#39;refresh&#39;, &#39;hourly&#39;, &#39;daily&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const schema</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">= [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $formkit: &#39;primeDropdown&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: &#39;selectString&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: &#39;Simple String Array Dropdown&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options: stringArray,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="object-array-select-object-by-key" tabindex="-1">Object Array / Select Object by key <a class="header-anchor" href="#object-array-select-object-by-key" aria-label="Permalink to &quot;Object Array / Select Object by key&quot;">​</a></h3><p>Here you have to select a property name for <strong>optionLabel</strong> as key.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const cities = [</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="object-array-select-object-by-key-and-value-by-key" tabindex="-1">Object Array / Select Object by key and value by key <a class="header-anchor" href="#object-array-select-object-by-key-and-value-by-key" aria-label="Permalink to &quot;Object Array / Select Object by key and value by key&quot;">​</a></h3><p>Here you have to select a property name for <strong>optionLabel</strong> as key and a property name for <strong>optionValue</strong> as key.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const options = [</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div>`,14),t=[l];function p(h,o,r,E,k,c){return n(),a("div",null,t)}const g=s(e,[["render",p]]);export{y as __pageData,g as default};
