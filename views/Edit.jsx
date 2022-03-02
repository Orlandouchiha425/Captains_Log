const React=require('react')
const Default= require('./layout/Default')

class Edit extends React.Component{
    render(){
        return(
            <Default  title="Edit This Page">
                <nav>
                <a  href='/logs'>Go back to home screen</a>
                </nav>
                <form action={`/logs/${this.props.logs._id}?_method=PUT`} method='POST'>
                    Title: <input type="text" name='title' defaultValue={this.props.logs.title}/><br/>
                    Entry: <textarea type='text' name='entry' defaultValue={this.props.logs.entry}/><br/>
                    Ship is Broken:
                    {this.props.logs.shipIsBroken?<input type="checkbox" name='shipIsBroken' defaultChecked/>:<input type='checkbox' name="shipIsBroken"/>}
                    <br/> 
                    <input type="submit" value="submit Changes"></input>            
                </form>



            </Default>
        )
    }


}

module.exports=Edit;