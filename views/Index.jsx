const React=require('react')

class Index extends React.Component{
    render(){
        const logs=this.props.logs
        return(
            <nav>
                <a href="/new">Go to Create a new Log</a>
            </nav>
        )
    }

}

module.exports=Index;