window.onload = () => {
    renderApp();
    }


    //1
    // function renderApp() {
    // let app = document.getElementById('app');
    // let header = document.createElement('h1');
    // let text = 'Develop. Preview. Ship.';
    // let headerContent = document.createTextNode(text);
    // header.appendChild(headerContent);
    // app.appendChild(header);
    // }

    //2
    // function renderApp() { 
    //     const app = document.getElementById('app'); 
    //     const root = ReactDOM.createRoot(app); 

    //     const element = React.createElement("h1", null, "Develop. Preview. Ship.");

    //     root.render(element); 
    // } 
        
    //3

    // function renderApp() { 
    //     const app = document.getElementById('app'); 
    //     const root = ReactDOM.createRoot(app); 
    //     root.render(<h1>Develop. Preview. Ship.</h1>); 
    // } 

    //4
    //Imperativo
    // function renderApp() {
    //     let app = document.getElementById('app');
    //     let header = document.createElement('h1');
    //     let text = document.createTextNode('Develop. Preview. Ship.');
    //     header.appendChild(text);
    //     app.appendChild(header);
    // }

    
    // declarativo
    // function renderApp() { 
    //     const root = ReactDOM.createRoot(document.getElementById('app'));
    //     root.render(<h1>Develop. Preview. Ship.</h1>); 
    // }
    
    //5

    // function renderApp() { 
    //     const app = document.getElementById('app'); 
    //     function header(){            // El componente tiene que estar declarado con Mayuscula inicial
    //     return (<h1>Develop. Preview. Ship.</h1>); 
    //     } 
    //     const root = ReactDOM.createRoot(app); 
    //     root.render(header); //Cuando se pasa al root render se tiene que hacer con notacon HTML
    // } 


//Version corregida

    // function renderApp() { 
    //     const app = document.getElementById('app'); 
    //     function Header(){ 
    //     return (<h1>Develop. Preview. Ship.</h1>); 
    //     } 
    //     const root = ReactDOM.createRoot(app); 
    //     root.render(<Header />); 
    // } 

//6

// Componente HomePage 
function HomePage() { 
    return <div></div>; 
    } 
    // Componente HomePage 
    function HomePage() { 
    return ( 
    <div> 
    <Header />
    </div> 
    ); 
    } 
    root.render(<HomePage />); 

//Version corregida
// function renderApp() { 
//     const app = document.getElementById('app'); 

//     // Component Header
//     function Header() { 
//         return (<h1>Develop. Preview. Ship.</h1>); 
//     }

//     // Component HomePage que inclou Header
//     function HomePage() { 
//         return ( 
//             <div> 
//                 <Header />
//             </div> 
//         ); 
//     }

//     const root = ReactDOM.createRoot(app); 
//     root.render(<HomePage />); 
// }