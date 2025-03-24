renderApp();

function renderApp() {
    const app = document.getElementById('app');

    function FeedbackForm() {
        const [isSent, setIsSent] = React.useState(false);
        const [message, setMessage] = React.useState('');
        
        if (isSent) {
            return <h1>Thank you!</h1>;
        }
            return (
                <form onSubmit={e => {
                    e.preventDefault();
                    alert(`Sending: "${message}"`);
                    setIsSent(true);
                }}>
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <br />
                    <button type="submit">Send</button>
                </form>
            );
            
    }

    const root = ReactDOM.createRoot(app);
    root.render(<FeedbackForm />);
}
