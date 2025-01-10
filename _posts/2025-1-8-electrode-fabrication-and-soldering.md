---
title: Electrode Fabrication And Soldering
date: 2025-1-08 10:00:00 +0000
categories: [Hardware]
description: Finalizing the electrode board with popsicle sticks and silly putty.
comments: false
include:
  - assets
---

### Making the Electrodes

The electrodes are made from a few inches of round gold wire I got from a jewelry supply store, same diameter as the through-hole vias on the board. The issue though is that conductance --and so signal quality-- is proportional with electrode tip surface area. So with a lot of help from my Dad and his tools, I hammered out tips of the wire in a jig made from layers of brass (harder than the gold alloy, but easier to work with then steel).


![Desktop View](/assets/img/post-images/electrode_fab/brassfab_drawing.png){: width="400" height="400" }
_Drawing of how the gold was hammered into shape_

![Desktop View](/assets/img/post-images/electrode_fab/IMG_1317.png){: width="400" height="400" }
_Brass jig_

For the amount of material that had to be flattened, it made sense to do it it multiple passes. Otherwise, the wire would bend at an angle out of the mold instead of flattening. This is cold forging, we tried heating the gold up to make it more malleable to form the initial head but the pieces were too small. We lost one tip by melting it and we did not have material to spare. The layers of the jig allowed us to configure different stacks. The top plate remained the same (you can see how beat up it is) while we could swap out the bottom plate and vary the number of intermediate plates to get many hole depths. In the end, we found 4 passes to be consistent. That does not mean that the tips are perfect or particularly pretty like in my beautiful drawing. Most look like railroad spikes
 with elliptical heads, though I don't think the electrons will care.

![Desktop View](/assets/img/post-images/electrode_fab/IMG_1302.png){: width="400" height="400" }
_Electrodes within the board. A sheet of teflon will protect the board from scalp oil and has a firm friction-fit with the electrode stems, making it easier to set depth_

![Desktop View](/assets/img/post-images/electrode_fab/IMG_1305.png){: width="400" height="400" }
_Different angle_

#### Setting depth to fit the curve of the mold

As I wrote in a previous post, I have a paster mold of my scalp around the C4 of the 10-20 system. The next task was setting the depth using that mold so that It forms a comfortable curve over my scalp. That meant positioning the board securely above the mold and pushing the electrodes down to meet the curve of the mold. This way once I set that depth by soldering I should get a really good approximation for my head.

![Desktop View](/assets/img/post-images/electrode_fab/IMG_1307.png){: width="400" height="400" }
_A pretty sick vice holds the board in place over the mold. I was pretty off center with the mold after a second look so the popsicle sticks set the board to be a tangent plane over C4_

![Desktop View](/assets/img/post-images/electrode_fab/IMG_1312.png){: width="400" height="400" }
_I had trouble getting a consistent position after moving and adjusting board every so often. So using more popsicle sticks and hot glue I made a corner for it to slot into_

#### Silly putty and soldering into place

It's really hard to see what's going on with the electrode tips, even with shining light down there I would *discover* gaps between the tips and the mold after thinking they were touching. The solution I came to was to lay a very flat layer of silly putty over the mold area. This way I can lay the board flat over the mold and see in the depressions created, which electrodes are touching the mold and which are hovering above.

![Desktop View](/assets/img/post-images/electrode_fab/IMG_1310.png){: width="400" height="400" }
_Depressions made early on, you can see there are still hovering electrodes on the left and shallow dimples for the bottom center tips_

![Desktop View](/assets/img/post-images/electrode_fab/IMG_1313.png){: width="400" height="400" }
_Final dimples, every electrode lays over the curve making a depression in the putty_

![Desktop View](/assets/img/post-images/electrode_fab/IMG_1314.png){: width="400" height="400" }
_Soldered surface of the electrode board. A little messy on some of them since I had to reflow the solder to reset the depth after the discoveries I mentioned earlier_

![Desktop View](/assets/img/post-images/electrode_fab/IMG_1315.png){: width="400" height="400" }
_Final depths, approximately 5mm of a gap between the tips and the teflon. This "hair gap" is more then enough for me_

#### Next steps

Right now all I can really do is comb my hair with it. I plan on testing the electrical properties with and without electrode gel with an oscilloscope.