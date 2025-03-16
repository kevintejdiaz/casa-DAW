// window.onload = () => {
// }

renderApp();

function renderApp() {
    const app = document.getElementById('app');

    // Component HomePage
    function HomePage() {
        return (
            <div>
                <Gallery />
            </div>
        );
    }

    // Component Profile per evitar duplicació
    function Profile({ name, imageUrl, profession, awards, discoveries }) {
        return (
            <section className="profile">
                <h2>{name}</h2>
                <img
                    className="avatar"
                    src={imageUrl}
                    alt={name}
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {profession}
                    </li>
                    <li>
                        <b>Awards: {awards.length} </b>
                        ({awards.join(", ")})
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {discoveries}
                    </li>
                </ul>
            </section>
        );
    }

    // Component Gallery que usa Profile
    function Gallery() {
        return (
            <div>
                <h1>Notable Scientists</h1>
                <Profile
                    name="Maria Skłodowska-Curie"
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/220px-Marie_Curie_%281900%29.jpg"
                    profession="physicist and chemist"
                    awards={[
                        "Nobel Prize in Physics",
                        "Nobel Prize in Chemistry",
                        "Davy Medal",
                        "Matteucci Medal"
                    ]}
                    discoveries="polonium (chemical element)"
                />
                <Profile
                    name="Katsuko Saruhashi"
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZG_EyUQ4_4967ox6xqplFARawJYWMSIagFg&s"
                    profession="geochemist"
                    awards={[
                        "Miyake Prize for geochemistry",
                        "Tanaka Prize"
                    ]}
                    discoveries="a method for measuring carbon dioxide in seawater"
                />
            </div>
        );
    }

    const root = ReactDOM.createRoot(app);
    root.render(<HomePage />);
}
