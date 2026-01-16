// Simple chat functionality
const messageInput = document.getElementById('messageInput');
const chatMessages = document.getElementById('chatMessages');

// Sample responses for demo purposes
const responses = {
    'hello': 'Here\'s how to say "Hello" in Malay:\n\n<strong>Selamat pagi</strong> (se-la-mat pa-gi) - Good morning\n<strong>Apa khabar</strong> (a-pa kha-bar) - How are you/Hello\n\nThese are common greetings in Malay!',
    'thank you': 'Here\'s how to say "Thank you" in Malay:\n\n<strong>Terima kasih</strong> (te-ri-ma ka-sih)\n\nA polite way to express gratitude!',
    'goodbye': 'Here\'s how to say "Goodbye" in Malay:\n\n<strong>Selamat tinggal</strong> (se-la-mat ting-gal) - when you are leaving\n<strong>Selamat jalan</strong> (se-la-mat ja-lan) - when someone else is leaving',
};

messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && messageInput.value.trim() !== '') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');

    // Clear input
    messageInput.value = '';

    // Simulate bot response after a short delay
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (type === 'bot') {
        contentDiv.innerHTML = text;
    } else {
        contentDiv.textContent = text;
        
        // Add status for user messages
        const statusDiv = document.createElement('div');
        statusDiv.className = 'message-status';
        statusDiv.textContent = 'Delivered';
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(statusDiv);
    }
    
    if (type === 'bot') {
        messageDiv.appendChild(contentDiv);
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for keywords
    for (let key in responses) {
        if (lowerMessage.includes(key)) {
            return responses[key];
        }
    }

    // Default response
    return `I can help you learn Malay! Try asking me how to say common phrases like "hello", "thank you", or "goodbye" in Malay. You can also ask me to translate specific sentences!`;
}

// Close button functionality
document.querySelector('.close-btn').addEventListener('click', function() {
    alert('Chat window would close in a real application!');
});

// Scroll to bottom on load
chatMessages.scrollTop = chatMessages.scrollHeight;