// التحكم في ظهور البوت
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotWindow = document.getElementById('chatbot-window');

// إظهار أو إخفاء نافذة البوت عند النقر على الأيقونة
chatbotIcon.addEventListener('click', () => {
    if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
        chatbotWindow.style.display = 'block';
    } else {
        chatbotWindow.style.display = 'none';
    }
});

// إغلاق نافذة البوت عند النقر خارجها
document.addEventListener('click', (event) => {
    if (!chatbotIcon.contains(event.target) && !chatbotWindow.contains(event.target)) {
        chatbotWindow.style.display = 'none';
    }
});