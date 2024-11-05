---
title: Hardware Architecture
date: 2024-11-5 18:00:00 +0000
categories: [Hardware]
description: Pipeline and tech-stack, design and planning
comments: false
include:
  - assets
---

### Pipeline

The job of the hardware is really simple. It has to get the data from the electrodes to the computer in a way that is organized and can function continuously. The difficulty is in designing the circuitry to process the incredibly weak input signals (look to the post I made about EEG limitations for more info). Weak analog signals are subject to analog noise from the outside sources. There's nothing we can do on the hardware side for limiting signals that conduct across the skin like those from facial muscles, but what we can do is amplify the signal as soon as possible to limit the effect of other contaminating analog signals. We need to amplify the signal no matter what, but the term *active electrode* is often used when they are part of the headgear or on the electrodes themselves.

There are only 3 principal components. 

![Desktop View](/assets/img/post-images/hardware_pipeline.png){: width="854" height="480" }
_hdEEG example_
