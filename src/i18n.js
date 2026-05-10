const translations = {
  en: {
    // Hero section
    quote: "Code doesn't lie, unlike comments",
    greeting: "Hi I'm Kirill Dolgoruchenko",
    description: "Backend engineer focused on reliability, detail, scalability and integrability. I optimize bottlenecks in architecture and deliver working solutions on time, while systematically reducing technical debt.",
    downloadCV: "Download CV",
    exploreProjects: "Explore My Projects",
    
    // Profile Card
    title: "Backend Python Engineer",
    status: "Online",
    contactMe: "Contact Me",
    
    // About section
    aboutMe: "About Me",
    aboutDescription: "Backend engineer focused on reliability, detail, scalability and integrability. I optimize bottlenecks in architecture. My approach to work combines technical depth with pragmatism: I deliver working solutions on time, while systematically reducing the technical debt. I understand and accept responsibility in the full development cycle and implement engineering standards that prevent degradation of architecture.",
    yearsOfExperience: "Years of Experience",
    systemsIntegrated: "Systems Integrated",
    performanceBoost: "Performance Boost",
    tagline: "Technical depth with pragmatism.",
    
    // Tools section
    toolsTechnologies: "Tools & Technologies",
    professionalSkills: "My Professional Skills",
    
    // Projects section
    project: "Project",
    projectDescription: "Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.",
    
    // Contact section
    contactMe: "Contact Me",
    getInTouch: "Get in touch with me",
    fullName: "Full Name",
    inputName: "Input Name...",
    email: "Email",
    inputEmail: "Input Email...",
    message: "Message",
    inputMessage: "Message...",
    send: "Send",
    
    // Footer
    home: "Home",
    about: "About Me",
    project: "Project",
    portfolio: "Portfolio",
    
    // Form submit
    emailSubject: "Response from portfolio",
    
    // Project Modal
    responsibilities: "Responsibilities",
    keyAchievements: "Key Achievements",
    sourceCode: "Source Code",
    
    // Project 1 - Protected Data Aggregation System
    project1Company: "K-Technologies",
    project1Period: "Aug 2022 — Present",
    project1Resp1: "Development of a secure data aggregation system (GovTech/Astra Linux) with hybrid architecture (Monolith + Microservices)",
    project1Resp2: "Collaborating with the Team Lead on architectural decisions and mentoring junior developers",
    project1Resp3: "Database optimization using SQLAlchemy and complex raw SQL for performance analysis",
    project1Ach1: "Reworked from the CRUD model to the Event Sourcing architecture, which reduced component bindings, increased system throughput, and provided easier horizontal scaling through an event-driven approach to data storage and processing",
    project1Ach2: "Designed an Integration Layer connecting 7 internal systems, solving interface mismatch issues and ensuring data delivery integrity",
    project1Ach3: "Implemented Event Sourcing Snapshotting, reducing system recovery time by 3x (preventing potential day-long downtime)",
    project1Ach4: "Developed and supported an internal backend boilerplate, which standardizes the service architecture and provides reusable modules for development teams, which increased consistency solutions and lowered the cost of launching new services",
    project1Ach5: "Developed a unified report generation library, cutting development time for new exports from 2 days to 2 hours",
    project1Ach6: "Conducting regular code reviews (5-7 per week), maintaining code quality and documentation standards",
    
    // Project 2 - Integration Layer Service
    project2Company: "K-Technologies",
    project2Period: "Jan 2023 — May 2023",
    project2Resp1: "Designed Integration Layer architecture connecting heterogeneous systems",
    project2Resp2: "Implemented message queuing with RabbitMQ for asynchronous data transfer",
    project2Resp3: "Created data transformation pipeline for format conversion between systems",
    project2Ach1: "Successfully integrated 7 internal systems with different protocols and data formats",
    project2Ach2: "Reduced integration time for new systems from 2-3 weeks to 3-5 days",
    project2Ach3: "Achieved 99.9% data delivery integrity with exactly-once semantics",
    project2Ach4: "Implemented monitoring and alerting system reducing incident response time by 70%",
    
    // Project 3 - Courses Telegram Mini App
    project3Company: "CommunityLab (Contract)",
    project3Period: "Sep 2025 — Nov 2025",
    project3Resp1: "Backend development for 'Mayak' — an educational Telegram Mini App with video courses and admin panel",
    project3Resp2: "Database architecture design using Supabase (PostgreSQL) and async task management",
    project3Ach1: "Built the application from scratch: API design, business logic, and database schema",
    project3Ach2: "Optimized DB performance for ~1000 concurrent users using indexing and caching strategies",
    project3Ach3: "Integrated GetCourse payment system, adapting API to specific application requirements",
    
    // Project titles, subtitles and descriptions
    project1Title: "Protected Data Aggregation System",
    project1Subtitle: "Service for monitoring, sharing, managing protected data",
    project1FullDescription: "A secure data aggregation system developed for GovTech/Astra Linux environment with hybrid architecture (Monolith + Microservices). Implemented Event Sourcing architecture, reducing component bindings and enabling horizontal scaling. Created an Integration Layer connecting 7 internal systems, solving interface mismatch issues. Implemented Event Sourcing Snapshotting, reducing system recovery time by 3x. Developed internal backend boilerplate standardizing service architecture and unified report generation library, cutting development time from 2 days to 2 hours.",
    
    project2Title: "Integration Layer Service",
    project2Subtitle: "Middleware connecting 7 internal systems with unified API",
    project2FullDescription: "Designed and implemented an Integration Layer connecting 7 internal systems including legacy monoliths and modern microservices. Solved interface mismatch issues between systems with different data formats and protocols. Implemented message queuing and data transformation pipeline ensuring data delivery integrity with exactly-once semantics. Created monitoring and alerting system for integration failures. Reduced integration time for new systems from 2-3 weeks to 3-5 days.",
    
    project3Title: "Courses Telegram Mini App",
    project3Subtitle: "Platform for educational courses inside Telegram ecosystem",
    project3FullDescription: "An educational Telegram Mini App 'Mayak' with video courses and admin panel. Built the application from scratch including API design, business logic, and database schema using Supabase (PostgreSQL). Optimized DB performance for ~1000 concurrent users using indexing and caching strategies. Integrated GetCourse payment system, adapting API to specific application requirements. Demonstrated expertise in modern async Python development and integration with external services.",
  },
  
  ru: {
    // Hero section
    quote: "Код не лжет, в отличие от комментариев",
    greeting: "Привет, я Кирилл Долгорученко",
    description: "Backend-разработчик, ориентированный на надежность, детали, масштабируемость и интегрируемость. Я оптимизирую узкие места в архитектуре и предоставляю работающие решения вовремя, систематически уменьшая технический долг.",
    downloadCV: "Скачать резюме",
    exploreProjects: "Посмотреть мои проекты",
    
    // Profile Card
    title: "Backend Python инженер",
    status: "Онлайн",
    contactMe: "Связаться",
    
    // About section
    aboutMe: "Обо мне",
    aboutDescription: "Backend-разработчик, ориентированный на надежность, детали, масштабируемость и интегрируемость. Я оптимизирую узкие места в архитектуре. Мой подход к работе сочетает техническую глубину с прагматизмом: я предоставляю работающие решения вовремя, систематически уменьшая технический долг. Я понимаю и принимаю ответственность за полный цикл разработки и внедряю инженерные стандарты, предотвращающие деградацию архитектуры.",
    yearsOfExperience: "Года опыта",
    systemsIntegrated: "Интегрированных систем",
    performanceBoost: "Рост производительности",
    tagline: "Техническая глубина с прагматизмом.",
    
    // Tools section
    toolsTechnologies: "Инструменты и технологии",
    professionalSkills: "Мои профессиональные навыки",
    
    // Projects section
    project: "Проекты",
    projectDescription: "Демонстрация проектов, отражающих мои навыки, творчество и страсть к созданию значимых цифровых решений.",
    
    // Contact section
    contactMe: "Связаться со мной",
    getInTouch: "Свяжитесь со мной",
    fullName: "Полное имя",
    inputName: "Введите имя...",
    email: "Email",
    inputEmail: "Введите email...",
    message: "Сообщение",
    inputMessage: "Сообщение...",
    send: "Отправить",
    
    // Footer
    home: "Главная",
    about: "Обо мне",
    project: "Проекты",
    portfolio: "Портфолио",
    
    // Form submit
    emailSubject: "Отклик с портфолио",
    
    // Project Modal
    responsibilities: "Обязанности",
    keyAchievements: "Ключевые достижения",
    sourceCode: "Исходный код",
    
    // Project 1 - Protected Data Aggregation System
    project1Company: "K-Technologies",
    project1Period: "Авг 2022 — настоящее время",
    project1Resp1: "Разработка защищенной системы агрегации данных (GovTech/Astra Linux) с гибридной архитектурой (Монолит + Микросервисы)",
    project1Resp2: "Сотрудничество с Team Lead по архитектурным решениям и наставничество младших разработчиков",
    project1Resp3: "Оптимизация базы данных с использованием SQLAlchemy и сложного raw SQL для анализа производительности",
    project1Ach1: "Переработка из CRUD-модели в архитектуру Event Sourcing, что уменьшило связи компонентов, увеличило пропускную способность системы и обеспечило более легкое горизонтальное масштабирование через событийный подход к хранению и обработке данных",
    project1Ach2: "Разработка Integration Layer, соединяющего 7 внутренних систем, решающего проблемы несовпадения интерфейсов и обеспечивающего целостность доставки данных",
    project1Ach3: "Реализация Event Sourcing Snapshotting, сократившая время восстановления системы в 3 раза (предотвращая потенциальный простой на целый день)",
    project1Ach4: "Разработка и поддержка внутреннего backend boilerplate, стандартизирующего архитектуру сервиса и предоставляющего повторно используемые модули для команд разработки, что повысило согласованность решений и снизило стоимость запуска новых сервисов",
    project1Ach5: "Разработка унифицированной библиотеки генерации отчетов, сократившей время разработки новых экспортов с 2 дней до 2 часов",
    project1Ach6: "Проведение регулярных code reviews (5-7 в неделю), поддержание стандартов качества кода и документации",
    
    // Project 2 - Integration Layer Service
    project2Company: "K-Technologies",
    project2Period: "Янв 2023 — Май 2023",
    project2Resp1: "Проектирование архитектуры Integration Layer, соединяющего гетерогенные системы",
    project2Resp2: "Реализация очереди сообщений с RabbitMQ для асинхронной передачи данных",
    project2Resp3: "Создание пайплайна преобразования данных для конвертации форматов между системами",
    project2Ach1: "Успешная интеграция 7 внутренних систем с разными протоколами и форматами данных",
    project2Ach2: "Сокращение времени интеграции новых систем с 2-3 недель до 3-5 дней",
    project2Ach3: "Достижение 99.9% целостности доставки данных с семантикой exactly-once",
    project2Ach4: "Реализация системы мониторинга и оповещений, сократившей время реагирования на инциденты на 70%",
    
    // Project 3 - Courses Telegram Mini App
    project3Company: "CommunityLab (Контракт)",
    project3Period: "Сен 2025 — Ноя 2025",
    project3Resp1: "Backend-разработка для 'Маяк' — образовательного Telegram Mini App с видео-курсами и админ-панелью",
    project3Resp2: "Проектирование архитектуры базы данных с использованием Supabase (PostgreSQL) и управление асинхронными задачами",
    project3Ach1: "Создание приложения с нуля: проектирование API, бизнес-логика и схема базы данных",
    project3Ach2: "Оптимизация производительности БД для ~1000 одновременных пользователей с использованием стратегий индексации и кэширования",
    project3Ach3: "Интеграция платежной системы GetCourse, адаптация API к специфическим требованиям приложения",
    
    // Project titles, subtitles and descriptions
    project1Title: "Система агрегации защищенных данных",
    project1Subtitle: "Сервис для мониторинга, обмена и управления защищенными данными",
    project1FullDescription: "Защищенная система агрегации данных, разработанная для GovTech/Astra Linux с гибридной архитектурой (Монолит + Микросервисы). Реализована архитектура Event Sourcing, уменьшающая связи компонентов и позволяющая горизонтальное масштабирование. Создан Integration Layer, соединяющий 7 внутренних систем, решающий проблемы несовпадения интерфейсов. Реализован Event Sourcing Snapshotting, сокративший время восстановления системы в 3 раза. Разработан внутренний backend boilerplate, стандартизирующий архитектуру сервиса, и унифицированная библиотека генерации отчетов, сократившая время разработки с 2 дней до 2 часов.",
    
    project2Title: "Сервис Integration Layer",
    project2Subtitle: "Промежуточное ПО, соединяющее 7 внутренних систем с единым API",
    project2FullDescription: "Разработан и реализован Integration Layer, соединяющий 7 внутренних систем, включая устаревшие монолиты и современные микросервисы. Решены проблемы несовпадения интерфейсов между системами с разными форматами данных и протоколами. Реализована очередь сообщений и пайплайн преобразования данных, обеспечивающий целостность доставки данных с семантикой exactly-once. Создана система мониторинга и оповещений для сбоев интеграции. Сокращено время интеграции новых систем с 2-3 недель до 3-5 дней.",
    
    project3Title: "Telegram Mini App для курсов",
    project3Subtitle: "Платформа для образовательных курсов внутри экосистемы Telegram",
    project3FullDescription: "Образовательный Telegram Mini App 'Маяк' с видеокурсами и админ-панелью. Приложение создано с нуля, включая проектирование API, бизнес-логику и схему базы данных с использованием Supabase (PostgreSQL). Оптимизирована производительность БД для ~1000 одновременных пользователей с использованием стратегий индексации и кэширования. Интегрирована платежная система GetCourse, API адаптирован к специфическим требованиям приложения. Демонстрирована экспертиза в современной асинхронной разработке на Python и интеграции с внешними сервисами.",
  }
};

export default translations;