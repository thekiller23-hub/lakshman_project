export function generateResponse(msg) {
    const m = msg.toLowerCase();
    if (/invest|portfolio|mutual|stock/.test(m)) {
        return "I recommend a diversified portfolio: 50% equity, 30% debt, 20% international. Start with a SIP of ₹15,000/month. Want specific fund picks?";
    }
    if (/tax|deduct|80c|nps|80d/.test(m)) {
        return "You can use ELSS (₹1.5L under 80C), NPS (₹50k under 80CCD(1B)), 80D for health insurance premiums. Need a deeper breakdown?";
    }
    if (/save|saving|budget|emergency/.test(m)) {
        return "Keep 6 months of expenses as emergency fund, automate savings, consider high-yield accounts and periodic expense reviews.";
    }
    if (/retire|pension|nps|provident/.test(m)) {
        return "Aim for a retirement corpus and automate monthly contributions; consider increasing equity allocation for long-term growth. Want a retirement calculator?";
    }
    return "Sorry — I didn't get that. I can help with investments, taxes, savings, and retirement. Can you rephrase?";
}

export function timeNow() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}