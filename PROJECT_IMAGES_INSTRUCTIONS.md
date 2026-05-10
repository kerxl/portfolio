# Инструкция по загрузке изображений для проектов (Project)

## Текущее состояние
Сейчас проекты используют временные изображения из папки `public/assets/project/`:
- Проект 1: `project1.jpg`
- Проект 2: `project2.jpg`

## Куда загружать изображения

### 📁 Путь к папке:
```
public/assets/project/
```

## Требования к изображениям

1. **Формат:** JPG или PNG (рекомендуется)
2. **Размер:** Минимум 800x600 пикселей (оптимально 1200x800 или выше)
3. **Аспект:** 3:2 или 4:3 (горизонтальные)
4. **Качество:** Среднее-высокое (для баланса между качеством и размером)
5. **Название файла:** Должно соответствовать проекту (например: `data-aggregation.jpg`, `telegram-mayak.jpg`)

## Список проектов и изображений

Вам понадобятся изображения для следующих проектов:

### 1. Protected Data Aggregation System
- **Название файла:** `data-aggregation.jpg` или `protected-data.jpg`
- **Описание:** Система агрегации защищенных данных для GovTech/Astra Linux
- **Технологии:** Flask, SQLAlchemy, PostgreSQL, RabbitMQ, Alembic, pytest, Linux, Docker
- **Идеи для изображения:**
  - Абстрактное изображение данных/серверов
  - Схема архитектуры системы
  - Изображение защищенной системы/блокчейна
  - Графики/диаграммы мониторинга

### 2. Courses Telegram Mini App
- **Название файла:** `telegram-mayak.jpg` или `courses-app.jpg`
- **Описание:** Образовательное приложение в Telegram с видео курсами
- **Технологии:** FastAPI, Supabase, PostgreSQL, AsyncIO
- **Идеи для изображения:**
  - Скриншот интерфейса Telegram Mini App
  - Мокап приложения на телефоне
  - Изображение с логотипом Telegram и элементами обучения
  - Скриншот админ-панели или каталога курсов

## Где найти изображения

### Рекомендуемые источники:
1. **[Unsplash](https://unsplash.com/)** - Бесплатные высококачественные фото
   - Поиск по тегам: "data", "server", "mobile app", "education", "telegram"
2. **[Pexels](https://www.pexels.com/)** - Бесплатные стоковые фото
   - Поиск по тегам: "technology", "coding", "app development"
3. **[Pixabay](https://pixabay.com/)** - Бесплатные изображения и векторы
4. **Создание собственного изображения:**
   - Figma (для создания мокапов интерфейсов)
   - Canva (для создания композитных изображений)
   - Скриншоты реальных приложений

## Как обновить код после загрузки изображений

### Шаг 1: Загрузите изображения
Скопируйте изображения в папку `public/assets/project/`

### Шаг 2: Обновите файл `src/data.js`

Замените импорты:
```javascript
import ProjectImage1 from "/assets/project/project1.png";
import ProjectImage2 from "/assets/project/project2.png";
```

На:
```javascript
import DataAggregationImage from "/assets/project/data-aggregation.jpg";
import TelegramMayakImage from "/assets/project/telegram-mayak.jpg";
```

### Шаг 3: Обновите массив `listProyek`

Замените:
```javascript
{
  id: 1,
  image: ProjectImage1,
  // ...
}
```

На:
```javascript
{
  id: 1,
  image: DataAggregationImage,
  // ...
}
```

## Пример готового кода

```javascript
import DataAggregationImage from "/assets/project/data-aggregation.jpg";
import TelegramMayakImage from "/assets/project/telegram-mayak.jpg";

export const listProyek = [
  {
    id: 1,
    image: DataAggregationImage,
    title: "Protected Data Aggregation System",
    subtitle: "Service for monitoring, sharing, managing protected data",
    fullDescription:"A secure data aggregation system developed for GovTech/Astra Linux environment with hybrid architecture (Monolith + Microservices). Implemented Event Sourcing architecture, reducing component bindings and enabling horizontal scaling. Created an Integration Layer connecting 7 internal systems, solving interface mismatch issues. Implemented Event Sourcing Snapshotting, reducing system recovery time by 3x. Developed internal backend boilerplate standardizing service architecture and unified report generation library, cutting development time from 2 days to 2 hours.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/kerxl",
    dad: "100",
  },
  {
    id: 2,
    image: TelegramMayakImage,
    title: "Courses Telegram Mini App",
    subtitle: "Platform for educational courses inside Telegram ecosystem",
    fullDescription:"An educational Telegram Mini App 'Mayak' with video courses and admin panel. Built the application from scratch including API design, business logic, and database schema using Supabase (PostgreSQL). Optimized DB performance for ~1000 concurrent users using indexing and caching strategies. Integrated GetCourse payment system, adapting API to specific application requirements. Demonstrated expertise in modern async Python development and integration with external services.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/kerxl",
    dad: "200",
  },
];
```

## Примечания

- Пока вы не загрузите изображения, будут отображаться временные изображения
- Сайт продолжит работать корректно с временными изображениями
- После загрузки и обновления кода сайт автоматически перезагрузит изображения (Hot Module Replacement)
- Вы можете добавить больше проектов в будущем, просто добавив их в массив `listProyek`

## Быстрая проверка

После обновления проверьте сайт на `http://localhost:5173/portfolio/` - изображения должны отобразиться в секции "Project"

## Дополнительные советы

1. **Оптимизация изображений:**
   - Используйте сервисы вроде [TinyPNG](https://tinypng.com/) для сжатия без потери качества
   - Это улучшит скорость загрузки сайта

2. **Создание скриншотов:**
   - Если у вас есть доступ к реальным приложениям, сделайте скриншоты
   - Используйте встроенные в Telegram инструменты для скриншотов Mini Apps

3. **Альтернативные названия файлов:**
   - Вы можете использовать любые названия файлов, главное - обновите импорты в коде
   - Рекомендуется использовать понятные имена для удобства

## Добавление новых проектов

Чтобы добавить новый проект в будущем:

1. Загрузите изображение в `public/assets/project/`
2. Добавьте импорт в начало файла `src/data.js`
3. Добавьте новый объект в массив `listProyek` с уникальным `id`
4. Сайт автоматически отобразит новый проект