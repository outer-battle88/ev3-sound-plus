# EV3 Sound+

An extension for Microsoft MakeCode EV3 that embeds custom WAV recordings in a project and plays them through the EV3 speaker.

## Blocks

- **play custom sound [name]** — plays the selected embedded recording.
- **stop custom sound** — stops playback.

The selected source WAVs are converted to canonical PCM WAV: mono, 8,000 Hz, 8-bit unsigned PCM, with a standard 44-byte header. The MakeCode EV3 runtime reads sample data after that 44-byte header.

## Install

Publish this folder as a GitHub repository, then in MakeCode EV3 choose **Extensions** and paste the repository URL.

## Notes

- The audio is embedded in the compiled project; the brick does not need separate sound files.
- Keep clips short to avoid making the compiled program too large.
- This package uses the existing MakeCode EV3 `music.fromWAV`, `Sound.play`, and `music.stopAllSounds` runtime APIs.
- The generated extension should still be compiled in MakeCode and tested on a physical EV3 brick before relying on it.
