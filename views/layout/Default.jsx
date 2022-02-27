const {render}=require('express/lib/response')
const React=require('react')

class Default extends React.Component{

    render(){
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>


            </html>
        )


    }


}
module.exports=Default;