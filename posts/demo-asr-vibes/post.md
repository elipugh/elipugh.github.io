## Vibes or Evals?

I have a strongly-held opinion that evals should be as close as possible to the real calls!

- **collect** REAL data as close to how your model will be used
    - real users, accents, noises, scenarios, etc
    - if untenable, use something like Apptek
- **simulate** REAL calls as closely as possible
    - real streaming, real latency measurements
    - full/unclipped calls !!! never clip
- **measure** the metrics that actually matter for voice agents
    - WER - be **very** thoughtful on normalization, or use LLMaaJ
    - precision/recall on entities or complex terms
    - precision/recall on turn-taking prediction
    - final transcript latency on each turn after the user ends

A correlary to this is that I **detest** that people use leaderboards to make purchasing decisions! This isn’t cope - `ink-2` is … really good on leaderboards :)

<insert pictures - wer, latency, price>

BUT we didn’t design it for leaderboards!! I promise!! We designed it for real voice-agent calls!

Since I can’t got out and collect calls for you that sound like your domain, maybe what I can do is appeal to your ~ vibes ~ which I actually believe are better than leaderboards!

You can get a better idea of where a model excels or falls short just by playing with it for a few minutes! This is better than looking at every single leaderboard… (but worse than extremely thorough evals)

## Vibe Collection Methodology

Shoutout Aiqi who vibe-coded a custom comparer tool for us!

This allows us to play an audio file and watch the transcripts stream out it realtime. It also shows us where each `<end-of-turn>` prediction happened for each provider to compare latency.

*Note: It’s not open-source yet, and we can’t expose it because I think it breaks ToS to run competitors on our website?? I’m a little confused because Soniox has a comparison tool which is incredibly useful … maybe they’re bending these ToS? In any case - if I were a customer I’d be using this tool all the time :)*

### Cherry-Picking

Are these videos cherry-picked? **Yes!**

But I really didn’t have a hard time picking these cherries - many things you see here are patterns that I actually found to be a surprisingly consistent.

Were there some examples where we got a word wrong and a competitor got it correct? Yes! But for the most part in the categories below `ink-2` really does perform favorably.

### Entities

<video 0>

### Turn-Taking

<video 1>

<video 2>

### Background Speech & Crossbleed

<video 3>

<video 4>

<video 5>

### Accents

<video 6>

### Knowledge & Contextuality

<video 7>