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
    %% 01. CODE (Foundation)
    %% =========================================================
    state "01. CODE (Foundation)" as CODE_SEC {
        JS_TS : JavaScript / TypeScript
        PY : Python
    }


    %% =========================================================
    %% 02. AUDIO PIPELINE (Medium & Control)
    %% =========================================================
    state "02. AUDIO PIPELINE" as AUDIO_SEC {
        ABLETON : Ableton Live
        MAX : Max / MSP
        CODE_AUDIO : TidalCycles / Strudel
        AUDIO_BUS : Audio Signal

        ABLETON --> MAX
        MAX --> AUDIO_BUS
        CODE_AUDIO --> AUDIO_BUS
    }


    %% =========================================================
    %% 03. VISUAL PIPELINE
    %% =========================================================
    state "03. VISUAL PIPELINE" as VISUAL_SEC {
        TD : TouchDesigner
        P5_GLSL : p5.js / GLSL
        BLENDER : Blender

        REALTIME : Realtime Visuals
        WEB_VIS : Web Visuals
        RENDER : 3D / Render

        TD --> REALTIME
        P5_GLSL --> WEB_VIS
        BLENDER --> RENDER
    }


    %% =========================================================
    %% 04. GENAI & MEDIA POST
    %% =========================================================
    state "04. GENAI & MEDIA PIPELINE" as GENAI_MEDIA_SEC {
        AI_MODELS : FLUX / SD / Seedance / Kling / H3
        COMFY : ComfyUI Workflows
        POST : After Effects / PS / Topaz

        AI_MODELS --> COMFY
        COMFY --> POST : AI Generated Media
    }


    %% =========================================================
    %% 05. INTERACTIVE SYSTEMS (Central Hub)
    %% =========================================================
    state "05. INTERACTIVE SYSTEMS" as HUB_SEC {
        HARDWARE : OSC / MIDI / Arduino / Firmata
        USER_IN : User Interaction
        SIGNAL_RACK : Signal Rack / System Logic

        HARDWARE --> SIGNAL_RACK : Input
        USER_IN --> SIGNAL_RACK : Interaction
    }


    %% =========================================================
    %% 06. CREATIVE EXPERIENCES (Target Outputs)
    %% =========================================================
    state "06. CREATIVE EXPERIENCES (Outputs)" as OUTPUT_SEC {
        MEDIA_OUT : Final Media
        LIVE_OUT : Live (Ableton / TD / Resolume / rekordbox)
        INSTALLATION_OUT : Physical Installation
        INTERACTIVE_OUT : Interactive Systems
        WEB_OUT : Web (Void-a Archive)
    }


    %% =========================================================
    %% PIPELINE CONNECTIONS (정제된 흐름)
    %% =========================================================

    %% Code -> Target Domains
    JS_TS --> WEB_VIS
    PY --> AI_MODELS

    %% Render -> Media Post
    RENDER --> POST

    %% Signal Rack Update Loops (README 명세 반영)
    %% Input -> System -> Audio / Visual Update
    AUDIO_BUS --> SIGNAL_RACK
    REALTIME --> SIGNAL_RACK
    WEB_VIS --> SIGNAL_RACK

    SIGNAL_RACK --> AUDIO_BUS : Control Update
    SIGNAL_RACK --> REALTIME : Control Update


    %% =========================================================
    %% FINAL OUTFLOW
    %% =========================================================
    
    POST --> MEDIA_OUT

    AUDIO_BUS --> LIVE_OUT
    REALTIME --> LIVE_OUT

    SIGNAL_RACK --> INSTALLATION_OUT
    SIGNAL_RACK --> INTERACTIVE_OUT
    SIGNAL_RACK --> WEB_OUT
