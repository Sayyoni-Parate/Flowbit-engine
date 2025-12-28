🧠 Memory-Driven Learning Engine for Invoice Automation
--

Flowbit AI 
-

Demonstrating Learned Memory in Intelligent Agent Systems

Tech Stack: TypeScript (strict) · Node.js · SQLite
--
Focus: Explainable, persistent learning from human corrections

🚀 Overview
---

This project implements a memory-driven learning layer for invoice automation systems.

Instead of treating every invoice as a new input, the system learns from past human corrections (vendor patterns, recurring fixes) and applies those learnings to future invoices—safely, explainably, and with full auditability.

⚠️ OCR and extraction accuracy are assumed.
----
This project focuses purely on post-extraction intelligence.

🎯 What This Demonstrates

✅ Learning from human corrections

✅ Persistent memory across runs

✅ Vendor-specific behavior

✅ Confidence-based decision making

✅ Explainable & auditable reasoning

✅ Clear improvement over time (demo-driven)

🧩 Core Concepts
-----
🔹 Memory Types

Vendor Memory
Learns vendor-specific patterns (e.g. "Leistungsdatum" → serviceDate)

Correction Memory (scaffolded)
Tracks repeated correction strategies

Resolution Memory (scaffolded)
Tracks approval vs rejection outcomes

🔹 Decision Logic

Memory is always consulted before decisions

Low-confidence memory is suggested, not blindly applied

Human review is required when confidence is insufficient

Learning is reinforced gradually (no hard jumps)

🏗️ High-Level Architecture
------
<img width="352" height="341" alt="image" src="https://github.com/user-attachments/assets/f570ef0f-1bb4-4bf8-b964-411d796c7cda" />


📂 Project Structure
------
<img width="575" height="406" alt="image" src="https://github.com/user-attachments/assets/ff5a313a-e5c9-46ff-9396-80b8102dea32" />


🧪 Demo: Learning Over Time (Key Requirement)
------
The demo intentionally runs two invoices from the same vendor to show measurable improvement.

▶️ Run #1 — Before Learning

1. No memory exists
2. System recalls nothing
3. Human review is required

▶️ Run #2 — After Learning

1. Vendor memory is recalled
2. serviceDate is auto-suggested
3. Human review is no longer required

🗄️ Persistence & Auditability
---------
1. Uses SQLite for memory persistence
2. Memory survives across runs
3. All learning is inspectable via database
4. No destructive mutation of invoices

SELECT * FROM vendor_memory;


⚙️ How to Run
--------------

1️⃣ Install dependencies

npm install

2️⃣ Run the demo

npx ts-node src/demoRunner.ts

or

npm run demo

Clone:
==
git clone https://github.com/Sayyoni-Parate/Flowbit-engine.git

