const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="brand">
                <div className="logo">FG</div>
                <h1>FinanceGuide</h1>
                <div className="subtitle">Personal Finance Assistant</div>
            </div>
            <nav className="menu">
                <button className="active">Chat</button>
                <button>Investments</button>
                <button>Savings</button>
                <button>Settings</button>
            </nav>
        </aside>
    );
};

export default Sidebar;