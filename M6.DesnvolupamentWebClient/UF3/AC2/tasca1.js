// window.onload = () => {
// }
renderApp();


function renderApp() {
    const app = document.getElementById('app');

    function HomePage() {
        return (
            <div>
                <Profile />
                <Bio />
                <Gallery />
            </div>
        );
    }

    function Profile() {
        return (
            <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
        );
    }

    function Bio() {
        return (
            <div>
                <div className="intro">
                    <h1>Welcome to my website!</h1>
                </div>
                <p className="summary">
                    You can find my thoughts here.
                    <br /><br />
                    <b>And <i>pictures</i></b> of scientists!
                </p>
            </div>
        );
    }

    function ProfileComponent() {
        return (
            <img
                src="https://i.imgur.com/QIrZWGIs.jpg"
                alt="Alan L. Hart"
            />
        );
    }

    function Gallery() {
        return (
            <section>
                <h1>Amazing scientists</h1>
                <ProfileComponent />
                <ProfileComponent />
                <ProfileComponent />
            </section>
        );
    }

    const root = ReactDOM.createRoot(app);
    root.render(<HomePage />);
}
