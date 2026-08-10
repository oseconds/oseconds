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
    %% 01. INLETS / PHYSICAL & USER INPUTS
    %% =========================================================
    [*] --> INPUT

    state "01. INLETS (Physical & User Inputs)" as INPUT {
        [*] --> HARDWARE
        [*] --> SENSORS
        [*] --> TRACKING
        [*] --> WEB_INPUT

        HARDWARE : [inlet 1] Hardware Interface
        SENSORS : [inlet 2] Sensor Stream
        TRACKING : [inlet 3] Spatial Tracking
        WEB_INPUT : [inlet 4] Web Client Event

        HARDWARE --> INTERACTIVE : physical input
        SENSORS --> INTERACTIVE : sensor data
        TRACKING --> INTERACTIVE : tracking data
        WEB_INPUT --> JAVASCRIPT : user input
    }


    %% =========================================================
    %% 02. SUBPATCHER: VISUAL GENERATION
    %% =========================================================
    state "02. [p Visual_Generator]" as VISUAL_SUB {
        GENAI : GenAI (Diffusion/LLM)
        CAVALRY : Cavalry (2D Motion)
        AFTER_EFFECTS : After Effects (Compositing)
        BLENDER : Blender (3D Mesh)

        GENERATIVE : Generative Engine
        VISUAL_2D : 2D Graphics Pass
        VISUAL_3D : 3D Scene Pass
        VISUAL : Visual Bus (Combined)

        GENAI --> GENERATIVE : generate
        CAVALRY --> VISUAL_2D : motion / design
        AFTER_EFFECTS --> VISUAL_2D : compositing
        BLENDER --> VISUAL_3D : 3D render

        GENERATIVE --> VISUAL
        VISUAL_2D --> VISUAL
        VISUAL_3D --> VISUAL
    }

    VISUAL --> VISUAL_ANCHOR_1
    VISUAL_ANCHOR_1 --> VISUAL_ANCHOR_2
    VISUAL_ANCHOR_2 --> TOUCHDESIGNER


    %% =========================================================
    %% 03. SUBPATCHER: AUDIO SYNTHESIS
    %% =========================================================
    state "03. [p Audio_Synthesis]" as AUDIO_SUB {
        MAX : Max / MSP Engine
        BITWIG : Bitwig Studio

        SYNTHESIS : MSP Sound Synthesis
        AUDIO_PROCESS : Audio Processing Bus
        AUDIO : Audio Main Bus

        MAX --> SYNTHESIS : synthesis
        BITWIG --> GENERATIVE : generative audio

        SYNTHESIS --> AUDIO_PROCESS
        GENERATIVE --> AUDIO_PROCESS : generative audio
        AUDIO_PROCESS --> AUDIO
    }

    AUDIO --> AUDIO_ANCHOR
    AUDIO_ANCHOR --> ABLETON


    %% =========================================================
    %% 04. SUBPATCHER: WEB & JAVASCRIPT BRIDGE
    %% =========================================================
    state "04. [p Web_JS_Bridge]" as WEB_SUB {
        SVELTE : Svelte UI Framework
        VITE : Vite Bundler
        P5 : p5.js Canvas
        WEB_AUDIO : Web Audio API
        WEB : Web Domain Bus
        JAVASCRIPT : Central JS Engine [node.script]

        SVELTE --> WEB : UI state
        VITE --> WEB : build
        P5 --> WEB : canvas render
        WEB_AUDIO --> WEB : audio node

        WEB --> JAVASCRIPT : application state

        P5 --> JAVASCRIPT : parameters
        JAVASCRIPT --> P5 : render / update

        WEB_AUDIO --> JAVASCRIPT : analysis
        JAVASCRIPT --> WEB_AUDIO : audio control
    }

    WEB --> WEB_ANCHOR
    WEB_ANCHOR --> SIGNAL


    %% =========================================================
    %% 05. SUBPATCHER: INTERACTIVE CONTROL
    %% =========================================================
    INTERACTIVE : INTERACTIVE Control Bus

    INTERACTIVE --> INTERACTIVE_ANCHOR
    INTERACTIVE_ANCHOR --> TOUCHDESIGNER
    INTERACTIVE_ANCHOR --> ABLETON

    INTERACTIVE --> JAVASCRIPT : interaction state
    INTERACTIVE --> P5 : interaction
    INTERACTIVE --> WEB : browser state


    %% =========================================================
    %% 06. CENTRAL ROUTING & CORE ENGINE (Matrix / OSC / MIDI)
    %% =========================================================
    TOUCHDESIGNER : TouchDesigner (Visual Core)
    ABLETON : Ableton Live (Audio Core)
    OSC_MIDI : [udpsend / udpreceive] OSC / MIDI Router
    MAX_JAVASCRIPT : [js] Max Scripting Object

    TOUCHDESIGNER --> OSC_MIDI : control OSC
    OSC_MIDI --> ABLETON : control MIDI

    ABLETON --> OSC_MIDI : automation MIDI
    OSC_MIDI --> TOUCHDESIGNER : automation OSC

    MAX --> MAX_JAVASCRIPT : scripting
    MAX_JAVASCRIPT --> MAX : internal control

    MAX_JAVASCRIPT --> JAVASCRIPT : node bridge
    JAVASCRIPT --> MAX_JAVASCRIPT : command

    MAX --> TOUCHDESIGNER : processing / spout / syphon
    TOUCHDESIGNER --> MAX : control

    MAX --> ABLETON : Max for Live device
    ABLETON --> MAX : automation


    %% =========================================================
    %% 07. JAVASCRIPT PARAMETER CROSS ROUTING
    %% =========================================================
    JAVASCRIPT --> TOUCHDESIGNER : parameter
    TOUCHDESIGNER --> JAVASCRIPT : state / data

    JAVASCRIPT --> ABLETON : parameter
    ABLETON --> JAVASCRIPT : parameter

    JAVASCRIPT --> MAX : command
    MAX --> JAVASCRIPT : data


    %% =========================================================
    %% 08. REALTIME MATRIX SIGNAL HUB
    %% =========================================================
    SIGNAL : [matrix~] CONTROL SIGNAL HUB

    TOUCHDESIGNER --> SIGNAL : visual signal
    ABLETON --> SIGNAL : audio signal
    JAVASCRIPT --> SIGNAL : web / control signal
    WEB_AUDIO --> SIGNAL : audio analysis
    INTERACTIVE --> SIGNAL : interaction signal

    SIGNAL --> TOUCHDESIGNER : realtime sync
    SIGNAL --> ABLETON : realtime sync
    SIGNAL --> JAVASCRIPT : realtime sync


    %% =========================================================
    %% 09. CROSS DOMAIN MODULATION
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
    %% 10. FEEDBACK LOOPS & RECURSION
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

    AUDIO --> VISUAL : audio-reactive [env~]
    VISUAL --> AUDIO : visual-reactive [jit.analysis]

    TOUCHDESIGNER --> ABLETON : visual → audio
    ABLETON --> TOUCHDESIGNER : audio → visual


    %% =========================================================
    %% 11. OUTLETS / FINAL OUTPUT & HARDWARE FEEDBACK
    %% =========================================================
    MEDIA : [outlet 1] MEDIA
    INTERACTIVE_OUTPUT : [outlet 2] INTERACTIVE
    INSTALLATION : [outlet 3] INSTALLATION
    LIVE : [outlet 4] LIVE

    SIGNAL --> MEDIA : render
    SIGNAL --> INTERACTIVE_OUTPUT : response
    SIGNAL --> INSTALLATION : installation
    SIGNAL --> LIVE : performance

    MEDIA --> VISUAL : revise
    INTERACTIVE_OUTPUT --> INTERACTIVE : feedback
    INSTALLATION --> SENSORS : physical feedback
    LIVE --> AUDIO : performance feedback

    SIGNAL --> INPUT : master feedback loop
