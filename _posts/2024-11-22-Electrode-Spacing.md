---
title: Electrode Spacing
date: 2024-11-22 17:00:00 +0000
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

I estimate that the area of **my** scalp over the hand knob region is a circle roughly 40mm in diameter. What can we say about the surface at this part of the scalp? Well, there is a slight uneven curve to it. I don't have the ability to measure it accurately so I made a mold out of plaster of paris with help from my dad. The idea is that we can use a positive mold and lay the electrodes over it with a jig and solder them into place. **This is not optimal**, my dad isn't exactly a neurophysiologist and there was a limit to how much I could guide him without looking, so the mold may not have been at precisely the right point but I figure that the curve is more-or-less constant in that general area which allows for some adjustment. It's a prototype. 

![Desktop View](/assets/img/post-images/plaster_back.jpeg){: width="400" height="400" }
_Here's me sitting with my head tilted with my dad applying the plaster_

![Desktop View](/assets/img/post-images/plaster_closeup.jpeg){: width="400" height="400" }
_Here's a closer look, my hair is wet so that it lies flat and there's plastic wrap to keep it from getting messy_

#### Spacing

Let's talk about spacing. As I've said in earlier posts, the chosen inter-electrode distance (IED) is 8mm, comfortably below what is typical for high-density eeg systems. But what about the 2D shape? I chose to use a hexagonal configuration for two reasons. First this means that *ALL* IEDs are 8mm for neighboring electrodes. Square grids would cause diagonals that have a greater length. That geometry unevenly distributes electrodes which creates areas with an unnecessarily long distance to the nearest electrode. Just by shifting each other row horizontally removes these areas without increasing electrode number. Hexagons made of equilateral triangles result in a more even distribution. Second, this shape is tillable. To be fair, so are squares, but relative to other radially symmetric shapes we can just add on more hexagons to increase the recording area. This scalability is important for future iterations where we may include other M1 areas or even somatosensory areas.

![Desktop View](/assets/img/post-images/electrode_diagram.png){: width="400" height="400" }
_Reminder of what our electrode configuration looks like. The red area is the estimated hand knob projection._

There is no real necessity for 19 electrodes, perhaps some are unneeded or the shape should have been oblong. But as stated earlier, this is a prototype. I landed on this because it's entirely reasonable for the target area.

#### Common Reference

As detailed in the Hardware Architecture post, the array will use a common earlobe reference. Each amplifier on the electrode board outputs the *differential* voltage, meaning it needs two inputs and outputs the difference. The earlobe was chosen because that is what's traditional and reasonable, but perhaps it would be better to use a point on the scalp as a common reference, or to not have a common reference at all and have each electrode be compared to a close neighbor. That is something I plan to test, yay again modularity! 