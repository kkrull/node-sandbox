# cucumber.js 8

```gherkin
Feature: Convert EZDrummer 2 track to General MIDI
  As a musician
  I want to convert EZDrummer 2 tracks back and forth with General MIDI
  So that I can maintain flow when moving drum tracks to MuseScore

  Scenario: BamBam should convert EZDrummer 2 tracks to General MIDI
  Given I have exported an EZDrummer 2 track from my DAW, as MIDI
  When I ask BamBam to convert that track to General MIDI
  Then BamBam should create a track that plays back at the same tempo
  And the General MIDI track should play the same drum pattern as the original
  And non-standard notes should be changed to their equivalent in General MIDI
```

## Notes

- Prefer over-simplification over using terminology from the solution domain.
