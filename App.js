// this creating a element and assigning a value into that element and dictionary can put the attribute of the tags
const heading = React.createElement('div',{id : 'parent'}, [
    React.createElement('div',{id : 'child1'},[
        React.createElement('h1',{id : 'heading1'},'Hey This Is From React hdng 1'),
        React.createElement('h2',{id : 'heading2'},'Hey This Is From React hdng2')
    ]),
    React.createElement('div',{id : 'child2'},[
        React.createElement('h1',{id : 'heading3'},'Hey This Is From React hdng 1'),
        React.createElement('h2',{id : 'heading4'},'Hey This Is From React hdng2')
    ])
])
// heading is a object in js

// this is creating a root and inside that giving that root into the reatc root
const root = ReactDOM.createRoot(document.getElementById('root'))

// this is putting that heanding into the root and rendering
root.render(heading)