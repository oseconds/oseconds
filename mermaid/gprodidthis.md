```mermaid

---
config:
  state:
    titleTopMargin: 10
    dividerMargin: 8
    padding: 8
    nodeSpacing: 10
    rankSpacing: 15
---

stateDiagram-v2
    direction TB

    %% =========================================================
    %% 01. LIVE CODING & SCRIPTING (Foundation Layer)
    %% =========================================================
    state "01. LIVE CODING & SCRIPTING" as SCRIPT_SEC {
        JS_TS : JavaScript / TypeScript
        PY : Python
        STRUDEL : Strudel (JS Live Coding)
        TIDAL : TidalCycles (Live System)

        JS_TS --> STRUDEL : Engine Base
    }

    %% =========================================================
    %% 02. 3D & MOTION ASSETS
    %% =========================================================
    state "02. 3D & MOTION ASSETS" as ASSET_SEC {
        BLENDER : Blender
        CAVALRY : Cavalry
    }

    %% =========================================================
    %% 03. GENAI PIPELINE
    %% =========================================================
    state "03. GENAI PIPELINE" as GENAI_SEC {
        AI_MODELS : FLUX / SD / Kling / H3
        COMFY : ComfyUI Workflows

        AI_MODELS --> COMFY
    }

    %% =========================================================
    %% 04. AUDIO PIPELINE
    %% =========================================================
    state "04. AUDIO PIPELINE" as AUDIO_SEC {
        ABLETON : Ableton Live
        MAX : Max / MSP
        BITWIG : Bitwig Studio

        ABLETON --> MAX
    }

    %% =========================================================
    %% 00. GENERATIVE ART & CORE HUB (Central Integration)
    %% =========================================================
    state "00. GENERATIVE ART & CORE HUB" as CORE_SEC {
        TD : TouchDesigner\n(Main Hub / Media Server / Visuals)
        P5_GLSL : p5.js / GLSL
    }

    %% =========================================================
    %% 05. POST PRODUCTION & TARGET OUTPUTS
    %% =========================================================
    state "05. POST & CREATIVE OUTPUTS" as OUT_SEC {
        POST : After Effects / PS / Topaz
        MEDIA_OUT : Final Media Render
        LIVE_OUT : Live Performance\n(Ableton / TD / Resolume)
        INSTALL_OUT : Physical Installation
        WEB_OUT : Web Systems & Archive

        POST --> MEDIA_OUT
    }

    %% =========================================================
    %% SYSTEM CROSS-ROUTING (다이렉트 연결망)
    %% =========================================================
    
    %% JS & Python Logic
    JS_TS --> P5_GLSL : Web App Logic
    PY --> TD : System Logic & Data processing
    MAX <--> JS_TS : node.script / Bridge

    %% Creative Coding to Audio Sequencing
    STRUDEL --> ABLETON : Algorithmic MIDI
    TIDAL --> ABLETON : Algorithmic OSC

    %% 3D Data to AI & Core
    BLENDER --> AI_MODELS : Camera / Depth / Structure Data
    BLENDER --> POST : 3D Render
    CAVALRY --> TD : Motion Assets

    %% GenAI to Core & Media
    COMFY --> POST : Generated Media
    COMFY --> TD : Realtime GenAI Textures

    %% Audio to Generative Core
    MAX --> TD : Audio-Reactive Sync
    BITWIG --> TD : Audio-Reactive Sync

    %% Core to Final Outputs
    P5_GLSL --> WEB_OUT
    TD --> LIVE_OUT : VJ / Media Server Output
    TD --> INSTALL_OUT : Projection Mapping / Space
    ABLETON --> LIVE_OUT : Audio Output
