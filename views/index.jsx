const React = require('react');
const DefaultLayout = require('./layout');
const Nav = require('./templates/nav');

function Index(props) {

    function imdb() {
        const imdbvalue = "Harry";
        props.api.imdb(imdbvalue)
    }

    function sayHello(name) {
        alert(`hello, ${name}`);
    }

    return (
        <DefaultLayout title={props.title}>
            <Nav current={props.title} navNames={props.nameList} navURLS={props.urlList}></Nav>
            <div>Hello</div>

            {/*<button onClick={() => imdb()} style={{ position: "absolute", top: "40%" }}>*/}
            {/*    Click me!*/}
            {/*</button>*/}

            {/*<button onClick={this.imdb.bind(this, id)} style={{ position: "absolute", top: "40%" }} />*/}

            <button onClick={() => sayHello("Test")} style={{ position: "absolute", top: "40%" }}>asd</button>
        </DefaultLayout>
    );
}

module.exports = Index;