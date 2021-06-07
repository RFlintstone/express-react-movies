// Requirements
const React = require('react');
const DefaultLayout = require('./layout');
const Nav = require('./templates/nav');

// Setup function/page
async function Index(props) {

    // Setup page
    const imdbvalue = "Harry";
    const final = await props.api.imdb(imdbvalue);

    return (
        <DefaultLayout title={props.title}>
            <Nav current={props.title} navNames={props.nameList} navURLS={props.urlList}/>

            {/* Doesn't work yet - would have looped through data and printed them out on the page */}
            {/*{imdb}*/}
            {final.map((value, index) => {
                return <li key={index}>{value}</li>
            })}

        </DefaultLayout>
    );
}

// Make page available
module.exports = Index;