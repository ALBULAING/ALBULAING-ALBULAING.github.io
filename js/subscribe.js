document.addEventListener('DOMContentLoaded', function() {
    // 处理邮件卡片点击滚动
    const mailCard = document.querySelector('.rss-plan-mail');
    if (mailCard) {
      mailCard.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      });
    }
  
    // 处理表单提交反馈
    const forms = document.querySelectorAll('.article-subscribe-form form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const button = this.querySelector('button');
        const originalText = button.textContent;
        
        button.disabled = true;
        button.textContent = '订阅中...';
        
        // 延迟恢复按钮状态
        setTimeout(() => {
          button.disabled = false;
          button.textContent = originalText;
        }, 3000);
      });
    });
  });