/// NEEDED VARIABLES ///
var page = 0;

var language = "english";   // language by default //
const curriculumHeaders = {
    "english": {
        "contact": "Contact",
        "skills" : "Skills",
        "workExperience": "Work Experience",
        "education": "Education",
        "languages": "Languages"
    },
    "spanish": {
        "contact": "Contacto",
        "skills" : "Habilidades",
        "workExperience": "Experiencia Profesional",
        "education": "Formación Académica",
        "languages": "Idioma"
    }
}

const navBarHeaders = {
    "english": [{"name": "Curriculum", "link": "", "value": 0},
        {"name": "Portfolio", "link": "#portfolio", "value": 1}, 
        {"name": "Certificates", "link": "#certificates", "value": 2}, 
        {"name": "Contact", "link": "#contact", "value": 3}],
    "spanish": [{"name": "Currículo", "link": "", "value": 0},
        {"name": "Portfolio", "link": "#portfolio", "value": 1}, 
        {"name": "Certificados", "link": "#certificates", "value": 2}, 
        {"name": "Contacto", "link": "#contact", "value": 3}]
}

const contactLabels = {
    "english": {
        "title": "Contact",
        "name": "Name",
        "email": "Email",
        "phone": "Phone",
        "subject": "Subject",
        "message": "Message",
        "submit": "Submit",
        "namePlaceholder": "Enter name",
        "emailPlaceholder": "Enter email",
        "phonePlaceholder": "Enter phone",
        "subjectPlaceholder": "Enter subject",
        "messagePlaceholder": "Enter your comment...",
        "mandatoryHint": "Fields are mandatory."
    },
    "spanish": {
        "title": "Contacto",
        "name": "Nombre",
        "email": "Email",
        "phone": "Teléfono",
        "subject": "Asunto",
        "message": "Mensaje",
        "submit": "Enviar",
        "namePlaceholder": "Escribe tu nombre",
        "emailPlaceholder": "Escribe tu Email",
        "phonePlaceholder": "Escribe tu teléfono",
        "subjectPlaceholder": "Escribe un asunto",
        "messagePlaceholder": "Deja aquí tu comentario...",
        "mandatoryHint": "Los campos son obligatorios."
    }
}

/// PRELOADED JSON: Normally would be read from an external JSON file if using a framework ///

const dataJSON = {
    "person" : {
        "english": {
            "name" : {
                "first": "Pedro",
                "middle": "José",
                "last": "Ramírez Valera"
            },
            "birth": {
                "year": 1984,
                "month": 3,
                "day": 24
            },
            "title": "Programmer",
            "description": "Experienced programmer in software solution implementation, UI design, and maintenance of relational databases."
        },
        "spanish": {
            "name" : {
                "first": "Pedro",
                "middle": "José",
                "last": "Ramírez Valera"
            },
            "birth": {
                "year": 1984,
                "month": 3,
                "day": 24
            },
            "title": "Programador",
            "description": "Programador con experiencia en aplicación de soluciones de software, diseño de UI's y mantenimiento de BBDD relacionales."
        }
    },
    "contact": {
        "phone": "+34616578189",
        "email": "pedro_ramirez84@yahoo.es",
        "linkedin": "www.linkedin.com/in/pjramval",
        "github": "github.com/thepedrock"
    },
    "skills": {
        "english": ["Java", "C#", "Python", "XML", "JavaScript", "TypeScript", "Visual Basic", "SQL", "Agile"],
        "spanish": ["Java", "C#", "Python", "XML", "JavaScript", "TypeScript", "Visual Basic", "SQL", "Agile"]
    },
    "education": [{
        "english": {
            "center": "Ilerna Homologated Center, Lleida",
            "centerLink": "https://www.ilerna.es/",
            "startDate": "2018",
            "endDate": "2020",
            "description": ["Multiplatform Application Development Higher Vocational Training Degree"]
        },
        "spanish": {
            "center": "Centro Homologado Ilerna, Lérida",
            "centerLink": "https://www.ilerna.es/",
            "startDate": "2018",
            "endDate": "2020",
            "description": ["Ciclo superior en Desarrollo de Aplicaciones Multiplataforma"]
        }
    }, {
        "english": {
            "center": "National University of Distance Education (UNED), Seville",
            "centerLink": "https://www.uned.es/universidad/inicio.html",
            "startDate": "2013",
            "endDate": "Unfinished",
            "description": ["Bachelor of Business Science"]
        },
        "spanish": {
            "center": "Universidad Nacional de Educación a Distancia (UNED), Sevilla",
            "centerLink": "https://www.uned.es/universidad/inicio.html",
            "startDate": "2013",
            "endDate": "Inacabado",
            "description": ["Grado en Ciencias Empresariales"]
        }        
    }],
    "workExperience":[{
        "english":{
            "company": "Solera, Inc.",
            "companyLink": "https://www.solera.com/",
            "jobPosition": "Senior Software Solutions Engineer",
            "startDate": "Nov. 2020",
            "endDate": "Current",
            "workDescription": ["Professional product support using the company's own business rule engine that applies XML+JS, XSL, and Apache FreeMarker technologies.", "Ad hoc solutions using Python or Powershell.", "Agile continous delivery."]
        },
        "spanish":{
            "company": "Solera, Inc.",
            "companyLink": "https://www.solera.com/",
            "jobPosition": "Ingeniero Senior de Soluciones de Software",
            "startDate": "2020 Nov.",
            "endDate": "Actualmente",
            "workDescription": ["Soporte profesional de producto empleando el motor de reglas de negocio propio de empresa que aplica tecnología XML+JS, XSL y Apache FreeMarker.", "Soluciones adhoc empleando Python o Powershell.", "Entrega continua, Agile."]
        }
    },{
        "english":{
            "company": "Clever Global S.L.",
            "companyLink": "https://www.clever-global.com/en/",
            "jobPosition": "UI/UX and Database Architect",
            "startDate": "Oct. 2016",
            "endDate": "Aug. 2019",
            "workDescription": ["Design, development, and maintenance of UI and databases for the back office of the collections department at Endesa Distribución.",
                "Management and analysis of data in databases using ACCESS and Visual Basic for the claims department at Endesa Distribución.",
                "Administrative tasks for the back office of the Social Bonus at Endesa Energía."]
        },
        "spanish":{
            "company": "Clever Global S.L.",
            "companyLink": "https://www.clever-global.com/",
            "jobPosition": "Arquitecto de IU y Bases de Datos",
            "startDate": "2016 Oct.",
            "endDate": "2019 Oct.",
            "workDescription": ["Diseño, desarrollo y mantenimiento de IU y BBDD para el backoffice del departamento de cobros de Endesa Distribución.",
                "Gestión y análisis de datos en BBDD con ACCESS y Visual Basic para el departamento de reclamaciones de Endesa Distribución.",
                "Tareas administrativas para backoffice de Bono Social de Endesa Energía."]
        }
    },{
        "english":{
            "company": "Clever Global S.L.",
            "companyLink": "https://www.clever-global.com/en/",
            "jobPosition": "Administrative",
            "startDate": "Jun. 2010",
            "endDate": "Sep. 2016",
            "workDescription": ["Administrative tasks in the department of contracting for large clients at Endesa Distribución."]
        },
        "spanish":{
            "company": "Clever Global S.L.",
            "companyLink": "https://www.clever-global.com/",
            "jobPosition": "Administrativo",
            "startDate": "2010 Jun.",
            "endDate": "2016 Sep.",
            "workDescription": ["Tareas administrativas en el departamento de contratación grandes clientes de Endesa Distribución."]
        }
    },{
        "english":{
            "company": "Moreno, S.A.",
            "companyLink": null,
            "jobPosition": "Foreign Trade Accounting Manager",
            "startDate": "Jun. 2006",
            "endDate": "Sep. 2006",
            "workDescription": ["Administrative tasks in Foreign Trade.",
                "Administrative tasks in the Accounting department with ERP Dynamics."]
        },
        "spanish":{
            "company": "Moreno, S.A.",
            "companyLink": null,
            "jobPosition": "Gestor Contable Comercio Exterior",
            "startDate": "2006 Jun.",
            "endDate": "2006 Sep.",
            "workDescription": ["Tareas administrativas en Comercio Exterior.",
                "Tareas administrativas en departamento de Contabilidad con ERP Dynamics."]
        }
    }],
    "languages": [{
        "english": {
            "language": "English",
            "year": "1999",
            "certification": "First Certificate"
        },
        "spanish": {
            "language": "Inglés",
            "year": "1999",
            "certification": "First Certificate"
        }
    },{
        "english": {
            "language": "Spanish",
            "year": "",
            "certification": "Native"
        },
        "spanish": {
            "language": "Español",
            "year": "",
            "certification": "Lengua materna"
        }
    }],
    "projects": [{
        "english": {
            "title": "TETRIS",
            "backgroundImage": "https://raw.githubusercontent.com/ThePedrock/tetris/main/resources/screenshot01.png",
            "skills": ["Python"],
            "demoURL": "",
            "repositoryURL": "https://github.com/ThePedrock/tetris"
        },
        "spanish": {
            "title": "TETRIS",
            "backgroundImage": "https://raw.githubusercontent.com/ThePedrock/tetris/main/resources/screenshot01.png",
            "skills": ["Python"],
            "demoURL": "",
            "repositoryURL": "https://github.com/ThePedrock/tetris"
        }
    },{
        "english": {
            "title": "POKALC",
            "backgroundImage": "https://raw.githubusercontent.com/ThePedrock/pokalc/main/resources/demo.png",
            "skills": ["Python"],
            "demoURL": "",
            "repositoryURL": "https://github.com/ThePedrock/pokalc"
        },
        "spanish": {
            "title": "POKALC",
            "backgroundImage": "https://raw.githubusercontent.com/ThePedrock/pokalc/main/resources/demo.png",
            "skills": ["Python"],
            "demoURL": "",
            "repositoryURL": "https://github.com/ThePedrock/pokalc"
        }
    },{
        "english": {
            "title": "sudokuSolver",
            "backgroundImage": "https://raw.githubusercontent.com/ThePedrock/sudokuSolver/main/src/sudokuSolver/resources/demo.png",
            "skills": ["Java"],
            "demoURL": "",
            "repositoryURL": "https://github.com/ThePedrock/sudokuSolver"
        },
        "spanish": {
            "title": "sudokuSolver",
            "backgroundImage": "https://raw.githubusercontent.com/ThePedrock/sudokuSolver/main/src/sudokuSolver/resources/demo.png",
            "skills": ["Java"],
            "demoURL": "",
            "repositoryURL": "https://github.com/ThePedrock/sudokuSolver"
        }
    },{
        "english": {
            "title": "Finantial Indicators",
            "backgroundImage": "https://raw.githubusercontent.com/ThePedrock/indicadoresFinancieros/master/src/main/resources/demo.png",
            "skills": ["Java"],
            "demoURL": "",
            "repositoryURL": "https://github.com/ThePedrock/indicadoresFinancieros"
        },
        "spanish": {
            "title": "indicadoresFinancieros",
            "backgroundImage": "https://raw.githubusercontent.com/ThePedrock/indicadoresFinancieros/master/src/main/resources/demo.png",
            "skills": ["Java"],
            "demoURL": "",
            "repositoryURL": "https://github.com/ThePedrock/indicadoresFinancieros"
        }
    }],
    "certificates": [{
        "english": {
            "title": "Multiplatform Application Development Higher Vocational Training Degree",
            "backgroundImage": "./resources/certificates/multiplatformthm.png",
            "certificateURL": "./resources/certificates/1713173286.pdf"
        },
        "spanish": {
            "title": "Ciclo superior en Desarrollo de Aplicaciones Multiplataforma",
            "backgroundImage": "./resources/certificates/multiplatformthm.png",
            "certificateURL": "./resources/certificates/1713173286.pdf"
        }
    },{
        "english": {
            "title": "Microservices: Designing Highly Scalable Systems",
            "backgroundImage": "./resources/certificates/microservicesthm.png",
            "certificateURL": "./resources/certificates/Microservices.pdf"
        },
        "spanish": {
            "title": "Microservicios: Diseño de Sistemas Altamente Escalables",
            "backgroundImage": "./resources/certificates/microservicesthm.png",
            "certificateURL": "./resources/certificates/Microservices.pdf"
        }
    },{
        "english": {
            "title": "SOLID Principles: Introducing Software Architecture & Design",
            "backgroundImage": "./resources/certificates/solidthm.png",
            "certificateURL": "./resources/certificates/SOLID.pdf"
        },
        "spanish": {
            "title": "Principios SOLID: Introducción a la Arquitectura y Diseño de Software",
            "backgroundImage": "./resources/certificates/solidthm.png",
            "certificateURL": "./resources/certificates/SOLID.pdf"
        }
    }]
}

/// POPULATE HTML FUNCTIONS ///

function populateHeaders() {
    const workExperience = document.querySelector('#id_we_title');
    const education = document.querySelector('#id_ed_title');
    const languages = document.querySelector('#id_ln_title');
    const skills2 = document.querySelector('#id_sk_title');
    const contacts = document.querySelector('#id_cn_title');
    const contact = document.querySelector('#id_contactTitle');
    const skills = document.querySelector('#id_sillTitle');
    const Headers = curriculumHeaders[language];

    const contactTitle = document.createElement('h3');
    const skillsTitle = document.createElement('h3');

    workExperience.textContent = Headers.workExperience.toUpperCase();
    education.textContent = Headers.education.toUpperCase();
    languages.textContent = Headers.languages.toUpperCase();
    skills2.textContent = Headers.skills.toUpperCase();
    contacts.textContent = Headers.contact.toUpperCase();
    contactTitle.textContent = Headers.contact;
    skillsTitle.textContent = Headers.skills;

    contact.appendChild(contactTitle);
    skills.appendChild(skillsTitle);
}

function populateNavigationBar() {
    const navigationBar = document.querySelector('#id_topNavBar');
    const navBarElements = navBarHeaders[language];

    navBarElements.forEach(element => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const a = document.createElement('a');
        a.textContent = element.name;
        a.href = element.link;                
        
        /*div.onclick = function() {
            page = element.value;
            alert(page);
            switchContent();
        }*/

        li.classList.add('topNavBarElement');
        div.appendChild(a);
        li.appendChild(div);
        navigationBar.appendChild(li);
    })

    const li = document.createElement('li');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');

    img1.src = "./resources/es.png";
    img1.alt = "spanish";
    img1.title = "spanish";
    img1.style.objectFit = "contain";
    img1.onclick = switchToSpanish;

    img2.src = "./resources/en.png";
    img2.alt = "english";
    img2.title = "english";
    img2.style.objectFit = "contain";
    img2.onclick = switchToEnglish;

    img3.src = "./resources/print-icon.png";
    img3.alt = "print";
    img3.title = "print";
    img3.style.objectFit = "contain";
    img3.style.filter = 'invert(1)';
    img3.onclick = function() {
        window.print();
    };

    li.classList.add('topNavBarElement');

    li.appendChild(img1);
    li.appendChild(img2);
    li.appendChild(img3);
    navigationBar.appendChild(li);

}

function populatePerson() {
    const personName = document.querySelector('#id_name');
    const personTitle = document.querySelector('#id_title');
    const personDesc = document.querySelector('#id_desc');
    const personArray = dataJSON.person[language];

    const name = document.createElement('h1');
    const title = document.createElement('h2');
    const desc = document.createElement('h2');

    name.textContent = personArray.name.first + " " + personArray.name.middle + " " + personArray.name.last;
    title.textContent = personArray.title;
    desc.textContent = personArray.description;

    personName.appendChild(name);
    personTitle.appendChild(title);
    personDesc.appendChild(desc);
}

function populateSkillList() {
    const skillList = document.querySelector('#id_skill');
    const skillArray = dataJSON.skills[language];

    skillArray.forEach(element => {
        const p = document.createElement('p');
        p.textContent = element;
        skillList.appendChild(p);
    });
}

function populateWorkExperience() {
    const workExpList = document.querySelector('#id_we_list');
    const workExpArray = dataJSON.workExperience;

    workExpArray.forEach(item => {
        const itemElement = document.createElement('div');
        const itemTitle = document.createElement('div');
        const itemTitleLink = document.createElement('a'); 
        const itemYear = document.createElement('div');
        const itemJobName = document.createElement('div');
        const itemDescriptionList = document.createElement('ul');

        itemTitleLink.textContent = item[language].company;
        itemTitleLink.href = item[language].companyLink;
        itemTitleLink.target = "_blank";
        itemYear.textContent = item[language].startDate + " - " + item[language].endDate;
        itemJobName.textContent = item[language].jobPosition;

        itemElement.classList.add('we_list_element');
        itemTitle.classList.add('we_list_element_title');
        itemYear.classList.add('we_list_element_year');
        itemJobName.classList.add('we_list_element_job');
        itemDescriptionList.classList.add('we_list_element_content');

        item[language].workDescription.forEach(element => {
            const itemDescriptionElement = document.createElement('li');
            itemDescriptionElement.textContent = element;
            itemDescriptionList.appendChild(itemDescriptionElement);
        })

        itemTitle.appendChild(itemTitleLink);
        itemElement.appendChild(itemTitle);
        itemElement.appendChild(itemYear);
        itemElement.appendChild(itemJobName);
        itemElement.appendChild(itemDescriptionList);
        workExpList.appendChild(itemElement);
    })
}

function populateEducation() {
    const educationList = document.querySelector('#id_ed_list');
    const educationArray = dataJSON.education;

    educationArray.forEach(item => {
        const itemElement = document.createElement('div');
        const itemTitle = document.createElement('div');
        const itemTitleLink = document.createElement('a'); 
        const itemYear = document.createElement('div');
        const itemDescriptionList = document.createElement('ul');
        
        itemTitleLink.textContent = item[language].center;
        itemTitleLink.href = item[language].centerLink;
        itemYear.textContent = item[language].startDate + " - " + item[language].endDate;
        
        itemElement.classList.add('ed_list_element');
        itemTitle.classList.add('ed_list_element_title');
        itemYear.classList.add('ed_list_element_year');
        itemDescriptionList.classList.add('ed_list_element_content');

        item[language].description.forEach(element => {
            const itemDescriptionElement = document.createElement('li');
            itemDescriptionElement.textContent = element;
            itemDescriptionList.appendChild(itemDescriptionElement);
        })

        itemTitle.appendChild(itemTitleLink);
        itemElement.appendChild(itemTitle);
        itemElement.appendChild(itemYear);
        itemElement.appendChild(itemDescriptionList);
        educationList.appendChild(itemElement);
    })
}

function populateLanguage() {
    const languageList = document.querySelector('#id_ln_list');
    const languageArray = dataJSON.languages;

    languageArray.forEach(item => {
        const itemElement = document.createElement('div');
        const itemLanguage = document.createElement('div');
        const itemYear = document.createElement('div');
        const itemCertification = document.createElement('div');
        
        itemLanguage.textContent = item[language].language;
        itemYear.textContent = item[language].year;
        itemCertification.textContent = item[language].certification;
        
        itemElement.classList.add('ln_list_element');
        itemLanguage.classList.add('ln_list_element_name');
        itemYear.classList.add('ln_list_element_year');
        itemCertification.classList.add('ln_list_element_content');
        
        itemElement.appendChild(itemLanguage);
        itemElement.appendChild(itemYear);
        itemElement.appendChild(itemCertification);
        languageList.appendChild(itemElement);
    })
}

function populateSkills() {
    const skillList = document.querySelector('#id_skills');
    const skillArray = dataJSON.skills[language];

    skillArray.forEach(element => {
        const p = document.createElement('p');
        p.textContent = element;
        skillList.appendChild(p);
    });
}

function populateDescription() {
    const description = document.querySelector('#id_description');
    const descriptionArray = dataJSON.person[language];
    
    const descText = document.createElement('p');
    descText.textContent = descriptionArray.description;

    descText.classList.add('des_text');

    description.appendChild(descText);
}

/// EMPTY HTML FUNCTIONS ///

function emptyHeaders() {
    const workExperience = document.querySelector('#id_we_title');
    const education = document.querySelector('#id_ed_title');
    const languages = document.querySelector('#id_ln_title');
    const contact = document.querySelector('#id_contactTitle');
    const skills = document.querySelector('#id_sillTitle');

    workExperience.textContent = '';
    education.textContent = '';
    languages.textContent = '';
    contact.innerHTML = '';
    skills.innerHTML = '';
}

function emptyNavigationBar() {
    const navigationBar = document.querySelector('#id_topNavBar');
    navigationBar.innerHTML = '';    
}

function emptyPerson() {
    const personName = document.querySelector('#id_name');
    const personTitle = document.querySelector('#id_title');
    const personDesc = document.querySelector('#id_desc');
    personName.innerHTML = '';
    personTitle.innerHTML = '';
    personDesc.innerHTML = '';
}

function emptySkillList() {
    const skillList = document.querySelector('#id_skill');
    skillList.innerHTML = '';
}

function emptyWorkExperience() {
    const workExpList = document.querySelector('#id_we_list');
    workExpList.innerHTML = '';
}

function emptyEducation() {
    const educationList = document.querySelector('#id_ed_list');
    educationList.innerHTML = '';
}

function emptyLanguage() {
    const languageList = document.querySelector('#id_ln_list');
    languageList.innerHTML = '';    
}

function emptySkills() {
    const languageList = document.querySelector('#id_skills');
    languageList.innerHTML = '';     
}

function emptyDescription() {
    const description = document.querySelector('#id_description');
    description.innerHTML = '';
}

function populateCurriculum() {
    populateHeaders();
    populateNavigationBar();
    populatePerson();
    populateDescription();
    populateSkillList();
    populateWorkExperience();
    populateEducation();
    populateLanguage();
    populateSkills();
}

function emptyCurriculum() {
    emptyHeaders();
    emptyNavigationBar();
    emptyPerson();
    emptyDescription();
    emptySkillList();
    emptyWorkExperience();
    emptyEducation();
    emptyLanguage();
    emptySkills();
}

function populateProjects() {
    const projectContainer = document.querySelector('#id_portfolio_container');

    dataJSON.projects.forEach(project => {
        projectContainer.appendChild(projectCardBuilder(project));
    })
}

function emptyProjects() {
    const projectContainer = document.querySelector('#id_portfolio_container');
    projectContainer.innerHTML = '';    
}

function populateCertificates() {
    const projectContainer = document.querySelector('#id_certificates_container');

    dataJSON.certificates.forEach(certificate => {
        projectContainer.appendChild(certificateBuilder(certificate));
    })
}

function emptyCertificates() {
    const projectContainer = document.querySelector('#id_certificates_container');
    projectContainer.innerHTML = '';
}

function populateContactForm() {
    const formTitle = document.querySelector('#id_form_title');
    const formName = document.querySelector('#id_form_name');
    const formEmail = document.querySelector('#id_form_email');
    const formPhone = document.querySelector('#id_form_phone');
    const formSubject = document.querySelector('#id_form_subject');
    const formMessage = document.querySelector('#id_form_message');
    const formSubmit = document.querySelector('#id_form_submit_text');
    const formNameInput = document.querySelector('#id_form_nameInput');
    const formEmailInput = document.querySelector('#id_form_emailInput');
    const formPhoneInput = document.querySelector('#id_form_phoneInput');
    const formSubjectInput = document.querySelector('#id_form_subjectInput');
    const formMessageInput = document.querySelector('#id_form_messageInput');
    const formMandatoryHint = document.querySelector('#id_form_mandatory_hint');

    formTitle.textContent = contactLabels[language].title;
    formName.textContent = contactLabels[language].name;
    formEmail.textContent = contactLabels[language].email;
    formPhone.textContent = contactLabels[language].phone;
    formSubject.textContent = contactLabels[language].subject;
    formMessage.textContent = contactLabels[language].message;
    formSubmit.textContent = contactLabels[language].submit;

    formNameInput.placeholder = contactLabels[language].namePlaceholder;
    formEmailInput.placeholder = contactLabels[language].emailPlaceholder;
    formPhoneInput.placeholder = contactLabels[language].phonePlaceholder;
    formSubjectInput.placeholder = contactLabels[language].subjectPlaceholder;
    formMessageInput.placeholder = contactLabels[language].messagePlaceholder;

    formMandatoryHint.textContent = contactLabels[language].mandatoryHint;
}

function emptyContactForm() {
    const formTitle = document.querySelector('#id_form_title');
    const formName = document.querySelector('#id_form_name');
    const formEmail = document.querySelector('#id_form_email');
    const formPhone = document.querySelector('#id_form_phone');
    const formSubject = document.querySelector('#id_form_subject');
    const formMessage = document.querySelector('#id_form_message');
    const formSubmit = document.querySelector('#id_form_submit_text');
    const formNameInput = document.querySelector('#id_form_nameInput');
    const formEmailInput = document.querySelector('#id_form_emailInput');
    const formPhoneInput = document.querySelector('#id_form_phoneInput');
    const formSubjectInput = document.querySelector('#id_form_subjectInput');
    const formMessageInput = document.querySelector('#id_form_messageInput');
    const formMandatoryHint = document.querySelector('#id_form_mandatory_hint');

    formTitle.textContent = '';
    formName.textContent = '';
    formEmail.textContent = '';
    formPhone.textContent = '';
    formSubject.textContent = '';
    formMessage.textContent = '';
    formSubmit.textContent =  '';

    formNameInput.placeholder = '';
    formEmailInput.placeholder = '';
    formPhoneInput.placeholder = '';
    formSubjectInput.placeholder = '';
    formMessageInput.placeholder = '';

    formMandatoryHint.textContent = '';    
}

function switchContent() {
    const content = document.querySelector('#id_content');
    content.classList.remove("fitScreen");    

    const curriculumLeftBar = document.querySelector('#id_curriculum_left_bar'); 
    curriculumLeftBar.classList.remove("hidden");
    curriculumLeftBar.classList.add("hidden");

    const curriculumWorkExperience = document.querySelector('#id_workExperience');
    const curriculumEducation = document.querySelector('#id_education');
    const curriculumLanguage = document.querySelector('#id_language');
    curriculumWorkExperience.classList.remove("hidden");
    curriculumEducation.classList.remove("hidden");
    curriculumLanguage.classList.remove("hidden");
    curriculumWorkExperience.classList.add("hidden");
    curriculumEducation.classList.add("hidden");
    curriculumLanguage.classList.add("hidden");
    
    const contact = document.querySelector('#id_contact');
    contact.classList.remove("hidden");
    contact.classList.add("hidden");

    switch(page) {
        case 0:
            content.classList.remove("fitScreen");
            curriculumLeftBar.classList.remove("hidden");
            curriculumWorkExperience.classList.remove("hidden");
            curriculumEducation.classList.remove("hidden");
            curriculumLanguage.classList.remove("hidden");
            break;
        case 1:
            content.classList.add("fitScreen");
            break;
        case 2:
            content.classList.add("fitScreen");
            break;
        case 3:            
            content.classList.add("fitScreen");
            contact.classList.remove("hidden");
            break;
        default:
    }
}

/// FUNCTIONS ///

function projectCardBuilder(projectJSON) {
    const projectCard = document.createElement('div');
    const projectWrap = document.createElement('div');
    const projectCardContent = document.createElement('div');
    const projectCardName = document.createElement('div');
    const projectCardSkills = document.createElement('div');
    const projectCardButtons = document.createElement('div');

    projectCard.classList.add("projectCard");
    projectWrap.classList.add("projectWrap");
    projectCardContent.classList.add("projectCardContent");
    projectCardName.classList.add("projectCardName");
    projectCardSkills.classList.add("projectCardSkills");
    projectCardButtons.classList.add("projectCardButtons");

    projectCard.style.backgroundImage = "url(" + projectJSON[language].backgroundImage + ")";

    projectCardName.textContent = projectJSON[language].title;

    projectJSON[language].skills.forEach(skill => {
        const aSkill = document.createElement('span');
        aSkill.textContent = skill;
        projectCardSkills.appendChild(aSkill);
    });

    const demoButton = document.createElement('button');
    const repositoryButton = document.createElement('button');
    
    //demoButton.textContent = "DEMO";
    if (language=="spanish") {
        repositoryButton.textContent = "REPOSITORIO"
    } else {
        repositoryButton.textContent = "REPOSITORY"
    }
    //repositoryButton.href = projectJSON[language].repositoryURL;
    repositoryButton.addEventListener("click", function() {
        var url = projectJSON[language].repositoryURL;
      
        window.open(url, "_blank");
      });

    //demoButton.classList.add("demoButton");
    repositoryButton.classList.add("repositoryButton");

    //projectCardButtons.appendChild(demoButton);
    projectCardButtons.appendChild(repositoryButton);

    projectCardContent.appendChild(projectCardName);
    projectCardContent.appendChild(projectCardSkills);
    projectCardContent.appendChild(projectCardButtons);

    projectWrap.appendChild(projectCardContent);

    projectCard.appendChild(projectWrap);

    return projectCard;
}

function certificateBuilder(projectJSON) {
    const certificate = document.createElement('div');
    const certificateWrap = document.createElement('div');
    const certificateContent = document.createElement('div');
    const certificateName = document.createElement('div');

    certificate.classList.add("certificate");
    certificateWrap.classList.add("certificateWrap");
    certificateContent.classList.add("certificateContent");
    certificateName.classList.add("certificateName");

    certificate.style.backgroundImage = "url(" + projectJSON[language].backgroundImage + ")";
    certificateContent.addEventListener("click", function() {
        window.open(projectJSON[language].certificateURL, '_blank');
    })    
    certificateName.textContent = projectJSON[language].title;

    certificateContent.appendChild(certificateName);
    certificateWrap.appendChild(certificateContent);
    certificate.appendChild(certificateWrap);

    return certificate;    
}

/// LISTENERS ///

function handleRoute() {
    var route = window.location.hash;
    //alert("handleRoute");
    const curriculum = document.querySelector('#id_curriculum');
    curriculum.classList.remove("hidden");
    curriculum.classList.add("hidden");

    const portfolio = document.querySelector('#id_portfolio');
    portfolio.classList.remove("portfolio");
    portfolio.classList.remove("hidden");
    portfolio.classList.add("hidden");
    
    const certificates = document.querySelector('#id_certificates');
    certificates.classList.remove("hidden");
    certificates.classList.add("hidden");

    const contact = document.querySelector('#id_contact');
    contact.classList.remove("hidden");
    contact.classList.add("hidden");    

    switch (route) {
        case '':
            curriculum.classList.remove("hidden");
            break;
        case '#portfolio':
            portfolio.classList.remove("hidden");
            portfolio.classList.add("portfolio");
            //portfolio.classList.remove("hidden");
            break;
        case '#certificates':
            certificates.classList.remove("hidden");
            break;
        case '#contact':
            contact.classList.remove("hidden");
            break;
        default:
    }
}

/////////////////

/// LANGUAGE SWITCH FUNCTIONS ///

function switchToSpanish() {
    language = "spanish";
    emptyCurriculum();
    emptyProjects();
    emptyCertificates();
    emptyContactForm();
    populateCurriculum();
    populateProjects();
    populateCertificates();
    populateContactForm();
}

function switchToEnglish() {
    language = "english";
    emptyCurriculum();
    emptyProjects();
    emptyCertificates();
    emptyContactForm();
    populateCurriculum();
    populateProjects();
    populateCertificates();
    populateContactForm();    
}

/// INITATE CODE ///

populateCurriculum();
populateProjects();
populateCertificates();
populateContactForm();

window.addEventListener('load', handleRoute);
window.addEventListener('hashchange', handleRoute);