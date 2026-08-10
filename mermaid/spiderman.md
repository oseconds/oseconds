```mermaid

---
config:
  state:
    titleTopMargin: 20
    dividerMargin: 10
    padding: 12
    textHeight: 14
---

stateDiagram-v2
    direction TB

    %% =========================================================
    %% VISUAL
    %% =========================================================

    [*] --> GENAI
    [*] --> CAVALRY
    [*] --> AFTER_EFFECTS
    [*] --> BLENDER

    GENAI --> GENERATIVE
    CAVALRY --> GENERATIVE
    AFTER_EFFECTS --> 2D
    BLENDER --> 3D

    GENERATIVE --> VISUAL
    2D --> VISUAL
    3D --> VISUAL

    VISUAL --> VISUAL_ANCHOR_1
    VISUAL_ANCHOR_1 --> VISUAL_ANCHOR_2
    VISUAL_ANCHOR_2 --> TOUCHDESIGNER

    VISUAL --> WEB : visual asset
    VISUAL --> P5 : visual data
    VISUAL --> JAVASCRIPT : parameter


    %% =========================================================
    %% AUDIO
    %% =========================================================

    [*] --> MAX
    [*] --> BITWIG

    MAX --> SYNTHESIS
    MAX --> MAX_JAVASCRIPT
    BITWIG --> GENERATIVE_AUDIO

    SYNTHESIS --> AUDIO
    GENERATIVE_AUDIO --> AUDIO

    AUDIO --> AUDIO_ANCHOR
    AUDIO_ANCHOR --> ABLETON

    AUDIO --> WEB_AUDIO : audio data
    AUDIO --> JAVASCRIPT : control data

    MAX_JAVASCRIPT --> MAX
    MAX_JAVASCRIPT --> JAVASCRIPT : bridge
    JAVASCRIPT --> MAX_JAVASCRIPT : control


    %% =========================================================
    %% INTERACTIVE
    %% =========================================================

    [*] --> HARDWARE
    [*] --> SENSORS
    [*] --> TRACKING

    HARDWARE --> INTERACTIVE
    SENSORS --> INTERACTIVE
    TRACKING --> INTERACTIVE

    INTERACTIVE --> INTERACTIVE_ANCHOR

    INTERACTIVE_ANCHOR --> TOUCHDESIGNER
    INTERACTIVE_ANCHOR --> ABLETON

    INTERACTIVE --> JAVASCRIPT : interaction
    INTERACTIVE --> P5 : input
    INTERACTIVE --> WEB : input

    TOUCHDESIGNER --> INTERACTIVE : feedback
    ABLETON --> INTERACTIVE : feedback


    %% =========================================================
    %% WEB
    %% =========================================================

    [*] --> SVELTE
    [*] --> VITE
    [*] --> P5
    [*] --> WEB_AUDIO
    [*] --> JAVASCRIPT

    SVELTE --> WEB
    VITE --> WEB
    P5 --> WEB
    WEB_AUDIO --> WEB
    JAVASCRIPT --> WEB

    WEB --> WEB_ANCHOR
    WEB_ANCHOR --> SIGNAL

    P5 --> JAVASCRIPT : canvas / parameters
    JAVASCRIPT --> P5 : render / update

    WEB_AUDIO --> JAVASCRIPT : audio analysis
    JAVASCRIPT --> WEB_AUDIO : audio control

    WEB --> TOUCHDESIGNER : web control
    WEB --> ABLETON : web audio / control

    SIGNAL --> WEB : realtime feedback


    %% =========================================================
    %% CORE
    %% =========================================================

    TOUCHDESIGNER --> OSC_MIDI
    OSC_MIDI --> ABLETON

    ABLETON --> OSC_MIDI
    OSC_MIDI --> TOUCHDESIGNER

    TOUCHDESIGNER --> JAVASCRIPT : scripting
    JAVASCRIPT --> TOUCHDESIGNER : control

    ABLETON --> JAVASCRIPT : parameter
    JAVASCRIPT --> ABLETON : parameter

    MAX --> TOUCHDESIGNER : processing
    TOUCHDESIGNER --> MAX : control

    MAX --> ABLETON : device / signal
    ABLETON --> MAX : automation

    BITWIG --> ABLETON : audio
    ABLETON --> BITWIG : control


    %% =========================================================
    %% SIGNAL
    %% =========================================================

    TOUCHDESIGNER --> SIGNAL
    ABLETON --> SIGNAL
    JAVASCRIPT --> SIGNAL
    WEB_AUDIO --> SIGNAL

    SIGNAL --> TOUCHDESIGNER : realtime
    SIGNAL --> ABLETON : realtime
    SIGNAL --> JAVASCRIPT : realtime


    %% =========================================================
    %% OUTPUT
    %% =========================================================

    SIGNAL --> MEDIA
    SIGNAL --> INTERACTIVE_OUTPUT
    SIGNAL --> INSTALLATION
    SIGNAL --> LIVE

    MEDIA --> [*]
    INTERACTIVE_OUTPUT --> [*]
    INSTALLATION --> [*]
    LIVE --> [*]


    %% =========================================================
    %% STATE LABELS
    %% =========================================================

    VISUAL : VISUAL
    AUDIO : AUDIO
    INTERACTIVE : INTERACTIVE
    WEB : WEB

    GENERATIVE : GENERATIVE
    2D : 2D
    3D : 3D

    SYNTHESIS : SYNTHESIS
    GENERATIVE_AUDIO : GENERATIVE

    HARDWARE : HARDWARE
    SENSORS : SENSORS
    TRACKING : TRACKING

    JAVASCRIPT : JAVASCRIPT
    MAX_JAVASCRIPT : MAX / JavaScript

    TOUCHDESIGNER : TOUCHDESIGNER
    ABLETON : ABLETON LIVE
    OSC_MIDI : OSC / MIDI

    SIGNAL : CONTROL SIGNAL

    MEDIA : MEDIA
    INTERACTIVE_OUTPUT : INTERACTIVE
    INSTALLATION : INSTALLATION
    LIVE : LIVE
