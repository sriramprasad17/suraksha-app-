<div align="center">

# ☸ SURAKSHA
### Delivery Partner Insurance

**One Insurance. Every Partner. Every Platform.**

![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![IRDAI](https://img.shields.io/badge/IRDAI-Compliant-0D1B3E?style=for-the-badge)
![RBI](https://img.shields.io/badge/RBI-PPI_Licence-C8962C?style=for-the-badge)
![DPDP](https://img.shields.io/badge/DPDP_Act-2023-1B5E20?style=for-the-badge)

---

> **India's first universal parametric micro-insurance for gig delivery workers.**
> When weather turns dangerous, payouts land in your wallet in **60 seconds** — automatically.
> No forms. No assessors. No waiting.

</div>

---

## Table of Contents

- [Overview](#overview)
- [The Problem](#the-problem)
- [Live Pages](#live-pages)
- [Coverage Plans](#coverage-plans)
- [Parametric Triggers](#parametric-triggers)
- [Partner Platforms](#partner-platforms)
- [Weather Alert System](#weather-alert-system)
- [Payment and Onboarding](#payment-and-onboarding)
- [AI Engine](#ai-engine)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Key Components](#key-components)
- [Design System](#design-system)
- [Compliance](#compliance)
- [Tech Stack](#tech-stack)
- [FAQ](#faq)

---

## Overview

Suraksha is a **parametric micro-insurance platform** built for India's 15 lakh+ gig delivery workers across Swiggy, Zomato, Zepto, Amazon Flex, Blinkit, Dunzo, Porter, and Delhivery — all under **one weekly policy**.

Unlike traditional insurance, Suraksha uses **live environmental data** (rainfall, AQI, temperature, wind, fog) to fire payouts automatically the moment conditions are confirmed dangerous. The partner never files a claim, never calls anyone, and never waits weeks.

```
Partner is riding
    → Weather crosses threshold
    → 2/3 data sources confirm
    → AI validates partner is active
    → Payout in wallet within 60 seconds
    → Push notification sent
```

| Metric | Value |
|--------|-------|
| Eligible delivery partners (India, 2024) | **15 Lakh+** |
| Starting weekly premium | **Rs.29 / week** |
| Max payout time after trigger | **60 seconds** |
| Delivery platforms covered | **8 platforms** |
| Data source consensus required | **2 of 3 sources** |
| Zone monitoring frequency | **Every 15 minutes** |
| Zone grid precision | **5km x 5km** |

---

## The Problem

India's gig delivery workers earn Rs.800-1,500 per day. On extreme weather days, earnings collapse while accident risk triples. No platform, government scheme, or existing insurance product protects their income.

| Gap | Impact on Partners |
|-----|--------------------|
| No income protection on bad weather days | 50-70% of daily earnings lost per extreme event |
| Traditional insurance does not fit gig workers | Irregular income, 2-4 week claim cycles, frequent rejections |
| Multi-platform workers fall through every gap | Working Swiggy + Zepto = zero protection from either on the same day |
| AQI and heat risk is invisible and ignored | 60+ days/year in Delhi and Lucknow with AQI above 200, zero compensation |
| No real-time trigger product exists in India | Every existing product is manual, reactive, and slow |

> *"I ride for three apps simultaneously. On a heavy rain day, all three earnings drop at once. I have no insurance from any of them. If I fall, I am finished."*
> 
> **Delivery Partner, Hyderabad** — Swiggy, Zomato and Zepto

---

## Live Pages

The app has **three pages** routed via React `useState` — no React Router required.

### Home Page
Full marketing website with hero, animated stats, problem cards, 7-step how-it-works with live radar canvas, 6 trigger cards, 8 platform cards, 4 pricing plans, 7 AI engine cards, compliance cards, CTA, and footer.

### Weather Page (`/weather`)
Live weather monitoring dashboard with:
- Rotating alert ticker (Mumbai rain / Delhi AQI / Hyderabad heat)
- City selector for 8 major Indian cities
- Current conditions card + 6-metric grid (Rainfall / AQI / Temp / Wind / Fog / Zone Status)
- 8-city data table with colour-coded danger levels
- 4 safety tip cards per weather condition type

### Payment Page (`/payment`)
3-step checkout flow:
1. **Plan Confirm** — Review selected plan with full feature list
2. **Platform Linking** — Checkbox grid for all 6 platforms (OAuth, no credentials stored)
3. **Payment** — UPI AutoPay / Swiggy-Zomato Wallet / Debit Card + terms checkbox
4. **Success Screen** — Policy ID, coverage start date, auto-renewal confirmation

---

## Coverage Plans

| Feature | Basic | Plus | Pro | Pro+ |
|---------|-------|------|-----|------|
| **Weekly Premium** | Rs.29 | Rs.59 | Rs.99 | Rs.149 |
| Heavy Rain Payout | Rs.100/day | Rs.200/day | Rs.350/day | Rs.500/day |
| AQI / Air Pollution | -- | Rs.150/day | Rs.250/day | Rs.400/day |
| Heat Wave | -- | -- | Rs.200/day | Rs.350/day |
| Dense Fog | -- | Rs.150/day | Rs.350/day | Rs.400/day |
| High Wind / Storm | Rs.100/day | Rs.200/day | Rs.350/day | Rs.500/day |
| Thunderstorm / Cyclone | Max payout | Max payout | Max payout | Max payout |
| Accident Cover | Rs.50,000 | Rs.1,00,000 | Rs.2,00,000 | Rs.5,00,000 |
| **Max Weekly Payout** | Rs.300 | Rs.700 | Rs.1,400 | Rs.2,500 |
| Platforms Linked | Up to 2 | Up to 4 | Unlimited | Unlimited + Priority |
| 24x7 AI Chatbot | Basic | Standard | Priority | Priority+ |

> A Rs.59 Plus plan costs less than **0.8% of average weekly earnings**. One rain payout = **3x your premium recovered**.

All plans auto-renew every Monday via UPI AutoPay. Cancel, upgrade, or downgrade any Monday — **zero lock-in, zero penalty**.

---

## Parametric Triggers

Payouts fire **automatically** when conditions are confirmed by **2 of 3 independent data sources** in the partner's active 5km x 5km zone.

| Trigger | Threshold | Plans | Daily Payout Range |
|---------|-----------|-------|--------------------|
| Heavy Rain | > 20mm/hr for 30+ min | All tiers | Rs.100-500 |
| Air Pollution (AQI) | AQI > 200 for 2+ hrs | Plus, Pro, Pro+ | Rs.150-400 |
| Heat Wave | Feels-like > 45C for 4+ hrs | Pro, Pro+ | Rs.200-350 |
| Dense Fog | Visibility < 200m for 2+ hrs | Plus, Pro, Pro+ | Rs.150-400 |
| High Wind / Storm | Wind > 50km/hr for 1+ hr | All tiers | Rs.100-450 |
| Thunderstorm / Cyclone | IMD severe weather warning | All tiers | Max tier + safety alert |

### Validation Rules

```
Multi-source consensus  ->  2 of 3 sources must agree
                            (OpenWeatherMap + IMD Nowcast + CPCB/Weather.com)

Zone precision          ->  5km x 5km grid
                            Koramangala is unaffected by Whitefield trigger events

Duration requirement    ->  Condition must persist minimum time
                            A 5-minute rain burst does not qualify

Active partner check    ->  Partner must be online on at least 1 linked platform
                            during the trigger window to prevent gaming
```

**Data sources:** OpenWeatherMap API, IMD Nowcast, CPCB AQI stations, Weather.com commercial API, satellite weather feeds.

---

## Partner Platforms

One Suraksha policy covers **all linked platforms simultaneously**.

| Platform | Category | Active Partners |
|----------|----------|-----------------|
| Swiggy | Food and Grocery Delivery | 3,00,000+ |
| Zomato | Food Delivery | 3,50,000+ |
| Zepto | 10-min Grocery | 30,000+ |
| Amazon Flex | E-commerce | 1,20,000+ |
| Blinkit | Quick Commerce | 40,000+ |
| Dunzo | Hyperlocal | 20,000+ |
| Porter | Logistics | 50,000+ |
| Delhivery | E-commerce Logistics | 2,00,000+ |

**Total addressable market: 12-15 lakh active delivery partners** across India (2024).

---

## Weather Alert System

The weather dashboard monitors 8 major Indian cities in real time with live data from CPCB, IMD, and OpenWeatherMap:

| City | Temp | Feels Like | AQI | Rain | Status |
|------|------|-----------|-----|------|--------|
| Mumbai | 31C | 38C | 82 | 28mm/hr | RAIN ALERT ACTIVE |
| Delhi | 38C | 44C | 245 | 0mm/hr | AQI DANGER ACTIVE |
| Chennai | 35C | 41C | 98 | 4mm/hr | Clear |
| Hyderabad | 42C | 47C | 112 | 0mm/hr | HEAT ALERT ACTIVE |
| Bengaluru | 27C | 29C | 68 | 2mm/hr | Normal |
| Kolkata | 33C | 40C | 145 | 14mm/hr | WIND ALERT ACTIVE |
| Pune | 29C | 33C | 75 | 6mm/hr | Light Rain |
| Ahmedabad | 43C | 48C | 168 | 0mm/hr | EXTREME HEAT ACTIVE |

Safety advisories are pushed to all active partners in affected zones when triggers fire.

---

## Payment and Onboarding

Partners go from **zero to protected in under 5 minutes** on a 2G connection.

```
Step 1  ->  Link all platforms (Swiggy, Zomato, Zepto, Amazon, Blinkit...)
Step 2  ->  Aadhaar eKYC via DigiLocker (skipped if already verified on Swiggy/Zomato)
Step 3  ->  Choose weekly plan (Basic / Plus / Pro / Pro+)
Step 4  ->  Set UPI AutoPay mandate (GPay / PhonePe / Paytm / Platform Wallet)
            |
            Coverage active. Monitoring starts. No further action needed ever.
```

### Supported Payment Methods

| Method | Details |
|--------|---------|
| UPI AutoPay (Recommended) | GPay, PhonePe, Paytm, any BHIM UPI — one-time approval, auto weekly debit |
| Platform Wallet | Swiggy / Zomato wallet auto-deduct — no new payment instrument required |
| Debit Card | Rupay / Visa / Mastercard — all nationalised and private banks in India |

---

## AI Engine

Seven interdependent AI systems power Suraksha's operations:

```
NEURAL TRIGGER EVALUATION PIPELINE
===================================

[Data In]    Rain  AQI  Temp  Wind    (3 independent data sources polled)
     |
[Validation] V1 --- V2 --- V3         (2-of-3 consensus gate)
     |
[AI Model]   ML --- RF --- AI         (Random Forest classifier + rule engine)
     |
[Decision]   APPROVE  /  REJECT        (entire path under 60 seconds)
     |
[Payout]     Rs. -> Partner Wallet    (Swiggy / Zomato / Suraksha wallet)
```

| # | Component | Model | Purpose |
|---|-----------|-------|---------|
| 1 | Trigger Evaluation Engine | Rule engine + Random Forest | 2/3 source validation, sub-60s decision |
| 2 | City-Level Threshold Calibration | LSTM time-series | Per-city thresholds, re-calibrates quarterly |
| 3 | Multi-Platform Fraud Detection | Isolation Forest + GPS anomaly | GPS spoofing, fake activity, coordinated gaming |
| 4 | Risk-Based Dynamic Pricing | LSTM + gradient boosting | 7-day risk forecast, monsoon premium adjustment |
| 5 | Multi-Platform Partner Intelligence | Graph neural network | Cross-platform attribution, payout deduplication |
| 6 | AI Chatbot - Hindi and English 24x7 | Claude API + LangChain + Pinecone RAG | Context-aware partner query resolution |
| 7 | Actuarial Risk Modelling | Monte Carlo + XGBoost | Loss ratio projection, reinsurance structuring |

---

## Project Structure

```
suraksha-app-/
├── public/
│   └── vite.svg
├── src/
│   ├── SurakshaApp.jsx     # Main app — all components in one file
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles (full-width fix required)
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

### SurakshaApp.jsx — Component Map

```
SurakshaApp (default export)
|
|-- Chakra          SVG Ashoka Chakra logo (24 spokes, configurable size/color/speed)
|-- Fade            Scroll-reveal wrapper (IntersectionObserver based)
|-- Num             Animated counter (0 to target on viewport entry)
|-- Radar           Live canvas radar animation (rotating sweep + partner dots)
|
|-- WeatherPage     Full weather monitoring dashboard
|   |-- City selector (8 cities)
|   |-- Current conditions card
|   |-- 6-metric grid (Rain / AQI / Temp / Wind / Fog / Zone)
|   |-- 8-city data table with danger levels
|   `-- 4 safety tip cards
|
`-- PaymentPage     3-step checkout flow
    |-- Step 1: Plan Confirm
    |-- Step 2: Platform Linking (OAuth checkbox grid)
    |-- Step 3: UPI / Wallet / Card Payment
    `-- Step 4: Success Screen with policy ID
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sriramprasad17/suraksha-app-.git
cd suraksha-app-

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Critical — Fix Full-Width Layout

Add this to `src/index.css` to prevent black side bars:

```css
/* src/index.css */
html, body, #root {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
```

Without this, Vite's default `#root` container limits the layout width and shows **black side bars** on the left and right of the page.

### Build for Production

```bash
npm run build      # Outputs to /dist folder
npm run preview    # Preview production build locally
npm run lint       # Run ESLint checks
```

---

## Key Components

### Chakra — Ashoka Chakra Logo

The Suraksha logo is a pure SVG React component — not an image file. It renders the authentic Ashoka Chakra with 24 equally-spaced spokes, outer ring, inner ring, and centre hub. Rotates continuously via CSS animation.

```jsx
<Chakra
  size={28}          // Size in pixels — any value, scales perfectly
  color="#E8B84B"    // Hex color string
  speed="8s"         // CSS animation-duration string
/>
```

| Usage | Size | Color | Speed |
|-------|------|-------|-------|
| Navbar | 28px | Gold #E8B84B | 8s |
| Hero background | 480px | White, 7% opacity | 24s |
| CTA section | 580px | White, 5% opacity | 28s |
| Footer | 20px | Gold #E8B84B | 8s |

### Fade — Scroll Reveal

```jsx
<Fade delay={0.1} style={{ maxWidth: 600 }}>
  <YourContent />
</Fade>
```

Uses `IntersectionObserver` to trigger a fade + slide-up animation when the element enters the viewport. Accepts `delay` in seconds and a `style` prop.

### Radar — Live Zone Canvas

Pure HTML5 Canvas animation with no library dependency. Renders a rotating radar sweep, zone boundary circles, and animated partner location dots. Represents the real-time 5km x 5km zone monitoring system visually.

### Page Routing

```jsx
// Three pages, zero dependencies — pure useState routing
const [page, setPage] = useState("home"); // "home" | "weather" | "payment"

// Navigate between pages
<button onClick={() => setPage("payment")}>Get Protected</button>
<button onClick={() => setPage("weather")}>View Weather Alerts</button>
<button onClick={() => setPage("home")}>Back to Home</button>
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Navy (Primary) | #0D1B3E | Hero, navigation, footer, section accents, headings |
| Gold (Brand) | #C8962C | CTA buttons, borders, eyebrow labels, trigger highlights |
| Gold Light | #E8B84B | Ashoka Chakra logo, hero italic text, AI section accents |
| Cream (Background) | #F7F3EC | Alternating section backgrounds throughout |
| White | #FFFFFF | Card backgrounds, table rows |
| Text Gray | #7A8BB0 | Body copy, muted labels, secondary information |

### Typography

| Usage | Font | Weight |
|-------|------|--------|
| Display headings and brand name | Playfair Display (serif) | 700-800 |
| Italic emphasis in hero and subtitles | Playfair Display Italic | 700 |
| Body text, labels, navigation links | Nunito Sans | 300 / 400 / 600 / 700 |
| Eyebrow labels above section headings | Nunito Sans uppercase, 0.6rem, 2.5px letter-spacing | 700 |
| Code snippets and policy IDs | Courier New | monospace |

Fonts are loaded via `@import` inside the injected CSS string in `SurakshaApp.jsx` — no npm package required.

### CSS Animations

```css
@keyframes surSpin   { to { transform: rotate(360deg); } }
/* Used for: Ashoka Chakra logo rotation */

@keyframes surMarq   { to { transform: translateX(-50%); } }
/* Used for: Platform name ticker marquee */

@keyframes surBlink  { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
/* Used for: Alert dot pulse on weather ticker */

@keyframes surFU     { from { opacity: 0; transform: translateY(14px); }
                       to   { opacity: 1; transform: translateY(0); } }
/* Used for: Hero section fade-up entrance animation */
```

---

## Compliance

| Framework | Approach |
|-----------|---------|
| IRDAI Insurance Distribution | Embedded distributor via Digit Insurance / ICICI Lombard. Platforms act as Corporate Agents — zero additional licensing burden for platforms |
| RBI PPI Wallet Licence | Payout wallet under Prepaid Payment Instrument licence via NBFC partner. Auto-debit under RBI UPI AutoPay e-mandate framework |
| DPDP Act 2023 | Explicit consent at onboarding. Data retention capped at 24 months. Right to erasure and portability fully supported in-app |
| Zone-Level Data Only | All trigger data is zone-level aggregate — never personal. GPS for anti-fraud is on-device, AES-256 encrypted, never shared |
| Platform Data Isolation | Each platform's data in separate encrypted namespaces. Swiggy data is architecturally isolated from Zomato data |
| End-to-End Security | AES-256 at rest, TLS 1.3 in transit, AWS Secrets Manager for API credentials, annual third-party security audit |

---

## Tech Stack

### Frontend (This Repository)

| Layer | Technology |
|-------|-----------|
| Framework | React 18+ |
| Bundler | Vite 5 |
| Language | JavaScript (JSX) |
| Styling | Inline JS style objects — zero CSS framework dependency |
| Fonts | Google Fonts via @import (Playfair Display + Nunito Sans) |
| Animation | CSS keyframes + HTML5 Canvas (useRef + requestAnimationFrame) |
| Routing | useState — no React Router |
| State Management | React hooks only (useState, useEffect, useRef) |

### Backend and Infrastructure (Production)

| Layer | Technology |
|-------|-----------|
| API Gateway | Node.js + FastAPI |
| Trigger Engine | Python + FastAPI (real-time data ingestion) |
| Data Pipeline | Apache Kafka + Apache Spark |
| Database | PostgreSQL (primary) + Redis (cache) |
| ML Platform | Python + scikit-learn + TensorFlow |
| Payments | Razorpay + UPI AutoPay |
| Cloud | AWS EKS (Kubernetes) |
| Observability | Grafana + Prometheus |
| Secrets | AWS Secrets Manager + HashiCorp Vault |
| CI/CD | GitHub Actions |

---

## FAQ

**What is parametric insurance?**

Parametric insurance pays out automatically when a pre-defined condition is confirmed by objective data — no claim submission, no assessor, no approval process. Traditional insurance requires claim submission, evidence of loss, assessor visit, and a decision process. Suraksha's parametric model eliminates all of that. Payouts fire in 60 seconds.

---

**What if I work on Swiggy and Zomato simultaneously?**

One Suraksha policy covers all linked platforms simultaneously. If you are active on both during a trigger event, you receive a single payout — not two separate payouts. The Multi-Platform Partner Intelligence AI correctly identifies and attributes cross-platform activity.

---

**What if weather is bad but I do not get a payout?**

Three scenarios: (1) The condition did not reach the trigger threshold — for example, 18mm/hr rainfall when the trigger requires 20mm/hr. (2) Only 1 of 3 data sources confirmed the condition, so 2/3 consensus was not reached. (3) You were not active on any linked platform during the trigger window. The AI Chatbot explains exactly why any specific event did not trigger.

---

**Can I cancel my plan?**

Yes — cancel any Monday in-app with zero penalty. Your coverage continues until the end of the current week. No lock-in, no cancellation fee, no notice period required.

---

**Is my platform login data stored?**

No. Suraksha uses OAuth-based platform linking — we receive anonymised zone-level data only. Your delivery history, earnings, ratings, and personal data remain entirely within each platform's systems.

---

**Is Suraksha registered with IRDAI?**

Yes. Suraksha operates as an embedded insurance distributor under IRDAI's corporate agent framework, partnered with Digit Insurance and ICICI Lombard as the licensed insurers.

---

## License

This project is proprietary software. All rights reserved.

Copyright 2025 Suraksha Insurance Tech Pvt. Ltd.

---

<div align="center">

IRDAI Registered Distributor &nbsp;·&nbsp; RBI PPI Licence &nbsp;·&nbsp; DPDP Act 2023 &nbsp;·&nbsp; Not an investment product

---

*Built for India's 15 lakh+ delivery partners*

**Suraksha — One Insurance. Every Partner. Every Platform.**

</div>
