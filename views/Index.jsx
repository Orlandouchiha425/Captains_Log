const React=require('react')

class Index extends React.Component{
    render(){
        const logs=this.props.logs
        return(
            <div>
            <nav>
                <a href="/new">Go to Create a new Log</a>
            </nav>
            <ul>
                {
                    logs.map((log)=>{
                        <li key={`${log._id}`}>
                            <a href={`/logs/${log._id}`}>{log.title}</a></li>
                    })
                }
            </ul>
            </div>
        )
}
    
}


module.exports=Index;