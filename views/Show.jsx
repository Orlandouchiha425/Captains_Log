const React =require('react')
const Default = require('./layout/Default')

class Show extends React.Component{
    render(){
        const log=this.props.log
        return(
            <Default title="Show Page">
            <div className='jumbotron'>
                <h1>This is the Show page for {log.title}</h1>
                <p>{log.date}</p>
                <a href={`/logs/${log._id}/edit`}>  Edit This Log</a><br/>
                < a href='/logs'> Go back to the main screen</a>
            
            <p>{log.entry}</p>


            </div>
            </Default>
        )




    }
}

module.exports=Show;