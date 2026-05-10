
import AlembicIcon from "/assets/tools/alembic.png";
import BashIcon from "/assets/tools/bash.png";
import CIcon from "/assets/tools/c.png";
import DockerIcon from "/assets/tools/docker.png";
import FastAPIIcon from "/assets/tools/fastapi.png";
import FlaskIcon from "/assets/tools/flask.png";
import GitIcon from "/assets/tools/git.png";
import LinuxIcon from "/assets/tools/linux.png";
import PostgreSQLIcon from "/assets/tools/postgresql.png";
import PytestIcon from "/assets/tools/pytest.png";
import PythonIcon from "/assets/tools/python.png";
import RabbitMQIcon from "/assets/tools/rabbitmq.png";
import SQLAlchemyIcon from "/assets/tools/sqlalchemy.png";
import SupabaseIcon from "/assets/tools/supabase.png";
import AiohttpIcon from "/assets/tools/aiohttp.png";


export const listTools = [
  {
    id: 1,
    gambar: PythonIcon,
    nama: "Python",
    ket: "Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: FlaskIcon,
    nama: "Flask",
    ket: "Backend Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: FastAPIIcon,
    nama: "FastAPI",
    ket: "Backend Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: SQLAlchemyIcon,
    nama: "SQLAlchemy",
    ket: "ORM",
    dad: "400",
  },
  {
    id: 5,
    gambar: AlembicIcon,
    nama: "Alembic",
    ket: "Database Migration",
    dad: "500",
  },
  {
    id: 6,
    gambar: PostgreSQLIcon,
    nama: "PostgreSQL",
    ket: "Database",
    dad: "600",
  },
  {
    id: 7,
    gambar: RabbitMQIcon,
    nama: "RabbitMQ",
    ket: "Message Broker",
    dad: "700",
  },
  {
    id: 8,
    gambar: DockerIcon,
    nama: "Docker",
    ket: "Containerization",
    dad: "800",
  },
  {
    id: 9,
    gambar: GitIcon,
    nama: "Git",
    ket: "Version Control",
    dad: "900",
  },
  {
    id: 10,
    gambar: LinuxIcon,
    nama: "Linux",
    ket: "Operating System",
    dad: "1000",
  },
  {
    id: 11,
    gambar: PytestIcon,
    nama: "pytest",
    ket: "Testing",
    dad: "1100",
  },
  {
    id: 12,
    gambar: CIcon,
    nama: "C",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: BashIcon,
    nama: "Bash",
    ket: "Scripting",
    dad: "1300",
  },
  {
    id: 14,
    gambar: SupabaseIcon,
    nama: "Supabase",
    ket: "Backend as a Service",
    dad: "1400",
  },
  {
    id: 15,
    gambar: AiohttpIcon,
    nama: "aiohttp",
    ket: "Async HTTP Client/Server",
    dad: "1500",
  },
];

import ProjectImage1 from "/assets/project/project1.png";
import ProjectImage2 from "/assets/project/project3.png";
import ProjectImage3 from "/assets/project/project2.png";

export const listProjects = [
  {
    id: 1,
    image: ProjectImage1,
    title: "Protected Data Aggregation System",
    subtitle: "Service for monitoring, sharing, managing protected data",
    fullDescription:"A secure data aggregation system developed for GovTech/Astra Linux environment with hybrid architecture (Monolith + Microservices). Implemented Event Sourcing architecture, reducing component bindings and enabling horizontal scaling. Created an Integration Layer connecting 7 internal systems, solving interface mismatch issues. Implemented Event Sourcing Snapshotting, reducing system recovery time by 3x. Developed internal backend boilerplate standardizing service architecture and unified report generation library, cutting development time from 2 days to 2 hours.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/kerxl",
    dad: "100",
    company: "K-Technologies",
    period: "Aug 2022 — Present",
    responsibilities: [
      "Development of a secure data aggregation system (GovTech/Astra Linux) with hybrid architecture (Monolith + Microservices)",
      "Collaborating with the Team Lead on architectural decisions and mentoring junior developers",
      "Database optimization using SQLAlchemy and complex raw SQL for performance analysis"
    ],
    achievements: [
      "Reworked from the CRUD model to the Event Sourcing architecture, which reduced component bindings, increased system throughput, and provided easier horizontal scaling through an event-driven approach to data storage and processing",
      "Designed an Integration Layer connecting 7 internal systems, solving interface mismatch issues and ensuring data delivery integrity",
      "Implemented Event Sourcing Snapshotting, reducing system recovery time by 3x (preventing potential day-long downtime)",
      "Developed and supported an internal backend boilerplate, which standardizes the service architecture and provides reusable modules for development teams, which increased consistency solutions and lowered the cost of launching new services",
      "Developed a unified report generation library, cutting development time for new exports from 2 days to 2 hours",
      "Conducting regular code reviews (5-7 per week), maintaining code quality and documentation standards"
    ]
  },
  {
    id: 2,
    image: ProjectImage3,
    title: "Integration Layer Service",
    subtitle: "Middleware connecting 7 internal systems with unified API",
    fullDescription:"Designed and implemented an Integration Layer connecting 7 internal systems including legacy monoliths and modern microservices. Solved interface mismatch issues between systems with different data formats and protocols. Implemented message queuing and data transformation pipeline ensuring data delivery integrity with exactly-once semantics. Created monitoring and alerting system for integration failures. Reduced integration time for new systems from 2-3 weeks to 3-5 days.",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(180deg, #8B5CF6, #000)",
    url: "https://github.com/kerxl",
    dad: "200",
    company: "K-Technologies",
    period: "Jan 2023 — May 2023",
    responsibilities: [
      "Designed Integration Layer architecture connecting heterogeneous systems",
      "Implemented message queuing with RabbitMQ for asynchronous data transfer",
      "Created data transformation pipeline for format conversion between systems"
    ],
    achievements: [
      "Successfully integrated 7 internal systems with different protocols and data formats",
      "Reduced integration time for new systems from 2-3 weeks to 3-5 days",
      "Achieved 99.9% data delivery integrity with exactly-once semantics",
      "Implemented monitoring and alerting system reducing incident response time by 70%"
    ]
  },
  {
    id: 3,
    image: ProjectImage2,
    title: "Courses Telegram Mini App",
    subtitle: "Platform for educational courses inside Telegram ecosystem",
    fullDescription:"An educational Telegram Mini App 'Mayak' with video courses and admin panel. Built the application from scratch including API design, business logic, and database schema using Supabase (PostgreSQL). Optimized DB performance for ~1000 concurrent users using indexing and caching strategies. Integrated GetCourse payment system, adapting API to specific application requirements. Demonstrated expertise in modern async Python development and integration with external services.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/kerxl",
    dad: "300",
    company: "CommunityLab (Contract)",
    period: "Sep 2025 — Nov 2025",
    responsibilities: [
      "Backend development for 'Mayak' — an educational Telegram Mini App with video courses and admin panel",
      "Database architecture design using Supabase (PostgreSQL) and async task management"
    ],
    achievements: [
      "Built the application from scratch: API design, business logic, and database schema",
      "Optimized DB performance for ~1000 concurrent users using indexing and caching strategies",
      "Integrated GetCourse payment system, adapting API to specific application requirements"
    ]
  },
];