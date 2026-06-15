## Vibes or Evals?

I have a strongly-held opinion that evals should be as close as possible to the real calls!

- **collect** REAL data as close to how your model will be used
    - real users, accents, noises, scenarios, etc
    - if untenable, use something like Apptek
- **simulate** REAL calls as closely as possible
    - real streaming, real latency measurements
    - full/unclipped calls !!! never clip
- **measure** the metrics that actually matter for voice agents
    - WER - be *very* thoughtful on normalization, or use LLMaaJ
    - precision/recall on entities or complex terms
    - precision/recall on turn-taking prediction
    - final transcript latency on each turn after the user ends

A corollary to this is that I **detest** that people use leaderboards to make purchasing decisions! This isn’t cope - `ink-2` is … really good on leaderboards :)

<insert pictures - wer, latency, price>

BUT we didn’t design it for leaderboards!! I promise!! We designed it for real voice-agent calls!

Since I can’t get out and collect calls for you that sound like your domain, maybe what I can do is appeal to your ~ vibes ~ which I actually believe are better than leaderboards!

You can get a better idea of where a model excels or falls short just by playing with it for a few minutes! This is better than looking at every single leaderboard… (but worse than extremely thorough evals)

## Vibe Collection Methodology

Shoutout Aiqi who vibe-coded a custom comparer tool for us!

This allows us to play an audio file and watch the transcripts stream out it realtime. It also shows us where each `<end-of-turn>` prediction happened for each provider to compare latency.

*Note: It’s not open-source yet, and we can’t expose it because I think it breaks ToS to run competitors on our website?? I’m a little confused because Soniox has a comparison tool which is incredibly useful … maybe they’re bending these ToS? In any case - if I were a customer I’d be using this tool all the time :)*

I picked 4 competitors to compare against - all of these systems are REALLY GOOD. I picked these competitors because they’re **amazing**, and tons of people love them for building voice agents, and they do well on our internal evals! No shade towards DG, 11L, Assembly, Soniox - these are amazing products too, and for your specific use-case and needs maybe they have something that fits better 🤷 You should eval in the way I described at the top of this post to decide for yourself!

### Cherry-Picking

Are these videos cherry-picked? **Yes!**

But I really didn’t have a hard time picking these cherries - many things you see here are patterns that I actually found to be a surprisingly consistent.

Were there some examples where we got a word wrong and a competitor got it correct? Yes! But for the most part in the categories below `ink-2` really does perform favorably.

---

## Entities

<video 0>

Notes:

- Deepgram Flux turns `5` → `life`
- Assembly struggles hugely in turn-taking prediction
- Ink-2 formatting could be better (we’ll fix this soon)
- Soniox & 11L perfect!! (a little slow on turn-taking but ok)

---

## Turn-Taking

<video 1>

- Ink-2 is pretty good at predicting (via tone & semantics both) when people are pausing to think or when they’re finished talking
- Deepgram does well here too!
- All other providers struggle on turn-taking.
- One bonus - notice how sloowwwww Ink-2 is at the end of the phone number. This is intentional! The model is smart enough that it waits a really long time - it expects more digits :)

---

<video 2>

- Another example that shows how important “semantic” or intelligent turn-detection is!
- The user is clearly not finished with the address after “123”

---

## Background Speech & Crossbleed

<video 3>

- This is simulating a drive-through order for a “Number 5” where there’s music playing in the car
- Note that the goal is NOT to transcribe the music - this is almost never what we want…

---

<video 5>

- Another drive-through example - notice more providers struggle on background speech here

---

<video 4>

- This is an example with crossbleed, where the speakerphone mic is picking up the caller
- In cases like this, we want the ASR to be smart enough to ignore the crossbleed, AND to detect each turn, even though they’re fast and short
- Ink-2 is the only model that does this well :)

---

## Accents

<video 6>

- All providers except deepgram do phenomenal here - kudos!
- I think this is another common theme of DG Flux being incredibly fast and great at turn taking - but not quite as intelligent.

---

## Knowledge & Contextuality

<video 7>

- A fun one - some models are bigger footie fans than others :)
- Taking context into account and having world knowledge is really important for a great transcription system!

---
