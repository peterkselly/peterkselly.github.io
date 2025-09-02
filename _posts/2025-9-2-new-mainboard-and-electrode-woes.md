---
title: New Mainboard and Electrode Woes
date: 2025-9-02 10:00:00 +0000
categories: [Hardware]
description: Take a look at the new mainboard and hear about my electrode board issue.
comments: false
include:
  - assets
---

It's been a minute since I've posted here. Since my last post I got into the UMich biomedical engineering masters program, designed and fabricated the main board, and had some setbacks with getting a signal from the electrode board.

### Glorious Mainboard

A ton of work has gone into this. The datasheets for the DSP and ADCs were far more complicated than the amplifiers on the electrode board. There are far more delicate ways to potentially screw up the design layout so I took my time. The main hang ups were timing out the clock rate with especially the SPI interface(ADC -> DSP), and I've never designed a PCB with a ball grid (BGA) chip before so the sheer number of pins and voltage ratings were difficult to manage. I do think It turned out well all things considered, but I have no practical reason to test it until the electrode board outputs within the normal voltage range —more on that later. 

![Desktop View](/assets/img/post-images/mainboardv1.jpg){: width="400" height="400" }
_A sight to behold aslong as you don't behold the back_

There are a couple of features I'm proud of, like the boot switch to run with a firmware loaded onto an EEPROM (which I'll have to write). The JTAG header will be crazy useful for debugging that particularly, I can do a full boundary scan of the DSP with this, letting me see exactly what each pin is doing. Again, this may take time to get to.

### Electrode Board Setbacks
I have been having trouble getting the amplifiers to output a signal within the rails(0 & 5V). It's not a severe problem, I suspect that the reason for this is that both inputs(electrode tip & earlobe reference) are floating. And since we amplify the signal so much it gets lost since the DC offset, which is much larger, is also amplified. I, suspect this can be solved by putting a low-pass filter between the electrode tip and the amp. It's almost like most designs do it that way and it could have been designed into the PCB in the first place —oops. Not a big deal, I just have to cut the trace with an X-acto knife (Am I the only one who thought it was spelled "exacto"?) and solder on a series resistor and a capacitor to GND. I did make that trace as short as possible on purpose so it will be a precise solder-job. It just might look a bit ratty on top now depending on how surgical I am that day. I have most of the stuff I need in my new place now so I'll get to it. 

Also If I were to fab it again I would replace at least one gain-setting resistor with a potentiometer, it would make troubleshooting WAAY easier.


![Desktop View](/assets/img/post-images/electrodezoom.png){: width="400" height="400" }
_exactly where I will have to solder_

## Next steps
I have to solder the electrode board and get it to output a detectible signal. Then, I'll have to write the firmware for the mainboard and start testing that.
