function changeLoginForm() {
    const formContainer = document.getElementById("loginForm");
    const selectedOption = document.getElementById("loginSelect").value;
    if (selectedOption === "user") {
        formContainer.innerHTML = `
            <form>

                <div class="input-group">
                    <label for="mobile-number">Mobile Number</label>
                    <input id="mobile-number" placeholder="Enter Mobile Number" type="text" />
                </div>
                <div class="input-group">
                    <label for="uid">UID</label>
                    <input id="uid" placeholder="Enter UID" type="text" />
                </div>
                <div class="input-group-btn">
                    <a href="opd1.html">ENTER</a>

                </div>
                <div class="input-group-btn">
                    <a href="#">Get OTP</a>

                </div>
            </form>
        `;
    } else if (selectedOption === "admin") {
        formContainer.innerHTML = `
            <form>

                <div class="input-group">
                    <label for="hospital-id">Hospital ID</label>
                    <input id="hospital-id" placeholder="Enter Hospital ID" type="text" />
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input id="password" placeholder="Enter Password" type="text" />
                </div>
                <div class="input-group-btn">
                    <a href="hospital interface.html">ENTER</a>

                </div>
            </form>
        `;
    }
}