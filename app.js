document.addEventListener('DOMContentLoaded', () => {
    const chat = document.getElementById('chat');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    // Financial advice responses
    const responses = {
        investment: [
            "Based on your interest in investments, here are some options:\n• Start with mutual funds\n• Consider index funds\n• Diversify your portfolio\nWould you like specific recommendations?",
            "For beginners, I recommend:\n• Start with SIP of ₹5000/month\n• Choose large-cap mutual funds\n• Keep emergency fund separate\nShall we discuss these options?",
            "Investment strategy suggestions:\n• 60% equity, 30% debt, 10% gold\n• Start small, increase gradually\n• Focus on long-term goals\nWant to know more about any of these?"
        ],
        savings: [
            "Here's a savings strategy:\n• Save 20% of monthly income\n• Create emergency fund\n• Use automatic transfers\nWould you like help setting this up?",
            "To boost your savings:\n• Track daily expenses\n• Use 50/30/20 rule\n• Set specific goals\nShall we create a savings plan?",
            "Smart saving tips:\n• Cut unnecessary subscriptions\n• Compare insurance rates\n• Use high-yield savings accounts\nWant to discuss these methods?"
        ],
        tax: [
            "Tax saving options:\n• Section 80C investments\n• Health insurance (80D)\n• NPS contributions\nNeed more details on any of these?",
            "Popular tax saving instruments:\n• ELSS funds (equity linked)\n• PPF accounts\n• Term insurance\nWould you like to know the tax benefits?",
            "Tax planning strategies:\n• Maximize 80C deductions\n• Use HRA benefits\n• Consider home loan benefits\nShall we discuss your tax planning?"
        ],
        budget: [
            "Let's create a budget:\n• Track monthly income\n• List essential expenses\n• Set savings goals\nReady to start budgeting?",
            "Budgeting 50/30/20 rule:\n• 50% needs\n• 30% wants\n• 20% savings\nWould you like a detailed breakdown?",
            "Budget management tips:\n• Use budgeting apps\n• Review monthly expenses\n• Set spending alerts\nNeed help with implementation?"
        ]
    };

    // Welcome messages
    const welcomeMessages = [
        "Hi! I'm your FineTalks assistant. How can I help with your financial planning today?",
        "Welcome to FineTalks! I can help you with investments, savings, tax planning, and budgeting. What's on your mind?",
        "Hello! I'm here to help you make better financial decisions. What would you like to discuss?"
    ];

    // Show random welcome message
    addMessage(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)], 'bot');

    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const bubble = document.createElement('div');
        bubble.className = `bubble ${type}`;
        bubble.innerHTML = text.replace(/\n/g, '<br>');
        
        messageDiv.appendChild(bubble);
        chat.appendChild(messageDiv);
        chat.scrollTop = chat.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing';
        typingDiv.innerHTML = '<div class="bubble bot">...</div>';
        chat.appendChild(typingDiv);
        chat.scrollTop = chat.scrollHeight;
        return typingDiv;
    }

    function generateResponse(message) {
        const lowerMsg = message.toLowerCase();
        let category;
        
        if(lowerMsg.includes('invest') || lowerMsg.includes('stock') || lowerMsg.includes('mutual') || lowerMsg.includes('sip')) {
            category = 'investment';
        } else if(lowerMsg.includes('save') || lowerMsg.includes('saving') || lowerMsg.includes('money')) {
            category = 'savings';
        } else if(lowerMsg.includes('tax') || lowerMsg.includes('80c') || lowerMsg.includes('deduction')) {
            category = 'tax';
        } else if(lowerMsg.includes('budget') || lowerMsg.includes('spend') || lowerMsg.includes('expense')) {
            category = 'budget';
        }

        if(category) {
            const categoryResponses = responses[category];
            return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
        }

        return "I can help you with:\n• Investment planning\n• Savings strategies\n• Tax planning\n• Budgeting\nWhat would you like to know more about?";
    }

    function handleSend() {
        const message = userInput.value.trim();
        if(!message) return;
        
        // Add user message
        addMessage(message, 'user');
        userInput.value = '';
        
        // Show typing indicator
        const typingIndicator = showTypingIndicator();
        
        // Generate and show response after delay
        setTimeout(() => {
            typingIndicator.remove();
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 1000 + Math.min(message.length * 20, 2000));
    }

    // Event listeners
    sendBtn.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') handleSend();
    });

    // Focus input on load
    userInput.focus();

    // Menu button handlers
    document.querySelectorAll('.menu button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.menu button').forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            
            // Add relevant message based on button clicked
            const buttonText = button.textContent.trim().toLowerCase();
            if(buttonText.includes('chat')) {
                return; // Already in chat
            } else if(buttonText.includes('insights')) {
                addMessage("Would you like to see insights about:\n• Investment performance\n• Savings growth\n• Budget analysis", 'bot');
            } else if(buttonText.includes('learn')) {
                addMessage("What would you like to learn about?\n• Basic investment concepts\n• Tax saving strategies\n• Budgeting techniques", 'bot');
            } else if(buttonText.includes('contact')) {
                addMessage("You can reach our support team:\n• Email: support@finetalks.com\n• Phone: 1800-123-4567\n• Hours: 9 AM - 6 PM", 'bot');
            }
        });
    });
});
