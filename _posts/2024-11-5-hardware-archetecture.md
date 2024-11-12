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

The job of the hardware is really simple. It has to get the data from the electrodes to the computer in a way that is organized and can function continuously. The difficulty is in designing the circuitry to process the incredibly weak input signals (look to the post I made about EEG limitations for more info). Weak analog signals are subject to analog noise from the outside sources. There's nothing we can do on the hardware side for limiting signals that conduct across the skin like those from facial muscles —though there's some great blink-detection systems, but what we can do is amplify the signal as soon as possible to limit the effect of other contaminating analog signals. The amplifier, in our case an *instrumentation amplifier(IA)*, needs to be as close as possible to electrode and it needs to be supplied power. We need to amplify the signal in any case, but the term *active electrode* is used for configurations like this when the amplifiers are part of the electrodes themselves, I suppose because they are being actively powered. 

To make it modular, The hardware system is comprized of two boards connected by ribbon cable:
- **Electrode Board:** acquire and amplify
- **Main Board:** digitize and multiplex to USB output

The advantage of this is that we can swap electrode configurations just by plugging in a differently configured electrode board. We can't do much about the gold electrodes(more on that later) but we can also stack all of the expensive components like the ADCs and DSP on the main board to save cost.

![Desktop View](/assets/img/post-images/hardware_pipeline.png){: width="854" height="480" }
_Abstracted pipeline for the hardware system. One electrode board and one main board._

There are only 3 principal components, I told you the job was simple.

### Electrode Board

#### Instrumentation Amplifiers (IA)

The only one on the electrode board. This takes two inputs, the electrode signal and a common earlobe reference, outputting the amplified difference. The earlobe is commonly used for this purpose because there's nothing crazy happening under the skin like with the scalp, we can use this to normalize for the skin and heartbeat. 

![Desktop View](/assets/img/post-images/IMG_1136.png){: width="427" height="240" }
_Electrode board prototype(I know I used the wrong kind of LED). ~6x7cm_

As I wrote earlier, those IAs need to be as close as we can get them to the electrodes. On the board each IA is as close as the pcb design software would let me to a through-hole via, which is where the gold electrodes will be soldered. And I'll get to describing that later. 

![Desktop View](/assets/img/post-images/electrode_diagram.png){: width="427" height="240" }
_electrode spacing_

The configuration of the electrodes is in a hexagonally spaced grid of 19. Each side length of the hex is 8cm, and the vias that connect to each electrode tip are 1mm wide. The red circle is ~40mm in diameter which is my estimated projected area of the *hand knob* region on the scalp. 

### Main Board

#### Analog to Digital Convertors (ADC)

This digitizes the data for us so our computer can interpret it. For our prototype, we're using the AD7177. There's not much to say about this one, all the info about it can be found on the datasheet. There's 5 total since each has 4 pseudo-differential channels for our 19 inputs. Each can be synced using the config defined in the datasheet. Each will have a single serial data out which will be sent to the DSP through an SPI interface.


#### Digital Signal Processor (DSP)

I picked out the ADSP-BF527 for this. The only functions of the DSP as of now is to drive the SPI clock for the ADCs and multiplex the 5 inputs from them to a single USB output. This can be done by writing simple firmware in C, just have to make sure it's filling the write buffers and the timing makes sense. This could certainly be done with a microcontroller to save around 20 bucks but this chip is capable of some signal processing that I could make use of later. I'd like to have some flexibility.
