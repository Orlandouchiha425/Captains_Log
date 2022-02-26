const React= require('react')
class New extends React.Component{
    render(){
        return(
            <form action='/logs/Show' method='POST'>
              Title Here:  <input name="title" type="text"/><br/>
              Entry Here:  <textarea name="entry" type="text"/><br/>
              Ship is Broken:  <input name='shipIsBroken' type="checkbox"/><br/>
                <input type='submit' value='Submit Log'/><br/>

            </form>
        )
    }
}

module.exports=New;