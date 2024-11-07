---
title: Signal Processing
date: 2024-11-6 18:00:00 +0000
categories: [Software]
description: Turning raw voltage data into time-frequency 
comments: false
include:
  - assets
---

### Raw = Bad

The raw voltages we get from the hardware are not entirely usable. As detailed in the EEG limitations post, this only tells us the *"net activity"* of the cortex under the electrode. This net activity has limits to what we can interpret from it and is not necessarily a measure of computation, or in our case, motor commands. To make a computer/information theory analogy, a chip with billions of transistors all set to a value of 1 at a particular clock cycle does not fundamentally hold more information, and so cannot do more computation, than a single transistor. A singular datapoint of voltage that is extraordinarily high works the same. All it tells us is that there are more 1s on the chip. Because of how the brain works, what we really care about are the patterns of synchronized firings over time. 

Lets unpack that "patterns of synchronized firings over time". Focusing on the patterns of synchronization part, these can be measured through converting that data into the frequency domain. You can take that messy input signal and traditionally do a fourier transform to decompose it into its frequency components at the expense of time resolution. I won't get into the math but this gives us the relative strength at each frequency, or in english, we can tell how many neurons have synchronized firing rates at 10Hz, or 20Hz etc. Decades of research has gone into learning which processes are performed at which frequencies or what we can predict about cognition given relative strengths between levels. It's all encoded in there somewhere, it's all a matter of ensuring we have the right resolution to predict with confidence. If you look into it a lot of the research is in sleep and meditation, I suspect because sleep studies inherently make it easier to control the environment and can gives you hours of data with relatively low contamination of the signal by facial muscles or motion artifacts. And it looks like power at slower frequencies are being used as a measure of meditative state.

![Desktop View](/assets/img/post-images/Brain-Waves-Frequencies.png){: width="700" height="700" }
_Great diagram of the different brain waves from DOI: 10.1109/BioCAS.2012.6418422_

Then it's just a matter of getting the strengths of each component frequency **over time**. The typical fourier transform loses time resolution. It actually assumes that the signal is composed of standing waves, which it certainly is not. The fourier transforms in the frequency research I mentioned earlier are usually done over the average of many trials put together. That's fine if you're concerned about brain state, but our application is real-time and we care about motor commands/imagery which are timed events, not states of mind. Our processing has to have some time resolution to it. Or more accurately, we have to calculate frequencies over a temporal window rather than on the most recent voltage value, for example let's say the last 100ms. What we are truly looking for is **time-frequency analysis.**

### Time-Frequency Analysis

Math is not my realm, I can't do the math justice in an explanation so I'm gonna keep this conceptual. This flavor of math lets us take a messy raw signal and decompose it's frequencies while maintaining some temporal resolution. There are a couple of transforms/algorithms that lets us do this that include wavelet transforms (discrete and continuous), wavelet packet analysis, and Hilbert-Huang transform. 

![Desktop View](/assets/img/post-images/raweeg.png){: width="700" height="700" }
_Quick example of raw EEG data I generated with ai_

![Desktop View](/assets/img/post-images/tfeeg.png){: width="700" height="700" }
_Discrete Wavelet Transform (DWT) done on the generated data. You can see the 40Hz band increase dramatically twice and how that presents in both graphs. This pattern is much more difficult to make out from the raw._

![Desktop View](/assets/img/post-images/time_frequency_heatmap.png){: width="700" height="700" }
_Here's some actual real eeg data I got from the BCI Competition IV dataset. Discrete Wavelet Transform (DWT) again using the Morlet wavelet. No ai this time so it's labeled correctly_

### What this means for us

The exact transform and window size we're going to use is not decided, that will depend on what the data from the hardware looks like and I plan to do an exhaustive comparison of these factors when the time comes. We are doing 19 transforms at once which I expect to be computationally demanding, potentially limiting the frequency of the whole system. But conceptually, what we can do with the time-frequency data is bin it so that we get a list of values of the strengths of each frequency band at each time point. Those values can then fill an input vector for the ML model, which after training should implicitly know what patterns of synchronization map to which motor commands.