---
title: "When Several People Have to Agree Before Anyone Gets In: The RCP Fellowship Portal"
description: "Building a multi-party workflow application for one of medicine's oldest institutions — and learning that process complexity doesn't care about your tech stack."
client: "Royal College of Physicians"
stack:
  - Umbraco 8
  - ASP.NET MVC 5
  - .NET Framework 4.7.2
  - Vue 2
  - Dynamics 365 (SOAP)
  - OpenID Connect
  - PayPal SDK
pubDate: 2026-03-16
featured: true
---

Becoming a Fellow of the Royal College of Physicians isn't a form you fill in. It's a process.

There's a candidate. A proposer. A sponsor. Two endorsers, potentially including a College Tutor. A grader. Possibly several. And somewhere at the end of it all, a ceremony and an acceptance fee. Every one of those people has something to do. Every one of those actions has to happen in the right order.

## The brief vs the reality

The brief was deceptively simple: build a portal. What we actually built was a **state machine dressed in a CMS**, orchestrating multiple external SOAP services, with a different face for every role that touched it.

A candidate can self-propose, shepherding their own application through submission. Or an existing Fellow can propose someone else, enter details, hand off for supporting sections, and reclaim the wheel for final submission.

## Integration honesty

Dynamics 365 sat at the centre of the RCP's data world, and it spoke SOAP. Not GraphQL. Not REST. SOAP. We wrapped multiple services — CRM, Integration, Events, Transactions — with mapping layers that converted CRM types into something the application could reason about, and back again on submission.

## What mattered

Seven roles. Two proposal journeys. Multiple external services. One source of truth for workflow state.

The RCP Fellowship Portal isn't a CRUD app. It's a coordination layer for a core process. If it goes wrong, it doesn't just inconvenience someone — it blocks a clinician's professional recognition. The code has to be boring in the right ways: centralised state logic, clean mapping layers, repeatable deployments, honest documentation.

<!-- DRAFT: Add architecture diagrams, role matrix, and lessons learned when ready. -->
