export default function QuickReplies({ onReply }) {
    const replies = [
        "Explain Investments",
        "Tax Saving Details",
        "Savings Strategies",
        "Retirement Planning"
    ];

    return (
        <div className="quick-replies">
            {replies.map((reply, index) => (
                <button key={index} className="chip" onClick={() => onReply(reply)}>
                    {reply}
                </button>
            ))}
        </div>
    );
}