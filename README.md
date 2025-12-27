#Flowbit-engine

This project implements an AI system for automating invoice processing using a memory-driven learning layer. The system learns from past human corrections, vendor-specific patterns, and discrepancies, improving accuracy and reducing the need for human intervention.

#Key Features:

Vendor-Specific Memory: Stores patterns and insights for each vendor.

Correction Memory: Learns from repeated corrections (e.g., tax or quantity mismatches).

Resolution Memory: Tracks how discrepancies were resolved (human-approved or rejected).

Confidence Scoring: Adjusts confidence in decisions based on learned memory.

Audit Trail: Logs every step of the process for traceability.

Learning Over Time: Improves decision-making as it processes more invoices.

#Demo

Invoice #1 (Before Learning): The system flags issues and requests human review.

Invoice #2 (After Learning): The system applies learned memory to make smarter decisions with fewer flags.

#How It Works:

Recall Memory: Retrieve relevant memories based on vendor data.

Apply Memory: Suggest and apply corrections using learned patterns.

Decide: Automatically approve, correct, or escalate for human review with reasoning.

Learn: Update memory with human corrections for future invoices.

Output: Returns a JSON with normalized invoice data, corrections, confidence score, reasoning, and audit trail.

#Installation

##Clone the repository:

git clone https://github.com/Sayyoni-Parate/Flowbit-engine.git


##Install dependencies:

npm install


##Run the demo:

ts-node demoRunner.ts

##Technologies Used:

TypeScript (Strict Mode)

Node.js

SQLite/Postgres (for memory persistence)

Custom Heuristics (No machine learning models)
