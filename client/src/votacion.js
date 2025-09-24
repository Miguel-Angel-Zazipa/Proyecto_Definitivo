import {Link} from 'react-router-dom';

function Votacion() {
  return (
    <div>
        <header>
                <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                    <img id="logo" src="../src/img/logo.png" alt="Logo de la Empresa"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <h6 id="Titulo">Sistema de Votacion</h6>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to={"/"}><a>Inicio</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/Candidatos"}><a>Candidatos</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/Fechas"}><a>Fechas</a></Link>
                    </li>
                    </ul>
                </div>
                </nav>
        </header>

            <footer class="footer mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 text-center">
                            <a href="#">
                                <img id="escudo" src="../img/escudo.png" alt="Logo de la Empresa" class="footer-logo"/>
                            </a>
                        </div>
                            <div class="col-md-4">
                                <h5>Secciones</h5>
                                <ul class="list-unstyled">
                                    <Link to={"/"}><a>Inicio</a></Link><br/>
                                    <Link to={"/Candidatos"}><a>Candidatos</a></Link>
                                    <Link to={"/Fechas"}><a>Fechas</a></Link>
                                </ul>
                            </div>
                        <div class="col-md-4 text-center">
                            <h5>Síguenos</h5>
                            <a href="https://www.youtube.com/@institutotecnicoindustrial408/videos" target="_blank" class="btn btn-outline-primary btn-sm">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="https://x.com/?lang=es" target="_blank" class="btn btn-outline-info btn-sm">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" class="btn btn-outline-danger btn-sm">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/groups/5188566389?locale=es_LA" target="_blank" class="btn btn-outline-primary btn-sm">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </footer>

    </div>
  );
}

export default Votacion;