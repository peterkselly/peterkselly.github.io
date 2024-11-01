---
title: EEG and its limitations
date: 2024-10-31 18:00:00 +0000
categories: [Planning / Concepts]
description: Outline of the technology, what it measures, and what it can't.
comments: false
include:
  - assets
---

## What does it measure?
Not neurons firings. In the cortex there are pyramidal neurons that are positioned perpendicular to the scalp --maybe *orthoginal* would be more accurate. When these fire there there is an extremely complicated cascade of cellular events that leads to a change in the relative charge on the outside the cell between the two ends. These are so called **local field potentials (LFPs)**, the video below explains it very well. Because there are so many of these pyramidal neurons and they are all faced the same way, if we zoom out, what happens is that areas of cortical tissue hold charge as a function of net activity that can conduct up to the scalp. 

{% include embed/youtube.html id='i2St7BeRz6A?si=WBET93Zm4PGEnt0l&t=195' %}

## What are we giving up?

Electrodes are still electrodes fundimentally, So what do we lose when we record outside the scalp? Spatial Resolution, or our ability to determine the spatial origin of an electrode signal. The signal has to conduct through the dura, cranium, and scalp on its journey from the cortex to the electrode, that's a lot of distance to move off-course through layers of tissue of uneven conductance. There is a concept called **volume conduction**, which describes how the un-straightness of this path. The current goes where it is easiest, so it goes along layers and layers of imprecicely-stacked cell membranes. I haven't looked into this, but I would suspect that what phase of the heartbeat we're in at the milisecond of recording could influence the path it takes! Bad for us but interesting.

These are incredibly weak analog signals subject to noise. 

| Measure                           | Typcial EEG values|
| --------------------------------- | ----------------  |
| Voltage                           | 10–100 µV         |
| Resistance                        | 1–100 kΩ          |
| Current                           | **1–10 nA!**      |

Also, there's a natural low pass filter the scalp provides that attenuate higher frequencies, though I doubt that will be a problem for us given the frequencies necessary for motor decoding (Mu Waves ~10-15Hz).

### Electrode Placement & Spacing

Most rely on the **10-20 standard** configuration (~19 channels) that's been used since we created standards for the use of EEG in the 50s. Foundational discoveries and best practices were made in this standard, so if you want to reep the rewards of all those decades of hard work, it makes perfect sense to base a BCI on this framework. The downside of this reality is that alternative configurations may be overlooked. 

The **10-10** (~64 channels) and **10-5** (~300 channels!) standards increase the number and density of electrodes, while keeping the base electrodes of the 10-20 system intact. This is fantastic for global  —or whole-brain— recording, but we are only concerned with the motor cortex and supporting structures. We can save some cost, set-up time, and reduce complexity by omitting non-motor electrodes. 

#### High Density EEG (hdEEG) Uses

*hdEEG* is not mutually exclusive with 10-10 or 10-5, but usually refers to >100 channel systems. Dense electrode arrays have been used primarily for seizure source localization but signal processing has gotten good enough to where labs are using them to research resting state connectivity! There is research into using hdEEG for BCI applications, but it's still in its infancy and most of what I can find focus on methods to determine and remove redundant electrodes without sacreficing resolution. Likely with the aim of being able to reproduce what we can measure in hdEEG with low-density systems, which are more accessible and less unwieldy.

![Desktop View](/assets/img/post-images/hd-eeg-fig1_webp.png){: width="250" height="250" }
_hdEEG example_

### What this means for us

In short, I'm going to use this project as an oportunity to find the functional limit of electrode density. Focusing on a hyper-dense array in a limited spatial area. hdEEG has a distance between electrodes of **~25-30 mm**, as of writing this, by electrode pcb is designed for **8mm**. I also want to make it modular, so I can swap out electrode configurations on the same system. See the hardware section of this blog for that. 