import {Link} from 'react-router-dom';

function Candidatos() {
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
                        <Link to={"/Fechas"}><a>Fechas</a></Link>
                    </li>
                    </ul>
                    <div class="navbar-nav ml-auto">
                        <Link to={"/Login"}><a class="nav-item nav-link btn btn-primary">Ingresar</a></Link>
                        <Link to={"/Register"}><a class="nav-item nav-link btn btn-primary">Registrar</a></Link>
                    </div>
                </div>
                </nav>
        </header>

        <section class="hero">
            <div class="container text-center">
                <h1 class="fade-in">Candidatos</h1>
                <p class="highlight">Conoce a los <strong>candidatos</strong> para la <span class="highlight">elección de
                    personero</span>.</p>
            </div>
        </section>

        <div class="section-title">
            <h3>Candidatos</h3>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="../img/est1.jpeg" alt="Candidato 1"/>
                    <div class="card-body">
                        <h5 class="card-title">Laura Martinez</h5>
                        <p class="card-text">Laura es una estudiante destacada en ciencias sociales y miembro activo del
                            club de debate. Le apasiona la justicia social y los derechos humanos.
                            Propuestas:
                            Crear un espacio de diálogo estudiantil mensual.
                            Fomentar proyectos de voluntariado en la comunidad.
                            Mejorar la comunicación entre estudiantes y directivos.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="../img/est2.jpeg" alt="Candidato 2"/>
                    <div class="card-body">
                        <h5 class="card-title">Carlos Gómez</h5>
                        <p class="card-text">Carlos es deportista, capitán del equipo de fútbol y conocido por su liderazgo
                            y trabajo en equipo.
                            Propuestas:
                            Organizar torneos intercolegiales.
                            Promover actividades físicas y deportivas para todos.
                            Mejorar las instalaciones deportivas de la escuela.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="../img/est3.jpeg" alt="Candidato 3"/>
                    <div class="card-body">
                        <h5 class="card-title">Ana Rodriguez</h5>
                        <p class="card-text">Ana es una estudiante de arte con talento para la pintura y la escultura.
                            Participa en numerosas exposiciones escolares.
                            Propuestas:
                            Crear un mural colectivo que represente la identidad de la escuela.
                            Implementar talleres de arte y cultura.
                            Organizar exposiciones de arte estudiantil.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="../img/est4.jpeg" alt="Candidato 4"/>
                    <div class="card-body">
                        <h5 class="card-title">Maria Fernandez</h5>
                        <p class="card-text">María es apasionada por la literatura y ha ganado varios concursos de
                            escritura. Es editora del periódico escolar.
                            Propuestas:
                            Fomentar un club de lectura.
                            Publicar una revista literaria estudiantil.
                            Organizar talleres de escritura creativa.</p>
                    </div>
                </div>
            </div>
        </div>


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

export default Candidatos;