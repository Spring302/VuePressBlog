import{_ as n,e as s}from"./app.c5783368.js";var a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAAAsCAIAAAC8HXeAAAACgUlEQVR4nO3b223jMBCFYdJIE2krhaSXFJK20obyIEAgeBOvQ1rzfw+BV2uT4zEPJSu79vPr++/3xwBQ4LW6AAByCDygCIEHFCHwgCIEHlCEwAOKEHhAEQIPKELgAUVKA2+tnVoHgNPUrBUF3lp7HId3xIyurHPM8OU2EB73Xu49Hl5SvxklpRqyQ5fCUgsHrJ2ocFiB1h3HMS/zH5PG3YS3T5lg8zr/6P6ULXC9TEOiB3V2KeodW9f4Hf6se2z1qTG9nXJ2Se6n0jkmXSpR9fKeyp/XugYjz/BX16434PbRPRh9nCLQDsk9+JrIxBrlHSkvqTNvhc+U7FLqePTbpUm8kakLbM/W5d0E3luX+WdGY1yV7eGiO06UZG3Rq77wsfwquZ1Ivoz8uTd/8pDpW37HuVRVEp4SRrkJ/DlfbeOWf1G5pHIVJZYrb5Yd2tW2s29lSdpNzSmtvKR5xT/5pl1by5ZfichreMubxN69oV21uS+0trY3+Ic3hfdU+mdxL6FnTxdOfeoZpK3sqvW3sEspV+u8r2/l5fW0rurJO7RuSuCjv5PsuTXSfK5um3HhyM0694sZZLbp1F+V52rD1s0z7JI+dXEVtlJshwt3/dTBaz9ach/Va518Ad7HET1hGsEuVWU1c89MuM5tF5irKPCFVVb9lqLwmZ2iE0VXRv4lrs4P7Laka2V4PydJDb5hl26rCo/MXmkbLrC80kv6tgoeeaX0yDc1HF1qNrV1b3DTDsAoBB5QhMADihB4QBECDyhC4AFFCDygCIEHFCHwgCIEHlCEwAOKEHhAEQIPKPIylv/VBGjBGR5QhMADihB4QBECDyhC4AFFCDygCIEHFPkHaJt3UdnHdgIAAAAASUVORK5CYII=";const p={},e=s(`<h1 id="\u110C\u1161\u11BC\u1100\u1169\u110B\u1166\u1109\u1165-cpu-ram-disk-usage-\u1105\u1173\u11AF-json\u110B\u1173\u1105\u1169-\u110B\u1173\u11BC\u1103\u1161\u11B8\u1112\u1162\u110B\u1169\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u11BC\u1100\u1169\u110B\u1166\u1109\u1165-cpu-ram-disk-usage-\u1105\u1173\u11AF-json\u110B\u1173\u1105\u1169-\u110B\u1173\u11BC\u1103\u1161\u11B8\u1112\u1162\u110B\u1169\u110C\u1161" aria-hidden="true">#</a> \uC7A5\uACE0\uC5D0\uC11C CPU, RAM, Disk Usage \uB97C Json\uC73C\uB85C \uC751\uB2F5\uD574\uC624\uC790</h1><p>django\uC5D0\uC11C Json \uC751\uB2F5\uC744 \uBCF4\uB0B4\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uB2E4.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># views.py</span>

<span class="token keyword">from</span> django<span class="token punctuation">.</span>views <span class="token keyword">import</span> View
<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> JsonResponse

<span class="token comment"># Class based view</span>
<span class="token keyword">class</span> <span class="token class-name">MyView</span><span class="token punctuation">(</span>View<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;cpu&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ram&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;20%&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;disk&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;30%&quot;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> JsonResponse<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># urls.py</span>

<span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>urlpatterns <span class="token keyword">import</span> format_suffix_patterns
<span class="token keyword">from</span> usage <span class="token keyword">import</span> views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;usage/&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>MyView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

urlpatterns <span class="token operator">=</span> format_suffix_patterns<span class="token punctuation">(</span>urlpatterns<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\uC778\uD130\uB137\uC5D0 \uD574\uB2F9 URL \uC811\uC18D\uC2DC \uB2E4\uC74C\uACFC \uAC19\uC774 \uC798 \uB098\uC628\uB2E4.</p><p><img src="`+a+`" alt="\uACB0\uACFC"></p><h2 id="cpu-ram-disk-\u1109\u1161\u110B\u116D\u11BC\u1105\u1163\u11BC-\u1100\u116E\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#cpu-ram-disk-\u1109\u1161\u110B\u116D\u11BC\u1105\u1163\u11BC-\u1100\u116E\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> CPU, RAM, DISK \uC0AC\uC6A9\uB7C9 \uAD6C\uD558\uAE30</h2><p>https://stackoverflow.com/questions/276052/how-to-get-current-cpu-and-ram-usage-in-python</p><p>psutil \uC774\uB77C\uB294 \uBAA8\uB4C8\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC27D\uAC8C \uAD6C\uD560 \uC218 \uC788\uB2E4. \uC790\uC138\uD55C\uAC74 psutil \uD648\uD398\uC774\uC9C0\uB97C \uCC38\uACE0\uD574\uBCF4\uC790.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># utils.py</span>
<span class="token keyword">import</span> psutil
<span class="token keyword">def</span> <span class="token function">get_data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    cpu <span class="token operator">=</span> psutil<span class="token punctuation">.</span>cpu_percent<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ram <span class="token operator">=</span> psutil<span class="token punctuation">.</span>virtual_memory<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># [2]\uBC88\uC9F8 \uBC30\uC5F4\uC5D0 percent\uAC00 \uB098\uC628\uB2E4.</span>
    disk <span class="token operator">=</span> psutil<span class="token punctuation">.</span>disk_usage<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment"># [3]\uBC88\uC9F8 \uBC30\uC5F4\uC5D0 percent\uAC00 \uB098\uC628\uB2E4.</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;cpu&quot;</span><span class="token punctuation">:</span> cpu<span class="token punctuation">,</span>
        <span class="token string">&quot;ram&quot;</span><span class="token punctuation">:</span> ram<span class="token punctuation">,</span>
        <span class="token string">&quot;disk&quot;</span><span class="token punctuation">:</span> disk<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># views.py</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>views <span class="token keyword">import</span> View
<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> JsonResponse
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> utils

<span class="token comment"># Class based view</span>
<span class="token keyword">class</span> <span class="token class-name">MyView</span><span class="token punctuation">(</span>View<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> utils<span class="token punctuation">.</span>get_data<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> JsonResponse<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,11);function t(o,c){return e}var u=n(p,[["render",t],["__file","DjangoGetUsage.html.vue"]]);export{u as default};