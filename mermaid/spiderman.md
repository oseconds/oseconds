```mermaid

---
config:
  state:
    titleTopMargin: 20
    dividerMargin: 12
    padding: 14
---

stateDiagram-v2
    direction TB


    %% =========================================================
    %% INPUT
    %% =========================================================

    [*] --> INPUT

    state INPUT {

        [*] --> HARDWARE
        [*] --> SENSORS
        [*] --> TRACKING
        [*] --> WEB_INPUT

        HARDWARE : HARDWARE
        SENSORS : SENSORS
        TRACKING : TRACKING
        WEB_INPUT : WEB INPUT

        HARDWARE --> INTERACTIVE : physical input
        SENSORS --> INTERACTIVE : sensor data
        TRACKING --> INTERACTIVE : tracking data
        WEB_INPUT --> JAVASCRIPT : user input
    }


    %% =========================================================
    %% VISUAL
    %% =========================================================

    GENAI : GENAI
    CAVALRY : CAVALRY
    AFTER_EFFECTS : AFTER EFFECTS
    BLENDER : BLENDER

    GENERATIVE : GENERATIVE
    VISUAL_2D : 2D
    VISUAL_3D : 3D

    VISUAL : VISUAL

    GENAI --> GENERATIVE : generate
    CAVALRY --> VISUAL_2D : motion / design
    AFTER_EFFECTS --> VISUAL_2D : compositing
    BLENDER --> VISUAL_3D : 3D

    GENERATIVE --> VISUAL
    VISUAL_2D --> VISUAL
    VISUAL_3D --> VISUAL

    VISUAL --> VISUAL_ANCHOR_1
    VISUAL_ANCHOR_1 --> VISUAL_ANCHOR_2
    VISUAL_ANCHOR_2 --> TOUCHDESIGNER


    %% =========================================================
    %% AUDIO
    %% =========================================================

    MAX : MAX
    BITWIG : BITWIG

    SYNTHESIS : SYNTHESIS
    AUDIO_PROCESS : PROCESS
    AUDIO : AUDIO

    MAX --> SYNTHESIS : synthesis
    BITWIG --> GENERATIVE : generative audio

    SYNTHESIS --> AUDIO_PROCESS
    GENERATIVE --> AUDIO_PROCESS : generative audio

    AUDIO_PROCESS --> AUDIO

    AUDIO --> AUDIO_ANCHOR
    AUDIO_ANCHOR --> ABLETON


    %% =========================================================
    %% WEB
    %% =========================================================

    SVELTE : SVELTE
    VITE : VITE
    P5 : p5.js
    WEB_AUDIO : WEB AUDIO
    WEB : WEB
    JAVASCRIPT : JAVASCRIPT

    SVELTE --> WEB : UI
    VITE --> WEB : build
    P5 --> WEB : canvas
    WEB_AUDIO --> WEB : audio

    WEB --> JAVASCRIPT : application state

    P5 --> JAVASCRIPT : parameters
    JAVASCRIPT --> P5 : render / update

    WEB_AUDIO --> JAVASCRIPT : analysis
    JAVASCRIPT --> WEB_AUDIO : audio control

    WEB --> WEB_ANCHOR
    WEB_ANCHOR --> SIGNAL


    %% =========================================================
    %% INTERACTIVE
    %% =========================================================

    INTERACTIVE : INTERACTIVE

    INTERACTIVE --> INTERACTIVE_ANCHOR

    INTERACTIVE_ANCHOR --> TOUCHDESIGNER
    INTERACTIVE_ANCHOR --> ABLETON

    INTERACTIVE --> JAVASCRIPT : interaction state
    INTERACTIVE --> P5 : interaction
    INTERACTIVE --> WEB : browser state


    %% =========================================================
    %% CORE
    %% =========================================================

    TOUCHDESIGNER : TOUCHDESIGNER
    ABLETON : ABLETON LIVE
    OSC_MIDI : OSC / MIDI
    MAX_JAVASCRIPT : MAX / JavaScript

    TOUCHDESIGNER --> OSC_MIDI : control
    OSC_MIDI --> ABLETON : control

    ABLETON --> OSC_MIDI : automation
    OSC_MIDI --> TOUCHDESIGNER : automation

    MAX --> MAX_JAVASCRIPT : scripting
    MAX_JAVASCRIPT --> MAX : internal control

    MAX_JAVASCRIPT --> JAVASCRIPT : bridge
    JAVASCRIPT --> MAX_JAVASCRIPT : command

    MAX --> TOUCHDESIGNER : processing
    TOUCHDESIGNER --> MAX : control

    MAX --> ABLETON : device / signal
    ABLETON --> MAX : automation


    %% =========================================================
    %% JAVASCRIPT CROSS SYSTEM
    %% =========================================================

    JAVASCRIPT --> TOUCHDESIGNER : parameter
    TOUCHDESIGNER --> JAVASCRIPT : state / data

    JAVASCRIPT --> ABLETON : parameter
    ABLETON --> JAVASCRIPT : parameter

    JAVASCRIPT --> MAX : command
    MAX --> JAVASCRIPT : data


    %% =========================================================
    %% REALTIME SIGNAL
    %% =========================================================

    SIGNAL : CONTROL SIGNAL

    TOUCHDESIGNER --> SIGNAL : visual signal
    ABLETON --> SIGNAL : audio signal
    JAVASCRIPT --> SIGNAL : web / control signal
    WEB_AUDIO --> SIGNAL : audio analysis
    INTERACTIVE --> SIGNAL : interaction signal

    SIGNAL --> TOUCHDESIGNER : realtime
    SIGNAL --> ABLETON : realtime
    SIGNAL --> JAVASCRIPT : realtime


    %% =========================================================
    %% CROSS DOMAIN
    %% =========================================================

    VISUAL --> WEB : visual data
    VISUAL --> P5 : visual parameters
    VISUAL --> JAVASCRIPT : visual state

    AUDIO --> WEB_AUDIO : audio data
    AUDIO --> JAVASCRIPT : audio state

    TOUCHDESIGNER --> VISUAL : render feedback
    TOUCHDESIGNER --> VISUAL_2D : realtime visual
    TOUCHDESIGNER --> VISUAL_3D : realtime visual

    ABLETON --> AUDIO : realtime audio
    ABLETON --> SYNTHESIS : synthesis control

    P5 --> TOUCHDESIGNER : visual control
    TOUCHDESIGNER --> P5 : visual feedback

    WEB_AUDIO --> ABLETON : browser audio
    ABLETON --> WEB_AUDIO : audio feedback


    %% =========================================================
    %% OUTPUT
    %% =========================================================

    MEDIA : MEDIA
    INTERACTIVE_OUTPUT : INTERACTIVE
    INSTALLATION : INSTALLATION
    LIVE : LIVE

    SIGNAL --> MEDIA : render
    SIGNAL --> INTERACTIVE_OUTPUT : response
    SIGNAL --> INSTALLATION : installation
    SIGNAL --> LIVE : performance

    MEDIA --> VISUAL : revise
    INTERACTIVE_OUTPUT --> INTERACTIVE : feedback
    INSTALLATION --> SENSORS : physical feedback
    LIVE --> AUDIO : performance feedback


    %% =========================================================
    %% FEEDBACK LOOPS
    %% =========================================================

    INTERACTIVE --> AUDIO : trigger
    INTERACTIVE --> VISUAL : trigger

    SENSORS --> AUDIO : modulation
    SENSORS --> VISUAL : modulation

    TRACKING --> VISUAL : spatial control
    TRACKING --> AUDIO : spatial control

    WEB --> INTERACTIVE : remote control
    WEB --> VISUAL : parameter update
    WEB --> AUDIO : parameter update

    AUDIO --> VISUAL : audio-reactive
    VISUAL --> AUDIO : visual-reactive

    TOUCHDESIGNER --> ABLETON : visual → audio
    ABLETON --> TOUCHDESIGNER : audio → visual

    SIGNAL --> INPUT : feedback
