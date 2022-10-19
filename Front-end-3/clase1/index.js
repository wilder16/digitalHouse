const tag = ['h1', 'h2', 'h3', 'h4', 'footer'];

const contents = ['Con lo visto hasta ahora','Replica este HTML', 'Usando', 'React.js', 'Suerte!']; 

const assemble = () =>{
    const array = tag.map((item, index) => {
        return React.createElement(item, {key:index}, contents[index])
    })
    return React.createElement('div', null, array)
}

ReactDOM.render(
    assemble(),
    document.getElementById('root')
)
