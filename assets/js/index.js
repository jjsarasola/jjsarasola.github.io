var app = new Vue({ 
    el: '#app',
    data: {
        english: false,
        navbar: {
            proyectos: "Proyectos",
            CV: "Descargar CV",
            contacto: "Contactame",
        },
        titulos: {
            sobreMi: "Sobre mí",
            tecnologias: "Tecnologías",
            proyectos: "Mis proyectos",
            masProyectos: "Más proyectos",
            googlePlay: "Ver en Google Play",
            goToWeb: "Ir al sitio"
        },
        textos: {
            sobreMiTexto: "Soy estudiante de la Tecnicatura Universitaria en Programación de la UTN.",
            sobreMiTexto2: "Busco continuar mi carrera profesional en los campos del desarrollo web y las aplicaciones móviles.",
            scanApp: "ScanApp es una aplicación para escaneo de códigos de barras y QR, desarrollada con React Native y librerías nativas de Java, para dispositivos PDA Honeywell. Permite listar códigos y exportar listas a una hoja de cálculo.",
            rollingDados: "RollingDados es un cubilete de dados virtual, desarrollado con React Native, y pensado para reemplazar los dados físicos al momento de jugar a juegos de mesa.",
            hestia: "Hestia es una aplicación web realizada con VueJS y Firebase para realizar auditorías de energía en hogares. Actualmente es utilizada por la Universidad Nacional de San Martín y la fundación Pro Vivienda Social",
            huellaDeCarbono: "Aplicación en desarrollo..."
        }
    },
    methods: {
        toEnglish: function () {
            this.navbar.proyectos = "Projects"
            this.navbar.CV = "Download my CV"
            this.navbar.contacto = "Contact me"
            this.titulos.sobreMi = "About me"
            this.titulos.tecnologias = "Technologies"
            this.titulos.proyectos = "My projects"
            this.titulos.masProyectos = "More projects"
            this.titulos.googlePlay = "View on Google Play"
            this.titulos.goToWeb = "Go to website",
            this.textos.sobreMiTexto = "I'm a programming student at Universidad Tecnologica Nacional (UTN) in Buenos Aires, Argentina."
            this.textos.sobreMiTexto2 = "My goal is to improve my developer skills for web and mobile apps.",
            this.textos.scanApp = "ScanApp is an application for barcode and QR scanning developed with React Native and native Java libraries for Honeywell PDA devices. Allows you to list codes and export them to a spreadsheet.",
            this.textos.rollingDados = "RollingDados is a virtual dice cup developed with React Native designed to replace physical dice when playing a board games.",
            this.textos.hestia = "Hestia is a web application developed with VueJS and Firebase to perform energy audits in homes. It is currently used by Universidad Nacional de San Martín and the Pro Vivienda Social foundation."
            this.textos.huellaDeCarbono = "Application in development..."
        },
        toSpanish: function () {
            this.navbar.proyectos = "Proyectos"
            this.navbar.CV = "Descargar CV"
            this.navbar.contacto = "Contactame"
            this.titulos.sobreMi = "Sobre mí"
            this.titulos.tecnologias = "Tecnologías"
            this.titulos.proyectos = "Mis proyectos"
            this.titulos.masProyectos = "Más proyectos"
            this.titulos.googlePlay = "Ver en Google Play"
            this.titulos.goToWeb = "Ir al sitio",
            this.textos.sobreMiTexto = "Soy estudiante de la Tecnicatura Universitaria en Programación de la UTN.",
            this.textos.sobreMiTexto2 = "Busco continuar mi carrera profesional en los campos del desarrollo web y las aplicaciones móviles.",
            this.textos.scanApp = "ScanApp es una aplicación para escaneo de códigos de barras y QR, desarrollada con React Native y librerías nativas de Java, para dispositivos PDA Honeywell. Permite listar códigos y exportar listas a una hoja de cálculo.",
            this.textos.rollingDados = "RollingDados es un cubilete de dados virtual, desarrollado con React Native, y pensado para reemplazar los dados físicos al momento de jugar a juegos de mesa.",
            this.textos.hestia = "Hestia es una aplicación web realizada con VueJS y Firebase para realizar auditorías de energía en hogares. Actualmente es utilizada por la Universidad Nacional de San Martín y la fundación Pro Vivienda Social"
            this.textos.huellaDeCarbono = "Aplicación en desarrollo..."
        }
    },
    computed: {
        getYear: function() {
            let year = new Date().getFullYear()
            return year;
        },
        url_CV: function() {
            if (this.english) {
                return "assets/CV/CV _Juan_Jose_Sarasola_(EN).pdf"
            } else {
                return "assets/CV/CV _Juan_Jose_Sarasola_(ES).pdf"
            }
        }
    }
});