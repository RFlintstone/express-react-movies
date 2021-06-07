const React = require('react');
const DefaultLayout = require('./layout');
const Nav = require('./templates/nav');

async function Index(props) {

    const imdbvalue = "Harry";
    const final = await props.api.imdb(imdbvalue);

    const elements = ['one', 'two', 'three'];

    // function sayHello(name) {
    //     alert(`hello, ${name}`);
    // }

    return (
        <DefaultLayout title={props.title}>
            <Nav current={props.title} navNames={props.nameList} navURLS={props.urlList}/>

            {/*{imdb}*/}
            {final.map((value, index) => {
                return <li key={index}>{value}</li>
            })}


            {/*<button onClick={() => sayHello("Test")} style={{position: "absolute", top: "40%"}}>asd</button>*/}
        </DefaultLayout>
    );
}

module.exports = Index;