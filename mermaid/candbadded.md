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
    %% 01. CODE & SCRIPTING
    %% =========================================================
    state "01. CODE & SCRIPTING" as CODE_SEC {
        JS_TS : JavaScript / TypeScript
        PY : Python
        P5 : p5.js Canvas

        JS_TS --> P5 : JS Controller / Scripting
    }


    %% =========================================================
    %% 02. AUDIO PIPELINE
    %% =========================================================
    state "02. AUDIO PIPELINE" as AUDIO_SEC {
        ABLETON : Ableton Live
        BITWIG : Bitwig Studio
        MAX : Max / MSP
        CODE_AUDIO : TidalCycles / Strudel
        AUDIO_BUS : Audio Signal Bus

        ABLETON --> MAX
        BITWIG --> AUDIO_BUS
        MAX --> AUDIO_BUS
        CODE_AUDIO --> AUDIO_BUS
        
        %% Max <-> JavaScript Bridge
        MAX <--> JS_TS : node.script / JS Bridge
    }


    %% =========================================================
    %% 03. VISUAL PIPELINE
    %% =========================================================
    state "03. VISUAL PIPELINE" as VISUAL_SEC {
        TD : TouchDesigner
        CAVALRY : Cavalry (2D Motion)
        BLENDER : Blender
        GLSL : GLSL / WebGL

        REALTIME : Realtime Visuals
        RENDER : 3D / Render

        CAVALRY --> TD : 2D Motion / Asset Flow
        BLENDER --> RENDER
        TD --> REALTIME
    }


    %% =========================================================
    %% 04. GENAI & MEDIA PIPELINE
    %% =========================================================
    state "04. GENAI & MEDIA PIPELINE" as GENAI_MEDIA_SEC {
        AI_MODELS : FLUX / SD / Seedance / Kling / H3
        COMFY : ComfyUI Workflows
        POST : After Effects / PS / Topaz

        AI_MODELS --> COMFY
        COMFY --> POST : AI Generated Media
        COMFY --> TD : GenAI Media as TD Texture Input
    }


    %% =========================================================
    %% 05. INTERACTIVE SYSTEMS
    %% =========================================================
    state "05. INTERACTIVE SYSTEMS" as INTERACTION_SEC {
        HARDWARE : OSC / MIDI / Arduino / Firmata
        USER_IN : User Interaction / Gaze

        HARDWARE --> REALTIME : Input Control
        USER_IN --> REALTIME : Input Control
    }


    %% =========================================================
    %% 06. CREATIVE EXPERIENCES (Target Outputs)
    %% =========================================================
    state "06. CREATIVE EXPERIENCES (Outputs)" as OUTPUT_SEC {
        MEDIA_OUT : Final Media
        LIVE_OUT : Live Performance (Ableton / Bitwig / TD / Resolume / rekordbox)
        INSTALLATION_OUT : Physical Installation
        INTERACTIVE_OUT : Interactive Systems
        WEB_OUT : Web Systems & Archive
    }


    %% =========================================================
    %% CROSS-DOMAIN CONNECTIONS & FEEDBACK
    %% =========================================================
    PY --> AI_MODELS : AI Model Control / Automation
    JS_TS --> WEB_OUT : Web App Logic

    RENDER --> POST
    AUDIO_BUS --> LIVE_OUT
    REALTIME --> LIVE_OUT

    POST --> MEDIA_OUT
    REALTIME --> INSTALLATION_OUT
    REALTIME --> INTERACTIVE_OUT
    P5 --> WEB_OUT : Canvas Preview / Web Visuals
