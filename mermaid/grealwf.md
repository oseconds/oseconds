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
    %% 01. CODE & FOUNDATION
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
        AUDIO_BUS : Audio Signal Bus

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
        IMG_MODELS : FLUX / Stable Diffusion
        VID_MODELS : Seedance / Kling / MiniMax H3
        COMFY : ComfyUI Workflows
        POST : After Effects / PS / Topaz

        IMG_MODELS --> COMFY : Image Gen
        VID_MODELS --> COMFY : Video Gen
        COMFY --> POST : AI Generated Media
    }


    %% =========================================================
    %% 05. INTERACTIVE SYSTEMS (Central Hub)
    %% =========================================================
    state "05. INTERACTIVE SYSTEMS HUB" as HUB_SEC {
        HARDWARE : OSC / MIDI / Arduino / Firmata
        USER_IN : User Interaction / Gaze
        SYSTEM_HUB : Signal Rack / Logic Engine

        HARDWARE --> SYSTEM_HUB : Sensor / HW Control
        USER_IN --> SYSTEM_HUB : Trigger / Input
    }


    %% =========================================================
    %% 06. CREATIVE EXPERIENCES (Target Outputs)
    %% =========================================================
    state "06. CREATIVE EXPERIENCES (Outputs)" as OUTPUT_SEC {
        MEDIA_OUT : Media (Final Render)
        LIVE_OUT : Live (Resolume / rekordbox)
        INSTALLATION_OUT : Physical Installation
        INTERACTIVE_OUT : Interactive Application
        WEB_OUT : Web (Void-a / Candy)
    }


    %% =========================================================
    %% CROSS-DOMAIN ROUTING
    %% =========================================================

    %% Code Integration
    JS_TS --> WEB_VIS
    JS_TS --> SYSTEM_HUB
    PY --> COMFY

    %% Audio & Visual to Hub
    AUDIO_BUS --> SYSTEM_HUB : Control Update
    REALTIME --> SYSTEM_HUB
    WEB_VIS --> SYSTEM_HUB

    %% Hub Feedback & Processing
    SYSTEM_HUB --> AUDIO_BUS : Reactive Sync
    SYSTEM_HUB --> REALTIME : Reactive Sync
    RENDER --> POST : Rendered Sequence


    %% =========================================================
    %% OUTFLOW TO OUTPUTS (최종 도달점)
    %% =========================================================

    %% 1. Media
    POST --> MEDIA_OUT

    %% 2. Live Environment
    AUDIO_BUS --> LIVE_OUT
    REALTIME --> LIVE_OUT

    %% 3. Physical Installation
    SYSTEM_HUB --> INSTALLATION_OUT : Hardware Loop & Space

    %% 4. Interactive Systems
    SYSTEM_HUB --> INTERACTIVE_OUT : Digital Logic & State

    %% 5. Web Systems
    SYSTEM_HUB --> WEB_OUT : System Archive & Logic
    WEB_VIS --> WEB_OUT : Canvas Render
