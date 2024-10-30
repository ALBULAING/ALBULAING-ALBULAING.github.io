document.addEventListener('DOMContentLoaded', function() {
    // 处理邮件卡片点击滚动
    const mailCard = document.querySelector('.rss-plan-mail');
    if (mailCard) {
      mailCard.addEventListener('click', function(e) {
        e.preventDefault();
        const formElement = document.querySelector('.article-follow-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  });