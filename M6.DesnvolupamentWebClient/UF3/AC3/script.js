renderApp();


function renderApp() {
    const app = document.getElementById('app');

    // function onPlayMovie() {
    //     alert('Playing movie...')
    // }
    // function onPauseMovie() {
    //     alert('Movie paused!')
    // }

    // function ToolBar({ onPlayMovie, onPauseMovie }) {
    //     return (
    //         <div>
    //             <Button onClick={onPlayMovie}>PLAY</Button>
    //             <Button onClick={onPauseMovie}>PAUSE</Button>
    //         </div>
    //     );
    // }

    // function Button({ onClick, children }) {
    //     return (
    //         <button onClick={onClick}>
    //             {children}
    //         </button>
    //     );
    // }

    // function Home() {
    //     return (
    //         <>
    //             <TaskList />
    //             <TaskList />
    //         </>

    //     );
    // }

    // function TaskList() {
    //     let index = 0;

    //     function handleClick() {
    //         index = index + 1;
    //     }

    //     let task = taskList[index];
    //     return (
    //         <>
    //             <button onClick={handleClick}>
    //                 Next
    //             </button>
    //             <h2>{task.name}</h2>
    //             <h3>
    //                 ({index + 1} of {taskList.length})
    //             </h3>
    //             <p>
    //                 {task.description}
    //             </p>
    //         </>
    //     );
    // }

    const root = ReactDOM.createRoot(app);
    root.render(<Counter />);
}

function TaskList() {
    // let index = 0;
    const [index, setIndex] = React.useState(0);

    function handleClick() {
        // index = index + 1;
        setIndex(index + 1);
    }

    let task = taskList[index];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>{task.name}</h2>
            <h3>
                ({index + 1} of {taskList.length})
            </h3>
            <p>
                {task.description}
            </p>
        </>
    );
}

function Counter() {
    const [number, setNumber] = React.useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>+3</button>
        </>
    )
}

function MovingDot() {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    return (
        <div
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }
            }
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }
            }>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
        </div >
    );
}

function PersonForm() {
    const [person, setPerson] = React.useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        })
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        })
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        })
    }

    return (
        <>
            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

function SculptorList() {
    const [name, setName] = React.useState('');
    const [artists, setArtists] = React.useState(initialArtists);

    function handleClick() {
        const insertAt = 1; // Could be any index
        const nextArtists = [
            // Items before the insertion point:
            ...artists.slice(0, insertAt),
            // New item:
            { id: nextId++, name: name },
            // Items after the insertion point:
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Insert
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}

const taskList = [{
    name: 'Preparar reunión equipo',
    date: '20250317',
    description: 'Preparar acta y oden del dia de reunión equipo DAW post juntas 2a evaluación'
}, {
    name: 'Preparar M8-UF3-AC2',
    date: '20250310',
    description: 'riqheiqdfdskfndslkjfnldsjkfhdskjlfhs'
}, {
    name: 'Llamar ex-alumno Y.K.',
    date: '20250305',
    description: 'lerjelkrkñljrlekjrñlqjñqjrlqjrlewr48779879797'
}];