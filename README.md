# SURAKSHA — Parametric Income Protection for Gig Delivery Workers

<div align="center">

![SURAKSHA Banner](https://img.shields.io/badge/SURAKSHA-Income%20Protection%20System-blueviolet?style=for-the-badge&logo=shield&logoColor=white)

**Protecting India's Gig Workforce — One Trigger at a Time**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-blue)](https://github.com/)
[![Status](https://img.shields.io/badge/Status-Hackathon%20Demo-orange)](https://github.com/)
[![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4%20for%20Gig%20Workers-red)](https://github.com/)

</div>

---

## 📌 Project Title

**SURAKSHA** — Automated Parametric Income Protection Platform for Gig Delivery Workers

---

## 💡 Project Tagline

> *"When the storm stops your earnings, SURAKSHA starts your payout — automatically, instantly, without a single form."*

---

## 📋 Table of Contents

1. [Abstract](#-abstract)
2. [Problem Statement](#-problem-statement)
3. [Proposed Solution](#-proposed-solution)
4. [Project Objectives](#-project-objectives)
5. [Key Features](#-key-features)
6. [Target Users](#-target-users)
7. [Use Case Scenarios](#-use-case-scenarios)
8. [System Workflow](#-system-workflow)
9. [Architecture Overview](#-architecture-overview)
10. [Parametric Trigger Conditions](#-parametric-trigger-conditions-table)
11. [AI Integration](#-ai-integration-in-the-system)
12. [API Integrations](#-api-integrations)
13. [Technology Stack](#-technology-stack)
14. [Application Modules](#-application-modules)
15. [Fraud Detection Approach](#-fraud-detection-approach)
16. [Data Flow Explanation](#-data-flow-explanation)
17. [Example Scenario](#-example-scenario)
18. [Advantages of the Solution](#-advantages-of-the-solution)
19. [Future Enhancements](#-future-enhancements)
20. [Impact on Gig Economy](#-impact-on-gig-economy)
21. [Deployment Plan](#-deployment-plan)
22. [Screenshots](#-screenshots-placeholder)
23. [Project Folder Structure](#-project-folder-structure)
24. [Installation Instructions](#-installation-instructions)
25. [How to Run the Project](#-how-to-run-the-project)
26. [Contribution Guidelines](#-contribution-guidelines)
27. [Team Members](#-team-members)
28. [License](#-license)

---

## 📖 Abstract

India is home to over **15 million gig delivery workers** employed across platforms like Swiggy, Zomato, Zepto, Amazon Flex, Blinkit, Porter, and Dunzo. These workers earn between ₹600 and ₹1,500 per day and have no fixed salary, no employer benefits, and no safety net when external disruptions affect their ability to work.

**SURAKSHA** is a web and mobile application that solves this problem through **parametric insurance** — a modern, data-driven model where financial compensation is triggered automatically when real-world conditions cross predefined thresholds, without requiring the worker to file any claim.

When heavy rainfall exceeds a set level, when air quality turns hazardous, when extreme heat makes outdoor work dangerous, or when government restrictions halt movement in an area, the SURAKSHA system detects these events in real time using live API data and immediately initiates a direct payment to the affected worker's registered wallet.

The entire process — from event detection to payout confirmation — is designed to complete within **60 seconds**, with zero manual intervention.

---

## ❗ Problem Statement

India's gig delivery workforce faces a silent financial crisis that worsens every monsoon, every heatwave, and every sudden government shutdown.

### The Core Problem

Gig delivery workers are classified as independent contractors, not employees. This means:

- They have **no paid leave** when weather prevents them from working.
- They receive **no compensation** from platforms during natural disruptions.
- They are **ineligible** for most traditional insurance products due to irregular income.
- On a heavy rain day, a worker who normally earns ₹700 may earn **₹0 to ₹200**, while their daily expenses (rent, food, EMIs) remain unchanged.
- Workers riding in **AQI above 200** face long-term respiratory health damage with no compensation.
- Multi-platform workers who work across two or three apps simultaneously have **fragmented, inadequate coverage** from each.

### The Scale of the Problem

| Disruption Type | Frequency (Major Cities) | Avg. Income Loss per Worker |
|---|---|---|
| Heavy Rain / Monsoon | 40–60 days/year | ₹500 – ₹1,200/day |
| Extreme Heat (>42°C) | 20–30 days/year | ₹300 – ₹800/day |
| Hazardous AQI (>200) | 30–60 days/year | ₹200 – ₹600/day |
| Dense Fog (Visibility <200m) | 15–25 days/year | ₹400 – ₹900/day |
| Government Restrictions | Unpredictable | ₹600 – ₹1,500/day |
| Cyclone / Severe Storm | 5–10 days/year | ₹600 – ₹1,500/day |

### Why Existing Solutions Fall Short

- **Traditional Insurance** — Requires income proof, long claim cycles (2–4 weeks), manual document submission, and frequent rejections.
- **Platform Welfare Schemes** — Offer minimal accident cover only; no income protection.
- **Government Schemes** — Not designed for real-time, per-event income replacement.
- **No Parametric Product Exists** — As of today, no insurance product in India uses live environmental data to auto-trigger income compensation for gig workers.

---

## ✅ Proposed Solution

SURAKSHA introduces **parametric income protection** — a system where payouts are not based on damage assessments or claim approvals, but on **verifiable real-world data** reaching predefined thresholds.

### How It Works (Simple Summary)

```
Worker Registers → Links Bank / UPI → System Monitors Zone in Real Time
        ↓
Environmental Condition Crosses Threshold (e.g., Rainfall > 60mm)
        ↓
AI Engine Validates Data from Multiple Sources
        ↓
Payout Automatically Sent to Worker's Wallet → Worker Notified
        ↓
No Claim Form. No Approval. No Waiting.
```

### Key Differentiators

| Feature | Traditional Insurance | SURAKSHA |
|---|---|---|
| Claim Process | Manual, 2–4 weeks | Automatic, 60 seconds |
| Income Proof Required | Yes | No |
| Eligibility | Salaried employees | Gig workers, informal workers |
| Trigger Mechanism | Loss assessment | Real-time API data |
| Multi-platform Support | No | Yes — one policy, all platforms |
| Fraud Risk | High | Minimized by AI validation |
| Cost to Worker | ₹500–₹2,000/month | ₹29–₹149/week |

---

## 🎯 Project Objectives

1. **Eliminate manual claim filing** for income loss caused by environmental disruptions.
2. **Deliver compensation within 60 seconds** of a verified trigger event.
3. **Cover workers across multiple delivery platforms** under a single subscription.
4. **Use real-time data** from weather, pollution, and government APIs to determine payout eligibility objectively.
5. **Make parametric insurance accessible** to workers earning as little as ₹300/day.
6. **Build a scalable system** capable of handling millions of simultaneous payout events during city-wide disasters.
7. **Integrate AI** to detect fraud, calibrate thresholds, and provide 24/7 worker support in Hindi and English.
8. **Comply fully** with IRDAI insurance regulations, RBI payment guidelines, and the DPDP Act 2023.

---

## ✨ Key Features

### Core Features

- 🔄 **Automated Parametric Payouts** — No claim forms; payouts fire when data thresholds are crossed.
- 🌦️ **Real-Time Disruption Detection** — Live integration with weather, AQI, and government advisory APIs.
- 📍 **Zone-Level Precision** — Triggers operate at 5km × 5km delivery zone granularity, not city-wide averages.
- 🔗 **Multi-Platform Linking** — One SURAKSHA account covers Swiggy, Zomato, Zepto, Amazon Flex, Blinkit, Porter, Dunzo, and more.
- 💸 **Instant UPI / Wallet Disbursement** — Payouts land directly in the worker's UPI-linked account or partner wallet.
- 📱 **Mobile-First Design** — A lightweight app designed for low-end Android devices with poor connectivity.
- 🔔 **Push Notifications** — Workers are notified immediately when a trigger fires, including the exact event type and payout amount.

### Smart Features

- 🤖 **AI Fraud Detection** — Detects fake registrations, location spoofing, and coordinated abuse attempts.
- 📊 **Weekly Summary Dashboard** — Workers see payouts received, events triggered, and a 7-day weather risk forecast.
- 💬 **AI Chatbot Support** — Conversational support in Hindi and English using LLM + RAG architecture.
- 📈 **Dynamic Risk Pricing** — Weekly premiums adjust based on zone-level weather forecasts and historical loss data.
- 🔑 **DigiLocker eKYC** — One-time Aadhaar-based KYC; workers already verified on partner platforms skip this step entirely.
- 🏛️ **Regulatory Compliance** — IRDAI-compliant distribution structure, RBI-regulated payment wallet, DPDP Act 2023 data governance.

---

## 👥 Target Users

### Primary Users

| User Type | Description |
|---|---|
| **Gig Delivery Workers** | Riders and delivery partners on Swiggy, Zomato, Zepto, Amazon, Blinkit, Porter, Dunzo, and similar platforms |
| **Multi-Platform Workers** | Workers who are simultaneously active on two or more delivery platforms |
| **Tier-2 / Tier-3 City Workers** | Delivery agents in smaller cities where informal work is the primary livelihood |

### Secondary Users

| User Type | Description |
|---|---|
| **Delivery Platforms (B2B)** | Platforms that integrate SURAKSHA to offer protection to their partner base and reduce churn |
| **Insurance Partners** | IRDAI-registered insurers who underwrite the parametric product |
| **NGOs / Labour Unions** | Organizations advocating for gig worker welfare that distribute SURAKSHA subscriptions |

---

## 📌 Use Case Scenarios

### Scenario 1 — Monsoon Rain Disruption

> Ramesh is a Swiggy delivery partner in Hyderabad. On August 14th, rainfall in his zone reaches 72mm between 3 PM and 6 PM. SURAKSHA's weather API detects this at 3:22 PM. The AI engine confirms the data via two independent sources. By 3:23 PM, ₹350 has been credited to Ramesh's Swiggy wallet. Ramesh receives a push notification: *"SURAKSHA Payout: ₹350 — Heavy Rain Trigger, Banjara Hills Zone."* He hasn't filed a single form.

### Scenario 2 — Hazardous AQI Event

> Priya delivers for both Zomato and Blinkit in Delhi. On a November morning, the AQI in her delivery zone crosses 280 and remains above 200 for three consecutive hours. SURAKSHA's CPCB API integration detects this and fires a ₹250 payout to her UPI account at 11:47 AM, along with a safety advisory recommending she wear an N95 mask.

### Scenario 3 — Government Restriction

> In Chennai, a sudden Section 144 order is issued restricting movement in five zones. SURAKSHA pulls the advisory from the state government API and automatically credits ₹600 to all active workers registered in those zones. Workers who were online on at least one platform in the 2 hours before the restriction are eligible.

### Scenario 4 — Multi-Platform Worker Coverage

> Arjun works for three apps simultaneously. A heat wave pushes temperatures to 46°C in Pune. SURAKSHA detects this via the IMD API, validates it against two sources, and confirms Arjun was active on Swiggy and Zepto during the trigger window. He receives a single consolidated payout of ₹400 — not three separate partial payouts from three different systems. One SURAKSHA subscription, full protection across all platforms.

---

## ⚙️ System Workflow

```
┌─────────────────────────────────────────────────────────────────────┐
│                        SURAKSHA SYSTEM WORKFLOW                     │
└─────────────────────────────────────────────────────────────────────┘

STEP 1 — REGISTRATION
  Worker Downloads App
        ↓
  Links Delivery Platform Accounts (Swiggy, Zomato, etc.)
        ↓
  Completes Aadhaar eKYC via DigiLocker (skipped if already done)
        ↓
  Selects Weekly Plan (₹29 / ₹59 / ₹99 / ₹149)
        ↓
  Links UPI / Wallet for Payouts

STEP 2 — CONTINUOUS MONITORING (Every 15 Minutes)
  System Polls APIs:
    - OpenWeatherMap API → rainfall, wind, temperature, visibility
    - IMD Nowcast API    → official weather alerts, heat index
    - CPCB API           → real-time AQI by city zone
    - Government APIs    → restriction/curfew advisories

STEP 3 — TRIGGER EVALUATION
  AI Engine Checks:
    [A] Does the data value cross the threshold for the worker's plan?
    [B] Do at least 2 of 3 independent data sources agree?
    [C] Has the condition persisted for the required minimum duration?
    [D] Was the worker active on at least one linked platform during the window?
  
  → If all 4 checks pass: TRIGGER ACTIVATED
  → If any check fails: No payout; event logged for audit

STEP 4 — FRAUD DETECTION
  AI Anti-Fraud Layer Checks:
    - GPS location consistency for the worker
    - Unusual cluster of simultaneous trigger claims
    - Velocity anomalies (same device, multiple accounts)
    - Historical payout pattern analysis

STEP 5 — PAYOUT EXECUTION
  Payment Gateway Initiates Transfer:
    - Route 1: Direct UPI to worker's linked account
    - Route 2: Credit to Swiggy / Zomato / partner wallet
    - Route 3: Credit to SURAKSHA internal wallet (PPI-licensed)
  
  Target: Transfer confirmed within 60 seconds of trigger activation

STEP 6 — WORKER NOTIFICATION
  Push Notification Sent:
    - Trigger type (Rain / AQI / Heat / Fog / Storm / Restriction)
    - Zone name
    - Payout amount
    - Timestamp

STEP 7 — WEEKLY RECONCILIATION
  - Weekly premium auto-deducted every Monday
  - Weekly summary report sent to worker
  - Zone risk forecast for the upcoming 7 days
  - Actuarial system updates loss ratios and adjusts pricing if needed
```

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        SURAKSHA ARCHITECTURE                            │
├───────────────────┬─────────────────────────────────────────────────────┤
│  CLIENT LAYER     │  React Native Mobile App (Android / iOS)            │
│                   │  React.js Web Dashboard                             │
│                   │  Partner Platform SDK (B2B Integration)             │
├───────────────────┼─────────────────────────────────────────────────────┤
│  API GATEWAY      │  AWS API Gateway — Routes all client requests       │
│                   │  OAuth 2.0 Authentication (per worker, per platform)│
├───────────────────┼─────────────────────────────────────────────────────┤
│  BACKEND SERVICES │  Node.js / Express — Core API & business logic      │
│  (Microservices)  │  Python / FastAPI  — AI inference & ML pipeline     │
│                   │  Worker Service    — Registration, KYC, linking     │
│                   │  Trigger Service   — Zone monitoring & eval engine  │
│                   │  Payment Service   — UPI, wallet, reconciliation    │
│                   │  Notification Svc  — Push, SMS, WhatsApp            │
│                   │  Chatbot Service   — LLM + RAG for worker queries   │
├───────────────────┼─────────────────────────────────────────────────────┤
│  AI / ML LAYER    │  Trigger Evaluation Model (Random Forest)           │
│                   │  Fraud Detection Model (Isolation Forest + GPS)     │
│                   │  Dynamic Pricing Model (LSTM + Gradient Boosting)   │
│                   │  Threshold Calibration (LSTM per city zone)         │
│                   │  Chatbot (Claude API + LangChain + Pinecone RAG)    │
│                   │  Actuarial Model (Monte Carlo + XGBoost)            │
├───────────────────┼─────────────────────────────────────────────────────┤
│  DATA LAYER       │  PostgreSQL       — Transactional data              │
│                   │  Redis            — Real-time zone state cache      │
│                   │  Apache Kafka     — Event streaming pipeline        │
│                   │  Apache Spark     — Batch weather data processing   │
│                   │  Pinecone         — Vector DB for RAG chatbot       │
│                   │  AWS S3           — File storage, audit logs        │
├───────────────────┼─────────────────────────────────────────────────────┤
│  EXTERNAL APIs    │  OpenWeatherMap   — Weather data                    │
│                   │  IMD Nowcast      — Official India Met Dept         │
│                   │  CPCB API         — Real-time AQI data              │
│                   │  Weather.com API  — Additional weather validation   │
│                   │  Razorpay         — UPI payout processing           │
│                   │  DigiLocker API   — Aadhaar eKYC verification       │
│                   │  Platform APIs    — Swiggy, Zomato, etc. webhooks   │
├───────────────────┼─────────────────────────────────────────────────────┤
│  CLOUD INFRA      │  AWS EKS (Kubernetes) — Container orchestration     │
│                   │  AWS RDS (PostgreSQL)  — Managed database           │
│                   │  AWS Secrets Manager   — Credentials vault          │
│                   │  AWS CloudWatch        — Monitoring & alerting      │
│                   │  GitHub Actions        — CI/CD pipeline             │
│                   │  Grafana + Prometheus  — Observability              │
└───────────────────┴─────────────────────────────────────────────────────┘
```

---

## 📊 Parametric Trigger Conditions Table

The following table defines the exact conditions under which SURAKSHA automatically initiates a payout. Each trigger has a **data threshold**, a **minimum duration requirement**, a **data source**, and is **mapped to specific subscription plans**.

| Trigger Type | Condition | Duration Required | Data Sources | Plans Covered | Payout Range |
|---|---|---|---|---|---|
| **Heavy Rain** | Rainfall > 60 mm/hr | 30 min sustained | OpenWeatherMap + IMD Nowcast | All Plans | ₹100 – ₹500/day |
| **Air Pollution (AQI)** | AQI > 200 (Very Poor) | 2 consecutive hours | CPCB API + IQAir | Plus, Pro, Pro+ | ₹150 – ₹400/day |
| **Extreme Heat** | Feels-like temp > 45°C | 4 consecutive hours | IMD Heat Index + Weather.com | Pro, Pro+ | ₹200 – ₹350/day |
| **Dense Fog** | Visibility < 200 metres | 2 consecutive hours | Satellite visibility data + local APIs | Plus, Pro, Pro+ | ₹150 – ₹400/day |
| **High Wind / Storm** | Wind speed > 50 km/hr | 1 hour sustained | OpenWeatherMap + IMD advisory | All Plans | ₹100 – ₹450/day |
| **Thunderstorm** | IMD Severe Weather Warning issued | Active warning | IMD Nowcast official alert | All Plans | Maximum tier rate |
| **Cyclone Warning** | District-level cyclone advisory | Active warning | IMD Nowcast official alert | All Plans | Maximum tier + safety advisory |
| **Govt. Restriction** | Section 144 / Curfew / Shutdown advisory | Active order | State govt. advisory feed | Pro, Pro+ | ₹400 – ₹800/day |
| **Flash Flood** | IMD/NDMA flood warning for zone | Active warning | NDMA API + IMD | Pro, Pro+ | ₹300 – ₹600/day |

### Validation Rules (Applied to Every Trigger)

| Rule | Description |
|---|---|
| **Multi-Source Consensus** | At least 2 of 3 independent data sources must report the same condition before a payout fires |
| **Zone Precision** | Triggers operate at 5km × 5km delivery zone level, not city-wide averages |
| **Duration Threshold** | Conditions must meet the minimum duration requirement; brief spikes do not trigger payouts |
| **Active Worker Check** | The worker must have been online and active on at least one linked platform during the trigger window |
| **Anti-Stacking Rule** | Only one trigger type fires per 24-hour period per worker to prevent stacking |
| **Daily Maximum Cap** | Payout is capped at the weekly maximum ÷ 7 days to maintain actuarial stability |

---

## 🤖 AI Integration in the System

SURAKSHA uses AI and machine learning across seven distinct components, each solving a specific problem in the platform.

### 1. Trigger Evaluation Engine

- **Type:** Rule-based engine layered with a **Random Forest classifier**
- **Purpose:** Validates whether environmental data genuinely crosses thresholds across multiple data sources before executing a payout
- **Performance Target:** Decision and payout initiation within 60 seconds
- **Training Data:** 3 years of historical weather events + historical delivery volume data per city zone

### 2. City-Level Threshold Calibration

- **Type:** **LSTM (Long Short-Term Memory) time-series model**
- **Purpose:** Each Indian city has a different baseline for what constitutes a "disruption." 30mm/hr rain may disrupt Mumbai but is routine in Cherrapunji. LSTM calibrates thresholds per city zone based on historical weather and disruption patterns.
- **Recalibration Frequency:** Quarterly, automatically triggered by the pipeline

### 3. Multi-Platform Fraud Detection

- **Type:** **Isolation Forest + GPS trajectory anomaly detection**
- **Purpose:** Detects fake worker registrations, GPS spoofing (claiming to be in a disrupted zone while actually elsewhere), coordinated fraudulent claims, and multiple accounts on a single device
- **Target False Payout Rate:** Below 0.5%
- **How It Works:** Cross-references GPS history, platform activity logs, claim frequency patterns, and device fingerprints

### 4. Dynamic Premium Pricing

- **Type:** **LSTM + Gradient Boosting ensemble**
- **Purpose:** Forecasts zone-level environmental risk 7 days in advance. High-risk periods (cyclone forecasts, heatwave predictions) result in adjusted weekly premiums to maintain the fund's actuarial balance.
- **Output:** A weekly risk multiplier per city zone that adjusts plan pricing

### 5. Multi-Platform Partner Intelligence

- **Type:** Graph model built over linked platform accounts
- **Purpose:** When a worker is active on multiple platforms during a trigger event, the system builds a unified activity profile to correctly confirm eligibility and attribute the payout to the right account combination. Prevents double-counting and ensures no eligible worker is excluded.

### 6. AI Conversational Chatbot

- **Type:** **LLM (Claude API by Anthropic) + LangChain orchestration + Pinecone vector store (RAG)**
- **Purpose:** Answers worker queries in real time, 24 hours a day, in both **Hindi and English**
- **Example Queries It Handles:**
  - *"Why didn't I receive a payout yesterday even though it rained heavily?"*
  - *"How do I link my Zomato account to SURAKSHA?"*
  - *"What is my total payout this month?"*
  - *"Mujhe paise kab milenge?"* (Hindi: "When will I get paid?")
- **RAG Integration:** The chatbot retrieves accurate, up-to-date information from SURAKSHA's policy documents, zone event logs, and worker records before generating a response

### 7. Actuarial Risk Modelling

- **Type:** **Monte Carlo simulation + XGBoost regression**
- **Purpose:** Projects expected claim rates by city zone, platform, season, and subscription plan. The output drives quarterly pricing reviews, reinsurance structuring, and reserve fund requirements.
- **Run Frequency:** Monthly automated run; manual review quarterly

---

## 🔌 API Integrations

### 🌦️ Weather API

| Parameter | Details |
|---|---|
| **Primary Provider** | OpenWeatherMap API (Current Weather + One-Call API) |
| **Secondary Provider** | IMD Nowcast API (India Meteorological Department) |
| **Tertiary Validation** | Weather.com API |
| **Data Points Used** | Rainfall (mm/hr), wind speed (km/hr), temperature (°C), feels-like temperature, visibility (metres), storm warnings |
| **Poll Frequency** | Every 15 minutes per active delivery zone |
| **Zone Coverage** | 5km × 5km grid across all registered delivery cities |
| **Failover Logic** | If primary API is unavailable, secondary becomes primary; if 2 of 3 sources agree, trigger proceeds |

**Sample API Call (OpenWeatherMap):**
```
GET https://api.openweathermap.org/data/2.5/weather
    ?lat={zone_lat}
    &lon={zone_lon}
    &appid={API_KEY}
    &units=metric
```

**Sample Response Used:**
```json
{
  "weather": [{ "main": "Rain", "description": "heavy intensity rain" }],
  "main": { "temp": 24.5, "feels_like": 22.1 },
  "wind": { "speed": 14.2 },
  "visibility": 800,
  "rain": { "1h": 22.4 }
}
```

---

### 🌫️ Pollution API

| Parameter | Details |
|---|---|
| **Primary Provider** | CPCB (Central Pollution Control Board) Real-Time API |
| **Secondary Provider** | IQAir API |
| **Data Points Used** | AQI (overall), PM2.5 (μg/m³), PM10 (μg/m³), NO2, SO2 |
| **AQI Scale Used** | National AQI (India) — scale of 0 to 500 |
| **Trigger Threshold** | AQI > 200 sustained for 2+ consecutive hours |
| **Station Coverage** | CPCB monitoring stations across 200+ Indian cities |
| **Poll Frequency** | Every 15 minutes; CPCB data updates hourly |

**AQI Category Reference:**

| AQI Range | Category | SURAKSHA Action |
|---|---|---|
| 0 – 50 | Good | No action |
| 51 – 100 | Satisfactory | No action |
| 101 – 200 | Moderate | No action |
| **201 – 300** | **Poor** | **Trigger evaluation begins** |
| **301 – 400** | **Very Poor** | **Payout fires (Plus plan and above)** |
| **401 – 500** | **Severe** | **Maximum payout + health advisory** |

---

### 💳 Payment API

| Parameter | Details |
|---|---|
| **Primary Provider** | Razorpay Payment Gateway |
| **Transfer Method** | UPI AutoPay, IMPS, NEFT |
| **Payout Route 1** | Direct to worker's UPI ID (instant, 24/7) |
| **Payout Route 2** | Credit to Swiggy / Zomato / partner platform wallet via platform API |
| **Payout Route 3** | Credit to SURAKSHA internal PPI wallet (RBI-regulated, via NBFC partner) |
| **Disbursement Target** | Within 60 seconds of trigger confirmation |
| **Weekly Debit** | UPI AutoPay e-mandate (deducted every Monday) |
| **Compliance** | RBI recurring payment framework, UPI AutoPay guidelines |

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| **React Native** | Cross-platform mobile app for Android and iOS |
| **TypeScript** | Type-safe development across all frontend code |
| **Redux Toolkit** | Global state management (worker session, payout history) |
| **WebSocket** | Real-time push updates for trigger events and payouts |
| **React Navigation** | In-app navigation and deep linking |
| **i18n (react-i18next)** | Multi-language support — currently Hindi and English |
| **React.js** | Web-based dashboard for B2B platform partners |

### Backend

| Technology | Purpose |
|---|---|
| **Node.js + Express.js** | Primary REST API layer for all core business logic |
| **Python + FastAPI** | AI/ML inference API and data processing pipeline |
| **Apache Kafka** | Event-driven architecture for real-time trigger event streaming |
| **Apache Spark** | Batch processing of historical weather and delivery volume data |
| **OAuth 2.0** | Secure authentication for workers and B2B platform partners |
| **JWT (JSON Web Tokens)** | Stateless session tokens for mobile and web clients |

### Database

| Technology | Purpose |
|---|---|
| **PostgreSQL** | Primary transactional database — workers, payouts, subscriptions |
| **Redis** | In-memory caching — real-time zone state, active worker sessions |
| **Pinecone** | Vector database for chatbot RAG (document retrieval) |
| **AWS S3** | File storage — KYC documents, audit logs, API response snapshots |

### APIs

| API | Purpose |
|---|---|
| **OpenWeatherMap** | Primary weather data source |
| **IMD Nowcast** | Official Indian government weather and storm warnings |
| **CPCB API** | Real-time AQI data across India |
| **IQAir API** | Secondary AQI validation |
| **Weather.com API** | Tertiary weather validation |
| **Razorpay API** | Payment processing and UPI payouts |
| **DigiLocker API** | Aadhaar-based eKYC for worker registration |
| **Claude API (Anthropic)** | LLM for conversational chatbot |
| **Platform APIs** | Swiggy, Zomato, Zepto, Amazon Flex partner APIs |

### DevOps and Infrastructure

| Technology | Purpose |
|---|---|
| **AWS EKS (Kubernetes)** | Container orchestration and auto-scaling |
| **AWS RDS** | Managed PostgreSQL database |
| **AWS API Gateway** | Centralized API routing and rate limiting |
| **AWS Secrets Manager** | Secure credential and API key management |
| **GitHub Actions** | CI/CD pipeline for automated testing and deployment |
| **ArgoCD** | GitOps-based Kubernetes deployment |
| **Grafana + Prometheus** | Real-time system monitoring and alerting |
| **Sentry** | Error tracking and performance monitoring |
| **CloudWatch** | AWS-native logging and infrastructure alerting |

---

## 📦 Application Modules

| Module Name | Description |
|---|---|
| **Auth Module** | Worker registration, Aadhaar eKYC via DigiLocker, JWT-based session management |
| **Platform Linking Module** | OAuth-based linking of Swiggy, Zomato, Zepto, Amazon, and other delivery platform accounts |
| **Subscription Module** | Plan selection (Basic / Plus / Pro / Pro+), weekly UPI AutoPay debit management |
| **Zone Monitoring Module** | Real-time polling of weather and AQI APIs every 15 minutes per active delivery zone |
| **Trigger Evaluation Module** | AI-driven evaluation of environmental conditions against plan-specific thresholds |
| **Fraud Detection Module** | GPS consistency checks, device fingerprinting, cluster anomaly detection |
| **Payout Execution Module** | Initiates UPI/wallet transfer within 60 seconds of a verified trigger event |
| **Notification Module** | Push notifications, SMS, and WhatsApp alerts to workers when a trigger fires |
| **Dashboard Module** | Worker-facing view of payout history, active coverage, and zone weather forecast |
| **B2B API Module** | REST API + SDK for delivery platform integration and co-funding |
| **Analytics Module** | Zone-level trigger statistics, loss ratios, coverage rates, 7-day forecasts |
| **Chatbot Module** | Hindi/English LLM chatbot with RAG for worker query resolution |
| **Actuarial Module** | Monthly risk modelling, premium calibration, and reinsurance reporting |
| **Admin Module** | Internal dashboard for monitoring system health, overriding triggers, and compliance reporting |

---

## 🔒 Fraud Detection Approach

Fraud prevention is critical to SURAKSHA's viability. Since payouts are automated, the system must ensure that no bad actor can manipulate the system to receive undeserved payments.

### Threat Model

| Threat | Description |
|---|---|
| **GPS Spoofing** | Worker claims to be in a disrupted zone but is physically elsewhere |
| **Fake Registration** | One person creates multiple worker accounts on different devices |
| **Coordinated Abuse** | A group of workers registers in a zone and collectively claims despite the zone not being disrupted |
| **Platform Activity Faking** | Worker marks themselves as "online" on a platform without actually working |
| **API Data Manipulation** | A bad actor attempts to inject false weather readings into the trigger pipeline |

### Defense Mechanisms

| Mechanism | Description |
|---|---|
| **Multi-Source Data Validation** | At least 2 of 3 independent data sources must agree on the trigger condition. A single compromised source cannot cause a payout. |
| **GPS Trajectory Analysis** | The system analyses the worker's movement history from platform APIs to verify physical presence in the claimed zone |
| **Device Fingerprinting** | One device can only be linked to one worker account. Attempts to register multiple accounts on a single device are flagged and blocked. |
| **Isolation Forest Model** | An unsupervised ML model flags statistical outliers in payout request patterns — unusual timing, unusual clustering, unusual frequency |
| **Real-Time Velocity Checks** | If a single zone generates 10× the normal number of trigger claims in a short window, the system holds payouts and triggers a manual audit |
| **Active Worker Verification** | The system confirms with the delivery platform's API whether the worker was genuinely online and receiving orders during the trigger window |
| **Behavioural Baseline** | Each worker's historical activity, location patterns, and payout history are baselined. Deviations trigger additional validation steps. |

---

## 🔄 Data Flow Explanation

```
┌─────────────────────────────────────────────────────────────────────┐
│                       SURAKSHA DATA FLOW                            │
└─────────────────────────────────────────────────────────────────────┘

[External APIs]
  OpenWeatherMap ──┐
  IMD Nowcast      ├──→ [Zone Monitor Service] ──→ [Kafka Topic: zone-events]
  CPCB AQI       ──┘
  
[Kafka Consumer: trigger-evaluator]
  Reads zone-events ──→ 
    [Threshold Check] ──→ Passes? ──→ [Fraud Detection Layer]
                       ──→ Fails? ──→ Log to Audit DB (no payout)
  
[Fraud Detection Layer]
  GPS Check + Device Check + Cluster Check ──→
    Passes? ──→ [Payout Execution Service]
    Fails?  ──→ Hold for manual review; alert admin

[Payout Execution Service]
  Determine payout amount by plan ──→
  Call Razorpay API / Platform Wallet API ──→
  Record transaction in PostgreSQL ──→
  Publish to [Kafka Topic: payout-complete]
  
[Notification Service]
  Subscribes to payout-complete ──→
  Send Push Notification + SMS to worker ──→
  Update worker dashboard in real-time via WebSocket

[Analytics Service]
  Subscribes to all events ──→
  Update zone-level dashboards ──→
  Feed data to Actuarial Model (daily batch) ──→
  Feed data to Pricing Model (weekly run)
```

---

## 📱 Example Scenario

### Scenario: Heavy Rain Payout in Hyderabad

**Setup:** Rajesh is a delivery partner registered on SURAKSHA with the **Plus Plan (₹59/week)**. He is linked to Swiggy and Zomato. His active delivery zone is **Banjara Hills, Hyderabad**. His normal daily earnings are approximately **₹700**.

**Event Timeline:**

| Time | Event |
|---|---|
| **3:00 PM** | Rainfall in Banjara Hills begins increasing |
| **3:15 PM** | SURAKSHA zone monitor polls OpenWeatherMap: rainfall at 45mm/hr |
| **3:30 PM** | Second poll: rainfall now at 68mm/hr — exceeds threshold of 60mm/hr |
| **3:31 PM** | IMD Nowcast API confirms heavy rain in H.No. zone — second source confirmed |
| **3:31 PM** | Duration check: condition exceeded threshold for 15 minutes (minimum not yet met) |
| **3:46 PM** | Duration check passed: threshold exceeded for 31 minutes continuously |
| **3:46 PM** | Active worker check: Swiggy API confirms Rajesh was online and accepted 2 orders in the last hour |
| **3:46 PM** | Fraud detection layer: GPS trajectory consistent with Banjara Hills zone, no anomalies |
| **3:46 PM** | **TRIGGER ACTIVATED** |
| **3:46:38 PM** | Payout of **₹200** credited to Rajesh's Swiggy wallet (Plus Plan: rain payout rate) |
| **3:46:40 PM** | Push notification sent: *"SURAKSHA Payout ₹200 — Heavy Rain, Banjara Hills, 3:46 PM"* |

**Total elapsed time from threshold confirmation to payout credit: 38 seconds.**

**Result:** Rajesh's income loss from riding less in the rain is partially offset. He receives the money without opening the app, visiting an office, or submitting any documentation.

---

## ✅ Advantages of the Solution

| Advantage | Description |
|---|---|
| **Zero Paperwork** | No claim forms, no documentation, no approval process — ever |
| **Instant Payouts** | Money reaches the worker in under 60 seconds of a verified trigger |
| **Objective Triggers** | Payouts are based on independent data, not subjective assessments — impossible to deny a valid claim |
| **Affordable Premiums** | Starting at ₹29/week, the system is accessible even to workers earning ₹300/day |
| **Platform Agnostic** | One subscription protects a worker across all linked delivery platforms simultaneously |
| **Scalable Architecture** | The event-driven design handles city-wide disaster scenarios with thousands of simultaneous payouts |
| **AI-Powered Accuracy** | Multi-source data validation and AI fraud detection ensures money goes to the right people for the right reasons |
| **Dignified Protection** | Workers are treated as individuals deserving of automatic protection, not as claimants who must prove their loss |
| **Compliant by Design** | Built within IRDAI insurance regulations, RBI payment framework, and DPDP Act 2023 from day one |

---

## 🚀 Future Enhancements

| Enhancement | Description | Timeline |
|---|---|---|
| **Accident Protection** | Real-time accident detection via GPS + accelerometer; automatic hospital expense payout | Phase 2 |
| **Health Insurance Add-on** | AQI-linked respiratory health insurance; regular health checks for workers riding in high-pollution zones | Phase 2 |
| **Vehicle Breakdown Cover** | Sensor-based breakdown detection + towing and repair reimbursement within the same parametric framework | Phase 3 |
| **Savings & Investment Module** | Workers can opt to accumulate unused protection funds into a micro-savings product linked to their SURAKSHA wallet | Phase 3 |
| **Regional Language Expansion** | Chatbot and full app UI in Tamil, Telugu, Kannada, Bengali, Marathi, and Gujarati | Phase 2 |
| **Offline Mode** | Cached payout history and zone forecast accessible without internet, important for workers in low-connectivity areas | Phase 2 |
| **NGO / CSR Distribution Channel** | Allow companies and NGOs to gift SURAKSHA subscriptions to workers as part of corporate social responsibility programmes | Phase 2 |
| **Credit Score Integration** | Partner with credit bureaus to build a formal financial identity for gig workers using their SURAKSHA payment history | Phase 4 |
| **Pan-India Government Integration** | Direct API integration with state government systems for instant detection and response to Section 144 orders, curfews, and flood warnings | Phase 3 |
| **Open Insurance API** | Allow third-party fintechs and insurtech startups to build products on top of SURAKSHA's parametric trigger infrastructure | Phase 4 |

---

## 💼 Impact on Gig Economy

### Quantified Impact Potential

| Metric | Estimate |
|---|---|
| **Total addressable workforce** | 15 million+ gig delivery workers across India |
| **Avg. disruption days per worker per year** | 40–60 days |
| **Avg. income loss per disruption day** | ₹500 – ₹1,200 |
| **Annual income at risk per worker** | ₹20,000 – ₹72,000 |
| **Total annual income at risk (all workers)** | ₹30,000 crore – ₹1,00,000 crore |
| **SURAKSHA annual recovery potential (per worker)** | ₹8,000 – ₹25,000 |
| **Breakeven annual revenue (SURAKSHA) at 1L subscribers** | ₹15.6 crore at ₹59/week avg. |

### Societal Impact

- **Economic Stability:** Workers gain a predictable floor on their income during disasters, reducing dependence on moneylenders and informal credit.
- **Health Protection:** AQI payouts create a financial incentive to stop riding on hazardous pollution days — improving long-term worker health outcomes.
- **Platform Retention:** Workers with income protection are less likely to abandon delivery platforms during difficult months, reducing churn for platforms.
- **Formalisation of Gig Work:** Consistent, documentable payout history builds a financial identity for gig workers that can unlock formal credit, housing loans, and government scheme eligibility.
- **Disaster Resilience:** During city-wide floods, cyclones, or heatwaves, SURAKSHA ensures that the most economically vulnerable urban workers receive immediate financial support — faster than any government relief programme.

---

## 📡 Deployment Plan

### Phase 1 — Pilot (Months 1–3)

- Deploy in 2 cities: Bengaluru and Hyderabad
- Onboard 5,000 workers via Swiggy and Zomato partner programmes
- Activate 4 trigger types: Rain, AQI, Storm, Wind
- Weekly plans: Basic and Plus only
- Manual audit of every payout for quality assurance

### Phase 2 — City Expansion (Months 4–9)

- Expand to Delhi, Mumbai, Chennai, Pune, Kolkata
- Onboard Amazon Flex, Zepto, Blinkit, Porter
- Activate all 9 trigger types
- Launch Pro and Pro+ plans
- Enable AI chatbot in Hindi and English
- Onboard first 3 B2B platform partners

### Phase 3 — National Scale (Months 10–18)

- Coverage across all Tier-1 and Tier-2 cities in India
- Target: 5 lakh registered workers
- Full AI fraud detection pipeline in production
- Actuarial system running automated quarterly recalibrations
- Government API integrations for restriction and flood data
- Launch of Accident Protection add-on

### Phase 4 — Platform and Ecosystem (Year 2+)

- Open Insurance API for third-party developers
- Credit score integration with CIBIL and Experian
- Pan-India expansion including Tier-3 cities
- Target: 25 lakh registered workers
- International pilot in one Southeast Asian market

### Infrastructure Scaling Strategy

| Scale Level | Worker Count | Infrastructure |
|---|---|---|
| Pilot | 0 – 10,000 | Single AWS region, 2 EKS nodes, RDS t3.medium |
| City Expansion | 10K – 1L | Multi-AZ, 4–8 EKS nodes, RDS r5.xlarge, Redis Cluster |
| National Scale | 1L – 10L | Multi-region, EKS auto-scaling, Aurora PostgreSQL, Kafka cluster |
| Full Scale | 10L+ | Global CDN, dedicated ML inference cluster, real-time fraud pipeline |

---

## 📸 Screenshots Placeholder

> *The following placeholders represent screens that will be captured from the live demo.*

```
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│                     │  │                     │  │                     │
│   Worker Home       │  │  Payout Received    │  │  Zone Map View      │
│   Dashboard         │  │  Notification       │  │  (Trigger Zones)    │
│                     │  │                     │  │                     │
│  [Screenshot 1]     │  │  [Screenshot 2]     │  │  [Screenshot 3]     │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘

┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│                     │  │                     │  │                     │
│   Plan Selection    │  │   Platform Linking  │  │  AI Chatbot         │
│   Screen            │  │   Screen            │  │  (Hindi/English)    │
│                     │  │                     │  │                     │
│  [Screenshot 4]     │  │  [Screenshot 5]     │  │  [Screenshot 6]     │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│           B2B Analytics Dashboard (Platform Partner View)           │
│                                                                     │
│                        [Screenshot 7]                               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Folder Structure

```
suraksha/
│
├── 📱 mobile/                          # React Native mobile app
│   ├── src/
│   │   ├── screens/                    # App screens (Home, Payout, Profile, etc.)
│   │   ├── components/                 # Reusable UI components
│   │   ├── store/                      # Redux state management
│   │   ├── services/                   # API service layer
│   │   ├── hooks/                      # Custom React hooks
│   │   ├── i18n/                       # Hindi and English translation files
│   │   └── utils/                      # Helper functions
│   ├── android/                        # Android-specific configuration
│   ├── ios/                            # iOS-specific configuration
│   └── package.json
│
├── 🌐 web/                             # React.js B2B dashboard
│   ├── src/
│   │   ├── pages/                      # Dashboard, Analytics, Settings pages
│   │   ├── components/                 # UI components
│   │   ├── store/                      # Redux state
│   │   └── services/                   # API calls
│   └── package.json
│
├── ⚙️ backend/
│   ├── src/
│   │   ├── services/
│   │   │   ├── auth/                   # Registration, KYC, JWT
│   │   │   ├── worker/                 # Worker profile and linking
│   │   │   ├── subscription/           # Plan management, billing
│   │   │   ├── zone-monitor/           # Real-time API polling
│   │   │   ├── trigger-evaluator/      # Threshold evaluation engine
│   │   │   ├── payout/                 # Payment execution
│   │   │   ├── notification/           # Push, SMS, WhatsApp
│   │   │   ├── chatbot/                # LLM chatbot service
│   │   │   └── b2b/                    # Platform partner API
│   │   ├── middleware/                 # Auth, rate limiting, logging
│   │   ├── models/                     # PostgreSQL data models
│   │   └── config/                     # Environment configuration
│   ├── tests/                          # Unit and integration tests
│   └── package.json
│
├── 🤖 ml/                              # Python AI/ML pipeline
│   ├── models/
│   │   ├── trigger_evaluator/          # Random Forest trigger model
│   │   ├── fraud_detection/            # Isolation Forest model
│   │   ├── pricing_engine/             # LSTM + Gradient Boosting
│   │   ├── threshold_calibration/      # LSTM per city zone
│   │   └── actuarial_model/            # Monte Carlo + XGBoost
│   ├── data/
│   │   ├── historical_weather/         # Training data
│   │   └── delivery_volumes/           # Delivery activity data
│   ├── inference_api/                  # FastAPI inference endpoints
│   ├── notebooks/                      # Jupyter notebooks for model development
│   └── requirements.txt
│
├── 🗄️ database/
│   ├── migrations/                     # PostgreSQL migration scripts
│   ├── seeds/                          # Initial data seeds
│   └── schema.sql                      # Full database schema
│
├── ☁️ infrastructure/
│   ├── k8s/                            # Kubernetes manifests
│   ├── helm/                           # Helm chart for deployment
│   ├── terraform/                      # Infrastructure as Code (AWS)
│   └── docker-compose.yml              # Local development setup
│
├── 🔁 .github/
│   └── workflows/
│       ├── ci.yml                      # CI — lint, test, build
│       └── deploy.yml                  # CD — deploy to staging/production
│
├── 📄 docs/
│   ├── api-reference.md                # API documentation
│   ├── architecture.md                 # Detailed architecture guide
│   ├── trigger-conditions.md           # Full trigger condition specifications
│   └── deployment-guide.md             # Step-by-step deployment instructions
│
├── .env.example                        # Environment variable template
├── README.md                           # This file
└── LICENSE
```

---

## 🛠️ Installation Instructions

### Prerequisites

Make sure the following are installed on your system before proceeding:

| Tool | Version | Purpose |
|---|---|---|
| **Node.js** | v18.0+ | Backend and mobile development |
| **npm** | v9.0+ | Package management |
| **Python** | v3.10+ | ML pipeline and FastAPI |
| **Docker** | v24.0+ | Local containerised services |
| **Docker Compose** | v2.0+ | Multi-container local setup |
| **Git** | v2.40+ | Version control |
| **PostgreSQL** | v15.0+ | Database (or use Docker) |
| **Redis** | v7.0+ | Cache (or use Docker) |

### Step 1 — Clone the Repository

```bash
git clone https://github.com/your-org/suraksha.git
cd suraksha
```

### Step 2 — Environment Configuration

```bash
# Copy the example environment file
cp .env.example .env

# Open .env and fill in the following required values:
# OPENWEATHERMAP_API_KEY=your_key_here
# CPCB_API_KEY=your_key_here
# RAZORPAY_KEY_ID=your_key_here
# RAZORPAY_KEY_SECRET=your_secret_here
# DIGILOCKER_CLIENT_ID=your_client_id
# ANTHROPIC_API_KEY=your_claude_api_key
# PINECONE_API_KEY=your_pinecone_key
# POSTGRES_URL=postgresql://user:password@localhost:5432/suraksha
# REDIS_URL=redis://localhost:6379
# JWT_SECRET=your_jwt_secret_min_32_chars
```

### Step 3 — Start Local Infrastructure (Docker)

```bash
# Start PostgreSQL, Redis, and Kafka locally
docker-compose up -d postgres redis kafka zookeeper

# Verify all containers are running
docker-compose ps
```

### Step 4 — Backend Setup

```bash
cd backend

# Install Node.js dependencies
npm install

# Run database migrations
npm run db:migrate

# Seed initial data (cities, zones, plan configurations)
npm run db:seed
```

### Step 5 — ML Pipeline Setup

```bash
cd ../ml

# Create a Python virtual environment
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Download pre-trained model weights
python scripts/download_models.py
```

### Step 6 — Mobile App Setup

```bash
cd ../mobile

# Install dependencies
npm install

# Install iOS pods (macOS only)
cd ios && pod install && cd ..
```

---

## ▶️ How to Run the Project

### Local Development (Full Stack)

```bash
# Terminal 1 — Start backend API server
cd backend
npm run dev
# API running at: http://localhost:3000

# Terminal 2 — Start ML inference API
cd ml
source venv/bin/activate
uvicorn inference_api.main:app --reload --port 8000
# ML API running at: http://localhost:8000

# Terminal 3 — Start zone monitor service (polls APIs every 15 min)
cd backend
npm run start:zone-monitor

# Terminal 4 — Start mobile app (Android)
cd mobile
npx react-native run-android

# Terminal 4 — Start mobile app (iOS, macOS only)
cd mobile
npx react-native run-ios

# Terminal 5 — Start web dashboard
cd web
npm install && npm start
# Dashboard running at: http://localhost:3001
```

### Running Tests

```bash
# Backend unit and integration tests
cd backend
npm run test

# ML model tests
cd ml
python -m pytest tests/ -v

# Mobile component tests
cd mobile
npm run test
```

### Simulating a Trigger Event (Demo Mode)

```bash
# Use the trigger simulation tool to test the full payout flow without real API data
cd backend
npm run simulate:trigger -- \
  --type HEAVY_RAIN \
  --zone "Banjara Hills, Hyderabad" \
  --worker-id demo_worker_001

# This will:
# 1. Inject simulated weather data into the trigger evaluator
# 2. Run the fraud detection layer
# 3. Execute a ₹200 test payout to the demo worker's linked account
# 4. Send a test push notification
# 5. Log the complete event to the audit trail
```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, data scientists, and domain experts. Please follow these guidelines:

### Getting Started

1. **Fork the repository** — click Fork at the top of the GitHub page.
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** — follow the code style guidelines below.
4. **Write or update tests** — all new features must include tests.
5. **Submit a Pull Request** — include a clear description of what you changed and why.

### Code Style Guidelines

| Area | Standard |
|---|---|
| **JavaScript / TypeScript** | ESLint + Prettier (config provided in `.eslintrc` and `.prettierrc`) |
| **Python** | PEP 8 + Black formatter |
| **Commits** | Conventional Commits format: `feat:`, `fix:`, `docs:`, `test:`, `refactor:` |
| **Branch Naming** | `feature/name`, `bugfix/name`, `hotfix/name` |

### Contribution Areas

- 🌦️ **New trigger types** — adding new environmental data sources and threshold logic
- 🌍 **Regional language support** — adding UI translations for new languages
- 🤖 **ML model improvements** — improving fraud detection accuracy or pricing predictions
- 📱 **Mobile UI/UX** — improving the worker-facing app experience
- 🔌 **New platform integrations** — adding support for more delivery platforms
- 📚 **Documentation** — improving guides, API references, and examples

### Reporting Issues

Please use GitHub Issues with the following labels:
- `bug` — For confirmed bugs with reproduction steps
- `enhancement` — For feature requests and improvements
- `question` — For general questions about the system

---

## 👥 Team Members

| Name | Role | Responsibilities | Contact |
|---|---|---|---|
| **[Team Member 1]** | Project Lead & Backend Engineer | System architecture, trigger evaluation engine, API integration | [@github_handle](https://github.com/) |
| **[Team Member 2]** | AI / ML Engineer | Fraud detection model, pricing engine, chatbot integration | [@github_handle](https://github.com/) |
| **[Team Member 3]** | Mobile Developer | React Native app, offline mode, UPI integration | [@github_handle](https://github.com/) |
| **[Team Member 4]** | Frontend & UI/UX Designer | Web dashboard, design system, user research | [@github_handle](https://github.com/) |
| **[Team Member 5]** | Data Engineer & DevOps | Kafka pipeline, database design, CI/CD, cloud infrastructure | [@github_handle](https://github.com/) |

> *Replace the placeholders above with your actual team details before submission.*

---

## 📜 License

```
MIT License

Copyright (c) 2025 SURAKSHA Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**Built with purpose for India's 15 million gig delivery workers.**

*SURAKSHA — Because every worker deserves a safety net that never asks for paperwork.*

---

⭐ If this project helped you or inspired you, please give it a star on GitHub.

[![GitHub Stars](https://img.shields.io/github/stars/your-org/suraksha?style=social)](https://github.com/your-org/suraksha)
[![GitHub Forks](https://img.shields.io/github/forks/your-org/suraksha?style=social)](https://github.com/your-org/suraksha)

</div>
