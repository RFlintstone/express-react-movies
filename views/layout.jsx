const React = require('react');

function DefaultLayout(props) {
    return (
        <html>
        <head>
            <title>Dept assignment - {props.title}</title>
            <link type="text/css" rel="stylesheet" href="/css/fonts.css"></link>
            <link type="text/css" rel="stylesheet" href="/css/main.css"></link>
            <link type="text/css" rel="stylesheet" href="/css/nav.css"></link>
            <link type="text/css" rel="stylesheet" href="/css/header.css"></link>
        </head>
        <body>{props.children}</body>
        </html>
    );
}

module.exports = DefaultLayout;