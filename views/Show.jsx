const React =require('react')

class Show extends React.Component{
    render(){
        const log=this.props.log
        return(
            <div>
                <h1>This is the Show page for {log._id}</h1>




            </div>
        )




    }
}

module.exports=Show;