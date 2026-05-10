# Инструкция по загрузке иконок для навыков (Tools & Technologies)

## Текущее состояние
Сейчас все навыки используют временную иконку GitHub (`github.png`) как заглушку.

## Куда загружать иконки

### 📁 Путь к папке:
```
public/assets/tools/
```

## Требования к иконкам

1. **Формат:** PNG (рекомендуется) или SVG
2. **Размер:** 128x128 или 256x256 пикселей (оптимально для отображения)
3. **Прозрачный фон:** Для лучшего вида
4. **Название файла:** Должно соответствовать названию навыка (например: `python.png`, `flask.png`)

## Список нужных иконок

Вам понадобятся иконки для следующих технологий:

1. **Python** - `python.png`
2. **Flask** - `flask.png`
3. **FastAPI** - `fastapi.png`
4. **SQLAlchemy** - `sqlalchemy.png`
5. **Alembic** - `alembic.png`
6. **PostgreSQL** - `postgresql.png`
7. **RabbitMQ** - `rabbitmq.png`
8. **Docker** - `docker.png`
9. **Git** - `git.png`
10. **Linux** - `linux.png`
11. **pytest** - `pytest.png`
12. **C** - `c.png`
13. **Bash** - `bash.png`
14. **Supabase** - `supabase.png`

## Где найти иконки

### Рекомендуемые источники:
1. **[Simple Icons](https://simpleicons.org/)** - Бесплатные SVG иконки для популярных технологий
2. **[Devicon](https://devicon.dev/)** - Иконки для разработчиков
3. **[IconFinder](https://www.iconfinder.com/)** - Поиск иконок (есть бесплатные)
4. **[Flaticon](https://www.flaticon.com/)** - Бесплатные иконки с атрибуцией

### Конвертация в PNG:
Если скачали SVG, можно конвертировать в PNG через:
- Онлайн сервисы (например: [cloudconvert.com](https://cloudconvert.com/svg-to-png))
- Figma/Illustrator

## Как обновить код после загрузки иконок

### Шаг 1: Загрузите иконки
Скопируйте все иконки в папку `public/assets/tools/`

### Шаг 2: Обновите файл `src/data.js`

Замените строку:
```javascript
import ToolIcon from "/assets/tools/github.png";
```

На отдельные импорты для каждой иконки:
```javascript
import PythonIcon from "/assets/tools/python.png";
import FlaskIcon from "/assets/tools/flask.png";
import FastAPIIcon from "/assets/tools/fastapi.png";
import SQLAlchemyIcon from "/assets/tools/sqlalchemy.png";
import AlembicIcon from "/assets/tools/alembic.png";
import PostgreSQLIcon from "/assets/tools/postgresql.png";
import RabbitMQIcon from "/assets/tools/rabbitmq.png";
import DockerIcon from "/assets/tools/docker.png";
import GitIcon from "/assets/tools/git.png";
import LinuxIcon from "/assets/tools/linux.png";
import PytestIcon from "/assets/tools/pytest.png";
import CIcon from "/assets/tools/c.png";
import BashIcon from "/assets/tools/bash.png";
import SupabaseIcon from "/assets/tools/supabase.png";
```

### Шаг 3: Обновите массив `listTools`

Замените все `gambar: ToolIcon,` на соответствующие иконки:
```javascript
export const listTools = [
  {
    id: 1,
    gambar: PythonIcon,  // Замените на соответствующую иконку
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
  // ... и так далее для всех навыков
];
```

## Пример готового кода

```javascript
import PythonIcon from "/assets/tools/python.png";
import FlaskIcon from "/assets/tools/flask.png";
import FastAPIIcon from "/assets/tools/fastapi.png";
import SQLAlchemyIcon from "/assets/tools/sqlalchemy.png";
import AlembicIcon from "/assets/tools/alembic.png";
import PostgreSQLIcon from "/assets/tools/postgresql.png";
import RabbitMQIcon from "/assets/tools/rabbitmq.png";
import DockerIcon from "/assets/tools/docker.png";
import GitIcon from "/assets/tools/git.png";
import LinuxIcon from "/assets/tools/linux.png";
import PytestIcon from "/assets/tools/pytest.png";
import CIcon from "/assets/tools/c.png";
import BashIcon from "/assets/tools/bash.png";
import SupabaseIcon from "/assets/tools/supabase.png";

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
];
```

## Примечания

- Пока вы не загрузите иконки, будет отображаться временная иконка GitHub
- Сайт продолжит работать корректно с временными иконками
- После загрузки и обновления кода сайт автоматически перезагрузит иконки (Hot Module Replacement)

## Быстрая проверка

После обновления проверьте сайт на `http://localhost:5173/portfolio/` - иконки должны отобразиться в секции "Tools & Technologies"