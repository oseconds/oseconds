```mermaid
---
config:
  state:
    titleTopMargin: 12
    dividerMargin: 8
    padding: 10
---

stateDiagram-v2
    direction TB

    %% =========================================================
    %% ROOT ENTRY POINT
    %% =========================================================
    [*] --> ROOT
    state "0seconds / Creative Practice" as ROOT


    %% =========================================================
    %% 1. CONCEPT / DIRECTION STATE
    %% =========================================================
    ROOT --> IDEA
    state "01. CONCEPT & DIRECTION" as IDEA {
        CONCEPT : Concept / Direction
        RESEARCH : Research Pass
        REFS : References & Moods

        CONCEPT --> RESEARCH
        RESEARCH --> REFS
    }


    %% =========================================================
    %% 2. AUDIO SYSTEM STATE
    %% =========================================================
    ROOT --> AUDIO
    state "02. AUDIO SYSTEM" as AUDIO {
        ABLETON : Ableton Live
        MAX : Max / MSP
        STRUDEL : Strudel
        TIDAL : TidalCycles
        RNBO : RNBO C++ Export

        ABLETON --> MAX
        MAX --> RNBO
        TIDAL --> STRUDEL
        STRUDEL --> RNBO
    }


    %% =========================================================
    %% 3. VISUAL SYSTEM STATE
    %% =========================================================
    ROOT --> VISUAL
    state "03. VISUAL SYSTEM" as VISUAL {
        TD : TouchDesigner
        BLENDER : Blender
        P5 : p5.js
        GLSL : GLSL / WebGL
        THREE : Three.js
        HYDRA : Hydra

        P5 --> THREE
        GLSL --> THREE
        HYDRA --> THREE
    }


    %% =========================================================
    %% 4. GENAI PIPELINE STATE
    %% =========================================================
    ROOT --> AI
    state "04. GENAI PIPELINE" as AI {
        COMFY : ComfyUI
        FLUX : FLUX
        SD : Stable Diffusion
        SEED : Seedance
        KLING : Kling AI
        H3 : MiniMax H3

        COMFY --> FLUX
        FLUX --> SD
        SD --> SEED
        SEED --> KLING
        KLING --> H3
    }


    %% =========================================================
    %% 5. LIVE / HARDWARE INTERFACE STATE
    %% =========================================================
    ROOT --> LIVE
    state "05. LIVE & HARDWARE" as LIVE {
        OSC : OSC Protocol
        MIDI : MIDI Protocol
        ARDUINO : Arduino
        FIRMATA : Firmata
        RESOLUME : Resolume Arena
        REKORDBOX : rekordbox

        OSC --> ARDUINO
        MIDI --> RESOLUME
        ARDUINO --> FIRMATA
        REKORDBOX --> RESOLUME
    }


    %% =========================================================
    %% 6. WEB & SYSTEM CORE STATE
    %% =========================================================
    ROOT --> WEB
    state "06. WEB & SYSTEM CORE" as WEB {
        SVELTE : SvelteKit App
        JS : JavaScript / TypeScript
        MD : Markdown Docs
        ARCHIVE : Void-a Archive
        CANDY : Canvas Preview (Candy)
        SIGNAL : Signal Rack

        MD --> ARCHIVE
        SVELTE --> CANDY
        SVELTE --> SIGNAL
        SVELTE --> ARCHIVE
    }


    %% =========================================================
    %% 7. POST / DELIVERY OUTPUT STATE
    %% =========================================================
    state "07. POST & DELIVERY" as MEDIA {
        AE : After Effects
        PS : Photoshop
        TOPAZ : Topaz Video AI
        RENDER : Final Render / Export

        AE --> RENDER
        PS --> RENDER
        TOPAZ --> RENDER
    }


    %% =========================================================
    %% CROSS-DOMAIN PIPELINE CONNECTIONS (이종 시스템간 연결)
    %% =========================================================

    %% Visual -> Media / Web
    TD --> AE
    BLENDER --> AE
    THREE --> SVELTE
    HYDRA --> SVELTE

    %% Audio -> Web
    RNBO --> SVELTE

    %% Live / Hardware -> Web Signal
    FIRMATA --> SIGNAL

    %% Web Systems -> Final Delivery
    CANDY --> RENDER
    SIGNAL --> RENDER

    %% Feedback Loop (아카이브에서 다시 개념/참고자료로 재귀)
    ARCHIVE --> REFS

    %% =========================================================
    %% FINAL OUTLET
    %% =========================================================
    RENDER --> [*]
