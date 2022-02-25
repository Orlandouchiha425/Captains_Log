const React= require('react')
class New extends React.Component{
    render(){
        return(
            <form action='/new' method='POST'>
                <input name="title" type="text"/><br/>
                <input name="entry" type="text"/><br/>
                <input name='shipIsBroken' type="checkbox"/><br/>
                <input type='submit' value='Submit Log'/><br/>

            </form>
        )
    }
}

module.exports=New;