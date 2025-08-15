// Create an h1 element with React
var h1 = React.createElement('h1', null, "Hello from Muktha");

// Get the root element from the DOM
var parent = document.querySelector('#root');

// Create a root using ReactDOM
var root = ReactDOM.createRoot(parent);

// Render the h1 into the root
root.render(h1);
