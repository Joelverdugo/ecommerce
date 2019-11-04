const loadlogin = function(){
    const btnLogin = document.querySelector('#btnLogin')
    btnLogin.addEventListener('click', function(){
        User.save(document.querySelector('#username').value)
        window.location.href = 'home.html'
    })
}

const logOut = function() {
    User.remove()
    window.location.href = 'index.html'
}

const showUsername = function() {
    const username = document.querySelector('.username')
    const usernameTxt = document.createTextNode(User.get() || 'Anónimo')
    username.appendChild(usernameTxt)
}

const init = function(){
    document.querySelector('.logout').addEventListener('click', logOut)
    document.querySelector('#btnSearch').addEventListener('click', function (){
        let query = document.querySelector('#search').value
        const show = new Show()
        const shows = show.findBy(query)
        let showContainer = document.querySelector('#showContainer')
        showContainer.innerHTML = shows.map(s => {
            const serie = new Serie(s.show.name, s.show.image, s.show.summary)
            const show = new Show()
            return show.template(serie)
        })
    })
    showUsername()
}

class User {
    constructor () {
        
    }

    static getKey(){
        return 'username'
    }

    static save(user){
        localStorage.setItem(User.getKey(), user)
    }

    static get(){
        return localStorage.getItem(User.getKey())
    }

    static remove(){
        localStorage.removeItem(User.getKey())
    }
}

unit()


