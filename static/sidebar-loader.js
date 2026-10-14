/**
 * 小美工具箱 - 侧边栏加载器
 * 自动加载统一的侧边栏导航到页面
 * 使用方法：在 HTML 的 body 开头添加 <div id="sidebar-container"></div>
 *          然后引入此脚本：<script src="sidebar-loader.js"></script>
 * 
 * 依赖文件（同一目录下）：
 * - tools.css: 统一样式表
 * - favicon.ico: 网站图标
 */

(function() {
    'use strict';

    // 侧边栏 HTML 结构
    var sidebarHTML = `
<div class="sidebar">
    <a class="sidebar-brand" href="index.html">
        <span class="logo">&#128295;</span>
        <span>小美工具箱</span>
    </a>
    <div class="sidebar-cat">
        <div class="sidebar-cat-title">文本与编码</div>
        <a class="sidebar-link" href="unicode.html">Unicode 转换</a>
        <a class="sidebar-link" href="json.html">JSON 工具</a>
    </div>
    <div class="sidebar-cat">
        <div class="sidebar-cat-title">图片工具</div>
        <a class="sidebar-link" href="qrcode.html">二维码生成</a>
        <a class="sidebar-link" href="barcode.html">条形码生成</a>
        <a class="sidebar-link" href="convert2ico.html">图片转 ICO</a>
        <a class="sidebar-link" href="ocr.html">OCR 文字识别</a>
        <a class="sidebar-link" href="imgcrop.html">图片裁剪</a>
        <a class="sidebar-link" href="removebg.html">移除背景</a>
    </div>
    <div class="sidebar-cat">
        <div class="sidebar-cat-title">音频工具</div>
        <a class="sidebar-link" href="cutaudio.html">音频裁剪</a>
        <a class="sidebar-link" href="extractaudio.html">音频提取</a>
        <a class="sidebar-link" href="convertaudio.html">音频格式转换</a>
    </div>
    <div class="sidebar-cat">
        <div class="sidebar-cat-title">视频工具</div>
        <a class="sidebar-link" href="convertvideo.html">视频格式转换</a>
    </div>
    <div class="sidebar-cat">
        <div class="sidebar-cat-title">AI 工具</div>
        <a class="sidebar-link" href="gesture.html">手势识别</a>
        <a class="sidebar-link" href="llmtest.html">大模型测试</a>
    </div>
    <div class="sidebar-cat">
        <div class="sidebar-cat-title">其他工具</div>
        <a class="sidebar-link" href="mdeditor.html">Markdown 编辑器</a>
        <a class="sidebar-link" href="oddnotify.html">通知推送</a>
    </div>
</div>
`;

    // DOM 加载完成后执行
    function initSidebar() {
        var container = document.getElementById('sidebar-container');
        if (container) {
            container.innerHTML = sidebarHTML;
            
            // 自动高亮当前页面的导航链接
            var links = container.querySelectorAll('.sidebar-link');
            links.forEach(function(link) {
                if (link.getAttribute('href') === location.pathname) {
                    link.classList.add('active');
                }
            });
        }
    }

    // 如果 DOM 已加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }
})();
