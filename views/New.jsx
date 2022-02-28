const React= require('react')
class New extends React.Component{
    render(){
        return(
            <div>
                <h1>Add to your Journal</h1>
                <nav>
                    <a href="/logs">Go back to Index</a>
                </nav>
            <form action='/logs' method='POST'>
              Title Here:  <input name="title" type="text"/><br/>
              Entry Here:  <textarea name="entry" type="text"/><br/>
              Ship is Broken:  <input name='shipIsBroken' type="checkbox"/><br/>
              Date: <input type="date"/><br/>
                <input type='submit' value='Submit Log'/><br/>

            </form>
            </div>
        )
    }
}

module.exports=New;