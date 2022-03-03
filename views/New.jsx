const React= require('react')
const Default=require('./layout/Default.jsx')
class New extends React.Component{
    render(){
        return(
            <Default>
            <div className='container jumbotron'>
                <h1>Add to your Journal</h1>
                <nav>
                    <a className="btn btn-primary" href="/logs">Go back to Index</a>
                </nav>
            <form action='/logs' method='POST'>
              Title Here:  <input name="title" type="text"/><br/>
              Entry Here:  <textarea name="entry" type="text"/><br/>
              Ship is Broken:  <input name='shipIsBroken' type="checkbox"/><br/>
              Date: <input name="date" type="date"/><br/>
                <input type='submit' value='Submit Log'/><br/>

            </form>
            </div>
            </Default>
        )
    }
}

module.exports=New;