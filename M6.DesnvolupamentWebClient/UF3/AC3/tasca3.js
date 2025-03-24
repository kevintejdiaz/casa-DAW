renderApp();

function renderApp() {
    const app = document.getElementById('app');

    function FeedbackForm() {
        const [name, setName] = React.useState('');
      
        function handleClick() {
          const newName = prompt('Whats ur name?')
          setName(newName)
          alert(`Hello, ${newName}!`);
        }
      
        return (
          <button onClick={handleClick}>
            Greet
          </button>
        );
      }
      

    const root = ReactDOM.createRoot(app);
    root.render(<FeedbackForm />);
}