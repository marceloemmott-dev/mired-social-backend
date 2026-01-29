# 🌐 Mired Social - Backend

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Neon](https://img.shields.io/badge/Neon-00E599?style=for-the-badge&logo=neon&logoColor=black)
![AWS](https://img.shields.io/badge/AWS_S3-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0C05?style=for-the-badge&logo=typeorm&logoColor=white)

> **Mired Social** es una iniciativa ambiciosa para construir una plataforma social de última generación. Este repositorio aloja el **Backend Core**, diseñado para servir como cerebro centralizado tanto para aplicaciones Web como Móviles.

---

## 📑 Tabla de Contenidos

1. [Visión y Alcance](#-visión-y-alcance)
2. [Arquitectura del Sistema](#-arquitectura-del-sistema)
3. [Tech Stack](#-tech-stack-las-herramientas-del-poder)
4. [Bitácora de Progreso](#-progreso-y-bitácora)
5. [Roadmap](#-roadmap-próximos-pasos)
6. [Instalación](#-instalación-y-ejecución)

---

## 🚀 Visión y Alcance

Nuestro objetivo no es solo otra app social, sino un ecosistema completo y escalable.
- **Multi-Plataforma:** El backend está diseñado agnóstico al cliente, listo para alimentar clientes Web y Móviles.
- **Escalabilidad Cloud:** Infraestructura 100% en la nube.
- **Experiencia Premium:** Enfoque en performance y diseño visual.

---

## 📐 Arquitectura del Sistema

El siguiente diagrama ilustra el flujo de datos y la integración de servicios en la nube:

```mermaid
graph TD
    %% Clientes
    ClientWeb[🖥️ Web Frontend]
    ClientMobile[📱 Mobile App]

    %% Backend
    subgraph Cloud["☁️ Infraestructura Cloud"]
        API[🚀 NestJS API Gateway]
        
        %% Servicios Externos
        DB[(🐘 Neon PostgreSQL)]
        Storage[📦 AWS S3 Media]
    end

    %% Conexiones
    ClientWeb <-->|REST / Socket.io| API
    ClientMobile <-->|REST / Socket.io| API
    
    API <-->|TypeORM SSL| DB
    API <-->|AWS SDK| Storage

    %% Estilos
    style API fill:#E0234E,stroke:#333,stroke-width:2px,color:white
    style DB fill:#00E599,stroke:#333,stroke-width:2px,color:black
    style Storage fill:#232F3E,stroke:#333,stroke-width:2px,color:white
```

---

## 🏗️ Tech Stack (Las Herramientas del Poder)

Hemos seleccionado las mejores tecnologías modernas para cada capa de la aplicación:

### 🧠 Core & Lógica
*   **NestJS**: Framework progresivo de Node.js, elegido por su arquitectura modular.
*   **TypeORM**: Para una gestión de datos elegante y tipada.

### 💾 Datos & Almacenamiento
*   **Neon (PostgreSQL Serverless)**: Base de datos principal auto-escalable.
*   **AWS S3 (Planned)**: Almacenamiento de fotos, videos y assets.

### 🛡️ Seguridad
*   **JWT & Passport**: Autenticación segura sin estado (Stateless).

---

## 📅 Progreso y Bitácora

### ✅ FASE 1: Inicialización e Infraestructura (COMPLETADO)
*Enero 2026*

Hemos establecido los cimientos inmutables del proyecto.
- **Core Framework**: Inicialización con NestJS.
- **Base de Datos Cloud**: Aprovisionamiento en **Neon Tech**.
- **Configuración**: Manejo seguro de variables (`.env`) y conexión SSL.

---

## 🔮 Roadmap (Próximos Pasos)

### 🔜 FASE 2: Identidad y Acceso (En Progreso)
- Diseño de la Entidad `User`.
- Sistema de Registro e Inicio de Sesión seguro.

### 🗓️ FASE 3: Media & AWS
- Integración con AWS SDK.
- Servicio de subida de avatares y fotos.

### 🗓️ FASE 4: Core Social
- Feed, Comentarios, Likes y Seguidores.

---

## 🛠️ Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar Entorno (.env):**
   ```ini
   DATABASE_URL="postgresql://user:pass@endpoint.neon.tech/neondb?sslmode=require"
   PORT=3000
   ```

3. **Ejecutar en Desarrollo:**
   ```bash
   npm run start:dev
   ```

---
**Creado por Marcelo** 🚀
*"Programando el futuro, hoy."*
