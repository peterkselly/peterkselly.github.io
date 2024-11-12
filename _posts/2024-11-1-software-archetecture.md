---
title: Software Architecture
date: 2024-11-1 18:00:00 +0000
categories: [Software]
description: Pipeline and tech-stack, design and planning
comments: false
include:
  - assets
---

Most of this is based on the BCI-2000 architecture, an open source C++ project that aims to give researchers tools for BCI studies. I messed around with it and got the demo working, but the more I thought out how the data is going to flow I realized it would be easier to make it myself. BCI-2000, in it's attempt to be generally usable, is a little bloated for my liking. I am replicating their module-based flow however.

### Pipeline

![Desktop View](/assets/img/post-images/software%20pipeline.png){: width="854" height="480" }
_Pipeline for software side with noted state of the data along each step_

#### Signal Acquisition Module (SAM)

The job of this module is to acquire the data from the hardware device and organize it in a way that is interpretable. Via USB it receives a serial stream of 32-bit fixed-point voltage conversions of each channel in real-time, meaning they are de facto ordered by time too. The firmware on the DSP chip I'm using will multiplex the ADCs in a defined and predictable way. It's job then is to fill 19 1-D arrays, one per channel, with these voltage values until the arrays get to a defined size. Then it sends those arrays to the next module.

#### Signal Processing Module (SPM)

This is where all the transforms and ML will occur. The hardware isn't finalized so this design is not as developed as the others. But the basic flow will be to convert the data into the time-frequency domain using wavelet transform or wavelet packet decomposition. Then the coefficients can be fed into a **feature vector** that can act as the input for a neural net. The model will then output deterministic or perhaps probabilistic classifications of motor movements. I have an idea of the filters I'm going to use but I want to see what the data looks like first before deciding on the exact characteristics of the model.  

#### GUI Module (GUI)

This is just to present and record the raw data and model output graphically. There are many C++/Python libraries to choose from.

### Stack

DSP Firmware: C

SAM: C++

SPM: C++, Wavelet2d, pytorch, CUDA

GUI: python GUI libraries or C++/ImGUI