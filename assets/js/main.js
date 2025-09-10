// 页面滚动效果
// 平滑滚动功能
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// 响应式导航菜单
function handleResponsiveNav() {
  const navTrigger = document.getElementById('nav-trigger');
  if (navTrigger) {
    navTrigger.addEventListener('change', function() {
      const menuIcon = this.nextElementSibling;
      if (this.checked) {
        menuIcon.classList.add('active');
      } else {
        menuIcon.classList.remove('active');
      }
    });
  }
}

// 滚动时导航栏效果
function handleScrollEffects() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 页面滚动进度条
function createScrollProgressBar() {
  // 检查进度条是否已存在
  if (document.querySelector('.progress-container')) return;
  
  // 创建进度条容器
  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress-container';
  
  // 创建进度条
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.id = 'progressBar';
  
  // 添加到页面
  progressContainer.appendChild(progressBar);
  document.body.appendChild(progressContainer);
  
  // 更新进度条
  window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// 卡片悬停效果增强
function enhanceCardHoverEffects() {
  const cards = document.querySelectorAll('.post, .previous-post, .next-post');
  cards.forEach(card => {
    card.classList.add('card-hover');
  });
}

// 暗色模式支持检测
function detectDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// 添加科技感的背景动画
function addTechBackgroundAnimation() {
  // 检查是否已经添加了背景动画
  if (document.querySelector('.tech-bg-particles')) return;
  
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'tech-bg-particles';
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '-1';
  particlesContainer.style.overflow = 'hidden';
  
  // 创建粒子
  const particleCount = 15;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = '#3b82f6';
    particle.style.borderRadius = '50%';
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animation = 'float ' + (Math.random() * 10 + 10) + 's infinite ease-in-out';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);
  }
  
  document.body.appendChild(particlesContainer);
}

// 添加页面加载动画
function addPageLoadAnimation() {
  // 检查是否已经添加了加载动画
  if (document.querySelector('.page-loader')) return;
  
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.style.position = 'fixed';
  loader.style.top = '0';
  loader.style.left = '0';
  loader.style.width = '100%';
  loader.style.height = '100%';
  loader.style.display = 'flex';
  loader.style.justifyContent = 'center';
  loader.style.alignItems = 'center';
  loader.style.background = 'white';
  loader.style.zIndex = '9999';
  loader.style.transition = 'opacity 0.5s ease-out';
  
  const spinner = document.createElement('div');
  spinner.className = 'loader';
  
  loader.appendChild(spinner);
  document.body.appendChild(loader);
  
  // 页面加载完成后隐藏加载动画
  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.style.opacity = '0';
      setTimeout(function() {
        loader.style.display = 'none';
      }, 500);
    }, 300);
  });
}

// 为按钮添加波纹效果
function addRippleEffect() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.position = 'absolute';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s ease-out';
      ripple.style.pointerEvents = 'none';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// 添加波纹动画样式
function addRippleAnimationStyle() {
  if (document.getElementById('ripple-animation-style')) return;
  
  const style = document.createElement('style');
  style.id = 'ripple-animation-style';
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  
  document.head.appendChild(style);
}

// 搜索模态框功能
function setupSearchModal() {
  const searchModal = document.getElementById('search-modal');
  const searchButtons = document.querySelectorAll('.search-button, .search-icon-button');
  const closeSearchModal = document.getElementById('close-search-modal');
  const searchModalBackdrop = document.getElementById('search-modal-backdrop');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (!searchModal || !closeSearchModal || !searchModalBackdrop || !searchForm || !searchInput || !searchResults) {
    return;
  }
  
  // 显示搜索模态框
  function showSearchModal() {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
    setTimeout(() => {
      searchInput.focus();
    }, 300);
  }
  
  // 隐藏搜索模态框
  function hideSearchModal() {
    searchModal.classList.remove('active');
    document.body.style.overflow = ''; // 恢复背景滚动
    searchInput.value = '';
    searchResults.innerHTML = '';
  }
  
  // 为搜索按钮添加点击事件
  searchButtons.forEach(button => {
    button.addEventListener('click', showSearchModal);
  });
  
  // 为关闭按钮添加点击事件
  closeSearchModal.addEventListener('click', hideSearchModal);
  
  // 为背景添加点击事件
  searchModalBackdrop.addEventListener('click', hideSearchModal);
  
  // 阻止模态框内容点击事件冒泡到背景
  searchModal.querySelector('.search-modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // 初始化 Simple-Jekyll-Search
  const search = new SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: searchResults,
    json: '/search.json',
    searchResultTemplate: `
      <li class="search-result-item">
        <a href="{url}" class="search-result-link">
          <h4 class="search-result-title">{title}</h4>
          <div class="search-result-meta">
            <span class="search-result-date">{date}</span>
          </div>
          <p class="search-result-excerpt">{excerpt}</p>
        </a>
      </li>
    `,
    noResultsText: `
      <div class="search-results-header">
        <h3>搜索结果: "{query}"</h3>
      </div>
      <div class="search-results-list">
        <li class="search-result-item">
          <p class="search-no-results">未找到匹配的文章。</p>
        </li>
      </div>
    `,
    limit: 20,
    fuzzy: false
  });

  // 为表单添加提交事件
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      console.log('Searching for:', searchTerm);
      // Simple-Jekyll-Search 会自动处理搜索
    }
  });

  // 添加键盘事件
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      hideSearchModal();
    }
  });
}

// 目录跟随滚动高亮功能
function setupTableOfContentsHighlight() {
  const tocLinks = document.querySelectorAll('.toc-link');
  const headings = document.querySelectorAll('h2, h3');
  
  if (tocLinks.length === 0 || headings.length === 0) return;
  
  // 滚动时更新目录高亮
  function updateTOC() {
    let currentHeadingId = '';
    let minDistance = Infinity;
    
    // 找出当前可见的标题
    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      const distance = Math.abs(rect.top - 100); // 100px的偏移量，更接近用户阅读位置
      
      // 当标题顶部进入视口100px内时，优先选择
      if (rect.top <= 100 && rect.bottom > 0) {
        currentHeadingId = heading.id;
        minDistance = distance;
      } else if (distance < minDistance) {
        // 如果没有标题在视口内，选择最接近视口的标题
        minDistance = distance;
        if (!currentHeadingId) {
          currentHeadingId = heading.id;
        }
      }
    });
    
    // 更新目录高亮
    tocLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + currentHeadingId) {
        link.classList.add('active');
        // 自动滚动目录，使当前高亮项可见（使用手动滚动方式，避免干扰页面滚动）
        const liElement = link.closest('li');
        if (liElement && liElement.scrollIntoView) {
          const container = liElement.closest('.toc-content');
          if (container) {
            const liTop = liElement.getBoundingClientRect().top;
            const containerTop = container.getBoundingClientRect().top;
            const relativeTop = liTop - containerTop;
            
            // 只有当高亮项不在可视区域中心时才滚动
            if (relativeTop < container.clientHeight * 0.3 || relativeTop > container.clientHeight * 0.7) {
              container.scrollTo({ 
                top: container.scrollTop + relativeTop - container.clientHeight * 0.4, 
                behavior: 'smooth' 
              });
            }
          }
        }
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // 初始加载时更新目录
  window.addEventListener('load', updateTOC);
  
  // 添加防抖的滚动事件监听器（移除了重复的监听器）
  let tocUpdateTimeout;
  window.addEventListener('scroll', function() {
    clearTimeout(tocUpdateTimeout);
    tocUpdateTimeout = setTimeout(updateTOC, 50); // 缩短防抖时间，提高响应速度
  });
}

// 添加页面标题悬停样式
function addPageTitleHoverStyle() {
  // 检查样式是否已存在
  if (document.getElementById('page-title-hover-style')) return;
  
  const style = document.createElement('style');
  style.id = 'page-title-hover-style';
  style.textContent = `
    .page-title-hover {
      transition: all 0.2s ease;
    }
    
    .page-title-hover:hover {
      background-color: rgba(59, 130, 246, 0.1);
      color: #3b82f6;
      padding: 2px 4px;
      border-radius: 4px;
    }
  `;
  
  document.head.appendChild(style);
}

// 页面标题点击跳转功能
function setupPageTitleNavigation() {
  addPageTitleHoverStyle();
  const titleElements = document.querySelectorAll('.page-view-title');
  
  console.log('找到的标题元素数量:', titleElements.length);
  
  if (titleElements.length === 0) return;
  
  titleElements.forEach(element => {
    // 如果是a标签且已经有href属性，就直接使用原生链接功能
    if (element.tagName.toLowerCase() === 'a' && element.getAttribute('href')) {
      console.log('标题元素已是链接，使用原生跳转功能:', element.textContent.trim());
      element.style.cursor = 'pointer'; // 确保光标样式一致
      element.classList.add('page-title-hover'); // 保持悬停效果一致
    } else {
      // 对于非链接元素，继续使用原来的点击事件处理
      element.style.cursor = 'pointer'; // 添加指针样式
      element.classList.add('page-title-hover');
      
      console.log('为非链接标题元素添加点击事件:', element.textContent.trim());
      
      element.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const titleText = this.textContent.trim();
        console.log('点击了标题:', titleText);
        
        // 尝试找到匹配的文章链接
        const allLinks = document.querySelectorAll('a');
        console.log('页面中找到的链接数量:', allLinks.length);
        
        let targetLink = null;
        
        // 先尝试精确匹配
        for (let link of allLinks) {
          const linkText = link.textContent.trim();
          const linkTitle = link.getAttribute('title');
          
          if (linkText === titleText || linkTitle === titleText) {
            targetLink = link;
            console.log('精确匹配找到目标链接:', link.getAttribute('href'));
            break;
          }
        }
        
        if (!targetLink) {
          // 如果直接匹配失败，尝试使用包含匹配
          for (let link of allLinks) {
            const linkText = link.textContent.trim().toLowerCase();
            const lowerTitleText = titleText.toLowerCase();
            
            if (linkText.includes(lowerTitleText)) {
              targetLink = link;
              console.log('包含匹配找到目标链接:', link.getAttribute('href'));
              break;
            }
          }
        }
        
        if (targetLink) {
          const href = targetLink.getAttribute('href');
          console.log('准备跳转到:', href);
          // 确保是有效的URL
          if (href && href !== '#') {
            // 使用setTimeout确保跳转行为正常
            setTimeout(() => {
              window.location.href = href;
            }, 10);
          }
        } else {
          console.log('未找到匹配的文章链接');
        }
      });
    }
  });
}

// 页面加载完成后执行所有功能
window.addEventListener('DOMContentLoaded', function() {
  // 基础功能
  smoothScroll();
  handleResponsiveNav();
  setupTableOfContentsHighlight();
  setupPageTitleNavigation();
  
  // 科技感增强功能
  handleScrollEffects();
  createScrollProgressBar();
  enhanceCardHoverEffects();
  detectDarkMode();
  addTechBackgroundAnimation();
  addPageLoadAnimation();
  addRippleEffect();
  addRippleAnimationStyle();
  
  // 搜索模态框功能
  setupSearchModal();
  
  // 禁止文本复制功能
  disableTextSelection();
  
  // 监听暗色模式变化
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectDarkMode);
  }
});

// 禁止文本复制功能
function disableTextSelection() {
  // 选择文章内容区域
  const contentElements = document.querySelectorAll('.post-content, .post, .home-content');
  
  // 为每个内容区域添加禁止选择和复制的样式
  contentElements.forEach(element => {
    element.style.userSelect = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.mozUserSelect = 'none';
    element.style.msUserSelect = 'none';
  });
  
  // 添加复制事件阻止
  document.addEventListener('copy', function(e) {
    // 检查复制的内容是否来自文章内容区域
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const commonAncestor = range.commonAncestorContainer;
      
      // 如果复制的内容包含在我们想要保护的元素中，则阻止复制
      const isInProtectedArea = contentElements.some(element => 
        element.contains(commonAncestor) || element === commonAncestor
      );
      
      if (isInProtectedArea) {
        e.preventDefault();
        
        // 可选：显示提示信息
        alert('本文禁止复制，请尊重原创内容');
      }
    }
  });
  
  // 阻止右键菜单
  document.addEventListener('contextmenu', function(e) {
    // 只在内容区域阻止右键菜单
    const target = e.target;
    const isInProtectedArea = contentElements.some(element => 
      element.contains(target) || element === target
    );
    
    if (isInProtectedArea) {
      e.preventDefault();
    }
  });
}