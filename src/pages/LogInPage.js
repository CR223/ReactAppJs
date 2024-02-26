import '../App.css'

export default function LogInPage(){
    return(
<div className='App-header'>

<div className='App-form'>
          <div className='FText'>Log in</div>
                            <br/>
  <form action="/action_page.php">
    <label for="mail">Mail</label>
    <input type="text" id="fname" name="firstname" placeholder="Your mail.."/>

    <label for="message">Password</label>
    <input type="password" id="pword" name="password" placeholder="Password.."/>
    <br/>
    <div className='sub'><input type='submit' id="submit" name="submit"/></div>
  </form>
</div>

</div>
    )
}
