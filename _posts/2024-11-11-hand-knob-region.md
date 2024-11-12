---
title: Hand Knob Region
date: 2024-11-11 18:00:00 +0000
categories: [Planning / Concepts]
description: Considerations for the targeted structure
comments: false
include:
  - assets
---

#### Location and Background

The **hand knob region** refers to a structure in the precentral gyrus AKA the primary motor cortex (M1) and is linked to hand movement, located around C4 on the 10-20 system. The primary motor cortex more broadly is a strip of cortical tissue that roughly runs along the top of the brain from ear to ear. This system is where motor commands that are sent to the spinal cord originate from. Back in the 1930s, stimulation research led to motor mapping of the cortex. We can now identify which areas of the primary motor cortex command which muscle groups with some accuracy, though the hand knob specifically was documented in the 90s. If you've ever taken an intro psych class you have probably seen the motor homunculus that came from this research. 

![Desktop View](/assets/img/post-images/handknob.png){: width="500" height="500" }
_Great figure of hand knob region from https://doi.org/10.3390/medicina60020318_

![Desktop View](/assets/img/post-images/handknob2.jpg){: width="500" height="500" }
_Annotated image of hand knob region from x.com/drharunyildiz_

It's often said to have an "omega-shaped" appearance, hence the *knobby* name. Let's consider the 3D structure a little more. Remember from the EEG limitations post that EEG only works due to how the pyramidal neurons are all stacked side-by-side like toothpicks. The toothpick stack becomes polar from activation and so generates magnetic field, but the field can be canceled out by an opposing stack as well. So on the cortex with ridges and valleys, activation can be canceled out. It's 3D shape determines what can surfaces of the knob we can read a signal from and what surfaces we cant. Knowing that, what if I told you that not everyone's hand knob is shaped the same. I expect this to be a big hurdle for generalizability.

![Desktop View](/assets/img/post-images/gyrus.png){: width="450" height="450" }
_General structure of cortical geometry_

![Desktop View](/assets/img/post-images/knobby_varieties.png){: width="500" height="500" }
_Different knob types from https://doi.org/10.3390/medicina60020318 again_

This is speaking broadly about regions, and it's not particularly useful at high resolution. [Willet et al. (2020)](https://doi.org/10.1016/j.cell.2020.02.043) even found that the hand knob has non-hand related movements encoded within it. This is all to say that this should all be taken with a grain of salt. The downside of working with the most complicated object in the known universe is that these assumptions become more or less true depending on certain conditions or the scale at which you analyze. At the scale of this project specifically, working with the assumption that the motor maps are accurate should do just fine. Also, much of this background has been pulled from clinical studies of downstream motor effects of focal M1 lesions. Look into those if you're more interested.

#### Proprioception - a fun lil aside

*Theoretically* we could also decode hand movement through proprioception, the sense we have for body position. If you close your eyes, you still have an innate sense of where your limbs or located and positioned even without tactile input. This is because of little mechanoreceptors in your muscle spindles and tendons. One could imagine a BCI that works off of this muscle positioning data to determine movement.

### What this means for us

Since we are interested in specifically hand movement, motor maps let us increase our precision and reduce the area of recording, thus increasing electrode density. With the noted assumptions we can focus our efforts on the hand knob region and ignore the rest of the cortex. On some back-of-the-napkin math I estimated that my hand knob projected onto my scalp is a circle roughly 40mm in diameter. From that I designed the electrode array as it is, and I'll talk about that in a later post as the main board schematic is finalized.
