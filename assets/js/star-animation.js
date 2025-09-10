/**
 * 星星和流星动画效果
 */

class StarAnimation {
  constructor() {
    this.starsContainer = null;
    this.meteorsContainer = null;
    this.starCount = 200; // 星星数量
    this.meteorCount = 15; // 流星数量
  }

  init() {
    this.createContainers();
    this.createStars();
    this.createMeteors();
  }

  // 创建容器元素
  createContainers() {
    const heroContainer = document.querySelector('.hero-container');
    if (!heroContainer) return;

    // 先检查容器是否已存在
    this.starsContainer = document.querySelector('.stars-container');
    this.meteorsContainer = document.querySelector('.meteors-container');

    if (!this.starsContainer) {
      this.starsContainer = document.createElement('div');
      this.starsContainer.className = 'stars-container';
      heroContainer.appendChild(this.starsContainer);
    }

    if (!this.meteorsContainer) {
      this.meteorsContainer = document.createElement('div');
      this.meteorsContainer.className = 'meteors-container';
      heroContainer.appendChild(this.meteorsContainer);
    }
  }

  // 创建星星
  createStars() {
    if (!this.starsContainer) return;

    // 清空现有星星
    this.starsContainer.innerHTML = '';

    for (let i = 0; i < this.starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // 随机位置
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // 随机大小
      const sizeClass = ['star-small', 'star-medium', 'star-large'][Math.floor(Math.random() * 3)];
      star.classList.add(sizeClass);
      
      // 设置位置
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      
      // 随机闪烁动画延迟
      star.style.animationName = 'twinkle';
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      // 随机亮度
      const opacity = 0.3 + Math.random() * 0.7;
      star.style.opacity = opacity;
      
      // 随机颜色
      const hue = 200 + Math.random() * 20; // 蓝色调
      const saturation = 30 + Math.random() * 30;
      const lightness = 70 + Math.random() * 30;
      star.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      
      this.starsContainer.appendChild(star);
    }
  }

  // 创建流星
  createMeteors() {
    if (!this.meteorsContainer) return;

    // 清空现有流星
    this.meteorsContainer.innerHTML = '';

    for (let i = 0; i < this.meteorCount; i++) {
      this.createMeteor();
    }
  }

  // 创建单个流星
  createMeteor() {
    if (!this.meteorsContainer) return;

    const meteor = document.createElement('div');
    meteor.className = 'meteor';
    
    // 随机大小
    const sizeClasses = ['meteor-small', 'meteor-medium', 'meteor-large'];
    const sizeClass = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
    meteor.classList.add(sizeClass);
    
    // 获取动画持续时间
    const duration = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--meteor-duration') || 5);
    
    // 设置初始位置（屏幕外顶部）
    const startX = Math.random() * 100;
    meteor.style.right = `-${startX}%`;
    meteor.style.top = `-${Math.random() * 20}%`;
    
    // 设置动画
    meteor.style.animationName = 'meteor';
    meteor.style.animationDuration = `${3 + Math.random() * 7}s`;
    meteor.style.animationDelay = `${Math.random() * 10}s`;
    
    // 添加动画结束后重新创建流星
    meteor.addEventListener('animationend', () => {
      // 移除流星
      if (meteor.parentNode) {
        meteor.parentNode.removeChild(meteor);
      }
      // 延迟后重新创建
      setTimeout(() => this.createMeteor(), Math.random() * 5000);
    });
    
    this.meteorsContainer.appendChild(meteor);
  }
}

// 页面加载完成后初始化
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    const starAnimation = new StarAnimation();
    starAnimation.init();
  });
}