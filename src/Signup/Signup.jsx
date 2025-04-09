import "./Signup.css"
function Signup(){
    return(
        <>
        <div className="box" >
            <form className="form">
                <h2 className="text1"> Signup</h2>

                    <input placeholder=" write your name " className="input-field"/>
                    <input placeholder="Enter Your Email" className="input-field" />
                    <input placeholder=" enter your mobile number" className="input-field"/>
                    <input placeholder="Enter Your City" className="input-field"/>

                    <button type="button" className="btn" > Submit </button>
            </form>

        </div>

        </>
    )
}
export default Signup;
