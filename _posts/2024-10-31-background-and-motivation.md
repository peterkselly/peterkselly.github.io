---
title: Background and Motivation
date: 2024-10-31 18:00:00 +0000
categories: [Planning / Concepts]
description: Why do any of this?
comments: false
include:
  - assets
---

## The State of Things

**B**rain-**C**omputer **I**nterface in simple terms is just real-time signal processing of neuroimaging data. Much of the BCI space is focused on **motor decoding** or **motor imagery**, that is, the ability to classify motor commands or imagined movement from a recording. These are two distinct concepts with similar but distinct activation patterns, and both rely on the motor cortex. From what I can tell there's two good reasons for this focus:

1. There's an immediate clinical application, helping the people with impaired movement, tetraplegia, or locked-in syndrome
2. It's the primary efferent (output) system of the brain, motor system and its circuitry are well researched, externally verifiable.

It makes perfect sense why an emerging field would focus on a relatively well-explored system as they are developing their signal processing methods. Also, the micro-circuitry of the cortical column is consistent throughout the cortex, meaning in the future we may be able to use what we've learned in the motor domain to interface with more abstract stuff like attention or cognition. Absolutely crazy stuff.

---
For those unaware, there's two primary categories of BCI: **Invasive** and **Non-invasive**

**Invasive** BCIs involve surgery or implanted devices. Usually in the form of electrodes implanted underneath the scalp. You can recognize these if you see the terms: Electrocorticography (ECoG), iEEG, or Utah-array. There's even some that use catheters and stints to plant electrodes inside your damn blood vessels!

- Examples being Neuralink & Synchron

**Non-invasive** BCIs do not involve any surgery. The vast majority of implementations use electroencephalography (EEG) due to cost and portability, which is exactly why we'll be using it. Though I've seen some promising fMRI and especially MEG research.

- Examples being Emotiv & OpenBCI

Recording outside the scalp reduces our spacial resolution by a lot, and I'll put up a post for why that is later.

## Project Scope

This project will focus on EEG-based motor decoding for all the reasons outlined. I personally think there's a distinct lack of electrode density in current BCI applications. At least in EEG systems, motor classification performance is not yet at the level it needs to be to get to the sci-fi ideal BCI we all have in our heads. Much effort and funding is being used to investigate the optimal signal processing pipeline and ML models, and I would argue this work is being done without just consideration of how we are acquiring this data.

These models need more data and better data. So I'm taking a first-principals approach, inspecting each level of the system to see where performance can be gained. This project started as me making some custom electrodes, then my own board, and eventually I had a full-stack pipeline for the data drafted up. You can read my post about EEG limitations for the specifics, but I a focusing in on a hyper-dense array on the **hand-knob region**, a specific area of the motor cortex that contributes to motor commands in the hand. The goal is to optimize the model to classify finger movements, an area of low performance in BCI. 


This dev blog is mostly for me to organize and document my own thoughts as I'm building, as well as something easy to send people when they ask me what I do.