
loginDom = {
    svg: document.querySelector("svg"),
    form: document.querySelector("form"),
    spin: document.querySelector(".spin"),
    submit: document.querySelector(".submit")
}

function loginAddEvent() {
    loginDom.form.addEventListener("submit", function (e) {
        e.preventDefault()
        // let username = loginDom.form.querySelector("#username").value
        // let password = loginDom.form.querySelector("#password").value
        // if (username == "admin" && password == "admin") {
        //     alert("Login success")
        //     window.location.href = "index.html"
        // } else {
        //     alert("Login failed")
        // }
    }
    )
    loginDom.svg.addEventListener("click", function () {
        let cycle = loginDom.svg.querySelector("circle")
        if (cycle) {
            cycle.remove()
            loginDom.svg.innerHTML = `
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <line x1="2" y1="2" x2="22" y2="22"></line>
            `
            return
        }
        let line = loginDom.svg.querySelector("line")
        if (line) {
            line.remove()
            loginDom.svg.innerHTML = `
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>`
            return
        }
    })
    loginDom.submit.addEventListener("click", function () {
        loginDom.spin.style.display = "block"
        // loginDom.submit.style.display = "none"
    })
}
loginAddEvent()