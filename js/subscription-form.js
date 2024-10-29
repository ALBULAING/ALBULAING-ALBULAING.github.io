document.addEventListener('DOMContentLoaded', function() {
    // 处理表单提交
    document.querySelectorAll('.subscription-form form').forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitButton = this.querySelector('.submit-button');
        const messageElement = this.closest('.subscription-form').querySelector('.message');
        
        submitButton.disabled = true;
        submitButton.textContent = '正在订阅...';
        messageElement.textContent = '';
        messageElement.className = 'message';
  
        const formData = new FormData(this);
  
        fetch(this.action, {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (response.ok) {
            messageElement.textContent = '订阅成功！感谢您的关注。';
            messageElement.classList.add('success');
            this.reset();
          } else {
            throw new Error('订阅失败');
          }
        })
        .catch(error => {
          messageElement.textContent = '订阅失败，请稍后重试。';
          messageElement.classList.add('error');
        })
        .finally(() => {
          submitButton.disabled = false;
          submitButton.textContent = '订阅';
        });
      });
    });
  
    // 处理邮件订阅卡片点击
    document.querySelectorAll('.rss-plan-mail').forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });