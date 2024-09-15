function changeLoginForm() {
    const formContainer = document.getElementById("loginForm");
    const selectedOption = document.getElementById("loginSelect").value;
    if (selectedOption === "user") {
        formContainer.innerHTML = `
            <form>
                    <div class="input-group">
                        <input id="mobile-number" placeholder="Mobile Number" type="text" />
                    </div>
                    <div class="input-group">
                        <input id="uid" placeholder="UID" type="text" />
                    </div>
                    <button type="submit"><a href="opd1.html">Log In</a></button>
                </form>
        `;
    } else if (selectedOption === "hospital") {
        formContainer.innerHTML = `
            <form>
                    <div class="input-group">
                        <input id="hospital-id" placeholder="Hospital ID" type="text" />
                    </div>
                    <div class="input-group">
                        <input id="password" placeholder="Password" type="text" />
                    </div>
                    <button type="submit"><a href="hospital Interface.html">Log In</a></button>
                </form>
        `;
    }
}