
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Cảm ơn ${name} đã liên hệ! Chúng tôi sẽ sớm trả lời email của bạn tại ${email}.`);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const chatBox = document.getElementById('chatBox');
    const closeChat = document.getElementById('closeChat');
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
});
