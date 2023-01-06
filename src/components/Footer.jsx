function Footer() {
    return <footer className="page-footer light-blue darken-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} React App
                <a className="grey-text text-lighten-4 right"
                   href="https://github.com/unterbergg/react-shop"
                   target="_blank"
                   rel="noreferrer"
                >
                    Repo
                </a>
            </div>
        </div>
    </footer>
}

export {Footer}