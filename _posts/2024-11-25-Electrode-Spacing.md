---
title: Electrode Spacing
date: 2024-11-25 18:00:00 +0000
categories: [Hardware]
description: Considerations for electrode board design
comments: false
include:
  - assets
---

#### Limitations and Design

Keeping in mind the limitations of EEG and our target region, we have to consider how to configure the electrode array. To be clear, this is a design decision made as a result of the base reality of the target region and EEG properties. We have to find what is most reasonable to build given these constraints. And, as detailed in the hardware architecture post, the boards are modular so we can swap out different electrode board designs in order to compare them. This will allow us to both more easily discover what configuration performs the best at this scale, and to answer research questions about specific aspects of the design. I figure that we can hold all but one of the following variables constant between board configurations to learn about their specific influence in this application:
- Inter-electrode distance(IED)
- Electrode contact surface area
- Electrode material (gold, Ag/AgCl, polymer)
- Spacing geometry...

#### Location and Mold

I estimate that the area of **my** scalp over the hand knob region is a circle roughly 40mm in diameter. What can we say about the surface at this part of the scalp? Well, there is a slight uneven curve to it. I don't have the ability to measure it accurately so I made a mold out of plaster of paris with help from my dad. The idea is that we can use a positive mold to lay the electrodes over it with a jig and solder them into place. **This is not optimal**, my dad isn't exactly a neurophysiologist and there was a limit to how much I could guide him without looking, so the mold may not have been at precisely the right point but I figure that the curve is more-or-less constant in that general area which allows for some adjustment. It's a prototype. 

![Desktop View](/assets/img/post-images/plaster_back.jpeg){: width="400" height="400" }
_Here's me sitting with my dad applying the plaster_


hexagonal spacing
- consistent distance between electrodes
- scalable
Chosen density was based on what was reasonable for target area
Considerations for reference
- compare ia taking nearest electrode vs. earlobe
- modularity 
 
