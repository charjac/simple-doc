import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'

/**
 * render an html page from a react component for the last version of the app
 */
export default (
    Component: React.StatelessComponent<any>,
    props: any
): string => {
    const reactApp = renderToString(<Component {...props} />)
    const helmet = Helmet.renderStatic()

    return `
        <!doctype html>
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                ${helmet.script.toString()}
            </head>
            <body>
                ${reactApp}
            </body>
        </html>
    `
}
