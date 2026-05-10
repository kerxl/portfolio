from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

# Создание PDF документа
doc = SimpleDocTemplate("public/assets/new_cv.pdf", pagesize=A4,
                        rightMargin=72, leftMargin=72,
                        topMargin=72, bottomMargin=18)

# Стили
styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=24,
    textColor=colors.HexColor('#6366f1'),
    spaceAfter=12,
    spaceBefore=12
)

name_style = ParagraphStyle(
    'Name',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=28,
    textColor=colors.black,
    spaceAfter=6,
    spaceBefore=6
)

role_style = ParagraphStyle(
    'Role',
    parent=styles['Heading2'],
    fontName='Helvetica',
    fontSize=16,
    textColor=colors.HexColor('#6b7280'),
    spaceAfter=12
)

section_style = ParagraphStyle(
    'Section',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=14,
    textColor=colors.HexColor('#6366f1'),
    spaceAfter=8,
    spaceBefore=12,
    textTransform='uppercase'
)

normal_style = ParagraphStyle(
    'Normal',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10,
    textColor=colors.HexColor('#374151'),
    spaceAfter=6
)

bullet_style = ParagraphStyle(
    'Bullet',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10,
    textColor=colors.HexColor('#374151'),
    spaceAfter=4,
    leftIndent=20
)

company_style = ParagraphStyle(
    'Company',
    parent=styles['Heading3'],
    fontName='Helvetica-Bold',
    fontSize=12,
    textColor=colors.black,
    spaceAfter=2
)

period_style = ParagraphStyle(
    'Period',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10,
    textColor=colors.HexColor('#6b7280'),
    spaceAfter=6,
    alignment=TA_RIGHT
)

# Контент
content = []

# Заголовок и контактная информация
content.append(Paragraph("KIRILL DOLGORUCHENKO", name_style))
content.append(Paragraph("Backend Python Engineer", role_style))

# Контактная информация
contact_data = [
    ["Email: knxtex@gmail.com", "Telegram: @kerxl"],
    ["Phone: +7-(999)-555-57-98", "GitHub: github.com/kerxl"],
    ["LinkedIn: linkedin/kerxl", "Portfolio: https://kerxl.github.io/resume/"]
]
contact_table = Table(contact_data, colWidths=[3*inch, 3*inch])
contact_table.setStyle(TableStyle([
    ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#6b7280')),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
]))
content.append(Spacer(1, 12))
content.append(contact_table)
content.append(Spacer(1, 24))

# Профессиональное резюме
content.append(Paragraph("Professional Summary", section_style))
summary = """Backend engineer focused on reliability, detail, scalability and integrability. I optimize bottlenecks in architecture. My approach to work combines technical depth with pragmatism: I deliver working solutions on time, while systematically reducing the technical debt. I understand and accept responsibility in the full development cycle and implement engineering standards that prevent degradation of architecture. I develop my skills, abilities and knowledge in a concerted way."""
content.append(Paragraph(summary, normal_style))
content.append(Spacer(1, 24))

# Tech Stack
content.append(Paragraph("Tech Stack", section_style))

tech_data = [
    ["Languages", "Python, C, Bash"],
    ["Backend", "Flask, FastAPI, SQLAlchemy, Alembic, pytest"],
    ["Data", "PostgreSQL, RabbitMQ"],
    ["DevOps", "Docker, Git, Linux"]
]
tech_table = Table(tech_data, colWidths=[2*inch, 4*inch])
tech_table.setStyle(TableStyle([
    ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
    ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
    ('FONTSIZE', (0, 0), (-1, -1), 10),
    ('TEXTCOLOR', (0, 0), (-1, -1), colors.HexColor('#374151')),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ('BACKGROUND', (0, 0), (0, -1), colors.HexColor('#f3f4f6')),
]))
content.append(tech_table)
content.append(Spacer(1, 24))

# Work Experience
content.append(Paragraph("Work Experience", section_style))

# K-Technologies
content.append(Paragraph("Backend Developer", company_style))
content.append(Paragraph("K-Technologies", normal_style))
content.append(Paragraph("Aug 2022 — Present", period_style))
content.append(Spacer(1, 6))

content.append(Paragraph("<b>Responsibilities:</b>", normal_style))
content.append(Paragraph("• Development of a secure data aggregation system (GovTech/Astra Linux) with hybrid architecture (Monolith + Microservices).", bullet_style))
content.append(Paragraph("• Collaborating with the Team Lead on architectural decisions and mentoring junior developers.", bullet_style))
content.append(Paragraph("• Database optimization using SQLAlchemy and complex raw SQL for performance analysis.", bullet_style))
content.append(Spacer(1, 6))

content.append(Paragraph("<b>Key Achievements:</b>", normal_style))
content.append(Paragraph("• Reworked from the CRUD model to the Event Sourcing architecture, which reduced component bindings, increased system throughput, and provided easier horizontal scaling through an event-driven approach to data storage and processing.", bullet_style))
content.append(Paragraph("• Designed an Integration Layer connecting 7 internal systems, solving interface mismatch issues and ensuring data delivery integrity.", bullet_style))
content.append(Paragraph("• Implemented Event Sourcing Snapshotting, reducing system recovery time by 3x (preventing potential day-long downtime).", bullet_style))
content.append(Paragraph("• Developed and supported an internal backend boilerplate, which standardizes the service architecture and provides reusable modules for development teams, which increased consistency solutions and lowered the cost of launching new services.", bullet_style))
content.append(Paragraph("• Developed a unified report generation library, cutting development time for new exports from 2 days to 2 hours.", bullet_style))
content.append(Paragraph("• Conducting regular code reviews (5-7 per week), maintaining code quality and documentation standards.", bullet_style))
content.append(Spacer(1, 24))

# CommunityLab
content.append(Paragraph("Backend Developer", company_style))
content.append(Paragraph("CommunityLab (Contract)", normal_style))
content.append(Paragraph("Sep 2025 — Nov 2025", period_style))
content.append(Spacer(1, 6))

content.append(Paragraph("<b>Responsibilities:</b>", normal_style))
content.append(Paragraph("• Backend development for 'Mayak' — an educational Telegram Mini App with video courses and admin panel.", bullet_style))
content.append(Paragraph("• Database architecture design using Supabase (PostgreSQL) and async task management.", bullet_style))
content.append(Spacer(1, 6))

content.append(Paragraph("<b>Key Achievements:</b>", normal_style))
content.append(Paragraph("• Built the application from scratch: API design, business logic, and database schema.", bullet_style))
content.append(Paragraph("• Optimized DB performance for ~1000 concurrent users using indexing and caching strategies.", bullet_style))
content.append(Paragraph("• Integrated GetCourse payment system, adapting API to specific application requirements.", bullet_style))
content.append(Spacer(1, 24))

# Featured Projects
content.append(Paragraph("Featured Projects", section_style))

# Project 1
content.append(Paragraph("<b>Protected Data Aggregation System</b>", normal_style))
content.append(Paragraph("Service for monitoring, sharing, managing protected data.", bullet_style))
content.append(Spacer(1, 12))

# Project 2
content.append(Paragraph("<b>Courses Telegram Mini App</b>", normal_style))
content.append(Paragraph("Platform for educational courses inside Telegram ecosystem.", bullet_style))
content.append(Spacer(1, 12))

# Генерация PDF
doc.build(content)

print("✅ new_cv.pdf успешно создан в public/assets/")