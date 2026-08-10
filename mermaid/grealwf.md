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
    %% 01. CODE & BASE INFRASTRUCTURE
    %% =========================================================
    state "01. CODE (Base Infrastructure)" as CODE_SEC {
        JS : JavaScript / TypeScript
        PY : Python
        WEB_APP : Web Systems
        AI_TOOLS : AI / Tools

        JS --> WEB_APP
        PY --> AI_TOOLS
    }


    %% =========================================================
    %% 02. AUDIO PIPELINE (Medium & Control Signal)
    %% =========================================================
    state "02. AUDIO PIPELINE" as AUDIO_SEC {
        ABLETON : Ableton Live
        MAX : Max / MSP
        TIDAL : TidalCycles
        STRUDEL : Strudel
        AUDIO_BUS : Audio Signal

        ABLETON --> MAX
        MAX --> AUDIO_BUS
        TIDAL --> AUDIO_BUS
        STRUDEL --> AUDIO_BUS
    }


    %% =========================================================
    %% 03. VISUAL PIPELINE
    %% =========================================================
    state "03. VISUAL PIPELINE" as VISUAL_SEC {
        TD : TouchDesigner
        P5 : p5.js
        GLSL : GLSL
        BLENDER : Blender

        REALTIME : Realtime Visuals
        WEB_VIS : Web Visuals
        RENDER : 3D / Render

        TD --> REALTIME
        P5 --> WEB_VIS
        GLSL --> WEB_VIS
        BLENDER --> RENDER
    }


    %% =========================================================
    %% 04. GENAI WORKFLOW
    %% =========================================================
    state "04. GENAI PIPELINE" as GENAI_SEC {
        FLUX : FLUX
        SD : Stable Diffusion
        SEEDANCE : Seedance
        KLING : Kling
        H3 : MiniMax H3

        IMG_GEN : Image Generation
        VID_GEN : Video Generation
        COMFY : ComfyUI / Workflows

        FLUX --> IMG_GEN
        SD --> IMG_GEN

        SEEDANCE --> VID_GEN
        KLING --> VID_GEN
        H3 --> VID_GEN

        IMG_GEN --> COMFY
        VID_GEN --> COMFY
    }


    %% =========================================================
    %% 05. INTERACTIVE & CONTROL SYSTEMS (Signal Rack / Void-a)
    %% =========================================================
    state "05. INTERACTIVE SYSTEMS" as INTERACTION_SEC {
        INPUT_HARDWARE : OSC / MIDI / Arduino / Firmata
        USER_IN : User Interaction / Gaze
        SYSTEM_HUB : Interactive Systems Hub<br/>(Signal Rack / Void-a)

        INPUT_HARDWARE --> SYSTEM_HUB
        USER_IN --> SYSTEM_HUB
    }


    %% =========================================================
    %% 06. MEDIA POST-PRODUCTION
    %% =========================================================
    state "06. MEDIA (Post / Delivery)" as MEDIA_SEC {
        AE : After Effects
        PS : Photoshop
        TOPAZ : Topaz
        FINAL_MEDIA : Final Media Output

        AE --> FINAL_MEDIA
        PS --> FINAL_MEDIA
        TOPAZ --> FINAL_MEDIA
    }


    %% =========================================================
    %% 07. LIVE ENVIRONMENT
    %% =========================================================
    state "07. LIVE ENVIRONMENT" as LIVE_SEC {
        LIVE_ENV : Live Environment
        RESOLUME : Resolume
        REKORDBOX : rekordbox

        LIVE_ENV --> RESOLUME
        LIVE_ENV --> REKORDBOX
    }


    %% =========================================================
    %% CROSS-DOMAIN PIPELINE CONNECTIONS (실제 명세 관계)
    %% =========================================================

    %% Code Integration
    WEB_APP --> SYSTEM_HUB
    AI_TOOLS --> GENAI_SEC

    %% Audio Signals -> Systems
    AUDIO_BUS --> VISUAL_SEC : Audio Control Signal
    AUDIO_BUS --> SYSTEM_HUB : Interactive Signal

    %% Visual Streams -> Interactive Systems
    REALTIME --> SYSTEM_HUB
    WEB_VIS --> SYSTEM_HUB
    RENDER --> SYSTEM_HUB

    %% GenAI -> Media Processing
    COMFY --> AE : AI Generated Media
    COMFY --> PS : AI Generated Media
    COMFY --> TOPAZ : AI Generated Media

    %% Interactive Loop
    SYSTEM_HUB --> AUDIO_BUS : Control Update
    SYSTEM_HUB --> VISUAL_SEC : Control Update

    %% Audio / Visual -> Live Output
    AUDIO_BUS --> LIVE_ENV
    REALTIME --> LIVE_ENV
