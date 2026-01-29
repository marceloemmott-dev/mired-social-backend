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
6. [Guía de Replicación (Setup)](#-guía-de-replicación-setup)

---

## 🚀 Visión y Alcance

Nuestro objetivo no es solo otra app social, sino un ecosistema completo y escalable.
- **Multi-Plataforma:** El backend está diseñado agnóstico al cliente, listo para alimentar:
  - 🖥️ **Frontend Web:** Una experiencia inmersiva y rica en escritorio.
  - 📱 **App Móvil:** Una aplicación nativa rápida y fluida.
- **Escalabilidad Cloud:** Infraestructura 100% en la nube para crecer sin límites.
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

## 🏗️ Tech Stack

Hemos seleccionado las mejores tecnologías modernas para cada capa de la aplicación:

### 🧠 Core & Lógica
*   **NestJS**: Framework progresivo de Node.js, elegido por su arquitectura modular.
*   **TypeORM**: Para una gestión de datos elegante y tipada.

### 💾 Datos & Almacenamiento
*   **Neon (PostgreSQL Serverless)**: Base de datos principal. Nos permite escalar a cero y manejar picos de tráfico.
*   **AWS S3 (Planned)**: Almacenamiento de objetos robusto para gestionar multimedia.

### 🛡️ Seguridad
*   **JWT & Passport**: Estándar de la industria para autenticación.

---

## 📅 Progreso y Bitácora

### ✅ FASE 1: Inicialización e Infraestructura (COMPLETADO)
*Enero 2026*

Hemos establecido los cimientos inmutables del proyecto.
- **Core Framework**: Inicialización del proyecto con NestJS.
- **Base de Datos Cloud**: Aprovisionamiento de base de datos PostgreSQL en **Neon Tech**.
- **Gestión de Configuración**: Implementación de `@nestjs/config`.
- **Validación**: Conexión exitosa verificada.

---

## 🔮 Roadmap (Próximos Pasos)

### 🔜 FASE 2: Identidad y Acceso (En Progreso)
- [x] Diseño de la Entidad `User`.
- [x] Sistema de Registro (Sign Up) con Hash de Contraseña.
- [ ] Inicio de Sesión (Login) y JWT.

### 🗓️ FASE 3: Media & AWS
- Integración con AWS SDK.
- Servicio de subida de avatares.

---

## 🛠️ Guía de Replicación (Setup)

Si deseas levantar este proyecto en tu máquina local, sigue estos pasos:

### 1. Clonar y Preparar
```bash
git clone https://github.com/marceloemmott-dev/mired-social-backend.git
cd mired-social-backend
npm install
```

### 2. Configurar Base de Datos (Neon)
Este proyecto requiere una base de datos PostgreSQL. Recomendamos usar **Neon** por su facilidad y capa gratuita.

1.  Ve a [neon.tech](https://neon.tech) y regístrate.
2.  Crea un nuevo proyecto.
3.  En el Dashboard, copia la **Connection String** (asegúrate de que tenga `sslmode=require`).

### 3. Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto (basado en el `.env.example` incluido):

```bash
cp .env.example .env
```

Abre el `.env` y pega tu conexión de Neon:
```ini
DATABASE_URL="postgresql://tu_usuario:password@ep-cool.aws.neon.tech/neondb?sslmode=require"
```

### 4. Ejecutar
```bash
npm run start:dev
```
¡Listo! El backend estará corriendo en `http://localhost:3000`.

---
**Creado por Marcelo** 🚀
*"Programando el futuro, hoy."*
