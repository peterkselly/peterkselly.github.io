---
title: On Generalizability and Next Steps
date: 2024-12-22 23:00:00 +0000
categories: [Planning / Concepts]
description: Model's ability to perform between users and upcoming developments
comments: false
include:
  - assets
---

#### Generalizability

For the foreseeable future there will only be one subject (me). This is looking very very far ahead, but I think it's relevant. 

Turns out people are different from one another, and that's terrible for us. If you've learned anything about EEG in this blog it's that it's very fickle. At the voltages we are working with, it only takes a little interference to reduce EEG's ability to track much of anything. This is a problem for between-trial consistency, where small variations in electrode contact or skin oil content can affect downstream performance. This can be remedied by normalizing data and calibration, things not very difficult to implement. But this gets worse when looking between people which introduces countless variables. Firstly there are physical variations in just about every relevant part of the scalp and cortex. Hair density, dura thickness, cortical geometry, activation characteristics, or shampoo brand could all vary between people and contribute to signal differences. Skull thickness and electrophysiology vary with biological sex. And all the factors that vary between trials that limit consistency do not necessarily affect people similarly. That is to say, the oiliness of one person's hair may have a greater affect on the electrical properties of their scalp than another. A lot of this however is speculation and will have to be tested later.

#### How the model deals with it and limiting annoyance

There are a couple of strategies that may help with generalizability. Per trial calibration could be extensive, so that every input into the model has the same common baseline. The trade off being that it would be annoying. Another option is that everyone trains their own model. This is probably the most annoying, every user would have to initially go though the painful process of feeding *their* model *their* data. We won't know until it's built and I train it myself, but if the ML model scales just like any other model, we can expect this to take the form of wearing the device for long periods and performing repetitive actions while avoiding facial movement and blinking *ideally* as infrequently as possible. Though I expect eyeblink detection to be trivial to implement but I really can't say right now. Lastly, and I'm not sure this is feasible, we could split the difference and construct the model with that is *most* of the way trained on many people. Providing a baseline implicit logic for a final training stage to dial in the specific electrical properties of the user. Here we could up the entropy/temperature so that it is more responsive to the properties of the individual. Turns out every method is annoying. All of this is speculation but very fun!

#### Next steps

I took half a step back from this to get some other work done but right now the main board is in production!!! I have to wait until January for it to arrive from China to test out firmware and configure it for data collection but progress is actually happening. In the meantime I intend to test the electrode board and evaluate if we need electrolyte gel --I hope to god not, that would make everything so messy. Also I am looking for head mounting solutions, something that I can reliably position the electrode array in the exact same position and rotation. For testing though, I'm leaning towards a headband and some zip ties, I hope to take some cute photos of that.