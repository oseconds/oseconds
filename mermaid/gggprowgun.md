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
    %% 02. AUDIO PIPELINE
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
    %% 04. GENAI & MEDIA PIPELINE
    %% =========================================================
    state "04. GENAI & MEDIA PIPELINE" as GENAI_MEDIA_SEC {
        AI_MODELS : FLUX / SD / Seedance / Kling / H3
        COMFY : ComfyUI Workflows
        POST : After Effects / PS / Topaz

        AI_MODELS --> COMFY
        COMFY --> POST : AI Generated Media
    }


    %% =========================================================
    %% 05. INTERACTIVE & HARDWARE
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
        LIVE_OUT : Live (Ableton / TD / Resolume / rekordbox)
        INSTALLATION_OUT : Physical Installation
        INTERACTIVE_OUT : Interactive Systems
        WEB_OUT : Web (Void-a Archive)
    }


    %% =========================================================
    %% PIPELINE CONNECTIONS & AI FEEDBACK LOOPS
    %% =========================================================

    %% Code & Models
    JS_TS --> WEB_VIS
    PY --> AI_MODELS

    %% Render & GenAI to Visual/System Inputs (핵심 루프)
    RENDER --> POST
    COMFY --> TD : GenAI Media as Visual Input (TD Texture)
    COMFY --> PROMPT_ENGINE : GenAI Output as System Prompt / Control
    
    state "Prompt / System Feed" as PROMPT_ENGINE {
        SYS_PROMPT : Text / Parameter Feed
    }
    
    PROMPT_ENGINE --> AI_MODELS : Recursive Prompt / Iteration
    COMFY --> WEB_VIS : Web Texture / Asset

    %% Audio & Visual to Live
    AUDIO_BUS --> LIVE_OUT
    REALTIME --> LIVE_OUT

    %% Final Outputs Flow
    POST --> MEDIA_OUT
    REALTIME --> INSTALLATION_OUT
    REALTIME --> INTERACTIVE_OUT
    WEB_VIS --> WEB_OUT
