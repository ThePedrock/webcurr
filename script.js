/// NEEDED VARIABLES ///

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
    }]
}

/// POPULATE HTML FUNCTIONS ///

function populateHeaders() {
    const workExperience = document.querySelector('#id_we_title');
    const education = document.querySelector('#id_ed_title');
    const languages = document.querySelector('#id_ln_title');
    const contact = document.querySelector('#id_contactTitle');
    const skills = document.querySelector('#id_sillTitle');
    const Headers = curriculumHeaders[language];

    const contactTitle = document.createElement('h3');
    const skillsTitle = document.createElement('h3');

    workExperience.textContent = Headers.workExperience.toUpperCase();
    education.textContent = Headers.education.toUpperCase();
    languages.textContent = Headers.languages.toUpperCase();
    contactTitle.textContent = Headers.contact;
    skillsTitle.textContent = Headers.skills;

    contact.appendChild(contactTitle);
    skills.appendChild(skillsTitle);
}

function populatePerson() {
    const personName = document.querySelector('#id_name');
    const personTitle = document.querySelector('#id_title');
    const personArray = dataJSON.person[language];

    const name = document.createElement('h1');
    const title = document.createElement('h2');

    name.textContent = personArray.name.first + " " + personArray.name.middle + " " + personArray.name.last;
    title.textContent = personArray.title;

    personName.appendChild(name);
    personTitle.appendChild(title);
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

function emptyPerson() {
    const personName = document.querySelector('#id_name');
    const personTitle = document.querySelector('#id_title');
    personName.innerHTML = '';
    personTitle.innerHTML = '';
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

function emptyDescription() {
    const description = document.querySelector('#id_description');
    description.innerHTML = '';
}

function populateCurriculum() {
    populateHeaders();
    populatePerson();
    populateDescription();
    populateSkillList();
    populateWorkExperience();
    populateEducation();
    populateLanguage();    
}

function emptyCurriculum() {
    emptyHeaders();
    emptyPerson();
    emptyDescription();
    emptySkillList();
    emptyWorkExperience();
    emptyEducation();
    emptyLanguage();
}

/// LANGUAGE SWITCH FUNCTIONS ///

function switchToSpanish() {
    language = "spanish";
    emptyCurriculum();
    populateCurriculum();
}

function switchToEnglish() {
    language = "english";
    emptyCurriculum();
    populateCurriculum();    
}

/// INITATE CODE ///

populateCurriculum();