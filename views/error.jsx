const React = require('react');
const DefaultLayout = require('./layout');

function errorCode(props) {
    return (
        <DefaultLayout title={props.title}>
            <div className={"error"}>
                <h1>Oops, couldn't find that page.</h1>
                <h2>That was a { props.request.code }.</h2>
                <code>Request Status: { props.request.requestStatus } <br/> Error code: { props.request.code }</code>
            </div>
            <br/><img src="img/swiper_transparent.png"/>
        </DefaultLayout>
    );
}

module.exports = errorCode;